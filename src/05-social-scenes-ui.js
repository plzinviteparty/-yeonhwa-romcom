function socialRecord(p){const v=initSim();v.social=v.social||{};return v.social[p]||(v.social[p]={contact:false,interest:0,friendship:0,contactAskedDay:0})}
const invitationScripts={"공재희":["지금 시간 있어요? 좀 더 놀아요.","재희와 나란히 앉아 게임 이야기를 했다.","아 재밌다ㅋㅋ","벌써 가요? 좀만 더 있지."],"서이준":["지금 바빠요? 아니면 잠깐 걸을래요?","나란히 동네를 걷다가 조용한 곳에 멈췄다.","조용해서 좋네요. 둘이 걸어도 생각보다 안 시끄럽고.","…다음에도 같이 걸어요. 싫으면 말고요."],"강도윤":["시간 괜찮으시면 잠깐 같이 쉬어요. 커피는 제가 내릴게요.","강도윤과 마주 앉아 음료를 마셨다.","이렇게 앉아서 이야기하니까 좋네요.","시간이 벌써 이렇게 됐어요? 조금만 더 있다 가면 안 되나. ……농담 아니에요."],"한시우":["지금 시간 있어요? 저랑 잠깐 놀아요!","한시우와 장난을 주고받으며 시간을 보냈다.","와, 같이 있으니까 시간 진짜 빨리 가네요.","오예! 다음에도 저랑 놀아 주기예요?"],"정태오":["시간 괜찮으시면 잠시 이야기를 나누고 싶습니다.","정태오와 잠시 앉아 일상 이야기를 나눴다.","이렇게 쉬는 것도 나쁘지 않군요.","다음에도 뵐 수 있으면 좋겠...... 좋겠습니다."],"백지한":["이대로 헤어지기엔 좀 아쉽지 않아요? 잠깐 같이 쉴래요?","백지한과 한적한 곳에서 이야기를 나눴다.","이렇게 편하게 이야기할 수 있는 사람이 흔하진 않거든요.","어라. 제가 먼저 아쉬워할 줄은 몰랐는데."],"임하나":["...... 있잖아요. 시간 괜찮으시면 조금 더 이야기할래요?","임하나와 나란히 앉아 소소한 이야기를 나눴다.","저도 이렇게 편하게 이야기하는 거 좋아해요.","...... 다음에도 먼저 말 걸어도 될까요?"],"차유리":["오늘 시간 괜찮아요? 조금 더 같이 있지 않을래요?","차유리와 주변 풍경을 구경하며 이야기를 나눴다.","같이 있으니까 별것 아닌 것도 재밌네요.","다음엔 어디 가고 싶어요? 같이 정해 볼까요?"],"오세린":["시간 괜찮으면 잠깐 차라도 같이 마실래요?","오세린과 차를 마시며 하루 이야기를 나눴다.","으음, 이렇게 여유롭게 쉬는 시간도 필요하죠.","오늘은 저도 마음이 한결 편해졌어요."],"유지안":["예쓰! 오늘 시간 좀 남는데 같이 놀다 갈래요?","유지안과 가벼운 이야기를 나누며 쉬었다.","와우, 이야기하다 보니까 시간 순삭이네요!","다음에도 같이 놀아요. 약속!"]};
function renderInvitation(ev,p){if(platonicOnly(p))return false;const v=initSim(),s=socialRecord(p),a=invitationScripts[p];if(!a||ev.jobEvent||ev.weatherScene||!v.running||v.running.plan[v.running.slot]!=='자유외출')return false;if(!ev.inviteChecked){ev.inviteChecked=true;const learned=relationshipRecall(p,v.day);if(relationshipTier(p)>=2&&ev.response&&ev.delta>=0&&v.energy>=10&&(!s.lastInvite||v.day-s.lastInvite>=7)&&Math.random()<(p==='임하나'&&learned.agreement&&learned.kind===0?.75:relationshipTier(p)>=3?.55:.32)){ev.invite=true;s.lastInvite=v.day}save()}if(!ev.invite)return false;const learned=relationshipRecall(p,v.day);add(p,p==='임하나'&&learned.agreement&&learned.kind===0?relationshipRecallVoices[p][1]:a[0]);if(!ev.inviteAnswer){for(const [label,k] of [['좋아요. 같이 시간을 보내요.',1],['저도 둘이 있고 싶었어요.',2],['오늘은 어렵겠어요. 다음에 봐요.',3]])choiceButton(label,()=>{if(ev.inviteAnswer)return;ev.inviteAnswer=k;if(k!==3){v.energy=Math.max(0,v.energy-5);if(k===2)s.interest++;else s.friendship++;}save();renderChoiceEvent();renderSim()});return true}add(state.name,['','좋아요. 같이 시간을 보내요.','저도 둘이 있고 싶었어요.','오늘은 어렵겠어요. 다음에 봐요.'][ev.inviteAnswer],true);if(ev.inviteAnswer===3){add(p,personalSocialVoice[p][7]);return false}add('이야기',a[1]);add(p,a[2]);const opts=['저도 즐거웠어요.','다음에도 둘이 만나고 싶어요.','오늘은 이만 돌아갈게요.'];if(!ev.inviteEnd){opts.forEach((label,i)=>choiceButton(label,()=>{if(ev.inviteEnd)return;ev.inviteEnd=i+1;s.lastTogether=v.day;const before=v.affection[p]||0;v.affection[p]=Math.min(999,before+[3,4,1][i]);ev.inviteGain=v.affection[p]-before;if(i===1)s.interest++;writeJournal(p+' · 함께 보낸 시간');save();renderChoiceEvent();renderSim()}));return true}add(state.name,opts[ev.inviteEnd-1],true);add(p,ev.inviteEnd===2?a[3]:personalSocialVoice[p][ev.inviteEnd===1?8:9]);if(ev.inviteGain)add('시스템',p+' 호감도 +'+ev.inviteGain);return false}
const farewellLines={"공재희":["벌써요?","잠깐만. 좀 더 있다 가면 안 돼요?","웅ㅋㅋ 좋다.","ㅇㅋ. 다음에 봐요."],"서이준":["…벌써 가요?","잠깐만요. 급한 일 있어요? 없으면 좀 더 있다 가요.","…내가 사람 붙잡고 있을 줄은 몰랐네.","그래요. 조심히 가요."],"강도윤":["어라, 오늘은 인사만 하고 가시는 거예요?","잠깐만요. 저랑 조금만 더 이야기하다 가시면 안 돼요?","하하. 괜히 아쉬워서 그랬어요. 오늘은 제가 좀 욕심을 냈네요.","그럼 다음에 봐요. 조심히 가시고요."],"한시우":["엥, 벌써 가요?","잠깐! 저 아직 할 얘기 있는데. 조금만 더 놀다 가면 안 돼요?","히히. 사실 그냥 더 보고 싶었어요.","오케이! 다음에 봐요."],"백지한":["오늘은 제가 좀 재미없었나 봐요?","잠깐, 이렇게 보내기엔 제가 좀 아쉬운데요. 시간 조금만 더 주실래요?","이거 참. 제가 붙잡는 쪽이 될 줄은 몰랐네요.","좋아요. 다음에는 제가 먼저 연락할게요."],"정태오":["이제 돌아가십니까?","…시간이 괜찮으시다면 잠시 더 함께하고 싶습니다.","감사합니다. 제가 먼저 부탁드리는 건 좀 어색하군요.","알겠습니다. 조심히 돌아가십시오."],"임하나":["아…… 오늘은 바쁘신가 봐요.","저기, 혹시 조금만 더 이야기해도 될까요?","다행이다…… 저만 아쉬운 줄 알았어요.","네. 다음에 또 봐요."],"차유리":["오늘은 여기까지예요?","시간 남으면 조금 더 이야기하고 가요. 바쁘면 다음에 보고요.","좋아요. 아까 하던 이야기 마저 해요.","좋아요. 각자 할 일 하고 또 봐요."],"오세린":["벌써 시간이 이렇게 됐네요.","괜찮으시면 잠시 더 함께할까요?","후후. 조금 더 이야기할 수 있어서 좋네요.","네. 남은 하루도 잘 보내세요."],"유지안":["와, 벌써 가는 거예요?","잠깐만요! 조금 더 같이 있고 싶은데, 시간 괜찮아요?","좋아요! 사실 말할까 말까 고민했거든요.","오케이! 다음에 또 만나요."]};
const abruptDepartureVoices={
 백지한:['지한이 미소를 지은 채 짧게 숨을 들이켰다.','벌써요? 아까까진 재밌는 줄 알았는데. 제가 뭘 놓쳤어요? 시간 괜찮으면 조금만 더 있어요.','좋아요. 아까 얘기부터 마저 해요. 제가 너무 앞서갔네요.','그래요. 괜히 혼자 짐작하진 않을게요. 조심히 가요.'],
 강도윤:['도윤이 입을 열었다 닫고, 내리려던 손을 무릎에 얹었다.','잠깐만요. 제가 얘기를 너무 많이 했나 싶어서요. 괜찮으면 아까 하던 얘기 조금만 더 들려줄래요?','아, 다행이다. 이번엔 제가 들을게요. 아까 어디까지 했죠?','알겠어요. 오늘은 먼저 가 봐요. 다음에 보면 아까 얘기 마저 들어도 되죠?'],
 서이준:['이준이 보내 주려는 듯 고개를 끄덕였다가 뒤늦게 입을 열었다.','…잠깐만요. 제가 좀 건성으로 대답했어요? 아니면, 한마디만 더 하고 가요. 아까 그 얘기 궁금했어요.','…그럼 조금만 더 있어요. 아까 대답이 짧았어도 듣고 있었어요.','…알겠어요. 급한 거면 먼저 가요. 방금 말은 다음에 들어도 되니까.'],
 공재희:['재희가 웃으려다 눈을 한 번 깜빡였다.','어, 벌써 가요? 제가 방금 뭐 이상한 말 했어요? …아니면 조금만 더 얘기하고 가면 안 돼요?','아, 좋다. 아까 말 끊겼잖아요. 그거 마저 들려줘요.','알겠어요. 아까 그 얘기 나중에 생각나면 이어서 해 줘요.'],
 임하나:['하나가 소매 끝을 만지다가 조심스럽게 고개를 들었다.','저… 혹시 제가 대답을 너무 늦게 했어요? 아까 무슨 말 할지 고르고 있었거든요. 조금만 더 있어 줄래요?','…고마워요. 저도 지금 답할 수 있을 것 같아요. 아까 하던 얘기부터 해요.','네. 그냥 아까 대답을 못 하고 보내는 게 마음에 걸렸어요. 조심히 가요.']
};
let departureTalkEvent=null;
function canReactToDeparture(ev){
 const p=ev.person;
 return !!abruptDepartureVoices[p]&&!ev.jobEvent&&(vIsDating(p)||relationshipTier(p)>=2);
}
function isAbruptDeparture(text){
 return /^(?:(?:저|나)(?:는|도)?\s+)?(?:(?:그냥|먼저|이만|이제|슬슬|오늘은)\s+)+(?:가\s*(?:볼게(?:요)?|야겠(?:어요|어)|겠어요|요)|갈게(?:요)?|갈래(?:요)?|간다|갑니다|가야지|들어갈게(?:요)?|자리를 뜬다|일어난다)(?:[.!…~\s]|$)/.test(text);
}
function beginAbruptDeparture(ev,label,typed=false){
 if(ev.abruptDeparture||!canReactToDeparture(ev))return false;
 ev.abruptDeparture={label,typed};
 ev.leftEncounter=true;
 writeJournal(ev.person+' · 대화를 마치려 했다');
 save();
 renderChoiceEvent();
 return true;
}
function renderAbruptDeparture(ev){
 const p=ev.person,o=ev.abruptDeparture,[action,question,,leave]=abruptDepartureVoices[p];
 if(!ev.weatherScene)voiceMoment(ev);
 if(ev.selected){add(state.name,ev.selected,true);if(ev.response)add(p,ev.response)}
 for(const [line,response] of ev.departureTalkHistory||[]){add(state.name,line,true,true);add(p,response)}
 add(state.name,o.label,true,o.typed);
 add('이야기',action);
 add(p,question);
 if(o.answer){
  add(state.name,o.answer.label,true);
  if(o.answer.stay){
   const day=ev.day??initSim().day,resume=hasFriendTopicOpening(ev)&&!ev.selected;
   const topic=takeFriendTopic(resume?ev:o,p),player=speechRegisterIndex(p,'player',day),npc=speechRegisterIndex(p,'npc',day);
   add('이야기','돌아서던 발을 멈추고 다시 곁에 섰다.');
   if(!resume)add(p,friendStoryLine(topic,p,day));
   if(o.talkAnswer==null){
    topic.answers.forEach((row,i)=>choiceButton(row[player],()=>{
     if(initSim().activeEvent!==ev||o.talkAnswer!=null)return;
     o.talkAnswer=i;save();renderChoiceEvent();renderSim();
    }));
    choiceButton('이야기를 듣고 인사를 나눈다',finishEvent);
    return;
   }
   const row=topic.answers[o.talkAnswer];
   add(state.name,row[player],true);add(p,row[2+npc]);
  }else add(p,leave);
  choiceButton('일정 계속하기',finishEvent);
  return;
 }
 const options=[['조금 더 얘기하다 갈게요.',true],['오늘은 먼저 가야 해요. 다음에 이어서 얘기해요.',false]];
 for(const [label,staying] of options)choiceButton(label,()=>{
  if(o.answer)return;
  o.answer={label,stay:staying};
  ev.answered=true;
  ev.leftEncounter=!staying;
  if(staying)feel(p,{security:2,longing:-2});
  remember(p,'departure:'+initSim().day,label);
  save();
  renderChoiceEvent();
  renderSim();
 });
}
function farewellReaction(ev,p,label){const v=initSim(),s=socialRecord(p);if(ev.jobEvent||!p||v.affection[p]<25||!(/인사한다|인사만|말을 걸지 않고|조심히 들어가세요|오늘 즐거웠어요/.test(label)))return;const strong=v.affection[p]>=60&&s.interest>=5;const last=s.farewellDay||0;if(last&&v.day-last<3)return;const a=farewellLines[p];ev.farewell={line:strong?a[1]:a[0],strong};s.farewellDay=v.day;if(strong)s.farewellMisses=(s.farewellMisses||0)+1}
function renderFarewell(ev,p){if(!ev.farewell)return false;const v=initSim(),s=socialRecord(p),a=farewellLines[p],f=ev.farewell;add(p,f.line);if(f.answer){add(state.name,f.answer.label,true);add(p,f.answer.reply);return false}if(!f.strong)return false;for(const [label,reply,stay] of [['조금 더 이야기하고 갈게요.',a[2],true],['오늘은 먼저 갈게요. 다음에 봐요.',a[3],false]])choiceButton(label,()=>{if(f.answer)return;f.answer={label,reply};if(stay){s.farewellMisses=0;s.interest++;v.affection[p]=Math.min(999,v.affection[p]+2)}save();renderChoiceEvent();renderSim()});return true}
function renderCrossQuestion(ev){const v=initSim(),p=ev.person;$('progress').textContent='개인 이야기 · 지난번 편의점';add('이야기',p==='서이준'?'한시우의 이름이 나오자 이준이 잠시 말을 멈췄다. 지난번 편의점에서 보았던 표정이 떠올랐다.':'이준의 이름을 듣자 시우의 웃음이 조금 어색해졌다.');if(ev.crossDeferred){add(state.name,'다른 이야기를 한다.',true);choiceButton('일정 계속하기',finishEvent);return}choiceButton(p==='서이준'?'혹시 시우 씨랑 무슨 일 있었어요?':'혹시 이준 씨랑 무슨 일 있었어요?',()=>{if(ev.crossAsked||ev.crossDeferred)return;ev.crossAsked=true;save();renderChoiceEvent()});choiceButton('다른 이야기를 한다.',()=>{if(ev.crossAsked||ev.crossDeferred)return;ev.crossDeferred=true;v.crossDeferredDays=v.crossDeferredDays||{};v.crossDeferredDays[p]=v.day;save();renderChoiceEvent()})}
function renderCrossIntro(ev){const v=initSim();$('progress').textContent='교차 이야기 · 어색한 인사';add('한시우','……안녕하세요, 형.');add('서이준','네.');add('한시우','요즘 잘 지내시죠?');add('서이준','뭐, 그렇죠.');add('이야기','한시우가 어색하게 웃었다. 서이준은 냉장고에서 음료를 꺼냈다.');if(ev.answered){add(state.name,ev.selected,true);for(const [p,line] of ev.crossReplies)add(p,line);choiceButton('일정 계속하기',finishEvent);return}for(const [label,replies] of [['두 사람에게 반갑게 인사한다.',[['한시우','어, 왔어요? 뭐 사러 왔어요?'],['서이준','안녕하세요.']]],['두 분은 원래 아는 사이예요?',[['한시우','아, 예전에 몇 번 뵀어요.'],['서이준','네. 그 정도예요.']]],['모른 척하고 물건을 고른다.',[['이야기','두 사람은 별다른 말을 나누지 않고 각자 계산대로 향했다.']]]])choiceButton(label,()=>{if(ev.answered)return;ev.answered=true;ev.selected=label;ev.crossReplies=replies;v.ijunSiwooIntro={day:v.day,choice:label};remember('서이준','cross-store','한시우와 어색하게 인사하는 모습을 봄');remember('한시우','cross-store','서이준과 어색하게 인사하는 모습을 봄');writeJournal('교차 이야기 · 서이준과 한시우의 어색한 인사');save();renderChoiceEvent()})}
function renderJaeheeGift(ev){const v=initSim();$('progress').textContent='공재희 · 흰색 곰인형';add('이야기','집게에 매달린 흰색 곰인형이 경품 출구로 떨어졌다. 재희가 인형을 꺼내 당신에게 내밀었다.');add('공재희','이거 가져요. 나 집에 인형 너무 많아서.');if(ev.answered){add(state.name,ev.selected,true);add('공재희',ev.response);choiceButton('일정 계속하기',finishEvent);return}for(const [label,reply,n] of [['고마워요. 잘 간직할게요.','웅ㅋㅋ 잃어버리지 마요.',3],['볼 때마다 재희 씨 생각나겠네요.','뭐야. ……그럼 더 잘 보이는 데 둬요.',4]])choiceButton(label,()=>{if(ev.answered)return;ev.answered=true;ev.selected=label;ev.response=reply;v.jaeheeBear={day:v.day,name:'흰색 곰인형'};remember('공재희','claw-bear','흰색 곰인형을 선물함');v.affection['공재희']=Math.min(999,v.affection['공재희']+n);if(n===4)socialRecord('공재희').interest++;writeJournal('공재희에게 흰색 곰인형을 받았다.');save();renderChoiceEvent();renderSim()})}
function renderJaeheeIntro(ev){const v=initSim();$('progress').textContent='첫 만남 · 공재희';add('공재희','아싸ㅋㅋ 또 뽑았어.');add('공재희','왜요? 이거 갖고 싶어요?');if(ev.answered){add(state.name,ev.selected,true);add('공재희',ev.response);choiceButton('일정 계속하기',finishEvent);return}for(const [label,reply,score] of [['인형뽑기 진짜 잘하시네요.','그쵸? 나 이거 좀 잘해요ㅋㅋ',3],['저도 뽑는 법 좀 알려 주세요.','어디 봐요. 일단 저 인형부터 노려 봐요.',3],['저 정도면 저도 뽑을 수 있겠는데요?','오? 해 봐요. 궁금한데ㅋㅋ',1]])choiceButton(label,()=>{if(ev.answered)return;ev.answered=true;ev.selected=label;ev.response=reply;v.jaeheeIntro={day:v.day,choice:label,affection:score};v.met['공재희']=true;v.affection['공재희']=score;v.talkCount['공재희']=1;socialRecord('공재희').lastSeen=v.day;writeJournal('공재희 · 오락실에서 처음 만났다');save();renderChoiceEvent();renderSim()})}
const standingPortraitFiles={
 '공재희':'jaehee','유지안':'jian','차유리':'yuri','오세린':'serin','임하나':'hana',
 '정태오':'taeo','백지한':'jihan','한시우':'siwoo','강도윤':'doyun','서이준':'ijun'
};
const unavailablePortraits=new Set();
function setStoryStanding(person){
 const frame=$('storyStanding'),scene=$('storyScene'),file=standingPortraitFiles[person];
 if(!file||unavailablePortraits.has(person)){
  frame.hidden=true;
  delete frame.dataset.person;
  delete scene.dataset.person;
  scene.classList.remove('has-standing');
  return;
 }
 if(!frame.hidden&&frame.dataset.person===person)return;
 frame.dataset.person=scene.dataset.person=person;
 $('standingName').textContent=person;
 $('standingZoom').setAttribute('aria-label',person+' 반신 일러스트 크게 보기');
 const img=$('standingPortrait');
 if(img.dataset.person!==person){
  img.dataset.person=person;
  img.src='assets/portraits/'+file+'.webp';
 }
 frame.hidden=false;
 scene.classList.add('has-standing');
}
$('standingPortrait').addEventListener('error',()=>{
 const person=$('standingPortrait').dataset.person;
 unavailablePortraits.add(person);
 if($('storyStanding').dataset.person===person)setStoryStanding(null);
});
$('standingZoom').addEventListener('click',()=>{
 const person=$('storyStanding').dataset.person;
 if(!standingPortraitFiles[person])return;
 const dialog=$('standingDialog');
 dialog.dataset.person=person;
 $('standingTitle').textContent=person;
 $('standingDetail').src=$('standingPortrait').src;
 if(!dialog.open)dialog.showModal();
});
$('standingClose').addEventListener('click',()=>$('standingDialog').close());
const sceneIllustrations={
 autumnRiver:{file:'assets/autumn-river.webp',alt:'노을이 저문 연화천에 가로등과 단풍이 비치는 저녁 산책로'},
 autumnLodge:{file:'assets/autumn-lodge.webp',alt:'단풍이 보이는 숙소 창가와 따뜻한 조명 아래 찻잔 두 개'},
 summerBeach:{file:'assets/summer-beach.webp',alt:'여름휴가 바닷가에 파스텔빛 노을과 잔잔한 파도가 밀려오는 풍경'},
 yeonhwaRiverSunset:{file:'assets/yeonhwa-river-sunset.webp',alt:'녹음이 우거진 연화천 산책로와 다리 아래로 노을이 비치는 풍경'}
};
function storyIllustration(ev,day,slot){
 if(ev.alleyDate)return null;
 const trip=ev.tripScene;
 if(trip){
  // Keep the beach CG on the beach; hide it when the story moves indoors to the lodge.
  if(trip.season===1){
   if(trip.stage===2)return 'summerBeach';
   if(trip.stage===1){
    const outdoorScenes=trip.departureSlot===3?1:2;
    return (trip.steps?.length||0)<outdoorScenes&&!trip.answer?'summerBeach':null;
   }
  }
  if(trip.season===2&&trip.stage===1&&(trip.steps?.length>=2||trip.answer))return 'autumnLodge';
  return null;
 }
 const riverside=ev.place==='river'||ev.venue==='연화천 산책';
 const season=seasonInfo(day).index;
 if(riverside&&season===2&&slot===3)return 'autumnRiver';
 // The photo-based summer river illustration is for clear, green riverside afternoons and sunsets.
 if(riverside&&season<=1&&(slot===2||slot===3)&&weatherFor(day).name!=='눈')return 'yeonhwaRiverSunset';
 return null;
}
function illustrationFigure(id){
 const {file,alt}=sceneIllustrations[id],figure=document.createElement('figure'),img=document.createElement('img');
 figure.className='scene-art';
 img.alt=alt;
 img.width=1280;
 img.height=640;
 img.decoding='async';
 img.addEventListener('error',()=>{figure.hidden=true},{once:true});
 img.src=file;
 figure.append(img);
 return figure;
}
function renderStoryIllustration(id){
 const root=$('storyArt');
 $('storyScene').classList.toggle('has-backdrop',!!id);
 if(root.dataset.illustration===(id||''))return;
 root.dataset.illustration=id||'';
 root.replaceChildren();
 root.hidden=!id;
 if(id)root.append(illustrationFigure(id));
}
function travelSceneLocation(ev){
 const trip=ev.tripScene;
 if(!trip)return null;
 const season=trip.season??1;
 const base=['벚꽃 소도시','여름 바닷가','가을 단풍 여행지','겨울 온천 마을'][season]||'여행지';
 if(trip.stage===2)return base+' · 여행의 아침';
 const step=trip.steps?.length||0;
 const outdoorScenes=(trip.departureSlot??0)===3?1:2;
 if(ev.coupleChapter||trip.lodging||trip.night||step>=outdoorScenes)return base+' · 숙소';
 return base+(step===0?' · 도착':' · 여행 중');
}
function renderStoryParticipants(ev){
 const names=ev?.triangle?[ev.triangle.lover,ev.triangle.other]:
  ev?.crushMeeting?[ev.crushMeeting.lover,ev.crushMeeting.friend]:
  ev?.crossIntro?['서이준','한시우']:
  ev?.groupPartners||ev?.group?.people||ev?.tripScene?.people||[ev?.person];
 const participants=[...new Set(names.filter(p=>people.includes(p)))];
 const label=$('storyParticipants');
 label.textContent=participants.length?'함께 있는 사람 · '+participants.join(' · '):'';
 label.hidden=!participants.length;
}
function renderChoiceEvent(){setStoryStanding(null);departureTalkEvent=null;const v=initSim(),ev=v.activeEvent;if(!ev)return;
if(ev.newConfession&&(!ev.offerState||ev.offerState.stage==='ask')&&!v.running&&dateBook()[v.day]?.trip){
 v.activeEvent=null;
 save();
 playDay();
 return;
}renderStoryIllustration(storyIllustration(ev,ev.day??v.day,v.slot));
renderStoryParticipants(ev);
const p=ev.person,loc=locations.find(x=>x.id===ev.place);$('where').textContent=travelSceneLocation(ev)||(loc?loc.name:'연화동');$('clock').textContent='DAY '+v.day+' · '+dayLabels[v.slot||0]+(ev.tripScene?' · 여행 중':' · '+weatherFor(v.day).icon+' '+weatherFor(v.day).name);$('progress').textContent=p?'만남 · '+p:'생활 이벤트';$('log').innerHTML='';$('suggest').innerHTML='';$('next').classList.add('hide');const opening=ev.person&&['park','river'].includes(ev.place)&&!ev.dateEvent&&!ev.summerNight&&!ev.personalStory&&!ev.group&&!ev.groupPartners&&!ev.weatherScene&&!ev.careerEvent&&!ev.birthdayParty?arrivalText(ev.place,ev.person):ev.description;
let intro=ev.personalStory ? ev.personalStory.intro || personalStoryData[p]?.find(story=>story.title===ev.personalStory.title)?.intro || opening : opening;
if(!ev.answered&&!ev.personalStory&&!ev.dateEvent&&familiarEncounter(p)&&intro){
 const prior=ev.place==='cafe'&&p==='강도윤'&&intro.endsWith('일을 마치자 강도윤이 카운터에서 고개를 들었다.')?'일을 마치자 강도윤이 카운터에서 고개를 들었다.':npcArrival[p];
 if(prior&&intro.endsWith(prior))intro=intro.slice(0,-prior.length)+familiarEncounterLine(ev.place,p,ev.day??v.day,ev.slot??v.slot??0);
}
// A booked date provides an early chance to talk without consuming or cancelling that date.
if((ev.dateEvent||ev.sharedLife)&&!ev.everydayBookingChecked&&vIsDating(p)){
 ev.everydayBookingChecked=true;
 const x=everydayIssue(p);
 if(x&&['cooling','space'].includes(x.status)){
  ev.everydayArgument={mode:'booking',issueDay:x.day,exit:x.exit,onBooking:true,resumed:x.status==='space'};
  save();
 }
}
if(!ev.everydayArgument&&!ev.contactFollowup&&!ev.coupleIssue&&intro?.trim())add('이야기',intro);
if(ev.weatherScene)add(p,ev.weatherScene.line);switchTab('story');
if(ev.everydayArgument){renderEverydayArgument(ev);return}if(ev.doorVisit){renderDoorVisit(ev);return}if(ev.jihanScene){renderJihanScene(ev);return}if(ev.surpriseVisit){renderSurpriseVisit(ev);return}if(ev.anniversary){renderAnniversary(ev);return}if(ev.tripScene){renderTrip(ev);return}if(ev.sharedLife){renderSharedLife(ev);return}if(ev.nicknameScene){renderNickname(ev);return}if(ev.crushMeeting){renderCrushMeeting(ev);return}if(ev.friendCrush){renderFriendCrush(ev);return}if(ev.friendScene){renderFriendScene(ev);return}if(ev.npcLifeSupport){renderNpcLifeSupport(ev);return}if(ev.contactFollowup){renderContactFollowup(ev);return}if(ev.professionStory){renderProfessionStory(ev);return}if(ev.volunteerEvent){renderVolunteer(ev);return}if(ev.professionEvent){renderProfession(ev);return}if(ev.developmentEvent){renderDevelopment(ev);return}if(ev.exMemory){renderExMemory(ev);return}if(ev.exBelonging){renderExBelonging(ev);return}if(ev.exAddress){renderExAddress(ev);return}if(ev.npcBreakup){renderNpcBreakup(ev);return}if(ev.exAfter){renderExAfter(ev);return}if(ev.exTalk){renderExTalk(ev);return}if(ev.multiDiscussion){renderMultiDiscussion(ev);return}if(ev.newConfession){renderNewConfession(ev);return}if(ev.breakup){renderBreakup(ev);return}if(ev.groupPartners){renderGroupDate(ev);return}if(ev.aftermath){renderAftermath(ev);return}if(ev.triangle&&!ev.dateEvent){if(renderTriangle(ev))return;choiceButton('일정 계속하기',finishEvent);return}if(ev.coupleIssue){renderCoupleIssue(ev);return}if(ev.coupleMorning){renderCoupleMorning(ev);return}if(ev.summerNight){renderSummerNight(ev);return}if(ev.speechOffer){renderSpeechOffer(ev);return}if(ev.flirtScene){renderFlirt(ev);return}if(ev.crossIntro){renderCrossIntro(ev);return}if(ev.jaeheeGift){renderJaeheeGift(ev);return}if(ev.jaeheeIntro){renderJaeheeIntro(ev);return}if(ev.conflictStage){renderConflict(ev);return}if(ev.christmasEvent){renderChristmas(ev);return}if(ev.attachment){renderAttachment(ev);return}if(ev.careerEvent){renderCareerEvent(ev);return}if(ev.birthdayParty){renderBirthdayParty(ev);return}if(ev.festival){renderFestival(ev);return}if(ev.reunion){if(renderReunion(ev))return;choiceButton('일정 계속하기',finishEvent);return}if(ev.dateEvent){showMatchingOnDate(ev);renderDateEvent(ev);return}if(ev.personalStory){renderPersonalStory(ev);return}if(ev.group){const g=ev.group;$('progress').textContent='함께하는 만남 · '+g.people.join(' · ');for(const [who,line] of g.lines)add(who,line);if(ev.answered){add(state.name,ev.selected,true);for(const [who,line] of ev.groupReply)add(who,line);for(const [who,d] of Object.entries(ev.groupDelta))if(d)add('시스템',who+' 호감도 '+(d>0?'+':'')+d);choiceButton('일정 계속하기',finishEvent);return}for(const [label,reply,deltas] of g.options)choiceButton(label,()=>{if(ev.answered)return;ev.answered=true;ev.selected=label;ev.groupReply=reply;ev.groupDelta={};g.people.forEach((who,i)=>{const before=v.affection[who]||0;v.affection[who]=Math.max(0,Math.min(999,before+deltas[i]));ev.groupDelta[who]=v.affection[who]-before;v.talkCount[who]=(v.talkCount[who]||0)+1});writeJournal(g.people.join('·')+' · '+label);renderChoiceEvent();renderSim();save()});return}
if(ev.abruptDeparture){renderAbruptDeparture(ev);return}
if(ev.answered){if(!ev.weatherScene&&!ev.jobEvent)voiceMoment(ev);add(state.name,openingAnswerLabel(ev,ev.selected),true);if(p&&ev.response)add(p,ev.response,false,false,relationshipVoiceStage(p)==='ex'?argumentPortraits[p]?.early:'기본');if(ev.delta)add('시스템',p+' 호감도 '+(ev.delta>0?'+':'')+ev.delta);if(p==='서이준'&&everydayAnswers[p][0].slice(0,2).includes(ev.selected)&&!ev.afterglowMeeting?.answer){
  add('이야기','잠시 아무도 말을 꺼내지 않았다. 이준도 그대로 곁에 머물렀다.');
  choiceButton('일정 계속하기',finishEvent);return;
}if(ev.leftEncounter){choiceButton('일정 계속하기',finishEvent);return}if(p&&renderPartnerComfort(ev,p))return;if(p&&renderAfterglowMeeting(ev,p))return;if(p&&renderRelationshipTouch(ev,p))return;if(p&&renderCoupleHabit(ev,p))return;if(p&&renderPlayfulCouple(ev,p))return;if(p)coupleHabitRecall(ev,p);if(p&&renderSensoryRomance(ev,p))return;if(p&&renderSpontaneousInvite(ev,p))return;if(p&&renderSpontaneousVisit(ev,p))return;if(p&&ev.farewell){if(renderFarewell(ev,p))return;choiceButton('일정 계속하기',finishEvent);return}if(p&&renderInvitation(ev,p))return;
if(canReactToDeparture(ev)){departureTalkEvent=ev;choiceButton('오늘은 이만 가 볼게요.',()=>beginAbruptDeparture(ev,'오늘은 이만 가 볼게요.'))}
choiceButton('일정 계속하기',finishEvent);return}
if(!p){if(ev.careAnswer){add('이야기',ev.carePerson+'의 배려 덕분에 마음이 한결 편해졌다.')}else if(renderCare(ev))return;choiceButton('일정 계속하기',finishEvent);return}
if(!ev.weatherScene&&!ev.jobEvent)voiceMoment(ev);
if(canReactToDeparture(ev))departureTalkEvent=ev;
const options=(ev.answered||ev.optionsVersion===48)&&ev.options?ev.options:(ev.optionsVersion=48,ev.socialAdded=false,ev.options=encounterOptions(ev));if(!ev.weatherScene&&!ev.jobEvent&&relationshipTier(p)>=2&&!ev.socialAdded){ev.socialAdded=true;ev.options=[...options.slice(0,-1),['앞으로도 편하게 지내는 친구가 되고 싶어요.','“'+personalSocialVoice[p][2]+'”',1,'friend'],['다음에는 둘이서 시간을 보내고 싶어요.',{'서이준':'“둘이요? …시간 맞춰 보죠.”','강도윤':'“좋죠. 저도 그러고 싶었어요.”','한시우':'“오, 저야 좋죠. 언제가 좋아요?”','정태오':'“좋습니다. 시간 맞춰 보겠습니다.”','백지한':'“그거 좋은데요? 기대할게요.”','임하나':'“저랑요? …좋아요.”','차유리':'“좋아요! 어디 갈지 생각해 봐요.”','오세린':'“좋아요. 여유 있을 때 만나요.”','유지안':'“좋죠! 둘이서 놀러 가요.”','공재희':'“웅ㅋㅋ 둘이 놀면 더 재밌겠죠?”'}[p],2,'interest'],options[options.length-1]]}
let visibleOptions=ev.options;
const hasOpening=ev.options.at(-1)?.[3]==='leave';
if(hasOpening){
  const directCount=ev.person==='강도윤'&&relationshipVoices[ev.person].slice(0,2).includes(ev.voiceMoment)?3:openingAnswers(ev).length;
  if(ev.moreTopics){
    visibleOptions=ev.options.slice(directCount,-1);
    choiceButton('첫 대답으로 돌아가기',()=>{ev.moreTopics=false;renderChoiceEvent()});
  }else{
    visibleOptions=ev.options.slice(0,directCount);
  }
}
if((!hasOpening||ev.moreTopics)&&npcProfiles[p]?.gender==='남'&&memoryFor(p).address.offerDay&&!ev.group&&!ev.groupPartners&&!ev.jobEvent&&!ev.answered&&!unresolvedOutingConflict(p)&&v.romance[p]!=='ended'){
 choiceButton('부르는 호칭을 다시 의논한다',()=>revisitPlayerAddress(ev));
 $('suggest').lastElementChild.dataset.addressReply='revisit';
}
for(const [label,response,delta,direction] of visibleOptions)choiceButton(openingAnswerLabel(ev,label),()=>{if(ev.answered)return;if((direction==='leave'||label==='말을 걸지 않고 지나간다')&&beginAbruptDeparture(ev,label))return;ev.answered=true;ev.selected=label;ev.leftEncounter=direction==='leave';v.knownFacts=v.knownFacts||{};if(p==='강도윤'&&label==='강아지 이름이 궁금해요.')v.knownFacts.moka=true;v.topicHistory=v.topicHistory||{};const topicKey=p+':'+ev.place;v.topicHistory[topicKey]=[...new Set([...(v.topicHistory[topicKey]||[]),label])];ev.response=response===null?encounterGreeting(p,ev.place):response;farewellReaction(ev,p,label);if(response!=='')v.talkCount[p]=(v.talkCount[p]||0)+1;const key='choice:'+v.day+':'+p+':'+label;let change=v.topicRewards[key]?0:delta;v.topicRewards[key]=true;const before=v.affection[p]||0;v.affection[p]=Math.max(0,Math.min(999,before+change));change=v.affection[p]-before;ev.delta=change;if(direction?.startsWith('hint:')){v.giftHints=v.giftHints||{};const hints=v.giftHints[p]||(v.giftHints[p]=[]);const item=direction.slice(5);if(!hints.includes(item))hints.push(item)}else if(direction&&delta>0){const s=socialRecord(p);if(direction==='friend')s.friendship++;else s.interest++;}ev.expression=change<0?'uncomfortable':change>0?'smile':'neutral';writeJournal(p+' · '+label);renderChoiceEvent();renderSim();save()});
if(hasOpening&&!ev.moreTopics){
  choiceButton('다른 이야기를 꺼낸다',()=>{ev.moreTopics=true;renderChoiceEvent()});
  const [label]=ev.options.at(-1);
  choiceButton(label,()=>{if(ev.answered)return;if(beginAbruptDeparture(ev,label))return;ev.answered=true;ev.leftEncounter=true;ev.selected=label;ev.response='';ev.delta=0;writeJournal(p+' · '+label);save();renderChoiceEvent();renderSim()});
}
}
function visitPlace(place){const v=initSim();if(!v.running||!v.running.outing||v.activeEvent){alert('자유외출 일정이 진행 중일 때 방문할 수 있어요.');return}v.running.outing=false;if(place==='arcade'&&v.slot>0&&!v.jaeheeIntro&&v.day>1){v.running.notes.push(dayLabels[v.slot]+' · 자유외출');v.activeEvent={place:'arcade',person:'공재희',description:'인형뽑기 기계 앞에 분홍색과 검은색 옷을 입은 여자가 서 있다. 발치에는 이미 인형 세 개가 놓여 있다.',jaeheeIntro:true,answered:false};save();renderChoiceEvent();return}const person=meetAt(place,['morning','noon','afternoon','evening'][v.slot]);v.running.notes.push(dayLabels[v.slot]+' · 자유외출');showEvent(place,arrivalText(place,person),person)}
function leaveBook(){const v=initSim();return v.leaveDays||(v.leaveDays={})}
function dateBook(){const v=initSim();return v.datePlans||(v.datePlans={})}
function unresolvedOutingConflict(p){return ['pending','ready'].includes(initSim().conflicts?.[p]?.status)}
function cancelConflictOutings(p){
 const book=dateBook(),v=initSim();
 for(const [day,d] of Object.entries(book)){
  if(Number(day)<v.day||d.p!==p||d.trip||d.group||d.npcLifeSupport!=null)continue;
  delete book[day];
  const note=calendarDate(Number(day)).label+' '+(d.venue||'외출')+' 약속을 취소했다.';
  writeJournal(p+' · '+note);
  const threads=phoneData().threads;
  (threads[p]||(threads[p]=[])).push({day:v.day,booking:true,reply:1,npcLine:calendarDate(Number(day)).label+' 약속은 미룰게요. 지금은 평소처럼 만나기 어려울 것 같아요.'});
 }
}
const regularOutingWeekdays={
 '공재희':[5,6],'강도윤':[0],'오세린':[6],'임하나':[6],'서이준':[5,6],
 '차유리':[5,6],'한시우':[5,6],'정태오':[2,5],'백지한':[6],'유지안':[0]
};
const meetingSlots=[0,1,2,3];
function regularOutingDay(p,day){return !!regularOutingWeekdays[p]?.includes((day-1)%7)}
// Older calendar rules ask specifically whether the usual midday outing is possible.
function dateSlot(p,day){return regularOutingDay(p,day)&&!unresolvedOutingConflict(p)&&!npcLifeBusy(p,day,1)?1:null}
function npcMeetingTime(p,day,slot,allowDistance=false,shortVisit=true){
 if(!meetingSlots.includes(slot)||unresolvedOutingConflict(p)||npcLifeBusy(p,day,slot))return false;
 if(regularOutingDay(p,day))return true;
 if(shortVisit&&p==='공재희'&&(slot===1||slot===2)){
  const place=npcBasePlace(p,(day-1)%7,slot);
  if(!['arcade','cafe','store'].includes(place))return false;
  const mood=touchContext(p,day,allowDistance);
  return !mood.tired&&!mood.conflicted;
 }
 return slot===3&&nightNpcFree(p,day,allowDistance);
}
function validMeetingDay(day){return Number.isInteger(day)&&day>1&&day<365&&day!==299&&day!==300}
function dateBookingSlots(p,day,allowLeave=false,checkBooking=true){
 if(!validMeetingDay(day)||checkBooking&&dateBook()[day])return [];
 return meetingSlots.filter(slot=>{
  const fixed=fixedActivity(day,slot);
  return npcMeetingTime(p,day,slot)&&(!fixed||allowLeave&&fixed==='출근'&&Object.keys(leaveBook()).length<15);
 });
}
function preferredSlot(slots){return slots.includes(1)?1:slots[0]??null}
function confirmDateLeave(day,slot){
 if(fixedActivity(day,slot)!=='출근')return true;
 if(Object.keys(leaveBook()).length>=15||!confirm('연차 1일을 사용해 약속을 잡을까요?'))return false;
 leaveBook()[day]=true;return true;
}
const dateLines={"공재희":["오락실","오늘은 내가 인형 뽑아 줄게요.","인형뽑기 기계 앞에서 함께 웃었다."],'서이준':['영화관','같이 보고 싶은 영화가 있었어요. 재미없어도 제 탓은 하지 말고요.','영화가 끝나고도 이야기가 끊이지 않았다.'],'강도윤':['디저트 투어','오늘은 제가 손님이네요. 같이 맛있는 거 먹어요!','서로 고른 디저트를 나누어 맛보았다.'],'한시우':['오락실','히히, 오늘 여기 온다고 아침부터 들떠 있었어요. 티 나요?','게임을 번갈아 하며 웃었다.'],'정태오':['근교 나들이','오늘은 서두르지 않아도 됩니다.','한적한 길을 함께 걸었다.'],'백지한':['전시회','오늘은 제가 아니라 작품에 집중하셔야 하는데요?','작품 앞에서 서로의 감상을 이야기했다.'],'임하나':['아쿠아리움','...... 있잖아요. 여기 꼭 와 보고 싶었어요.','푸른 수조 앞에서 나란히 멈춰 섰다.'],'차유리':['전시회','와, 이거 같이 보고 싶었어요!','서로 마음에 드는 작품을 골랐다.'],'오세린':['아쿠아리움','어디부터 볼까요? 천천히 둘러봐요.','물고기들이 헤엄치는 모습을 함께 바라보았다.'],'유지안':['놀이공원','예쓰! 오늘은 신나게 놀아요!','놀이기구를 타고 웃으며 시간을 보냈다.']};
const dateConfirmLines={"공재희":["웅ㅋㅋ 그날 비워 둘게요.","헐 나 만나려고 휴가 냈어요?"],"서이준":["좋아요. 그날은 다른 약속 안 잡을게요.","저 만나려고 휴가까지 냈어요? …그럼 대충 보낼 순 없겠네요."],"강도윤":["좋아요! 이번엔 제가 맛있는 곳 찾아볼게요.","저 만나려고 연차까지 쓰셨어요? ……잠깐만요. 이거 제가 생각하는 것보다 더 좋아해도 되는 거죠?"],"한시우":["오예! 그날만 기다릴게요.","와, 연차까지요? 히히. 제대로 놀아야겠는데요?"],"정태오":["알겠습니다. 약속 시간에 맞춰 가겠습니다.","귀한 휴가를 내셨군요. 즐거운 시간이 되도록 준비하겠습니다."],"백지한":["좋아요. 그날은 제 시간도 비워 둘게요.","어라, 저한테 귀한 하루를 써 주시는 거예요? 기분 좋은데요."],"임하나":["...... 있잖아요. 벌써 조금 기대돼요.","저 만나려고 연차까지 내신 거예요? ...... 저도 그날이 정말 기다려져요."],"차유리":["좋아요! 같이 구경할 생각하니까 신나네요.","와, 연차까지요? 그럼 우리 제대로 기분 전환하고 올까요?"],"오세린":["네, 그날 천천히 둘러봐요.","귀한 휴일을 저와 보내시는군요. 무리하지 않고 즐겁게 보내요."],"유지안":["예쓰! 그날 신나게 놀아요.","와우, 연차까지! 그럼 후회 없는 하루로 만들어 볼까요?"]};
const extraDatePlaces={"공재희":["영화관","노래방"],"서이준":["서점","고양이 산책"],"강도윤":["시장 구경","연화천 산책"],"한시우":["보드게임 카페","영화관"],"정태오":["수영장","시장 구경"],"백지한":["건축 산책","레스토랑"],"임하나":["서점","디저트 카페"],"차유리":["소품 공방","사진 산책"],"오세린":["식물원","디저트 카페"],"유지안":["노래방","연화천 산책"]},extraDateScenes={"서점":["서가에서 서로 책을 골랐다.","서로에게 책 한 권을 골라 줄까요?"],"고양이 산책":["골목에서 고양이가 모습을 드러냈다.","어, 오늘은 안 도망가네요."],"시장 구경":["시장 골목에서 갓 구운 간식 냄새가 났다.","저거 하나 사서 나눠 먹을까요?"],"연화천 산책":["강변 벤치에 앉아 물결을 바라보았다.","잠깐 여기 앉았다 갈까요?"],"보드게임 카페":["테이블에 카드와 말이 펼쳐졌다.","이번엔 제가 처음 하는 게임으로 골라요!"],"영화관":["상영 시간표 앞에 섰다.","오늘은 어떤 영화 볼래요?"],"수영장":["수영을 마치고 휴게실에 앉았다.","무리하지는 않으셨습니까?"],"건축 산책":["오래된 건물의 외벽을 올려다보았다.","저 건물, 창문 배치가 꽤 재미있죠?"],"레스토랑":["메뉴판을 사이에 두고 마주 앉았다.","오늘은 뭘 드시고 싶어요?"],"디저트 카페":["진열장에 작은 케이크들이 놓여 있었다.","서로 다른 걸 골라서 나눠 먹을까요?"],"소품 공방":["작업대에 여러 색의 재료가 놓여 있었다.","서로 어울리는 색을 골라 볼까요?"],"사진 산책":["골목에 오후 햇빛이 길게 들어왔다.","여기서 사진 한 장 남길까요?"],"식물원":["온실 안에 초록빛 잎이 가득했다.","마음에 드는 식물을 하나 골라 볼래요?"],"노래방":["노래 목록을 펼쳤다.","첫 곡은 뭐로 할까요?"]},extraDateReplies={"공재희":["오 좋아요ㅋㅋ","웅 천천히 해요.","지난번에도 재밌었는데."],"서이준":["뭘 고를지 좀 궁금하네요.","그럼 천천히 봐요. 시간 많으니까.","지난번에도 시간 참 빨리 가더라고요. 이상하게."],"강도윤":["하하, 오늘은 저도 마음 편하게 골라 볼게요.","그럼 느긋하게 즐겨요.","지난번 헤어지고 나서도 한참 기분이 좋았어요."],"한시우":["오, 좋아요! 해 봐요!","오케이, 오늘은 느긋하게!","지난번에 놀고 나서 또 언제 만나나 했잖아요."],"정태오":["좋습니다. 함께하시죠.","알겠습니다. 편하게 하십시오.","지난번 외출도 즐거웠습니다."],"백지한":["좋죠. 취향을 좀 더 알아볼까요?","그럼 오늘은 여유 있게 가죠.","지난번 이후로 다음 약속을 꽤 생각했거든요."],"임하나":["네. 같이 하면 더 좋을 것 같아요.","네, 천천히 해요.","지난번에 같이 보낸 날이 자꾸 생각났어요."],"차유리":["좋다! 같이 해 봐요.","그럼 편하게 구경해요.","지난번에 같이 놀았던 거 꽤 재밌었잖아요."],"오세린":["아아, 함께하면 좋겠네요.","네, 여유롭게 즐겨요.","지난번 함께 보낸 시간이 참 편안했어요."],"유지안":["예쓰! 같이 해요!","좋죠! 천천히 즐겨요.","지난번에 진짜 재밌었잖아요. 또 만나서 좋네요."]};
const repeatDateLines={"공재희":["오늘은 저번보다 더 놀아요.","방송 말고도 해 보고 싶은 거 생각 중이에요."],"서이준":["지난번엔 좀 긴장했어요. …뭘 그렇게 놀라요?","저도 일 바꿀 때는 익숙한 걸 놓기가 쉽지 않았어요."],"강도윤":["지난번에 헤어질 때 좀 아쉬웠거든요. 오늘은 시간을 넉넉히 비워 뒀어요.","요즘 제가 직접 고른 원두로 가게를 꾸리는 상상을 해요. 아직은 상상이지만요."],"한시우":["지난번에 같이 웃었던 게 아직도 생각나요.","요즘 경기 말고도 잘하는 게 뭔지 생각해 보고 있어요."],"백지한":["지난번엔 제가 좀 긴장했나 봐요. 오늘은 들키지 말아야지.","건물을 소개하다 보면 제가 직접 설계하고 싶었던 때가 생각나요."],"정태오":["지난번보다 편하게 이야기할 수 있을 것 같습니다.","지금 하는 일에도 의미가 있습니다만, 예전 일을 떠올릴 때가 있습니다."],"임하나":["오늘은 먼저 말을 걸어 보고 싶었어요.","요즘은 제 시간을 조금이라도 따로 남겨 보려고 해요."],"차유리":["오늘은 지난번에 못 해 본 것도 해 볼까요?","요즘은 의뢰 말고 제 이름으로 남길 작업을 하고 싶어요."],"오세린":["다시 이렇게 시간을 내니 좋네요.","일을 좋아하지만 일 밖의 시간도 소중하게 쓰고 싶어요."],"유지안":["오늘은 우리 둘 다 더 편해 보이네요!","가끔은 제가 가르치는 무대 말고 직접 서는 무대도 생각나요."]};
const siwooRepeatDateStarts=[
 '지난번에 같이 웃었던 게 아직도 생각나요. 오늘은 어디부터 갈까요?',
 '약속 시간보다 조금 일찍 왔어요. …사실 기다렸거든요.',
 '히히, 오늘 얘기하고 싶은 게 꽤 많아요.',
 '오, 오셨다! 저 오늘은 뭐부터 할지 일부러 안 정했어요.',
 '얼굴 보니까 하루가 좀 좋아졌는데요? 진짜로.'
];
const siwooRepeatDateTalk=[
 '요즘 경기 말고도 제가 좋아하는 게 뭔지 생각해 보고 있어요.',
 '연습 끝나고 쉬는 시간을 더 잘 쓰고 싶어요. 하고 싶은 게 많거든요.',
 '어제 팀원들이랑 간식 고르다 한참 웃었어요. 들으면 웃길걸요.',
 '이렇게 마음 편하게 돌아다니는 날이 은근 기다려져요.'
];
function dateRecall(p,ev){
 const h=dateHistory(p).filter(x=>x.day<ev.day),last=h[h.length-1];if(!last)return;
 const d=ev.day??initSim().day;
 const opening=p==='한시우'?siwooRepeatDateStarts[(d+h.length)%siwooRepeatDateStarts.length]:repeatDateLines[p][0];
 add(p,meetingCall(p,ev,'npc',opening));
 if(last.highlight)add('이야기','지난번 외출에서 나눴던 말이 떠올랐다. 「'+last.highlight+'」');
 if(h.length>=2&&relationshipTier(p)>=3){
  const later=p==='한시우'?siwooRepeatDateTalk[(d+h.length)%siwooRepeatDateTalk.length]:repeatDateLines[p][1];
  add(p,later);
 }
}
function dateMemoryLabel(ev){const s=ev.dateSteps||[];return s[1]?.label||s[0]?.label||''}
function dateHistory(p){const s=socialRecord(p);return s.dateHistory||(s.dateHistory=s.lastDate?[{day:s.lastDate.day,venue:dateLines[p][0]}]:[])}
const homeDateScenes={"서이준":["영화 고르기","이준이 리모컨을 건넸다.","…같이 골라요. 취향 안 맞으면 곤란하니까.","서로 좋아하는 영화 하나씩 볼까요?","두 편이요? …좋아요."],"강도윤":["커피","도윤이 원두 두 봉지를 꺼냈다.","오늘은 같이 내려 볼까요?","저도 한 잔 내려 줄게요.","하하. 제가 얻어 마시는 날도 다 있네요."],"한시우":["협동 게임","시우가 컨트롤러 두 개를 꺼냈다.","이거 혼자 할 때는 막혔는데, 같이 하면 재밌겠다!","막히면 저한테 물어봐요.","히히, 제가 먼저 실수하면 놀리기 없어요!"],"백지한":["LP 한 장","지한이 음반을 펼쳤다.","무슨 음악이 어울릴까요?","지한 씨가 좋아하는 곡부터요.","좋죠. 제 취향도 알아 주세요."],"임하나":["저녁 만들기","하나가 채소를 씻었다.","같이 하니까 재밌네요.","둘 다 먹고 싶은 걸 만들어요.","네. 제가 좋아하는 것도 넣을래요."],"차유리":["각자의 작업","유리가 스케치북을 펼쳤다.","각자 할 거 하다가 가끔 이야기해요.","좋아요. 편하게 작업해요.","오, 이런 거 잘 맞네요."],"오세린":["차 한 잔","세린이 찻잔을 놓았다.","오늘은 시간표 없이 지내 볼까요?","좋아요. 느긋하게 쉬어요.","후후. 좋네요."],"정태오":["집밥","태오가 반찬을 차렸다.","입맛에 맞으실지 모르겠습니다.","이런 식사도 같이 하고 싶었어요.","다음에는 좋아하시는 반찬도 준비하겠습니다."],"유지안":["플레이리스트","지안이 음악을 틀었다.","서로 최애곡 소개해요!","지안 씨 곡부터요.","오케이! 후렴 잘 들어 봐요."],"공재희":["애니와 배달음식","재희가 메뉴 앱을 열었다.","이거 보면서 먹으면 딱인데 ㅋㅋ","같이 골라요.","웅! 오늘 방송 생각 안 하고 놀래요 ㅋㅋ"]};
function homeDateRequirements(p){
 if(vIsDating(p))return [];
 const v=initSim();
 const checks=[
  ['호감도',v.affection[p]||0,closeRelationshipAffection],
  ['대화',v.talkCount[p]||0,closeRelationshipTalks,'회'],
  ['플러팅',flirtRecord(p).interest,6],
  ['일반 외출',Number(dateHistory(p).some(x=>x.venue!=='홈데이트')),1,'회']
 ];
 return checks.filter(([,current,required])=>current<required);
}
function homeDateReady(p){return !platonicOnly(p)&&homeDateRequirements(p).length===0}
function renderRelationshipScores(card,p){
 const score=document.createElement('p');
 score.className='muted-note';
 const {obsession,distrust}=relationshipPressure(p);
 score.textContent='플러팅 지수 '+flirtRecord(p).interest+' · 집착도 '+obsession+'/'+maxRelationshipPressure+' · 불신 '+distrust+'/'+maxRelationshipPressure;
 const home=document.createElement('p');
 home.className='muted-note';
 if(platonicOnly(p)){
  home.textContent='홈데이트 · 친구 관계에서는 열리지 않아요.';
 }else{
  const missing=homeDateRequirements(p);
  home.textContent=missing.length
   ?'홈데이트까지 · '+missing.map(([label,current,required,unit=''])=>label+' '+current+'/'+required+unit).join(' · ')
   :'홈데이트 가능 · 휴대전화에서 외출 장소로 선택';
 }
 card.append(score,home);
}
const homeDateNear={"서이준":["좁은 소파","영화가 시작되자 이준이 어깨가 닿지 않도록 어정쩡하게 앉았다.","…이렇게 앉으면 불편한데. 조금 가까이 가도 돼요?","네. 편하게 앉아요.","…막상 허락받으니까 더 신경 쓰이네요.","어깨 맞대기","저는 조금 떨어져 앉는 게 편해요.","아, 네. 그럼 쿠션 하나 더 가져올게요."],"강도윤":["나란히 앉아서","도윤이 커피잔을 내려놓고 옆자리를 가리켰다.","오늘은 저도 옆에 앉아도 될까요?","그럼요. 여기 앉아요.","하하. 오늘은 정말 쉬는 기분이네요.","어깨 맞대기","맞은편에 앉아 이야기해요.","좋아요. 얼굴 보면서 이야기하는 것도 좋죠."],"한시우":["승리의 하이파이브","게임 화면에 승리 문구가 떴다. 시우가 양손을 들어 올렸다.","와, 우리 합 미쳤다! 하이파이브?","좋아요!","오예! 이 팀 해체 금지입니다.","하이파이브","말로 축하할래요. 잘했어요!","오케이! 이 기세로 쭉 가죠."],"백지한":["소파 한쪽","지한이 소파에 앉아 옆의 빈자리를 두드렸다.","옆에 앉을래요? 손도 잡고 싶은데.","좋아요. 손 줘요.","이렇게 있으니까 영화에 집중하기 좀 어렵겠는데요.","손잡기","오늘은 영화만 볼래요.","좋아요. 영화부터 보죠."],"임하나":["먼저 내민 손","설거지를 끝낸 하나가 수건에 손을 닦고 당신을 바라봤다.","……저, 손 잡아 봐도 돼요? 제가 먼저요.","네. 잡아요.","……생각보다 따뜻하네요. 조금만 더 잡고 있을래요.","손잡기","오늘은 조금 부끄러워요.","아, 네! 괜찮아요. 차 마실까요?"],"차유리":["스케치북 사이","유리가 그림을 보여 주려고 스케치북을 들어 올렸다.","이쪽으로 좀 붙어 볼래요? 여기 디테일 봐요.","좋아요. 같이 봐요.","오, 이렇게 보니까 색 조합 괜찮죠?","어깨 맞대기","여기서도 잘 보여요.","오케이. 그럼 이쪽으로 돌려 줄게요."],"오세린":["따뜻한 담요","세린이 소파 위 담요를 펼쳤다.","같이 덮을까요? 조금 쌀쌀하네요.","좋아요. 같이 덮어요.","아, 따뜻하네요.","담요 함께 덮기","담요 하나 더 가져올게요.","네. 각자 덮으면 더 편하겠네요."],"정태오":["손의 온도","태오가 창문을 닫고 당신을 돌아봤다.","손이 차가워 보입니다. 잠시 잡아 드려도 되겠습니까?","네. 부탁해요.","…조금 따뜻해질 때까지 이대로 있겠습니다.","손잡기","따뜻한 차를 마실래요.","알겠습니다. 물을 끓이죠."],"유지안":["리듬 맞추기","지안이 음악에 맞춰 손을 내밀었다.","우리 이 부분 같이 춰 볼래요? 손 잡아도 돼요?","좋아요. 알려 줘요!","오케이! 틀려도 웃기만 하기!","손잡기","구경하는 게 더 좋아요.","좋아요! 그럼 관객 한 명 확보."],"공재희":["쿠션 대신","재희가 애니를 보다가 쿠션을 내려놓았다.","나 어깨에 기대도 돼요? 쿠션보다 편할 것 같은데 ㅋㅋ","좋아요. 기대요.","헤헤. 여기 좋다.","어깨 기대기","쿠션이 더 편할걸요?","아 그래요? ㅋㅋ 그럼 쿠션 주세요."]};
const homeDateVisit={"서이준":["꺼 두었던 게임","모니터 옆에 오래된 게임 패키지와 정리된 케이블이 보인다.","요즘은 일 때문에 컴퓨터를 더 많이 켜요. 게임은… 가끔 하고요.","오늘은 같이 게임할까요?","…좋아요. 혼자 할 때랑은 좀 다르겠죠.",null,"구경만 해도 좋아요.","그럼 제가 좋아했던 게임부터 보여 줄게요."],"강도윤":["모카의 자리","모카가 현관까지 달려와 꼬리를 흔들었다. 소파 한쪽에는 커다란 개 방석이 있다.","하하, 저보다 먼저 반겨 주네요. 모카가 손님을 좋아해요.","모카랑 같이 놀아도 돼요?","그럼요. 둘이 친해지면 제가 좀 질투할지도 모르겠는데요.",null,"모카가 먼저 다가올 때까지 기다릴게요.","좋아요. 천천히 친해져요."],"한시우":["방송 밖의 시우","책상 위에는 키보드와 손목 보호대, 먹다 남은 과자가 놓여 있다.","아 잠깐만! 과자 봉지 치울 시간은 줘야죠!","평소 모습도 재밌는데요?","와, 이미지 관리 실패다. 그래도 편하니까 좋죠?",null,"같이 정리할까요?","아니에요! 손님한테 노동 시키면 안 되죠."],"백지한":["살고 싶은 집","건축 서적 사이에 작은 평면도 스케치가 끼워져 있다.","가끔 그려요. 실제로 살 집이라면 어떻게 만들까 싶어서.","어떤 집에서 살고 싶어요?","햇빛 잘 들고, 좋아하는 사람이 자주 오는 집이요. 지금처럼.",null,"책 구경해도 돼요?","그럼요. 궁금한 건 물어봐요."],"임하나":["하나만의 시간","책상에 전공 교재와 아르바이트 시간표, 작은 여행 안내서가 놓여 있다.","쉬는 날에 가 보고 싶은 곳을 조금씩 찾아봤어요.","하나 씨가 가고 싶은 곳부터 골라요.","……제 일정만 생각해도 되는 거죠? 그럼 여기요.",null,"여행 안내서 예쁘네요.","네. 보고 있으면 기분이 좋아져요."],"차유리":["미완성의 그림","작업대에 마르지 않은 그림과 색을 시험한 종이가 널려 있다.","이건 아직 완성 안 했어요. 남한테 보여 주는 건 좀 오랜만이네.","완성되면 다시 보고 싶어요.","좋아요. 근데 재촉은 금지예요. ㅎㅎ",null,"작업 중인 건 안 볼게요.","오, 고마워요. 완성하면 보여 줄게요."],"오세린":["퇴근 후의 시간","책장에는 소설과 수의학 서적이 섞여 있고 창가에는 작은 화분이 놓여 있다.","집에서는 병원 생각을 조금 내려놓으려고 해요.","오늘은 세린 씨가 하고 싶은 걸 해요.","으음, 그럼 그냥 같이 책 읽을까요?",null,"화분 구경해도 될까요?","그럼요. 저 잎이 최근에 새로 났어요."],"정태오":["정돈된 현관","현관에 운동화와 봉사활동용 장갑이 가지런히 놓여 있다.","집에 사람을 초대하는 일이 드물어서 조금 어색합니다.","편하게 있어도 돼요. 저도 편하게 있을게요.","…알겠습니다. 그럼 평소처럼 차부터 준비하죠.",null,"집이 깔끔하네요.","습관입니다. 편하게 앉으십시오."],"유지안":["거울 앞의 일상","전신 거울 옆에 연습용 운동화와 오래된 공연 사진이 놓여 있다.","여기서 안무 연습해요. 층간소음 때문에 발은 살살!","요즘 연습하는 거 보여 줘요.","좋아요! 근데 박수는 필수예요.",null,"사진 이야기 들려줘요.","아, 이거요? 그날 진짜 떨렸어요."],"공재희":["방송이 꺼진 방","방송 장비 옆에 분홍색 인형과 헤드셋이 놓여 있다.","오늘 방송 안 켤 거예요. 채팅창 말고 사람 보고 싶어서.","오늘은 나랑 놀아요.","웅. 오늘은 알림도 꺼 놓을래요 ㅋㅋ",null,"장비 구경해도 돼요?","웅! 이 마이크는 제가 직접 골랐어요."]};
const homeDateAffection={"서이준":["영화가 끝난 뒤","이준이 엔딩 크레딧이 끝날 때까지 리모컨을 만지작거렸다.","…저, 입 맞춰 봐도 돼요? 싫으면 말해요.","네. 좋아요.","……잠깐만요. 생각보다 많이 떨리네요. 그래도 좋았어요.","입맞춤"],"강도윤":["잠깐의 휴식","도윤이 빈 잔을 내려놓고 양팔을 조금 벌렸다.","오늘은 제가 좀 안겨도 될까요?","그럼요. 이리 와요.","하하. 조금만 더 이러고 있을게요.","포옹"],"한시우":["게임 종료","시우가 게임을 끄고 당신을 바라봤다.","와, 게임보다 지금이 더 긴장되는데. 안아 봐도 돼요?","좋아요. 안아 봐요.","아 진짜, 심장 박동 기록 갱신했네 ㅋㅋ","포옹"],"백지한":["가까운 거리","지한이 음악 소리를 낮추고 당신과 눈을 맞췄다.","저 지금 입 맞추고 싶은데. 괜찮아요?","네. 저도요.","좋네요. 한 번으로 끝내기 아쉬울 만큼.","입맞춤"],"임하나":["작은 용기","하나가 한참 망설이다 당신 쪽으로 몸을 돌렸다.","……저, 오늘은 제가 먼저 입 맞춰도 돼요?","네. 기다리고 있을게요.","……한 번 더 하고 싶다고 하면 너무 욕심인가요?","입맞춤"],"차유리":["작업을 마치고","유리가 연필을 내려놓고 기지개를 켰다.","오늘 같이 있으니까 좋았어요. 잠깐 안아도 돼요?","좋아요.","오, 충전 완료. ㅎㅎ","포옹"],"오세린":["조용한 오후","세린이 책을 덮고 당신에게 미소 지었다.","잠시 안고 있어도 괜찮을까요?","네. 좋아요.","이렇게 마음이 편안해지는 순간이 참 좋네요.","포옹"],"정태오":["망설임 끝에","태오가 말을 꺼내려다 잠시 숨을 골랐다.","실례가 아니라면… 안아 드려도 되겠습니까?","네. 안아 주세요.","…감사합니다. 저도 마음이 놓이는군요.","포옹"],"유지안":["음악이 멈춘 순간","지안이 노래를 끄고 활짝 웃었다.","오늘 너무 좋았어요! 안아도 돼요?","당연하죠!","와, 오늘 진짜 행복하다!","포옹"],"공재희":["꺼진 화면","재희가 영상 재생을 멈추고 당신을 바라봤다.","나 뽀뽀하고 싶은데… 해도 돼요?","웅. 좋아요.","헤헤. 아 진짜 좋다 ㅋㅋ","입맞춤"]};
const individualReplies={"서이준":["그럼 영화는 다음에 골라요. 뭐라도 마실래요?","…알겠어요. 제가 너무 앞서갔네요.","…손만 잡는데도 신경 쓰이네요.","…손 잡아도 돼요?","…많이 바빴나 봐요. 잘 지냈으면 됐어요.","네. 다음에 이야기해요.","아, 그냥 기억났던 거예요. 별 뜻은 없고.","…네. 먼저 가져요.","그럼 제 것만 사죠. 필요한 거 있으면 말해요.","알겠어요. 일 끝나고 편할 때 연락해요."],"강도윤":["하하. 오늘은 제가 내려 드릴게요.","그럼요. 오늘은 차 한 잔 더 마실까요?","손이 따뜻하시네요. 괜히 웃음이 나요.","손을 잡아도 괜찮을까요?","다행이네요. 바쁜 와중에 얼굴 봐서 좋아요.","그럼 다음에 뵐 때까지 맛있는 커피 준비해 둘게요.","하하. 제가 문을 너무 자주 봤나 봐요.","그럼 직접 떼실 수 있게 알려 드릴게요.","하하, 손님이 오해하셨네요.","일 먼저 보세요. 커피 한 잔 할 여유도 챙기시고요."],"한시우":["오케이, 오늘은 관전 모드?","앗, 너무 성급했죠? 괜찮아요. 저는 옆에만 있어도 좋아요.","와, 손 잡는 게 왜 이렇게 긴장되지?","저 손 좀 잡아 봐도 돼요?","오, 생존 확인! 바쁜 건 좀 끝났어요?","아쉽다! 다음에 연장전 해요.","아, 이거 진짜 웃긴데. 나중에 보내 줄게요.","앗, 너무 가까웠나? 화면 돌려 줄게요.","오케이, 다음 승리 보고서는 혼자 봅니다. ㅋㅋ","ㅇㅋ 일 끝나면 톡 줘요!"],"백지한":["그럼 음악은 배경으로 깔아 둘까요?","아쉽기는 한데, 서두를 필요는 없죠.","손 놓기 아까운데요. 조금만 더 잡고 있어요.","손부터 잡아 볼까요?","그랬네요. 얼굴 보기 힘들어서 좀 아쉬웠어요.","오늘은 보내 드려야겠네요. 다음에 봐요.","칭찬 하나쯤은 받아 주시지. 웃는 것도 예쁜데.","하하. 손 크기는 다음에 재 볼까요?","궁금하지 않으세요? 그럼 비밀로 해 두죠.","좋아요. 나중에 제 몫의 시간도 조금 남겨 주세요."],"임하나":["네! 그럼 제가 간단히 준비할게요.","아…… 네. 조금 긴장했나 봐요. 그냥 옆에 있을게요.","……손이 따뜻해서 좋아요.","저, 손부터 잡아 봐도 될까요?","아, 그러셨구나. 식사는 잘 챙기셨어요?","네…… 다음에 시간 되면 알려 주세요.","아, 간식은 그냥 받아 주세요. 드리고 싶었어요.","네! 그럼 여기까지만 같이 걸어요.","아직 확정은 아니니까요. 괜찮아요.","네! 일 잘 마치시고 쉬실 때 연락 주세요."],"차유리":["오케이. 오늘은 그냥 수다나 떨어요.","좋아요. 그럼 스트레칭이나 해야겠다.","오, 손 따뜻하네. 좋다.","손 한번 잡아 볼래요?","오, 바빴구나. 나도 작업 좀 밀렸어요.","좋아요. 다음에 시간 맞으면 봐요.","예쁜 건 나중에 또 찍어 보여 줄게요.","오케이. 풍경만 찍어야겠다.","그럼 손님용 잔으로 둘게요. 언제든 써요.","ㅇㅋ 나도 작업하러 감!"],"오세린":["그럼 차만 마시면서 느긋하게 있어요.","후후. 함께 있는 것만으로도 충분해요.","손을 잡고 있으니 마음이 편안해지네요.","잠깐 손을 잡아도 될까요?","바쁜 시기였군요. 이제 조금 여유가 생기셨으면 좋겠네요.","그럼 오늘은 여기서 인사할까요?","저 혼자 조금 더 걸어 볼게요. 좋은 하루 보내세요.","괜찮아요. 잠시 바람만 쐬고 갈게요.","네. 일정은 각자 편할 때 맞춰요.","천천히 답해 주세요. 오늘도 평안하시길."],"정태오":["그럼 부담 없이 식사만 하시지요.","알겠습니다. 편안히 계십시오.","…손을 잡고 있으니 조금 긴장이 풀리는군요.","손을 잡아도 괜찮겠습니까?","별일 없으셨다니 다행입니다.","알겠습니다. 귀가길 조심하십시오.","제가 시간을 잘못 짚었나 보군요. 좋은 하루 보내십시오.","그럼 평소 보폭으로 걷겠습니다.","말씀드릴 수 있어서 다행입니다. 먼저 실례하겠습니다.","업무 마치신 뒤 편하실 때 연락 주십시오."],"유지안":["좋아요! 오늘은 음악만 틀어 놓자!","앗, 알겠어요! 그럼 노래 한 곡 더 들을래요?","와, 손 잡으니까 괜히 신난다!","우리 손 잡아 볼까요?","헐, 고생했어요! 이제 좀 쉬어요.","앗, 벌써? 다음에 또 놀아요!","오늘 얼굴 본 것만으로도 운 좋았네!","오케이! 그럼 제가 시범만 보여 줄게요.","아쉽다! 영상이라도 나중에 보내 줄게요.","넵! 일 파이팅하고 나중에 봐요!"],"공재희":["웅, 그럼 걍 배달부터 시켜요!","아… 웅. 좀 부끄럽다. 영상 다시 틀게요.","헤헤. 손 진짜 따뜻하다 ㅋㅋ","나 손 잡아도 됨?","아 바빴구나… 나만 한가했네 ㅋㅋ","아 뭐야 아쉽게. 담에 더 놀아요.","엥 반응 왜케 심심함 ㅋㅋ 나중에 보내 줄게요.","아, 웅. 그럼 좀 떨어질게요.","아 진짜 괜히 보여 줬어. ㅡㅡ","ㅇㅋ 일 끝나면 톡해요."]};
const homeRomanceAfter={"서이준":["같이 고른 영화의 엔딩 크레디트가 올라갔다. 이준은 소리를 줄이고 당신을 봤다. 눈이 마주쳤는데도 이번엔 시선을 피하지 않았다.","…아까부터 입 맞추고 싶었어요. 그래도 돼요?","이준이 리모컨을 내려놓고 한참 동안 말없이 앉아 있었다.","…영화 내용은 기억나는데 마지막 장면이 잘 생각 안 나네요.","…다음 영화는 제가 고를게요."],"강도윤":["도윤이 빈 잔을 정리하다 말고 당신 옆에 앉았다. 평소의 웃음이 조금 옅어졌다.","오늘은 제가 좀 기대도 될까요?","도윤이 팔을 풀고도 한동안 옆자리를 떠나지 않았다.","오늘은 제가 대접받은 기분이네요.","커피는 제가 다시 내려 올게요."],"한시우":["시우가 게임을 끄고 웃으며 돌아봤다. 눈이 마주치자 웃음이 서서히 잦아들었다.","아, 잠깐. 저 지금 좀 진지한데… 안아 봐도 돼요?","시우가 팔을 풀고 머리를 긁적였다. 꺼진 화면에 두 사람의 모습이 비쳤다.","와, 이거 친구한테는 절대 못 말하겠다.","아무튼 오늘 진짜 좋았어요."],"백지한":["지한이 음악 소리를 낮췄다. 맞은편을 보던 그의 시선이 당신에게 돌아왔다.","아까부터 입 맞추고 싶었는데. 지금 괜찮아요?","지한은 잠시 눈을 맞추다가 미소를 지었다. 음악이 다음 곡으로 넘어갔다.","오늘 들은 곡은 앞으로 기억에 남겠네요.","다음에 같이 들을 음반도 골라 둬야겠어요."],"임하나":["하나가 당신의 소매를 살짝 잡았다. 말을 꺼내려던 그녀가 한 번 숨을 골랐다.","……저, 오늘은 제가 먼저 입 맞춰도 될까요?","하나가 고개를 숙이고 작게 웃었다. 한참 뒤에야 다시 당신을 바라보았다.","저 오늘은 집에 가서도 계속 웃을 것 같아요.","……오늘 와 줘서 고마워요."],"차유리":["유리가 연필을 내려놓고 완성된 그림을 바라봤다. 그러다 당신 쪽으로 몸을 돌렸다.","오늘 같이 있으니까 좋았어요. 잠깐 안아도 돼요?","유리가 스케치북을 덮고 옆에 앉았다.","이 그림은 오늘 날짜 적어 둬야겠다.","다음에도 작업할 때 놀러 와요."],"오세린":["세린이 책갈피를 끼우고 책을 덮었다. 조용해진 방에서 눈이 마주쳤다.","으음, 잠시 안고 있어도 괜찮을까요?","세린이 팔을 풀고 찻잔을 두 사람 사이에 다시 놓았다.","차가 조금 식었네요. 시간이 이렇게 흘렀군요.","오늘은 참 좋은 오후였어요."],"정태오":["태오가 말을 꺼내려다 멈췄다. 무릎 위에 놓인 손을 한 번 고쳐 쥐었다.","실례가 아니라면… 안아 드려도 되겠습니까?","태오가 자세를 바로잡았다. 평소보다 부드러운 표정이었다.","오늘은 평소와 조금 다른 휴일이군요.","다음 휴무도 알려 드리겠습니다."],"유지안":["지안이 음악을 끄고 웃었다. 무언가 말하려던 그녀가 잠시 조용해졌다.","있잖아요. 오늘 진짜 좋았어요. 안아도 돼요?","지안이 팔을 풀고 소파에 앉았다. 작게 웃으며 재생 목록을 넘겼다.","오늘은 신나는 노래보다 잔잔한 게 듣고 싶네.","이 노래 나중에 보내 줄게요."],"공재희":["재희가 영상을 멈추고 당신을 바라봤다. 장난스럽게 웃다가 입을 꾹 다물었다.","아, 나 지금 진짜 뽀뽀하고 싶은데. 괜찮아요?","재희가 쿠션을 끌어안고 화면을 다시 켰다. 영상이 시작됐는데도 한동안 웃고 있었다.","아 뭐야. 영상 하나도 안 들어옴 ㅋㅋ","오늘 본 거 나중에 다시 봐야겠다."]};
function homeAffectionScene(p,f){const a=homeDateAffection[p].slice();a[1]=homeRomanceAfter[p][0];a[2]=homeRomanceAfter[p][1];if(!f.touches.some(x=>['손잡기','팔짱','어깨 맞대기','어깨 기대기','포옹','입맞춤'].includes(x.type))){a[2]=individualReplies[p][3];a[3]=playerHandLine(p);a[4]=individualReplies[p][2];a[5]='손잡기'}a[6]='오늘은 그냥 같이 있고 싶어요.';a[7]=individualReplies[p][1];return a}
const homeTouchNarration={2:{"서이준":"조심스럽게 옆으로 움직인 이준의 어깨가 당신의 어깨에 닿았다. 얇은 옷감 너머로 온기가 전해졌다. 그는 화면을 똑바로 보고 있었지만 리모컨을 쥔 손은 영 어색했다.","강도윤":"도윤이 옆자리에 앉자 소파가 조금 내려앉았다. 맞닿은 어깨에서 커피잔보다 오래 남는 온기가 느껴졌다.","한시우":"두 손바닥이 경쾌하게 마주쳤다. 시우는 웃으며 손을 한 번 더 높이 들었다.","백지한":"지한이 손바닥을 맞대고 천천히 손가락 사이로 자신의 손가락을 끼웠다. 엄지가 손등을 가볍게 쓸었다.","임하나":"하나가 손끝부터 조심스럽게 맞댔다. 조금씩 손가락이 얽혔다. 처음에는 차갑던 손이 차츰 따뜻해졌다.","차유리":"유리가 스케치북을 두 사람의 무릎 사이에 걸쳤다. 어깨가 닿은 채로 색연필 자국을 하나씩 짚어 주었다.","오세린":"담요가 두 사람의 무릎 위로 내려왔다. 가까워진 자리에서 세린의 잔잔한 숨소리가 들렸다.","정태오":"태오가 두 손으로 당신의 손을 감쌌다. 손바닥의 단단한 감촉과 따뜻한 체온이 느껴졌다.","유지안":"지안이 손을 맞잡고 박자에 맞춰 움직였다. 발이 엇갈릴 때마다 잡은 손이 흔들리고 웃음이 터졌다.","공재희":"재희가 당신의 어깨에 머리를 살며시 기댔다. 머리카락이 목덜미를 간질였다. 편한 자리를 찾듯 조금 움직이더니 가만히 화면을 바라봤다."},4:{"서이준":"이준이 눈을 맞추었다가 잠시 시선을 내렸다. 조심스럽게 가까워진 입술이 짧게 닿았다. 따뜻한 감촉이 채 사라지기도 전에 그가 얼굴을 떼고 숨을 골랐다. 귀 끝이 붉었다.","강도윤":"도윤이 당신의 어깨에 이마를 기대며 팔을 둘렀다. 평소 반듯하던 어깨에서 힘이 빠졌다. 등을 감싼 팔의 온기가 한동안 그대로 머물렀다.","한시우":"시우가 한 걸음 다가와 당신을 안았다. 둘러안은 팔이 미세하게 떨렸다. 웃음 섞인 숨을 내쉬는 동안 빠른 심장 박동이 가까이 느껴졌다.","백지한":"지한이 시선을 맞춘 채 천천히 거리를 좁혔다. 입술이 부드럽게 맞닿았다가 떨어졌다. 그는 가까운 거리에서 당신의 표정을 살피며 웃었다.","임하나":"하나가 당신의 손을 살며시 잡고 가까이 다가왔다. 눈을 감은 채 입술을 짧게 맞댔다. 얼굴을 떼고도 손가락은 놓지 않았다. 손끝에 작게 힘이 들어갔다.","차유리":"유리가 양팔을 둘러 당신을 가볍게 끌어안았다. 옷감 너머로 따뜻한 체온이 느껴졌다. 잠깐 등을 토닥이고는 편안하게 팔을 풀었다.","오세린":"세린이 천천히 팔을 둘렀다. 가까이에서 잔잔한 호흡이 느껴졌다. 서두르지 않는 포옹이었다.","정태오":"태오가 조심스럽게 팔을 둘렀다. 처음에는 굳어 있던 팔이 조금씩 편안해졌다. 넓은 어깨 너머로 길게 내쉬는 숨이 들렸다.","유지안":"지안이 활짝 웃으며 당신을 안았다. 가볍게 흔들리는 포옹에 웃음소리가 가까이 울렸다.","공재희":"재희가 당신을 올려다보다 가까이 다가왔다. 입술이 짧고 따뜻하게 닿았다. 얼굴을 떼자마자 웃음을 참지 못한 듯 눈꼬리가 휘었다."}};
function homeTouchText(p,stage,type){if(stage===5&&type==='포옹')return '지한이 팔을 둘러 당신을 잠시 끌어안았다. 등을 감싼 손의 온기가 외투 너머로 전해졌다. 잠시 후 그는 천천히 팔을 풀었다.';if(stage===5&&type==='손잡기')return '재희가 손가락을 살며시 얽었다. 현관의 서늘한 공기와 달리 맞닿은 손은 따뜻했다. 잠깐 머물던 손끝이 천천히 떨어졌다.';if(stage===4&&type==='손잡기')return '조심스럽게 내민 손을 맞잡았다. 손가락 사이로 상대의 체온이 전해졌다.';return homeTouchNarration[stage]?.[p]||''}
const homeDateFarewell={"서이준":["현관 앞의 망설임","이준이 현관에서 신발을 신다가 시간을 확인했다. 문고리를 잡고도 한동안 돌아서지 않았다.","…다음 주에도 시간 괜찮아요?","네. 또 만나요.","그럼 이번에는 제가 먼저 연락할게요.",null,"일정 보고 연락할게요.","네. 편할 때 알려 줘요."],"강도윤":["식어 버린 커피","도윤이 식은 커피잔을 내려다보며 웃었다. 창밖은 어느새 어두웠다.","시간이 이렇게 빨리 갈 줄 몰랐네요.","조금 더 이야기하다 가요.","하하. 그 말을 기다렸나 봐요.",null,"오늘은 여기까지 할까요?","좋아요. 다음에 또 봐요."],"한시우":["마지막 한 판","시우가 종료 화면과 시계를 번갈아 보았다.","아, 진짜 마지막 한 판만 더 하면 안 돼요?","좋아요. 진짜 마지막이에요.","오예! 이번엔 이기고 가야지.",null,"다음에 이어서 해요.","오케이. 다음 약속 잡았다!"],"백지한":["문 앞에서","지한이 현관에 서서 당신을 바라봤다. 평소보다 느릿하게 손을 내밀었다.","가기 전에 한 번 안아도 돼요?","좋아요. 이리 와요.","다음에 만날 때까지 좀 아쉽겠네요.","포옹","오늘은 인사만 할래요.","좋아요. 다음에 봐요."],"임하나":["다음 휴일","하나가 휴대전화의 달력을 열었다. 빈 날짜 하나를 손끝으로 짚었다.","이날은 저 아무 일정도 없어요. 혹시…","그날 같이 보내요.","네. 이번에는 다른 약속 안 잡을래요.",null,"일정 확인해 볼게요.","네. 천천히 알려 주세요."],"차유리":["각자의 밤","유리가 작업 도구를 가방에 넣었다. 창문 너머로 가로등 불빛이 번졌다.","오늘 좋았어요. 집 가서 그림 좀 더 그리려고요.","완성되면 보여 줘요.","좋아요. 오늘 생각도 좀 날 것 같네.",null,"푹 쉬어요.","네. 당신도요."],"오세린":["마지막 찻잔","세린이 빈 찻잔을 정리하며 창밖을 바라봤다.","이렇게 조용히 하루를 마무리하는 것도 좋네요.","다음에도 같이 차 마셔요.","아, 다음에는 다른 차를 가져올게요.",null,"오늘 편히 쉬어요.","네. 좋은 밤 보내요."],"정태오":["안전한 귀가","태오가 외투를 챙기고 현관 앞에서 멈췄다.","오늘 함께한 시간이 좋았습니다. 다음에도 괜찮으시겠습니까?","네. 또 만나요.","…기다리고 있겠습니다.",null,"다음에 일정 맞춰 봐요.","알겠습니다. 편히 쉬십시오."],"유지안":["다음 곡","지안이 음악을 끄자 방 안이 갑자기 조용해졌다.","아쉽다! 다음에 들려줄 곡 벌써 생각났어요.","다음에 꼭 들려줘요.","좋아요! 플레이리스트 만들어 올게요.",null,"오늘은 푹 쉬어요.","넵! 좋은 밤!"],"공재희":["꺼지지 않은 현관등","재희가 가방 끈을 만지작거리며 현관에 서 있었다.","나 가기 전에 손 한 번만 잡아도 돼요?","웅. 손 줘요.","집 도착하면 연락할게요. 답장 천천히 해도 돼요.","손잡기","오늘은 여기서 인사해요.","웅. 조심히 갈게요."]};
function homeFarewellScene(p,f){const a=homeDateFarewell[p].slice();if(a[5]&&!f.touches.some(x=>['손잡기','포옹','입맞춤','어깨 기대기','어깨 맞대기'].includes(x.type))){a[2]='다음에도 같이 시간 보내요?';a[3]='좋아요. 또 만나요.';a[4]='좋아요. 다음에 연락할게요.';a[5]=null}return a}
const playerTouchScenes={"서이준":["이준이 당신과 눈이 마주치자 말을 멈췄다. 가까이 앉은 두 사람 사이로 영화의 엔딩 음악만 흘렀다.","…이렇게 가까이 앉아도 괜찮아요?","이준의 어깨가 잠시 굳었다가 천천히 풀렸다.","…조금만 이러고 있어요.","이준이 손가락을 조심스럽게 맞물렸다.","제가 먼저 잡으려고 했는데.","이준이 눈을 깜빡이다 가만히 뺨을 맡겼다.","……그렇게 쳐다보면 무슨 말을 해야 할지 모르겠어요.","이준이 즉시 손을 거두고 몸을 물렸다.","…미안해요. 거리를 둘게요."],"강도윤":["도윤이 잔을 내려놓고 당신을 바라봤다. 웃음 뒤에 잠깐의 침묵이 찾아왔다.","오늘은 시간이 참 빨리 가네요.","도윤이 어깨를 기댔다.","오늘은 제가 기대는 쪽이네요.","도윤이 손을 부드럽게 맞잡았다.","이 손 놓으면 벌써 하루가 끝날 것 같아서요.","도윤이 눈을 내리깔고 미소 지었다.","하하… 이런 건 아직 익숙하지 않네요.","도윤이 곧바로 물러났다.","미안해요. 편하게 앉아요."],"한시우":["시우가 농담을 하다 말고 가까워진 거리를 의식했다.","어, 잠깐. 지금 분위기 좀 이상하지 않아요? 좋은 쪽으로.","시우가 웃다가 어깨에 힘을 풀었다.","와, 이거 은근 긴장되네.","시우가 손을 맞잡고 웃었다.","앗, 선수를 뺏겼다!","시우가 눈을 크게 뜨고 말을 잃었다.","와… 잠깐만. 나 지금 무슨 표정이에요?","시우가 손을 내리고 한 걸음 물러났다.","앗, 미안. 너무 가까웠죠."],"백지한":["지한이 음악을 줄이고 당신을 바라봤다. 눈이 마주친 뒤에도 시선을 피하지 않았다.","오늘은 먼저 다가와 주면 좋겠는데요.","지한이 어깨를 감싼 팔에 가볍게 몸을 기댔다.","이렇게 먼저 와 주는 것도 좋네요.","지한이 손가락을 얽고 손등을 가볍게 쓸었다.","오늘은 이 손 좀 오래 잡고 있어요.","지한이 당신의 손바닥에 뺨을 기댔다.","이런 표정은 다른 사람한테 보여 주기 싫은데요.","지한이 손을 풀고 거리를 벌렸다.","알겠어요. 제가 너무 가까웠네요."],"임하나":["하나가 소매 끝을 만지작거리며 당신을 바라봤다.","저… 오늘은 조금 더 같이 있고 싶어요.","하나가 조심스럽게 어깨를 기댔다.","……제가 먼저 부탁하고 싶었어요.","하나가 손가락을 얽으며 작게 웃었다.","오늘은 제가 놓기 싫어요.","하나가 눈을 감았다가 천천히 떴다.","……저 지금 웃고 있죠?","하나가 놀라 손을 내렸다.","아, 미안해요. 괜찮으세요?"],"차유리":["유리가 스케치북을 덮고 당신 옆에 앉았다.","오늘은 작업 안 해도 시간이 잘 가네요.","유리가 편하게 어깨를 기댔다.","오, 이 자리 괜찮네.","유리가 손을 맞잡고 손가락을 살펴봤다.","손 모양이 참 다르네요.","유리가 눈을 맞추고 가볍게 웃었다.","오… 오늘은 좀 다르네요.","유리가 곧바로 자리를 비켜 주었다.","알았어요. 여기 앉을게요."],"오세린":["세린이 찻잔을 내려놓았다. 조용한 방 안에서 시선이 마주쳤다.","으음, 오늘은 헤어지기 조금 아쉽네요.","세린이 어깨를 기대고 숨을 고르게 내쉬었다.","아아, 편안하네요.","세린이 손을 부드럽게 감쌌다.","손이 따뜻하네요.","세린이 가만히 눈을 맞추었다.","어머… 오늘은 제가 조금 부끄럽네요.","세린이 손을 거두고 자리를 옮겼다.","네. 편한 거리를 유지해요."],"정태오":["태오가 시간을 확인하려다 시계를 내려다보는 대신 당신을 바라봤다.","아직 시간이 괜찮으시다면 조금 더 머물고 싶습니다.","태오가 잠시 자세를 고쳐 앉다가 어깨를 맡겼다.","…이런 시간도 필요하군요.","태오가 손을 단단히 맞잡았다.","먼저 손을 내밀어 주셔서 감사합니다.","태오가 잠시 말을 잃고 눈을 내렸다.","…예상하지 못했습니다. 싫다는 뜻은 아닙니다.","태오가 즉시 손을 거두었다.","실례했습니다. 물러나겠습니다."],"유지안":["지안이 재생 목록을 넘기다가 당신을 보고 웃었다. 음악이 잦아들었다.","있잖아요. 오늘은 좀 더 같이 놀고 싶다.","지안이 어깨를 기대고 작게 웃었다.","아, 이러니까 집 가기 더 싫잖아요!","지안이 손을 맞잡고 가볍게 흔들었다.","우리 오늘 손 잡은 거 기억해야겠다.","지안이 눈을 동그랗게 뜨고 웃음을 참았다.","헐… 나 지금 되게 조용해졌죠?","지안이 얼른 손을 내렸다.","앗, 미안! 편하게 있어요."],"공재희":["재희가 쿠션을 내려놓고 당신을 올려다봤다. 평소처럼 장난을 치려다 입을 다물었다.","아 뭐야. 오늘 왜 이렇게 집 가기 싫지.","재희가 어깨에 머리를 기대고 웃었다.","웅… 나 여기 좀만 더 있을래요.","재희가 손가락을 꼭 얽었다.","헐 먼저 잡아 줬어 ㅋㅋ","재희가 눈을 깜빡이다 당신의 손에 뺨을 살짝 기댔다.","아… 뭐야. 나 지금 말 못 하겠음.","재희가 손을 거두고 조금 떨어졌다.","아 웅. 미안. 여기 있을게요."]};
const playerTouchExtra={"서이준":["이준이 등받이에 몸을 기댄 채 눈을 크게 떴다. 내민 손을 스스로 당신의 손에 포갰다.","……이런 건 예상 못 했는데. 싫은 건 아니에요.","이준이 시선을 피했다가 다시 당신을 바라봤다.","…왜 그렇게 봐요. 제가 먼저 손 잡아도 돼요?","손목은 좀 불편해요. 그냥 손을 잡으면 안 될까요?"],"강도윤":["도윤이 잠깐 놀라더니 스스로 몸을 가까이 기울였다.","하하… 오늘은 제가 리드할 차례가 아닌가 봐요.","도윤이 웃음을 거두고 눈을 맞췄다.","오늘은 말이 없어도 좋네요.","손목보다는 어깨에 기대고 싶어요."],"한시우":["시우가 등받이에 기대며 놀란 웃음을 터뜨렸다.","와, 잠깐. 이런 반전은 생각 못 했는데요?","시우가 입을 열었다가 웃으며 다물었다.","아, 눈싸움은 제가 먼저 질 것 같은데.","앗, 손목은 조심해 줘요. 대신 손 잡을래요?"],"백지한":["지한이 등받이에 기대어 당신을 올려다봤다. 손을 편 채 느긋하게 웃었다.","오늘은 제가 기다리는 쪽이네요. 좋아요.","지한이 눈을 맞춘 채 미소 지었다.","그렇게 바라보면 제가 먼저 다가가고 싶어지는데요.","오늘은 조금 천천히 가죠. 옆에 앉아 줘요."],"임하나":["하나가 놀라 숨을 들이마셨다. 잠시 뒤 스스로 손을 내밀었다.","……저도 가까이 있고 싶어요. 조금만 천천히요.","하나가 붉어진 얼굴로 시선을 맞췄다.","저… 계속 보고 있어도 돼요?","아, 손목은 조금 놀랐어요. 손을 잡아 주세요."],"차유리":["유리가 등받이에 기대며 당신을 바라보다 작게 웃었다.","오, 오늘은 적극적이네요. 괜찮아요.","유리가 고개를 살짝 기울였다.","뭐 생각해요? 표정이 궁금하네.","그건 제 취향은 아니에요. 그냥 옆에 있어요."],"오세린":["세린이 잠시 놀란 표정을 짓다가 스스로 가까운 자리에 앉았다.","어머… 오늘은 조금 대담하시네요.","세린이 차분히 시선을 맞췄다.","으음, 이렇게 조용한 것도 좋네요.","저는 손목을 잡히는 것보다 손을 맞잡는 게 좋아요."],"정태오":["태오가 잠시 자세를 고쳐 앉고 당신의 손을 바라봤다.","…예상하지 못했습니다. 천천히라면 괜찮습니다.","태오가 시선을 피하지 않고 잠시 숨을 골랐다.","무슨 말씀을 하시려는지 궁금합니다.","손목을 잡는 방식은 불편합니다. 놓아 주시겠습니까?"],"유지안":["지안이 등받이에 기대며 놀란 웃음을 터뜨렸다. 곧 스스로 몸을 가까이 했다.","헐, 오늘 완전 드라마 같잖아요!","지안이 웃음을 참다가 조용히 눈을 맞췄다.","와… 나 지금 말 안 하고 있는 거 신기하죠?","앗, 그건 좀 놀랐어요. 그냥 안아 주면 좋겠어요."],"공재희":["재희가 눈을 크게 뜨고 잠시 말이 없어졌다. 이내 스스로 손을 내밀었다.","아 뭐야… 나 진짜 당황했잖아요. 싫진 않은데.","재희가 입술을 꾹 다물고 당신을 올려다봤다.","아 왜 그렇게 봐요… 나 부끄러움 ㅋㅋ","아 잠깐. 손목 말고 손 잡아 줘요."]};
const touchProfiles={"서이준":{"base":[2,4,1,-2],"pace":3,"cycle":6,"quiet":["이준이 리모컨을 내려놓고 관자놀이를 눌렀다.","…오늘은 좀 조용히 있고 싶어요. 옆에 있어 주는 건 좋고요.","그럼 영화는 소리 줄여서 볼까요?","네. 오늘은 그게 좋겠어요.","…알겠어요. 집에 들어가서 좀 쉬어야겠네요."],"hurt":["이준은 손을 무릎 위에 올리고 창밖으로 시선을 돌렸다.","…아직 지난 얘기가 마음에 걸려요. 오늘은 조금 천천히 지내요."],"decline":["이준이 내민 팔을 보고 잠시 고개를 저었다.","…오늘은 기대기보다는 그냥 앉아 있고 싶어요.","이준이 손을 무릎 위에 둔 채 작게 숨을 내쉬었다.","미안해요. 지금은 손도 좀 쉬고 싶어요.","이준이 얼굴을 조금 뒤로 물렸다.","…얼굴은 아직 좀 쑥스러워요."],"growth":[1,0,2,0]},"강도윤":{"base":[4,3,1,-1],"pace":2,"cycle":5,"quiet":["도윤이 컵을 내려놓고 길게 숨을 내쉬었다.","오늘은 커피 내릴 힘도 다 쓴 것 같네요. 그냥 쉬어도 될까요?","그럼 제가 물 가져올게요.","하하, 고마워요. 오늘은 좀 기대고 싶었나 봐요.","오늘은 일찍 들어가 쉬어야겠네요."],"hurt":["도윤이 웃으려다가 입술을 다물었다.","아직 마음이 편해지진 않았어요. 오늘은 제 속도대로 있어도 될까요?"],"decline":["도윤이 소파에 등을 붙이고 어깨를 느슨하게 내렸다.","오늘은 몸을 좀 편하게 뉘고 싶어요.","도윤이 잔을 감싼 손을 펴 보였다.","하하, 잠깐만요. 오늘은 그냥 쉬어도 될까요?","도윤이 웃으며 고개를 살짝 돌렸다.","이런 건 오늘 조금 부끄럽네요."],"growth":[0,1,2,0]},"한시우":{"base":[3,4,1,-4],"pace":2,"cycle":4,"quiet":["시우가 왼쪽 손목을 받치고 컨트롤러를 내려놓았다.","오늘 손목도 좀 뻐근하고 집중력이 방전됐어요. 관전 모드 할래요.","그럼 제가 게임할게요. 구경해요.","오케이! 오늘은 편하게 쉬는 걸로.","앗, 그럼 오늘은 휴식 퀘스트 하러 갈게요."],"hurt":["시우가 평소보다 조용히 화면을 바라봤다.","저 지금 농담으로 넘기고 싶은 기분은 아닌데요. 조금만 있다 얘기해요."],"decline":["시우가 팔을 뻗다가 어깨를 살짝 피했다.","앗, 오늘은 몸에 힘 빼고 있고 싶어요.","시우가 아픈 쪽 손목을 반대 손으로 받쳤다.","잠깐만요. 오늘은 손목이 좀 예민해요.","시우가 눈을 크게 뜨고 뒤로 살짝 물러났다.","와, 가까운 건 오늘 좀 적응 안 되는데요?"],"growth":[1,0,2,0]},"백지한":{"base":[3,2,2,4],"pace":3,"cycle":7,"quiet":["지한이 음악을 낮춘 뒤 소파에 등을 기댔다.","오늘은 굳이 뭘 더 하지 않아도 좋겠는데요. 그냥 같이 있어요.","좋아요. 음악만 같이 들을까요?","제 취향을 꽤 잘 아시네요. 오늘은 이 정도가 좋아요.","알겠어요. 제가 먼저 일어날게요."],"hurt":["지한이 재생 버튼 위에 손가락을 얹은 채 시선을 거뒀다.","오늘은 마음이 좀 복잡하네요. 가까워지는 것보다 얘기가 먼저일 것 같아요."],"decline":["지한이 팔을 편하게 내려 놓고 고개를 저었다.","오늘은 제가 조금 자유롭게 앉고 싶네요.","지한이 시선을 맞추고 손을 가볍게 거뒀다.","손은 다음에 잡아요. 오늘은 이 거리가 좋아요.","지한이 고개를 살짝 돌리며 웃음을 거뒀다.","오늘은 얼굴 만지는 건 사양할게요."],"growth":[0,1,1,1]},"정태오":{"base":[2,4,0,-4],"pace":4,"cycle":6,"quiet":["태오가 자세를 고쳐 앉고 손목시계를 풀어 놓았다.","오늘은 조금 피곤합니다. 잠시 조용히 쉬어도 괜찮겠습니까?","네. 편히 쉬세요.","배려에 감사드립니다. 조금 쉬겠습니다.","알겠습니다. 오늘은 일찍 돌아가겠습니다."],"hurt":["태오가 당신 쪽을 보다가 천천히 시선을 내렸다.","지난 일은 아직 정리하지 못했습니다. 오늘은 거리를 유지하겠습니다."],"decline":["태오가 상체를 바로 세웠다.","오늘은 팔을 둘러 주지 않으셔도 됩니다.","태오가 손을 자신의 무릎에 놓았다.","…지금은 악수 이상의 접촉이 부담스럽습니다.","태오가 고개를 조금 뒤로 뺐다.","죄송합니다. 얼굴을 만지는 것은 아직 어렵습니다."],"growth":[1,0,2,0]},"임하나":{"base":[3,2,4,-2],"pace":3,"cycle":5,"quiet":["하나가 소매 끝을 쥐었다가 천천히 놓았다.","저… 오늘은 아무것도 하지 않고 쉬고 싶어요. 그래도 될까요?","그럼요. 하나 씨가 쉬고 싶은 만큼 쉬어요.","……이렇게 말해도 되는 거였네요. 고마워요.","네. 오늘은 저도 일찍 쉬어 볼게요."],"hurt":["하나가 입술을 꾹 다물었다가 고개를 들었다.","저도 아직 마음이 좀 아파요. 괜찮은 척하고 싶지는 않아요."],"decline":["하나가 어깨를 움츠렸다가 스스로 고개를 저었다.","저… 지금은 조금 떨어져 있는 게 편해요.","하나가 손을 조심스럽게 접었다.","오늘은 제가 먼저 내밀고 싶을 때까지 기다려 주세요.","하나가 손바닥을 바라보다 살짝 고개를 저었다.","……지금은 얼굴에 손이 닿는 건 싫어요."],"growth":[1,3,1,1]},"차유리":{"base":[4,2,1,-4],"pace":2,"cycle":5,"quiet":["유리가 연필을 내려놓고 양손을 머리 위로 뻗었다.","오늘은 작업 끝내고 나니까 아무 생각도 하기 싫네요. 각자 멍 때려요?","좋아요. 저도 좀 멍 때릴래요.","오, 이거 좋다. 서로 방해하지 않는 휴식.","좋아요. 저는 집에 가서 잠깐 더 쉴게요."],"hurt":["유리가 스케치북을 덮고 잠시 말을 골랐다.","아직 그때 얘기가 걸려요. 오늘은 평소처럼 스킨십하기는 싫어요."],"decline":["유리가 쿠션을 무릎 위로 끌어왔다.","오늘은 제 공간 조금만 남겨 줘요.","유리가 손가락을 한 번 쫙 폈다.","손은 지금 좀 자유롭게 두고 싶어요.","유리가 얼굴을 옆으로 돌리고 편하게 웃었다.","아, 얼굴은 오늘 만지지 말아 줘요."],"growth":[0,2,1,0]},"오세린":{"base":[3,4,1,-2],"pace":3,"cycle":6,"quiet":["세린이 책을 덮고 찻잔을 천천히 감쌌다.","으음, 오늘은 조용히 차 마시는 시간만으로도 충분해요.","그럼 차 향만 즐겨요.","아아, 이런 오후가 필요했어요.","네. 오늘은 각자 편히 쉬어요."],"hurt":["세린이 찻잔을 내려놓고 당신을 가만히 바라봤다.","아직 서운한 마음이 남아 있어요. 서두르지 않았으면 해요."],"decline":["세린이 자세를 바꾸고 두 사람 사이에 쿠션을 놓았다.","오늘은 조금 여유 있게 앉을까요?","세린이 손을 찻잔 쪽으로 옮겼다.","지금은 손을 가만히 쉬게 하고 싶어요.","세린이 부드럽게 고개를 저었다.","얼굴을 만지는 건 오늘은 조금 부담스럽네요."],"growth":[1,0,2,0]},"유지안":{"base":[4,3,2,-1],"pace":2,"cycle":4,"quiet":["지안이 음악을 멈추고 소파에 길게 기댔다.","오늘 체력 다 썼다! 움직이는 건 내일의 나한테 맡겨요.","좋아요. 오늘은 누워서 음악 듣기!","와우, 휴식도 제대로 해 보죠!","넵! 오늘은 푹 쉬고 다음에 더 신나게 놀아요."],"hurt":["지안이 음악을 끄고 잠시 손끝을 바라봤다.","오늘은 웃으면서 넘어가고 싶지 않아요. 조금 쉬었다 얘기해요."],"decline":["지안이 기지개를 켜다가 팔을 내렸다.","앗, 오늘 어깨는 좀 쉬어야겠어요.","지안이 손을 가볍게 털었다.","잠깐만요! 오늘은 손도 휴식 타임.","지안이 웃음을 멈추고 얼굴을 살짝 피했다.","헐, 오늘은 얼굴 가까이 오는 건 좀 놀라워요."],"growth":[0,1,2,0]},"공재희":{"base":[3,2,4,-2],"pace":2,"cycle":5,"quiet":["재희가 쿠션을 끌어안은 채 화면 밝기를 낮췄다.","아 나 오늘 기빨림… 그냥 같이 있어도 돼요?","웅. 영상이나 조용히 볼까요?","좋아… 오늘은 말 안 해도 되는 거죠ㅋㅋ","웅. 나도 오늘은 일찍 잘게요."],"hurt":["재희가 쿠션을 안은 채 한동안 시선을 피했다.","나 아직 좀 속상해요. 오늘은 막 안아 주면 괜찮아지는 그런 거 아님…"],"decline":["재희가 쿠션을 사이에 끼고 작게 고개를 흔들었다.","아 잠깐. 오늘은 좀 떨어져서 있고 싶어요.","재희가 손을 소매 속에 넣었다.","웅… 오늘은 손 말고 말로 해 줘요.","재희가 앞머리를 만지며 고개를 돌렸다.","아 오늘 얼굴 만지는 거는 좀 싫음."],"growth":[1,2,0,0]}};
const touchLabels=['어깨를 감싸 안는다','손을 잡는다','뺨을 감싼다','손목을 붙잡아 밀어붙인다','그대로 눈을 맞춘다','살짝 몸을 물려 거리를 둔다'];
const touchTypes=['어깨 감싸안기','손잡기','뺨 감싸기','손목 잡기'];
function touchContext(p,day,allowDistance=false){
 const f=flirtRecord(p),m=memoryFor(p),a=touchProfiles[p],v=initSim(),history=m.preferences.touchHistory||[],seed=Array.from(p).reduce((n,c)=>n+c.charCodeAt(0),0);
 const tired=(day+seed)%a.cycle===0||(p==='한시우'&&npcLifeActive(p,day)===1),conflicted=!!(v.romance?.[p]==='dating'&&hasBlockingCoupleIssue(p,allowDistance))||m.feelings.hurt>=5||Object.values(v.conflicts||{}).some(x=>x&&x.person===p&&['pending','ready'].includes(x.status))||(p==='차유리'&&['pending','ready'].includes(v.conflicts?.[p]?.status));
 const agreement=relationshipRecall(p,day),growth=(f.dates>=4&&m.feelings.security>=5)||(p==='임하나'&&agreement.agreement&&agreement.kind===0&&m.feelings.security>=5);
 const weights=a.base.map((n,i)=>n+(growth?a.growth[i]:0)+Math.min(2,history.filter(x=>x.index===i&&x.accepted).length)-(tired?2:0));
 const prior=f.touches.some(x=>['손잡기','팔짱','어깨 기대기','어깨 맞대기','어깨 감싸안기','포옹','입맞춤'].includes(x.type));
 return {day,tired,conflicted,growth,weights,prior,interest:f.interest,security:m.feelings.security,pace:a.pace,dating:v.romance?.[p]==='dating'};
}
function touchOutcome(p,c,n){
 if(n>=4)return {accepted:false,gain:0,security:n===5?2:1,kind:n===5?'distance':'gaze'};
 const threshold=n===3?3:n===2?1:0;
 const ready=n!==3||(c.interest>=12+c.pace&&c.prior&&(c.security>=4||c.dating));
 const accepted=!c.conflicted&&ready&&c.weights[n]>=threshold&&!(c.tired&&n>=2)&&!(p==='한시우'&&n===1&&c.tired);
 return {accepted,gain:accepted?(c.weights[n]>=4?3:1):0,security:accepted?1:1,kind:accepted?'accepted':'declined'};
}
function recordTouchChoice(p,ev,o,n,out,reply){
 const f=flirtRecord(p),m=memoryFor(p),day=o.context.day;f.seen.playerTouch=day;
 const h=m.preferences.touchHistory||(m.preferences.touchHistory=[]);h.push({day,index:n,accepted:out.accepted,kind:out.kind,reply});
 if(out.accepted){f.interest+=out.gain;f.touches.push({day,type:touchTypes[n],scene:'playerTouch'});}
 if(out.security)feel(p,{security:out.security});const traits=state.identity.traits;const key=n===5?'신중함':n===4?'다정함':'솔직함';traits[key]=(traits[key]||0)+1;
 remember(p,'home:playerTouch:'+day,touchLabels[n]+' / '+reply);
}
function homeQuietScene(p,c){
 const a=touchProfiles[p],q=a.quiet,boundary=relationshipBoundaryLine(p,c.day),opening=c.conflicted?a.hurt:boundary?[q[0],boundary]:q;
 return ['각자의 속도',opening[0],opening[1],c.conflicted?'알겠어요. 오늘은 편한 거리를 두고 있어요.':q[2],c.conflicted?personalSocialVoice[p][7]:q[3],null,'그럼 오늘은 먼저 돌아가요.',q[4]];
}
function renderPlayerTouch(ev,p){const v=initSim(),f=flirtRecord(p),a=playerTouchScenes[p],b=playerTouchExtra[p],profile=touchProfiles[p];if(!ev.playerTouch){if((f.seen.playerTouch&&v.day-f.seen.playerTouch<14)||f.interest<9||relationshipTier(p)<3||!ev.homeTouchText||ev.homeScene!==4||ev.homeAffection?.[5]==='손잡기')return false;ev.playerTouch={version:3,context:touchContext(p,ev.day||v.day)};save()}const o=ev.playerTouch;if(!o.version&&o.answer!==undefined){if(o.answer===3)o.answer=5;o.version=2;o.legacy=true;save()}if(o.answer===undefined&&o.version!==3){o.version=3;o.context=touchContext(p,ev.day||v.day);save()}add('이야기',a[0]);add(p,a[1]);if(o.answer!==undefined){const n=o.answer;add(state.name,touchLabels[n],true);if(o.version===3){if(o.narration)add('이야기',o.narration);add(p,o.reply);return false}if(n<3){if(n===2)add('이야기','손을 내밀자 상대가 고개를 끄덕였다.');add('이야기',a[2+n*2]);add(p,a[3+n*2])}else if(n===3){if(o.accepted){add('이야기',b[0]);add(p,b[1])}else{add(p,b[4])}}else if(n===4){add('이야기',b[2]);add(p,b[3])}else{add('이야기',a[8]);add(p,a[9])}return false}for(let n=0;n<touchLabels.length;n++)choiceButton(touchLabels[n],()=>{if(o.answer!==undefined)return;const out=touchOutcome(p,o.context,n);o.answer=n;o.accepted=out.accepted;if(n===5){o.narration=a[8];o.reply=a[9]}else if(n===4){o.narration=b[2];o.reply=b[3]}else if(!out.accepted){if(n===3){o.narration=profile.decline[0];o.reply=b[4]}else{o.narration=profile.decline[2*n];o.reply=profile.decline[2*n+1]}}else if(n===3){o.narration='가까이 다가가도 되는지 물었다. 상대가 먼저 고개를 끄덕인 뒤 손을 내밀었다. '+b[0];o.reply=b[1]}else{o.narration=a[2+n*2];o.reply=a[3+n*2]}recordTouchChoice(p,ev,o,n,out,o.reply);save();renderChoiceEvent();renderSim()});return true}
const coupleVoices={"서이준":[["이준이 휴대전화를 들었다 놓기를 반복하다 웃었다.","…이제 보고 싶다는 말도 그냥 해도 되는 거죠?","보고 싶을 때 연락해요.","…그럼 오늘 저녁에도 보낼게요.","각자 쉬는 시간도 챙겨요.","그건 저도 좋아요. 조용한 시간이 필요하니까."],["이준이 비어 있는 서가 한 칸을 바라봤다.","…당신이 두고 간 책, 여기 놔도 괜찮죠?","다음에 이어서 읽을게요.","그럼 책갈피도 그대로 둘게요.","다 읽고 나면 가져갈게요.","알겠어요. 억지로 물건 두고 갈 필요는 없죠."],["이준이 현관 시계를 보다가 조용히 물었다.","…오늘은 안 돌아가고 같이 자고 갈래요? 부담되면 말해요.","…좋아요. 내일 아침에도 보고 싶네요.","그럼 오늘은 들어가요. 내일도 연락할게요.","커튼 사이로 아침 햇빛이 들어왔다. 이준이 잠 덜 깬 얼굴로 물컵을 건넸다.","…잘 잤어요? 눈 뜨자마자 옆에 있으니까 좀 이상하네요. 싫다는 건 아니고요.","조금 더 같이 아침을 먹어요.","…토스트 구워 올게요. 잠깐만 기다려요.","이제 각자 일상을 시작해요.","네. 오늘도 잘 보내고, 이따 연락해요."]],"강도윤":[["도윤이 커피를 내려놓고 자신의 잔도 채웠다.","연인이 됐다고 더 잘해 드려야 할 것 같았는데, 그러면 또 제가 지치겠죠?","도윤 씨도 편하게 기대요.","하하, 그 말은 몇 번을 들어도 좋네요.","우리 각자 할 수 있는 만큼만 해요.","좋아요. 제가 무리하면 먼저 말할게요."],["도윤이 모카의 산책줄을 들고 고민했다.","오늘은 제가 가고 싶은 길로 가도 돼요? 늘 상대에게 맞추는 게 습관이라.","좋아요. 도윤 씨가 정해요.","하하, 그럼 모카도 제가 설득해 볼게요.","오늘은 각자 하고 싶은 걸 해요.","좋죠. 산책 끝나면 안부 전할게요."],["도윤이 빈 잔을 내려놓았다.","오늘은 조금 더 함께 있고 싶어요. 내일 아침까지 여기 있어도 괜찮을까요?","하하… 그럼 내일 커피는 둘이 같이 내려요.","물론이죠. 오늘은 각자 편히 자요.","아침 햇살에 모카가 꼬리를 흔들었다. 도윤은 머리가 헝클어진 채 웃었다.","하하, 모카가 우리보다 먼저 일어났네요. 어제 정말 편했어요.","오늘은 제가 아침을 챙길게요.","……좋아요. 저도 받아 보기로 했잖아요.","각자 준비하고 나가요.","좋아요. 오늘 하루도 잘 보내요."]],"한시우":[["시우가 게임 로비 화면을 멍하니 보다가 웃었다.","와, 아직 연인이라는 말이 실감 안 나는데요. 우리 진짜 사귀는 거죠?","맞아요. 이제 연인이지요.","와, 저 진짜 좋아하는데 어떡하죠. 표정 관리가 안 돼요.","천천히 익숙해져요.","좋아요. 우리 너무 서두르진 말아요."],["시우가 연습 일정을 확인하고 컨트롤러를 내려놓았다.","오늘은 경기 준비 때문에 오래 못 놀아요. 그래도 얼굴은 보고 싶었어요.","연습 잘하고 와요.","콜! 끝나면 제일 먼저 소식 알려 줄게요.","오늘은 각자 집중해요.","좋아요. 각자 할 일 끝내고 편하게 만나요!"],["시우가 꺼진 게임 화면을 보다가 머리를 긁적였다.","아, 진짜 장난 아닌데… 오늘 같이 자고 갈래요? 싫으면 그냥 말해요.","와… 진짜요? 저 지금 너무 좋아서 말이 안 나오는데요.","오케이! 다음에 또 놀면 되죠.","아침 햇살이 꺼진 모니터에 비쳤다. 시우가 베개에 눌린 머리를 쓸어 올렸다.","와, 나 방금 꿈인 줄 알았어요. …좋은 아침!","아침 먹고 천천히 준비해요.","좋아요! 저는 일단 따뜻한 거 먹고 싶어요.","오늘 일정부터 챙겨요.","콜! 각자 할 일 하고 나중에 연락해요."]],"백지한":[["지한이 달력에 적힌 약속을 보다가 웃었다.","연인이 되니까 자꾸 다음 시간을 예약하고 싶어지네요. 너무 욕심인가요?","보고 싶을 때 말해도 좋아요.","좋죠. 대답은 그쪽 몫이라는 것도 기억할게요.","각자의 일정부터 존중해요.","…맞아요. 제 마음이 그쪽 시간표는 아니죠."],["지한이 건축 사진집을 덮고 당신을 바라봤다.","요즘은 제 계획에 자꾸 당신을 넣게 되네요. 그렇다고 전부 같이 할 필요는 없겠죠.","같이 하고 싶은 건 함께 정해요.","좋아요. 제가 먼저 정해 놓지 않을게요.","각자 원하는 미래가 있어야죠.","…그 말 기억할게요. 저도 제 일을 잘하고 싶어요."],["지한이 음악을 낮추고 잠시 눈을 맞췄다.","오늘 밤도 같이 있고 싶은데, 어때요?","좋아요. 오늘은 더 이상 다음 약속을 기다리지 않아도 되겠네요.","알겠어요. 마음은 바꿔도 되는 거니까.","아침 햇살이 소파와 탁자 위의 두 잔을 비췄다. 지한이 잠이 덜 깬 목소리로 웃었다.","이런 아침은 꽤 근사하네요. 평소와 같은 집인데 다르게 보여요.","조금만 더 같이 있어요.","좋죠. 다만 오늘 일정까지 제가 독차지하진 않을게요.","이제 각자 준비해요.","좋아요. 그럼 다음에 다시 만날 시간은 같이 정하죠."]],"정태오":[["태오가 약속 시간을 확인하던 휴대전화를 내려놓았다.","교제를 시작했다고 해서 모든 것을 바꿀 필요는 없겠지요. 다만 안부를 더 자주 여쭙고 싶습니다.","편하게 안부 물어봐요.","…알겠습니다. 노력하겠습니다.","기존 생활도 존중해요.","동의합니다. 서로 무리하지 않도록 하지요."],["태오가 근무표를 접어 가방에 넣었다.","휴무가 짧아서 아쉽습니다. 그렇지만 근무에 지장을 주고 싶지는 않습니다.","휴무에는 푹 쉬어도 돼요.","감사합니다. 다음 휴무를 함께 조율하겠습니다.","각자 일정이 우선이에요.","알겠습니다. 그 안에서 시간을 만들겠습니다."],["태오가 시계를 보고 한동안 말을 골랐다.","…오늘 밤을 함께 보내고 싶습니다. 원하지 않으시면 무리하지 마십시오.","…감사합니다. 서로 편안히 쉴 수 있도록 하겠습니다.","알겠습니다. 귀갓길 조심하십시오.","아침 햇살이 창가에 번졌다. 태오가 정리된 물컵 두 개를 내려놓았다.","잘 주무셨습니까? …이렇게 아침 인사를 드리는 것은 조금 새롭군요.","같이 아침 먹고 가요.","좋습니다. 식사부터 준비하겠습니다.","오늘 일정을 시작해요.","알겠습니다. 오늘도 안전한 하루 보내십시오."]],"임하나":[["하나가 가방 끈을 쥐었다 놓으며 웃었다.","저… 연인이 됐다고 생각하니까 제가 먼저 하고 싶은 말을 해 보고 싶어져요.","하나 씨 마음을 먼저 말해요.","……그럼 다음 약속은 제가 정하고 싶어요.","천천히 서로 알아가요.","네. 저도 무리해서 달라지진 않을래요."],["하나가 작은 서점의 전단을 펼쳤다.","이번에는 제가 가 보고 싶은 곳을 골랐어요. 제 취향대로 정해도 되는 거죠?","그럼요. 하나 씨가 정해요.","네! 이번엔 제가 길도 찾아 볼래요.","서로 원하는 곳을 번갈아 가요.","……좋아요. 제 의견도 잊지 않을게요."],["하나가 소매 끝을 만지다가 고개를 들었다.","저… 오늘은 아침까지 같이 있고 싶어요. 제가 정말 원해서 하는 말이에요.","……네. 내일 아침에도 같이 있다는 게 기뻐요.","괜찮아요. 저도 제 마음을 말할 수 있어서 좋았어요.","커튼 사이로 햇빛이 들어왔다. 하나가 이불을 정돈하다가 당신과 눈이 마주쳤다.","……좋은 아침이에요. 어제는 제가 선택한 시간이었잖아요. 오늘도 기분이 좋아요.","하나 씨가 먹고 싶은 아침을 골라요.","……저 오늘은 달콤한 빵 먹고 싶어요.","각자 할 일을 챙겨요.","네. 오늘은 제 일도 잘해 보고 싶어요."]],"차유리":[["유리가 스케치북에 작은 표시를 남겼다.","우리 이제 연인이지만 각자 작업하는 시간은 그대로 두는 거죠? 저는 그게 좋아요.","각자 시간도 소중하죠.","좋다! 같이 있을 때 더 재밌겠네요.","보고 싶은 날엔 먼저 말해요.","오케이. 서로 말하면서 맞추죠."],["유리가 완성한 그림을 뒤집어 놓았다가 다시 보여 줬다.","요즘은 그림 보여 주고 싶은 사람이 생긴 게 좀 신기해요. 그렇다고 감상은 강요 안 할게요.","보고 싶어요. 어떤 그림이에요?","오, 좋아요. 제일 궁금한 부분부터 봐요.","완성될 때 천천히 보여 줘요.","좋아요. 제 속도로 끝내고 보여 줄게요."],["유리가 연필을 내려놓고 창밖을 바라봤다.","오늘은 작업 다 했어요. 같이 밤 보내고 싶은데, 어때요?","좋다. 내일 아침 풍경도 같이 보고 싶어요.","오케이. 각자 집에서 푹 쉬고 또 봐요.","아침빛이 스케치북 위에 비쳤다. 유리가 잠옷 소매를 걷고 창밖을 바라봤다.","오, 아침 색 완전 좋다. 어제랑은 다른 그림 같네. 같이 보는 것도 좋고요.","아침 풍경을 조금 더 감상해요.","좋아요. 오늘 색은 기억해 둘래요.","각자 할 일 하러 가요.","오케이! 작업 끝나면 연락할게요."]],"오세린":[["세린이 찻잔을 두 개 놓고 미소 지었다.","으음, 연인이 된 뒤에도 이렇게 편안한 시간이 계속되면 좋겠네요.","천천히 우리 일상을 만들어 가요.","아아, 그 말이 참 좋네요.","각자의 휴일도 존중해요.","네. 혼자 쉬는 시간도 우리에게 필요하죠."],["세린이 읽던 책을 덮었다.","가끔은 서로 원하는 게 다를 수도 있겠죠. 그럴 때 편하게 이야기하면 좋겠어요.","다른 생각도 솔직하게 말해요.","네. 그런 대화가 우리를 더 편하게 하겠지요.","혼자 정리할 시간도 가져요.","으음, 그것도 좋은 방법이겠네요."],["세린이 식은 차를 내려놓고 부드럽게 눈을 맞췄다.","오늘 밤은 같이 있고 싶은데, 괜찮아요?","아아, 그럼 오늘은 조금 더 함께 있어요.","네. 오늘은 각자 편히 쉬는 게 좋겠네요.","아침빛에 찻잔의 꽃무늬가 선명해졌다. 세린이 따뜻한 물을 따라 주었다.","잘 잤어요? 이렇게 아침을 함께 맞는 것도 참 평온하네요.","차 한잔 같이 마셔요.","으음, 오늘은 조금 가벼운 차가 좋겠어요.","각자 하루를 시작해요.","네. 편안한 하루 보내고 다시 만나요."]],"유지안":[["지안이 재생 목록의 제목을 바꾸다가 활짝 웃었다.","와우, 이제 우리 커플 플레이리스트 만들어도 됨? 아직 좀 설레요!","좋아요. 같이 곡 골라요.","예쓰! 서로 한 곡씩 넣어요.","천천히 우리 취향 알아가요.","넵! 각자 좋아하는 곡부터 알아보기!"],["지안이 연습 영상의 재생을 멈췄다.","오늘은 춤에 집중하고 싶어요. 연애한다고 제가 좋아하는 걸 놓치긴 싫거든요.","지안 씨 춤을 응원해요.","와, 그 말 들으니까 더 잘하고 싶다!","우리 각자 할 일 챙겨요.","넵! 끝나면 신나게 이야기해요."],["지안이 음악을 끄고 잠깐 진지해졌다.","있잖아요. 오늘은 내일 아침까지 같이 있고 싶은데… 괜찮아요?","와… 오늘 플레이리스트 마지막 곡은 잔잔한 걸로 해야겠다.","넵! 다음에 또 신나게 만나면 되죠.","아침 햇빛이 방 안을 채웠다. 지안이 기지개를 켜다가 당신을 보고 환하게 웃었다.","와우, 같이 맞는 아침이라니! 오늘 시작부터 기분 좋은데요?","같이 아침 먹어요.","예쓰! 오늘은 아침 에너지 충전부터!","오늘 일정 챙겨요.","넵! 각자 오늘도 파이팅!"]],"공재희":[["재희가 휴대전화를 쥐고 한참 웃었다.","아 우리 사귀는 거 아직도 좀 실감 안 남ㅋㅋ 이제 보고 싶다고 말해도 됨?","보고 싶으면 편하게 말해요.","웅ㅋㅋ 나도 너무 재촉은 안 할게요.","각자 시간도 꼭 챙겨요.","아 웅. 나도 내 일 잘하면서 기다릴래요."],["재희가 흰 곰인형을 쿠션 옆에 앉혔다.","나 오늘 방송하고 혼자 게임도 하고 싶음. 그래도 나 좋아하는 거 맞죠?","당연하죠. 재희 씨 시간도 중요해요.","웅… 나도 혼자 결론 내리지 않을게요.","서로 바쁠 때는 나중에 연락해요.","ㅇㅋ. 나도 내 거 하다가 연락할게요ㅋㅋ"],["재희가 쿠션을 끌어안고 당신을 올려봤다.","아 나 오늘 같이 자고 싶음… 그냥 내 마음 말한 거예요. 싫으면 진짜 괜찮음.","웅… 나 지금 엄청 좋음. 내일도 같이 있다는 거잖아요ㅋㅋ","웅. 오늘은 각자 자고 내일 톡해요.","아침빛이 흰 곰인형과 구겨진 이불 위에 내려앉았다. 재희가 눈을 비비다가 웃었다.","아 뭐야ㅋㅋ 아침에 옆에 있는 거 아직 적응 안 됨. 근데 좋다…","같이 아침 먹어요.","웅ㅋㅋ 딸기 우유도 사 와요!","이제 각자 준비해요.","ㅇㅋ. 나도 방송 준비할게요. 이따 톡해요."]]};
const coupleConflictVoices={"서이준":{"j":1,"gap":9,"theme":"말하지 않은 서운함","lines":["이준이 휴대전화 화면을 껐다. 잠깐 망설이더니 당신 쪽으로 고개를 돌렸다.","…요즘 우리 얘기할 시간이 별로 없잖아요. 다른 사람이랑 나갔다는 얘기 듣고 나도 좀 같이 걷고 싶었어요.","요즘 얼굴 보기 힘드네요. 보고 싶다고 연락하려다가, 바쁜데 괜히 귀찮게 하나 싶어서 말았어요.","저도 같이 시간 보내고 싶어요. 다음엔 먼저 연락해 줘요.","…그럼 다음엔 먼저 물어볼게요. 괜히 혼자 짐작했네요.","이준이 시선을 내렸다가 천천히 입을 열었다.","…그날은 그냥 보고 싶다고 하면 됐는데 괜히 쏘아붙였어요. 미안해요.","무슨 말인지는 알겠어요. 조금 생각해 보고 다시 얘기해도 돼요?","…그래요. 얘기하고 싶어지면 연락해 줘요."]},"강도윤":{"j":2,"gap":8,"theme":"웃음 뒤에 숨긴 마음","lines":["도윤이 평소처럼 웃었지만 자기 잔은 비어 있었다.","하하, 다른 사람이랑 즐거웠다니 다행이네요. 저도 그렇게 편하게 만날 수 있으면 좋겠는데.","요즘 제가 뭘 더 해 드려야 할지 자꾸 생각하게 돼요. 연인인데도 괜히 잘 보여야 할 것 같네요.","도윤 씨는 뭘 해 주지 않아도 사랑받을 수 있어요.","……그 말 듣고 싶었나 봐요. 저도 싫을 때 싫다고 말해야겠네요.","도윤이 자기 몫의 커피를 먼저 내렸다.","하하. 제가 먼저 말했어야 했는데. 오늘은 제가 하고 싶은 것도 이야기할게요.","서로 조금 쉬면서 생각해 봐요.","좋아요. 웃으면서 넘기지 말고 제대로 생각해 볼게요."]},"한시우":{"j":1,"gap":9,"theme":"장난으로 넘겨 버린 진심","lines":["시우가 농담을 하다가 웃음을 멈췄다.","오, 다른 사람이랑 재밌게 놀았네요! …아, 나도 같이 놀고 싶었던 건 맞아요.","요즘 못 보니까 좀 보고 싶었는데, 장난으로 말하면 티 안 날 줄 알았어요.","장난으로 숨기지 말고 진짜 기분을 말해 줘요.","아… 오케이. 이건 진짜 보고 싶다는 말이에요.","시우가 게임을 종료하고 당신을 똑바로 바라봤다.","미안해요. 진지해야 할 때도 웃어넘겼죠. 다음엔 제대로 말할게요.","조금 있다가 다시 얘기해요.","콜. 저도 머리 좀 식히고 올게요."]},"정태오":{"j":0,"gap":11,"theme":"말없이 책임지려는 습관","lines":["태오가 휴대전화를 내려놓고 고개를 저었다.","다른 분들과의 만남은 존중합니다. 교제한다는 이유로 제한할 일은 아닙니다.","최근 시간이 맞지 않는군요. 제가 먼저 괜찮은 척하고 일정 이야기를 피했습니다.","혼자 결정하지 말고 같이 의논해요.","…알겠습니다. 제가 생각한 배려가 일방적일 수 있겠습니다.","태오가 자신의 근무표를 펴고 빈 시간을 짚었다.","기다리게 한 점은 죄송합니다. 앞으로는 가능한 시간을 먼저 알려 드리겠습니다.","각자 생각을 정리하고 이야기해요.","알겠습니다. 정리되는 대로 말씀드리겠습니다."]},"백지한":{"j":5,"gap":6,"theme":"연인이라는 이름과 소유욕","lines":["지한이 웃으려다 표정을 굳혔다. 평소보다 말이 느렸다.","이제 제가 애인인데도 다른 사람과 약속을 잡는 걸 보면… 솔직히 질투가 나네요. 그 시간까지 제가 갖고 싶어져서.","연인이 됐는데도 보고 싶을 때 마음대로 볼 수 없다는 게 생각보다 어렵네요. 제 욕심인 건 알아요.","연인이라고 제 모든 시간을 가질 수 있는 건 아니에요.","…맞아요. 내가 좋아한다는 이유로 당신을 마음대로 정할 수는 없죠.","지한이 달력을 덮었다. 당신의 빈 시간은 자신이 채워야 할 칸이 아니라는 생각을 했다.","미안해요. 제 질투를 당신이 해결해 줘야 한다고 생각했네요. 앞으로는 약속을 물어볼게요. 요구하지 않고.","오늘은 거리를 두고 생각하고 싶어요.","…알겠어요. 잡아 두지 않을게요. 제가 먼저 생각해 볼게요."]},"임하나":{"j":2,"gap":8,"theme":"혼자 삼킨 마음","lines":["하나가 입을 열려다가 손끝을 내려다봤다.","다른 분과 놀았다는 얘기 듣고 조금 부러웠어요. 제가 그 시간을 달라고 할 수 있는 건 아니지만요.","저도 보고 싶다고 말하고 싶었는데 바쁘실까 봐 계속 참았어요. 그러다 혼자 서운해졌어요.","하나 씨도 원하는 걸 말할 수 있어요.","……네. 제가 말하지 않으면 모르시는 게 당연하죠.","하나가 메모장에 적어 둔 하고 싶은 일들을 다시 읽었다.","저도 그냥 기다리기만 하지 않을래요. 보고 싶은 날엔 먼저 물어볼게요.","조금 생각할 시간을 가져요.","네. 저도 제가 원하는 게 뭔지 생각해 볼게요."]},"차유리":{"j":0,"gap":10,"theme":"독립성과 관계의 균형","lines":["유리가 스케치북을 덮으며 당신을 바라봤다.","다른 사람이랑 노는 거? 재밌었으면 됐죠. 애인이 생겼다고 친구를 정리할 필요는 없잖아요.","혼자 작업하는 건 좋은데, 요즘 같이 보내는 시간도 좀 만들고 싶더라고요. 각자 시간만 챙긴 것 같아서.","각자 시간도, 함께할 시간도 같이 정해요.","좋다. 둘 중 하나만 골라야 하는 건 아니니까.","유리가 마감 일정을 확인한 뒤 휴대전화를 꺼냈다.","오케이. 이번엔 제가 비는 시간부터 알려 줄게요. 그쪽도 괜찮을 때 말해요.","각자 좀 정리하고 다시 만나죠.","좋아요. 생각 정리되면 연락할게요."]},"오세린":{"j":0,"gap":11,"theme":"편안함과 무관심 사이","lines":["세린이 찻잔을 내려놓고 잠시 생각했다.","다른 사람과 즐거운 시간을 보내셨군요. 그것 때문에 마음이 달라질 거라고 생각하진 않아요.","으음, 서로 편하다고 해서 중요한 이야기를 미뤄도 된다는 건 아니겠죠. 요즘 안부가 조금 궁금했어요.","편안한 관계라도 마음은 표현해요.","아아, 맞아요. 저도 제 마음을 좀 더 말할게요.","세린이 차를 다시 따르며 천천히 웃었다.","서로 익숙해진 만큼 표현을 잊지 않으려고요. 오늘은 제 이야기도 들어 주시겠어요?","서로 쉬고 나서 이야기해요.","네. 편안히 정리할 시간을 가져요."]},"유지안":{"j":1,"gap":9,"theme":"밝은 척하는 마음","lines":["지안이 활짝 웃으려다 짧게 숨을 내쉬었다.","와우, 다른 데서도 재밌게 놀았네요! …나도 좀 같이 놀고 싶었어요.","괜히 씩씩하게 괜찮다고 했는데, 사실은 좀 보고 싶었어요. 기대했다가 실망하는 게 싫어서요.","괜찮은 척하지 않아도 돼요.","……고마워요. 기대하는 것도 제 마음이니까요.","지안이 연습 영상을 멈추고 당신에게 몸을 돌렸다.","다음엔 기대하는 걸 숨기지 않을래요. 대신 서로 일정은 지켜요!","잠깐 쉬고 다시 이야기해요.","넵. 저도 마음 정리하고 연락할게요."]},"공재희":{"j":4,"gap":5,"theme":"사랑받는다는 확신","lines":["재희가 휴대전화 화면을 껐다 켰다 하다가 당신을 바라봤다.","아… 다른 사람이랑 놀았다고 하니까 괜히 나보다 그쪽이 더 좋은가 싶음. 우리 사귀는데도 이러네.","요즘 답장 기다리다가 혼자 별 생각 다 했어요. 애인 됐으면 안 불안할 줄 알았는데 더 신경 쓰여요.","마음은 변하지 않았지만 서로의 일상도 중요해요.","웅… 내가 불안하다고 계속 확인해 달라고 하면 힘들겠죠. 나도 내 거 해 볼게요.","재희가 휴대전화를 뒤집어 놓고 흰 곰인형을 끌어안았다.","아까는 미안해요. 나 혼자 생각하다가 그쪽까지 힘들게 했네. 다음엔 물어보고 기다릴게요.","오늘은 잠깐 각자 시간을 가져요.","웅. 나도 방송 준비하면서 좀 정리해 볼게요."]}};
const coupleRepairReplies = {
 '서이준': [
  ['저도 보고 싶었어요. 다음엔 그냥 그렇게 말해 줘요.', '나도 보고 싶었어. 다음엔 그냥 그렇게 말해 줘.', '…그럼 지금 말할게요. 보고 싶어요.', '…그럼 지금 말할게. 보고 싶어.'],
  ['저는 그날 말이 아직 마음에 걸려요. 조금만 시간을 줘요.', '난 그날 말이 아직 마음에 걸려. 조금만 시간을 줘.', '알겠어요. 미안하다고 해 놓고 답까지 재촉하긴 싫어요.', '알겠어. 미안하다고 해 놓고 답까지 재촉하긴 싫어.']
 ],
 '강도윤': [
  ['좋아요. 다음에 만나면 뭐 하고 싶어요?', '좋아. 다음에 만나면 뭐 하고 싶어?', '손잡고 천천히 걷고 싶어요. 오늘은 대답이 바로 나오네요.', '손잡고 천천히 걷고 싶어. 오늘은 대답이 바로 나오네.'],
  ['듣고 싶어요. 근데 오늘은 저도 생각할 시간이 좀 필요해요.', '듣고 싶어. 근데 오늘은 나도 생각할 시간이 좀 필요해.', '그래요. 나중에 만나면 그땐 저도 숨기지 않고 얘기할게요.', '그래. 나중에 만나면 그땐 나도 숨기지 않고 얘기할게.']
 ],
 '한시우': [
  ['그럼 그때 하려던 말, 지금 해 줄래요?', '그럼 그때 하려던 말, 지금 해 줄래?', '같이 있고 싶었어요. 한마디면 되는데 그날은 그게 되게 어렵더라고요.', '같이 있고 싶었어. 한마디면 되는데 그날은 그게 되게 어렵더라.'],
  ['웃어넘긴 게 좀 서운했어요. 이따 얘기해요.', '웃어넘긴 게 좀 서운했어. 이따 얘기하자.', '저만 웃은 거잖아요. 이따 얘기할 땐 끝까지 들을게요.', '나만 웃은 거잖아. 이따 얘기할 땐 끝까지 들을게.']
 ],
 '정태오': [
  ['그렇게 해 주세요. 시간을 알면 저도 마음이 편해요.', '그렇게 해 줘. 시간을 알면 나도 마음이 편해.', '알겠습니다. 다음 근무표가 나오면 먼저 연락드리겠습니다.', '알겠어. 다음 근무표가 나오면 먼저 연락할게.'],
  ['약속은 나중에 잡아요. 오늘은 저도 좀 쉬고 싶어요.', '약속은 나중에 잡자. 오늘은 나도 좀 쉬고 싶어.', '예. 기다리느라 피곤하셨겠습니다. 오늘은 푹 쉬십시오.', '그래. 기다리느라 피곤했겠다. 오늘은 푹 쉬어.']
 ],
 '백지한': [
  ['물어봐 주면 좋아요. 저도 보고 싶은 날엔 먼저 연락할게요.', '물어봐 주면 좋아. 나도 보고 싶은 날엔 먼저 연락할게.', '그 연락 받으면 좋겠네요. 그날은 어디 갈지도 맡겨 볼까요?', '그 연락 받으면 좋겠다. 그날은 어디 갈지도 맡겨 볼까?'],
  ['지금은 다음 약속까지 정하고 싶진 않아요. 조금 기다려 줄래요?', '지금은 다음 약속까지 정하고 싶진 않아. 조금 기다려 줄래?', '언제까지냐고 쓰다가 지웠어요. 이번엔 기다려 볼게요.', '언제까지냐고 쓰다가 지웠어. 이번엔 기다려 볼게.']
 ],
 '임하나': [
  ['먼저 연락해 주면 반가울 것 같아요.', '먼저 연락해 주면 반가울 것 같아.', '그 말 들으니까 좀 안심돼요. 다음엔 쓰다 지우지 말고 보낼게요.', '그 말 들으니까 좀 안심돼. 다음엔 쓰다 지우지 말고 보낼게.'],
  ['연락 줘서 고마워요. 오늘은 혼자 좀 있어도 될까요?', '연락 줘서 고마워. 오늘은 혼자 좀 있어도 될까?', '그럼요. 저도 이렇게 말하고 나니까 마음이 좀 가벼워졌어요.', '그럼. 나도 이렇게 말하고 나니까 마음이 좀 가벼워졌어.']
 ],
 '차유리': [
  ['좋아요. 서로 여유 있는 날 골라 봐요.', '좋아. 서로 여유 있는 날 골라 보자.', '좋죠. 마감이랑 안 겹치는 날로 봐 둘게요. 만나서 시계만 보면 아깝잖아요.', '좋지. 마감이랑 안 겹치는 날로 봐 둘게. 만나서 시계만 보면 아깝잖아.'],
  ['날짜 얘기는 조금 있다 해요. 아직 생각이 복잡해서요.', '날짜 얘기는 조금 있다 하자. 아직 생각이 복잡해서.', '아, 제가 달력부터 폈네요. 날짜는 나중에 골라도 돼요.', '아, 내가 또 달력부터 폈네. 날짜는 나중에 골라도 돼.']
 ],
 '오세린': [
  ['네. 오늘은 제가 들을게요. 무슨 말이 하고 싶었어요?', '응. 오늘은 내가 들을게. 무슨 말이 하고 싶었어?', '별일 없는 날에도 목소리가 듣고 싶었어요. 그 얘기부터 하고 싶었어요.', '별일 없는 날에도 목소리가 듣고 싶었어. 그 얘기부터 하고 싶었어.'],
  ['제대로 듣고 싶어요. 조금 있다 얘기해도 괜찮아요?', '제대로 듣고 싶어. 조금 있다 얘기해도 괜찮아?', '물론이죠. 마음이 분주한 날엔 잠깐 쉬었다 얘기하는 게 좋더라고요.', '물론이지. 마음이 분주한 날엔 잠깐 쉬었다 얘기하는 게 좋더라.']
 ],
 '유지안': [
  ['저도 기대하고 있다는 말, 앞으로는 아끼지 않을게요.', '나도 기대하고 있다는 말, 앞으로는 아끼지 않을게.', '좋아요. 그 말 한마디면 각자 바쁜 날에도 괜히 웃을 것 같아요.', '좋아. 그 말 한마디면 각자 바쁜 날에도 괜히 웃을 것 같아.'],
  ['말해 줘서 고마워요. 저는 무슨 말을 하고 싶은지 조금 더 생각해 볼게요.', '말해 줘서 고마워. 난 무슨 말을 하고 싶은지 조금 더 생각해 볼게.', '그래요. 오늘은 제 마음 들려줬으니까 됐어요. 다음엔 저도 들을게요.', '그래. 오늘은 내 마음 들려줬으니까 됐어. 다음엔 나도 들을게.']
 ],
 '공재희': [
  ['궁금하면 저한테 물어봐요. 저도 솔직하게 말할게요.', '궁금하면 나한테 물어봐. 나도 솔직하게 말할게.', '좋아요. 혼자서 질문하고 대답까지 다 해 버렸거든요. 다음엔 대답 올 때까지 기다릴게요.', '웅. 혼자서 질문하고 대답까지 다 해 버렸거든. 다음엔 대답 올 때까지 기다릴게.'],
  ['아직 좀 속상해요. 이따 제가 먼저 연락해도 돼요?', '아직 좀 속상해. 이따 내가 먼저 연락해도 돼?', '그럼요. 답 늦어도 폰만 들여다보고 있진 않을게요.', '웅. 답 늦어도 폰만 들여다보고 있진 않을게.']
 ]
};

function settleCoupleIssue(p,issue,label){
 const r=coupleIssueRecord(p),day=initSim().day;
 r.resolved=(r.resolved||0)+1;
 r.active=null;
 r.last=day;
 feel(p,{hurt:-Math.max(2,issue.hurt||0),jealousy:-6,distrust:-4,security:4});
 remember(p,'couple:repair:'+day,coupleConflictVoices[p].theme+' / '+label);
}
function applyCoupleIssueAnswer(p,x,i,label,reply){
 const v=initSim(),r=coupleIssueRecord(p),theme=coupleConflictVoices[p].theme,repair=x.status==='ready';
 if(repair&&i===0){
  settleCoupleIssue(p,x,label);
 }else{
  r.active={...x,status:'waiting',reviewDay:v.day+(i===0?1:2)};
  if(i===0)feel(p,{security:1});
 }
 r.history.push({day:v.day,kind:x.kind,repair,choice:i,label,reply});
 writeJournal(p+' · '+theme+(repair&&i===0?' 화해':' 마음을 나눔'));
}

function currentRepairIssue(v,p){
 const x=v.couple?.[p]?.issue?.active;
 return !v.finished&&v.romance?.[p]==='dating'&&x?.status==='ready'&&x.kind!=='betrayal'?x:null;
}

function matchesRepairNotice(x,m){
 return !!x&&m.coupleRepair.issueDay===x.day&&m.coupleRepair.reviewDay===x.reviewDay;
}

function syncRepairMessages(v,phone){
 for(const [p,thread] of Object.entries(phone.threads)){
  const x=currentRepairIssue(v,p);
  for(const m of thread){
   if(m.coupleRepair){
    if(!m.reply&&!matchesRepairNotice(x,m))m.reply=3;
    continue;
   }
   // Older saves stored this incoming text as an already answered booking.
   if(!x||!m.booking||m.reply!==1||m.playerLine!==''||m.day<x.reviewDay||m.replyDay!=null)continue;
   const oldIjun=p==='서이준'&&m.npcLine==='…그날 제가 입을 닫아 버렸죠. 미안해요. 다음엔 그냥 보고 싶다고 말할게요.';
   if(!oldIjun&&m.npcLine!==coupleConflictVoices[p]?.lines[6])continue;
   m.coupleRepair={issueDay:x.day,reviewDay:x.reviewDay};
   delete m.booking;
   delete m.reply;
   delete m.replySpeech;
  }
 }
}

function renderRepairMessage(v,p,m,group,bubble){
 bubble(p,m.npcLine);
 if(m.repairAnswer){
  bubble(state.name,m.repairAnswer.label,true);
  bubble(p,m.repairAnswer.response);
  return;
 }
 const x=currentRepairIssue(v,p);
 if(m.reply||!matchesRepairNotice(x,m))return;
 const event=v.activeEvent;
 if(event?.person===p&&(event.coupleIssue||event.npcBreakup||event.breakup||event.doorVisit?.reason==='repair')){
  group.append(document.createTextNode('진행 중인 대화에서 마음을 전할 수 있어요.'));
  return;
 }
 const address=memoryFor(p).address;
 const casual=mode=>mode==='반말'||(mode==='혼용'&&v.day%2===0);
 for(const [i,lines] of coupleRepairReplies[p].entries()){
  const label=lines[casual(address.playerSpeech)?1:0];
  const response=lines[casual(address.npcSpeech)?3:2];
  const button=document.createElement('button');
  button.type='button';
  button.className='secondary';
  button.textContent=phoneChoiceText(p,m,label);
  button.onclick=()=>{
   if(m.reply||!matchesRepairNotice(currentRepairIssue(v,p),m)||
      (v.activeEvent?.person===p&&v.activeEvent.doorVisit?.reason==='repair'))return;
   m.reply=i+1;
   m.replyDay=v.day;
   m.replySpeech={npc:address.npcSpeech||'존댓말',player:address.playerSpeech||'존댓말'};
   m.repairAnswer={label,response};
   applyCoupleIssueAnswer(p,x,i,label,response);
   save();phoneBadge();renderPhone();renderSim();
  };
  group.append(button);
 }
}
const everydayArgumentScenes = {
 "유지안": {
  setup: "지안이 가 보고 싶다며 보낸 가게 사진 밑에는 당신이 눌러 둔 하트가 달려 있었다. 빵집도, 밤에만 여는 책방도 그랬다. 여러 날 뒤, 지안은 그중 한 곳의 주소를 다시 보내려다 지웠다.",
  opening: ["나 궁금한 거 있어요. 내가 어디 가고 싶다고 보내면 하트 누르잖아요. 그거 그냥 ‘봤다’예요?", "나 궁금한 거 있어. 내가 어디 가고 싶다고 보내면 하트 누르잖아. 그거 그냥 ‘봤다’야?"],
  truth: ["그 빵집에 밤식빵 몇 시에 나오는지 전화까지 해 봤거든요. 끊고 보니 우리 언제 갈지도 안 정한 거예요. 그때부터였어요.", "그 빵집에 밤식빵 몇 시에 나오는지 전화까지 해 봤거든. 끊고 보니 우리 언제 갈지도 안 정한 거야. 그때부터였어."],
  pushback: ["좋아서 눌렀죠. 전에 제가 빵집부터 가자니까 멀다고 뺀 건 누구예요?", "좋아서 눌렀지. 전에 내가 빵집부터 가자니까 멀다고 뺀 건 누구야?"],
  retort: ["내가 그러면 끝이에요? ‘멀어도 난 너랑 거기 가고 싶은데.’ 그 말 한 번 하는 게 그렇게 어려워요?", "내가 그러면 끝이야? ‘멀어도 난 너랑 거기 가고 싶은데.’ 그 말 한 번 하는 게 그렇게 어려워?"],
  mySide: ["나도 그 빵집에서 먹고 싶은 거 두 개나 골라 뒀어요. 못 가게 됐을 때 나까지 아쉽다고 하면 꼭 데려가 달라고 조르는 것 같았어요.", "나도 그 빵집에서 먹고 싶은 거 두 개나 골라 뒀어. 못 가게 됐을 때 나까지 아쉽다고 하면 꼭 데려가 달라고 조르는 것 같았어."],
  walkAway: ["아, 됐어요. 내가 좋아서 보낸 걸 가지고 뭐 하는 건지. 이제 각자 가고 싶은 데 가요.", "아, 됐어. 내가 좋아서 보낸 걸 가지고 뭐 하는 건지. 이제 각자 가고 싶은 데 가."],
  playerExitReply: ["잠깐만, 내가 언제 혼자 알아서 하겠댔어요? ……아, 알았어요. 오늘은 그만할게요.", "잠깐만, 내가 언제 혼자 알아서 하겠댔어? ……아, 알았어. 오늘은 그만할게."],
  silentAction: "먼저 입을 연 사람은 지안이었다. 잔뜩 벼른 듯 첫마디는 컸는데, 두 번째 말을 꺼낼 때는 숨을 한 번 삼켜야 했다.",
  afterNpcExit: ["나 혼자 그 빵집 앞까지 갔거든요. 근데 뭐가 맛있는지 내가 왜 먼저 알아야 돼요? 둘이 같이 먹어 보고 싶었는데. 그래서 그냥 왔어요.", "나 혼자 그 빵집 앞까지 갔거든. 근데 뭐가 맛있는지 내가 왜 먼저 알아야 돼? 둘이 같이 먹어 보고 싶었는데. 그래서 그냥 왔어."],
  afterPlayerExit: ["나한테 알아서 하랬죠. 나 그거 해 봤는데 재미 하나도 없어요. 나 혼자 신났던 건지, 그것만 좀 물어보면 안 돼요?", "나한테 알아서 하랬지. 나 그거 해 봤는데 재미 하나도 없어. 나 혼자 신났던 건지, 그것만 좀 물어보면 안 돼?"],
  early: ["나 아직 조금 화났어요. 그래도 말 걸어 준 건 좋아요. 둘 다 진짜예요.", "나 아직 조금 화났어. 그래도 말 걸어 준 건 좋아. 둘 다 진짜야."],
  repair: ["그 빵집 나 아직 가고 싶어요. 길 찾는 건 내가 할게요. 언제 갈지는 같이 골라요. 멀다는 소리는 이번엔 안 할게요.", "그 빵집 나 아직 가고 싶어. 길 찾는 건 내가 할게. 언제 갈지는 같이 고르자. 멀다는 소리는 이번엔 안 할게."],
  answer: ["다음에 둘 다 늦잠 잘 수 있는 날 어때요? 나는 그 집 밤식빵이 먹고 싶어요. 이건 하트만 눌러 두지 않을게요.", "다음에 둘 다 늦잠 잘 수 있는 날 어때? 나는 그 집 밤식빵이 먹고 싶어. 이건 하트만 눌러 두지 않을게."],
  unresolved: ["알았어요. 지금 약속부터 잡으면 또 내 속도대로 가는 거겠죠. 주소는 잘 갖고 있을게요.", "알았어. 지금 약속부터 잡으면 또 내 속도대로 가는 거겠지. 주소는 잘 갖고 있을게."]
 },
 "서이준": {
  setup: "금요일에 같이 보기로 한 영화는 이준의 야근 때문에 한 번 미뤘다. 근무표가 나오면 다시 날짜를 알려 주겠다는 말에, 나는 괜찮으니까 일부터 보라고 했다. 며칠 뒤 이준이 휴대전화로 그 영화의 상영 시간표를 보여 줬다.",
  opening: ["다음 주엔 내린대요. 또 저한테 맞추다 놓치면 아깝잖아요. 이번엔 각자 편할 때 볼까요?", "다음 주엔 내린대. 또 나한테 맞추다 놓치면 아깝잖아. 이번엔 각자 편할 때 볼까?"],
  truth: ["그날 퇴근길부터요. 극장 앞을 지나는데 딱 우리 영화가 끝날 시간이더라고요. 전화해서 아쉽다고 하고 싶었어요. 약속 미룬 사람이 저면서요.", "그날 퇴근길에. 극장 앞을 지나는데 딱 우리 영화가 끝날 시간이더라. 전화해서 아쉽다고 하고 싶었어. 약속 미룬 사람이 나면서."],
  pushback: ["날짜 다시 알려 준다면서요. 전 같이 보려고 기다렸는데, 왜 갑자기 따로 봐요?", "날짜 다시 알려 준다며. 난 같이 보려고 기다렸는데, 왜 갑자기 따로 봐?"],
  retort: ["……그날 제가 야근한다고 했을 때 괜찮다고 했잖아요. 진짜 괜찮았나, 나만 그 금요일이 아까웠나. 며칠 내내 그 생각을 했어요.", "……그날 내가 야근한다고 했을 때 괜찮다고 했잖아. 진짜 괜찮았나, 나만 그 금요일이 아까웠나. 며칠 내내 그 생각을 했어."],
  mySide: ["저도 그날 보고 싶었어요. 야근하러 가는 사람 맘 쓰일까 봐 괜찮다고 한 건데, 그게 왜 따로 보자는 얘기로 돌아와요?", "나도 그날 보고 싶었어. 야근하러 가는 사람 맘 쓰일까 봐 괜찮다고 한 건데, 그게 왜 따로 보자는 얘기로 돌아와?"],
  walkAway: ["……그만해요. 저 지금 얼마나 아쉬웠냐고 묻고 싶거든요. 제가 약속 미뤄 놓고 할 소리는 아니잖아요.", "……그만하자. 나 지금 얼마나 아쉬웠냐고 묻고 싶거든. 내가 약속 미뤄 놓고 할 소리는 아니잖아."],
  playerExitReply: ["……네. 오늘은 갈게요. 시간표 보여 주면 금방 얘기가 될 줄 알았는데.", "……응. 오늘은 갈게. 시간표 보여 주면 금방 얘기가 될 줄 알았는데."],
  silentAction: "이준이 주머니에서 휴대전화를 꺼냈다가, 화면을 켜기도 전에 도로 넣었다. 이번엔 내 얼굴을 보고 입을 열었다.",
  afterNpcExit: ["며칠 동안 전화 오면 무슨 말 할지만 생각했어요. 그만하자고 한 건 저면서. ……그날 보고 싶었어요. 오늘도 그렇고요.", "며칠 동안 전화 오면 무슨 말 할지만 생각했어. 그만하자고 한 건 나면서. ……그날 보고 싶었어. 오늘도 그렇고."],
  afterPlayerExit: ["집에 가서 제일 마음에 걸린 게 뭔지 알아요? 기다려 준 사람한테 제가 먼저 따로 보자고 한 거예요. 미안해요.", "집에 가서 제일 마음에 걸린 게 뭔지 알아? 기다려 준 사람한테 내가 먼저 따로 보자고 한 거야. 미안해."],
  early: ["저도 그날 얘길 꺼내고 싶었어요. 다시 날짜를 잡자는 말을 적었다 지웠다 했거든요. 그게 뭐 그렇게 어려운 말이라고.", "나도 그날 얘길 꺼내고 싶었어. 다시 날짜 잡자는 말을 적었다 지웠다 했거든. 그게 뭐 그렇게 어려운 말이라고."],
  repair: ["저는 같이 보고 싶어요. 아직 걸려 있으면 그 영화 보고, 내려갔으면 우리 저녁 먹을래요? 금요일에 제일 아까웠던 건 못 만난 거였어요.", "난 같이 보고 싶어. 아직 걸려 있으면 그 영화 보고, 내려갔으면 우리 저녁 먹을래? 금요일에 제일 아까웠던 건 못 만난 거였어."],
  answer: ["같이 봐요. 영화 놓치면 저녁은 제가 고를게요. 저도 그날 얼굴 좀 보려고 했어요.", "같이 보자. 영화 놓치면 저녁은 내가 고를게. 나도 그날 네 얼굴 좀 보려고 했어."],
  unresolved: ["……네. 그럼 오늘은 이것만 말할게요. 금요일에 기다려 줘서 고마웠어요. 그 말이 많이 늦었네요.", "……응. 그럼 오늘은 이것만 말할게. 금요일에 기다려 줘서 고마웠어. 그 말이 많이 늦었네."]
 },
 "강도윤": {
  setup: "도윤은 집에 도착하면 으레 전화를 걸었다. 어젯밤엔 벨이 울리지 않았다. 가게 일이 고됐나 싶어서 오늘도 피곤하면 일찍 자라고 했더니, 도윤이 대뜸 어제는 몇 시에 잤느냐고 물었다.",
  opening: ["어제 통화 목록을 쭉 내리는데 전부 제가 건 거더라고요. 그래서 한번 기다려 봤어요. 밤 열두 시 반까지.", "어제 통화 목록을 쭉 내리는데 전부 내가 건 거더라. 그래서 한번 기다려 봤어. 밤 열두 시 반까지."],
  truth: ["가게 문 잠그고요. 문득 오늘은 내가 집에 다 왔는지 먼저 물어봐 줬으면 좋겠다 싶었어요. 그 마음으로 집까지 걸어오는데 길이 참 길더라고요.", "가게 문 잠그고. 문득 오늘은 내가 집에 다 왔는지 먼저 물어봐 줬으면 좋겠다 싶었어. 그 마음으로 집까지 걸어오는데 길이 참 길더라."],
  pushback: ["나도 기다렸어요. 집에 도착하면 전화한다고 해서 먼저 안 건 날도 많아요.", "나도 기다렸어. 집에 도착하면 전화한다고 해서 먼저 안 건 날도 많아."],
  retort: ["그럼 어제는요? 안 오네 싶으면 걸어 볼 수도 있었잖아요. 저 혼자 벨 소리만 기다리는 게 좀 서럽더라고요.", "그럼 어제는? 안 오네 싶으면 걸어 볼 수도 있었잖아. 나 혼자 벨 소리만 기다리는 게 좀 서럽더라."],
  mySide: ["전화가 와야만 기다렸다는 표시가 남잖아요. 자다가 벨을 놓칠까 봐 소리를 키워 두고 잔 날은 거기 어디에도 안 나오고요.", "전화가 와야만 기다렸다는 표시가 남잖아. 자다가 벨을 놓칠까 봐 소리를 키워 두고 잔 날은 거기 어디에도 안 나오고."],
  walkAway: ["됐어요. 전화 한 통 갖고 이러는 저도 싫어요. 오늘은 그냥 자요.", "됐어. 전화 한 통 갖고 이러는 나도 싫어. 오늘은 그냥 자."],
  playerExitReply: ["…네. 푹 자요. 피곤한데 괜히 붙들었네요.", "…응. 푹 자. 피곤한데 괜히 붙들었네."],
  silentAction: "도윤이 먼저 말을 걸었다. 늘 하던 대로 저녁은 먹었냐고 묻더니, 내 대답을 다 듣기도 전에 말을 쏟아 냈다.",
  afterNpcExit: ["그날 전화 안 한 거 미안해요. 그냥 자라고 한 건 더 미안하고요. 제가 먼저 밀어내 놓고 이렇게 보고 싶어서 어떡해요. ……저 좀 봐 줘요. 네? 한 번만요.", "그날 전화 안 한 거 미안해. 그냥 자라고 한 건 더 미안해. 내가 먼저 밀어내 놓고 이렇게 보고 싶어서 어떡하지. ……나 좀 봐 줘. 응? 한 번만."],
  afterPlayerExit: ["미안해요. 몇 시에 잤냐고 따진 게 자꾸 생각나요. 전화가 안 왔으면 제가 걸면 됐잖아요. 한 번만 더 얘기해요. 제가 잘못했어요.", "미안해. 몇 시에 잤냐고 따진 게 자꾸 생각나. 전화가 안 왔으면 내가 걸면 됐잖아. 한 번만 더 얘기하자. 내가 잘못했어."],
  early: ["사실 먼저 전화해 주면 얼마나 반가운지 좀 자랑하고 싶었어요. 받자마자 웃음부터 나올 줄 알았는데, 일이 이렇게 됐네요.", "사실 먼저 전화해 주면 얼마나 반가운지 좀 자랑하고 싶었어. 받자마자 웃음부터 나올 줄 알았는데, 일이 이렇게 됐네."],
  repair: ["오늘은 제가 걸고 싶어요. 그날 밤에 무슨 생각 했는지도 들려줄래요? 몇 시에 잤냐고만 묻고, 그건 안 물었네요.", "오늘은 내가 걸고 싶어. 그날 밤에 무슨 생각 했는지도 들려줄래? 몇 시에 잤냐고만 묻고, 그건 안 물었네."],
  answer: ["그날은 잠들었나 싶으면서도 못 자겠더라고요. 오늘은 걸어 줘요. 목소리 들으면서 마저 얘기하고 싶어요.", "그날은 잠들었나 싶으면서도 못 자겠더라. 오늘은 걸어 줘. 목소리 들으면서 마저 얘기하고 싶어."],
  unresolved: ["네. 오늘은 푹 쉬어요. 이 말은 정말로 쉬었으면 해서 하는 말이에요.", "응. 오늘은 푹 쉬어. 이 말은 정말로 쉬었으면 해서 하는 말이야."]
 },
 "한시우": {
  setup: "헤어질 때면 시우가 늘 먼저 등을 떠밀었다. 늦겠다, 얼른 들어가라면서. 지난번엔 모퉁이를 돌아서다 뒤를 봤다. 아직 거기 서 있던 시우가 내 눈을 보자 얼른 반대쪽으로 걸어갔다. 그 얘기를 꺼내자 평소 같으면 세 마디는 했을 애가 조용해졌다.",
  opening: ["그날 다시 올 줄 알았어요. 나 봤잖아요. 손만 딱 흔들고 가더라.", "그날 다시 올 줄 알았어. 나 봤잖아. 손만 딱 흔들고 가더라."],
  truth: ["손 흔들어 줬을 때요. 그 손 다시 잡고 싶은데, 나 없어도 벌써 잘 가고 있구나 싶었어요. 나도 잘 가는 척한 게 그때예요.", "손 흔들어 줬을 때. 그 손 다시 잡고 싶은데, 나 없어도 벌써 잘 가고 있구나 싶었어. 나도 잘 가는 척한 게 그때야."],
  pushback: ["먼저 돌아섰잖아요. 내가 거기서 뛰어오길 바랐으면 왜 먼저 가 버려요?", "너도 돌아섰잖아. 내가 거기서 뛰어오길 바랐으면 왜 먼저 가 버려?"],
  retort: ["안 그러면 거기 서서 진짜 가는 것까지 봐야 되잖아요. 나만 헤어지기 싫은 것 같아서, 그게 진짜 싫었어요.", "안 그러면 거기 서서 진짜 가는 것까지 봐야 되잖아. 나만 헤어지기 싫은 것 같아서, 그게 진짜 싫었어."],
  mySide: ["나는 헤어지기 좋았겠어요? 등을 떠미는데 거기서 내 쪽으로 한 번 더 잡아끄는 것도 용기가 필요해요.", "나는 헤어지기 좋았겠어? 등을 떠미는데 거기서 내 쪽으로 한 번 더 잡아끄는 것도 용기가 필요해."],
  walkAway: ["아, 됐어요. 나 또 붙잡고 있네요. 가도 돼요. 오늘은 뒤 안 돌아볼게요.", "아, 됐어. 나 또 붙잡고 있네. 가도 돼. 오늘은 뒤 안 돌아볼게."],
  playerExitReply: ["…네. 피곤한 사람 잡아서 뭐 해요. 갈게요.", "…응. 피곤한 사람 잡아서 뭐 해. 갈게."],
  silentAction: "시우가 먼저 내 이름을 불렀다. 씩씩하게 시작한 목소리가 두 번째 음절에서 뒤집혔다. 눈 밑을 문질렀는데도 눈물이 또 고이자 시우가 기막힌 얼굴로 웃었다.",
  afterNpcExit: ["아니, 근데 가라고 했다고 진짜 나 안 봐 줄 거예요? …아, 진짜. 내가 해 놓고 이러는 거 아는데. 너무 보고 싶었어요.", "아니, 근데 가라고 했다고 진짜 나 안 봐 줄 거야? …아, 진짜. 내가 해 놓고 이러는 거 아는데. 너무 보고 싶었어."],
  afterPlayerExit: ["피곤하다는데 또 붙잡으면 진짜 나한테 질릴까 봐 꾹 참았어요. 근데 이제는 나 안 보고도 괜찮은가 싶어서. …나 그거 물어보는 게 왜 이렇게 무섭죠?", "피곤하다는데 또 붙잡으면 진짜 나한테 질릴까 봐 꾹 참았어. 근데 이제는 나 안 보고도 괜찮은가 싶어서. …나 그거 물어보는 게 왜 이렇게 무섭지?"],
  early: ["어, 나 먼저 말하려고 했는데. …아니, 사실은 뭐라고 말을 걸지 하나도 생각 안 났어요. 와 줘서 좋아요.", "어, 나 먼저 말하려고 했는데. …아니, 사실은 뭐라고 말을 걸지 하나도 생각 안 났어. 와 줘서 좋아."],
  repair: ["조금만 더 같이 있어요. 지금 하는 이 말, 사실 그날 하고 싶었어요.", "조금만 더 같이 있자. 지금 하는 이 말, 사실 그날 하고 싶었어."],
  answer: ["나도 그래요. 오늘은 내가 먼저 손 잡을래요. 조금만 더 같이 있어요.", "나도 그래. 오늘은 내가 먼저 손 잡을래. 조금만 더 같이 있자."],
  unresolved: ["알겠어요. 속상하면 속상하다고 해 줘요. 또 나부터 웃어서 없던 일 만들진 않을게요.", "알겠어. 속상하면 속상하다고 해 줘. 또 나부터 웃어서 없던 일 만들진 않을게."]
 },
 "백지한": {
  setup: "지한이 좋아할 만한 두부 요리를 찾아 내가 고른 식당이었다. 맛있어하길래 사 주는 보람이 있다고 생각했다. 그런데 잠깐 자리를 비운 사이 지한이 계산을 끝냈다. 몇 번째인지 몰라 이번엔 내 몫을 계좌로 보냈다. 돈이 돌아오는 데 일 분도 안 걸렸다.",
  opening: ["그렇게 칼같이 반을 보내 버리면, 어제 같이 밥 먹은 게 무슨 정산할 일이라도 된 것 같잖아요.", "그렇게 칼같이 반을 보내 버리면, 어제 같이 밥 먹은 게 무슨 정산할 일이라도 된 것 같잖아."],
  truth: ["송금 알림 떴을 때요. 아까는 내 옆에서 그렇게 잘 웃더니, 혼자 돌아갈 때는 나한테 빚진 기분이었나 싶어서요. 듣기 싫으니까 돌려보내기부터 눌렀죠.", "송금 알림 떴을 때. 아까는 내 옆에서 그렇게 잘 웃더니, 혼자 돌아갈 때는 나한테 빚진 기분이었나 싶어서. 듣기 싫으니까 돌려보내기부터 눌렀지."],
  pushback: ["내가 사고 싶어서 골랐어요. 맛있게 먹는 얼굴이나 보려던 건데 그 한 번을 못 기다려 줘요?", "내가 사고 싶어서 골랐어. 맛있게 먹는 얼굴이나 보려던 건데 그 한 번을 못 기다려 줘?"],
  retort: ["다음에 사 주면 되죠. 굳이 반을 돌려보내야 마음이 편해요? 나는 어제 집에 와서도 둘이 잘 먹었다고 생각했는데.", "다음에 사 주면 되잖아. 굳이 반을 돌려보내야 마음이 편해? 난 어제 집에 와서도 둘이 잘 먹었다고 생각했는데."],
  mySide: ["그날 두부 한 입 먹더니 바로 웃었잖아요. 그 얼굴 보는 기분이 얼마나 좋은데요. 좋은 건 왜 맨날 혼자만 해요?", "그날 두부 한 입 먹더니 바로 웃었잖아. 그 얼굴 보는 기분이 얼마나 좋은데. 좋은 건 왜 맨날 혼자만 해?"],
  walkAway: ["그래요. 다음부터는 먹은 만큼씩 내죠. 그러면 됐죠?", "그래. 다음부터는 먹은 만큼씩 내자. 그러면 됐지?"],
  playerExitReply: ["…알겠어요. 이 얘기는 여기까지 하죠.", "…알겠어. 이 얘기는 여기까지 하자."],
  silentAction: "지한이 먼저 말을 걸어왔다. 잘 지냈느냐는 인사 한마디 없이 다짜고짜 그날 식당에서 먹은 두부 요리 이름을 물었다.",
  afterNpcExit: ["그걸 또 먹고 싶은데 혼자 먹으러 가긴 싫어요. 반씩 내자고 할 때는 속이 좀 시원할 줄 알았거든요. 돌아서니까 내가 뭐 하자는 건가 싶던데요.", "그걸 또 먹고 싶은데 혼자 먹으러 가긴 싫어. 반씩 내자고 할 때는 속이 좀 시원할 줄 알았거든. 돌아서니까 내가 뭐 하자는 건가 싶더라."],
  afterPlayerExit: ["어제는 혼자 거기까지 갔다가 문 앞에서 돌아섰어요. 내가 잘하는 걸 해 줬다고 생색은 다 내 놓고, 얻어먹는 것 한 번 못 해서 이게 뭐 하는 짓인가 싶어서요.", "어제는 혼자 거기까지 갔다가 문 앞에서 돌아섰어. 내가 잘하는 걸 해 줬다고 생색은 다 내 놓고, 얻어먹는 것 한 번 못 해서 이게 뭐 하는 짓인가 싶어서."],
  early: ["다음에 사 주면 된다는 말, 생각해 보니 지난번에도 제가 했네요. 어제 그 식당이 바로 그 ‘다음’이었는데.", "다음에 사 주면 된다는 말, 생각해 보니 지난번에도 내가 했네. 어제 그 식당이 바로 그 ‘다음’이었는데."],
  repair: ["한 번만 더 같이 가요. 이번엔 맛있게 먹고 제 입으로 잘 먹었다고 할게요. 그리고 그다음 밥은 내가 사고 싶은데, 그건 괜찮아요?", "한 번만 더 같이 가자. 이번엔 맛있게 먹고 내 입으로 잘 먹었다고 할게. 그리고 그다음 밥은 내가 사고 싶은데, 그건 괜찮아?"],
  answer: ["좋아요. 다음다음 밥은 얻어먹을게요. 대신 이번엔 지갑 두고 와요. 잘 먹었다는 말은 내가 들을래요.", "좋아. 다음다음 밥은 얻어먹을게. 대신 이번엔 지갑 두고 와. 잘 먹었다는 말은 내가 들을래."],
  unresolved: ["그럼 약속은 아직 안 잡을게요. ‘다음에’라는 말, 이번에는 내가 기다리는 쪽으로 해 보죠.", "그럼 약속은 아직 안 잡을게. ‘다음에’라는 말, 이번에는 내가 기다리는 쪽으로 해 볼게."]
 },
 "정태오": {
  setup: "며칠 전 공동현관이 고장 나 한밤중에 밖에서 한참을 보냈다. 관리하는 분이 와서 열어 주셨다는 얘기를 웃으면서 했는데, 태오는 웃지 않았다. 그날 둘이 마지막으로 주고받은 문자를 다시 읽는 눈치였다. 내가 잘 자라고 보낸 게 새벽 한 시였다.",
  opening: ["그 문자, 밖에서 보낸 겁니까? 저는 진짜로 잘 들어간 줄 알고 잤습니다.", "그 문자, 밖에서 보낸 거야? 난 진짜로 잘 들어간 줄 알고 잤어."],
  truth: ["들어갔다고 한 게 아니라 그저 잘 자라고만 했다는 걸, 문자를 다시 읽을 때야 알았습니다. 문 앞에 혼자 서서 제 걱정을 했겠구나 싶었습니다.", "들어갔다고 한 게 아니라 그저 잘 자라고만 했다는 걸, 문자를 다시 읽을 때야 알았어. 문 앞에 혼자 서서 내 걱정을 했겠구나 싶었어."],
  pushback: ["다음 날 새벽 근무였잖아요. 문 열어 주실 분도 오고 계셨고요. 전화해서 깨웠어야 해요?", "다음 날 새벽 근무였잖아. 문 열어 주실 분도 오고 계셨고. 전화해서 깨웠어야 해?"],
  retort: ["문을 열어 달라는 전화만 받습니까, 제가? 기다리는 동안 춥다는 말 정도는 할 수 있잖습니까.", "문 열어 달라는 전화만 받아, 내가? 기다리는 동안 춥다는 말 정도는 할 수 있잖아."],
  mySide: ["그날 얼마나 추웠겠냐고 한마디 해 줬으면 됐어요. 그런데 혼자 기다린 게 왜 잘못인지 설명을 들어야 하잖아요.", "그날 얼마나 추웠겠냐고 한마디 해 줬으면 됐어. 그런데 혼자 기다린 게 왜 잘못인지 설명을 들어야 하잖아."],
  walkAway: ["알겠습니다. 혼자서도 해결할 수 있는 일이었군요. 더 묻지 않겠습니다.", "알겠어. 혼자서도 해결할 수 있는 일이었네. 더 안 물을게."],
  playerExitReply: ["…예. 오늘은 여기까지 하겠습니다.", "…그래. 오늘은 여기까지 하자."],
  silentAction: "태오가 먼저 말을 걸었다. 하고 싶은 말이 있는 사람답지 않게, 첫마디를 꺼내고는 내 대답이 올 때까지 가만히 기다렸다.",
  afterNpcExit: ["어젯밤에 잘 자라고 보내려다가 그날 문자를 또 봤습니다. 그때 내내 밖에 서 있었던 겁니까? 추웠겠다는 말 한마디를 못 했더라고요. 미안합니다.", "어젯밤에 잘 자라고 보내려다가 그날 문자를 또 봤어. 그때 내내 밖에 서 있었어? 추웠겠다는 말 한마디를 못 했더라. 미안해."],
  afterPlayerExit: ["제가 그날이라면 잠옷 위에 외투만 입고 뛰어나갔을 겁니다. 그걸 아니까 말 안 했겠구나 싶더라고요. 깨워 주길 바랐다는 말만 하면 될 걸, 몰아세웠습니다.", "내가 그날이라면 잠옷 위에 외투만 입고 뛰어나갔을 거야. 그걸 아니까 말 안 했겠구나 싶더라. 깨워 줬으면 했다는 말만 하면 될 걸, 몰아세웠어."],
  early: ["실은 그 ‘잘 자요’가 마지막 문자였다는 게 마음에 걸렸습니다. 덕분에 잘 자고 나서 왜 깨우지 않았느냐고 화를 냈으니, 저라도 억울했을 겁니다.", "실은 그 ‘잘 자’가 마지막 문자였다는 게 마음에 걸렸어. 덕분에 잘 자고 나서 왜 안 깨웠냐고 화를 냈으니, 나라도 억울했을 거야."],
  repair: ["다음에 늦은 밤에 전화하면 나와 달라는 뜻으로 짐작하지 않겠습니다. 얘기만 하다 끊어도 좋습니다. 저도 그러고 싶습니다.", "다음에 늦은 밤에 전화하면 나와 달라는 뜻으로 짐작하지 않을게. 얘기만 하다 끊어도 좋아. 나도 그러고 싶어."],
  answer: ["좋아요. 다음엔 춥다고 투덜거리려고 전화할게요. 집에서 이불 덮고 들어 줘요.", "좋아. 다음엔 춥다고 투덜거리려고 전화할게. 집에서 이불 덮고 들어 줘."],
  unresolved: ["그럴 만합니다. 제 걱정까지 달래 줄 필요 없습니다. 먼저 안부를 묻고 싶은 날엔 제가 묻겠습니다.", "그럴 만해. 내 걱정까지 달래 줄 필요는 없어. 먼저 안부를 묻고 싶은 날엔 내가 물을게."]
 },
 "임하나": {
  setup: "지난번에 하나가 하품을 하자 당신은 얼른 막 오는 버스를 가리켰다. 하나는 고개를 끄덕이고 탔다. 그 버스를 타기 전에 이미 한 대를 그냥 보냈다는 얘기는 오늘 처음 들었다.",
  opening: ["저 그날 조금만 더 있다 가려고 했어요. 근데 어떻게 그렇게 얼른 보내요?", "나 그날 조금만 더 있다 가려고 했어. 근데 어떻게 그렇게 얼른 보내?"],
  truth: ["집에 가는 길에요. 창가에 앉아서 다음 정류장에 내려 버릴까 했어요. 근데 벌써 돌아가고 없으면 나만 우스워지잖아요. 그래서 그냥 갔어요.", "집에 가는 길에. 창가에 앉아서 다음 정류장에 내려 버릴까 했어. 근데 벌써 돌아가고 없으면 나만 우스워지잖아. 그래서 그냥 갔어."],
  pushback: ["서서 졸고 있었잖아요. 앉아서 좀 가라고 한 건데 제가 내쫓은 것처럼 말하네요.", "서서 졸고 있었잖아. 앉아서 좀 가라고 한 건데 내가 내쫓은 것처럼 말하네."],
  retort: ["알아요. 아는데, 잘 가라고 손까지 흔드는 걸 보니까 나만 한 대 더 보내고 싶었나 싶잖아요.", "알아. 아는데, 잘 가라고 손까지 흔드는 걸 보니까 나만 한 대 더 보내고 싶었나 싶잖아."],
  mySide: ["그 버스 코너 돌아갈 때까지 나도 정류장에 서 있었어요. 창문 너머로 한 번만 봐 주나 했는데 끝까지 앞만 보더라고요.", "그 버스 코너 돌아갈 때까지 나도 정류장에 서 있었어. 창문 너머로 한 번만 봐 주나 했는데 끝까지 앞만 보더라."],
  walkAway: ["됐어요. 이제 버스 오면 그냥 탈게요. 저도 피곤해요.", "됐어. 이제 버스 오면 그냥 탈게. 나도 피곤해."],
  playerExitReply: ["……네. 저도 오늘은 쫓아가서 괜찮다고 안 할래요.", "……응. 나도 오늘은 쫓아가서 괜찮다고 안 할래."],
  silentAction: "하나가 가방끈을 양손으로 움켜쥐고 먼저 다가왔다. 인사를 하고 나서도 발끝은 돌아갈 쪽을 향해 있었다. 하나가 두 발을 고쳐 디뎠다.",
  afterNpcExit: ["그날 잘 가라는 말 뒤에 제가 뭐라고 했는지 알아요? ‘조금만 더요.’ 버스 문 다 닫히고요. 이번엔 들릴 때 말할래요. 보고 싶어요.", "그날 잘 가라는 말 뒤에 내가 뭐라고 했는지 알아? ‘조금만 더.’ 버스 문 다 닫히고. 이번엔 들릴 때 말할래. 보고 싶어."],
  afterPlayerExit: ["혼자서도 집에는 잘 가요. 근데 계속 이렇게 잘 들어갔냐는 말도 안 하고 지내기는 싫어요. 오늘은 제가 먼저 물을게요. 잘 들어갔어요?", "혼자서도 집에는 잘 가. 근데 계속 이렇게 잘 들어갔냐는 말도 안 하고 지내기는 싫어. 오늘은 내가 먼저 물을게. 잘 들어갔어?"],
  early: ["가만있으면 또 버스 떠나고 나서 말하게 될 것 같았어요. 저도 마침 얘기하려던 참이에요.", "가만있으면 또 버스 떠나고 나서 말하게 될 것 같았어. 나도 마침 얘기하려던 참이야."],
  repair: ["다음에 저 하품하더라도 물어봐 줄래요? 집에 갈 건지, 잠깐 어깨 좀 빌릴 건지. 후자면 저도 냉큼 기댈게요.", "다음에 나 하품하더라도 물어봐 줄래? 집에 갈 건지, 잠깐 어깨 좀 빌릴 건지. 후자면 나도 냉큼 기댈게."],
  answer: ["그럼 다음엔 옆에 앉아서 물어볼게요. 사실 그날도 잠깐 어깨를 빌려주고 싶었어요.", "그럼 다음엔 옆에 앉아서 물어볼게. 사실 그날도 잠깐 어깨를 빌려주고 싶었어."],
  unresolved: ["네. 사실 저도 말 꺼냈다고 금방 멀쩡해지지는 않네요. 그래도 오늘은 할 말 다 했어요.", "응. 사실 나도 말 꺼냈다고 금방 멀쩡해지지는 않네. 그래도 오늘은 할 말 다 했어."]
 },
 "차유리": {
  setup: "지난번에 유리는 혼자 살 집이라며 종이 냅킨에 방이며 부엌을 그렸다. 놀러 가면 어디서 자느냐는 당신의 질문에 유리는 대충 소파를 짚고 종이를 접었다. 접힌 자국 안쪽에는 베개가 두 개 있었다.",
  opening: ["그 집 얘기 기억해요? 놀러 오면 어디서 자냐던 거. 나는 침대를 벽에 붙이면 안쪽 사람이 새벽에 못 나오겠다, 거기까지 갔는데.", "그 집 얘기 기억해? 놀러 오면 어디서 자냐던 거. 나는 침대를 벽에 붙이면 안쪽 사람이 새벽에 못 나오겠다, 거기까지 갔는데."],
  truth: ["소파를 가리키면서요. 내가 바보같이 거기라도 자고 가면 좋겠다는 생각을 하고 있더라니까. 그게 분해서 종이를 접었어요.", "소파를 가리키면서. 내가 바보같이 거기라도 자고 가면 좋겠다는 생각을 하고 있더라니까. 그게 분해서 종이를 접었어."],
  pushback: ["혼자 살고 싶은 집 그린다면서요. 제가 먼저 안방 차지하면 그건 안 민망해요?", "혼자 살고 싶은 집 그린다며. 내가 먼저 안방 차지하면 그건 안 민망해?"],
  retort: ["그랬으면 되게 좋았겠는데요. 소파에서 자겠다는 소리 듣는 것보다는.", "그랬으면 되게 좋았겠는데. 소파에서 자겠다는 소리 듣는 것보다는."],
  mySide: ["애써 그린 방에 내가 당연한 듯 들어가도 되나 싶었어요. 그냥 놀러 오기만 해도 좋다고 했으면, 내가 먼저 자고 가도 되냐고 했을 거예요.", "애써 그린 방에 내가 당연한 듯 들어가도 되나 싶었어. 그냥 놀러 오기만 해도 좋다고 했으면, 내가 먼저 자고 가도 되냐고 했을 거야."],
  walkAway: ["됐어요. 이사 날짜 잡자는 것도 아니고. 내 집은 내가 알아서 그릴게요.", "됐어. 이사 날짜 잡자는 것도 아니고. 내 집은 내가 알아서 그릴게."],
  playerExitReply: ["그래요. 그 말 들으니까 내가 무슨 계약서라도 내민 것 같네요.", "그래. 그 말 들으니까 내가 무슨 계약서라도 내민 것 같네."],
  silentAction: "유리가 먼저 그 냅킨 이야기를 꺼냈다. 며칠 사이 종이가 해져서, 접을 때마다 같은 자리가 자꾸 찢어진다고 했다.",
  afterNpcExit: ["혼자 알아서 그려 봤거든요. 소파를 지워도 자꾸 거기 와서 앉겠다는 사람이 생각나요. 그래서 내가 졌어요. 보고 싶어요.", "혼자 알아서 그려 봤거든. 소파를 지워도 자꾸 거기 와서 앉겠다는 사람이 생각나. 그래서 내가 졌어. 보고 싶어."],
  afterPlayerExit: ["따로 산다고 상상해도 괜찮아요. 그 얘기는 듣고 싶어요. 나 혼자 머릿속으로 두 사람 대사 쓰는 건 이제 지겨워서.", "따로 산다고 상상해도 괜찮아. 그 얘기는 듣고 싶어. 나 혼자 머릿속으로 두 사람 대사 쓰는 건 이제 지겨워서."],
  early: ["나 그 종이 아직 갖고 있어요. 버렸다고 멋있는 척하기엔 너무 구겨질 때까지 갖고 있었네요.", "나 그 종이 아직 갖고 있어. 버렸다고 멋있는 척하기엔 너무 구겨질 때까지 갖고 있었네."],
  repair: ["다음엔 종이를 가운데 놓을게요. 같이 그릴지부터 묻고. 소파가 좋으면 거기 누워서 나랑 뭐 할지도 좀 그려 줘요.", "다음엔 종이를 가운데 놓을게. 같이 그릴지부터 묻고. 소파가 좋으면 거기 누워서 나랑 뭐 할지도 좀 그려 줘."],
  answer: ["소파 팔걸이를 낮게 그려 줘요. 한 사람은 거기 머리 베고, 다른 한 사람은 그 무릎에 누워서 영화 볼 수 있게. 안방 구경은 그다음에 할래요.", "소파 팔걸이를 낮게 그려 줘. 한 사람은 거기 머리 베고, 다른 한 사람은 그 무릎에 누워서 영화 볼 수 있게. 안방 구경은 그다음에 할래."],
  unresolved: ["알겠어요. 먼저 혼자 살 집이라고 해 놓고 내 그림을 못 읽었다고 타박한 건 미안해요.", "알겠어. 먼저 혼자 살 집이라고 해 놓고 내 그림을 못 읽었다고 타박한 건 미안해."]
 },
 "오세린": {
  setup: "둘이 처음 골랐던 컵을 며칠 전 세린이 떨어뜨렸다. 당신은 손부터 살피고 깨진 조각을 쓸어 담았다. 같은 컵을 다시 사면 된다는 말에 세린도 그날은 고개를 끄덕였다.",
  opening: ["그 컵, 새로 사 주지 마요. 똑같은 게 온다고 우리가 그날 고른 컵이 되는 건 아니잖아요.", "그 컵, 새로 사 주지 마. 똑같은 게 온다고 우리가 그날 고른 컵이 되는 건 아니잖아."],
  truth: ["다 쓸어 담고 둘이 바닥을 한 번 더 봤잖아요. 안 다쳤으니 됐다는데, 나는 손잡이 조각 하나만이라도 몰래 건지고 싶은 거예요. 그때 내가 좀 초라했어요.", "다 쓸어 담고 둘이 바닥을 한 번 더 봤잖아. 안 다쳤으니 됐다는데, 나는 손잡이 조각 하나만이라도 몰래 건지고 싶은 거야. 그때 내가 좀 초라했어."],
  pushback: ["그럼 깨뜨린 사람 앞에서 아깝다고 해요? 손부터 보자고 한 게 그렇게 서운했어요?", "그럼 깨뜨린 사람 앞에서 아깝다고 해? 손부터 보자고 한 게 그렇게 서운했어?"],
  retort: ["한 번쯤은 아깝다고 해 주지 그랬어요. 그날 손잡이 색 하나 고르는 데 한참 걸린 사람은 내가 아닌데.", "한 번쯤은 아깝다고 해 주지 그랬어. 그날 손잡이 색 하나 고르는 데 한참 걸린 사람은 내가 아닌데."],
  mySide: ["나도 그 조각 버리기 싫었어요. 근데 막 주우려는 손 보고 겁이 나서 얼른 쓸어 버렸어요. 내가 잘도 버린다고 생각했을 줄은 몰랐어요.", "나도 그 조각 버리기 싫었어. 근데 막 주우려는 손 보고 겁이 나서 얼른 쓸어 버렸어. 내가 잘도 버린다고 생각했을 줄은 몰랐어."],
  walkAway: ["됐어요. 컵은 내가 알아서 할게요. 오늘은 그만해요.", "됐어. 컵은 내가 알아서 할게. 오늘은 그만하자."],
  playerExitReply: ["그러죠. 나도 지금은 고맙다는 말까지 해 줄 여유가 없어요.", "그러자. 나도 지금은 고맙다는 말까지 해 줄 여유가 없어."],
  silentAction: "세린이 먼저 말을 걸었다. 새 컵을 골라 달라는 핑계로 사진을 몇 장이나 찾아 왔다면서, 휴대전화는 가방 속에 도로 넣었다.",
  afterNpcExit: ["컵 하나 깨먹고 내가 제일 아까운 걸 또 밀어냈네요. 나야말로 그날 손은 괜찮았냐고 한 번을 안 물었어요. 조각 다 치웠잖아요.", "컵 하나 깨먹고 내가 제일 아까운 걸 또 밀어냈네. 나야말로 그날 손은 괜찮았냐고 한 번을 안 물었어. 조각 다 치웠잖아."],
  afterPlayerExit: ["그날 날 걱정해 준 사람한테 참 야박하게 굴었죠. 컵도 아깝고, 같이 차 마실 날을 이렇게 흘려보낸 건 더 아까워요.", "그날 날 걱정해 준 사람한테 참 야박하게 굴었지. 컵도 아깝고, 같이 차 마실 날을 이렇게 흘려보낸 건 더 아까워."],
  early: ["아, 나도 할 말이 있었어요. 그때 차마 못 물었는데, 정말 하나도 안 아까웠어요? 나는 그 대답을 좀 듣고 싶어요.", "아, 나도 할 말이 있었어. 그때 차마 못 물었는데, 정말 하나도 안 아까웠어? 나는 그 대답을 좀 듣고 싶어."],
  repair: ["다음 잔은 나랑 같이 골라요. 그 전에, 처음 그 컵 골랐을 때 뭐가 그렇게 마음에 들었는지부터 듣고 싶어요.", "다음 잔은 나랑 같이 고르자. 그 전에, 처음 그 컵 골랐을 때 뭐가 그렇게 마음에 들었는지부터 듣고 싶어."],
  answer: ["파란 손잡이 잡고 마시는 척했을 때요. 입술 가리고 눈만 웃는 게 참 예뻤어요. 그거 또 보고 싶어서 골랐어요.", "파란 손잡이 잡고 마시는 척했을 때. 입술 가리고 눈만 웃는 게 참 예뻤어. 그거 또 보고 싶어서 골랐어."],
  unresolved: ["그래요. 오늘은 컵 보러 가자는 말도 아껴 둘게요. 마음 쓰던 걸 내가 몰라준 건 미안해요.", "그래. 오늘은 컵 보러 가자는 말도 아껴 둘게. 마음 쓰던 걸 내가 몰라준 건 미안해."]
 },
 "공재희": {
  setup: "며칠 전 서로의 휴대전화를 찾느라 전화를 한 통씩 걸었다. 당신 화면에 뜬 ‘공재희’를 물끄러미 본 재희는, 그날 밤 자기 연락처 목록에서 하트 세 개를 지웠다.",
  opening: ["나도 이제 이름만 딱 저장했어요. 똑같이 해 놨는데 기분 되게 이상하더라고요.", "나도 이제 이름만 딱 저장했어. 똑같이 해 놨는데 기분 되게 이상하더라."],
  truth: ["그날 밤에요. 하트 다 지우고 다시 전화 걸어 봤거든요. 이름 석 자가 뜨는데 꼭 나 혼자 차인 것 같더라고요. 내가 지워 놓고.", "그날 밤에. 하트 다 지우고 다시 전화 걸어 봤거든. 이름 석 자가 뜨는데 꼭 나 혼자 차인 것 같더라. 내가 지워 놓고."],
  pushback: ["그게 그렇게 신경 쓰이면 어떤 이름으로 불러 달라고 말해요. 혼자 하트 지우면 제가 알아요?", "그게 그렇게 신경 쓰이면 어떤 이름으로 불러 달라고 말해. 나 몰래 하트 지우면 내가 알아?"],
  retort: ["그렇게 해서 하트 하나 얻으면 내가 좋아요? 나만 혼자 신나서 세 개씩 붙여 놨구나, 그게 싫었다고요.", "그렇게 해서 하트 하나 얻으면 내가 좋아? 나만 혼자 신나서 세 개씩 붙여 놨구나, 그게 싫었다고."],
  mySide: ["내 폰에 그 이름 뜰 때 내가 어떤 얼굴 하는지는 못 봤잖아요. 하트 하나 없다고 전화 받을 때마다 반가웠던 내 맘까지 모르는 셈 쳐요?", "내 폰에 네 이름 뜰 때 내가 어떤 얼굴 하는지는 못 봤잖아. 하트 하나 없다고 전화 받을 때마다 반가웠던 내 맘까지 모르는 셈 쳐?"],
  walkAway: ["아, 됐어요. 뭘로 저장하든 알아서 해요. 나도 이제 안 볼래요.", "아, 됐어. 뭘로 저장하든 알아서 해. 나도 이제 안 볼래."],
  playerExitReply: ["……웅. 나도 더는 귀찮게 안 할게요.", "……웅. 나도 더는 귀찮게 안 할게."],
  silentAction: "먼저 말을 꺼낸 재희가 잠깐만, 하고 코를 훌쩍였다. 웃는 소리를 내려다가 목이 메자 이내 울먹이는 제 목소리를 그대로 들려줬다.",
  afterNpcExit: ["안 보겠다고 한 건 난데, 그렇다고 진짜 나 안 봐 줘요? ……치사하죠, 나. 그냥 보고 싶었어요. 진짜 많이.", "안 보겠다고 한 건 난데, 그렇다고 진짜 나 안 봐 줘? ……아, 이게 무슨 억지야. 그냥 보고 싶었어. 진짜 많이."],
  afterPlayerExit: ["귀찮게 안 한다고 했지, 안 보고도 살겠다고는 안 했어요. 나 그날 하트 다시 다 붙였어요. 세 개로도 모자라서 하나 더.", "귀찮게 안 한다고 했지, 안 보고도 살겠다고는 안 했어. 나 그날 하트 다시 다 붙였어. 세 개로도 모자라서 하나 더."],
  early: ["아, 나 지금 안 반가운 척하고 싶었는데 첫마디부터 들켰죠. ……웅. 반가워요.", "아, 나 지금 안 반가운 척하고 싶었는데 첫마디부터 들켰지. ……웅. 반가워."],
  repair: ["내 폰에 뭐라고 해 놨는지 다음에 보여 줄게요. 다른 건 됐어요. 대신 전화 받으면 이름 한 번만 불러 줘요. 난 그게 더 좋아요.", "내 폰에 뭐라고 해 놨는지 다음에 보여 줄게. 네 건 안 봐도 돼. 대신 전화 받으면 이름 한 번만 불러 줘. 난 그게 더 좋아."],
  answer: ["그러면 다음에 전화할 땐 첫마디 잘 들어 봐요. 이름 부르고, 아마 좀 웃을 거예요. 좋아서.", "그러면 다음에 전화할 땐 첫마디 잘 들어 봐. 이름 부르고, 아마 좀 웃을 거야. 좋아서."],
  unresolved: ["웅. 나 속상하다고 지금 당장 예쁜 말 해 달라는 건 아니에요. 오늘은 그냥 듣고 갈게요.", "웅. 나 속상하다고 지금 당장 예쁜 말 해 달라는 건 아니야. 오늘은 그냥 듣고 갈게."]
 }
};

// v0.195 saves can already be partway through the original two-ticket scene.
const ijunUnsharedTickets = {
  setup: "이준이 영화 예매 내역을 보여 줬다. 좌석은 두 개였다. 내가 화면을 내려다보는 동안 이준이 먼저 휴대전화를 주머니에 넣었다.",
  opening: ["저, 같이 가자고 한 적도 없으면서 표부터 보여 줬네요. 미안해요. 그날 제가 같이 보고 싶었어요.", "나, 같이 가자고 한 적도 없으면서 표부터 보여 줬네. 미안해. 그날 내가 같이 보고 싶었어."],
  truth: ["옆자리에 외투를 놓는데 그제야 민망했어요. 같이 보자고 한마디 하는 게 왜 그렇게 어려웠을까요.", "옆자리에 외투를 놓는데 그제야 민망했어. 같이 보자고 한마디 하는 게 왜 그렇게 어려웠을까."],
  pushback: ["혼자 보고 싶을 때 가끔 가는 데라면서요. 두 자리 잡은 건 지금 알았어요.", "혼자 보고 싶을 때 가끔 가는 데라며. 두 자리 잡은 건 지금 알았어."],
  retort: ["맞아요. 저 혼자 기대한 걸 예매 내역까지 꺼내서 보여 줬네요.", "맞아. 나 혼자 기대한 걸 예매 내역까지 꺼내서 보여 줬네."],
  mySide: ["나도 같이 보고 싶었어요. 근데 지나간 표를 오늘 보여 주면, 나는 가고 싶단 말도 못 해 보고 약속 안 지킨 사람이 되잖아요.", "나도 같이 보고 싶었어. 근데 지나간 표를 오늘 보여 주면, 나는 가고 싶단 말도 못 해 보고 약속 안 지킨 사람이 되잖아."],
  walkAway: ["…표는 제가 산 거잖아요. 오늘 얘기는 여기서 그만하면 안 돼요? 제가 좀 부끄러워서요.", "…표는 내가 산 거잖아. 오늘 얘기는 여기서 그만하면 안 돼? 내가 좀 부끄러워서."],
  playerExitReply: ["네. 쉬어요. 표 산 건 제 선택인데 괜히 마음 불편하게 했네요.", "응. 쉬어. 표 산 건 내 선택인데 괜히 마음 불편하게 했네."],
  silentAction: "이준은 두 손을 외투 주머니에 넣고 서 있었다. 잠깐 뜸을 들이더니 영화 제목도 꺼내기 전에 사과부터 했다.",
  afterNpcExit: ["미안해요. 같이 가자고도 안 해 놓고 섭섭한 티를 냈잖아요. 그러고 제가 먼저 그만하자고 해 버렸고요.", "미안해. 같이 가자고도 안 해 놓고 섭섭한 티를 냈잖아. 그러고 내가 먼저 그만하자고 해 버렸고."],
  afterPlayerExit: ["미안해요. 같이 보자고 한 적도 없는데 지나간 표까지 보여 줬잖아요. 답을 받아야겠다고 찾아온 건 아니에요. 그건 꼭 사과하고 싶었어요.", "미안해. 같이 보자고 한 적도 없는데 지나간 표까지 보여 줬잖아. 답을 받아야겠다고 찾아온 건 아니야. 그건 꼭 사과하고 싶었어."],
  early: ["제가 먼저 사과하려고 했어요. 말없이 끊은 표를 내밀었으니 얼마나 황당했겠어요. 미안해요.", "내가 먼저 사과하려고 했어. 말없이 끊은 표를 내밀었으니 얼마나 황당했겠어. 미안해."],
  repair: ["다음 영화 같이 볼래요? 보고 나오면 뭐가 제일 별로였는지도 듣고 싶어요. 이번엔 대답 듣고 표 끊을게요.", "다음 영화 같이 볼래? 보고 나오면 뭐가 제일 별로였는지도 듣고 싶어. 이번엔 대답 듣고 표 끊을게."],
  answer: ["같이 봐요. 전 뒷자리가 좋아요. 엔딩 자막 끝날 때까지 앉아 있다 나와요, 우리.", "같이 보자. 난 뒷자리가 좋아. 엔딩 자막 끝날 때까지 앉아 있다 나오자, 우리."],
  unresolved: ["네. 들어 줘서 고마워요. 먼저 연락 준다고 한 말, 기억할게요.", "응. 들어 줘서 고마워. 먼저 연락 준다고 한 말, 기억할게."]
 };

function everydayIssue(p){
 const issue=state?.sim?.couple?.[p]?.issue?.active;
 return state?.sim?.romance?.[p]==='dating'&&issue?.kind==='everyday'?issue:null;
}

// Count actual outgoing messages, excluding system notices, expiry, and read receipts.
function everydayOutgoingCount(p){
 const thread=state.sim.phone?.threads?.[p]||[];
 return thread.filter(m=>{
  if(!m.reply||m.breakupNotice||m.npcOffer&&m.reply===4)return false;
  if(m.npcLifeNotice)return m.reply<=2;
  if(m.booking||m.groupInvite)return !!m.playerLine;
  if(m.coupleRepair)return m.reply<=2&&!!m.playerLine;
  if(m.birthday&&!m.playerLine&&!m.replyDay)return false;
  return !!(m.replyDay||m.offerLabel||m.outingLabel||m.playerLine||m.replySpeech&&m.script);
 }).length;
}

function everydayArgumentGate(){
 const v=initSim(),day=v.day;
 if(v.activeEvent||v.running||v.finished||!validMeetingDay(day)||dateBook()[day]?.trip)return false;
 const candidates=lovers().filter(p=>!breakupWarning(p)&&!unresolvedOutingConflict(p)&&
  !(p===JIHAN&&day<jihanBond().mutedUntil));
 const due=candidates.filter(p=>{
  const x=everydayIssue(p);
  return x?.status==='cooling'&&day>=x.returnDay;
 }).sort((a,b)=>everydayIssue(a).returnDay-everydayIssue(b).returnDay);
 if(due.length){
  const p=due[0],x=everydayIssue(p);
  const spoke=x.spokeAgain||everydayOutgoingCount(p)>x.outgoing;
  startEverydayConversation(p,x,spoke?'contacted':'silent');
  return true;
 }
 if(day>361||v.lastEverydayOpening&&day-v.lastEverydayOpening<5)return false;
 const p=candidates.find(who=>{
  const c=coupleRecord(who),r=coupleIssueRecord(who),z=socialRecord(who);
  if(!z.contact||day-c.since<14||r.active||r.queue?.length||c.seen?.everydayArgument||r.last&&day-r.last<7)return false;
  const last=Math.max(z.lastTogether||0,z.lastSeen||0,z.lastDoorEncounter||0,z.lastDate?.day||0);
  return last>=c.since&&day-last<=7;
 });
 if(!p)return false;
 const c=coupleRecord(p),r=coupleIssueRecord(p);
 (c.seen??={}).everydayArgument=p==='서이준'?2:true;
 v.lastEverydayOpening=day;
 r.last=day;r.active={kind:'everyday',day,status:'opening'};
 startEverydayConversation(p,r.active,'opening');
 return true;
}

function startEverydayConversation(p,x,mode){
 const v=initSim();
 v.activeEvent={person:p,place:'home',day:v.day,description:'두 사람 사이에 남은 이야기.',
  everydayArgument:{issueDay:x.day,mode,exit:x.exit,resumed:x.status==='space'}};
 save();renderChoiceEvent();
}

function everydayArgumentPhone(p,root){
 const v=initSim(),x=everydayIssue(p);
 if(!x||!vIsDating(p)||v.finished||v.running||v.activeEvent||!['cooling','space'].includes(x.status))return;
 const b=document.createElement('button');
 b.className='secondary';
 b.textContent='먼저 연락해서 그날 이야기를 꺼낸다';
 b.onclick=()=>{
  if(v.running||v.activeEvent||v.finished||!vIsDating(p)||everydayIssue(p)!==x)return;
  startEverydayConversation(p,x,'early');
 };
 root.append(b);
}

function renderEverydayArgument(ev){
 const v=initSim(),p=ev.person,o=ev.everydayArgument,x=everydayIssue(p);
 const s=p==='서이준'&&coupleRecord(p).seen?.everydayArgument!==2?ijunUnsharedTickets:everydayArgumentScenes[p];
 const day=ev.day,pc=speechRegisterIndex(p,'player',day),npc=speechRegisterIndex(p,'npc',day);
 const my=(a,b)=>pc?b:a;
 const portrait=argumentPortraits[p];
 const reply=(line,beat)=>add(p,line,false,false,portrait?.[beat]);

 const live=()=>v.activeEvent===ev&&vIsDating(p)&&x&&everydayIssue(p)===x&&x.day===o.issueDay;
 const refresh=()=>{save();renderChoiceEvent();renderSim()};
 const done=()=>{
  if(o.onBooking){
   choiceButton('약속한 일정을 이어 간다',()=>{
    if(v.activeEvent!==ev||ev.everydayArgument!==o)return;
    albumCapture(ev);delete ev.everydayArgument;
    refresh();
   });
  }else choiceButton('일정 계속하기',()=>{if(v.activeEvent===ev)finishEvent()});
 };
 const choose=(label,action)=>{
  const mode=o.mode,step=o.step;
  choiceButton(label,()=>{
   if(!live()||o.outcome||o.mode!==mode||o.step!==step)return;
   action();refresh();
  });
 };
 const addressIt=my('지금은 제 얘기도 들어 줘요.','지금은 내 얘기도 들어 줘.');
 const leave=my('됐어요. 이제 알아서 해요. 저도 피곤해요.','됐다. 이제 너 알아서 해. 나도 피곤해.');
 const listen=my('잠깐만요. 언제부터 그렇게 생각했어요?','잠깐만. 언제부터 그렇게 생각했어?');
 const accept=s.answer[pc];
 const needTime=my('들었어요. 그래도 전 아직 좀 속상해요. 준비되면 제가 먼저 연락할게요.','들었어. 그래도 난 아직 좀 속상해. 준비되면 내가 먼저 연락할게.');
 function closeForNow(who){
  x.exit=o.exit=who;
  x.status='cooling';
  x.returnDay=day+2+(people.indexOf(p)%2);
  x.outgoing=everydayOutgoingCount(p);
  o.outcome=who;
  feel(p,{hurt:2});
  writeJournal(p+' · '+(who==='npc'?'상대가 먼저 대화를 끊었다.':'내가 피곤하다며 먼저 대화를 끊었다.'));
 }
 function settle(){
  const r=coupleIssueRecord(p);
  r.active=null;r.last=day;r.resolved=(r.resolved||0)+1;
  r.history.push({kind:'everyday',day,repair:true,choice:0,issueDay:x.day,exit:x.exit||null,via:o.mode});
  o.outcome='repaired';socialRecord(p).lastTogether=day;
  feel(p,{hurt:x.exit?-2:0,security:2});
  remember(p,'couple:everyday:'+x.day,'두 사람이 서운했던 일을 끝까지 이야기했다.');
  writeJournal(p+' · 그날 서운했던 일에 관해 화해했다.');
 }
 $('where').textContent='연화동';
 $('progress').textContent=o.mode==='opening'?'연인의 이야기 · 참다 꺼낸 말':'연인의 이야기 · 그날 못 한 말';
 if(!o.outcome&&!live()){done();return}
 if(o.mode==='booking'){
  add('이야기','약속한 시간에 만났다. 평소처럼 인사를 하려다 둘 다 잠시 말을 멈췄다.');
  choose('그날 이야기를 먼저 꺼낸다',()=>{o.mode='early';o.metHere=true});
  choose('오늘은 약속한 대로 함께 보낸다',()=>{
   x.spokeAgain=true;delete ev.everydayArgument;
  });
  return;
 }
 if(o.mode==='encounter'){
  add('이야기','눈이 마주쳤다. 그날 나눴던 말이 둘 사이에 그대로 걸려 있었다.');
  if(o.outcome==='pass'){add('이야기','가볍게 고개만 숙이고 지나쳤다.');done();return}
  choose('먼저 다가가서 그날 이야기를 꺼낸다',()=>{o.mode='early';o.metHere=true});
  choose('오늘은 고개만 끄덕이고 지나간다',()=>{o.outcome='pass'});
  return;
 }
 if(o.mode==='opening'){
  add('이야기',s.setup);reply(s.opening[npc],'opening');
  if(o.pushed){add(state.name,s.pushback[pc],true);reply(s.retort[npc],'retort')}
  if(o.outcome==='player'){add(state.name,leave,true);reply(s.playerExitReply[npc],'truth');done();return}
  if(o.outcome==='npc'){reply(s.walkAway[npc],'walkAway');done();return}
  if(!o.step){
   choose(s.pushback[pc],()=>{o.pushed=true;o.step='heated'});
   choose(listen,()=>{o.step='talk';o.playerLine=listen});
   choose(leave,()=>closeForNow('player'));
   return;
  }
  if(o.step==='heated'){
   choose('대꾸하려다 입을 다문다',()=>closeForNow('npc'));
   choose(addressIt,()=>{o.step='talk';o.playerLine=addressIt;x.toldMySide=true});
   choose(leave,()=>closeForNow('player'));
   return;
  }
  add(state.name,o.playerLine,true);
  if(o.pushed)add(state.name,s.mySide[pc],true);
  else reply(s.truth[npc],'truth');
 }else{
  if(o.mode==='silent'){
   add('이야기','먼저 얼굴을 보자는 연락이 왔다. 집을 나서니 골목 어귀에 익숙한 얼굴이 보였다.');
   add('이야기',s.silentAction);
   reply(s[o.exit==='npc'?'afterNpcExit':'afterPlayerExit'][npc],'early');
  }else{
   const lead=o.mode==='contacted'?'그날 이후 서로 말은 주고받았지만, 정작 서운했던 얘기는 이제야 나왔다.':
    o.metHere?'발을 멈추고 그날 못 한 이야기를 꺼냈다.':'먼저 연락해서 만났다. 마주 보고 앉아 그날 이야기를 꺼냈다.';
   add('이야기',lead);reply(s.early[npc],'early');
  }
  if(o.exit&&!o.resumed&&renderArgumentAftermath(ev,'everyday',o.issueDay,!o.outcome,false,o.mode!=='silent'))return;
 }
 if(o.heardMySide){
  add(state.name,s.mySide[pc],true);
  reply(doorstepVoices[p].listen[npc],'listen');
 }
 reply(s.repair[npc],'repair');
 if(o.outcome==='repaired'){add(state.name,accept,true);done();return}
 if(o.outcome==='space'){add(state.name,needTime,true);reply(s.unresolved[npc],'unresolved');done();return}
 choose(accept,settle);
 if(o.mode!=='opening'&&!o.heardMySide&&!x.toldMySide){
  choose(s.mySide[pc],()=>{x.toldMySide=true;o.heardMySide=true;o.step='heard'});
 }
 choose(needTime,()=>{
  o.outcome='space';x.status='space';
  writeJournal(p+' · 아직 마음이 풀리지 않아 내가 먼저 연락할 때까지 기다려 달라고 했다.');
 });
}

function coupleIssueRecord(p){const r=coupleRecord(p);return r.issue||(r.issue={last:0,resolved:0,history:[],active:null})}
function coupleJealousScore(base,security,agreement,resolved){return Math.max(0,base-Math.min(2,Math.floor(security/25))-(agreement===1?1:0)-Math.min(2,resolved||0))}
function coupleJealousLevel(p,day){const a=coupleConflictVoices[p],r=coupleIssueRecord(p),f=memoryFor(p).feelings;return coupleJealousScore(a.j,f.security,relationshipRecall(p,day).kind,r.resolved)}
function noteCoupleIssue(p,day,kind,other){const v=initSim();if(v.romance[p]!=='dating'||day<coupleRecord(p).since+4)return false;const r=coupleIssueRecord(p);if(r.active||r.last&&day-r.last<10)return false;r.active={kind,other:other||null,day,status:'pending',hurt:kind==='jealous'?coupleJealousLevel(p,day):2};r.last=day;feel(p,{hurt:r.active.hurt,jealousy:kind==='jealous'?r.active.hurt:0});return true}
function coupleIssueNight(day){const v=initSim();for(const p of people){if(v.romance[p]!=='dating')continue;const r=coupleIssueRecord(p),a=coupleConflictVoices[p],soc=socialRecord(p),last=Math.max(coupleRecord(p).since,soc.lastTogether||0,soc.lastSeen||0);if(!r.active&&r.queue?.length){while(r.queue.length&&!r.active){const x=r.queue.shift();if(vIsDating(x.other))r.active=x}}if(!r.active&&day-last>=a.gap)noteCoupleIssue(p,day,'distance');if(r.active?.status==='waiting'&&day>=r.active.reviewDay){r.active.status='ready';const t=phoneData().threads[p]||(phoneData().threads[p]=[]);if(soc.contact)t.push({day,coupleRepair:{issueDay:r.active.day,reviewDay:r.active.reviewDay},npcLine:a.lines[6]})}}}
function nameWith(p){const n=p.charCodeAt(p.length-1)-0xac00;return p+(n>=0&&n<=11171&&n%28?'과':'와')}
const outingConcernVoices={"강도윤":["하하, 재밌었어요? 저랑도 조만간 나가요.","요즘 다른 사람이랑 보내는 시간이 많네요. 저도 조금 서운해요.","혹시 그 사람과 친구 이상의 사이인가요?"],"서이준":["…재밌었겠네요.","…요즘 그 사람 이야기를 자주 하네요. 조금 신경 쓰여요.","…그 사람과 어떤 사이예요?"],"백지한":["좋은 시간 보냈나 봐요. 다음은 제 차례죠?","…제가 좀 욕심이 나는데요. 요즘 그 사람 이야기가 많네요.","그 사람과 그냥 친구 사이예요? 솔직하게 말해 줘요."]};
function discloseCoupleDate(p,other,day){const v=initSim(),r=coupleIssueRecord(p);r.disclosed=r.disclosed||{};const key=other+':'+day;if(r.disclosed[key])return;r.disclosed[key]=true;const t=phoneData().threads[p]||(phoneData().threads[p]=[]),playerLine=calendarDate(day).label+'에 '+nameWith(other)+' 외출했어요.';if(bothConsented(p,other)&&day>=coupleRecord(other).since){multiKnownDate(p,other,day);const z=multiState(p,other).individual[p];t.push({day:v.day,booking:true,playerLine,npcLine:multiVoice(p)[z.need?5:z.jealous>=3?1:4],reply:1});save();return}const a=outingConcernVoices[p]||[trianglePartner[p][1],coupleConflictVoices[p].lines[1],'그 사람과 어떤 사이인지 궁금해요.'];const rec=r.outingConcern||(r.outingConcern={by:{},history:[]});const recent=rec.history.filter(x=>v.day-x.day<=14);rec.history=recent;const same=recent.filter(x=>x.other===other).length;const current=day>=coupleRecord(p).since;const intensity=current?Math.min(3,1+same+(recent.length>=3?1:0)):0;rec.history.push({day:v.day,outingDay:day,other});rec.by[other]=intensity;const f=memoryFor(p).feelings;if(current)feel(p,{jealousy:intensity});const question=intensity>=3&&!t.some(m=>m.outingQuestion?.other===other&&!m.reply)&&(!rec.lastQuestion||v.day-rec.lastQuestion>=7);if(question){rec.lastQuestion=v.day;t.push({day:v.day,outingQuestion:{other},playerLine,npcLine:a[2]});}else{t.push({day:v.day,booking:true,playerLine,npcLine:a[intensity>=2?1:0],reply:1});if(intensity>=2&&f.jealousy>=6)noteCoupleIssue(p,v.day,'jealous',other)}remember(p,'couple:shared:'+key,nameWith(other)+'의 외출 이야기를 들음');save()}
function coupleIssueControls(p,root){const v=initSim();if(v.romance[p]!=='dating')return;const r=coupleIssueRecord(p),a=r.active;if(a?.kind==='everyday')everydayArgumentPhone(p,root);else if(a&&!v.activeEvent&&!v.running&&!v.finished){const b=document.createElement('button');b.className='secondary';b.textContent=a.status==='ready'?'지난 대화에 관해 다시 이야기하기':a.status==='waiting'?'서로 생각할 시간을 보내는 중':'연인과 마음에 관해 이야기하기';b.disabled=a.status==='waiting';b.onclick=()=>{if(v.activeEvent||v.running||!r.active||r.active.status==='waiting')return;v.activeEvent={place:'home',person:p,day:v.day,description:'두 사람은 마음에 관한 이야기를 나누기로 했다.',coupleIssue:true};save();renderChoiceEvent()};root.append(b)}const list=people.filter(q=>q!==p).flatMap(q=>dateHistory(q).filter(x=>x.day>=coupleRecord(p).since&&x.day<=v.day&&!r.disclosed?.[q+':'+x.day]).map(x=>({q,...x}))).sort((a,b)=>b.day-a.day);if(list.length){const x=list[0],b=document.createElement('button');b.className='secondary';b.textContent=calendarDate(x.day).label+' '+x.q+'와의 외출 이야기하기';b.onclick=()=>{discloseCoupleDate(p,x.q,x.day);renderPhone();renderSim()};root.append(b)}}
const coupleAngerScenes={
 서이준:{
  action:'이준이 화면을 뒤집어 놓았다. 이번에는 말끝을 흐리지 않았다.',
  jealous:'…재밌었냐고 물은 건 아니에요. 나한테는 시간 없다면서 그 사람하고는 잘도 맞추네요.',
  betrayal:'…나한테 한 말이랑 그 사람한테 한 말 중에 어느 쪽이 진짜였어요? 답하는 데 그렇게 오래 걸릴 질문이에요?',
  peak:'내가 모르는 동안에도 아무렇지 않게 옆집 문 두드렸잖아요. 그게 제일 소름 끼쳐요.',
  reply:'…지금 더 말하면 나도 일부러 아픈 말만 고를 것 같아요.',
  exit:'이준은 붙잡지 않았다. 휴대전화를 다시 뒤집어 화면을 들여다봤다.'
 },
 강도윤:{
  action:'도윤이 웃으려다가 입을 다물었다. 당신 앞에 놓으려던 컵을 자기 쪽으로 당겼다.',
  jealous:'오늘도 괜찮다고 해 주길 바라죠? 늘 그래 왔으니까.',
  betrayal:'그 사람 만나고 온 날에도 내 앞에 앉아서 아무 일 없는 것처럼 웃었어요? 나는 그게 좋다고 또 커피 내려 줬고요.',
  peak:'나한테 미안해할 필요 없어요. 당신이 힘들어 보이면 내가 먼저 풀어 주는 거, 어디까지 당연하게 여기는지 이제 알겠으니까.',
  reply:'그 말 듣고 안심시켜 주고 싶지 않아요. 적어도 오늘은.',
  exit:'도윤이 당신 앞에서 가져간 컵을 들었다. 이제야 자기 몫처럼 커피를 한 모금 마셨다.'
 },
 한시우:{
  action:'시우가 한 번 짧게 웃었다. 당신이 말을 꺼내자 그 웃음부터 끊었다.',
  jealous:'와, 나한테는 맨날 다음에 보자면서. 내가 여기서 또 웃으면 그냥 넘어가는 거죠?',
  betrayal:'내가 눈치 못 챌 때마다 재밌었어요? 모르는 사람은 나 하나인데 나까지 같이 웃고 있었잖아요.',
  peak:'내가 먼저 미안하다고 할 때까지 기다렸어요? 아, 진짜. 내가 그러고도 남을 것 같아서 더 열 받아요.',
  reply:'잠깐만요. 내가 지금 뭐라고 답할지 나도 모르겠어요.',
  exit:'시우는 대답하려다 입을 다물고 당신보다 먼저 자리에서 일어났다.'
 },
 백지한:{
  action:'지한은 웃는 얼굴로 한 문장이 끝날 때까지 기다렸다. 고개를 끄덕일 때에도 시선은 그대로였다.',
  jealous:'바빴다는 말은 기억해요. 시간이 없었던 건지, 나한테 줄 시간만 없었던 건지 다시 말해 봐요.',
  betrayal:'처음부터 다시 말해 봐요. 내가 어느 대목부터 바보였는지 알고 싶거든요.',
  peak:'아니, 계속해요. 내가 어디서 고개를 끄덕이면 이번에도 믿은 척할 것 같은지 궁금하네요.',
  reply:'내가 웃고 있다고 해서 넘어간 줄 알지는 마요.',
  exit:'지한은 비켜서며 웃었다. 당신이 떠날 때까지 한 번도 잘 가라는 말을 하지 않았다.'
 },
 정태오:{
  action:'태오가 말을 끊었다. 목소리는 낮았고 한 음절도 서두르지 않았다.',
  jealous:'시간이 없다고 하셨습니다. 그런데 없었던 건 시간이 아니라 저와 만날 의사였습니까?',
  betrayal:'하나만 대답하십시오. 제가 알았다면 동의하지 않을 거라는 걸 알고도 숨기셨습니까?',
  peak:'당신이 불편할까 봐 제가 예의를 지킨 겁니다. 지금도 그 예의 뒤에 숨을 생각이라면 착각하지 마십시오.',
  reply:'오늘은 제가 그 말을 믿을 이유부터 생각하겠습니다.',
  exit:'태오는 시계를 내려다봤다. 헤어질 시간이 이미 정해져 있었던 사람처럼 자리에서 일어났다.'
 },
 임하나:{
  action:'하나가 입을 열려다 숨을 들이마셨다. 당신이 다 말하기를 기다리던 사람이 이번에는 먼저 말을 끊었다.',
  jealous:'잠깐만요. 제가 또 괜찮다고 할 때까지 기다리는 거예요? 저 오늘은 그렇게 말하기 싫어요.',
  betrayal:'제가 물어볼 때마다 아무 일 없다고 했잖아요. 그래서 저는 제가 이상한 줄 알고 혼자 미안해했어요.',
  peak:'제가 울면 또 달래려고 하겠죠. 그러면 제가 하려던 말은 끝까지 못 하잖아요. 이번엔 듣고 있어요.',
  reply:'저도 속상해요. 지금 제가 먼저 달래 줄 수는 없어요.',
  exit:'하나는 습관처럼 고개를 끄덕이려다 멈췄다. 당신이 돌아설 때까지 소매만 매만졌다.'
 },
 차유리:{
  action:'유리가 펴 둔 스케치북을 덮었다. 당신을 보던 고개가 조금 기울었다.',
  jealous:'어, 계속해 봐요. 지금 말하는 거 들어 보면 나는 애인보다 청중에 더 가까운 것 같아서.',
  betrayal:'숨길 건 다 숨겼으면서 이제 와서 나한테 이해까지 해 달라고요? 내 몫이 참 편하네요.',
  peak:'미안하다는 말까지 내가 듣기 좋게 다듬어서 받아 줘야 돼요? 그건 이번에 직접 해요.',
  reply:'들었어요. 지금 표정 좋게 만들어 줄 생각은 없어요.',
  exit:'유리는 스케치북을 다시 펼쳤다. 당신이 돌아서는 쪽을 보지 않았다.'
 },
 오세린:{
  action:'세린이 두 손으로 감싸 쥐었던 찻잔을 내려놨다. 평소라면 말을 잇기 전에 웃는 사람이 그날은 웃지 않았다.',
  jealous:'다른 분도 만날 수 있어요. 그런데 제가 서운할 틈도 없이 이해해 줄 거라고 정해 놓은 건 누구예요?',
  betrayal:'사정은 들었어요. 그렇다고 제가 다 이해해 줘야 하는 건 아니잖아요.',
  peak:'제가 먼저 괜찮다고 해 주면 한숨 돌리겠죠. 오늘은 그러고 싶지 않네요.',
  reply:'그 말에 어떻게 답할지는 제가 정할게요.',
  exit:'세린은 대답하지 않고 식은 차를 마저 마셨다.'
 },
 유지안:{
  action:'지안이 당신 쪽으로 몸을 돌렸다. 참던 말이 생각보다 큰 목소리로 튀어나왔다.',
  jealous:'그 사람 얘기할 때는 약속 하나 잡는 것도 그렇게 신나 보여요. 나랑 만날 때는 왜 내가 계속 분위기를 띄워야 하는데요?',
  betrayal:'솔직한 게 좋다고 했잖아요. 저는 다 솔직하게 말했는데, 왜 저만 그랬어요?',
  peak:'기분 풀어 주려고 웃기지 마요. 내가 따라 웃으면 이 일도 그냥 끝난 줄 알 거잖아요.',
  reply:'지금 당장 괜찮아지라는 말만 안 했으면 좋겠어요.',
  exit:'지안이 한 발 물러섰다. 늘 먼저 인사하던 사람인데 이번에는 당신이 갈 때까지 입을 열지 않았다.'
 },
 공재희:{
  action:'재희가 들고 있던 휴대전화를 내려놨다. 농담으로 받을 타이밍을 지나서야 입을 열었다.',
  jealous:'나한테는 잠깐만 기다리라면서 그 사람한테는 먼저 연락했어요? 나 기다리는 거 되게 익숙해 보였나 봐요.',
  betrayal:'내 얘기 들어 줄 때는 되게 진지했잖아요. 그때도 내가 이걸 알면 무슨 표정 지을지 생각은 했어요?',
  peak:'아까 웃은 건 할 말이 없어서였어요. 지금 또 웃으면 그게 괜찮다는 뜻은 아니에요. 똑바로 봐요.',
  reply:'한 번 들었어요. 같은 말 계속한다고 다르게 들리진 않아요.',
  exit:'재희가 휴대전화를 다시 집었다. 화면은 켜지 않은 채 손에 꽉 쥐고 있었다.'
 }
};
const argumentTearScenes = {
 '강도윤': {
  waited: '도윤이 손등을 닦았다. 잠깐 숨을 고른 뒤 먼저 내 쪽으로 고개를 돌렸다.',
  moment: '도윤이 입을 열다 말고 손등을 내려다봤다. 눈물이 한 방울 떨어져 있었다. 그제야 뺨을 짚어 보고는 작게 숨을 내쉬었다.',
  line: ['밥은 먹었냐고 물어볼 뻔했어요. 나 아직 많이 속상하다고, 그 말부터 하려고 했는데요.', '밥은 먹었냐고 물어볼 뻔했어. 나 아직 많이 속상하다고, 그 말부터 하려고 했는데.']
 },
 '유지안': {
  waited: '지안은 천천히 숨을 내쉬었다. 눈가는 아직 젖어 있었지만 목소리는 조금 전보다 고르게 나왔다.',
  moment: '지안이 뺨을 타고 흐르는 눈물을 손바닥으로 훔쳤다. 반대쪽 뺨에도 금세 한 줄이 더 생겼다. 이번엔 그냥 내버려 두고 내 눈을 봤다.',
  line: ['그날 진짜 화났어요. 근데 돌아서자마자 또 보고 싶더라고요. 그게 더 속상했어요.', '그날 진짜 화났어. 근데 돌아서자마자 또 보고 싶더라. 그게 더 속상했어.']
 },
 '공재희': {
  waited: '나는 재희가 소매를 내릴 때까지 기다렸다. 재희가 코를 한 번 훌쩍이고는 내 쪽으로 몸을 돌렸다.',
  moment: '재희가 짐짓 턱을 들었다. 웃어 보이려던 입술이 떨리자 얼른 소매로 가렸는데, 그 위로 눈물이 똑 떨어졌다.',
  line: ['아, 나 오늘 되게 멋있게 말하려고 했거든요. …많이 속상했어요. 그거 하나 말하는 건데 왜 이러죠?', '아, 나 오늘 되게 멋있게 말하려고 했는데. …많이 속상했어. 그거 하나 말하는 건데 왜 이러지?']
 },
 '한시우': {
  waited: '시우가 한동안 고개를 숙이고 있었다. 소매로 눈가를 꾹 누르고 나서야 다시 눈이 마주쳤다.',
  moment: '시우가 장난을 걸 때처럼 눈썹을 까딱했다. 입꼬리는 올라갔는데 웃음소리가 나지 않았다. 시우가 고개를 숙이자 눈물이 뚝 떨어졌다.',
  line: ['지금 농담 하나만 하면 안 울 수 있을 것 같은데요. ……오늘은 그냥 좀 울게요.', '지금 농담 하나만 하면 안 울 수 있을 것 같은데. ……오늘은 그냥 좀 울게.']
 }
};

const heatedArgumentReplies=[
 '지금 화난 이유를 듣고 싶어요. 하지만 그런 식으로 말하진 말아 줘요.',
 '이렇게는 이야기 못 하겠어요. 오늘은 여기까지 해요.'
];
function heatedCoupleArgumentDay(p,issue){
 if(!issue||issue.status!=='ready')return 0;
 // A confirmed betrayal can turn into a distance issue after a spoken decision to rebuild trust.
 if(issue.hadHeatedTalk||issue.kind==='distance'&&issue.source==='confirmed')return issue.day;
 if(issue.kind!=='jealous')return 0;
 // Older saves have the original confrontation choices in the couple's history.
 const history=coupleIssueRecord(p).history||[];
 return history.some(h=>!h.repair&&h.kind===issue.kind&&h.day>=issue.day&&heatedArgumentReplies.includes(h.label))?issue.day:0;
}
const playerArgumentReactions={
 '강도윤': {
  hold: [
   '내가 입술을 꾹 다물자 도윤이 눈을 내리깔았다. 내가 애써 표정을 펴는 동안 잠깐 다른 데를 봐 줬다.',
   '나한테 바로 대답해 주려고 애쓰지 마요. 나도 말 한마디 꺼내는 데 한참 걸렸잖아요.',
   '나한테 바로 대답해 주려고 애쓰지 마. 나도 말 한마디 꺼내는 데 한참 걸렸잖아.'
  ],
  quiet: [
   '도윤은 눈물이 내 턱까지 흘러서야 알아챘다. 괜찮으냐는 말이 입술에서 반쯤 나오다가 멈췄다.',
   '나, 자꾸 괜찮냐고 묻죠. 그렇게 물으면 괜찮다고 해 줘야 할 것 같겠어요. 오늘은 안 그래도 돼요.',
   '나, 자꾸 괜찮냐고 묻지. 그렇게 물으면 괜찮다고 해 줘야 할 것 같겠다. 오늘은 안 그래도 돼.'
  ],
  dry: [
   '눈물은 나지 않았다. 내 얼굴을 보던 도윤이 제 입가에 남은 어색한 웃음을 거뒀다.',
   '나는 어색하면 자꾸 웃거든요. 집에 가서야 할 말이 생각나고요. 오늘은 진짜 하고 싶은 얘기 해요, 우리.',
   '나는 어색하면 자꾸 웃거든. 그러고 집에 가서야 할 말이 생각나더라. 오늘은 진짜 하고 싶은 얘기 하자, 우리.'
  ],
  sob: [
   '울음소리가 새어 나오자 도윤의 손이 내 등을 향하다 멈췄다. 그러고는 내가 고개를 숙인 채로도 볼 수 있는 곳에 손바닥을 펴 두었다.',
   '손 필요하면 잡아요. 나 지금 아무 데도 안 가요.',
   '손 필요하면 잡아. 나 지금 아무 데도 안 가.'
  ]
 },
 '서이준': {
  hold: [
   '목이 잠겨 한 번 침을 삼켰다. 이준은 내 얼굴을 살피던 시선을 슬쩍 거두고, 끊어진 말 뒤를 비워 뒀다.',
   '…거기서부터 다시 해도 돼요. 듣고 있었어요.',
   '…거기서부터 다시 해도 돼. 듣고 있었어.'
  ],
  quiet: [
   '내 뺨을 타고 눈물이 흘렀다. 이준은 슬쩍 몸을 옆으로 틀어 나와 같은 쪽을 바라봤다.',
   '눈 마주치면 더 울 것 같을 때 있잖아요. 그냥 이쪽 보고 있을게요.',
   '눈 마주치면 더 울 것 같을 때 있잖아. 그냥 이쪽 보고 있을게.'
  ],
  dry: [
   '눈물은 나지 않았다. 내가 이준을 똑바로 바라보자 이번엔 이준도 눈을 피하지 않았다.',
   '…나부터 말할까요? 그날 집에 가면서 아까 그 말은 왜 그렇게밖에 못 했나, 한참 생각했어요.',
   '…나부터 말할까? 그날 집에 가면서 아까 그 말은 왜 그렇게밖에 못 했나, 한참 생각했어.'
  ],
  sob: [
   '어깨가 들썩일 만큼 울음이 터졌다. 한동안 아무 소리도 안 내던 이준이 내가 숨을 들이쉬는 틈에 작게 입을 열었다.',
   '…나 여기 있어요. 대답은 안 해도 돼요. 내가 또 입 다물고 가 버린 줄 알까 봐요.',
   '…나 여기 있어. 대답은 안 해도 돼. 내가 또 입 다물고 가 버린 줄 알까 봐.'
  ]
 },
 '백지한': {
  hold: [
   '눈을 조금 치켜뜨고 울음을 삼켰다. 지한의 시선이 잠깐 내 눈가에 머물렀지만, 그가 입에 올린 건 자기 얘기였다.',
   '내가 그날 듣고 싶은 대답부터 정해 뒀죠. 그래 놓고 왜 솔직하게 말 안 해 주냐고 하면 좀 우습죠.',
   '내가 그날 듣고 싶은 대답부터 정해 뒀지. 그래 놓고 왜 솔직하게 말 안 해 주냐고 하면 좀 우습지.'
  ],
  quiet: [
   '소리 없이 흐르는 눈물을 보고 지한이 손을 들었다. 내 뺨 가까이 오기도 전에 손가락을 한 번 접고는 그대로 손을 내렸다.',
   '닦아 주고 싶었어요. 손부터 나가는 것 봐요, 내가. …지금은 말로 할게요. 그날 그렇게 말한 거 미안해요.',
   '닦아 주고 싶었어. 손부터 나가는 것 봐, 내가. …지금은 말로 할게. 그날 그렇게 말한 거 미안해.'
  ],
  dry: [
   '눈물은 나지 않았다. 내 얼굴을 가만 들여다보던 지한이 먼저 고개를 기울였다.',
   '표정 보고 맞혀 보려다가 그만뒀어요. 그날도 내가 다 안다는 식으로 굴었잖아요. 이번엔 직접 듣고 싶어요.',
   '표정 보고 맞혀 보려다가 그만뒀어. 그날도 내가 다 안다는 식으로 굴었잖아. 이번엔 직접 듣고 싶어.'
  ],
  sob: [
   '울음이 목에 걸려 말이 몇 번이나 끊어졌다. 지한은 내 쪽으로 기울였던 몸을 바로 세우고, 한 걸음 물러서서 목소리를 낮췄다.',
   '안아 주고 싶어요. 근데 지금 그건 내 욕심이죠. 여기 있을게요.',
   '안아 주고 싶어. 근데 지금 그건 내 욕심이지. 여기 있을게.'
  ]
 },
 '한시우': {
  hold: [
   '내가 눈을 몇 번 빠르게 깜박이자 시우도 덩달아 눈을 깜박였다. 무슨 말로 틈을 메울까 궁리하던 얼굴이 이내 진지해졌다.',
   '아, 나 또 뭐라도 말해야 되는 줄 알았어요. 잠깐 조용해도 되는데. 천천히 해요.',
   '아, 나 또 뭐라도 말해야 되는 줄 알았어. 잠깐 조용해도 되는데. 천천히 해.'
  ],
  quiet: [
   '소리 없이 흐르는 내 눈물을 보고 시우가 눈을 동그랗게 떴다. 입 모양만으로 두어 번 말을 고르더니 내 옆으로 몸을 돌렸다.',
   '나 이런 때 웃긴 말 하나쯤은 할 줄 알았거든요. 하나도 생각 안 나네요. …많이 속상했죠.',
   '나 이런 때 웃긴 말 하나쯤은 할 줄 알았거든. 하나도 생각 안 난다. …많이 속상했지.'
  ],
  dry: [
   '눈물은 나지 않았다. 내가 고개를 들자 시우는 장난스레 올리려던 눈썹을 도로 내렸다.',
   '나 진지한 얼굴 오래 못 하는 거 알죠. 그래도 오늘은 좀 할게요. 그날 하다 만 얘기, 나도 걸렸어요.',
   '나 진지한 얼굴 오래 못 하는 거 알지. 그래도 오늘은 좀 할게. 그날 하다 만 얘기, 나도 걸렸어.'
  ],
  sob: [
   '한꺼번에 터져 나온 울음에 시우가 움찔했다. 금방이라도 뭔가 해 보려던 두 손이 가만히 그의 옆으로 떨어졌다.',
   '아, 놀랐어요. 내가 여기서 뭘 해야 하는지 솔직히 잘 모르겠어요. 그래도 같이 있고는 싶어요.',
   '아, 놀랐어. 내가 여기서 뭘 해야 하는지 솔직히 잘 모르겠어. 그래도 같이 있고는 싶어.'
  ]
 },
 '정태오': {
  hold: [
   '나는 턱에 힘을 주고 울음을 눌렀다. 입을 열기까지 조금 걸렸는데, 태오는 그 잠깐을 조용히 기다렸다.',
   '말씀하십시오. 길어져도 괜찮습니다.',
   '얘기해. 길어져도 괜찮아.'
  ],
  quiet: [
   '내가 소매 끝으로 눈물을 찍어 내자 태오는 입을 다물었다. 내 손이 내려오기를 기다렸다가 목소리를 한결 낮췄다.',
   '제가 말을 멈췄으면 하실 때는 말씀해 주십시오. 바로 멈추겠습니다.',
   '내가 말을 멈췄으면 할 때는 말해 줘. 바로 멈출게.'
  ],
  dry: [
   '눈물이 날 것 같지는 않았다. 태오는 내 얼굴을 한 번 보고, 아까보다 조금 낮은 목소리로 말을 이었다.',
   '그날 저는 제 질문에 답하시라고만 했습니다. 이번에는 제가 듣겠습니다.',
   '그날 나는 내 질문에 대답하라고만 했어. 이번에는 내가 들을게.'
  ],
  sob: [
   '숨을 들이쉴 때마다 어깨가 떨렸다. 태오는 옆을 지나갈 자리를 넉넉히 비켜 주고 내 목소리가 닿는 거리에 멈췄다.',
   '저는 여기 있겠습니다. 잠시 혼자 계시고 싶으면 고개만 저어 주십시오.',
   '난 여기 있을게. 잠시 혼자 있고 싶으면 고개만 저어 줘.'
  ]
 },
 '임하나': {
  hold: [
   '내가 눈을 몇 번 깜박이는 동안 하나도 입을 열지 않았다. 소매 끝을 쥐고 있던 손이 조금 느슨해졌다.',
   '저도 할 말이 목에 걸리면 첫마디가 제일 오래 걸려요. 저 기다릴 수 있어요.',
   '나도 할 말이 목에 걸리면 첫마디가 제일 오래 걸려. 나 기다릴 수 있어.'
  ],
  quiet: [
   '하나는 눈물 자국을 보고도 닦아 주려 하지 않았다. 내가 뺨을 훔칠 동안 자기 손등만 가만히 쓸었다.',
   '저는 누가 울지 말라고 하면 더 나더라고요. …그냥 옆에 있어도 돼요?',
   '나는 누가 울지 말라고 하면 더 나더라. …그냥 옆에 있어도 돼?'
  ],
  dry: [
   '목소리가 평소처럼 나왔다. 하나는 고개를 끄덕이다가 문득 생각난 게 있는 듯 나를 봤다.',
   '저는 집에 가서야 꼭 하고 싶었던 말이 생각났어요. 혹시 그런 말 있었어요?',
   '나는 집에 가서야 꼭 하고 싶었던 말이 생각났어. 혹시 그런 말 있었어?'
  ],
  sob: [
   '울음에 말이 잘리자 하나가 얼른 손을 내밀었다. 내 손에 닿기 한 뼘 전에서 멈춘 채 손바닥을 펴 보였다.',
   '…손 잡고 싶으면 잡아요. 저 손 차가운데, 그래도 괜찮으면요.',
   '…손 잡고 싶으면 잡아. 나 손 차가운데, 그래도 괜찮으면.'
  ]
 },
 '차유리': {
  hold: [
   '내가 입을 꾹 다물자 유리가 한쪽 눈썹을 올렸다. 뭔가 물으려는 줄 알았는데 먼저 눈길을 돌린 건 유리였다.',
   '내가 너무 빤히 봤죠? 잠깐 딴 데 보고 있을게요. 하고 싶은 말 생기면 불러요.',
   '내가 너무 빤히 봤지? 잠깐 딴 데 보고 있을게. 하고 싶은 말 생기면 불러.'
  ],
  quiet: [
   '유리는 내 눈보다 젖은 옷소매를 먼저 봤다. 주머니에서 접힌 손수건을 꺼내 내 쪽으로 내밀었다.',
   '이거 쓸래요? 빨아 주겠다는 말은 미리 사양할게요. 그 얘기하느라 하던 말 놓치기 싫어요.',
   '이거 쓸래? 빨아 주겠다는 말은 미리 사양할게. 그 얘기하느라 하던 말 놓치기 싫어.'
  ],
  dry: [
   '유리는 내 얼굴을 잠깐 살피더니 팔짱을 풀었다. 조금 전까지 비스듬했던 몸이 내 쪽을 향했다.',
   '나랑 기억이 다른 데가 있으면 거기부터 얘기해 볼래요? 집에 가서 혼자 두 사람 몫을 다 생각하는 것도 이제 지겨워요.',
   '나랑 기억이 다른 데가 있으면 거기부터 얘기해 볼래? 집에 가서 혼자 두 사람 몫을 다 생각하는 것도 이제 지겨워.'
  ],
  sob: [
   '울음소리에 유리의 눈이 커졌다. 급히 내게 돌렸던 몸을 살짝 틀어, 내가 정면에서 얼굴을 보이지 않아도 되게 해 줬다.',
   '이쪽 보고 있어도 다 듣고 있어요. 하다 만 얘기, 목소리 나올 때 마저 해요.',
   '이쪽 보고 있어도 다 듣고 있어. 하다 만 얘기, 목소리 나올 때 마저 해.'
  ]
 },
 '오세린': {
  hold: [
   '꾹 삼킨 숨이 코끝으로 샜다. 세린은 뭔가 묻기 전에 먼저 한 번 느리게 숨을 내쉬었다.',
   '나도 잠깐 숨 좀 돌릴게요. 서둘러 얘기하다가 오늘 표정까지 놓치긴 싫어요.',
   '나도 잠깐 숨 좀 돌릴게. 서둘러 얘기하다가 오늘 표정까지 놓치긴 싫어.'
  ],
  quiet: [
   '눈물이 입가까지 흘러내렸다. 세린은 그 자국을 따라 눈을 내리는 대신 다시 내 눈을 봤다.',
   '나 지금 마음이 쓰여요. 가까이 있어 주는 게 좋을까요, 이만큼이 편할까요?',
   '나 지금 마음이 쓰여. 가까이 있어 주는 게 좋을까, 이만큼이 편할까?'
  ],
  dry: [
   '눈물은 나지 않았다. 속에 담아 뒀던 말이 차분하게 나왔다. 세린은 한마디씩 듣고 나서야 고개를 끄덕였다.',
   '그날 내가 했던 말 중에 아직 마음에 남은 게 있어요? 나도 하나 있어서요. 우리 그 얘기부터 할까요?',
   '그날 내가 했던 말 중에 아직 마음에 남은 게 있어? 나도 하나 있어서. 우리 그 얘기부터 할까?'
  ],
  sob: [
   '흐느낌 사이로 말이 자꾸 끊겼다. 세린은 내가 숨을 크게 들이마실 때마다 고개를 작게 끄덕여 줬다. 아직 듣고 있다는 말 같았다.',
   '마지막 말까지 듣고 싶어요. 잠깐 잊어버려도 돼요. 이따 생각나면 거기서 이어 가요.',
   '마지막 말까지 듣고 싶어. 잠깐 잊어버려도 돼. 이따 생각나면 거기서 이어 가자.'
  ]
 },
 '유지안': {
  hold: [
   '턱에 힘을 주고 울컥한 걸 삼켰다. 지안은 말을 보태려다 입을 다물었다. 내가 입을 열 때까지 그대로 기다렸다.',
   '나 또 먼저 말하려고 했죠? 기다릴게요. 이번엔 먼저 얘기해 줄래요?',
   '나 또 먼저 말하려고 했지? 기다릴게. 이번엔 먼저 얘기해 줄래?'
  ],
  quiet: [
   '말없이 눈물을 닦았더니 지안이 나를 향해 반 걸음 다가왔다. 이름을 부를 때보다 작은 소리로 말을 걸었다.',
   '그날 헤어지고 나서도 얼굴이 자꾸 생각났어요. 지금 곁에 있어서 다행이에요.',
   '그날 헤어지고 나서도 얼굴이 자꾸 생각났어. 지금 곁에 있어서 다행이야.'
  ],
  dry: [
   '나는 고개를 들고 지안과 눈을 맞췄다. 시선을 똑바로 받아 주는 지안의 어깨에서 조금 힘이 빠졌다.',
   '이렇게 얼굴 보고 얘기하면 금방 풀릴 줄 알았는데, 어렵네요. 그래도 난 조금 더 얘기하고 싶어요.',
   '이렇게 얼굴 보고 얘기하면 금방 풀릴 줄 알았는데, 어렵네. 그래도 난 조금 더 얘기하고 싶어.'
  ],
  sob: [
   '내 어깨가 들썩이자 지안의 두 팔이 먼저 벌어졌다. 당장이라도 나를 안을 것 같던 지안이 잠깐 멈춰 내 눈을 봤다.',
   '안아 주고 싶어요. 그래도 돼요? 대답은 좀 이따 해도 돼요.',
   '안아 주고 싶어. 그래도 돼? 대답은 좀 이따 해도 돼.'
  ]
 },
 '공재희': {
  hold: [
   '내가 입술을 꾹 누르는 사이 재희의 입이 달싹였다. 뭔가 한마디 튀어나오기 직전에 제 입에 손가락을 댔다.',
   '나 방금 이 어색한 거 싫어서 아무 말이나 할 뻔했어요. …오늘은 내가 좀 기다려 볼래요.',
   '나 방금 이 어색한 거 싫어서 아무 말이나 할 뻔했어. …오늘은 내가 좀 기다려 볼래.'
  ],
  quiet: [
   '내가 울고 있는 걸 본 재희가 손바닥으로 자기 눈을 가렸다. 장난칠 때와 달리 손가락 사이를 벌려 보지도 않았다.',
   '나 눈 감았어요. 눈 마주치면 더 날 때 있잖아요. …여기 있어요.',
   '나 눈 감았어. 눈 마주치면 더 날 때 있잖아. …여기 있어.'
  ],
  dry: [
   '재희는 내 대답을 기다리면서도 입 모양으로 뭔가를 중얼거리고 있었다. 내가 눈을 맞추자 재희가 먼저 그 버릇을 알아차렸다.',
   '나 지금 듣고 싶은 대답을 혼자 지어내고 있었어요. 그만할게요. 진짜 무슨 생각 하는지 궁금해요.',
   '나 지금 듣고 싶은 대답을 혼자 지어내고 있었어. 그만할게. 진짜 무슨 생각 하는지 궁금해.'
  ],
  sob: [
   '울음소리가 커지자 재희가 여느 때처럼 재빨리 입을 열었다. 이번만큼은 한참이 지나서야 그 뒤에 말이 따라왔다.',
   '나 뭐라고 해 줘야 될지 진짜 모르겠어요. 그래도 혼자 두고 가긴 싫어요. 여기 좀 있어도 돼요?',
   '나 뭐라고 해 줘야 될지 진짜 모르겠어. 그래도 혼자 두고 가긴 싫어. 여기 좀 있어도 돼?'
  ]
 }
};

const playerArgumentEmotions={
 hold:'참는다',quiet:'조용히 운다',dry:'눈물까진 나지 않는다',sob:'흐느낀다'
};
const argumentSupportOffers={
 '강도윤':{sob:[
  ['내민 손을 잡는다','내가 손을 얹자 도윤의 손가락이 천천히 오므라들었다. 내가 먼저 힘을 조금 풀었을 때 그 손도 함께 느슨해졌다.'],
  ['손을 잡지 않고 곁에 있어 달라고 한다','도윤은 손을 거두고 곁에 머물렀다. 가끔 코를 훌쩍이는 소리만 둘 사이를 오갔다.']
 ]},
 '임하나':{
  quiet:[
   ['옆에 있어 달라고 한다','내가 고개를 끄덕이자 하나가 어깨 한 뼘쯤 옆에 자리를 잡았다. 눈물을 닦는 동안 그만큼의 거리를 두고 기다려 줬다.'],
   ['지금 거리가 편하다고 한다','하나는 그 자리에서 고개를 끄덕였다. 내가 다시 눈을 마주칠 때까지 조용히 기다렸다.']
  ],
  sob:[
   ['하나의 손을 잡는다','차갑다고 했던 손끝이 정말 조금 서늘했다. 손을 쥐고 있자 떨리던 숨이 한 번 길게 이어졌다.'],
   ['손은 괜찮다고 한다','하나는 내민 손으로 자기 소매 끝을 잡았다. 내 곁에 그대로 있었다.']
  ]
 },
 '차유리':{quiet:[
  ['손수건을 받는다','내가 받아 들자 유리는 손수건에서 시선을 뗐다. 눈가를 닦고 나서 내가 먼저 유리를 다시 봤다.'],
  ['손수건은 괜찮다고 한다','유리는 말없이 손수건을 도로 접어 넣었다. 재촉하는 기색은 없었다.']
 ]},
 '오세린':{quiet:[
  ['조금 더 가까이 와 달라고 한다','내가 손짓하자 세린이 반 걸음 다가왔다. 나지막이 말해도 들릴 만큼 가까워졌다.'],
  ['지금 거리가 편하다고 한다','세린이 고개를 끄덕였다. 나도 그만큼의 거리를 사이에 두고 다시 세린을 바라봤다.']
 ]},
 '유지안':{sob:[
  ['안아 달라고 한다','내가 팔을 벌리자 지안이 나를 끌어안았다. 어깨가 크게 들썩일 때마다 등을 쓸어 주던 손이 잠깐씩 멈췄다.'],
  ['지금은 이만큼이 좋다고 한다','지안은 벌렸던 팔을 내리고 그 자리에 섰다. 내가 겨우 한마디씩 꺼내는 동안 먼저 돌아서지 않았다.']
 ]},
 '공재희':{sob:[
  ['곁에 있어 달라고 한다','내가 고개를 끄덕이자 재희는 한 번 작게 고개를 끄덕여 보였다. 내 울음이 조금 잦아들 때까지 그 자리에 있었다.'],
  ['조금 떨어져 있어 달라고 한다','재희는 몇 걸음 비켜서서 내가 먼저 고개를 들 때까지 기다렸다.']
 ]}
};

// Return true while the player is choosing how to respond, before the conversation continues.
function renderArgumentAftermath(ev,type,fightDay,canSpeak,offerOwnHurt=false,showNpcTears=true){
 const p=ev.person,scene=argumentTearScenes[p],m=memoryFor(p);
 if(showNpcTears&&scene&&!ev.argumentTears&&canSpeak&&fightDay&&m.tearfulArguments?.[type]!==fightDay){
  (m.tearfulArguments??={})[type]=fightDay;
  ev.argumentTears={type,fightDay};
  save();
 }
 const beat=ev.argumentTears,own=ev.playerArgumentFeeling,day=ev.day??initSim().day;
 const npc=speechRegisterIndex(p,'npc',day);
 if(beat&&scene){
  add('이야기',scene.moment);
  add(p,scene.line[npc]);
  // A save from before this choice existed may already include the player's wait.
  if(beat.waited&&(!own||own.afterWait))add('이야기',scene.waited);
 }
 const canChoose=()=>initSim().activeEvent===ev&&!ev.answered&&!ev.issueAnswer&&!ev.doorVisit?.outcome&&(!ev.everydayArgument||!ev.everydayArgument.outcome);
 const update=()=>{save();renderChoiceEvent();renderSim()};
 if(!own&&canSpeak&&fightDay&&m.expressedArguments?.[type]!==fightDay&&!beat?.sharedHurt&&!ev.doorVisit?.spokeHurt){
  add('이야기','그 말을 들은 나는…');
  for(const [choice,label] of Object.entries(playerArgumentEmotions)){
   choiceButton(label,()=>{
    if(!canChoose()||ev.playerArgumentFeeling||m.expressedArguments?.[type]===fightDay)return;
    ev.playerArgumentFeeling={type,fightDay,choice,afterWait:!!beat?.waited};
    (m.expressedArguments??={})[type]=fightDay;
    update();
   });
  }
  return true;
 }
 const responseState=beat||own;
 if(!responseState)return false;
 const sharedHurt=responseState.sharedHurt||ev.doorVisit?.spokeHurt;
 const offer=own&&argumentSupportOffers[p]?.[own.choice];
 if(own){
  const [action,polite,casual]=playerArgumentReactions[p][own.choice];
  add('이야기',action);
  add(p,npc?casual:polite);
  if(offer&&own.support!=null)add('이야기',offer[own.support][1]);
  else if(offer&&canSpeak&&!sharedHurt&&(!beat?.waited||own.afterWait)){
   offer.forEach(([label],i)=>choiceButton(label,()=>{
    if(!canChoose()||own.support!=null||responseState.sharedHurt||ev.doorVisit?.spokeHurt||
     (beat?.waited&&!own.afterWait))return;
    own.support=i;
    update();
   }));
  }
  if(beat?.waited&&!own.afterWait)add('이야기',scene.waited);
 }
 const pc=speechRegisterIndex(p,'player',day);
 const mySide=pc?'나도 그날 많이 속상했어. 내 얘기도 들어 줄래?':'저도 그날 많이 속상했어요. 제 얘기도 들어 줄래요?';
 if(responseState.sharedHurt){add(state.name,mySide,true);add(p,doorstepVoices[p].listen[npc])}
 if(!canSpeak)return false;
 function choose(label,field){
  choiceButton(label,()=>{
   if(!canChoose()||responseState[field]||(field==='waited'&&(responseState.sharedHurt||ev.doorVisit?.spokeHurt)))return;
   responseState[field]=true;
   update();
  });
 }
 if(beat&&!beat.waited&&!sharedHurt)choose('잠시 말을 멈추고 기다려 준다','waited');
 if(offerOwnHurt&&!responseState.sharedHurt)choose(mySide,'sharedHurt');
 return false;
}

function coupleAngerScene(ev,p,issue){
 if(Object.hasOwn(ev,'coupleAnger'))return ev.coupleAnger;
 if(ev.issueAnswer||ev.betrayalAnswer||issue.status!=='pending')return null;
 const {obsession,distrust}=relationshipPressure(p),{jealousy}=memoryFor(p).feelings;
 const confirmedBetrayal=issue.kind==='betrayal'&&issue.source==='confirmed';
 const intenseJealousy=issue.kind==='jealous'&&jealousy>=6&&obsession>=8;
 if(!confirmedBetrayal&&!intenseJealousy)return null;
 const peak=obsession>=16&&(distrust>=12||jealousy>=16);
 ev.coupleAnger={kind:issue.kind,peak};
 save();
 return ev.coupleAnger;
}
function renderCoupleAnger(p,anger){
 const a=coupleAngerScenes[p];
 $('progress').textContent=anger.peak?'연인의 이야기 · 선을 넘은 말':'연인의 이야기 · 참았던 말';
 add('이야기',a.action);
 add(p,a[anger.kind]);
 if(anger.peak)add(p,a.peak);
 return a;
}
function renderCoupleIssue(ev){const v=initSim(),p=ev.person,r=coupleIssueRecord(p),a=coupleConflictVoices[p],l=a.lines;if(r.active?.kind==='betrayal'||ev.betrayalAnswer){renderBetrayal(ev,p);return}if(!ev.issueSnapshot){if(!r.active){choiceButton('일정 계속하기',finishEvent);return}ev.issueSnapshot={...r.active};save()}const x=ev.issueSnapshot,repair=x.status==='ready',anger=coupleAngerScene(ev,p,x);$('progress').textContent='연인의 이야기 · '+a.theme;if(anger){renderCoupleAnger(p,anger)}else if(repair){add('이야기',l[5]);add(p,l[6]);if(renderArgumentAftermath(ev,'couple',heatedCoupleArgumentDay(p,x),!ev.issueAnswer,true))return}else if(x.status==='waiting'){add('이야기',l[0]);add(p,l[8]);choiceButton('오늘은 조용히 인사만 한다',finishEvent);return}else{add('이야기',l[0]);add(p,l[x.kind==='jealous'?1:2])}if(ev.issueAnswer){add(state.name,ev.issueAnswer.label,true);add(ev.issueAnswer.narration?'이야기':p,ev.issueAnswer.reply);choiceButton('일정 계속하기',finishEvent);return}const opts=repair?[['다시 이야기해 줘서 고마워요. 함께 맞춰 가요.',0],['아직 조금 더 시간이 필요해요.',1]]:anger?[[heatedArgumentReplies[0],0],[heatedArgumentReplies[1],1]]:[[l[3],0],[l[7],1]];for(const [label,i] of opts)choiceButton(label,()=>{if(ev.issueAnswer)return;const narration=!!anger&&i===1;const reply=anger?coupleAngerScenes[p][narration?'exit':'reply']:l[i===0?4:8];ev.issueAnswer={label,reply,narration};if(anger)x.hadHeatedTalk=true;applyCoupleIssueAnswer(p,x,i,label,reply);save();renderChoiceEvent();renderSim()})}

const trianglePartner={"서이준":["이준이 두 사람을 번갈아 바라보고 조용히 고개를 끄덕였다.","…안녕하세요. 두 분 이야기 중이었나 보네요.","이준이 잠시 시선을 내렸다. 평소보다 짧은 인사였다.","…꽤 즐거워 보이네요. 방해 안 할게요.","…그랬군요. 같이 인사해서 좋네요.","네. 원래 하던 이야기 마저 해요.","…나중에 봐요. 이야기할 게 조금 있어서요."],"강도윤":["도윤이 두 사람을 발견하고 손을 들어 인사했다.","하하, 좋은 시간 보내고 계셨네요.","도윤의 웃음이 한 박자 늦었다.","하하, 저보다 이야기가 더 잘 통하는 것 같기도 하네요.","아, 소개해 줘서 고마워요. 저도 편하게 있으면 되겠네요.","좋아요. 저도 제 일 마저 하고 올게요.","……네. 나중엔 저도 좀 솔직하게 이야기할게요."],"한시우":["시우가 두 사람에게 반갑게 손을 흔들었다.","오, 파티원 추가요? 안녕하세요!","시우가 웃다가 잠깐 입술을 다물었다.","오… 두 분 재밌는 퀘스트 중이었네요?","오예! 이렇게 같이 만나는 것도 괜찮네요.","콜! 하던 거 마저 하고 나중에 봐요.","아, 오케이. 저도 나중엔 장난 말고 얘기할게요."],"정태오":["태오가 걸음을 멈추고 두 사람에게 정중히 인사했다.","안녕하십니까. 좋은 시간 보내고 계시는군요.","태오가 두 사람에게 차례로 고개를 숙였다.","두 분 말씀을 나누고 계셨군요.","감사합니다. 저도 잠시 인사드리겠습니다.","알겠습니다. 편히 시간을 보내십시오.","네. 나중에 시간을 맞춰 이야기하시죠."],"백지한":["지한이 두 사람을 발견하고 여유 있게 미소 지었다.","어라, 여기서 만날 줄은 몰랐네요. 즐거운 시간 보내고 있어요?","지한이 웃는 얼굴로 가까이 왔다. 시선은 당신에게 조금 오래 머물렀다.","이런 우연도 있네요. …제가 모르는 약속도 꽤 재미있나 봐요?","좋아요. 서로 알고 지내면 되죠. 제가 시간을 독점할 일은 아니니까.","아쉽지만 먼저 잡은 약속도 중요하죠. 이따 봐요.","…좋아요. 여기서 이야기할 일은 아니죠. 나중에 봐요."],"임하나":["하나가 두 사람을 발견하고 조심스럽게 인사했다.","아… 안녕하세요. 두 분 함께 계셨네요.","하나가 말을 꺼내려다가 자신의 소매를 쥐었다.","……저도 같이 이야기하고 싶었는데. 아, 아니에요.","네. 저도 함께 인사할 수 있어서 좋아요.","네. 저는 제 일 마저 할게요. 다음에 봐요.","……네. 저도 하고 싶은 말을 좀 생각해 볼게요."],"차유리":["유리가 두 사람을 발견하자 가볍게 손을 흔들었다.","오, 여기서 보네요! 두 분 뭐 하고 있었어요?","유리가 스케치북을 옆구리에 끼고 인사했다.","마침 만났네요. 둘이서 구경 중이었어요?","좋다. 셋이서도 종종 보면 재밌겠네요.","오케이. 저는 작업하러 갈게요. 잘 놀아요!","좋아요. 나중에 서로 일정 얘기해요."],"오세린":["세린이 두 사람에게 따뜻하게 미소 지었다.","어머, 두 분 함께 계셨군요. 즐거운 시간 보내세요.","세린이 잠시 멈춰 차분하게 인사했다.","아아, 여기서 뵙네요. 이야기 중이셨군요.","네. 이렇게 인사 나누는 것도 좋네요.","그럼 저는 이만 가 볼게요. 편하게 이야기해요.","네. 나중에 차 한잔하면서 이야기해요."],"유지안":["지안이 손을 크게 흔들며 다가왔다.","와우! 여기서 우연히 만나네요! 재밌게 놀고 있어요?","지안의 웃음이 잠시 옅어졌다가 다시 밝아졌다.","와, 두 분 재밌어 보인다! 저도 좀 끼고 싶었는데요.","예쓰! 이렇게 만나는 것도 신기하네요!","넵! 원래 하던 거 마저 하고 이따 봐요.","좋아요. 저도 괜찮은 척만 하지 않고 얘기할게요."],"공재희":["재희가 휴대전화를 내리고 두 사람을 바라봤다.","헐 여기서 봄ㅋㅋ 둘이 놀고 있었어요?","재희가 화면을 끄고 당신과 상대를 번갈아 보았다.","아… 둘이 되게 재밌어 보이네요. 나만 몰랐나 싶음.","웅ㅋㅋ 소개해 줘서 고마워요. 나도 괜히 혼자 생각 안 할게요.","웅. 원래 하던 거 마저 해요. 나도 내 거 할게요.","…웅. 나도 지금은 좀 생각하고 나중에 말할게요."]};
const triangleOther={"서이준":["이준이 한 발 물러서며 시선을 돌렸다.","…두 분 아는 사이군요. 저는 필요한 것만 보고 갈게요.","…편하게 말씀 나누세요.","…그럼 잠깐만 같이 있어도 될까요?"],"강도윤":["도윤이 자연스럽게 두 사람에게 자리를 내주었다.","하하, 우연히 만났네요. 저 때문에 불편해하지 마세요.","그럼 저는 잠깐 다른 데 보고 올게요.","좋아요. 무슨 얘기 중이었어요?"],"한시우":["시우가 눈치를 살피다가 들고 있던 물건을 내려놓았다.","어… 안녕하세요! 저는 그냥 놀러 왔어요.","오케이. 두 분 이야기 먼저 하세요.","그럼 저도 궁금한 거 하나 물어봐도 돼요?"],"정태오":["태오가 대화가 끊기지 않도록 잠시 기다렸다.","안녕하십니까. 저는 잠시 들른 참입니다.","그럼 두 분 말씀 나누십시오.","그럼 저도 잠시 함께하겠습니다."],"백지한":["지한이 상황을 파악한 듯 눈썹을 살짝 올렸다.","어라, 우연이네요. 제가 끼어들 자리는 아닌가 보군요.","좋아요. 두 분 시간은 두 분이 알아서 쓰시죠.","그럼 저도 잠깐 같이 있어도 돼요? 무슨 얘기 중이었어요?"],"임하나":["하나가 두 사람의 표정을 살피며 작게 인사했다.","아, 안녕하세요. 저는 괜찮아요.","……그럼 먼저 제 일 하러 갈게요.","그럼 저도 잠깐 같이 있어도 될까요?"],"차유리":["유리가 두 사람을 번갈아 보고 가볍게 어깨를 으쓱했다.","오, 마침 만났네요. 굳이 저 때문에 신경 쓰지는 말아요.","좋아요. 저는 작업 마저 할게요.","좋아요. 저도 듣고 싶어졌어요."],"오세린":["세린이 미소를 지으며 잠시 기다렸다.","어머, 반가워요. 편하게 이야기하세요.","아아, 그럼 저는 이만 가 볼게요.","좋아요. 저도 잠깐 같이 있을게요."],"유지안":["지안이 분위기를 살피고 손을 작게 흔들었다.","와우, 우연히 만났네요! 저 신경 쓰지 말고 인사해요.","넵! 저는 제 볼일 보고 올게요.","좋아요! 저도 마침 할 얘기 있었어요."],"공재희":["재희가 두 사람을 보고 눈을 깜박였다.","헐 우연이다ㅋㅋ 나 괜히 끼어든 거 아님?","웅. 그럼 나 먼저 가 볼게요.","오, 좋아요. 무슨 얘기 하고 있었어요?"]};
const triangleTies={"서이준":["한시우"],"강도윤":["정태오","백지한"],"한시우":["서이준","강도윤"],"정태오":["강도윤","백지한"],"백지한":["강도윤","정태오"],"임하나":["유지안"],"차유리":["오세린","강도윤"],"오세린":["차유리"],"유지안":["임하나"],"공재희":[]};
const publicDatePlaces={
 '오락실':'arcade','수영장':'pool','연화천 산책':'river','고양이 산책':'home','사진 산책':'park'
};
const publicDateStops={
 '건축 산책':'realty','디저트 카페':'cafe','디저트 투어':'cafe','시장 구경':'store','영화관':'park','서점':'cafe','근교 나들이':'store'
};
const publicDateApproach={
 '고양이 산책':'빌라 앞 골목에서 고양이를 보고 일어섰다. 현관 쪽에서 아는 얼굴이 다가왔다.',
 '건축 산책':'건물 외벽을 올려다보다가 연화부동산 앞에 멈춰 섰다. 유리문 너머에서 누군가 우리를 알아봤다.',
 '디저트 카페':'디저트 가게에서 나와 카페 오후 네 시 앞을 지날 때였다. 열린 문 바로 안쪽에 낯익은 얼굴이 보였다.',
 '디저트 투어':'마지막 디저트 가게에서 나와 걷다 보니 오후 네 시 앞이었다. 카페에 있던 사람이 창 너머로 우리를 보고 나왔다.',
 '시장 구경':'시장을 나와 물을 사러 연화편의점에 들렀다. 계산대 쪽에서 누군가 고개를 들었다.',
 '영화관':'영화를 보고 동네로 돌아오는 길에 작은 공원을 가로질렀다. 맞은편에서 낯익은 사람이 걸어왔다.',
 '서점':'서점에서 나와 오후 네 시에 들렀다. 문이 열리는 소리에 안쪽에 있던 사람이 돌아봤다.',
 '근교 나들이':'동네에 돌아와 연화편의점에 들렀다. 냉장고 앞에서 마주친 사람이 우리 쪽으로 고개를 돌렸다.'
};
function triangleCandidates(present,lover,preferred){if(!lover||!present.includes(lover))return null;const others=present.filter(p=>p!==lover);return others.includes(preferred)?preferred:others[0]||null}
function trianglePresent(place,day,slot){return people.filter(p=>initSim().met[p]&&npcPlace(p,(day-1)%7,slot,day)===place)}
function triangleRecord(p){const r=coupleRecord(p);return r.triangle||(r.triangle={last:0,history:[],reports:[]})}
function makeTriangle(ev,place,companion){
 const v=initSim(),day=ev.day||v.day;
 if(!v.running||day!==v.day)return null;
 const slot=v.running.slot,present=trianglePresent(place,day,slot),partners=lovers();
 // A booking places its companion here even when their ordinary timetable is elsewhere.
 const others=partners.filter(p=>p!==companion&&present.includes(p)).sort((a,b)=>triangleRecord(a).last-triangleRecord(b).last);
 const eligible=p=>day>=coupleRecord(p).since+2&&!coupleIssueRecord(p).active&&(!triangleRecord(p).last||day-triangleRecord(p).last>=7);
 let lover=others.find(eligible),other;
 if(lover){
  other=companion||triangleCandidates(present,lover,present.find(q=>q!==lover&&v.romance[q]==='ended'&&exRecord(q)));
 }else if(companion&&partners.includes(companion)&&eligible(companion)){
  const bystanders=present.filter(q=>q!==companion&&!partners.includes(q));
  if(bystanders.length){lover=companion;other=bystanders.find(q=>v.romance[q]==='ended'&&exRecord(q))||bystanders[0]}
 }
 if(!lover||!other||Math.random()>=.75)return null;
 return {lover,other,place,day,slot,level:bothConsented(lover,other)?multiTension(lover,other):coupleJealousLevel(lover,day),fromDate:!!companion,companion:companion||null};
}
function triangleReport(ev,place,companion){const v=initSim(),day=ev.day||v.day,lover=lovers().find(p=>p!==companion&&!bothConsented(p,companion));if(!lover||!companion||lover===companion||!v.running||coupleIssueRecord(lover).active)return;const t=triangleRecord(lover);if(t.last&&day-t.last<7)return;const present=trianglePresent(place,day,v.slot);if(present.includes(lover))return;const witness=present.find(p=>p!==companion&&triangleTies[lover].includes(p));if(!witness||Math.random()>=.35)return;const key=companion+':'+day;if(t.reports.some(x=>x.key===key))return;t.reports.push({key,day,other:companion,witness,place,done:false});t.last=day;remember(witness,'witness:'+day,companion+'와 '+state.name+'이 함께 있는 모습을 봄')}
function triangleReportNight(day){const v=initSim();for(const p of people){if(v.romance[p]!=='dating')continue;const t=triangleRecord(p);for(const x of t.reports){if(x.done||x.day>=day)continue;x.done=true;const loc=locations.find(l=>l.id===x.place)?.name||'동네',level=coupleJealousLevel(p,day),lines=trianglePartner[p],thread=phoneData().threads[p]||(phoneData().threads[p]=[]);const opening=x.witness+'에게 '+loc+'에서 '+x.other+'와 함께 계셨다는 이야기를 들었어요.';thread.push({day,booking:true,playerLine:'',npcLine:opening+'\n'+lines[level>=2?3:1],reply:1});remember(p,'triangle:reported:'+x.key,x.witness+'에게 '+loc+'에서 함께 있던 사실을 들음');if(level>=2)noteCoupleIssue(p,day,'jealous',x.other);else feel(p,{security:1});t.history.push({...x,source:'report',level});writeJournal(p+' · '+x.witness+'에게 우연한 만남 이야기를 들음')}}}
// The introduction is addressed to the bystander. The response is addressed to the player.
const witnessedDatingVoices={
 '강도윤':['아, 오늘은 손님 모시는 날이 아니에요. 저희 둘이 사귀거든요.','잠깐만요. 지금 들은 말, 저도 알고 있어야 했던 거죠?','잠깐만. 지금 들은 말, 나도 알고 있어야 했던 거지?'],
 '서이준':['…저희요? 사귀어요. 굳이 숨길 일은 없잖아요.','…언제부터였어요? 저만 모르고 있었어요?','…언제부터였어? 나만 모르고 있었어?'],
 '백지한':['아, 소개가 늦었네요. 제가 요즘 그렇게 자랑하던 애인이에요.','잠깐. 내 눈 보고 말해 줄래요? 방금 그 말, 진짜예요?','잠깐. 내 눈 보고 말해 줄래? 방금 그 말, 진짜야?'],
 '정태오':['예. 오늘은 애인과 함께 나왔습니다.','하나만 묻겠습니다. 저와 사귀는 동안이었습니까?','하나만 물을게. 나랑 사귀는 동안이었어?'],
 '한시우':['우리 데이트 중이에요! 아, 우리 사귀는 거 얘기 안 했나?','잠깐만요. 나 지금 웃으면 안 되는 거죠? 진짜 사귀는 거예요?','잠깐만. 나 지금 웃으면 안 되는 거지? 진짜 사귀는 거야?'],
 '임하나':['그게…… 저희 사귀어요. 오늘 같이 나오고 싶어서 제가 먼저 물어봤어요.','……저, 잠깐만 여기 있을게요. 지금은 같이 걸어갈 자신이 없어요.','……나, 잠깐만 여기 있을게. 지금은 같이 걸어갈 자신이 없어.'],
 '유지안':['맞아요, 데이트예요. 우리 사귀거든요.','나 그거 직접 듣고 싶었어요. 다른 사람 입에서 들으려니까 되게 이상하네.','나 그거 직접 듣고 싶었어. 다른 사람 입에서 들으려니까 되게 이상하네.'],
 '오세린':['우리요? 사귀는 사이예요. 오늘은 제가 먼저 만나자고 했어요.','내가 표정을 못 숨기겠네요. 잠깐만 생각할 시간을 줄래요?','내가 표정을 못 숨기겠네. 잠깐만 생각할 시간을 줄래?'],
 '공재희':['우리 사귀어요. 오늘 데이트룩 좀 잘 골랐죠?','헐. 잠깐만요. 나 지금 처음 듣는데 왜 나만 처음 들어요?','헐. 잠깐만. 나 지금 처음 듣는데 왜 나만 처음 들어?'],
 '차유리':['아, 우리 사귀어요. 오늘은 일 얘기 접고 둘이 좀 놀려고요.','나 지금 어디까지 모르고 있었던 거예요? 그건 좀 듣고 갈래요.','나 지금 어디까지 모르고 있었던 거야? 그건 좀 듣고 갈래.']
};
function witnessedDatingReply(p,day){
 const mode=memoryFor(p).address?.npcSpeech;
 return witnessedDatingVoices[p][mode==='반말'||(mode==='혼용'&&day%2===0)?2:1];
}
function renderWitnessedDating(o){
 const p=o.lover,q=o.other;
 if(!o.discovery){
  o.discovery={first:secretUnknown(p,q),canTell:secretUnknown(q,p)};
  if(o.discovery.first)revealOne(p,q);
  // Save the observed fact immediately. Reloading an unanswered scene cannot repeat the consequence.
  const t=triangleRecord(p);
  t.last=o.day;
  for(const who of [p,q])socialRecord(who).lastSeen=o.day;
  o.discovery.witnessLine=o.discovery.first?witnessedDatingReply(p,o.day):'';
  save();
 }
 const x=o.discovery;
 add(q,witnessedDatingVoices[q][0]);
 if(x.witnessLine){
  add('이야기',q+'에게 손짓으로 잠깐만 기다려 달라고 했다. 조금 떨어진 곳까지 나란히 걸어가자 '+p+' 쪽에서 낮은 목소리가 들렸다.');
  add(p,x.witnessLine);
 }
 else add('이야기',p+' 쪽으로 시선이 갔다. 잠시 눈이 마주쳤지만 먼저 입을 여는 사람은 없었다.');
 if(o.answer){
  add('이야기',o.answer.narration);
  if(o.answer.otherReply)add(q,o.answer.otherReply);
  return false;
 }
 const answer=(label,disclose)=>{
  if(o.answer)return;
  const told=disclose&&x.canTell&&revealOne(q,p);
  const narration=disclose?'다시 셋이 마주 섰다. 두 사람 모두와 사귀고 있다고 내 입으로 말했다.':'지금은 여기서 깊은 이야기를 하고 싶지 않다고 했다. 잠시 말이 끊겼다.';
  const reply=told?witnessedDatingReply(q,o.day):'';
  o.answer={label,narration,reply:x.witnessLine,otherReply:reply};
  const loc=locations.find(l=>l.id===o.place)?.name||'동네';
  triangleRecord(p).history.push({day:o.day,slot:o.slot??null,other:q,place:o.place,level:o.level,choice:disclose?'tell':'later',source:'witness',reply:x.witnessLine});
  remember(p,'triangle:'+o.day,loc+'에서 '+q+'의 교제 소개를 직접 들음 / '+label);
  remember(q,'triangle:'+o.day,loc+'에서 '+p+' 얼굴을 봄 / '+label);
  writeJournal('데이트 중 마주친 두 사람 · '+p+' · '+q);
  save();renderChoiceEvent();renderSim();
 };
 if(x.canTell){
  const tell='두 사람 앞에서 누구와 사귀고 있는지 솔직하게 말한다';
  choiceButton(tell,()=>answer(tell,true));
 }
 const later=x.canTell?'여기서는 말을 아끼고 나중에 따로 이야기하자고 한다':'지금은 자리를 정리하고 나중에 따로 이야기하자고 한다';
 choiceButton(later,()=>answer(later,false));
 return true;
}
function renderTriangle(ev){const v=initSim(),o=ev.triangle,p=o.lover,q=o.other;if(v.romance[q]==='ended'&&exRecord(q))return renderExTriangle(ev);const a=trianglePartner[p],b=triangleOther[q],tense=o.level>=2,loc=locations.find(l=>l.id===o.place)?.name||'동네';$('progress').textContent='뜻밖의 삼자대면';add('이야기',o.approach||loc+'에서 세 사람이 서로 마주쳤다.');if(o.discovery||(!o.answer&&o.fromDate&&o.companion===q&&lovers().includes(q)&&lovers().includes(p)&&!bothConsented(p,q)&&(secretUnknown(p,q)||secretUnknown(q,p))))return renderWitnessedDating(o);add('이야기',a[tense?2:0]);add(p,a[tense?3:1]);add('이야기',b[0]);add(q,b[1]);if(o.answer){add(state.name,o.answer.label,true);add(p,o.answer.reply);add(q,o.answer.otherReply===b[1]?b[3]:o.answer.otherReply);return false}const opts=[['두 사람에게 자연스럽게 인사하고 함께 이야기를 나눈다',0],['먼저 나누던 이야기를 마저 하고 나중에 만나기로 한다',1],['연인과 따로 이야기할 시간을 잡는다',2]];for(const [label,i] of opts)choiceButton(label,()=>{if(o.answer)return;const reply=a[4+i];o.answer={label,reply,otherReply:b[i===0?3:2]};const t=triangleRecord(p);t.last=o.day;t.history.push({day:o.day,other:q,place:o.place,level:o.level,choice:i,source:'witness',reply});for(const who of [p,q])socialRecord(who).lastSeen=o.day;remember(p,'triangle:'+o.day,q+'와 '+loc+'에서 마주침 / '+label);remember(q,'triangle:'+o.day,p+'와 '+loc+'에서 마주침');if(bothConsented(p,q)){if(o.fromDate&&o.companion===q)multiKnownDate(p,q,o.day);const d=multiState(p,q);if(i===0)d.affinity=Math.min(12,d.affinity+1)}else if(tense){const started=noteCoupleIssue(p,o.day,'jealous',q);if(started)coupleIssueRecord(p).active.source='witness'}else feel(p,{security:1});writeJournal(p+' · '+q+'와 뜻밖의 삼자대면');save();renderChoiceEvent();renderSim()});return true}
function renderDateTriangle(ev,p){
 if(!ev.triangleChecked){
  ev.triangleChecked=true;
  const venue=ev.venue||dateLines[p][0],place=publicDatePlaces[venue]||publicDateStops[venue];
  if(place){
   ev.triangle=makeTriangle(ev,place,p);
   if(ev.triangle)ev.triangle.approach=publicDateApproach[venue]||null;
   else if(publicDatePlaces[venue])triangleReport(ev,place,p);
  }
  save();
 }
 if(!ev.triangle)return false;
 if(renderTriangle(ev))return true;
 if(ev.triangle.discovery){choiceButton('일정 계속하기',finishEvent);return true}
 return false;
}

