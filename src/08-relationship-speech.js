const relationshipVoices={"서이준":["…왔어요. 오늘은 좀 조용하네요.","…왔어. 오늘은 좀 조용하네.","…이런 얘기까지 하게 될 줄은 몰랐어요.","…이런 얘기까지 하게 될 줄 몰랐네.","……오늘은 안 오나 했어요.","……오늘은 안 오나 했어.","오늘은 조금 더 같이 있어도 될까요?","오늘은 조금 더 같이 있어도 돼?","…옆에 있으니까 마음이 편해요.","…옆에 있으니까 좋네.","…부르던 이름 말고, 좀 다르게 불러도 될까요?","…그 친구도 왔네요. 인사해요.","…괜찮아요. 친구인 건 알고 있으니까."],"강도윤":["하하, 오늘은 어떻게 보내셨어요?","하하, 오늘 하루 어땠어?","오늘은 제가 제 얘기도 좀 해 볼까요?","오늘은 나도 내 얘기 좀 해 볼까?","오늘따라 자꾸 문 쪽을 보게 되더라고요.","오늘따라 자꾸 문 쪽을 보게 되더라.","오늘은 제가 조금 더 가까이 있어도 될까요?","오늘은 조금 더 가까이 있어도 될까?","이제는 같이 있는 시간도 제 일상 같네요.","이제 같이 있는 시간도 내 일상 같네.","하하, 둘만 있을 때 특별한 이름으로 불러 보고 싶어요.","하하, 마침 두 분 다 뵙네요.","친구 사이인 건 이해해요. 저도 제 마음은 이야기할게요."],"한시우":["앗, 오늘도 만났네요.","앗, 오늘도 만났네.","오, 이거 친구한테만 하는 얘긴데요.","오, 이거 친구한테만 하는 얘긴데.","아, 오늘 좀 보고 싶었다고요.","아, 오늘 좀 보고 싶었다고.","히히, 오늘은 좀 붙어 있어도 돼요?","히히, 오늘 좀 붙어 있어도 돼?","이제 완전 내 편인 기분이에요.","완전 내 편인 기분이다.","오, 우리만 쓰는 호칭 하나 정하면 안 돼요?","앗, 여기서 두 분 다 만나네요?","괜찮아요. 우리 나중에 둘이 얘기해요."],"정태오":["안녕하십니까. 오늘도 무리하지 마십시오.","왔어? 오늘도 너무 무리하지 마.","당신이라면 편하게 이야기할 수 있을 것 같습니다.","너한테는 편하게 얘기해도 될 것 같아.","…뵙고 싶었다는 말씀을 드리고 싶었습니다.","…보고 싶었어. 오늘은 꼭 만나고 싶더라.","사적인 시간을 함께 보내고 싶습니다.","오늘은 너랑 좀 더 같이 있고 싶어.","당신과 함께하는 시간이 익숙해졌습니다.","이제 네가 옆에 있는 게 참 편해.","둘만 있는 자리에서 조금 다른 호칭을 사용해도 되겠습니까?","두 분 모두 안녕하십니까.","서로의 관계를 존중하면 될 일입니다."],"백지한":["오늘 일정은 어떠셨나요?","오늘 일정 어땠어?","이런 얘기는 아무한테나 하지 않는데 말이죠.","이런 얘기는 아무한테나 하지 않는데.","오늘 저녁 비워 둬요. 보고 싶으니까.","오늘 저녁 비워 둬. 보고 싶으니까.","오늘은 조금 더 가까이 앉고 싶네요.","오늘은 조금 더 가까이 앉고 싶어.","당신이 편하게 쉬는 모습도 좋아요.","네가 편하게 쉬는 모습도 좋아.","다른 사람과 똑같은 호칭으로 부르기는 싫은데, 괜찮겠어요?","마침 여기 계셨네요. 인사는 해야겠죠.","친구라는 건 알아요. 그래도 나중에 둘이 이야기합시다."],"임하나":["안녕하세요. 오늘 하루 괜찮으셨어요?","안녕. 오늘 하루 괜찮았어?","저도 이제는 이런 얘기를 할 수 있네요.","나도 이제 이런 얘기를 할 수 있네.","…오늘 만나고 싶었어요.","…오늘 만나고 싶었어.","저, 조금 더 같이 있고 싶어요.","나, 조금 더 같이 있고 싶어.","이렇게 함께 있어도 어색하지 않아서 좋아요.","이렇게 같이 있어도 어색하지 않아서 좋아.","저… 우리 둘만 사용하는 호칭이 있으면 좋겠어요.","아, 두 분 다 계셨네요.","저도 마음을 숨기지 않고 이야기해 볼게요."],"차유리":["오, 오늘 뭐 하고 왔어요?","오, 오늘 뭐 하고 왔어?","이거 다른 데선 안 하는 얘긴데, 들어 볼래요?","이거 다른 데선 안 하는 얘긴데, 들어 볼래?","오, 오늘따라 같이 놀고 싶었어요.","오, 오늘따라 같이 놀고 싶었어.","오늘은 좀 더 붙어 다녀도 되죠?","오늘은 좀 더 붙어 다녀도 되지?","오케이, 이렇게 각자 할 일 하면서 같이 있는 것도 좋네요.","오케이, 각자 할 일 하면서 같이 있는 것도 좋네.","둘만 아는 별명 하나 만들까요?","오, 셋이 여기서 만나다니.","친구는 친구죠. 다만 서로 불편한 건 얘기해요."],"오세린":["아아, 오늘은 잘 지내셨나요?","아아, 오늘은 잘 지냈어?","으음, 당신에게는 제 마음도 말씀드리고 싶네요.","으음, 너에게는 내 마음도 말하고 싶네.","아아, 오늘은 함께 차를 마시고 싶었어요.","아아, 오늘 같이 차 마시고 싶었어.","조금 더 가까이 있어도 괜찮을까요?","조금 더 가까이 있어도 괜찮을까?","이런 평온한 시간이 참 소중하네요.","이런 평온한 시간이 참 소중하네.","둘만 있을 때 조금 더 다정하게 불러도 괜찮을까요?","아아, 두 분이 여기 계셨군요.","으음, 우리 각자의 마음을 존중해요."],"유지안":["오늘도 좋은 하루 보내고 있어요?","오늘도 좋은 하루 보내고 있어?","이건 우리끼리만 하는 얘기예요.","이건 우리끼리만 하는 얘기야.","와우, 오늘 진짜 보고 싶었어요!","와우, 오늘 진짜 보고 싶었어!","오늘은 조금 더 붙어서 걸어요. 괜찮죠?","오늘은 좀 더 붙어서 걷자. 괜찮지?","이제 같이 있는 게 참 자연스러워요.","이제 같이 있는 게 참 자연스러워.","우리만의 애칭 하나 만들어요! 어때요?","와, 여기서 셋이 만나네요!","친구인 건 알아요. 나중에 나랑도 시간 보내요."],"공재희":["헐ㅋㅋ 오늘 뭐 했어요?","헐ㅋㅋ 오늘 뭐 했어?","이거 진짜 친구라서 하는 얘기임.","이거 진짜 친구라서 하는 얘기임.","아니 나 오늘 개보고 싶었는데.","아니 나 오늘 개보고 싶었는데.","오늘은 나 좀 옆에 붙어 있어도 돼요?","오늘 나 좀 옆에 붙어 있어도 돼?","웅, 그냥 같이 있는 게 좋아요. 조금만 더요!","웅, 그냥 같이 있는 게 좋아. 조금만 더!","우리만 쓰는 애칭 만들면 안 됨?","헐, 여기서 다 만남?","친구인 건 알겠는데… 나중에 얘기 좀 해요."]};
function relationshipVoiceStage(p){const v=initSim();if(vIsDating(p)){if(coupleIssueRecord(p).active)return 'conflict';return v.day-coupleRecord(p).since>=45?'steady':'early'}if(crushRecord(p).status==='cooling'||['cooling','ready'].includes(aftermathRecord(p)?.status))return 'distance';if(v.romance[p]==='ended'&&exRecord(p))return aftermathRecord(p)?.status==='friend'?'friend':'ex';if(['aware','hidden'].includes(crushRecord(p).status))return 'crush';if(closeFriend(p))return 'friend';if(!platonicOnly(p)&&flirtRecord(p).interest>=3)return 'flirt';return 'normal'}
function relationshipVoice(p,stage){const a=relationshipVoices[p],m=memoryFor(p).address;const casual=m.npcSpeech==='반말'||m.npcSpeech==='혼용'&&initSim().day%2===0;const i={normal:0,friend:2,crush:4,flirt:4,early:6,steady:8}[stage];if(i===undefined)return null;return a[i+(casual?1:0)]}
function voiceMoment(ev){const p=ev.person;if(!p||!relationshipVoices[p]||ev.jobEvent||ev.personalStory||ev.speechOffer||ev.triangle||ev.crushMeeting||ev.aftermath||ev.coupleIssue||ev.group||ev.flirtScene||ev.contactFollowup||ev.friendCrush||!initSim().running)return; if(ev.quietArrival || (relationshipTier(p)===0 && relationshipVoiceStage(p)==='normal'&&!hanaIntroMeeting(ev))){
  ev.quietArrival=true;
  delete ev.voiceMoment;
  return;
}
if(!ev.voiceMoment){const stage=relationshipVoiceStage(p);if(!['normal','friend','flirt','early','steady'].includes(stage))return;ev.voiceMoment=relationshipVoice(p,stage)}if(!ev.voiceMoment)return;
 chooseMeetingBeat(ev,p);
 let line=ev.voiceMoment;
 if(hasFriendTopicOpening(ev)){
  const topic=takeFriendTopic(ev,p),detail=friendStoryLine(topic,p,ev.day??initSim().day);
  if(closerAnswers[0].slice(0,2).includes(ev.selected)){
   // An earlier save may already have asked what the story was.
   if(closerAnswers[0].slice(2).includes(ev.response)){ev.response=detail;save()}
  }else line=detail;
 }
 add(p,meetingCall(p,ev,'npc',line),false,false,'기본')}
function nicknameReady(p){const v=initSim(),a=memoryFor(p).address;return vIsDating(p)&&v.day-coupleRecord(p).since>=10&&!coupleIssueRecord(p).active&&!a.nicknameOffered&&!a.npcToPlayer}
function nicknameGate(){const v=initSim();if(v.day>=365||[299,300].includes(v.day))return false;const p=lovers().find(nicknameReady);if(!p)return false;v.activeEvent={person:p,place:'home',day:v.day,description:'연인이 둘만의 호칭에 관한 이야기를 꺼냈다.',nicknameScene:{}};v.weekEnd=null;save();renderChoiceEvent();return true}
function renderNickname(ev){const p=ev.person,o=ev.nicknameScene,a=memoryFor(p).address;$('progress').textContent='둘만의 호칭';add(p,relationshipVoices[p][10]);if(o.answer){add(state.name,o.answer,true);add(p,o.reply);choiceButton('일정 계속하기',finishEvent);return}const input=document.createElement('input');input.placeholder='원하는 애칭 (선택)';$('suggest').append(input);for(const [label,k] of [['이름으로 불러 줘요.',1],['내가 정한 애칭으로 불러 줘요.',2],['지금 호칭이 좋아요.',3]])choiceButton(label,()=>{if(o.answer)return;const chosen=k===2?input.value.trim().slice(0,20):k===1?state.name:'';if(k===2&&!chosen)return;a.nicknameOffered=initSim().day;if(chosen)a.npcToPlayer=chosen;o.answer=label;o.reply=chosen?spokenCall(p,'npc',initSim().day,relationshipVoice(p,'early')):npcVoice[p][0];remember(p,'nickname:agreement',chosen||'기존 호칭 유지');save();renderChoiceEvent();renderSim()})}
function findCrushMeeting(place,person){const v=initSim();if(!person||!v.running)return null;const present=trianglePresent(place,v.day,v.slot);if(!present.includes(person))return null;for(const p of lovers())for(const q of people){if(q===p||![p,q].includes(person)||!present.includes(p)||!present.includes(q))continue;const r=crushRecord(q);if(!r.known[p]||vIsDating(q)||!['cooling','settled','hidden','aware'].includes(r.status)||coupleIssueRecord(p).active)continue;r.meetings=r.meetings||{};if(r.meetings[p]&&v.day-r.meetings[p]<14)continue;return {lover:p,friend:q,day:v.day}}return null}
function renderCrushMeeting(ev){const v=initSim(),o=ev.crushMeeting,p=o.lover,q=o.friend,r=crushRecord(q),a=relationshipVoices[p];$('progress').textContent='친구와 연인 사이';add('이야기','같은 장소에서 세 사람이 마주쳤다.');add(p,a[11]);add(q,friendCrushVoices[q][3]);if(o.answer){add(state.name,o.answer,true);add(p,o.reply);choiceButton('일정 계속하기',finishEvent);return}for(const [label,i] of [['함께 자연스럽게 대화를 나눈다',0],['연인에게 나중에 둘이 이야기하자고 한다',1],['친구와 먼저 인사를 나누고 헤어진다',2]])choiceButton(label,()=>{if(o.answer)return;o.answer=label;o.reply=a[12];r.meetings[p]=v.day;r.history.push({day:v.day,kind:'meeting',lover:p,choice:i});feel(p,{jealousy:i===2?2:-2,security:i===1?2:1});for(const who of [p,q])socialRecord(who).lastSeen=v.day;remember(p,'crushMeeting:'+v.day,q+'와 함께 마주침 / '+label);save();renderChoiceEvent();renderSim()})}

function speechOfferReady(p,job){if(!p||!speechOffers[p]||job)return false;const v=initSim(),a=memoryFor(p).address,t=['한시우','공재희','유지안'].includes(p)?2:3;return !!(v.running&&!['cooling','ready'].includes(aftermathRecord(p)?.status)&&socialRecord(p).contact&&relationshipTier(p)>=t&&!unresolvedOutingConflict(p)&&!a.offerDay&&!a.playerSpeech&&!a.npcSpeech)}
function addressFollowupReady(ev){if(!ev||!ev.person||ev.speechOffer||ev.nicknameScene||ev.contactFollowup||ev.jobEvent||ev.group||ev.groupPartners||ev.triangle||ev.crossIntro||ev.crossDeferred||ev.conflictStage||ev.aftermath||ev.coupleIssue||ev.crushMeeting||ev.breakup||ev.npcBreakup||ev.exTalk||ev.leftEncounter||Number(ev.delta||0)<0)return false;return speechOfferReady(ev.person,false)}
function friendlyAddress(p,side,mode){const profile=npcProfiles[p],age=Number(state.age),name=state.name.slice(-2),npcName=p.slice(1);if(side==='npc'){if(age>profile.age)return seniorAddress(profile.gender,state.gender);return mode==='반말'?vocative(name):name+' 씨'}if(profile.age>age)return seniorAddress(state.gender,profile.gender);return mode==='반말'?vocative(npcName):npcName+' 씨'}
function ageGapAddressVoice(p, term, mode){
 const casual=mode==='반말';
 const asTitle=term+(term==='형'?'이어도':'여도');
 const echoed=term+(term==='형'?'이요?':'요?');
 switch(p){
  case '강도윤':
   return {
    reaction:casual?'……내가 '+asTitle+' 되나? 우리 나이 차가 꽤 나잖아. 근데 나 지금 왜 웃고 있지?':'……제가 '+asTitle+' 돼요? 우리 나이 차가 꽤 나잖아요. 근데 저 지금 왜 웃고 있죠?',
    accept:casual?'응. 그렇게 불러 줘. 다음엔 나도 안 웃고 대답해 볼게.':'네. 그렇게 불러 줘요. 다음엔 저도 안 웃고 대답해 볼게요.',
    joke:casual?'아저씨? 아, 그건 조금 서운한데. 아까 걸로 하자. 그렇게 불러 주면 나 진짜 좋아할 것 같아.':'아저씨요? 아, 그건 조금 서운한데요. 아까 걸로 해요. 그렇게 불러 주면 저 진짜 좋아할 것 같아요.',
    withdraw:casual?'그럼 편한 대로 불러. 물어봐 줘서 고마워.':'그럼 편한 대로 불러요. 물어봐 줘서 고마워요.'
   };
  case '정태오':
   return {
    reaction:casual?term+'? ……잠깐. 우리 몇 살 차이인지 나도 모르게 다시 셌어. 솔직히 좀 쑥스럽다.':term+' 말입니까? ……제가 몇 살 위인지 새삼 세어 봤습니다. 솔직히 좀 쑥스럽습니다.',
    accept:casual?'그래. 그렇게 불러 줘. 이번엔 바로 대답할게.':'그렇게 불러 주시면 좋겠습니다. 이번에는 바로 대답하겠습니다.',
    joke:casual?'……그게 더 서먹한데. 아까 부르려던 대로 불러 줘. 나도 익숙해져 볼게.':'……그쪽이 더 서먹합니다. 아까 부르려던 대로 불러 주십시오. 저도 익숙해져 보겠습니다.',
    withdraw:casual?'알겠어. 지금처럼 불러 줘. 난 그것도 좋아.':'알겠습니다. 지금처럼 불러 주십시오. 저도 그게 편합니다.'
   };
  case '차유리':
   return {
    reaction:casual?term+'? 좋아. 근데 나이 차 난다고 내가 맨날 어른스러울 줄 알면 곤란해. 나 가끔 먼저 삐져.':echoed+' 좋아요. 근데 나이 차 난다고 제가 맨날 어른스러울 줄 알면 곤란해요. 저 가끔 먼저 삐져요.',
    accept:casual?'그럼 됐어. 한번 불러 봐. 내가 어떻게 대답하나 나도 궁금해.':'그럼 됐어요. 한번 불러 봐요. 제가 어떻게 대답하나 저도 궁금해요.',
    withdraw:casual?'그러자. 익숙한 호칭 듣는 것도 난 좋아.':'그러죠. 익숙한 호칭 듣는 것도 전 좋아요.'
   };
  case '오세린':
   return {
    reaction:casual?term+'? 그럼. 우리 몇 살 차이인지 새삼 셀 필요 있어? 네가 편하게 부를 수 있으면 나도 좋아.':echoed+' 그럼요. 우리 몇 살 차이인지 새삼 셀 필요 있나요? 편하게 부를 수 있으면 저도 좋아요.',
    accept:casual?'응. 다음에 만나면 멀리서도 불러 줘. 내가 먼저 돌아볼게.':'네. 다음에 만나면 멀리서도 불러 줘요. 제가 먼저 돌아볼게요.',
    withdraw:casual?'응, 그럼 원래대로 하자. 어떤 게 편한지 들려줘서 고마워.':'네, 그럼 원래대로 해요. 어떤 게 편한지 들려줘서 고마워요.'
   };
  case '백지한':
   return {
    reaction:casual?'내가 '+asTitle+' 되나? 아, 양심이 좀 찔리는데. 듣기 좋아서 더 그래.':'제가 '+asTitle+' 돼요? 아, 양심이 좀 찔리는데요. 듣기 좋아서 더 그래요.',
    accept:casual?'그럼 한 번만 더 불러 줘. 이번엔 내 얼굴 보고.':'그럼 한 번만 더 불러 줘요. 이번엔 제 얼굴 보고.',
    joke:casual?'그 사이에 갑자기 나이를 몇 살이나 더 먹은 거야? 난 아까 게 더 좋은데.':'그 사이에 갑자기 나이를 몇 살이나 더 먹은 거예요? 전 아까 게 더 좋은데요.',
    withdraw:casual?'그래. 편한 대로 불러 줘. 아까 잠깐 좋았던 건 내 몫이지.':'그래요. 편한 대로 불러 줘요. 아까 잠깐 좋았던 건 제 몫이죠.'
   };
  default:
   return {
    reaction:casual?'내가 '+asTitle+' 돼? 우리 나이 차 생각하면 좀 뜻밖이라서.':'제가 '+asTitle+' 돼요? 우리 나이 차 생각하면 좀 뜻밖이라서요.',
    accept:casual?'응, 그렇게 불러 줘.':'네, 그렇게 불러 줘요.',
    withdraw:casual?'그럼 지금처럼 부르자.':'그럼 지금처럼 불러요.'
   };
 }
}

// A chosen form of address can be personal even between people of the same age.
function proposedAddressTerm(p,call){
 const profile=npcProfiles[p];
 if(!profile)return '';
 const word=call.replace(/\s+/gu,'');
 const names=['',p,p.slice(1),p+'이',p.slice(1)+'이'];
 const matches=term=>names.some(name=>word===name+term);
 if(profile.gender==='남'&&matches('아저씨'))return '아저씨';
 if(!Number.isFinite(Number(state.age))||profile.age-Number(state.age)<10)return '';
 return (profile.gender==='남'?['오빠','형']:['언니','누나']).find(matches)||'';
}
const uncleAddressLines={
 '서이준':[
  ['……아저씨요? 방금 절 부른 거 맞죠? 제가 대답하길 기다리는 그 표정이 좀 웃겨서요.','그럼 둘이 있을 때 한번 불러 봐요. 이번엔 바로 돌아볼게요.'],
  ['……아저씨? 방금 나 부른 거 맞지? 내가 대답하길 기다리는 그 표정이 좀 웃겨서.','그럼 둘이 있을 때 한번 불러 봐. 이번엔 바로 돌아볼게.']
 ],
 '강도윤':[
  ['아, 그렇게 부르는 게 좋은 거예요? 전 놀리는 줄 알고 대답을 잘못할 뻔했어요.','그렇게 불러 줘요. 다음엔 왜 그렇게 불렀는지 아니까 저도 웃으면서 대답할 수 있겠어요.'],
  ['아, 그렇게 부르는 게 좋은 거야? 난 놀리는 줄 알고 대답을 잘못할 뻔했어.','그렇게 불러 줘. 다음엔 왜 그렇게 불렀는지 아니까 나도 웃으면서 대답할 수 있겠다.']
 ],
 '한시우':[
  ['아저씨요? 와, 이거 처음 듣는데. 지금 한 번만 더 불러 봐요. 방금은 제가 대답할 타이밍을 놓쳤어요.','네, 불렀어요? 히히. 이제 타이밍 알겠어요.'],
  ['아저씨? 와, 이거 처음 듣는데. 지금 한 번만 더 불러 봐. 방금은 내가 대답할 타이밍을 놓쳤어.','응, 불렀어? 히히. 이제 타이밍 알겠어.']
 ],
 '정태오':[
  ['그렇게 부르는 걸 좋아하십니까? ……길에서 누가 부르는 것과는 꽤 다르게 들리는군요.','알겠습니다. 제 쪽을 보고 부르시면 대답하겠습니다.'],
  ['그렇게 부르는 걸 좋아해? ……길에서 누가 부르는 거랑은 꽤 다르게 들리네.','알겠어. 내 쪽을 보고 부르면 대답할게.']
 ],
 '백지한':[
  ['지금 그 얼굴로 아저씨라고 부르겠다고요? ……네, 벌써 돌아봤잖아요.','그렇게 불러요. 다음엔 듣고도 모르는 척해 볼까. 한 번 더 듣고 싶어서요.'],
  ['지금 그 얼굴로 아저씨라고 부르겠다고? ……응, 벌써 돌아봤잖아.','그렇게 불러. 다음엔 듣고도 모르는 척해 볼까. 한 번 더 듣고 싶어서.']
 ]
};
function rememberEarlierPlayerCall(p,day){
 const a=memoryFor(p).address;
 for(const m of initSim().phone?.threads?.[p]||[]){
  if(m.reply&&m.callAtReply===undefined)m.callAtReply=agreedAddress(p,'player',phoneLineDay(m,'player'));
 }
 const history=a.playerCallChanges||(a.playerCallChanges=[]);
 if(!history.length||history.at(-1).day!==day)history.push({day,before:a.playerToNpc||''});
}
function revisitPlayerAddress(ev){
 const v=initSim(),p=ev.person,a=memoryFor(p).address;
 if(v.activeEvent!==ev||ev.answered||!a.offerDay)return;
 const ps=a.playerSpeech||'존댓말',ns=a.npcSpeech||'존댓말';
 v.activeEvent={day:v.day,place:ev.place,person:p,description:'잠깐, 부르고 싶은 호칭이 떠올랐다.',
  speechOffer:true,returnEncounter:ev,speechOpening:ns==='반말'?'응, 무슨 얘기야?':'네, 무슨 얘기예요?',
  speechDraft:{label:ps==='반말'?'내가 부르는 호칭 말이야.':'제가 부르는 호칭 말인데요.',ps,ns,
   reply:ns==='반말'?'어떻게 부르고 싶은데?':'어떻게 부르고 싶어요?',playerTerm:playerCall(p)}};
 save();renderChoiceEvent();
}
function renderSpeechOffer(ev){
 const v=initSim(),p=ev.person,address=memoryFor(p).address;
 $('progress').textContent='관계의 변화 · 말투와 호칭';
 add(p,ev.speechOpening||(ev.speechOpening=speechOfferLine(p)));
 const draft=ev.speechDraft,proposal=ev.addressProposal,revisit=ev.returnEncounter;
 function backToEncounter(){
  if(v.activeEvent!==ev||!revisit)return;
  v.activeEvent=revisit;save();renderChoiceEvent();renderSim();
 }
 function finishButton(){
  if(revisit)choiceButton('대화로 돌아가기',backToEncounter);
  else choiceButton('일정 계속하기',finishEvent);
 }
 function replyOption(kind,label,fn){
  choiceButton(label,()=>{
   if(v.activeEvent===ev&&!ev.answered&&ev.addressProposal===proposal)fn();
  });
  $('suggest').lastElementChild.dataset.addressReply=kind;
 }
 function propose(term,playerTerm,npcTerm){
  draft.playerTerm=playerTerm;draft.npcTerm=npcTerm;
  ev.addressProposal={term,playerTerm,npcTerm};
  if(proposal&&proposal.term!=='아저씨')ev.addressProposal.fromSenior={term:proposal.term,playerTerm:proposal.playerTerm};
  save();renderChoiceEvent();
 }
 if(ev.answered&&!proposal){
  add(state.name,ev.selected,true);add(p,ev.response);
  finishButton();return;
 }
 if(!draft){
  const options=[
   ['우리 둘 다 말 놓아요.','반말','반말',speechOffers[p][1]],
   ['저만 편하게 말해도 될까요?','반말','존댓말','네. 편하게 말해요.'],
   ['먼저 편하게 말해 줘요.','존댓말','반말','그래. 편하게 말할게.'],
   ['존댓말은 유지하고 호칭만 바꿔요.','존댓말','존댓말','좋아요. 어떻게 부르면 좋을까요?'],
   ['지금처럼 존댓말이 좋아요.','존댓말','존댓말','좋아요. 지금처럼 이야기해요.']
  ];
  for(const [label,ps,ns,reply] of options)choiceButton(label,()=>{
   if(ev.speechDraft||ev.answered)return;
   ev.speechDraft={label,ps,ns,reply};save();renderChoiceEvent();
  });
  return;
 }
 add(state.name,draft.label,true);add(p,draft.reply);
 function agree(playerTerm,npcTerm,selected,response){
  if(ev.answered||v.activeEvent!==ev)return;
  stampPhoneSpeech();
  if(!revisit){
   address.playerSpeech=draft.ps;address.npcSpeech=draft.ns;address.offerDay=v.day;
   if(npcTerm)address.npcToPlayer=npcTerm;
  }
  if(playerTerm&&playerTerm!==address.playerToNpc){
   rememberEarlierPlayerCall(p,v.day);address.playerToNpc=playerTerm;
  }
  ev.answered=true;ev.selected=selected;ev.response=response;
  if(!revisit){
   remember(p,'speech:agreement',draft.ps+' / '+draft.ns);
   writeJournal(p+' · 말투와 호칭 합의');
  }else if(playerTerm){
   writeJournal(p+' · 새로 부르기로 한 호칭 · '+playerTerm);
  }
  save();renderChoiceEvent();renderSim();
 }
 if(proposal){
  const {term,playerTerm,npcTerm}=proposal;
  const casual=draft.ps==='반말',as=playerTerm+(term==='형'?'이라고':'라고');
  const preference=term==='아저씨',before=proposal.fromSenior;
  if(before){
   add(state.name,before.playerTerm+(before.term==='형'?'이라고':'라고')+(casual?' 불러도 돼?':' 불러도 돼요?'),true);
   add(p,ageGapAddressVoice(p,before.term,draft.ns).reaction);
  }
  const preferenceLines=preference?uncleAddressLines[p][draft.ns==='반말'?1:0]:null;
  const voice=preference?{reaction:preferenceLines[0],accept:preferenceLines[1],
   withdraw:draft.ns==='반말'?'응. 그럼 편한 대로 불러.':'그럼 편한 대로 불러 줘요.'}:ageGapAddressVoice(p,term,draft.ns);
  add(state.name,preference?(before?'사실 ':'')+as+(casual?' 부르는 게 좋아. 그렇게 불러도 돼?':' 부르는 게 좋아요. 그렇게 불러도 돼요?'):as+(casual?' 불러도 돼?':' 불러도 돼요?'),true);
  add(p,voice.reaction);
  if(ev.answered){
   add(state.name,ev.selected,true);add(p,ev.response);
   finishButton();return;
  }
  const accept=preference?('그럼…… '+playerTerm+'.'):as+(casual?' 부르고 싶어.':' 부르고 싶어요.');
  const withdraw=casual?'그럼 지금처럼 부를게.':'그럼 지금처럼 부를게요.';
  replyOption('accept',accept,()=>agree(playerTerm,npcTerm,accept,voice.accept));
  if(voice.joke){
   const joke=casual?'아저씨도 이상하지 않아?':'아저씨도 이상하지 않아요?';
   replyOption('joke',joke,()=>agree(playerTerm,npcTerm,joke,voice.joke));
   replyOption('prefer',casual?'난 아저씨라고 부르는 게 좋아.':'전 아저씨라고 부르는 게 좋아요.',()=>propose('아저씨','아저씨',npcTerm));
  }
  replyOption('withdraw',withdraw,()=>agree(null,npcTerm,withdraw,voice.withdraw));
  replyOption('edit','다른 호칭 제안하기',()=>{delete ev.addressProposal;save();renderChoiceEvent()});
  return;
 }
 const keep=draft.label==='지금처럼 존댓말이 좋아요.';
 function input(label,value){
  const field=document.createElement('label'),el=document.createElement('input');
  field.className='address-field';field.textContent=label;
  el.placeholder=label;el.value=value;el.maxLength=20;
  field.append(el);$('suggest').append(field);return el;
 }
 const player=input('내가 상대를 부르는 호칭',draft.playerTerm??(keep?playerCall(p):friendlyAddress(p,'player',draft.ps)));
 const npc=revisit?null:input('상대가 나를 부르는 호칭',draft.npcTerm??(keep?addressPlayer(p):friendlyAddress(p,'npc',draft.ns)));
 if(!keep)choiceButton('이 호칭으로 부르기로 한다',()=>{
  if(ev.answered||ev.addressProposal||v.activeEvent!==ev)return;
  const playerTerm=player.value.trim()||playerCall(p),npcTerm=npc?.value.trim()||addressPlayer(p);
  const term=proposedAddressTerm(p,playerTerm);
  if(term&&playerTerm!==playerCall(p)){
   propose(term,playerTerm,npcTerm);return;
  }
  if(revisit&&playerTerm===playerCall(p)){backToEncounter();return}
  if(revisit)agree(playerTerm,null,playerTerm+(draft.ps==='반말'?'! 이렇게 부를게.':'! 이렇게 부를게요.'),draft.ns==='반말'?'그래. 그렇게 불러.':'좋아요. 그렇게 불러 줘요.');
  else agree(playerTerm,npcTerm,draft.label+' 호칭은 '+playerTerm+' / '+npcTerm+'로 해요.',draft.reply);
 });
 if(!keep&&npcProfiles[p].gender==='남'&&playerCall(p)!=='아저씨'){
  const label=draft.ps==='반말'?'난 아저씨라고 부르는 게 좋아.':'전 아저씨라고 부르는 게 좋아요.';
  replyOption('prefer',label,()=>propose('아저씨','아저씨',npc?.value.trim()||addressPlayer(p)));
 }
 choiceButton('기존 호칭 유지하기',()=>revisit?backToEncounter():agree(null,null,draft.label,draft.reply));
 if(!revisit)choiceButton('다시 생각해 보기',()=>{delete ev.speechDraft;save();renderChoiceEvent()});
}

const speechPairs={'서이준':{"…요즘 우리 얘기할 시간이 별로 없잖아요. 다른 사람이랑 나갔다는 얘기 듣고 나도 좀 같이 걷고 싶었어요.": "…요즘 나랑은 얘기할 시간이 별로 없잖아. 다른 사람이랑 나갔다는 얘기 들으니까, 나도 같이 좀 걷고 싶었어.", "요즘 얼굴 보기 힘드네요. 보고 싶다고 연락하려다가, 바쁜데 괜히 귀찮게 하나 싶어서 말았어요.": "요즘 얼굴 보기 힘드네. 보고 싶다고 연락하려다가, 바쁜데 괜히 귀찮게 하나 싶어서 말았어.", "…그럼 다음엔 먼저 물어볼게요. 괜히 혼자 짐작했네요.": "…그럼 다음엔 먼저 물어볼게. 괜히 혼자 짐작했네.", "…그날은 그냥 보고 싶다고 하면 됐는데 괜히 쏘아붙였어요. 미안해요.": "…그날은 내가 보고 싶다는 말만 하면 됐는데, 괜히 말부터 날이 섰어. 미안해.", "…그래요. 얘기하고 싶어지면 연락해 줘요.": "…그래. 얘기하고 싶어지면 연락해 줘.",'…우리 굳이 계속 존댓말 해야 하나요? 불편하면 그대로 쓰고요.':'…우리 이제 좀 편하게 말할까?','조용해서 좋네요. 둘이 걸어도 생각보다 안 시끄럽고.':'조용해서 좋네. 둘이 걸어도 생각보다 안 시끄럽고.'},'강도윤':{'이렇게 앉아서 이야기하니까 좋네요.':'이렇게 앉아서 이야기하니까 좋네.'},'한시우':{'와, 같이 있으니까 시간 진짜 빨리 가네요.':'와, 같이 있으니까 시간 진짜 빨리 간다!'},'백지한':{'오늘은 손 잡고 걸어도 되죠?':'오늘은 손 잡고 걸어도 되지?','좋다. 이제 좀 데이트하는 기분이네요.':'좋다. 이제 좀 데이트하는 기분이네.'},'임하나':{
 "……저, 오늘은 제가 먼저 잡고 싶어요.":"……오늘은 내가 먼저 잡고 싶어.",
 "저… 제가 먹고 싶은 것도 골라도 될까요?":"있잖아, 나 먹고 싶은 것도 골라도 돼?",
 "저, 조금만 더 얘기하고 자도 돼요? 오늘은 시간이 너무 빨리 가요.":"조금만 더 얘기하고 자면 안 돼? 오늘은 시간이 너무 빨리 가.",
 "저… 오늘은 제가 먼저 입 맞춰도 돼요?":"……오늘은 내가 먼저 입 맞춰도 돼?",
 "……저, 다음에는 제가 먼저 만나자고 해도 돼요?":"……다음에는 내가 먼저 만나자고 해도 돼?",
 "제 것 사면서 하나 더 샀어요. ……사실 드리고 싶어서요.":"내 거 사면서 하나 더 샀어. ……사실 주고 싶어서.",
 "……저 이번에 시간을 비워 뒀어요. 혹시 같이 아쿠아리움 가실래요?":"……나 이번에 시간 비워 뒀어. 혹시 같이 아쿠아리움 갈래?",
 "정말요? 저 벌써 뭐 입을지 고민돼요.":"정말? 나 벌써 뭐 입을지 고민돼.",
 "정말요? ……그럼 저 그날까지 기분 좋을 것 같아요.":"정말? ……그럼 나 그날까지 기분 좋을 것 같아.",
 "친구요? 저 그런 말 듣는 거 오랜만이에요. 좋아요.":"친구? 나 그런 말 듣는 거 오랜만이야. 좋아.",
 "다음에 알려 드릴게요.":"다음에 알려 줄게.",
 "골목 안에 있는 작은 서점인데요. 다음에 보여 드릴게요.":"골목 안에 있는 작은 서점이야. 다음에 보여 줄게.",
 "저… 가 보고 싶은 서점이 생겼어요. 다음에는 제가 외출 장소를 골라도 될까요?":"있잖아, 가 보고 싶은 서점이 생겼어. 다음엔 내가 어디 갈지 골라도 돼?",
 "저 만나려고 연차까지 내신 거예요? ...... 저도 그날이 정말 기다려져요.":"나 만나려고 연차까지 낸 거야? ……나도 그날이 정말 기다려져.",
 "……저, 손 잡아 봐도 돼요? 제가 먼저요.":"……손 잡아 봐도 돼? 내가 먼저.",
 "아, 간식은 그냥 받아 주세요. 드리고 싶었어요.":"아, 간식은 그냥 받아 줘. 주고 싶었어.",
 "저 오늘은 집에 가서도 계속 웃을 것 같아요.":"나 오늘은 집에 가서도 계속 웃을 것 같아.",
 "이날은 저 아무 일정도 없어요. 혹시…":"그날은 나 아무 일정도 없어. 혹시…",
 "……저 지금 웃고 있죠?":"……나 지금 웃고 있지?",
 "……저 오늘은 달콤한 빵 먹고 싶어요.":"……나 오늘은 달콤한 빵 먹고 싶어.",
 "잠깐만요. 제가 또 괜찮다고 할 때까지 기다리는 거예요? 저 오늘은 그렇게 말하기 싫어요.":"잠깐만. 내가 또 괜찮다고 할 때까지 기다리는 거야? 나 오늘은 그렇게 말하기 싫어.",
 "저… 오늘은 저 혼자 있고 싶어요. 답장 나중에 해도 될까요?":"……오늘은 나 혼자 있고 싶어. 답장 나중에 해도 될까?",
 "저도 잘 들어 드릴 수는 있어요. 천천히 말해 주세요.":"나 얘기 잘 들어 줄 수 있어. 천천히 말해 줘.",
 "저… 별건 없지만, 편하게 쉬어 가셨으면 좋겠어요.":"……별건 없지만, 편하게 쉬었다 가면 좋겠어.",
 "네! 제가 좋아하는 것부터 보여 드릴게요.":"응! 내가 좋아하는 것부터 보여 줄게.",
 "네. 저 오늘 용기 내길 잘했어요.":"응. 나 오늘 용기 내길 잘했어.",
 "저 여기 있을게요.":"나 여기 있을게.",
 "조금만 더요. 저 아직 괜찮아요.":"조금만 더. 나 아직 괜찮아.",
 "잠깐만요. 저 아직 안 끝났어요.":"잠깐만. 나 아직 안 끝났어.",
 "네! ……저 오늘 사진은 오래 볼 것 같아요.":"응! ……나 오늘 찍은 사진은 오래 볼 것 같아.",
 "……헤헤. 저 사실 아까부터 생각했어요.":"……헤헤. 나 사실 아까부터 생각했어.",
 "……데이트. 그렇게 생각해 주시는 거예요? 저 이제 괜찮아요.":"……데이트. 그렇게 생각한 거야? 나 이제 괜찮아.",
 "네. 제가 말씀드리고 올게요.":"응. 내가 직원분한테 말씀드리고 올게.",
 "저 어제부터 뭘 입을지 고민했어요.":"나 어제부터 뭘 입을지 고민했어.",
 "저 이렇게 여유롭게 구경하는 거 정말 오랜만이에요.":"나 이렇게 여유롭게 구경하는 거 정말 오랜만이야.",
 "저… 뺨에 꽃잎이 붙었어요. 떼어 드려도 될까요?":"있잖아, 뺨에 꽃잎 붙었어. 떼어 줘도 돼?",
 "……고마워요. 저 지금 얼굴 빨개졌죠?":"……고마워. 나 지금 얼굴 빨개졌지?",
 "저 어릴 때 이 아이스크림 좋아했는데… 오늘은 먹어 볼래요.":"나 어릴 때 이 아이스크림 좋아했는데… 오늘은 먹어 볼래.",
 "저 이런 데서 직접 물건 골라 본 적이 별로 없어요.":"나 이런 데서 직접 물건 골라 본 적이 별로 없어.",
 "……저 이런 사소한 일도 하고 싶었나 봐요.":"……나 이런 사소한 일도 하고 싶었나 봐.",
 "저 어릴 때 동생 것만 사다 줬는데… 오늘은 제가 먹고 싶은 걸 고를래요.":"나 어릴 때 동생 것만 사다 줬는데… 오늘은 내가 먹고 싶은 걸 고를래.",
 "저… 이거 지나가다 맛있어 보여서 샀어요. 하나는 드리고 싶었어요.":"있잖아, 이거 지나가다 맛있어 보여서 샀어. 하나는 주고 싶었어.",
 "……저, 안아 달라고 해도 될까요?":"……나 좀 안아 달라고 해도 돼?",
 "말씀드리고 싶어서 연락했어요.":"꼭 말해 주고 싶어서 연락했어.",
 "와 주셨네요. 저 서점에 먼저 들러도 돼요?":"와 줬네. 나 서점에 먼저 들러도 돼?",
 "……아, 제가 먼저 말했는데 왜 제가 더 부끄럽죠?":"……아, 내가 먼저 말했는데 왜 내가 더 부끄럽지?",
 "저 이런 밤을 보내도 되는 거였네요. 정말 좋았어요.":"나 이런 밤을 보내도 되는 거였네. 정말 좋았어."
},'차유리':{'저기까지 손 잡고 걸을래요? 그냥 그러고 싶어서.':'저기까지 손 잡고 걸을래? 그냥 그러고 싶어서.'},'오세린':{'함께 걸어도 될까요? 조금 더 가까이요.':'같이 걸어도 될까? 조금 더 가까이.'},'정태오':{'길이 위험해서가 아닙니다만… 손을 잡아도 되겠습니까?':'길이 위험해서가 아니라… 손을 잡아도 될까?'},'유지안':{'같이 뛰어갈래요? 손 잡고!':'같이 뛰어갈래? 손 잡고!'},'공재희':{'님 손 줘 봐요. 그냥 잡고 싶음ㅋㅋ':'손 줘 봐ㅋㅋ 그냥 잡고 싶음'}};
const outingPlayerVariants={'한시우':{'승부 말고 나랑 놀러 온 거 아니었어요?':{'장난기':['아니, 저 보러 온 거 아니었어요? 승부욕 뭐예요ㅋㅋ','아니, 나 보러 온 거 아니었어? 승부욕 뭐야ㅋㅋ'],'다정함':['저는 같이 노는 것만으로도 좋아요.','난 같이 노는 것만으로도 좋아.'],'솔직함':['저한테도 좀 집중해 줘요.','나한테도 좀 집중해 줘.'],'신중함':['혹시 다른 게임도 같이 해 볼래요?','우리 다른 게임도 같이 해 볼까?']}}};
function outingPlayerLine(p,line){const s=speechProfile(p),t=playerVoiceTraits()[0],a=outingPlayerVariants[p]?.[line]?.[t];return a?a[s.player==='반말'?1:0]:line}

function speechProfile(p){const a=memoryFor(p).address;return {player:a.playerSpeech||'존댓말',npc:a.npcSpeech||'존댓말',name:playerCall(p)}}
function playerVoiceTraits(){const t=state.identity.traits;return ['솔직함','신중함','다정함','장난기'].sort((a,b)=>(t[b]||0)-(t[a]||0))}
const handVoice={'장난기':['어라, 손 잡는 거예요? 좋아요!','어라, 손 잡는 거야? 좋아!'],'솔직함':['좋아요. 저도 잡고 싶었어요.','좋아. 나도 잡고 싶었어.'],'다정함':['그럼요. 같이 손 잡고 가요.','그럼. 같이 손 잡고 가자.'],'신중함':['…네. 괜찮아요.','…응. 괜찮아.']};
const combinedHandVoice={'장난기|솔직함':['뭐야, 저랑 손 잡고 싶었어요? 좋아요!','뭐야, 나랑 손 잡고 싶었어? 좋아!'],'다정함|장난기':['손 시려워요? 제가 잡아 줄게요. ㅎㅎ','손 시려워? 내가 잡아 줄게. ㅎㅎ'],'신중함|장난기':['어라? 오늘 좀 적극적이네요. 좋아요.','어라? 오늘 좀 적극적인데? 좋아.'],'다정함|솔직함':['좋아요. 저도 계속 잡고 싶었어요.','좋아. 나도 계속 잡고 싶었어.'],'다정함|신중함':['…네. 천천히 같이 걸어요.','…응. 천천히 같이 걷자.'],'솔직함|신중함':['손 잡는 건 좋아요. 괜찮아요.','손 잡는 건 좋아. 괜찮아.']};
function playerVoiceProfile(){const t=state.identity.traits,rank=playerVoiceTraits(),a=rank[0],b=rank[1],x=Number(t[a])||0,y=Number(t[b])||0;return {primary:a,secondary:b,blend:y>0&&y>=x*0.6,key:[a,b].sort().join('|')}}
const contextualVoice={"말해 줘서 고마워요. 도윤 씨를 보는 제 마음은 달라지지 않아요.":[["말해 줘서 고마워요. 제게 도윤 씨는 여전히 같은 사람이에요.","말해 줘서 고마워. 내게 넌 여전히 같은 사람이야."],["이야기하기 어려웠을 텐데 고마워요. 제 마음은 그대로예요.","이야기하기 어려웠을 텐데 고마워. 내 마음은 그대로야."],["말해 줘서 고마워요. 저는 지금도 도윤 씨를 똑같이 생각해요.","말해 줘서 고마워. 난 지금도 널 똑같이 생각해."],["말해 줘서 고마워요. 그런 이야기로 제 마음이 바뀌지는 않아요.","말해 줘서 고마워. 그런 이야기로 내 마음이 바뀌지는 않아."]],"아무것도 안 해 줘도 같이 있고 싶어요.":[["아무것도 안 해 줘도 같이 있고 싶어요.","아무것도 안 해 줘도 같이 있고 싶어."],["그냥 옆에 있어 줘도 좋아요.","그냥 옆에 있어 줘도 좋아."],["뭘 해 주지 않아도 함께 있는 시간이 좋아요.","뭘 해 주지 않아도 함께 있는 시간이 좋아."],["오늘은 아무것도 안 해도 돼요. 그냥 같이 있어요.","오늘은 아무것도 안 해도 돼. 그냥 같이 있자."]],"조금 더 놀까요?":[["좋아요. 조금 더 놀아요.","좋아. 조금 더 놀자."],["시간 괜찮으면 조금 더 놀까요?","시간 괜찮으면 조금 더 놀까?"],["저도 더 같이 놀고 싶어요.","나도 더 같이 놀고 싶어."],["연장전 어때요? 조금 더 놀죠!","연장전 어때? 조금 더 놀자!"]],"오늘만요?":[["오늘만 예쁜 거예요?","오늘만 예쁜 거야?"],["오늘만 그렇게 생각하셨어요?","오늘만 그렇게 생각했어?"],["오늘만요? 조금 아쉬운데요.","오늘만? 조금 아쉬운데."],["어라, 오늘만요? ㅎㅎ","어라, 오늘만? ㅎㅎ"]],"오늘은 조금 쉬어도 좋겠어요.":[["오늘은 좀 쉬어요.","오늘은 좀 쉬어."],["오늘만큼은 조금 쉬어도 괜찮지 않을까요?","오늘만큼은 조금 쉬어도 괜찮지 않을까?"],["오늘은 마음도 몸도 조금 쉬게 해 줘요.","오늘은 마음도 몸도 조금 쉬게 해 줘."],["오늘은 잠깐 쉬어 가요. 괜찮아요.","오늘은 잠깐 쉬어 가자. 괜찮아."]]};
function contextualChoice(p,label,context){const a=contextualVoice[label];if(!a)return label;const v=playerVoiceProfile(),s=speechProfile(p),rank=['솔직함','신중함','다정함','장난기'];let t=v.primary;if(context==='serious'&&t==='장난기'&&v.blend)t=v.secondary;const casual=s.player==='반말'||(s.player==='혼용'&&initSim().day%2===0);return chatSpacing(a[rank.indexOf(t)][casual?1:0])}

function playerHandLine(p){const s=speechProfile(p),v=playerVoiceProfile(),lines=v.blend&&combinedHandVoice[v.key]||handVoice[v.primary],casual=s.player==='반말'||(s.player==='혼용'&&initSim().day%2===0);return lines[casual?1:0]}
function speechControls(p,root){const a=memoryFor(p).address,wrap=document.createElement('details'),title=document.createElement('summary');title.textContent='말투와 호칭 · 관계 기록';wrap.append(title);const body=document.createElement('p');body.textContent='내 말투: '+(a.playerSpeech||'존댓말')+' / 상대 말투: '+(a.npcSpeech||'존댓말')+' · 내가 부르는 호칭: '+playerCall(p)+' / 상대가 부르는 호칭: '+addressPlayer(p);wrap.append(body);const hint=document.createElement('p');hint.textContent='호칭과 말투는 직접 만나 서로 이야기를 나누며 정합니다.';wrap.append(hint);
 const r=state.sim?.couple?.[p];
 if(vIsDating(p)&&Number.isInteger(r?.since)){
  const past=r.chapters||[],i=past.length,note=document.createElement('p');
  if(i<coupleChapterDays.length){
   const next=Math.max(r.since+coupleChapterDays[i],i?past[i-1].day+14:0);
   note.textContent='둘만의 저녁 '+i+'/3 · '+(state.sim.day<next?'다음 이야기는 D+'+(next-r.since)+'부터. ':'다음 이야기를 만날 수 있어요. ')+'저녁 홈데이트, 집에서 함께 쉬기, 둘이 떠난 여행의 숙소에서 만나요.';
  }else note.textContent='둘만의 저녁 3/3 · '+(r.chapterLetterDay?'오래 만난 연인의 문자가 도착했어요.':'D+200이 지나면 연인이 그날 이야기를 문자로 다시 꺼내요.');
  wrap.append(note);
 }
 root.append(wrap)}

function renderFlirtOuting(ev,p){if(!romanceBonusAllowed(ev,'flirtOuting'))return false;const v=initSim(),f=flirtRecord(p),venue=ev.venue||dateLines[p][0];let id=ev.flirtOuting?.id; if(!id){if(!f.seen.outing1&&flirtOutingOne[p]?.[0]===venue&&f.interest>=3)id='outing1';else if(!f.seen.outing2&&flirtOutingTwo[p]?.[0]===venue&&f.interest>=6)id='outing2';else if(!f.seen.outing3&&flirtOutingThree[p]?.[0]===venue&&f.interest>=6)id='outing3';}let a=id==='outing3'?flirtOutingThree[p]:id==='outing2'?flirtOutingTwo[p]:id==='outing1'?flirtOutingOne[p]:null;
 if(id==='outing2'&&p==='한시우'&&Object.hasOwn(ev,'dateSpark')){
  a=['영화관','극장을 나서자 시우가 나보다 반 발짝 앞서 걷다가 돌아섰다. 슬쩍 손바닥을 펴 보였다.','집 가는 길엔 화면 볼 일도 없잖아요. 손잡고 갈래요?','손을 잡는다.','히히. 이러면 나 일부러 좀 천천히 걷는데.'];
 }
 if(!a)return false;if(!ev.flirtOuting){if(v.day>=300||f.seen[id])return false;ev.flirtOuting={id};save()}const o=ev.flirtOuting;if(id==='outing2'&&!o.playerLine){o.playerLine=playerHandLine(p);save()}add('이야기',a[1]);add(p,o.npcLine||(o.npcLine=a[2]));if(o.answer){add(state.name,o.answer.label,true);add(p,o.answer.reply);return false}for(const [label,reply,warm] of [[o.playerLine||outingPlayerLine(p,a[3]),a[4],true],[a[5]||'오늘 함께 와서 즐거웠어요.',a[6]||npcVoice[p][0],false]])choiceButton(label,()=>{if(o.answer)return;o.answer={label,reply};f.seen[id]=v.day;f.history.push({day:v.day,id,accepted:warm});if(warm){f.interest+=3;socialRecord(p).interest++;if(id==='outing2')f.touches.push({day:v.day,type:'손잡기',scene:id});remember(p,'flirt:'+id,a[4])}save();renderChoiceEvent();renderSim()});return true}

const mainDateReplies={"서이준":["…예매할 때부터 조금 기대했어요.","그럼 상영 시간까지만 여유 있게 움직여요.","혼자 볼 때랑은 느낌이 다르네요.","다음 영화는 직접 골라 줘요.","…오늘 같이 봐서 좋았어요."],"강도윤":["오늘은 어떤 디저트보다 이 약속이 기다려졌어요.","하하, 맛있는 것부터 찾아볼까요?","다음에는 이 맛을 가게에서도 연구해 봐야겠네요.","다음 휴일도 비워 두고 싶네요.","덕분에 손님으로 보내는 하루가 즐거웠어요."],"한시우":["저도 약속 잡힌 날부터 기다렸어요!","좋아요! 둘러보다가 하고 싶은 거 있으면 말해 줘요.","아까 웃긴 거 생각나서 또 웃음이 나는데요.","진짜요? 그럼 다음엔 제가 먼저 어디 갈지 찾아볼게요.","오늘 엄청 좋았어요. 헤어지려니까 좀 아쉽네."],"백지한":["전시도 기대했지만 같이 보는 사람이 더 중요하죠.","천천히 보죠. 마음에 드는 작품 있으면 알려 줘요.","같은 작품을 보고도 다른 얘기를 할 수 있어서 좋네요.","다음엔 제가 또 데이트 코스 짜도 돼요?","오늘 표정이 꽤 오래 기억날 것 같네요."],"임하나":["저 어제부터 뭘 입을지 고민했어요.","네! 수조부터 천천히 구경해요.","저 이렇게 여유롭게 구경하는 거 정말 오랜만이에요.","다음에도 휴일을 비워 둘게요. 꼭요.","오늘 사진 보면서 한동안 기분 좋을 것 같아요."],"차유리":["오, 같이 보면 감상이 좀 달라지겠다.","좋아요. 각자 끌리는 작품부터 봐요.","오늘 본 색 조합은 작업할 때 써 보고 싶네요.","다음엔 제가 재밌는 전시 찾아 볼게요.","오늘 눈이 즐거웠어요. 같이 와서 더 좋았고."],"오세린":["오늘은 물고기들처럼 느긋하게 지내고 싶네요.","으음, 발길 닿는 대로 가 볼까요?","수조 앞에 오래 서 있으니 마음이 차분해지네요.","다음에도 이런 조용한 시간을 함께 보내요.","오늘은 집에 가서도 마음이 편안할 것 같아요."],"정태오":["오늘은 근무 일정도 미리 정리해 두었습니다.","좋습니다. 무리하지 않는 일정으로 움직이시죠.","이런 풍경은 혼자 볼 때보다 오래 기억에 남겠군요.","다음 휴무가 확정되면 연락드리겠습니다.","함께해 주셔서 감사합니다. 좋은 하루였습니다."],"유지안":["와! 오늘 놀이기구 몇 개 탈 수 있을까?","좋아요! 일단 지도부터 보자!","아까 그거 탈 때 표정 진짜 웃겼는데!","다음엔 못 탄 놀이기구 싹 타요!","오늘 완전 잘 놀았다! 집 가면 바로 뻗겠어요."],"공재희":["헐 드디어 오락실! 오늘 큰 인형 하나 뽑자 ㅋㅋ","웅! 일단 기계 구경부터 ㄱㄱ","아까 그거 진짜 아깝지 않았어요? ㅡㅡ","웅! 담엔 내가 더 큰 거 뽑아 줄게요.","아 오늘 개재밌었음 ㅋㅋ 집 가기 아깝다."]};
const springDateScenes={"서이준":["이준이 바람에 날린 꽃잎을 바라보다 걸음을 멈췄다.","…이 길에 이렇게 꽃이 많았나요. 평소엔 그냥 지나쳤는데.","조금 더 걸어요. 같이 보고 싶어요.","…네. 오늘은 지름길로 가지 말죠.","그럼 역까지 곧장 가요. 꽃은 충분히 봤으니까."],"강도윤":["도윤이 벚나무 아래에서 휴대전화를 꺼냈다.","가게에만 있었더니 꽃이 이렇게 핀 줄도 몰랐네요. 사진 한 장 찍어 드릴까요?","우리 둘이 같이 찍어요.","하하. 그럼 저도 오늘의 기념사진에 들어가는 거네요.","그럼 모카 산책할 때 한 장 찍어 둬야겠어요."],"한시우":["시우가 바람에 흩날리는 꽃잎을 향해 손을 뻗었다.","와, 이거 잡으면 소원 이루어진다던데. 진짜인가?","우리 둘 다 하나씩 잡아 봐요.","잡았다! 소원은 비밀이에요. 말하면 안 이루어질 것 같아서.","아, 맞다. 그냥 보는 것도 예쁘네요."],"백지한":["지한이 당신의 머리 위에 내려앉은 꽃잎을 발견했다.","꽃잎 붙었는데, 떼어 줘도 돼요?","네. 부탁해요.","가만히 있어 봐요. …됐어요. 하나 더 붙었으면 좋겠는데.","아, 오른쪽 머리 위예요. 거기."],"임하나":["하나가 벚꽃이 만개한 길 앞에서 발걸음을 늦췄다.","학교 다닐 때도 꽃구경은 제대로 못 했거든요. 오늘은 조금 더 봐도 될까요?","오늘은 시간 신경 쓰지 말고 구경해요.","네…… 저 오늘 정말 여유로운 사람이 된 것 같아요.","네. 그래도 오늘 잠깐 볼 수 있어서 좋았어요."],"차유리":["유리가 꽃잎이 쌓인 보도블록을 내려다보았다.","분홍색이랑 회색이 이렇게 잘 어울리네. 사진 찍고 가도 돼요?","나도 마음에 드는 색을 찾아 볼래요.","오, 서로 찍은 사진 비교해 봐요. 재밌겠다.","좋아요. 이 구도만 찍고 갈게요."],"오세린":["세린이 꽃이 핀 가지 아래에서 고개를 들었다.","어머, 벌써 이렇게 피었네요. 병원 앞 나무는 아직 봉오리던데.","여기 잠깐 앉아서 봄을 즐겨요.","으음, 아무것도 하지 않는 시간도 참 좋네요.","네. 다음에 병원 앞 나무가 피면 알려 드릴게요."],"정태오":["태오가 꽃구경 나온 사람들을 피해 길 가장자리로 걸었다.","이쪽 길은 비교적 한산합니다. 조금 돌아가도 괜찮으시겠습니까?","네. 오늘은 천천히 돌아가요.","알겠습니다. 저도 오늘은 서두를 이유가 없군요.","그럼 가까운 길로 안내하겠습니다."],"유지안":["지안이 꽃잎이 날리는 모습을 보고 두 팔을 펼쳤다.","와, 여기 뮤직비디오 찍으면 완전 예쁘겠다! 영상 하나 찍어 볼래요?","좋아요. 내가 찍어 줄게요.","진짜요? 그럼 봄 한정 안무 갑니다!","앗, 그럼 눈으로만 담아야겠다!"],"공재희":["재희가 벚꽃 아래에서 휴대전화 카메라를 켰다.","헐 색감 미쳤다. 여기서 사진 찍으면 내 피드랑 딱 맞겠는데?","찍어 줄게요. 나중에 같이도 찍어요.","웅! 나 예쁘게 찍어 줘요. 같이 찍은 건 나만 갖고 있을래 ㅋㅋ","ㅇㅋ 그럼 셀카 하나만 찍고 가요."]};
const springRainScenes={"서이준":["이준이 우산을 기울이다 당신의 뺨을 보고 멈칫했다.","…꽃잎 붙었어요. 제가 떼어도 돼요?","이준의 손끝이 뺨에 잠깐 닿았다. 빗물에 젖은 꽃잎을 떼어 낸 그는 시선을 피했다.","…됐어요. 차갑지는 않았죠?","이준의 관자놀이에 붙은 꽃잎을 떼어 주자 그가 눈을 크게 떴다.","아, 잠깐… 그렇게 갑자기 가까이 오면 놀라잖아요.","…왼쪽 뺨이에요. 거울 보면 보일 거예요."],"강도윤":["도윤이 우산 아래로 들어온 꽃잎을 보고 웃었다.","어깨에 봄이 붙었네요. 떼어 드릴까요?","도윤이 젖은 꽃잎을 집어 손바닥에 올렸다.","하하, 커피잔에 띄워도 예쁘겠네요.","도윤의 머리카락에서 꽃잎을 떼어 내자 그가 고개를 살짝 숙였다.","이런, 오늘은 제가 보살핌을 받네요.","그럼 손수건 드릴게요. 옷도 젖었네요."],"한시우":["시우가 우산 끝에서 떨어지는 빗방울을 피해 몸을 움츠렸다.","어? 볼에 꽃잎 붙었는데요. 떼 줄까요?","시우가 손끝으로 꽃잎을 집다가 눈이 마주치자 웃음을 터뜨렸다.","와, 왜 이렇게 가까우니까 웃기지. 아니, 싫다는 건 아니고요!","시우의 이마에 붙은 꽃잎을 떼자 그가 눈을 질끈 감았다.","앗, 깜짝이야! 나 지금 표정 이상했죠?","오케이. 여기, 볼 옆에 붙었어요."],"백지한":["지한이 우산을 당신 쪽으로 기울였다. 그의 어깨에도 꽃잎이 붙어 있었다.","뺨에 꽃잎이 붙었네요. 잠깐 만져도 돼요?","지한의 엄지가 뺨을 살며시 스쳤다. 빗물의 서늘함 사이로 손끝의 온기가 남았다.","이렇게 가까이 볼 핑계가 생겼네요.","지한의 어깨에서 꽃잎을 떼어 주자 그가 몸을 조금 숙여 눈을 맞췄다.","제 얼굴에도 붙었으면 좋았을 텐데요.","알겠어요. 오른쪽 뺨에 붙어 있어요."],"임하나":["하나가 우산 손잡이를 꼭 쥔 채 당신의 얼굴을 살폈다.","저… 뺨에 꽃잎이 붙었어요. 떼어 드려도 될까요?","하나의 손가락이 조심스럽게 뺨에 닿았다. 꽃잎을 떼고도 잠시 손을 내리지 못했다.","……아, 다 됐어요. 손이 좀 떨렸죠?","하나의 앞머리에서 꽃잎을 떼자 그녀가 입술을 꾹 다물었다.","……고마워요. 저 지금 얼굴 빨개졌죠?","네! 여기 손수건 쓰세요."],"차유리":["유리가 빗물에 젖은 분홍 꽃잎을 손바닥에 받아 보았다.","오, 어깨에도 붙었네요. 떼어 줄까요?","유리가 옷감에 붙은 꽃잎을 조심스럽게 들어 올렸다.","젖으니까 색이 더 진하네. 예쁘다.","유리의 어깨에 붙은 꽃잎을 떼자 그녀가 고개를 돌려 손바닥을 보았다.","오, 나한테도 붙었어요? 사진 찍어 둘 걸.","그럼 어깨 한번 털어 봐요."],"오세린":["세린이 우산 아래에서 젖은 꽃잎을 발견하고 걸음을 늦췄다.","어머, 뺨에 꽃잎이 붙었네요. 제가 떼어 드릴까요?","세린이 손끝으로 꽃잎을 들어 올렸다. 닿았던 자리에 은은한 온기가 남았다.","아아, 다행히 쉽게 떨어졌네요.","세린의 머리카락에 붙은 꽃잎을 떼자 그녀가 가만히 고개를 숙였다.","어머, 고마워요. 저도 몰랐네요.","네. 손수건으로 살짝 닦으면 되겠어요."],"정태오":["태오가 우산을 고쳐 들고 당신의 어깨를 살폈다.","옷에 꽃잎이 붙었습니다. 떼어 드려도 괜찮겠습니까?","태오가 옷감에 손이 닿지 않도록 꽃잎 끝만 집어 떼었다.","됐습니다. 빗물이 더 들지 않게 이쪽으로 오시지요.","태오의 어깨에 붙은 꽃잎을 떼자 그가 반사적으로 자세를 바로잡았다.","아… 감사합니다. 미처 확인하지 못했습니다.","알겠습니다. 왼쪽 어깨입니다."],"유지안":["지안이 우산 위로 떨어지는 꽃잎을 보며 흥얼거렸다.","헐, 볼에 꽃잎! 완전 봄 화보인데? 떼어 줘요?","지안이 꽃잎을 떼어 내고 손바닥을 펼쳐 보였다.","짠! 봄 한 조각 획득!","지안의 머리카락에서 꽃잎을 떼자 그녀가 환하게 웃었다.","와, 나도 봄 화보 주인공이었네!","앗, 그럼 여기 봐요. 이쪽 볼!"],"공재희":["재희가 우산 안으로 바짝 들어오며 젖은 앞머리를 털었다.","엥 볼에 꽃잎 붙었어요. 나 떼 줘도 됨?","재희가 손끝으로 꽃잎을 떼다가 가까워진 얼굴을 보고 눈을 깜빡였다.","아 뭐야. 이렇게 가까이 보니까 좀 떨리네 ㅋㅋ","재희의 뺨에 붙은 꽃잎을 떼자 그녀가 잠시 눈을 감았다가 당신을 올려다봤다.","헐… 뭐야. 나 지금 좀 설렜음.","아 웅. 여기 볼 옆에 있어요."]};
const seasonalVoices={"서이준":[["이준이 빗속에서 처마 밑으로 뛰어들었다. 안경점 유리에 빗줄기가 비쳤다.","…기상 예보를 믿는 게 아니었는데. 우산 하나 사 올까요?","이준이 우산을 펼치고 손잡이를 당신 쪽으로 옮겼다.","…제 어깨는 괜찮으니까 그쪽이 젖지 않게 들어요.","이준이 처마 아래에서 휴대전화로 강수 지도를 확인했다.","십 분만 기다려 봐요. 그 정도면 그칠 것 같아요."],["이준이 편의점 냉동고 앞에서 두 가지 아이스크림을 들었다.","…둘 다 먹고 싶은데. 하나씩 사서 바꿔 먹을래요?","이준이 포장을 뜯고 당신의 선택을 기다렸다.","다음에는 취향 안 물어봐도 고를 수 있겠네요.","이준이 생수 두 병을 집었다.","더운데 단것만 먹으면 목마르죠. 물도 마셔요."],"이준이 젖은 머리칼을 직접 정리했다.","…꽃잎은 제가 뗄게요. 어디 붙었는지만 알려 줘요.","이준이 당신의 뺨을 가리키고 우산을 고쳐 들었다.","왼쪽이요. 오늘은 직접 떼는 게 편하겠네요."],"강도윤":[["도윤이 비에 젖은 셔츠 소매를 털고 웃었다.","하하, 오늘은 카페 사장도 피난민이네요. 따뜻한 데로 갈까요?","도윤이 작은 우산 아래로 몸을 숙였다.","제가 좀 크죠? 가까이 와 주시면 덜 젖을 것 같아요.","도윤이 근처 카페의 빈자리를 살폈다.","오늘은 남이 내려 주는 커피를 같이 마셔 볼까요?"],["도윤이 가게 밖의 얼음컵을 보고 걸음을 멈췄다.","오늘은 제가 아니라 빙수가 필요한 날이네요. 같이 먹을래요?","도윤이 빙수 그릇을 가운데 놓고 수저를 건넸다.","하하, 마지막 과일은 양보하기 싫은데요. 반씩 나눌까요?","도윤이 시원한 그늘 쪽을 가리켰다.","오늘은 그냥 쉬어도 좋죠. 물부터 한 잔 마셔요."],"도윤이 꽃잎을 직접 털어 손바닥을 펼쳤다.","하하, 오늘은 제가 알아서 정리할게요. 우산만 들어 주실래요?","도윤이 손수건을 펼쳐 건넸다.","꽃잎보다 젖은 옷이 걱정되네요. 이걸로 닦아요."],"한시우":[["시우가 갑작스러운 빗줄기에 운동화가 젖은 걸 보고 탄식했다.","와, 강제 우천 맵이네! 처마까지 뛰어갈래요?","시우가 우산을 함께 들고 물웅덩이를 피해 걸었다.","오, 협동 플레이 성공! 근데 저 신발은 패배했어요.","시우가 처마 밑에서 신발 끝을 내려다봤다.","오늘은 여기서 비 그치는 거 기다리죠. 손목도 좀 쉬고."],["시우가 슬러시 기계 앞에 서서 색을 비교했다.","와, 이거 두 맛 섞으면 사기 조합 아닌가? 같이 도전해요!","시우가 서로 다른 슬러시를 들어 보이며 웃었다.","이거 신메타다! 다음엔 다른 조합도 해 봐요.","시우가 얼음물을 들고 벤치에 앉았다.","오케이, 오늘은 냉각 타임. 체력부터 회복합시다."],"시우가 앞머리를 쓱 털었다.","앗, 오늘은 직접 떼 볼게요. 어디 붙었어요?","시우가 자신의 볼을 가리켜 위치를 알려 줬다.","여기요, 여기! 오늘은 셀프 꽃잎 제거 퀘스트."],"백지한":[["지한이 빗방울을 피해 건물 입구로 걸음을 옮겼다.","이 건물은 처마를 꽤 잘 뽑았네요. 덕분에 둘이 갇혔고요.","지한이 우산을 펼쳐 당신이 들어올 자리를 남겼다.","이렇게 가까이 걸을 기회가 생기니 비도 나쁘진 않네요.","지한이 건물 안쪽의 벤치를 살폈다.","비 그칠 때까지 여기 앉죠. 급히 갈 이유는 없으니까."],["지한이 햇빛을 가리는 차양 아래로 들어섰다.","한여름엔 좋은 집의 기준이 달라져요. 그늘하고 냉방이죠.","지한이 차가운 음료 두 잔을 테이블에 내려놓았다.","오늘은 저보다 이 얼음잔이 더 매력적이겠는데요.","지한이 차양 아래의 빈 의자를 권했다.","오늘은 각자 시원하게 쉬죠. 가까이 앉으면 덥잖아요."],"지한이 손끝으로 제 어깨의 꽃잎을 떼었다.","오늘은 이 정도 거리에서 꽃구경하고 싶네요.","지한이 작은 거울을 건넸다.","오른쪽 뺨이에요. 직접 확인해 봐요."],"정태오":[["태오가 빗물이 고인 보도를 확인하고 걸음을 멈췄다.","이쪽은 미끄럽습니다. 처마 밑에서 잠시 기다리시죠.","태오가 우산을 단단히 잡고 보폭을 맞췄다.","제 쪽은 신경 쓰지 않으셔도 됩니다. 발밑을 보십시오.","태오가 물이 흐르는 배수로를 살폈다.","빗줄기가 약해질 때까지 움직이지 않는 편이 좋겠습니다."],["태오가 그늘에 들어서며 물병을 꺼냈다.","기온이 높습니다. 잠시 수분을 보충하시겠습니까?","태오가 물병 뚜껑을 열어 건넸다.","…이렇게 쉬는 것도 나들이의 일부겠군요.","태오가 그늘진 벤치에 앉았다.","무리하지 않는 것이 우선입니다. 잠시 쉬시죠."],"태오가 어깨를 털어 꽃잎을 떼어 냈다.","감사합니다. 제 옷은 제가 정리하겠습니다.","태오가 손수건을 꺼냈다.","왼쪽 어깨에 붙었습니다. 직접 떼시면 될 듯합니다."],"임하나":[["하나가 비를 피해 문구점 처마 아래로 뛰어왔다.","저… 이렇게 갑자기 비 오는 것도 오랜만에 겪는 것 같아요. 늘 일하느라.","하나가 우산 손잡이 옆으로 조심스레 손을 옮겼다.","……오늘은 조금 젖어도 괜찮을 것 같아요. 같이 걸으니까.","하나가 빗줄기를 바라보며 가방을 내려놓았다.","오늘은 급하게 돌아가지 않아도 되죠? 조금 쉬고 싶어요."],["하나가 편의점 냉동고 앞에서 한참 고민했다.","저 어릴 때 이 아이스크림 좋아했는데… 오늘은 먹어 볼래요.","하나가 포장을 뜯으며 작게 웃었다.","……다음엔 제가 먹고 싶은 맛을 먼저 골라도 되죠?","하나가 차가운 물병을 볼에 잠깐 댔다.","오늘은 그늘에서 좀 쉬고 싶어요. 제 마음대로 정해도 되죠?"],"하나가 앞머리를 손끝으로 정리했다.","저… 오늘은 제가 직접 떼고 싶어요. 알려 주셔서 고마워요.","하나가 손수건을 내밀며 살짝 물러났다.","여기 쓰세요. 오늘은 이렇게 있는 게 편해요."],"차유리":[["유리가 처마 끝의 빗방울을 찍으려고 휴대전화를 꺼냈다.","오, 비 오니까 간판 색 완전 달라 보이네요. 잠깐 찍어도 돼요?","유리가 우산을 함께 쓰며 물웅덩이에 비친 색을 가리켰다.","이 색 조합은 작업에 써먹어야겠다. 오늘 같이 본 거 기억해 둬요.","유리가 처마 밑에서 사진을 확인했다.","여기서 각자 사진 좀 찍다가 비 그치면 가요."],["유리가 아이스크림 가게의 색색의 메뉴판을 바라봤다.","오, 이 조합 예쁘다. 맛은 어떨지 모르겠지만요.","유리가 서로 고른 아이스크림을 나란히 놓고 사진을 찍었다.","좋다! 맛보다 색으로 골랐는데 성공했네요.","유리가 부채를 펴고 그늘 쪽으로 이동했다.","오늘은 더위 때문에 작업도 못 하겠네. 각자 멍 때려요."],"유리가 꽃잎을 직접 떼어 손바닥에 올렸다.","아, 고마워요. 얼굴이나 머리는 오늘 제가 정리할게요.","유리가 젖은 꽃잎을 가리켰다.","여기 붙었어요. 사진으로 남겨도 예쁘겠는데?"],"오세린":[["세린이 갑자기 내리는 비에 젖은 나뭇잎을 바라봤다.","어머, 소나기네요. 감기 걸리지 않게 잠깐 피해요.","세린이 우산을 천천히 기울여 두 사람의 걸음을 맞췄다.","아아, 이렇게 천천히 걷는 것도 운치 있네요.","세린이 마른 손수건을 꺼내 건넸다.","빗소리 듣다가 그치면 가요. 오늘은 서두르지 말고요."],["세린이 그늘에서 잠시 걸음을 멈추었다.","으음, 오늘은 산책하기엔 너무 덥네요. 시원한 차라도 마실까요?","세린이 차가운 찻잔을 건네며 미소 지었다.","서로 좋아하는 차를 알아가는 것도 즐겁네요.","세린이 물을 한 모금 마시고 눈을 감았다.","오늘은 충분히 쉬는 게 좋겠어요. 몸이 먼저니까요."],"세린이 머리카락을 정돈했다.","어머, 알려 주셔서 감사해요. 오늘은 제가 떼어 볼게요.","세린이 작은 손거울을 꺼내 건넸다.","여기 보세요. 직접 정리하시면 되겠어요."],"유지안":[["지안이 빗줄기를 보자 반사적으로 운동화 끈을 확인했다.","헐, 갑자기 여름 뮤비 찍는 줄! 일단 비 피하자고요!","지안이 우산 아래에서 보폭을 줄이고 웃었다.","와, 우리 걸음 박자 맞는 거 봐요. 완전 안무 같잖아!","지안이 처마 아래에서 젖은 운동화를 확인했다.","앗, 오늘은 춤 말고 빗소리 감상 타임이에요."],["지안이 땀을 닦으며 얼음 음료 가게를 발견했다.","와우, 오늘은 아이스 음료 필수! 무슨 맛 마실래요?","지안이 얼음컵을 들어 건배하듯 맞댔다.","짠! 여름에도 살아남은 우리한테 박수!","지안이 그늘에서 가볍게 스트레칭했다.","오늘은 회복 데이! 더위에 이기려고 무리할 필요 없죠."],"지안이 머리카락을 가볍게 털었다.","앗, 오늘은 제가 뗄게요! 어디 붙었는지만 알려 줘요.","지안이 자신의 뺨을 톡톡 가리켰다.","여기! 셀프로 떼면 바로 봄 화보 완성이에요."],"공재희":[["재희가 비를 피해 오락실 입구로 뛰어들며 앞머리를 확인했다.","아 미친 비ㅋㅋ 앞머리 다 망했어요. 잠깐 여기 있을래요?","재희가 우산 아래로 들어오며 어깨를 움츠렸다.","웅… 이렇게 붙어 걸으니까 좀 좋네. 근데 머리 진짜 망함ㅋㅋ","재희가 오락실 처마 아래에서 손거울을 꺼냈다.","나 머리 좀 정리할래요. 비 그칠 때까지 여기 있어요."],["재희가 편의점에서 딸기 맛 얼음 음료를 집었다.","헐 이거 색 완전 내 취향. 같이 먹어 볼래요?","재희가 서로의 음료를 나란히 세워 사진을 찍었다.","아 귀여워ㅋㅋ 같이 찍은 건 저장해 둘 거임.","재희가 차가운 물병을 두 손으로 감쌌다.","아 나 오늘 녹겠음. 그냥 에어컨 있는 데서 쉬어요."],"재희가 앞머리를 손으로 정리하고 살짝 물러났다.","아 웅. 오늘은 나 혼자 뗄게요. 위치만 알려 줘요.","재희가 휴대전화 카메라를 켜서 건넸다.","여기 볼 옆에 있음ㅋㅋ 카메라로 봐요."]};
function seasonContext(p,day){const c=touchContext(p,day);return {...c,tier:relationshipTier(p),romantic:c.dating||c.interest>=6};}
function seasonResult(p,c,kind,choice){if(choice===2)return {interest:0,security:2,close:false};if(c.conflicted||c.tired)return {interest:0,security:1,close:false};const close=choice===0&&c.romantic&&c.tier>=2;return {interest:close?2:0,security:1,close};}
function saveSeasonChoice(p,id,day,choice,result,reply){const f=flirtRecord(p),m=memoryFor(p);f.seen[id]=day;f.interest+=result.interest;feel(p,{security:result.security});const h=m.preferences.seasonHistory||(m.preferences.seasonHistory=[]);h.push({id,day,choice,close:result.close,reply});remember(p,'season:'+id,reply);writeJournal(p+' · '+({springRain:'봄비와 벚꽃잎',springBlossom:'봄날의 벚꽃 추억',summerRain:'여름 소나기',summerHeat:'한여름의 쉼표',autumnLeaves:'단풍과 찬바람',winterSnow:'눈 내리는 연화동',winterWarm:'겨울의 온기'}[id]));}
const summerNightVoices={"서이준":["이준이 편의점 냉장고에서 맥주 한 캔과 탄산수를 꺼내 들었다.","…집에 들어가면 또 에어컨만 틀고 있을 것 같아서요. 강변에 잠깐 앉을래요?","맥주는 이거면 충분해요. 내일 일도 해야 하니까.","탄산수 괜찮죠. 저도 이걸 마실게요.","이준이 캔 표면의 물기를 손등으로 훔쳤다.","…밤에는 사람이 적어서 좋네요. 당신이랑 있으면 굳이 말을 채울 필요도 없고.","이준이 캔을 벤치 옆에 내려놓고 손을 펼쳤다.","…손 잡아도 돼요? 해가 졌는데도 이렇게 따뜻하네요.","이준이 강물에 비친 가로등을 바라봤다.","오늘은 이렇게 앉아 있는 게 좋겠어요. 조금 더 있다 들어가요.","이준이 빈 캔을 챙기고 일어났다.","…들어가는 길에 연락해요. 문 닫는 소리 들리면 저도 잘게요."],"강도윤":["도윤이 편의점 앞에서 차가운 캔을 양손에 들고 환하게 웃었다.","하하, 퇴근하고 마시는 건 커피보다 맥주가 낫죠. 오늘은 강바람 좀 쐴까요?","좋아요. 한 캔씩만 마시고 모카 산책도 마저 해야겠어요.","그럼 저는 무알코올로 갈게요. 같이 마시는 기분은 똑같죠.","도윤이 강변 벤치에 앉아 셔츠 깃을 느슨하게 했다.","가끔은 사장이 아닌 사람으로 하루를 끝내는 것도 좋네요. 오늘은 제가 손님인 기분이에요.","도윤이 옆자리를 살짝 두드렸다.","오늘은 저도 좀 기대고 싶은데, 어깨 빌려 주실래요?","도윤이 다리를 편하게 뻗고 웃었다.","하하, 아무것도 안 해도 좋은 밤이네요. 같이 바람만 쐬어요.","도윤이 캔을 분리수거함에 넣었다.","오늘 고마웠어요. 다음엔 모카도 같이 산책시켜요!"],"한시우":["시우가 얼음컵을 손에 들고 가게 문을 밀었다.","와, 밤인데도 덥네! 연화천 가서 여름 야외 맵 좀 즐겨 볼래요?","앗 저는 내일 연습이라 무알코올! 그쪽은 한 캔 괜찮죠.","좋다, 음료수 파티! 얼음 듬뿍 넣어야지.","시우가 강변 난간의 그림자를 발끝으로 따라갔다.","요즘 경기 생각 안 하고 앉아 있는 시간이 별로 없었거든요. 이런 것도 꽤 재밌네.","시우가 아프지 않은 오른손을 조심스레 내밀었다.","아, 지금은 장난 아닌데. 저 손 잡아도 돼요?","시우가 벤치에 등을 기대고 웃었다.","오케이. 오늘은 아무 퀘스트도 없는 날! 그냥 같이 앉아 있죠.","시우가 빈 얼음컵을 챙겨 들었다.","오늘은 완전 힐링 맵이었어요. 다음에 또 접속해요!"],"백지한":["지한이 캔맥주 진열대에서 고개를 돌렸다.","이 시간에 집으로 바로 가기엔 아깝지 않아요? 강변에서 한잔할까요?","좋죠. 한 캔이면 밤바람 즐기기 딱 좋겠네요.","음료도 좋죠. 제가 꼭 술이 있어야 재미있는 사람은 아니거든요.","지한이 강 건너 불 켜진 아파트들을 한참 바라봤다.","저기 창마다 사는 사람이 다르겠죠. 저는 언젠가 내가 설계한 집 창문에서 이런 밤을 보고 싶어요.","지한이 당신 옆의 빈 공간을 살피고 눈을 맞췄다.","조금 더 가까이 앉아도 돼요? 오늘은 눈앞의 풍경이 더 마음에 들어서.","지한이 캔을 든 손을 난간 쪽으로 옮겼다.","각자 바람 쐬는 것도 나쁘지 않네요. 오늘은 서두르지 맙시다.","지한이 먼저 자리에서 일어나 강변 출구를 가리켰다.","오늘은 여기까지. 다음에 야경 좋은 집 구경시켜 드릴까요?"],"정태오":["태오가 편의점에서 생수와 음료를 고르다가 당신에게 고개를 돌렸다.","아직 기온이 높습니다. 강변은 바람이 조금 불던데, 잠깐 걸으시겠습니까?","저는 오늘 술을 마시지 않겠습니다. 내일 근무가 있으니 물로 하겠습니다.","좋습니다. 수분을 충분히 섭취하는 편이 좋겠습니다.","태오가 가로등이 밝은 벤치를 골라 앉았다.","근무가 아닌 시간에 이 길을 보니 느낌이 다르군요. 오늘은 서두를 필요도 없고요.","태오가 손을 무릎 위에 올려놓고 잠시 숨을 골랐다.","…손을 잡아도 괜찮으시겠습니까?","태오가 물병 뚜껑을 닫고 강변을 바라봤다.","이대로 잠시 쉬는 것도 좋습니다. 조용하군요.","태오가 빈 병을 챙겨 일어섰다.","늦었습니다. 안전한 길로 함께 돌아가시죠."],"임하나":["하나가 냉장고 앞에서 캔맥주와 달콤한 음료를 번갈아 봤다.","저… 밤에 강변에 앉아 뭔가 마시는 거 해 보고 싶었어요. 오늘은 시간이 조금 있어요.","저도 한 캔은 궁금했어요. 천천히 마실래요.","그럼 저는 복숭아 음료로 할게요. 제가 좋아하는 맛이에요.","하나가 벤치에 앉아 다리를 편하게 뻗었다.","이렇게 아무 일도 하지 않는 밤이 있다는 게 아직 신기해요. 오늘은 제가 고른 시간이네요.","하나가 먼저 손을 내밀었다가 당신의 눈을 바라봤다.","……저, 오늘은 제가 손 잡고 싶어요. 그래도 될까요?","하나가 캔을 양손으로 감싸며 미소 지었다.","오늘은 그냥 강물 보고 있어도 좋아요. 이런 여유를 기억하고 싶어요.","하나가 빈 캔을 가방에 넣고 자리에서 일어났다.","오늘 늦게까지 같이 있어 줘서 고마워요. 다음엔 제가 먼저 제안할게요."],"차유리":["유리가 편의점 간판과 저녁 하늘을 번갈아 보며 휴대전화를 꺼냈다.","오, 밤에는 색이 완전 다르네요. 강변 가서 캔 하나 따면서 구경할래요?","좋아요. 저는 오늘 이 패키지 색이 마음에 들어서 이걸로.","그럼 탄산음료로 가죠. 색감 예쁜 걸 발견했어요.","유리가 강물 위로 길게 늘어진 빛을 손가락으로 따라 그렸다.","이 색을 그림으로 옮기면 낮에 작업한 거랑 완전히 다를 것 같아요. 밤에 나온 보람 있네.","유리가 당신 쪽을 바라보고 어깨 옆에 빈자리를 남겼다.","오늘은 옆에 좀 기대도 돼요? 사진 찍는 손은 자유롭게 두고요.","유리가 각자의 캔을 나란히 놓고 사진을 찍었다.","오, 각자 편하게 있고 같은 풍경 보는 거 좋네요.","유리가 사진을 저장하고 캔을 챙겼다.","오늘 색은 기억해 둘래요. 나중에 그림에 나오면 알아봐 줘요."],"오세린":["세린이 냉장고에서 차가운 차를 꺼내 들었다.","어머, 밤에도 이렇게 덥네요. 강바람을 맞으면서 쉬어 볼까요?","저는 오늘 차로 할게요. 한 캔 드시고 싶으면 천천히 드세요.","으음, 이 차 향이 좋아요. 함께 마셔 봐요.","세린이 물가에서 들려오는 소리에 귀를 기울였다.","병원에 있을 때는 이런 소리를 들을 일이 없네요. 그냥 하루를 잘 마쳤다는 기분이에요.","세린이 차를 내려놓고 손바닥을 펼쳤다.","잠시 손을 맞잡고 있어도 괜찮을까요?","세린이 바람에 흔들리는 나뭇잎을 바라봤다.","아아, 이렇게 말없이 있는 것도 참 편안하네요.","세린이 빈 병을 정리하며 일어섰다.","오늘은 충분히 쉬었네요. 돌아가서 편안한 밤 보내요."],"유지안":["지안이 얼음컵을 들어 올리며 강변 쪽을 가리켰다.","와우, 여름밤 산책 각이다! 오늘은 러닝 말고 천천히 걸어요.","저는 내일 수업 있어서 무알코올로! 건배는 할 수 있잖아요.","예쓰! 탄산음료로 여름밤 건배 갑니다.","지안이 가로등 아래에서 잠깐 박자를 타다가 웃었다.","춤추지 않아도 음악이 들리는 기분이에요. 이런 밤이면 그냥 걷는 것도 재밌죠.","지안이 한쪽 팔을 가볍게 벌리고 눈을 맞췄다.","있잖아요. 오늘은 잠깐 안아도 돼요?","지안이 신발 끈을 고쳐 묶고 벤치에 앉았다.","좋죠! 오늘은 아무것도 안 하는 안무. 가만히 있기!","지안이 얼음컵을 챙겨 일어났다.","오늘 완전 여름 플레이리스트 한 곡 같았어요. 다음에 또 와요!"],"공재희":["재희가 편의점 냉장고에서 분홍색 음료를 꺼내 흔들어 보였다.","헐 밤인데 왜 이렇게 더워요ㅋㅋ 강변 가서 한 캔 할래요?","나도 오늘은 한 캔만. 취하면 내일 방송 못 함ㅋㅋ","웅! 그럼 딸기 탄산으로 같이 마셔요.","재희가 벤치에 앉아 캔의 물방울을 손가락으로 긁었다.","방송 켜면 계속 떠들어야 되는데 여기서는 조용해도 되니까 좋음…","재희가 당신의 손 옆에 손을 놓고 올려다봤다.","아… 나 지금 손 잡고 싶음. 잡아도 됨?","재희가 고개를 들어 가로등 주변의 벌레를 바라봤다.","웅. 그냥 옆에 있어요. 말 안 해도 괜찮은 거 좋다ㅋㅋ","재희가 빈 캔을 챙기고 휴대전화를 확인했다.","아 벌써 이 시간임? 집 도착하면 톡 줘요. 나도 보낼게요."]};
const summerNightTouch={'서이준':1,'강도윤':0,'한시우':1,'백지한':0,'정태오':1,'임하나':1,'차유리':0,'오세린':1,'유지안':0,'공재희':1};
function summerNightEligible(day,slot){return seasonInfo(day).index===1&&slot===3&&!['장맛비','소나기','비'].includes(weatherFor(day).name)}
function summerNightCandidates(){const v=initSim();return people.filter(p=>v.met[p]&&socialRecord(p).contact&&relationshipTier(p)>=2&&(!flirtRecord(p).seen.summerNight||v.day-flirtRecord(p).seen.summerNight>=14))}
function startSummerNight(){const v=initSim();if(!v.running?.outing||v.activeEvent||!summerNightEligible(v.day,v.slot))return;const candidates=summerNightCandidates();if(!candidates.length)return;v.running.outing=false;v.running.notes.push('저녁 · 여름밤 강변 산책');v.activeEvent={place:'river',description:'해가 진 뒤에도 아스팔트에 낮의 열기가 남아 있다. 편의점 냉장고의 불빛 너머로 강변 가로등이 보인다.',day:v.day,person:null,summerNight:{candidates},answered:false};save();renderChoiceEvent()}
function renderSummerNight(ev){const v=initSim(),o=ev.summerNight,p=ev.person;$('progress').textContent='여름밤 · 연화천';if(!p){add('이야기','연락할 사람을 골라 오늘 밤 잠깐 강변에서 만날 수 있는지 물어보자.');for(const [who,reply] of Object.entries(o.declined||{}))add(who,reply);for(const who of o.candidates.filter(x=>!o.declined?.[x]))choiceButton(who+'에게 밤 산책을 제안한다',()=>{if(ev.person)return;if(!nightNpcFree(who,ev.day)){o.declined=o.declined||{};o.declined[who]=touchContext(who,ev.day).conflicted?touchProfiles[who].hurt[1]:npcAutonomyVoices[who][5];save();renderChoiceEvent();return}ev.person=who;o.context=seasonContext(who,ev.day);save();renderChoiceEvent()});choiceButton('혼자 강바람을 쐰다',finishEvent);return}const a=summerNightVoices[p],c=o.context,q=touchProfiles[p].quiet;add('이야기',a[0]);add(p,a[1]);if(o.drink===undefined){for(const [label,i,cost] of [['캔맥주 한 캔을 고른다',0,3000],['무알코올 음료를 고른다',1,2000],['아무것도 사지 않고 산책한다',2,0]])if(v.money>=cost)choiceButton(label,()=>{if(o.drink!==undefined)return;o.drink=i;o.drinkLabel=label;v.money-=cost;save();renderChoiceEvent();renderSim()});return}add(state.name,o.drinkLabel,true);add(p,o.drink===0?a[2]:o.drink===1?a[3]:a[9]);add('이야기',a[4]);add(p,c.conflicted?touchProfiles[p].hurt[1]:a[5]);const canTouch=!c.conflicted&&!c.tired&&c.romantic&&touchOutcome(p,c,summerNightTouch[p]).accepted;if(o.choice===undefined){if(canTouch){add('이야기',a[6]);add(p,a[7])}const opts=canTouch?[['좋아요. 이리 와요.',0],['오늘은 이대로 같이 있고 싶어요.',1],['이제 돌아갈까요?',2]]:[['강물 보면서 조금 더 쉬어요.',1],['이제 돌아갈까요?',2]];for(const [label,i] of opts)choiceButton(label,()=>{if(o.choice!==undefined)return;o.choice=i;o.label=label;o.close=i===0&&canTouch;o.reply=o.close?playerTouchScenes[p][3+summerNightTouch[p]*2]:i===1?a[9]:a[11];o.narration=o.close?playerTouchScenes[p][2+summerNightTouch[p]*2]:i===1?a[8]:a[10];const f=flirtRecord(p),m=memoryFor(p);f.seen.summerNight=v.day;if(o.close){f.interest+=2;f.touches.push({day:v.day,type:touchTypes[summerNightTouch[p]],scene:'summerNight'})}feel(p,{security:i===1?2:1});(m.preferences.seasonHistory||(m.preferences.seasonHistory=[])).push({id:'summerNight',day:v.day,drink:o.drink,choice:i,close:o.close,reply:o.reply});remember(p,'season:summerNight:'+v.day,o.reply);socialRecord(p).lastTogether=v.day;socialRecord(p).lastSeen=v.day;writeJournal(p+' · 여름밤 강변 산책');save();renderChoiceEvent();renderSim()});return}add(state.name,o.label,true);add('이야기',o.narration);add(p,o.reply);if(o.choice!==2){add('이야기',a[10]);add(p,a[11])}choiceButton('일정 계속하기',finishEvent)}
const autumnVoices={"서이준":["이준이 신발 앞에 떨어진 은행잎을 내려다봤다. 바람이 불자 손을 주머니에 넣었다.","…벌써 해가 이렇게 짧아졌네요. 조금만 더 걷고 갈래요?","이준이 주머니에서 손을 꺼내 당신 쪽으로 내밀었다.","…손 시려우면 잡아요. 저도 이제 주머니에만 넣고 있긴 싫어서요.","이준이 따뜻한 자판기 음료를 건넸다.","손은 주머니에 넣고 있어요. 이거 마시면서 천천히 가죠.","지난번 여름엔 밤에도 더웠는데. 이제는 따뜻한 걸 찾게 되네요."],"강도윤":["도윤이 낙엽을 밟으며 걷다가 카페의 가을 메뉴가 생각난 듯 웃었다.","오늘 같은 날은 시나몬 향이 잘 어울리겠네요. 따뜻한 라테 한 잔 어때요?","도윤이 나란히 앉을 자리를 마련하고 팔을 살짝 벌렸다.","하하, 오늘은 커피보다 이쪽이 따뜻할지도 모르겠네요. 기대도 돼요?","도윤이 종이컵 두 개를 벤치에 올렸다.","오늘은 따뜻한 것만 마셔도 충분하죠. 천천히 쉬어요.","여름에는 빙수 먹으러 다녔는데요. 이렇게 계절 바뀌는 걸 같이 느끼니 좋네요."],"한시우":["시우가 낙엽을 밟아 소리를 내다가 자신의 얇은 겉옷을 내려다봤다.","와, 갑자기 추워졌네요. 반팔 입고 나온 저 좀 바보 같죠?","시우가 오른손을 주머니 밖으로 내밀었다.","손 잡으면 좀 따뜻해질지도? …핑계인 거 들켰죠.","시우가 따뜻한 음료를 양손에 들고 웃었다.","오케이. 오늘은 각자 온도 관리! 바람 좀 덜 부는 데로 가요.","여름에는 이 시간에도 더웠는데요. 그때 같이 걸었던 거 생각나요."],"백지한":["지한이 가로수 사이로 보이는 주택의 창을 바라봤다. 낙엽이 현관 앞에 쌓여 있었다.","이런 계절이면 남향 창의 가치가 실감 나죠. 햇빛 드는 집에서 살고 싶어지네요.","지한이 당신의 옆자리에 손을 얹고 눈을 맞췄다.","추운 건 핑계고요. 그냥 오늘 좀 가까이 앉고 싶은데, 괜찮아요?","지한이 코트 깃을 여미고 느긋하게 걸었다.","오늘은 걷는 것만으로도 좋네요. 굳이 서두르지 말죠.","여름에 봤던 강 건너 창들이 생각나네요. 그때보다 불이 일찍 켜지죠?"],"정태오":["태오가 낙엽으로 미끄러워진 길을 확인하고 보폭을 줄였다.","기온이 떨어졌습니다. 오래 걷기보다는 조금 쉬었다 가시겠습니까?","태오가 장갑을 벗어 손을 내밀기 전에 당신의 표정을 살폈다.","…손을 맞잡고 걸어도 괜찮으시겠습니까?","태오가 바람이 덜 부는 길을 가리켰다.","그쪽으로 가시죠. 오늘은 무리하지 않으셔도 됩니다.","여름의 강변과는 풍경이 많이 달라졌군요. 계절이 빠릅니다."],"임하나":["하나가 낙엽 한 장을 주워 오래 들여다보다 가방 속 책 사이에 넣었다.","저, 이런 거 해 보고 싶었어요. 예쁜 잎을 책갈피로 만드는 거요.","하나가 손을 내밀고 잠시 기다렸다.","……오늘은 제가 먼저 손을 잡고 걸어도 돼요?","하나가 낙엽이 든 책을 품에 안았다.","그냥 같이 걷는 것도 좋아요. 오늘은 이 잎을 간직할래요.","여름밤에도 이렇게 아무 일 없이 앉아 있었죠. 그때도 참 좋았어요."],"차유리":["유리가 낙엽 두 장을 겹쳐 놓고 색을 비교했다.","오, 이 주황이랑 자주색 조합 봐요. 가을은 팔레트가 너무 좋다.","유리가 손에 든 잎을 내려놓고 당신 쪽으로 어깨를 기울였다.","사진은 충분히 찍었어요. 잠깐 옆에 기대도 돼요?","유리가 가장 마음에 드는 잎을 골라 사진으로 남겼다.","좋다. 각자 마음에 드는 색 찾아서 나중에 비교해요.","여름에 찍었던 사진이랑 나란히 놓으면 색 차이가 엄청나겠네요."],"오세린":["세린이 차가워진 공기에 목도리를 고쳐 둘렀다.","으음, 산책하기 참 좋은 계절이네요. 따뜻한 차가 있으면 더 좋겠어요.","세린이 찻잔을 내려놓고 손바닥을 펼쳤다.","잠깐 손을 잡고 있어도 괜찮을까요? 이렇게 쌀쌀한 날에는 온기가 좋네요.","세린이 차 향을 맡으며 천천히 미소 지었다.","아아, 오늘은 이렇게 편히 쉬는 걸로 충분해요.","여름밤에 들었던 물소리 기억나세요? 오늘은 바람 소리가 더 크네요."],"유지안":["지안이 바스락거리는 낙엽 위에서 발을 가볍게 굴렸다.","와우, 자연산 퍼커션! 근데 바람 진짜 차갑다. 잠깐 쉬어요!","지안이 웃으며 팔을 살짝 벌렸다.","있잖아요. 오늘은 제가 좀 안겨도 돼요? 추워서만은 아니고요!","지안이 겉옷 지퍼를 올리고 벤치를 가리켰다.","좋죠! 오늘은 따뜻하게 앉아서 이야기하는 안무예요.","여름밤에는 완전 뮤비 같았는데. 가을 버전도 찍어야겠어요!"],"공재희":["재희가 낙엽을 찍다가 바람에 앞머리가 흐트러져 인상을 찌푸렸다.","아 왜 갑자기 추움ㅋㅋ 근데 사진 색감은 완전 예쁘다.","재희가 소매에서 손을 꺼내 당신 앞에 내밀었다.","아 나 손 시림… 근데 그거 핑계고 그냥 손 잡고 싶어요ㅋㅋ","재희가 따뜻한 캔을 두 손으로 감쌌다.","웅. 오늘은 이렇게 따뜻한 거 들고 같이 앉아 있어요.","여름엔 얼음컵 들고 여기 왔었잖아요ㅋㅋ 이제 핫팩 시즌임."]};
const autumnFestivalVoices={"서이준":[["이준이 가죽 책갈피를 집어 바느질 자국을 살폈다.","이건 오래 쓰겠네요. 어떤 게 마음에 들어요?","…서로 고른 걸 쓰면 책 펼칠 때 생각나겠네요.","그럼 눈에 들어오는 것만 천천히 보죠."],["이준이 줄이 짧은 어묵 가게를 발견했다.","…저기 국물 따뜻하겠는데요.","한 컵 더 받아 올게요. 뜨거우니까 조심하고요.","저는 조금 있다가 먹을게요. 구경부터 하죠."],["이준이 무대에서 조금 떨어진 자리를 찾았다.","여기서는 스피커 소리가 덜 울리네요.","…실제로 보면 연습량이 느껴지네요.","저도 이 거리에서 보는 게 편합니다."],["이준이 난간의 빈자리를 찾았다.","이쪽이면 사람들 사이에 끼지 않아도 되겠네요.","…불꽃보다 옆에 있는 사람이 더 신경 쓰이네요.","이렇게 나란히 보면 충분해요.","…내년에도 이런 자리를 찾아 둘까요?"]],"강도윤":[["도윤이 손으로 만든 머그잔을 하나 들어 올렸다.","하하, 이런 잔에 커피를 내리면 어떨까요?","서로 고른 잔에 다음에 커피 한 잔씩 내려요.","좋아요. 가게에 놓을 아이디어만 얻어 가죠."],["도윤이 구운 간식 냄새에 고개를 돌렸다.","오늘은 제가 손님이니까 마음껏 골라도 되죠?","맛있네요! 이건 반씩 먹어야 더 맛있겠어요.","하하, 배고파지면 그때 먹어요."],["도윤이 공연에 맞춰 가볍게 손뼉을 쳤다.","지안 씨 정말 에너지가 대단하네요.","저도 모르게 박자가 맞춰지네요!","이렇게 편하게 보는 것도 좋네요."],["도윤이 강변의 빈 벤치를 가리켰다.","여기 앉으면 불꽃도 잘 보이겠네요.","오늘은 저도 조금 기대고 싶은데요.","하하, 이렇게 앉아 있는 것만으로 좋네요.","내년에는 가게 문을 조금 더 일찍 닫아야겠어요."]],"한시우":[["시우가 경품처럼 쌓인 키링을 보고 눈을 반짝였다.","와, 저거 완전 한정판 느낌인데요?","좋다! 서로 골라 준 아이템 장착 완료!","오케이. 오늘은 구경만 해도 경험치 획득."],["시우가 긴 꼬치 두 종류를 비교했다.","야시장 먹거리 티어표 만들어야 되는 거 아님?","와, 이 조합은 S티어 인정!","오케이. 다음에 더 맛있는 거 찾죠."],["시우가 무대 쪽으로 고개를 돌렸다.","와, 지안 씨 무대 장악력 뭐예요?","저런 집중력은 경기장에서도 배우고 싶은데요!","저도 오늘은 관전 모드로 즐길래요."],["시우가 첫 불꽃에 어깨를 움찔했다.","와, 이펙트 진짜 과하다!","아, 잠깐. 오늘은 진짜 손 잡고 싶어요.","오케이. 불꽃만 봐도 충분히 재밌네요!","내년에는 더 좋은 자리 선점하자고요!"]],"백지한":[["지한이 작은 목공 소품의 결합부를 살폈다.","이런 건 마감부터 보게 되네요. 직업병인가 봐요.","좋네요. 나중에 제가 지을 집에도 이런 소품 하나 둘까요?","그럼 눈에 들어오는 것만 보죠. 구매는 천천히."],["지한이 야시장 메뉴판을 읽으며 웃었다.","오늘은 제 추천 코스 말고 그쪽이 고르는 걸로 가 볼까요?","좋죠. 취향 알아 가는 데 꽤 유익한 저녁인데요.","배고플 때 고르는 게 더 정확하겠네요."],["지한이 무대 조명과 객석의 배치를 살폈다.","공간을 이렇게 쓰니까 분위기가 완전히 달라지네요.","공연에 집중하는 그 표정도 꽤 보기 좋은데요.","좋아요. 오늘은 설명보다 감상이 먼저죠."],["지한이 불꽃이 비치는 강 건너 창을 바라봤다.","저 풍경을 매일 볼 수 있는 집은 꽤 근사하겠네요.","불꽃도 좋은데, 자꾸 다른 데 눈이 가네요.","오늘은 풍경만 같이 봐도 좋죠.","내년에는 이 자리를 누구보다 먼저 예약해 둘까요?"]],"정태오":[["태오가 통로를 막지 않는 쪽으로 걸음을 옮겼다.","직접 만든 물건이 많군요. 천천히 둘러보시죠.","잘 어울립니다. 저도 소중히 사용하겠습니다.","알겠습니다. 혼잡하지 않은 곳부터 보시죠."],["태오가 뜨거운 음식을 나르는 사람들을 피해 섰다.","이쪽에서 먹으면 비교적 안전하겠습니다.","감사합니다. 천천히 드십시오.","그럼 식사는 조금 뒤로 미루시죠."],["태오가 관객 사이에 자리를 잡았다.","오늘은 근무가 아니니 공연을 제대로 감상할 수 있겠군요.","좋은 무대였습니다. 준비를 많이 한 듯합니다.","조용히 보는 편도 좋겠습니다."],["태오가 사람이 적고 시야가 트인 장소를 골랐다.","이 위치라면 불꽃이 잘 보이겠습니다.","…오늘은 조금 더 가까이 계셔도 됩니다.","알겠습니다. 이 거리에서 함께 보시죠.","다음에도 휴무를 맞춰 볼 수 있으면 좋겠습니다."]],"임하나":[["하나가 손뜨개로 만든 작은 파우치 앞에 멈췄다.","저 이런 데서 직접 물건 골라 본 적이 별로 없어요.","……제가 고른 것도 마음에 들어요? 기뻐요.","네. 오늘은 가격표만 보고 지나가지 않아도 되죠."],["하나가 간식 냄새를 맡고 작게 웃었다.","저, 오늘은 먹고 싶은 걸 먼저 골라도 될까요?","맛있어요. 이렇게 나눠 먹는 것도 좋네요.","네. 조금 더 구경하고 제가 먹고 싶은 걸 찾아볼래요."],["하나가 무대를 보며 손을 모았다.","지안 씨, 저렇게 춤추는 모습은 처음 제대로 봐요.","저도 좋아하는 일을 할 때 저런 표정이면 좋겠어요.","……가만히 봐도 충분히 멋있네요."],["하나가 첫 불꽃을 보고 숨을 들이켰다.","와… 사진에서 보던 것보다 훨씬 예뻐요.","저, 오늘은 제가 먼저 손을 잡아도 될까요?","이렇게 같이 보는 것만으로도 행복해요.","내년에도 저를 위한 시간을 만들어 보고 싶어요."]],"차유리":[["유리가 직접 그린 엽서와 소품을 살펴봤다.","오, 저 작가 색 쓰는 거 좋다!","서로 고른 거 완전 다르네요. 이래서 같이 보는 게 재밌다.","좋아요. 오늘은 작업 아이디어만 잔뜩 얻어 가죠."],["유리가 형형색색의 포장지를 찍었다.","야시장은 음식보다 색감이 먼저 눈에 들어오네요.","맛도 색만큼 괜찮네! 사진 남겨도 돼요?","오케이. 저는 간판 사진 좀 찍고 갈래요."],["유리가 무대 뒤편의 색 조명을 바라봤다.","저 조명 디자인 꽤 괜찮네요. 지안 씨도 멋지고.","좋다! 움직임이랑 색이 딱 맞아떨어지네.","여기서 조용히 보면 구도도 잘 보여요."],["유리가 불꽃이 강물에 퍼지는 순간을 카메라에 담았다.","와, 이 색은 실제로 봐야 하네요.","오늘은 사진 그만 찍고 옆에 좀 기대도 돼요?","오, 각자 자기 방식으로 보는 것도 좋죠.","내년엔 저도 제 그림 들고 플리마켓에 나올까 봐요."]],"오세린":[["세린이 동물 모양의 작은 도자기를 바라봤다.","어머, 손으로 빚은 모양이 참 귀엽네요.","아아, 서로 생각해서 고른 물건이라 더 좋네요.","네. 꼭 사지 않아도 구경하는 재미가 있죠."],["세린이 따뜻한 차를 파는 가판대를 찾았다.","으음, 향이 좋네요. 잠깐 쉬어 갈까요?","이렇게 조금씩 나누니 여러 맛을 즐길 수 있겠어요.","그럼 천천히 걸으면서 쉬어 가요."],["세린이 무대의 박자에 맞춰 고개를 끄덕였다.","자기 일을 즐기는 모습은 참 보기 좋네요.","아아, 저도 덩달아 기분이 좋아졌어요.","가만히 감상하는 시간도 참 좋네요."],["세린이 불꽃을 바라보다 천천히 숨을 내쉬었다.","밤공기가 조금 차가워졌네요.","잠시 손을 맞잡고 있어도 괜찮을까요?","이렇게 나란히 있는 것만으로도 충분해요.","내년에도 각자 건강히 지내다 여기서 만나면 좋겠어요."]],"유지안":[["지안이 반짝이는 머리핀과 액세서리를 번갈아 들어 봤다.","와우, 이거 무대 의상에 달아도 예쁘겠다!","헐, 서로 골라 준 거 완전 잘 어울려요!","좋죠! 오늘은 영감 충전만 해도 성공!"],["지안이 간식 가판대를 보며 손을 번쩍 들었다.","공연 끝났으니까 오늘은 먹어도 됨! 뭐 먹어요?","예쓰! 무대 뒤에서 먹는 간식보다 훨씬 맛있다!","넵! 조금 쉬었다가 먹을래요."],["지안이 무대 의상을 정리하며 당신에게 돌아왔다.","와, 오늘 공연 끝! 객석에서 봤어요?","박수 소리 진짜 잘 들렸어요! 와 줘서 고마워요.","조용히 봐 줬어도 괜찮아요. 같이 있어 줬잖아요."],["지안이 불꽃이 터지자 두 팔을 들어 올렸다가 웃었다.","헐, 오늘 엔딩 연출 완벽하잖아!","있잖아요. 공연 잘했다고 한 번 안아 줘도 돼요?","좋죠! 이번엔 눈으로만 엔딩 감상하기!","내년에는 더 멋진 무대 준비해 올게요!"]],"공재희":[["재희가 토끼 모양 키링을 들어 당신 앞에 흔들었다.","헐 이거 완전 내 취향ㅋㅋ 그쪽은 뭐 좋아해요?","아 귀여워. 가방에 같이 달면 되겠다ㅋㅋ","웅. 사진만 찍어도 귀엽네."],["재희가 딸기 사탕 가판대를 보자 걸음을 멈췄다.","아 이거 먹고 싶음. 같이 먹을래요?","헐 맛있다ㅋㅋ 마지막 하나는 반 나눠요.","ㅇㅋ. 나중에 먹고 싶으면 말해요."],["재희가 무대를 찍다가 휴대전화를 내렸다.","와 지안 씨 실물 무대 대박인데요?","나도 모르게 박수쳤음ㅋㅋ 진짜 멋있다.","웅. 화면 말고 그냥 눈으로 봐야겠다."],["재희가 불꽃이 터지자 당신을 올려다봤다.","헐… 사진으로 찍으면 이 느낌 안 날 듯.","아 나 지금 손 잡고 싶음. 그래도 돼요?","웅. 그냥 옆에서 같이 봐요. 이거 좋다ㅋㅋ","내년에도 여기 오고 싶다… 같이 오면 더 좋고."]]};
function renderAutumnDate(ev,p){if(!romanceBonusAllowed(ev,'autumnDate'))return false;const v=initSim(),f=flirtRecord(p),day=ev.day||v.day;if(!ev.autumnDate){if(day<215||day>275||weatherFor(day).name==='비'||f.seen.autumnLeaves||relationshipTier(p)<2)return false;ev.autumnDate={context:seasonContext(p,day)};save()}const o=ev.autumnDate,c=o.context,a=autumnVoices[p],idx=summerNightTouch[p],canTouch=c.romantic&&!c.conflicted&&!c.tired&&touchOutcome(p,c,idx).accepted;add('이야기','바람이 불 때마다 가로수에서 낙엽이 떨어졌다. 해가 기울자 공기가 한층 차가워졌다.');add('이야기',a[0]);add(p,c.conflicted?touchProfiles[p].hurt[1]:a[1]);const remembered=rememberedSummer(p,day);if(remembered&&!c.conflicted)add(p,remembered);if(canTouch){add('이야기',a[2]);add(p,a[3])}if(o.answer){add(state.name,o.answer.label,true);if(o.answer.narration)add('이야기',o.answer.narration);add(p,o.answer.reply);return false}const opts=canTouch?[['좋아요. 가까이 있어요.',0],['이대로 조금 더 걸어요.',1],['오늘은 이쯤에서 돌아가요.',2]]:[['따뜻한 음료를 마시며 쉬어요.',1],['오늘은 이쯤에서 돌아가요.',2]];for(const [label,i] of opts)choiceButton(label,()=>{if(o.answer)return;const close=i===0&&canTouch,reply=close?playerTouchScenes[p][3+idx*2]:i===1?a[5]:touchProfiles[p].quiet[4];o.answer={label,reply,narration:close?playerTouchScenes[p][2+idx*2]:i===1?a[4]:''};if(close)f.touches.push({day,type:touchTypes[idx],scene:'autumnLeaves'});saveSeasonChoice(p,'autumnLeaves',day,i,{close,interest:close?2:0,security:i===1?2:1},reply);save();renderChoiceEvent();renderSim()});return true}
function festivalCanTouch(p,c){return c.romantic&&!c.conflicted&&!c.tired&&touchOutcome(p,c,summerNightTouch[p]).accepted}

const winterVoices={"서이준":[["이준이 길고양이 급식소 지붕에 쌓인 눈을 털어 냈다.","…눈 오는 건 좋은데 녀석들 밥이 얼면 곤란하거든요.","급식소 옆에 작은 눈고양이를 만든다","이준이 눈고양이의 귀를 다듬었다.","…이 녀석은 추위 걱정 없겠네요."],["이준이 붕어빵 봉지에서 김이 올라오는 것을 살폈다.","팥이랑 슈크림 하나씩 샀어요. 어떤 거 먹을래요?","따뜻한 붕어빵을 나눠 먹는다","이준이 봉지를 당신 쪽으로 기울였다.","…내년에도 이 가게가 있으면 좋겠네요."],"이준이 장갑 한쪽을 벗었다.","…손 잡고 걸어도 돼요?","이준이 손가락을 맞물리고 걸음을 늦췄다.","이렇게 걸으면 추운 것도 덜 신경 쓰이네요.","이준이 장갑을 다시 끼우고 따뜻한 음료를 건넸다.","오늘은 이걸로 손 녹여요."],"강도윤":[["도윤이 모카의 등에 내려앉은 눈을 보고 웃었다.","하하, 얘는 눈만 오면 어린애가 된다니까요.","모카와 함께 눈길을 산책한다","도윤이 모카의 목줄을 잡고 보폭을 맞췄다.","이런 날 같이 나와 주는 사람까지 있으니 좋네요."],["도윤이 붕어빵 봉지를 열었다.","카페 디저트랑은 다른 맛이죠. 추울 때 먹으면 더 맛있고요.","도윤에게 먼저 붕어빵을 건넨다","도윤이 웃으며 자기 몫을 받았다.","하하, 오늘은 제가 챙김받는 날인가 봐요."],"도윤이 당신 옆에 앉아 팔을 살짝 벌렸다.","오늘은 제가 좀 기대도 될까요?","도윤이 당신의 어깨에 기대어 숨을 내쉬었다.","따뜻하네요. 가게 돌아가기 싫겠는데요.","도윤이 핫팩을 꺼내 건넸다.","오늘은 따뜻한 것만 먹고 쉬어도 충분해요."],"한시우":[["시우가 눈 위에 발자국을 남겼다.","와, 눈 맵 열렸다! 눈사람 만들기 대결 할래요?","작은 눈사람을 같이 만든다","시우가 눈사람 옆에 별을 그렸다.","좋아! 협동 미션 클리어. 인증샷 찍자!"],["시우가 붕어빵 진열대 앞에서 심각한 표정을 지었다.","팥붕이냐 슈붕이냐… 진짜 중요한 문제인데요?","서로 다른 맛을 비교한다","시우가 한입 먹고 고개를 끄덕였다.","둘 다 S티어! 밸런스 패치 필요 없음."],"시우가 오른손을 내밀었다. 왼손은 주머니에 넣은 채였다.","저 오른손은 멀쩡함! 잡아 볼래요?","시우가 손을 맞잡고 쑥스럽게 웃었다.","와, 겨울 보온 버프 진짜 있네.","시우가 핫팩을 양손으로 감쌌다.","오케이. 오늘은 손목 쉬게 하고 따뜻한 데 가요."],"백지한":[["지한이 눈 쌓인 지붕의 처마선을 살폈다.","이런 날엔 지붕 경사가 중요하죠. 근데 풍경은 근사하네요.","눈 덮인 골목을 함께 구경한다","지한이 오래된 주택의 창을 가리켰다.","저런 창에서 눈 오는 걸 바라보며 살면 어떨까 싶네요."],["지한이 붕어빵 봉지를 건넸다.","비싼 식당 못지않게 좋은 냄새인데요. 겨울 한정 매물이네요.","따뜻할 때 같이 먹는다","지한이 빵을 반으로 갈랐다.","이런 건 좋은 타이밍을 놓치면 손해죠."],"지한이 목도리를 정리하며 눈을 맞췄다.","오늘은 좀 더 가까이 앉고 싶은데. 괜찮아요?","지한이 허락을 확인하고 당신 쪽으로 몸을 기울였다.","추위가 핑계라는 건 이미 아시죠?","지한이 자기 코트 깃을 세웠다.","그럼 각자 따뜻하게 있고 풍경이나 즐기죠."],"정태오":[["태오가 눈 덮인 길의 얼어붙은 곳을 확인했다.","눈은 아름답지만 발밑은 조심하셔야 합니다. 이쪽으로 걸으시죠.","안전한 길로 나란히 걷는다","태오가 미끄럽지 않은 길을 골라 보폭을 맞췄다.","…근무 중이 아니라 이렇게 눈을 보는 것은 오랜만입니다."],["태오가 뜨거운 붕어빵 봉지를 받았다.","추운 날에는 따뜻한 음식이 도움이 됩니다. 하나 드시겠습니까?","태오와 붕어빵을 나눠 먹는다","태오가 당신 몫을 먼저 덜어 두었다.","천천히 드십시오. 아직 따뜻합니다."],"태오가 장갑을 벗고 당신을 바라봤다.","…손을 잡고 걸어도 괜찮으시겠습니까?","태오가 손을 맞잡고 천천히 걸었다.","추우시면 언제든 말씀하십시오.","태오가 사용하지 않은 핫팩을 꺼냈다.","이것을 쓰십시오. 오래 밖에 계시지 않는 편이 좋겠습니다."],"임하나":[["하나가 눈송이를 손바닥에 받아 보고 웃었다.","저… 눈 오는 날은 늘 출근 걱정부터 했는데, 오늘은 그냥 예뻐요.","하나와 작은 눈사람을 만든다","하나가 잎을 눈사람의 눈으로 꽂았다.","……저 이런 사소한 일도 하고 싶었나 봐요."],["하나가 붕어빵 가게 앞에서 멈췄다.","저 어릴 때 동생 것만 사다 줬는데… 오늘은 제가 먹고 싶은 걸 고를래요.","하나가 원하는 맛을 고르게 한다","하나가 따뜻한 봉지를 안았다.","……팥이요. 저는 이게 제일 좋아요."],"하나가 소매 밖으로 손을 꺼냈다.","저, 오늘은 제가 먼저 손 잡고 싶어요. 괜찮아요?","하나가 먼저 손을 맞잡고 작게 웃었다.","……이런 건 이제 제가 먼저 말해도 되는 거죠.","하나가 핫팩을 쥐고 잠시 생각했다.","오늘은 그냥 따뜻한 걸 먹으면서 같이 걸을래요."],"차유리":[["유리가 눈 쌓인 간판을 휴대전화에 담았다.","오, 색이 다 지워진 것 같은데 그 사이로 파란색만 보이네요. 좋다.","각자 마음에 드는 겨울 풍경을 찍는다","유리가 사진 두 장을 나란히 띄웠다.","같은 눈인데 보는 게 완전 다르네. 이래서 같이 다니는 게 재밌어요."],["유리가 붕어빵의 모양을 살펴봤다.","저마다 표정이 조금씩 다른 것 같지 않아요? 이거 찍어도 돼요?","붕어빵을 사진으로 남긴다","유리가 사진을 찍고 한입 베어 물었다.","좋다! 기록 끝, 이제 먹기."],"유리가 카메라를 가방에 넣고 어깨를 기울였다.","오늘은 잠깐 기대도 돼요? 사진 찍는 건 끝났으니까.","유리가 어깨에 기대어 거리를 바라봤다.","오, 이 구도는 사진보다 직접 보는 게 낫네요.","유리가 장갑을 고쳐 끼고 발자국을 바라봤다.","이대로 걷죠. 눈 밟는 소리도 꽤 좋네요."],"오세린":[["세린이 장갑 낀 손으로 눈송이를 받았다.","어머, 눈이 내리네요. 길고양이들이 따뜻한 곳을 찾았으면 좋겠어요.","따뜻한 곳에서 눈을 바라본다","세린이 창가에 차 두 잔을 놓았다.","아아, 이렇게 조용히 내리는 눈을 보니 마음이 편안해요."],["세린이 차와 붕어빵을 테이블에 놓았다.","으음, 어릴 때 먹던 맛이 생각나네요. 하나씩 드실까요?","차를 곁들여 붕어빵을 먹는다","세린이 차를 천천히 따라 주었다.","겨울에는 이런 작은 휴식이 꼭 필요하죠."],"세린이 찻잔을 내려놓고 손바닥을 펼쳤다.","잠시 손을 맞잡고 있어도 괜찮을까요?","세린이 당신의 손을 부드럽게 감쌌다.","따뜻하네요. 손끝까지 마음이 전해지는 것 같아요.","세린이 찻잔을 감싸 쥐었다.","아아, 이렇게 각자 따뜻하게 쉬어도 좋네요."],"유지안":[["지안이 눈 위에 두 발로 박자를 찍었다.","헐, 눈 오는 날은 겨울 뮤비 각! 작은 눈사람 만들어요!","지안과 눈사람을 만든다","지안이 눈사람에 춤추는 포즈를 만들어 주려다 웃었다.","와우, 이 친구 데뷔시켜도 되겠다!"],["지안이 붕어빵 봉지를 보고 두 팔을 들었다.","예쓰! 운동 끝났으니까 오늘은 먹어도 됨!","따뜻한 간식을 같이 먹는다","지안이 한입 먹고 만족스러운 표정을 지었다.","완전 행복하다! 이게 겨울 에너지 충전이지."],"지안이 한쪽 팔을 벌렸다.","있잖아요. 오늘은 잠깐 안아도 돼요?","지안이 당신을 잠시 안았다가 웃었다.","와, 추운 날엔 이런 게 더 따뜻하네요!","지안이 핫팩을 흔들었다.","좋죠! 오늘은 손난로가 대신 안아 주는 날!"],"공재희":[["재희가 검은 코트에 떨어진 눈송이를 찍었다.","헐 검정에 흰색 미쳤다ㅋㅋ 눈사람 만들고 싶어요.","작은 눈사람을 함께 만든다","재희가 눈사람 머리에 작은 리본을 올렸다.","아 귀여워ㅋㅋ 얘 이름 정해 줘요."],["재희가 붕어빵을 양손으로 감쌌다.","아 나 슈붕 먹고 싶음. 그쪽도 하나 골라요ㅋㅋ","재희와 붕어빵을 나눠 먹는다","재희가 봉지를 내려다보고 웃었다.","헐 따뜻하다. 이거 사진 찍고 바로 먹어야 됨."],"재희가 소매에서 손을 내밀었다.","아 나 손 시림… 손 잡고 가면 안 돼요?","재희가 손가락을 꼭 얽고 걸음을 맞췄다.","웅… 이거 좋아요. 근데 장갑도 사야겠다ㅋㅋ","재희가 핫팩을 꾹 쥐었다.","웅. 오늘은 이렇게 따뜻하게 같이 가요."]};
function renderWinterDate(ev,p){if(!romanceBonusAllowed(ev,'winterDate'))return false;const v=initSim(),f=flirtRecord(p),day=ev.day||v.day,w=weatherFor(day).name,id=w==='눈'?'winterSnow':'winterWarm';if(!ev.winterDate){if(seasonInfo(day).index!==3||[299,300].includes(day)||f.seen[id]||relationshipTier(p)<2)return false;ev.winterDate={id,context:seasonContext(p,day),firstSnow:id==='winterSnow'&&!Array.from({length:Math.max(0,day-276)},(_,i)=>276+i).some(d=>weatherFor(d).name==='눈')};save()}const o=ev.winterDate,c=o.context,a=winterVoices[p],scene=a[o.id==='winterSnow'?0:1],idx=summerNightTouch[p],canTouch=c.romantic&&!c.conflicted&&!c.tired&&touchOutcome(p,c,idx).accepted;add('이야기',o.id==='winterSnow'?(o.firstSnow?'연화동에 올해의 첫눈이 내린다.':'하얀 눈이 연화동 골목을 채우고 있다.'):'입김이 하얗게 번지는 거리에서 갓 구운 붕어빵 냄새가 난다.');add('이야기',scene[0]);add(p,c.conflicted?touchProfiles[p].hurt[1]:scene[1]);const drinkRecall=rememberedDrink(p,day);if(drinkRecall&&!c.conflicted&&!c.tired)add(p,drinkRecall);if(o.activity){add(state.name,o.activity.label,true);add('이야기',o.activity.narration);add(p,o.activity.reply)}else{for(const [label,i] of [[c.conflicted?'오늘은 조금 천천히 걸어요.':scene[2],0],['추우니 잠깐 따뜻한 곳에서 쉬어요.',1]])choiceButton(label,()=>{if(o.activity)return;const active=i===0&&!c.conflicted;o.activity={label,narration:active?scene[3]:a[6],reply:active?scene[4]:a[7]};save();renderChoiceEvent();renderSim()});return true}if(canTouch){add('이야기',a[2]);add(p,a[3])}if(o.answer){add(state.name,o.answer.label,true);add('이야기',o.answer.narration);add(p,o.answer.reply);return false}const opts=canTouch?[['좋아요. 가까이 있어요.',0],['오늘은 핫팩이나 따뜻한 음료면 충분해요.',1]]:[['이대로 따뜻하게 쉬어요.',1]];for(const [label,i] of opts)choiceButton(label,()=>{if(o.answer)return;const close=i===0&&canTouch,reply=close?a[5]:a[7];o.answer={label,reply,narration:close?a[4]:a[6]};if(close)f.touches.push({day,type:touchTypes[idx],scene:o.id});saveSeasonChoice(p,o.id,day,i,{close,interest:close?2:0,security:close?1:2},reply);save();renderChoiceEvent();renderSim()});return true}

function renderSummerDate(ev,p){if(!romanceBonusAllowed(ev,'summerDate'))return false;const v=initSim(),f=flirtRecord(p),day=ev.day||v.day,w=weatherFor(day).name,id=['장맛비','소나기'].includes(w)?'summerRain':w==='폭염'?'summerHeat':null;if(!ev.summerDate){if(seasonInfo(day).index!==1||!id||f.seen[id]||relationshipTier(p)<2)return false;ev.summerDate={id,context:seasonContext(p,day)};save()}const o=ev.summerDate,c=o.context,a=seasonalVoices[p][o.id==='summerRain'?0:1];add('이야기',a[0]);add(p,a[1]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.narration)add('이야기',o.answer.narration);add(p,o.answer.reply);return false}const rain=o.id==='summerRain',labels=rain?['같이 우산을 쓰고 걸어요.','비가 그칠 때까지 여기서 쉬어요.','오늘은 먼저 돌아갈게요.']:['시원한 간식을 함께 먹어요.','그늘에서 각자 쉬어요.','오늘은 이쯤에서 돌아가요.'];labels.forEach((label,i)=>choiceButton(label,()=>{if(o.answer)return;const result=seasonResult(p,c,o.id,i);const close=result.close;const reply=i===2?touchProfiles[p].quiet[4]:close?a[3]:a[5];o.answer={label,reply,narration:i===2?'':close?a[2]:a[4]};saveSeasonChoice(p,o.id,day,i,result,reply);save();renderChoiceEvent();renderSim()}));return true}
function renderSpringRain(ev,p){if(!romanceBonusAllowed(ev,'springRain'))return false;const v=initSim(),f=flirtRecord(p),day=ev.day||v.day;if(!ev.springRain){if(day<25||day>48||weatherFor(day).name!=='비'||f.seen.springRain||relationshipTier(p)<2)return false;ev.springRain={context:seasonContext(p,day)};save()}const o=ev.springRain,a=springRainScenes[p],b=seasonalVoices[p];if(!o.context){o.context=seasonContext(p,day);save()}const c=o.context,quiet=c.conflicted||c.tired||!c.romantic;add('이야기','봄비가 우산을 두드렸다. 젖은 벚꽃잎이 바람을 타고 두 사람의 어깨와 머리 위로 내려앉았다.');add('이야기',a[0]);add(p,quiet?b[5]:a[1]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.narration)add('이야기',o.answer.narration);add(p,o.answer.reply);return false}const labels=quiet?['알려 줘서 고마워요. 직접 뗄게요.','그쪽에도 꽃잎이 붙었어요. 떼어 드려도 돼요?','그대로 조금 더 걸어요.']:['네. 떼어 주세요.','그쪽에도 꽃잎이 붙었어요. 떼어 드려도 돼요?','괜찮아요. 제가 뗄게요.'];labels.forEach((label,i)=>choiceButton(label,()=>{if(o.answer)return;let result=seasonResult(p,c,'springRain',i),reply,narration='';if(i===0&&!quiet){reply=a[3];narration=a[2]}else if(i===1&&!quiet){const index=['강도윤','차유리','정태오','백지한'].includes(p)?0:2;const accepted=touchOutcome(p,c,index).accepted;result={interest:accepted?2:0,security:1,close:accepted};reply=accepted?a[5]:b[3];narration=accepted?a[4]:b[2]}else if(i===1){reply=b[3];narration=b[2];result={interest:0,security:1,close:false}}else{reply=a[6];result={interest:0,security:2,close:false}}o.answer={label,narration,reply};saveSeasonChoice(p,'springRain',day,i,result,reply);save();renderChoiceEvent();renderSim()}));return true}
function renderSeasonalDate(ev,p){if(!romanceBonusAllowed(ev,'seasonalDate'))return false;const v=initSim(),f=flirtRecord(p),day=ev.day||v.day;if(!ev.seasonalDate){if(day<25||day>48||weatherFor(day).name==='비'||f.seen.springBlossom||relationshipTier(p)<2)return false;ev.seasonalDate={id:'springBlossom',context:seasonContext(p,day)};save()}const o=ev.seasonalDate,a=springDateScenes[p];if(!o.context){o.context=seasonContext(p,day);save()}const c=o.context,quiet=c.conflicted||c.tired||(p==='백지한'&&!c.romantic);add('이야기',quiet?touchProfiles[p].quiet[0]:a[0]);add(p,quiet?touchProfiles[p].quiet[1]:a[1]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.warm&&p==='백지한')add('이야기','지한의 손끝이 머리카락을 가볍게 스쳤다. 손바닥 위에 작은 꽃잎이 놓였다.');add(p,o.answer.reply);return false}const q=touchProfiles[p].quiet;for(const [label,reply,warm] of [[quiet?q[2]:a[2],quiet?q[3]:a[3],!quiet],['오늘은 이대로 돌아가요.',quiet?q[4]:a[4],false]])choiceButton(label,()=>{if(o.answer)return;const result=seasonResult(p,c,'springBlossom',warm?0:2);o.answer={label,reply,warm};saveSeasonChoice(p,'springBlossom',day,warm?0:2,result,reply);save();renderChoiceEvent();renderSim()});return true}
const dateDepthScenes={"서이준":["상영이 끝난 뒤 이준이 한참 동안 빈 화면을 바라봤다.","…주인공이 마지막에 혼자 남는 거, 좀 이해되네요. 그래도 누군가 기다리고 있었다면 달랐을까요.","그 사람에게 돌아갈 곳이 있었으면 좋겠어요.","…저도 그렇게 생각해요. 이상하네요. 예전엔 그런 생각 안 했는데.","이준 씨는 혼자만의 시간도 좋아하잖아요.","…맞아요. 혼자 있는 것과 혼자 남는 건 다르니까.","극장 로비의 불이 하나씩 꺼졌다. 이준이 당신을 바라보며 문을 잡아 주었다.","…다음에는 결말이 행복한 영화로 골라요.","영화가 아니어도, 다음에 또 만나면 되죠.","…그 말이 더 좋네요."],"강도윤":["도윤이 주문한 케이크를 당신 쪽으로 밀다가 포크를 내려놓았다.","하하, 또 제가 먼저 양보했네요. 사실 이 맛 궁금했거든요.","오늘은 도윤 씨가 첫 입 먹어요.","……좋아요. 그럼 제가 먼저 먹을게요. 기분 좋네요.","반씩 나눠 먹어요. 둘 다 맛볼 수 있게.","하하, 그게 제일 좋겠네요. 정말 반씩 나눌게요.","도윤은 자신의 몫을 남겨 두고 천천히 디저트를 먹었다.","오늘은 누군가를 대접하는 날이 아니라 같이 노는 날이네요.","다음에도 손님으로 만나기로 해요.","약속이죠. 오늘처럼 저도 제 몫 챙길게요."],"한시우":["시우가 오락실의 점수판을 보다가 손목을 털었다. 잠깐 표정이 굳었다.","앗, 습관 나왔다. 기록 깨려고 무리할 뻔했네.","오늘은 점수 말고 둘이 즐기는 게 목표예요.","오케이! 그거 좋은 퀘스트네요. 지금부터 즐겜 모드!","손목 괜찮을 때 다시 해요. 지금은 다른 거 할까요?","콜. 아픈데 굳이 할 필요 없죠. 다음 종목 뭐예요?","시우가 조작이 가벼운 게임 쪽으로 걸어가다가 웃었다.","저 오늘 이겨야 한다는 생각보다 재밌다는 생각이 더 많았어요.","다음에도 부담 없이 놀러 와요.","히히, 그럼 다음엔 제가 간식도 사 올게요."],"정태오":["태오가 휴대전화의 근무 알림을 확인하고 잠시 고개를 숙였다.","휴무인데도 습관적으로 확인하게 됩니다. 조금 이상하지요.","오늘은 일 생각을 잠시 내려놓아도 괜찮아요.","…알겠습니다. 지금은 함께 보내는 시간이지요.","필요한 연락만 확인하고 다시 걸어요.","좋습니다. 기다려 주셔서 감사합니다.","태오가 휴대전화를 주머니에 넣고 걸음을 늦췄다.","오늘은 서두르지 않아도 되겠군요.","우리 조금 천천히 걸어요.","…그렇게 하겠습니다."],"백지한":["지한이 건축 모형 앞에서 당신의 감상을 듣다가 설명을 멈췄다.","제가 또 제 얘기만 했네요. 어떤 집이 떠올라요?","편하게 돌아올 수 있는 집이요.","…좋네요. 저도 그런 집을 만들고 싶었어요.","아직은 잘 모르겠어요. 더 둘러보고 싶어요.","좋아요. 제 답을 따라갈 필요는 없죠.","지한이 모형 대신 당신의 표정을 살폈다.","이렇게 같이 보니까 제가 놓친 부분이 보이네요.","다음엔 지한 씨가 꿈꾸는 집 이야기도 듣고 싶어요.","좋아요. 그 이야기는 조금 길어질지도 몰라요."],"임하나":["하나가 수조 앞의 안내판을 읽다가 작은 기념품 가게를 돌아봤다.","저… 오늘은 저 때문에 일정이 늦어져도 괜찮을까요? 조금 더 보고 싶어서요.","하나 씨가 보고 싶은 만큼 봐요.","……네. 그럼 저쪽도 가 보고 싶어요.","시간을 확인하고 여유 있는 만큼 둘러봐요.","좋아요. 저도 시간을 같이 정하고 싶어요.","하나는 처음보다 한결 편안한 얼굴로 기념품을 골랐다.","이렇게 제가 하고 싶은 걸 말해도 되는 게 좋네요.","다음에 가고 싶은 곳도 말해 줘요.","네. 다음엔 제가 먼저 이야기할래요."],"차유리":["유리가 전시의 한 작품 앞에서 걸음을 멈췄다. 제목을 확인하고 작게 웃었다.","사람마다 다르게 보이겠죠? 이 그림 보면 무슨 생각이 들어요?","유리 씨랑은 다른 색이 먼저 보여요.","오, 좋아요! 그게 더 재밌다. 어떤 색인지 알려 줘요.","유리 씨가 먼저 느낀 걸 듣고 싶어요.","좋아요. 근데 정답은 아니니까 편하게 들어요.","두 사람은 작품을 한참 보다가 각자의 감상을 남겼다.","오늘 본 거 작업할 때 생각날 것 같아요.","완성하면 보여 줘요. 기다릴게요.","오케이. 제가 보여 주고 싶을 때 꼭 보여 줄게요."],"오세린":["세린이 수조 앞 벤치에 앉아 물고기 떼를 바라봤다.","으음, 이렇게 아무것도 하지 않는 시간도 있어야겠죠?","같이 아무것도 안 해도 좋아요.","아아, 그 말이 참 편안하네요.","조금 쉬고 나서 다른 수조도 볼까요?","네. 천천히 움직여요.","물빛이 벤치와 두 사람의 손등 위로 번졌다.","오늘은 마음이 조용해지는 것 같아요.","다음에도 이런 시간을 만들어요.","네. 서로 지치지 않는 속도로요."],"유지안":["지안이 놀이공원의 음악에 발을 맞추다 문득 공연장 쪽을 바라봤다.","와우, 저기 무대 좋다! …예전에는 저런 데 서는 게 전부인 줄 알았어요.","지금도 춤추는 지안 씨가 좋아 보여요.","……예쓰. 그 말 진짜 좋다!","무대 말고도 하고 싶은 게 있으면 같이 이야기해요.","좋아요! 꿈 하나만 있어야 하는 건 아니니까요.","지안은 공연이 끝날 때까지 박수를 치고 활짝 웃었다.","오늘은 관객으로 즐기는 것도 좋네요!","다음에는 지안 씨가 좋아하는 공연을 보러 가요.","와우, 완전 약속!"],"공재희":["재희가 인형뽑기 기계 앞에서 실패한 영상들을 지우다가 웃었다.","헐ㅋㅋ 이거 방송이면 채팅창 난리 났겠는데. 오늘은 그냥 둘이 보는 거죠?","오늘은 방송 말고 우리 추억으로 남겨요.","웅ㅋㅋ 그럼 실패한 것도 안 지울래요.","원하면 나중에 보여 줘도 돼요. 재희 씨가 정해요.","오케이ㅋㅋ 내 거니까 내가 정하기.","재희가 휴대전화를 넣고 작은 인형을 바라봤다.","오늘은 조회수 없어도 개재밌네.","다음에도 그냥 놀러 와요.","웅! 알림 없이도 약속 지킴ㅋㅋ"]};
function dateDepthRecord(p){const z=socialRecord(p);return z.dateDepth||(z.dateDepth={seen:{},history:[]})}
function renderDateDepth(ev,p){if(!romanceBonusAllowed(ev,'dateDepth'))return false;const v=initSim(),a=dateDepthScenes[p],r=dateDepthRecord(p);if(!a||platonicOnly(p)||ev.venue&&ev.venue!==dateLines[p][0]||touchContext(p,v.day).conflicted)return false;if(!ev.dateDepth){if(r.seen.first||relationshipTier(p)<2)return false;ev.dateDepth={step:0};save()}const o=ev.dateDepth;add('이야기',a[0]);add(p,a[1]);if(o.first){add(state.name,o.first.label,true);add(p,o.first.reply);add('이야기',a[6]);add(p,a[7]);if(o.second){add(state.name,o.second.label,true);add(p,o.second.reply);return false}for(const [label,reply,i] of [[a[8],a[9],0],['오늘은 여기까지 이야기해요.',npcVoice[p][0],1]])choiceButton(label,()=>{if(o.second)return;o.second={label,reply};r.seen.first=v.day;r.history.push({day:v.day,first:o.first.label,second:label});if(vIsDating(p))feel(p,{security:2});remember(p,'dateDepth:first',o.first.label+' / '+label);save();renderChoiceEvent();renderSim()});return true}for(const [label,reply] of [[a[2],a[3]],[a[4],a[5]]])choiceButton(label,()=>{if(o.first)return;o.first={label,reply};save();renderChoiceEvent()});return true}

const heartMomentScenes={"서이준":[["이어폰 한 쪽","이준이 이어폰을 한 쪽 빼서 내밀었다. 음악이 시작되자 자연스럽게 어깨가 가까워졌다.","…이 곡, 혼자 듣기엔 좀 아깝더라고요.","이준 씨랑 같이 듣고 싶어요.","…그럼 끝까지 듣고 가요. 움직이지 말고.","제목만 알려 주세요. 나중에 들을게요.","그래요. 보내 드릴게요."],["돌아가는 길","역 입구에서 인사를 나눴는데 이준이 그대로 서 있었다. 당신이 돌아보자 시선이 마주쳤다.","…왜 돌아봐요. 제가 또 붙잡고 싶어지잖아요.","조금 더 같이 걸어요.","…좋아요. 한 정거장 정도는 걸어도 되겠죠.","다음에 또 봐요.","…네. 도착하면 연락해요."]],"강도윤":[["입가의 크림","도윤이 웃다가 당신의 입가를 가리켰다. 손에 들고 있던 냅킨을 내밀었다.","여기 크림 묻었어요. 제가 닦아 드려도 돼요?","네, 부탁해요.","하하… 이렇게 가까이서 보니까 제가 더 떨리네요.","제가 닦을게요. 고마워요.","좋아요. 여기 냅킨 더 있어요."],["느려진 걸음","도윤이 귀갓길의 가로등을 올려다보다 걸음을 늦췄다.","이상하네요. 평소엔 이 길이 꽤 길게 느껴졌는데 오늘은 짧아요.","저도 조금 더 걷고 싶어요.","하하, 그럼 저 골목까지 돌아갈까요?","다음 휴일에 또 걸어요.","좋아요. 그날을 기다릴게요."]],"한시우":[["반사적인 하이파이브","게임이 끝나고 시우가 손바닥을 내밀었다. 당신을 보고 활짝 웃었다.","오예! 하이파이브! …아, 손 잡고 있는 건 반칙인가?","하이파이브 말고 손잡을래요?","와, 잠깐만. 심박수 왜 이러지? 오케이!","하이파이브만 해요!","콜! 오늘 팀워크 만점!"],["작별 연장전","시우가 시간을 확인하고는 당신 쪽으로 몸을 돌렸다.","아니 벌써 이 시간이에요? 저 오늘 좀 더 보고 싶은데.","조금 더 걸을까요?","히히, 좋아요. 아까 하던 얘기 마저 해 줘요.","오늘은 먼저 갈게요.","오케이! 집 가서 푹 쉬어요."]],"정태오":[["건널목","신호를 기다리는 동안 태오가 당신의 옆에 서서 잠시 손을 내려다봤다.","…손을 잡고 걸어도 되겠습니까? 안전 때문만은 아닙니다.","네. 저도 잡고 싶어요.","…감사합니다. 조금 긴장되는군요.","그냥 나란히 걸어요.","알겠습니다. 보폭을 맞추겠습니다."],["늦은 인사","태오가 인사를 한 뒤에도 한동안 발걸음을 떼지 않았다.","…오늘은 제가 먼저 아쉽다는 말씀을 드리고 싶었습니다.","저도 그래요. 잠깐 더 걸어요.","좋습니다. 이번에는 제가 시간을 조금 더 내겠습니다.","오늘은 푹 쉬어요.","알겠습니다. 다음 휴무를 기다리겠습니다."]],"백지한":[["시선","지한이 당신에게 무언가 설명하다 말을 멈췄다. 잠시 눈을 맞춘 채 웃었다.","왜 그렇게 봐요. 제가 하던 말도 잊게.","그냥 지한 씨 보고 있었어요.","……그런 대답은 예상 못 했는데. 오늘은 제가 졌네요.","아까 이야기 계속해 줘요.","좋아요. 어디까지 이야기했더라."],["현관 앞","지한이 작별 인사를 하다 고개를 기울였다. 조금 아쉬운 표정이었다.","다음 약속을 정하고 나면 오늘 보내기가 좀 나을 것 같은데요.","그럼 지금 정해요.","좋아요. 이제 기다릴 이유가 생겼네요.","다음에 연락해서 정해요.","…좋아요. 기다릴게요."]],"임하나":[["나란한 손","하나의 손등이 당신의 손에 가볍게 닿았다. 하나가 손을 거두려다 조심스레 물었다.","저… 손 잡고 걸어도 될까요? 제가 먼저 잡고 싶어서요.","물론이죠.","……네. 오늘은 제가 먼저 잡을래요.","오늘은 그냥 같이 걸어요.","네. 나란히 걷는 것도 좋아요."],["한 번 더 돌아보기","하나가 돌아가려다 다시 당신을 바라봤다. 가방 끈을 꼭 쥐고 있었다.","저… 사실 조금 더 같이 있고 싶어요.","저도요. 조금만 더 이야기해요.","……다행이다. 말해서 정말 다행이에요.","다음에 오래 봐요.","네. 다음에는 시간을 조금 더 내 볼게요."]],"차유리":[["사진 속 거리","유리가 휴대전화를 들었다. 화면에 두 사람의 얼굴이 들어오자 웃으며 고개를 갸웃했다.","오, 각도 좋다. 조금 더 가까이 와 볼래요?","같이 더 가까이 찍어요.","좋다! 이 표정은 꼭 간직하고 싶네.","지금 거리도 좋아요.","오케이. 지금 이대로도 잘 나와요."],["남겨 둔 사진","유리가 오늘 찍은 사진을 넘기다가 한 장에서 멈췄다.","오, 이거 되게 좋아요. 오늘 좀 아쉽네.","다음 사진도 같이 찍어요.","좋다. 다음엔 내가 또 좋은 장소 찾아올게요.","오늘 사진 보내 줘요.","오케이! 예쁘게 나온 거 전부 보내 줄게요."]],"오세린":[["찻잔 너머","세린이 찻잔을 두 손으로 감싼 채 당신을 바라봤다. 눈이 마주치자 부드럽게 웃었다.","으음, 오늘은 자꾸 당신 쪽을 보게 되네요.","저도 세린 씨 보고 있었어요.","아아… 그러면 조금 부끄러워지네요. 좋은 기분이에요.","차 맛이 참 좋네요.","후후, 그렇지요? 천천히 마셔요."],["남은 온기","세린이 식어 가는 차를 보며 작은 미소를 지었다.","아아, 이렇게 시간이 빨리 가는 줄 몰랐네요.","조금 더 머물러도 괜찮아요.","네. 그럼 오늘은 조금 더 이 시간을 누려요.","다음에 차 마셔요.","네. 다음에도 따뜻하게 맞이할게요."]],"유지안":[["사진 속 표정","지안이 쇼윈도에 비친 두 사람을 보다가 휴대전화를 꺼냈다.","와우, 오늘 둘 다 옷 잘 입었는데요? 같이 사진 찍을래요?","좋아요. 가까이 와요.","아하하! 잠깐, 너무 가까우면 표정 관리 안 되는데.","조금 떨어져서 찍어요.","좋아요! 전신도 나오게 찍죠."],["다음 골목","지안이 갈림길 앞에서 걸음을 멈췄다. 가야 할 방향을 보고도 발을 떼지 않았다.","저기 골목에 맛있는 거 판대요. 사실 배는 안 고픈데…… 조금 더 같이 가고 싶어서요.","같이 구경하러 가요.","아, 좋아요. 오늘 진짜 잘 놀았다.","다음에 같이 가요.","좋아요! 다음에는 배 비워 올게요."]],"공재희":[["셀카","재희가 셀카 화면을 켜고 당신 옆으로 다가오다 멈췄다.","헐ㅋㅋ 같이 찍자. 좀 붙어도 됨?","좋아요. 같이 찍어요.","뭐야ㅋㅋ 가까이 있으니까 좀 떨리는데?","조금 떨어져서 찍어요.","ㅇㅋㅇㅋ 각도 맞춰 볼게요."],["아쉬운 작별","재희가 휴대전화를 켰다가 화면을 껐다. 당신이 돌아갈 방향을 보고 입술을 삐죽였다.","아니 벌써 감? 오늘 개빨리 지나갔는데.","조금 더 같이 있어요.","웅ㅋㅋ 좋다. 사실 나 더 보고 싶었음.","다음에 또 놀아요.","ㅇㅋ… 집 도착하면 톡해요."]]};
function heartMomentRecord(p){const z=socialRecord(p);return z.heartMoments||(z.heartMoments={seen:{},history:[]})}
function heartMomentCandidate(p,day){if(platonicOnly(p)||relationshipTier(p)<2||!socialRecord(p).contact)return -1;const c=touchContext(p,day),r=heartMomentRecord(p);if(c.conflicted||c.tired||r.last&&day-r.last<10)return -1;if(!vIsDating(p)&&socialRecord(p).interest<3&&flirtRecord(p).interest<3)return -1;return !r.seen[0]?0:!r.seen[1]&&(vIsDating(p)||relationshipTier(p)>=3)?1:-1}
function renderHeartMoment(ev,p){if(!romanceBonusAllowed(ev,'heartMoment'))return false;const v=initSim(),r=heartMomentRecord(p);if(!ev.heartMoment){const i=heartMomentCandidate(p,v.day);if(i<0)return false;ev.heartMoment={i,context:touchContext(p,v.day)};save()}const o=ev.heartMoment,a=heartMomentScenes[p][o.i];add('이야기',a[1]);add(p,a[2]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.narration)add('이야기',o.answer.narration);add(p,o.answer.reply);return false}const touches=o.i===0&&['한시우','정태오','임하나','유지안','강도윤','차유리','공재희'].includes(p);for(const [label,warm] of [[a[3],true],[a[5],false]])choiceButton(label,()=>{if(o.answer)return;const context=touchContext(p,v.day),accepted=warm&&(!touches||!context.conflicted&&!context.tired),reply=accepted?a[4]:a[6];o.answer={label,reply,warm,accepted,narration:accepted&&touches?(['한시우','정태오','임하나'].includes(p)?'서로 손을 내밀어 가볍게 잡았다.':'서로 편안한 거리를 확인한 뒤 조금 가까워졌다.'):''};r.seen[o.i]=v.day;r.last=v.day;r.history.push({day:v.day,i:o.i,warm,accepted,label});if(accepted){v.affection[p]=Math.min(999,v.affection[p]+2);if(!vIsDating(p))socialRecord(p).interest++;if(touches&&['한시우','정태오','임하나'].includes(p))flirtRecord(p).touches.push({day:v.day,type:'손잡기',scene:'heartMoment'})}feel(p,{security:1});remember(p,'heartMoment:'+o.i,label+' / '+reply);writeJournal(p+' · '+a[0]);save();renderChoiceEvent();renderSim()});return true}

const firstDessertStops=[
  ['약속 장소에서 만나 가게까지 함께 걸었다.',null,[
    ['오늘 같이 나오길 잘했어요.','저도요. 여기 올 때마다 한 개만 고르기가 어렵더라고요.',2],
    ['도윤 씨도 여기 자주 와요?','전에는 포장만 해 갔어요. 앉아서 먹는 건 저도 처음이에요.',1]]],
  ['진열장 앞에서 도윤이 메뉴판을 살짝 옆으로 밀었다. 내 자리에서도 맨 아래 칸이 보였다.','저 레몬 타르트 보고 있었어요. 뭐가 제일 눈에 들어와요?',[
    ['저도 레몬이요. 위에 껍질을 얇게 올렸네요.','그러네요. 저 얇은 거 하나 올리려고 손이 꽤 갔겠는데요.',2],
    ['저는 옆에 있는 초콜릿 케이크요.','아, 단면 봐요. 가운데 한 층만 유난히 두껍네요.',2]]],
  ['자리를 잡고 앉자 각자 고른 디저트가 작은 접시에 담겨 나왔다.','사진 먼저 찍는 편이에요? 저 방금 포크부터 들었는데.',[
    ['잠깐만요. 도윤 씨 접시도 나오게요.','그럼 이쪽으로 돌릴게요. 이쪽이 좀 덜 찌그러졌어요.',2],
    ['그냥 먹어요. 저도 포크 들었어요.','하하, 그럼 잘 먹겠습니다.',1]]],
  ['도윤이 타르트를 한 입 먹다가 웃었다.','생각보다 시네요. 방금 저 눈 감은 거 봤어요?',[
    ['네. 맛 표현은 그걸로 충분했어요.','하하, 손님 앞에서 시식할 때 조심해야겠어요.',3],
    ['전 그 정도로 신 게 좋아요.','그럼 여기 타르트는 기억해 둬도 되겠어요.',2]]],
  ['빈 접시를 돌려주고 가게 밖으로 나왔다.',null,[
    ['다음엔 제가 좋아하는 가게도 알려 드릴게요.','좋아요. 거기선 제가 추천받을게요.',3],
    ['잘 먹었어요. 조심히 들어가세요.','네, 오늘 와 줘서 고마워요. 가게에서 또 봐요.',1]]]
];
function renderDateEvent(ev){if(platonicOnly(ev.person)){renderPlatonicDate(ev);return}if(ev.venue==='홈데이트'){renderHomeDate(ev);return}if(ev.venue&&ev.venue!==dateLines[ev.person][0]){renderExtraDate(ev);return}const v=initSim(),p=ev.person,a=dateLines[p],h=dateHeartScenes[p];ev.dateSteps=ev.dateSteps||[];const steps=ev.dateSteps;const stage=steps.length;$('progress').textContent='외출 약속 · '+a[0]+' · '+Math.min(stage+1,5)+'/5';const hist=dateHistory(p).filter(x=>x.day<ev.day);if(hist.length)dateRecall(p,ev);else add(p,meetingCall(p,ev,'npc',a[1]));if(ev.dateDisclosed)add(p,dateConfirmLines[p][1]);const scenes=[['이야기','약속 장소에서 만났다. 함께 목적지로 향하기로 했다.'],['이야기',h[0]],['이야기',a[2]],['이야기',h[4]],['이야기','이제 돌아갈 시간이다.']];const opts=[[['오늘 같이 나오길 잘했어요.','저도 오늘을 기다렸어요.',2],['편하게 즐기다 가요.','좋아요.',1]],[ [h[2],h[3],4],['괜찮아요. 조금 떨어져서 갈게요.','네. 편하게 가요.',0]],[['다음에는 제가 좋아하는 곳도 같이 가요.','좋아요. 궁금하네요.',2],['오늘 여기 오길 잘했네요.','그러게요. 즐겁네요.',1]],[['저도 조금 더 같이 있고 싶어요.',h[5],4],['오늘은 이쯤에서 돌아갈까요?','좋아요. 조심히 돌아가요.',0]],[['다음에도 둘이서 만나고 싶어요.','저도 다음 약속을 기다릴게요.',3],['오늘 즐거웠어요.','저도 즐거웠어요.',2]]];const ctx=dateContextChoices[p];opts[1][1]=[...ctx[0],0];opts[2][0]=[...ctx[3],2];opts[3]=[[...ctx[1],4],[...ctx[2],1]];const dr=mainDateReplies[p];opts[0][0][1]=dr[0];opts[0][1][1]=dr[1];opts[2][1][1]=dr[2];opts[4][0][1]=dr[3];opts[4][1][1]=dr[4];if(ev.firstDessertFrom===undefined&&p==='강도윤'&&!hist.length&&!vIsDating(p)&&!ev.answered)ev.firstDessertFrom=stage;
const firstDessert=Number.isInteger(ev.firstDessertFrom);
 const dateLabel=(i,label)=>i===4&&label===opts[4][0][0]?meetingCall(p,ev,'player',label,'after'):label;
const sparkStep=firstDessert?3:2;
for(let i=0;i<=Math.min(stage,4);i++){
  if(i===sparkStep&&renderDateSpark(ev,a[0],[p],stage===i&&!ev.answered))return;
  if(firstDessert&&i>=ev.firstDessertFrom){
    const [scene,line,choices]=firstDessertStops[i];
    add('이야기',scene);
    if(line)add(p,line);
    opts[i]=choices;
  }else{add(...scenes[i]);if(i===1)add(p,h[1]);if(i===3)add(p,h[5]);}if(steps[i]){add(state.name,dateLabel(i,steps[i].label),true);add(p,steps[i].reply)}if(i===0&&stage===1&&renderMatchingOffer(ev,p))return;if(i===2&&steps[i]&&!firstDessert){if(renderDateDepth(ev,p))return;}if(i===3&&steps[i]&&p==='서이준'&&steps[i].label==='조금 더 걸어요.')add('이야기','이준과 극장 밖의 거리를 조금 더 걸었다. 한참 이야기를 나눈 뒤 역 쪽으로 발길을 돌렸다.');}if(ev.answered||stage>=5){if(firstDessert){
  if(renderDateTriangle(ev,p)||renderDateSouvenir(ev,p)||renderSouvenirReaction(ev,p))return;
  choiceButton('일정 계속하기',finishEvent);return;
}if(renderDateTriangle(ev,p))return;if(ev.alleyDate){renderAlleyDate(ev,p);return}if(renderPartnerComfort(ev,p))return;if(renderSpringRain(ev,p))return;if(renderSeasonalDate(ev,p))return;if(renderSummerDate(ev,p))return;if(renderAutumnDate(ev,p))return;if(renderWinterDate(ev,p))return;if(renderHeartMoment(ev,p))return;if(renderFlirtOuting(ev,p))return;if(renderCoupleDate(ev,p))return;if(renderLoverAffection(ev,p))return;if(renderAfterglowMeeting(ev,p))return;if(renderRelationshipTouch(ev,p))return;if(renderCoupleHabit(ev,p))return;if(renderPlayfulCouple(ev,p))return;coupleHabitRecall(ev,p);if(renderSensoryRomance(ev,p))return;if(renderSpontaneousInvite(ev,p))return;if(renderSpontaneousVisit(ev,p))return;if(renderDateSouvenir(ev,p))return;if(renderSouvenirReaction(ev,p))return;if(renderFarewell(ev,p))return;choiceButton('일정 계속하기',finishEvent);return}
 if(stage===4&&!firstDessert)offerAlleyWalk(ev,p,opts[stage]);
 for(const [label,reply,delta,route] of opts[stage])choiceButton(dateLabel(stage,label),()=>{
  if(v.activeEvent!==ev||ev.answered||steps.length!==stage)return;
  if(route==='alley'){
   if(!canWalkHome(ev,p)){renderChoiceEvent();return}
   ev.alleyDate={fromSlot:v.running.slot};
  }
  steps.push({label,reply:reply==='좋아요.'||reply==='저도 즐거웠어요.'||reply==='저도 오늘을 기다렸어요.'?npcVoice[p][1]:reply==='저도 다음 약속을 기다릴게요.'?nextMeetReply(p,ev.day??v.day,4):reply});state.identity.traits[delta>=3?'솔직함':'신중함']++;v.affection[p]=Math.min(999,(v.affection[p]||0)+delta);if(delta>=3)socialRecord(p).interest++;if(steps.length===5){ev.answered=true;farewellReaction(ev,p,label);recordDate(ev,a[0])}save();renderChoiceEvent();renderSim()})}
function festivalAvailable(){const v=initSim();return v.day>=224&&v.day<=226&&!v.festivalDone&&!v.finished}
const festivalLines={"공재희":["저기 경품 봐요!","내년에도 같이 오면 좋겠다."],'서이준':['사람이 많군요. 조금 조용한 곳을 알고 있습니다.','…불꽃보다 이쪽을 더 자주 보게 되는군요.'],'강도윤':['오늘은 가게 걱정 말고 같이 놀아요.','내년에도 이렇게 같이 볼 수 있으면 좋겠네요.'],'한시우':['저기 경품 봤어요? 하나 따 드릴게요!','오늘 진짜 재밌었어요. 아직 집에 가기 싫은데.'],'정태오':['사람이 많으니 천천히 이동하시죠.','오늘은 근무가 아니라 함께 온 겁니다. 조금 더 가까이 계셔도 됩니다.'],'백지한':['오늘 제 데이트 코스는 어떠세요?','불꽃놀이 보러 왔는데 자꾸 다른 데 눈이 가네요.'],'임하나':['...... 있잖아요. 저 이런 축제 정말 오랜만이에요.','오늘 같이 와 주셔서 정말 고마워요.'],'차유리':['저기 플리마켓부터 구경할까요?','오늘 사진은 오래 간직하고 싶어요.'],'오세린':['후후. 맛있는 것도 먹고 천천히 구경해요.','이렇게 나란히 있는 시간이 참 좋네요.'],'유지안':['오늘 공연도 있어요! 같이 보러 가요.','무대에서 보는 불빛도 좋지만, 이렇게 같이 보는 것도 좋네요.']};
function startFestival(){const v=initSim();if(!festivalAvailable()||v.running||v.activeEvent)return;v.activeEvent={place:'park',description:'연화제의 마지막 밤. 연화천을 따라 야시장과 플리마켓이 펼쳐져 있다.',festival:true,day:v.day,steps:[],answered:false};save();renderChoiceEvent()}
const festivalEndingReplies={"서이준":["…내년에도 같이 걸으면 좋겠네요.","오늘 불꽃은 꽤 오래 기억날 것 같아요."],"강도윤":["내년엔 가게도 일찍 닫아야겠네요.","오늘은 손님 걱정 없이 웃어서 좋았어요."],"한시우":["오케이! 내년엔 경품 더 많이 따요.","와, 오늘 진짜 알차게 놀았다!"],"백지한":["내년 이맘때도 제 옆에 있어 주면 좋겠네요.","불꽃보다 오늘 같이 걸었던 길이 기억날 것 같아요."],"임하나":["네! 내년에도 꼭 시간을 비워 둘게요.","저 이런 밤을 보내도 되는 거였네요. 정말 좋았어요."],"차유리":["좋아요. 내년엔 플리마켓에 직접 참가해 볼까.","오늘 찍은 사진은 집에서 천천히 정리해야겠네요."],"오세린":["아아, 내년에도 이 강변에서 만나면 좋겠네요.","밤공기가 참 좋았어요. 오래 기억하고 싶네요."],"정태오":["내년에도 휴무를 맞출 수 있도록 해 보겠습니다.","오늘은 순찰이 아닌 축제로 이 길을 걸어서 좋았습니다."],"유지안":["좋았어! 내년에도 제 공연 꼭 보러 와요!","와, 오늘 무대 끝나고 같이 놀아서 더 좋았어요!"],"공재희":["웅! 내년에도 나랑 와요. 약속 ㅋㅋ","아 집 가기 싫다… 오늘 진짜 재밌었는데."]};
function renderFestival(ev){const v=initSim(),steps=ev.steps,p=ev.person;$('where').textContent='연화제';$('progress').textContent='연화제 · '+Math.min(steps.length+1,5)+'/5';if(!ev.chosen){add('이야기','오늘 저녁을 누구와 보낼까?');for(const who of people.filter(x=>v.met[x]&&relationshipTier(x)>=1))choiceButton(who+'에게 함께 구경하자고 제안한다',()=>{ev.person=who;ev.chosen=true;ev.festivalContext=seasonContext(who,ev.day||v.day);save();renderChoiceEvent()});choiceButton('혼자 축제를 즐긴다',()=>{ev.chosen=true;save();renderChoiceEvent()});return}if(p&&!ev.festivalContext){ev.festivalContext=seasonContext(p,ev.day||v.day);save()}const c=ev.festivalContext,a=p?autumnFestivalVoices[p]:null,canTouch=p&&festivalCanTouch(p,c);if(p)add(p,c.conflicted?touchProfiles[p].hurt[1]:festivalLines[p][0]);const scenes=['플리마켓에는 손으로 만든 소품과 작은 간식이 가득하다.','야시장에 고소한 음식 냄새가 퍼진다.','광장 무대에서 댄스 공연이 시작된다. 유지안이 무대에 올라 관객의 환호를 받는다.','강변에 사람들이 모인다. 밤하늘에 첫 불꽃이 터졌다.','마지막 불꽃이 사라지고 축제의 조명이 하나씩 꺼진다.'];const opts=[['서로 어울리는 소품을 골라 본다','천천히 구경한다'],['간식을 나눠 먹는다','야시장 풍경을 즐긴다'],['공연에 박수를 보낸다','무대를 조용히 감상한다'],[canTouch?'좋아요. 조금 더 가까이 있어요.':'불꽃이 잘 보이는 자리를 찾아본다','나란히 불꽃을 바라본다'],['내년에도 함께 오고 싶어요.','오늘 정말 즐거웠어요.']];if(!p){opts[0]=['마음에 드는 소품을 골라 본다','천천히 구경한다'];opts[1]=['간식을 맛본다','야시장 풍경을 즐긴다'];opts[3]=['불꽃이 잘 보이는 자리를 찾아본다','조용히 불꽃을 바라본다'];opts[4]=['내년에도 다시 오고 싶다','오늘 정말 즐거웠다']}for(let i=0;i<=Math.min(steps.length,4);i++){add('이야기',scenes[i]);if(a&&i<4){add('이야기',a[i][0]);add(p,i===3?(canTouch?a[i][2]:c.conflicted?touchProfiles[p].hurt[1]:a[i][3]):a[i][1])}if(steps[i]){const rec=typeof steps[i]==='string'?{label:steps[i]}:steps[i];add(state.name,rec.label,true);if(p){if(rec.narration)add('이야기',rec.narration);if(rec.reply)add(p,rec.reply);else if(i===4)add(p,festivalEndingReplies[p][rec.label===opts[i][0]?0:1]);else if(i<3)add(p,a[i][rec.label===opts[i][0]?2:3]);else add(p,a[3][3])}}}if(ev.answered){choiceButton('축제 마치기',finishEvent);return}const n=steps.length;if(n>=5){ev.answered=true;save();renderChoiceEvent();return}opts[n].forEach((label,j)=>choiceButton(label,()=>{if(steps.length!==n)return;const rec={label};if(p){if(n<3)rec.reply=a[n][2+j];else if(n===3){const close=!!canTouch&&j===0,idx=summerNightTouch[p];rec.reply=close?playerTouchScenes[p][3+idx*2]:a[3][3];if(close){rec.narration=playerTouchScenes[p][2+idx*2];flirtRecord(p).interest++;socialRecord(p).interest++;flirtRecord(p).touches.push({day:v.day,type:touchTypes[idx],scene:'festival'})}feel(p,{security:close?1:2})}else rec.reply=c.conflicted?personalSocialVoice[p][9]:j===0?a[3][4]:festivalEndingReplies[p][1];v.affection[p]=Math.min(999,(v.affection[p]||0)+(c.conflicted?0:2))}steps.push(rec);if(steps.length===5){ev.answered=true;v.festivalDone=true;v.festivalPartner=p||null;if(p){socialRecord(p).lastTogether=v.day;const m=memoryFor(p);(m.preferences.seasonHistory||(m.preferences.seasonHistory=[])).push({id:'festival',day:v.day,choices:steps.map(x=>typeof x==='string'?x:x.label),reply:rec.reply});remember(p,'season:festival',rec.reply)}writeJournal('연화제 · '+(p?p+'와 축제 관람':'혼자 축제 관람'))}save();renderChoiceEvent();renderSim()}))}
function fixedActivity(day,slot){if(day===1)return null;const w=(day-1)%7;if(w>=5)return null;if(state.job==='회사원'&&slot<3&&!leaveBook()[day])return '출근';if(state.job==='대학생'&&((w===0||w===2)&&slot<2||(w===1||w===3)&&slot===1||w===4&&slot===0))return '대학 수업';if(state.job==='프리랜서'&&[0,2,4].includes(w)&&slot===0)return '외주 작업';return null}
function personalActivity(value){
 return typeof value==='string'&&value&&!['약속','출근','대학 수업','외주 작업'].includes(value)?value:null;
}
function personalPlan(v,day){
 const raw=v.weekPlans[day];
 return Array.from({length:4},(_,i)=>personalActivity(raw?.[i])||personalActivity(v.schedule[i])||'휴식');
}
function bookingOccupies(plan,slot){return !!plan&&(plan.slot===slot||!!plan.trip&&slot>=plan.slot)}
function planFor(day){
 const v=initSim(),booking=v.datePlans?.[day];
 return personalPlan(v,day).map((activity,i)=>bookingOccupies(booking,i)?'약속':fixedActivity(day,i)||activity);
}
function repairPendingPlan(v){
 const run=v.running;
 if(!run)return false;
 // The booking is removed when its scene starts. Keep the current scene and completed slots intact.
 const start=run.slot+(v.activeEvent||run.outing?1:0);
 const today=planFor(v.day);
 let changed=false;
 for(let i=start;i<4;i++){
  if(run.plan[i]!==today[i]&&(run.plan[i]==='약속'||today[i]==='약속')){
   run.plan[i]=today[i];
   changed=true;
  }
 }
 return changed;
}
function repairSavedSchedule(v){
 let changed=false;
 const run=v.running;
 // Older saves could clear a scene after paying out its activity, before moving the cursor.
 if(run&&!v.activeEvent&&!run.outing&&Array.isArray(run.notes)){
  while(Number.isInteger(run.slot)&&run.slot>=0&&run.slot<dayLabels.length&&
        run.notes.some(note=>typeof note==='string'&&note.startsWith(dayLabels[run.slot]+' · '))){
   run.slot++;changed=true;
  }
 }
 if(v.lastGrowthSceneDay==null&&v.journal?.some(entry=>entry.day===v.day&&/^(진로 발견 · |자기계발 · |진로 · [^/]+ \/ )/.test(entry.text))){
  v.lastGrowthSceneDay=v.day;changed=true;
 }
 const base=v.schedule.map(a=>personalActivity(a)||'휴식');
 if(base.some((a,i)=>a!==v.schedule[i])){v.schedule=base;changed=true}
 for(const [day,raw] of Object.entries(v.weekPlans)){
  const clean=personalPlan(v,day);
  if(clean.some((a,i)=>a!==raw?.[i])){v.weekPlans[day]=clean;changed=true}
 }
 return repairPendingPlan(v)||changed;
}
const christmasLines={"공재희":["크리스마스에 뭐 해요?","오늘 방송 안 켰어요. 같이 있고 싶어서.","나 진짜 좋아해요. 우리 사귀면 안 돼요?","헐. 진짜? 나 지금 너무 좋아."],"서이준":["크리스마스에 약속 있어요? …없으면 저랑 저녁 먹어요.","이런 날 누굴 기다리고 있을 줄은 몰랐네요. 참 별일이지.","혼자 있는 게 편했어요. 그런데 요즘은 혼자 있으면 자꾸 보고 싶어요. …좋아해요. 저랑 만날래요?","…내일도 봐요. 이제 보고 싶다고 말해도 되는 거잖아요."],"강도윤":["이브에 가게 문을 조금 일찍 닫으려고요. 저녁 같이 먹을래요?","오늘은 손님이 아니라 제 손님으로 와 주신 거네요. 아니, 그 말도 좀 이상한가.","잘해 주면 곁에 있어 줄 거라고 생각했던 적이 있어요. 그런데 이제는 그냥 저라는 사람을 좋아해 주셨으면 좋겠어요. 저와 만나 주실래요?","오늘은 제가 먼저 손 잡아도 돼요?"],"한시우":["이브에 시간 있어요? 저랑 놀러 가요!","오늘은 게임보다 여기 있는 게 더 재밌네요.","장난 아니에요. 진짜 좋아해요. 저랑 사귀어요.","와… 잠깐만. 진짜 된 거죠?"],"백지한":["이브 저녁, 아직 비어 있어요? 이번에는 제가 먼저 예약하고 싶은데.","오늘만큼은 다른 약속 생각 안 했으면 좋겠는데요.","제가 이렇게까지 욕심낼 줄 몰랐네요. 제일 먼저 생각나는 사람이 저였으면 좋겠어요. 저랑 만나 줄래요?","이제는 제가 기다려도 되는 사람이 된 거죠?"],"정태오":["이브 저녁에 시간이 괜찮으십니까? 함께 식사하고 싶습니다.","오늘 함께해 주셔서 감사합니다.","좋아합니다. 앞으로도 곁에 있고 싶습니다. 저와 교제해 주시겠습니까?","…기쁘군요. 정말로."],"임하나":["혹시 이브에 약속 없으시면… 저랑 같이 보내실래요?","오늘은 제 마음대로 시간을 써도 되는 것 같아요.","저도 제가 원하는 걸 말해 보고 싶어요. 좋아해요. 저랑 만나 주실래요?","…정말요? 오늘은 오래 기억할 것 같아요."],"차유리":["이브에 같이 맛있는 거 먹으러 갈래요?","이런 날 같이 놀 사람이 있어서 좋네요.","각자 자기 삶을 살면서도 서로를 좋아할 수 있잖아요. 저는 당신이 좋아요. 우리 만나 볼래요?","좋아요. 우리답게 만나 봐요."],"오세린":["이브에 따뜻한 차라도 함께 마실까요?","함께 보내는 시간이 참 편안하네요.","당신과 함께하는 일상이 더 많아졌으면 좋겠어요. 연인으로 만나 볼까요?","네. 앞으로도 서로 잘 이야기하면서 지내요."],"유지안":["이브에 같이 놀아요! 혹시 시간 비어 있어요?","오늘은 괜히 더 신나네요.","기대하는 게 무서웠는데 이번에는 피하고 싶지 않아요. 좋아해요. 우리 사귈래요?","와… 오늘 진짜 잊지 못하겠다."]};
const eveScenes={"공재희":[["재희가 오락실 앞에서 손을 흔들었다.","오늘 방송 쉬는 날이에요.","오늘은 같이 놀아요.","웅ㅋㅋ"],["인형뽑기 기계 앞에 섰다.","저거 귀엽다.","같이 뽑아요.","좋아요."],["따뜻한 음료를 마셨다.","손 시려.","따뜻한 거 마셔요.","고마워요."],["재희가 작은 포장 상자를 내밀었다.","이거 골라 왔어요.","고마워요. 잘 간직할게요.","진짜?"],["거리의 조명이 반짝였다.","내년에도 볼 수 있겠죠?","그랬으면 좋겠어요.","나도요."],["집으로 돌아갈 시간이 되었다.","좀 아쉽다.","다음에 또 만나요.","약속."]],"강도윤":[["마감 안내판이 걸린 오후 네 시. 도윤이 앞치마를 벗고 모카의 목줄을 챙긴다.","오늘은 제가 준비했어요. 그래도 마음에 안 드는 게 있으면 꼭 말해 줘요.","오늘은 도윤 씨도 하고 싶은 걸 해요.","그럼… 일단 모카랑 같이 걸을까요? 제가 좋아하는 길이 있어요."],["강변에서 모카가 눈을 헤치며 달린다. 도윤이 웃다가 당신의 장갑을 살핀다.","손 시렵지 않아요? 제 주머니 따뜻한데.","같이 주머니에 손 넣을까요?","어, 잠깐만. 제가 먼저 말하려고 했는데."],["가게로 돌아오니 두 사람 몫의 식사가 차려져 있다. 도윤은 자기 접시보다 당신의 접시를 먼저 살핀다.","맛있어요? 부족하면 더 만들어 올게요.","이제 앉아서 같이 먹어요.","…네. 오늘은 저도 대접받는 기분이네요."],["도윤이 작은 상자를 내민다. 안에는 직접 고른 원두와 손글씨 카드가 있다.","가게 말고 제 이름으로 드리는 선물이에요.","도윤 씨가 골라 준 거라서 좋아요.","그렇게 말하면 다음에는 더 잘하고 싶어지잖아요."],["빈 잔을 정리하던 도윤이 문득 손을 멈춘다.","내년에는 어떤 크리스마스를 보내고 싶어요?","도윤 씨도 행복한 크리스마스였으면 좋겠어요.","…그 안에 제가 있어도 되는 거죠?"],["가게 밖에서 헤어질 시간이 되었다. 도윤은 문을 잠그고도 한참 움직이지 않는다.","조금만 더 걸을까요? 오늘은 보내기가 아쉽네요.","좋아요. 조금 더 같이 있어요.","다행이다. 오늘은 괜히 괜찮은 척하기 싫어서요."]],"서이준":[["빌라 앞에서 이준이 목도리를 고쳐 매고 기다린다.","왔어요? 식당 예약해 놨어요.","기다리셨어요?","좀 일찍 나왔어요. …기다린 건 아니고."],["골목의 고양이 급식소에 눈이 쌓였다. 이준이 눈을 털어 낸다.","잠깐만요. 이 녀석 밥부터 줘야 돼요.","저도 도울게요.","…고마워요. 둘이 하니까 금방이네요."],["식당에서 이준이 메뉴판을 당신 쪽으로 돌린다.","여기 메뉴 괜찮아 보여요. 먹고 싶은 거 골라요.","같이 골라요.","그래요. 혼자 먹을 것도 아니니까."],["이준이 작은 포장 상자를 꺼낸다. 안에는 따뜻한 장갑이 들어 있다.","맨날 손 차갑잖아요. 그래서 골랐어요.","끼워 주실래요?","…손 줘 봐요."],["조명이 비치는 골목에서 이준이 걸음을 늦춘다.","혼자 쉬는 게 제일 좋았는데, 요즘은 좀 다르네요.","어떻게 다른데요?","…안 보이면 뭐 하고 있나 신경 쓰여요."],["빌라 앞에 도착했지만 이준은 현관 비밀번호를 누르지 않는다.","내일도 시간 있어요?","내일도 만나요.","…그래요. 기다릴게요."]],"백지한":[["지한이 예약한 식당 앞에서 기다린다. 평소보다 단정한 차림이다.","오늘은 제가 좀 신경 썼는데, 알아봐 주실래요?","오늘 멋있네요.","이런 말 한마디에 기분이 좋아지네."],["장식이 가득한 거리에서 지한이 사람들 사이로 손을 내민다.","놓치면 곤란하니까. 손 잡아도 돼요?","네. 잡아요.","그럼 오늘은 제가 놓지 않을게요."],["식사가 끝나갈 무렵 지한이 잔을 내려놓는다.","오늘 다른 약속은 없죠?","오늘은 지한 씨랑 보내기로 했잖아요.","그 말이 듣고 싶었나 봐요."],["지한이 작은 상자를 건넨다. 고른 소품에는 당신의 취향이 반영되어 있다.","전에 눈여겨보던 거 기억했어요.","그걸 기억했어요?","들려준 얘기는 생각보다 잘 기억하거든요."],["야경을 보던 지한의 웃음이 잠시 사라진다.","내가 당신한테 어느 정도로 특별한지 궁금해요.","지한 씨는 지한 씨대로 특별해요.","…그걸로 만족해야 하는데, 쉽지가 않네요."],["집 앞에서 지한이 손을 놓고 한 걸음 물러선다.","내일도 나한테 시간 좀 줄래요?","내일 이야기해요.","좋아요. 이번엔 농담 아니니까."]],"한시우":[["오락실에서 한시우와 만났다.","오늘은 승부보다 같이 노는 게 좋네요.","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["한시우가 포장한 선물을 내민다. 안에는 한정판 키링이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일도 같이 놀아요. 이번엔 진짜 약속!","내일 또 봐요.","네. 조심히 들어가요."]],"정태오":[["강변 산책로에서 정태오와 만났다.","추우시면 말씀하십시오. 무리하실 필요 없습니다.","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["정태오가 포장한 선물을 내민다. 안에는 손난로이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일도 뵙고 싶습니다.","내일 또 봐요.","네. 조심히 들어가요."]],"임하나":[["작은 서점에서 임하나와 만났다.","오늘은 제 시간을 제가 정했어요.","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["임하나가 포장한 선물을 내민다. 안에는 직접 뜬 목도리이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일도 만나면 좋겠어요.","내일 또 봐요.","네. 조심히 들어가요."]],"차유리":[["겨울 전시회에서 차유리와 만났다.","이런 전시는 혼자 봐도 좋지만 같이 보니 또 다르네요.","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["차유리가 포장한 선물을 내민다. 안에는 직접 디자인한 엽서이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일 시간 맞으면 또 봐요.","내일 또 봐요.","네. 조심히 들어가요."]],"오세린":[["조용한 찻집에서 오세린와 만났다.","오늘은 서두르지 않아도 되겠네요.","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["오세린가 포장한 선물을 내민다. 안에는 꽃무늬 찻잔이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일도 따뜻하게 보내요.","내일 또 봐요.","네. 조심히 들어가요."]],"유지안":[["거리 공연 광장에서 유지안와 만났다.","오늘은 관객으로 즐기는 것도 좋네요!","오늘 함께 와서 좋아요.","저도 오늘을 기다렸어요."],["연말 장식을 구경하며 천천히 걸었다.","잠깐 사진 남길까요?","같이 찍어요.","좋아요. 오늘의 기록이네요."],["따뜻한 식사를 앞에 두고 올해 있었던 일을 이야기했다.","올해 기억에 남는 일이 있어요?","함께 보낸 시간이 기억에 남아요.","그렇게 기억해 주니 좋네요."],["유지안가 포장한 선물을 내민다. 안에는 작은 음악 상자이(가) 들어 있다.","어울릴 것 같아서 골랐어요.","소중하게 간직할게요.","마음에 들어서 다행이에요."],["거리의 조명이 하나씩 켜졌다.","내년에는 어떤 일을 하고 싶어요?","내년에도 함께 이야기하고 싶어요.","그럼 좋겠네요."],["헤어질 시간이 다가왔다.","내일도 같이 웃을 수 있으면 좋겠어요.","내일 또 봐요.","네. 조심히 들어가요."]]};
Object.assign(eveScenes,{"한시우":[["시우가 오락실 앞에서 승리 포즈를 취했다.","오늘은 랭크 안 돌려요. 우리 둘이 노는 날이니까!","오늘은 승부 말고 재미로 해요.","오케이! 근데 지면 살짝 억울할 듯ㅋㅋ"],["시우가 연말 장식 앞에서 휴대전화를 꺼냈다.","와, 이 배경이면 인증샷 각인데요?","같이 브이 하고 찍어요.","와, 오늘의 프로필 후보 생겼다."],["시우가 식사를 앞에 놓고 웃음을 멈췄다.","올해 경기 말고도 기억에 남는 게 많더라고요.","저도 시우 씨와 논 날들이 기억나요.","와… 그 말 생각보다 엄청 좋네요."],["시우가 한정판 키링이 든 상자를 내밀었다.","이거 구하는 데 은근 난이도 높았어요!","가방에 달고 다닐게요.","앗, 장착 인증 기대합니다!"],["시우가 장식 조명을 보며 입김을 불었다.","내년에도 우리 이렇게 놀 수 있겠죠?","내년에도 같이 새로운 걸 해 봐요.","콜! 그 약속은 진짜 지킬래요."],["시우가 돌아가는 길을 확인하다 당신을 봤다.","내일도 시간 있어요? 이번엔 장난 아님.","내일 또 봐요.","아, 진짜 좋네요."]],"정태오":[["태오가 강변 입구에서 장갑을 고쳐 끼고 기다렸다.","오늘은 충분히 시간을 확보했습니다.","휴무를 함께 보내 줘서 고마워요.","…제가 원해서 시간을 비운 것입니다."],["태오가 한적한 길을 찾았다.","이쪽 조명이 좋고 길도 안전하군요.","여기서 천천히 구경해요.","알겠습니다. 저도 서두르고 싶지 않습니다."],["태오가 식사 중 숟가락을 내려놓았다.","올해는 근무 외의 일도 기억에 남았습니다.","태오 씨도 자기 시간이 있었으면 좋겠어요.","…그렇게 생각해 주시는 것이 고맙습니다."],["태오가 손난로가 들어 있는 상자를 건넸다.","추운 날 외출하실 때 쓰시면 좋겠습니다.","태오 씨가 골라 줘서 더 좋아요.","다행입니다. 실용적이기만 한 선물일까 걱정했습니다."],["태오가 가로등 아래서 멈췄다.","앞으로도 함께 걸을 시간이 있으면 좋겠습니다.","저도 그런 시간이 더 있었으면 해요.","…기억하겠습니다."],["태오가 귀갓길을 가리켰다.","내일도 뵐 수 있겠습니까?","네. 내일 또 봐요.","감사합니다. 기다리고 있겠습니다."]],"임하나":[["하나가 작은 서점 앞에서 웃었다.","오늘은 제가 제 시간을 정했어요.","오늘 하고 싶은 걸 하나 씨가 골라요.","……그럼 책부터 보고 싶어요!"],["하나가 장식이 달린 골목에서 멈췄다.","저 이런 불빛 아래서 사진 찍어 보고 싶었어요.","우리 같이 사진 남겨요.","네! 제가 먼저 찍자고 해도 되는 거죠."],["하나가 메뉴판을 천천히 살폈다.","오늘은 가격 말고 먹고 싶은 걸 생각해 볼래요.","하나 씨가 원하는 걸 먹어요.","……이런 날이 있어서 좋네요."],["하나가 직접 뜬 목도리를 내밀었다.","뜨면서 어떤 색이 어울릴지 계속 생각했어요.","소중히 쓰고 싶어요.","……제가 만든 게 그렇게 좋다고 해 주니까 기뻐요."],["하나가 불빛을 바라봤다.","내년에는 제가 가고 싶은 곳을 더 많이 가고 싶어요.","하나 씨의 계획을 응원할게요.","네. 그중에 같이 가고 싶은 곳도 많아요."],["하나가 가방 끈을 고쳐 잡았다.","저… 내일도 보고 싶다고 말해도 돼요?","내일 또 만나고 싶어요.","……네. 제가 먼저 연락할게요."]],"차유리":[["유리가 전시회 입구에서 티켓을 들어 보였다.","오, 왔어요? 서로 마음에 드는 작품 찾아요.","유리 씨가 어떤 걸 고르는지 궁금해요.","좋다! 감상 끝나면 비교해 봐요."],["유리가 조명이 비친 유리창을 찍었다.","이 빛은 그림으로 옮기고 싶네요.","나도 마음에 드는 색을 찾아볼게요.","오, 우리 눈에 들어오는 게 다르니까 재밌다."],["유리가 식사 중 스케치북을 꺼냈다.","올해는 제 그림을 다시 많이 생각했어요.","유리 씨가 하고 싶은 작업이 궁금해요.","나중에 보여 줄게요. 꽤 빨리요."],["유리가 직접 디자인한 엽서를 내밀었다.","오늘 생각하면서 색을 골랐어요.","작품처럼 잘 간직할게요.","오, 작품 대접 받았네. 기분 좋다!"],["유리가 창에 반사된 불빛을 봤다.","내년에도 그림 그리고 제 생활 잘 꾸리고 싶어요.","저도 제 생활을 잘 꾸리면서 같이 만나요.","좋아요. 서로 그런 모습이 더 좋으니까."],["유리가 코트 단추를 채웠다.","내일 시간 되면 얼굴 또 볼래요?","내일도 시간 맞춰 봐요.","좋다. 각자 할 일도 챙기면서요."]],"오세린":[["세린이 찻집 창가에서 손을 흔들었다.","으음, 오늘은 차가 식을 때까지 천천히 이야기해요.","세린 씨도 편하게 쉬어요.","아아, 그 말만으로 여유가 생기네요."],["세린이 작은 나무의 장식을 바라봤다.","어머, 손으로 만든 장식 같네요.","같이 천천히 구경해요.","네. 이런 시간은 서두르지 않아도 좋죠."],["세린이 따뜻한 차를 따랐다.","올해는 병원 밖에서 보내는 시간도 소중했어요.","세린 씨의 일상도 더 알고 싶어요.","으음, 앞으로 천천히 이야기해 드릴게요."],["세린이 꽃무늬 찻잔을 내밀었다.","차를 마실 때 오늘이 떠오르면 좋겠어요.","따뜻한 차를 마실 때마다 생각할게요.","어머, 그렇게 말씀해 주시니 좋네요."],["세린이 조용한 거리를 바라봤다.","내년에도 각자가 원하는 삶을 살았으면 해요.","서로의 생활을 존중하면서 만나요.","아아, 그런 관계라면 참 좋겠어요."],["세린이 목도리를 정돈했다.","내일도 따뜻한 시간을 보낼 수 있을까요?","내일 또 이야기해요.","네. 편안한 밤 보내고 내일 봐요."]],"유지안":[["지안이 공연 광장에서 손을 흔들었다.","와우! 오늘은 무대 말고 관객석 담당이에요!","오늘은 지안 씨도 마음껏 즐겨요.","예쓰! 오늘의 안무는 신나게 놀기!"],["지안이 장식 조명에 맞춰 박자를 탔다.","헐, 저 조명 완전 뮤비 같지 않아요?","지안 씨가 좋아하는 노래가 떠오르네요.","와, 그 노래 기억하고 있었어요?"],["지안이 식사를 하다 진지해졌다.","올해는 무대 아닌 곳에서도 춤이 좋다는 걸 느꼈어요.","지안 씨가 좋아하는 춤을 계속 보고 싶어요.","……그 말 들으니 더 하고 싶네요."],["지안이 작은 음악 상자를 건넸다.","이 멜로디 듣는데 오늘 생각났어요!","좋은 날에 꼭 틀어 둘게요.","와우, 그럼 오늘 플레이리스트로 저장!"],["지안이 두 손을 주머니에 넣었다.","내년에도 좋아하는 걸 계속 좋아할 수 있으면 좋겠어요.","지안 씨의 내년을 응원해요.","고마워요! 그쪽 내년도 제가 응원할래요."],["지안이 귀갓길을 가리켰다.","내일도 같이 웃을 수 있으면 좋겠어요.","내일 또 봐요.","넵! 오늘 엔딩 완전 좋다!"]],"공재희":[["재희가 오락실 앞에서 분홍색 장갑을 흔들었다.","오늘 방송 안 켰어요ㅋㅋ 그냥 같이 놀고 싶어서.","오늘은 재희 씨가 하고 싶은 거 해요.","헐 좋다. 나 진짜 하고 싶은 거 많음!"],["재희가 인형뽑기 기계 앞에 섰다.","저거 귀엽다. 곰인형이랑 같이 두면 좋겠다.","같이 도전해 봐요.","웅ㅋㅋ 오늘은 한 번만 더!"],["재희가 따뜻한 딸기 음료를 감쌌다.","방송에서는 계속 말해야 되는데 오늘은 그냥 웃어도 되네.","재희 씨가 편하게 있어도 좋아요.","……그 말 좀 좋음. 진짜로."],["재희가 작은 포장 상자를 내밀었다.","고르는데 한참 걸렸어요. 나름 취향 생각했음ㅋㅋ","재희 씨가 골라 줘서 좋아요.","헐 진짜? 나 오늘 성공했네."],["재희가 거리 조명을 올려다봤다.","내년에도 우리 이렇게 놀 수 있겠죠?","각자 바빠도 시간 맞춰서 놀아요.","웅. 답장 늦어도 혼자 막 생각 안 할게요."],["재희가 돌아가는 길을 확인했다.","아 벌써 가요? 내일도 볼 수 있음?","내일 또 봐요.","웅… 나 진짜 기다릴게요ㅋㅋ"]]});
const eveNeutralVoice={"서이준":["…추운데 왔네요. 들어가죠.","고양이 밥만 챙기고 가요.","먹고 싶은 걸 골라요. 시간은 많으니까.","사이즈 맞으면 좋겠네요.","…내년에도 각자 잘 지내면 좋겠어요.","그럼 들어가요. 감기 조심하고요."],"강도윤":["하하, 오늘은 편하게 즐겨요.","모카가 신났네요. 천천히 걸어요.","오늘은 저도 앉아서 먹을게요.","부담 갖지 말고 편하게 써 주세요.","서로 하고 싶은 일이 잘됐으면 좋겠네요.","따뜻하게 들어가요. 오늘 고마웠어요."],"한시우":["좋아, 이제 놀자!","오케이, 사진은 나중에 보고 지금 놀죠!","올해 경기 썰은 다음에 또 풀게요.","키링 마음에 들면 가방에 달아요!","내년엔 서로 자랑할 만한 일이 더 많았으면 좋겠어요!","그럼 다음에 또 봐요. 따뜻하게 들어가요!"],"백지한":["오늘은 편한 손님으로 모실게요.","좋아요. 각자 걸음대로 가죠.","그럼 맛있는 것부터 신경 쓰죠.","부담 없이 받아요. 잘 어울릴 것 같아서요.","좋죠. 서로 자기 계획도 챙겨야죠.","알겠어요. 오늘은 여기까지로 예약 완료."],"정태오":["시간 맞춰 주셔서 감사합니다.","알겠습니다. 혼잡한 곳은 피하시죠.","올해도 무사히 마무리할 수 있으면 좋겠습니다.","필요할 때 사용하십시오.","서로 건강하고 안전한 한 해였으면 합니다.","귀갓길 조심하십시오. 다음에 뵙겠습니다."],"임하나":["네! 오늘은 저도 편하게 놀고 싶어요.","이렇게 천천히 걷는 것도 좋아요.","저도 올해는 하고 싶은 걸 많이 생각했어요.","따뜻하게 쓰시면 좋겠어요.","내년에는 제 계획도 먼저 세워 볼래요.","오늘 함께해 주셔서 정말 감사해요."],"차유리":["오, 왔어요! 전시부터 볼까요?","좋아요. 각자 마음에 드는 구도 찾아요.","올해는 그림에 대해 생각할 일이 많았죠.","엽서는 마음에 드는 데 붙여 둬요.","서로 작업도 생활도 잘 풀렸으면 좋겠네요.","오케이, 저는 돌아가서 그림 좀 그릴게요."],"오세린":["아아, 와 주셔서 고마워요.","으음, 천천히 둘러보면 좋겠네요.","올해도 참 많은 일이 있었죠.","차 마실 때 편히 쓰세요.","각자의 하루가 편안한 해였으면 좋겠어요.","오늘은 충분히 쉬었네요. 잘 들어가요."],"유지안":["와우! 오늘은 신나게 즐겨 봐요!","좋죠! 거리 구경도 재밌잖아요.","올해도 춤을 계속 춘 게 제일 기억나요.","좋아하는 곡처럼 오래 남으면 좋겠다!","내년에는 더 멋진 안무 만들래요!","넵! 오늘 푹 쉬고 다음에 또 놀아요!"],"공재희":["웅ㅋㅋ 오늘은 방송 걱정 안 할래요.","오케이. 구경부터 해요!","아 올해 진짜 별일 많았음ㅋㅋ","마음에 들면 꼭 쓰기!","내년엔 나도 하고 싶은 거 좀 더 해 볼래요.","웅. 집 가서 따뜻하게 있어요."]};
const eveCasualScenes={
 "강도윤":[["오늘은 내가 준비했어. 그래도 마음에 안 드는 게 있으면 꼭 말해 줘.","{호칭}, 오늘은 하고 싶은 걸 골라 봐. 나도 같이 할래.","그럼… 일단 모카랑 같이 걸을까? 내가 좋아하는 길이 있어.","오늘은 편하게 즐기자."],["손 안 시려? 내 주머니 따뜻한데.","주머니에 손 같이 넣을까?","어, 잠깐만. 내가 먼저 말하려고 했는데.","모카가 신났네. 천천히 걷자."],["맛있어? 부족하면 더 만들어 올게.","이제 앉아서 같이 먹자.","…응. 오늘은 나도 대접받는 기분이네.","오늘은 나도 앉아서 먹을게."],["가게 말고 내 이름으로 주는 선물이야.","{호칭}, 직접 골라 준 거라서 더 좋아.","그렇게 말하면 다음엔 더 잘하고 싶어지잖아.","부담 갖지 말고 편하게 써 줘."],["내년엔 어떤 크리스마스를 보내고 싶어?","{호칭}, 내년 이맘때도 이렇게 웃는 얼굴을 보고 싶어.","…그 안에 나도 있어도 되는 거지?","서로 하고 싶은 일이 잘됐으면 좋겠다."],["조금만 더 걸을까? 오늘은 보내기가 아쉽네.","좋아. 조금 더 같이 있자.","다행이다. 오늘은 괜히 괜찮은 척하기 싫었거든.","따뜻하게 하고 들어가. 오늘 고마웠어."]],
 "서이준":[["왔어? 식당 예약해 놨어.","{호칭}, 오래 기다렸어?","좀 일찍 나왔어. …기다린 건 아니고.","…추운데 왔네. 들어가자."],["잠깐만. 이 녀석 밥부터 줘야 돼.","나도 도울게.","…고마워. 둘이 하니까 금방이네.","고양이 밥만 챙기고 가자."],["여기 메뉴 괜찮아 보여. 먹고 싶은 거 골라.","같이 고르자.","그래. 혼자 먹을 것도 아니니까.","먹고 싶은 거 골라. 시간 많으니까."],["맨날 손 차갑잖아. 그래서 골랐어.","끼워 줄래?","…손 줘 봐.","사이즈 맞으면 좋겠네."],["혼자 쉬는 게 제일 좋았는데, 요즘은 좀 다르네.","어떻게 다른데?","…안 보이면 뭐 하고 있나 신경 쓰여.","…내년에도 각자 잘 지내면 좋겠다."],["내일도 시간 있어?","내일도 만나자.","…그래. 기다릴게.","그럼 들어가. 감기 조심하고."]],
 "백지한":[["오늘은 내가 좀 신경 썼는데, 알아봐 줄래?","오늘 멋있네.","이런 말 한마디에 기분이 좋아지네.","오늘은 편하게 구경해. 안내는 내가 할게."],["놓치면 곤란하니까. 손 잡아도 돼?","응. 잡아.","그럼 오늘은 내가 놓지 않을게.","좋아. 각자 걸음대로 가자."],["오늘 다른 약속은 없지?","{호칭}, 오늘은 우리 둘이 보내기로 했잖아.","그 말이 듣고 싶었나 봐.","그럼 맛있는 것부터 신경 쓰자."],["전에 눈여겨보던 거 기억했어.","그걸 기억했어?","들려준 얘기는 생각보다 잘 기억하거든.","부담 없이 받아. 잘 어울릴 것 같아서."],["{호칭}, 내가 얼마나 특별한 사람인지 가끔 궁금해.","{호칭}, 나한테는 정말 특별해.","…그걸로 만족해야 하는데, 쉽지가 않네.","좋지. 서로 자기 계획도 챙겨야지."],["내일도 나한테 시간 좀 줄래?","내일 이야기하자.","좋아. 이번엔 농담 아니니까.","알겠어. 오늘은 여기까지로 예약 완료."]],
 "한시우":[["오늘은 랭크 안 돌려. 우리 둘이 노는 날이니까!","오늘은 승부 말고 재미로 하자.","오케이! 근데 지면 살짝 억울할 듯ㅋㅋ","좋아, 이제 놀자!"],["와, 이 배경이면 인증샷 각인데?","같이 브이 하고 찍자.","와, 오늘 프로필 후보 생겼다.","오케이, 사진은 나중에 보고 지금 놀자!"],["올해는 경기 말고도 기억에 남는 게 많더라.","{호칭}, 나도 올해는 같이 놀았던 날들이 먼저 생각나.","와… 그 말 생각보다 엄청 좋네.","올해 경기 썰은 다음에 또 풀게."],["이거 구하는 데 은근 난이도 높았어!","가방에 달고 다닐게.","앗, 가방에 달면 인증샷도 보내 줘!","키링 마음에 들면 가방에 달아!"],["내년에도 우리 이렇게 놀 수 있겠지?","내년에도 같이 새로운 걸 해 보자.","콜! 그 약속은 진짜 지킬래.","내년에도 하고 싶은 거 하면서 재밌게 지내자!"],["내일도 시간 있어? 이번엔 장난 아님.","내일 또 보자.","아, 진짜 좋다.","좋아. 다음에 뭐 할지 나도 생각해 둘게."]],
 "정태오":[["오늘은 시간을 넉넉히 비워 뒀어.","쉬는 날 같이 보내 줘서 고마워.","…내가 원해서 비워 둔 시간이야.","시간 맞춰 줘서 고마워."],["이쪽 조명이 좋고 길도 안전하군.","여기서 천천히 구경하자.","알겠어. 나도 서두르고 싶지 않아.","알겠어. 사람 많은 곳은 피하자."],["올해는 근무 말고도 기억에 남는 일이 많았어.","{호칭}, 내년엔 쉬는 날에 하고 싶은 일도 더 많이 했으면 좋겠어.","…그렇게 생각해 줘서 고마워.","올해도 무사히 마무리할 수 있으면 좋겠어."],["추운 날에 나올 때 쓰면 좋겠어.","{호칭}, 직접 골라 줘서 더 좋아.","다행이네. 실용적이기만 한 선물일까 걱정했어.","필요할 때 써."],["앞으로도 함께 걸을 시간이 있으면 좋겠어.","나도 그런 시간이 더 있었으면 해.","…기억할게.","서로 건강하고 안전한 한 해였으면 해."],["내일도 볼 수 있을까?","응. 내일 또 보자.","고마워. 기다리고 있을게.","귀갓길 조심해. 다음에 보자."]],
 "임하나":[["오늘은 내가 내 시간을 정했어.","{호칭}, 오늘은 하고 싶은 걸 골라 봐.","……그럼 책부터 보고 싶어!","응! 오늘은 나도 편하게 놀고 싶어."],["나 이런 불빛 아래서 사진 찍어 보고 싶었어.","우리 같이 사진 남기자.","응! 내가 먼저 찍자고 해도 되는 거지?","이렇게 천천히 걷는 것도 좋아."],["오늘은 가격 말고 먹고 싶은 걸 생각해 볼래.","{호칭}, 먹고 싶었던 걸로 골라.","……이런 날이 있어서 좋네.","나도 올해는 하고 싶은 걸 많이 생각했어."],["뜨면서 어떤 색이 어울릴지 계속 생각했어.","소중하게 쓸게.","……내가 만든 건데 그렇게 좋아해 주니까 기뻐.","따뜻하게 쓰면 좋겠어."],["내년에는 내가 가고 싶은 곳에 더 많이 가고 싶어.","{호칭}, 내년에 어디 다녀왔는지 들려줘. 나도 응원할게.","응. 그중엔 같이 가고 싶은 곳도 많아.","내년엔 내 계획도 먼저 세워 볼래."],["나… 내일도 보고 싶다고 말해도 돼?","내일 또 만나고 싶어.","……응. 내가 먼저 연락할게.","오늘 함께해 줘서 정말 고마워."]],
 "차유리":[["오, 왔어? 각자 마음에 드는 작품 찾아보자.","{호칭}, 어떤 작품을 고를지 벌써 궁금해.","좋다! 다 보고 나서 비교해 보자.","오, 왔어! 전시부터 볼까?"],["이 빛은 그림으로 옮기고 싶네.","나도 마음에 드는 색을 찾아볼게.","오, 우리 눈에 들어오는 게 다르니까 재밌다.","좋아. 각자 마음에 드는 구도를 찾아보자."],["올해는 내 그림을 다시 많이 생각했어.","{호칭}, 다음엔 어떤 작업을 하고 싶어? 궁금해.","나중에 보여 줄게. 아마 꽤 빨리.","올해는 그림에 대해 생각할 일이 많았지."],["오늘 생각하면서 색을 골랐어.","작품처럼 잘 간직할게.","오, 작품 대접 받았네. 기분 좋다!","엽서는 마음에 드는 데 붙여 둬."],["내년에도 그림 그리고 내 생활 잘 꾸리고 싶어.","나도 내 생활을 잘 챙길게. 그렇게 같이 만나자.","좋아. 서로 그런 모습이 더 좋으니까.","서로 작업도 생활도 잘 풀렸으면 좋겠다."],["내일 시간 되면 얼굴 또 볼래?","내일도 시간 맞춰 보자.","좋다. 각자 할 일도 챙기면서.","오케이, 난 돌아가서 그림 좀 그릴게."]],
 "오세린":[["으음, 오늘은 차가 식을 때까지 천천히 이야기하자.","{호칭}, 오늘은 같이 편하게 쉬자.","아아, 그 말만으로 여유가 생기네.","아아, 와 줘서 고마워."],["어머, 손으로 만든 장식 같네.","같이 천천히 구경하자.","응. 이런 시간은 서두르지 않아도 좋잖아.","으음, 천천히 둘러보면 좋겠네."],["올해는 병원 밖에서 보내는 시간도 소중했어.","{호칭}, 병원 밖에서는 뭘 하며 지내? 더 듣고 싶어.","으음, 앞으로 천천히 얘기해 줄게.","올해도 참 많은 일이 있었지."],["차 마실 때 오늘이 떠오르면 좋겠어.","따뜻한 차를 마실 때마다 생각할게.","어머, 그렇게 말해 주니까 좋네.","차 마실 때 편하게 써."],["내년에도 각자 원하는 삶을 살았으면 해.","서로의 생활을 존중하면서 만나자.","아아, 그런 관계라면 참 좋겠어.","각자의 하루가 편안한 한 해였으면 좋겠어."],["내일도 이렇게 따뜻한 시간을 보낼 수 있을까?","내일 또 이야기하자.","응. 편안한 밤 보내고 내일 보자.","오늘은 충분히 쉬었네. 잘 들어가."]],
 "유지안":[["와우! 오늘은 무대 말고 관객석 담당이야!","{호칭}, 오늘은 마음껏 즐겨.","예쓰! 오늘의 안무는 신나게 놀기!","와우! 오늘은 신나게 즐겨 보자!"],["헐, 저 조명 완전 뮤비 같지 않아?","{호칭}, 우리 그때 같이 들은 노래가 떠오르네.","와, 그 노래 기억하고 있었어?","좋지! 거리 구경도 재밌잖아."],["올해는 무대 밖에서도 내가 춤을 참 좋아하는구나 싶었어.","{호칭}, 앞으로도 그렇게 좋아하는 춤을 추는 모습, 계속 보고 싶어.","……그 말 들으니 더 하고 싶네.","올해도 춤을 계속 춘 게 제일 기억나."],["이 멜로디 듣는데 오늘 생각났어!","좋은 날에 꼭 틀어 둘게.","와우, 그럼 오늘 플레이리스트로 저장!","좋아하는 곡처럼 오래 남으면 좋겠다!"],["내년에도 좋아하는 걸 계속 좋아할 수 있으면 좋겠어.","{호칭}, 내년에도 응원할게.","{호칭}, 고마워! 나도 내내 응원할게.","내년에는 더 멋진 안무 만들래!"],["내일도 같이 웃을 수 있으면 좋겠어.","내일 또 보자.","응! 오늘 엔딩 완전 좋다!","응! 오늘 푹 쉬고 다음에 또 놀자!"]],
 "공재희":[["오늘 방송 안 켰어ㅋㅋ 그냥 같이 놀고 싶어서.","{호칭}, 오늘은 하고 싶은 거 하자.","헐, 좋다. 나 진짜 하고 싶은 거 많아!","웅ㅋㅋ 오늘은 방송 걱정 안 할래."],["저거 귀엽다. 곰인형이랑 같이 두면 좋겠다.","같이 도전해 보자.","웅ㅋㅋ 오늘은 한 번만 더!","오케이. 구경부터 하자!"],["방송에서는 계속 말해야 되는데 오늘은 그냥 웃어도 되네.","{호칭}, 계속 얘기 안 해도 돼. 난 이렇게 있는 것도 좋아.","……그 말 좀 좋다. 진짜로.","아, 올해 진짜 별일 많았어ㅋㅋ"],["고르는 데 한참 걸렸어. 나름 취향 생각했다고ㅋㅋ","{호칭}, 날 생각하면서 골라 줘서 좋아.","헐, 진짜? 나 오늘 성공했네.","마음에 들면 꼭 쓰기!"],["내년에도 우리 이렇게 놀 수 있겠지?","각자 바빠도 시간 맞춰서 놀자.","웅. 답장 늦어도 혼자 막 생각 안 할게.","내년엔 나도 하고 싶은 거 좀 더 해 볼래."],["아, 벌써 가? 내일도 볼 수 있어?","내일 또 보자.","웅… 나 진짜 기다릴게ㅋㅋ","웅. 집 가서 따뜻하게 있어."]]
};
const evePoliteFixes={
 "웅ㅋㅋ 오늘은 한 번만 더!":"네ㅋㅋ 오늘은 한 번만 더 해 봐요!",
 "손 시렵지 않아요? 제 주머니 따뜻한데.":"손 안 시려요? 제 주머니 따뜻한데요.",
 "어, 잠깐만. 제가 먼저 말하려고 했는데.":"어, 잠깐만요. 제가 먼저 말하려고 했는데요.",
 "다행이다. 오늘은 괜히 괜찮은 척하기 싫어서요.":"다행이네요. 오늘은 괜히 괜찮은 척하기 싫어서요.",
 "좀 일찍 나왔어요. …기다린 건 아니고.":"좀 일찍 나왔어요. …오래 기다린 건 아니고요.",
 "그래요. 혼자 먹을 것도 아니니까.":"그래요. 혼자 먹을 것도 아니니까요.",
 "이런 말 한마디에 기분이 좋아지네.":"이런 말 한마디에 기분이 좋아지네요.",
 "놓치면 곤란하니까. 손 잡아도 돼요?":"놓치면 곤란하잖아요. 손 잡아도 돼요?",
 "내가 당신한테 어느 정도로 특별한지 궁금해요.":"{호칭}, 제가 얼마나 특별한 사람인지 가끔 궁금해요.",
 "내일도 나한테 시간 좀 줄래요?":"내일도 저한테 시간 좀 줄래요?",
 "좋아요. 이번엔 농담 아니니까.":"좋아요. 이번엔 농담 아니에요.",
 "오케이! 근데 지면 살짝 억울할 듯ㅋㅋ":"오케이! 근데 지면 살짝 억울할 것 같아요ㅋㅋ",
 "와, 오늘의 프로필 후보 생겼다.":"와, 오늘 프로필 후보 생겼어요.",
 "내일도 시간 있어요? 이번엔 장난 아님.":"내일도 시간 있어요? 이번엔 장난 아니에요.",
 "좋다! 감상 끝나면 비교해 봐요.":"좋아요! 다 보고 나서 비교해 봐요.",
 "나도 마음에 드는 색을 찾아볼게요.":"저도 마음에 드는 색을 찾아볼게요.",
 "오, 우리 눈에 들어오는 게 다르니까 재밌다.":"오, 우리 눈에 들어오는 게 다르니까 재밌네요.",
 "오, 작품 대접 받았네. 기분 좋다!":"오, 작품 대접 받았네요. 기분 좋아요!",
 "좋아요. 서로 그런 모습이 더 좋으니까.":"좋아요. 서로 그런 모습이 더 좋으니까요.",
 "좋다. 각자 할 일도 챙기면서요.":"좋아요. 각자 할 일도 챙기면서요.",
 "고마워요! 그쪽 내년도 제가 응원할래요.":"{호칭}, 고마워요! 저도 내내 응원할게요.",
 "넵! 오늘 엔딩 완전 좋다!":"넵! 오늘 엔딩 완전 좋았어요!",
 "좋아하는 곡처럼 오래 남으면 좋겠다!":"좋아하는 곡처럼 오래 남으면 좋겠어요!",
 "오늘 방송 안 켰어요ㅋㅋ 그냥 같이 놀고 싶어서.":"오늘 방송 안 켰어요ㅋㅋ 그냥 같이 놀고 싶어서요.",
 "헐 좋다. 나 진짜 하고 싶은 거 많음!":"헐, 좋아요. 저 진짜 하고 싶은 거 많아요!",
 "저거 귀엽다. 곰인형이랑 같이 두면 좋겠다.":"저거 귀엽죠? 곰인형이랑 같이 두면 좋겠어요.",
 "방송에서는 계속 말해야 되는데 오늘은 그냥 웃어도 되네.":"방송에서는 계속 말해야 되는데 오늘은 그냥 웃어도 되네요.",
 "……그 말 좀 좋음. 진짜로.":"……그 말 좀 좋아요. 진짜로요.",
 "고르는데 한참 걸렸어요. 나름 취향 생각했음ㅋㅋ":"고르는 데 한참 걸렸어요. 나름 취향 생각했거든요ㅋㅋ",
 "헐 진짜? 나 오늘 성공했네.":"헐, 진짜요? 저 오늘 성공했네요.",
 "웅. 답장 늦어도 혼자 막 생각 안 할게요.":"네. 답장 늦어도 혼자 막 생각 안 할게요.",
 "아 벌써 가요? 내일도 볼 수 있음?":"아, 벌써 가요? 내일도 볼 수 있어요?",
 "웅… 나 진짜 기다릴게요ㅋㅋ":"네… 저 진짜 기다릴게요ㅋㅋ",
 "웅ㅋㅋ 오늘은 방송 걱정 안 할래요.":"네ㅋㅋ 오늘은 방송 걱정 안 할래요.",
 "아 올해 진짜 별일 많았음ㅋㅋ":"아, 올해 진짜 별일 많았어요ㅋㅋ",
 "내년엔 나도 하고 싶은 거 좀 더 해 볼래요.":"내년엔 저도 하고 싶은 거 좀 더 해 볼래요.",
 "웅. 집 가서 따뜻하게 있어요.":"네. 집에 가서 따뜻하게 있어요.",
 "나 아직 좀 속상해요. 오늘은 막 안아 주면 괜찮아지는 그런 거 아님…":"저 아직 좀 속상해요. 오늘은 그냥 안아 준다고 괜찮아질 것 같진 않아요.",
 "오늘은 도윤 씨도 하고 싶은 걸 해요.":"{호칭}, 오늘은 하고 싶은 걸 골라 봐요. 저도 같이 할래요.",
 "도윤 씨가 골라 준 거라서 좋아요.":"{호칭}, 직접 골라 준 거라서 더 좋아요.",
 "도윤 씨도 행복한 크리스마스였으면 좋겠어요.":"{호칭}, 내년 이맘때도 이렇게 웃는 얼굴을 보고 싶어요.",
 "기다리셨어요?":"{호칭}, 오래 기다렸어요?",
 "오늘은 지한 씨랑 보내기로 했잖아요.":"{호칭}, 오늘은 우리 둘이 보내기로 했잖아요.",
 "지한 씨는 지한 씨대로 특별해요.":"{호칭}, 저한테는 정말 특별해요.",
 "저도 시우 씨와 논 날들이 기억나요.":"{호칭}, 저도 올해는 같이 놀았던 날들이 먼저 생각나요.",
 "태오 씨도 자기 시간이 있었으면 좋겠어요.":"{호칭}, 내년엔 쉬는 날에 하고 싶은 일도 더 많이 했으면 좋겠어요.",
 "태오 씨가 골라 줘서 더 좋아요.":"{호칭}, 직접 골라 줘서 더 좋아요.",
 "오늘 하고 싶은 걸 하나 씨가 골라요.":"{호칭}, 오늘은 하고 싶은 걸 골라 봐요.",
 "하나 씨가 원하는 걸 먹어요.":"{호칭}, 먹고 싶었던 걸로 골라요.",
 "하나 씨의 계획을 응원할게요.":"{호칭}, 내년에 어디 다녀왔는지 들려줘요. 저도 응원할게요.",
 "유리 씨가 어떤 걸 고르는지 궁금해요.":"{호칭}, 어떤 작품을 고를지 벌써 궁금해요.",
 "유리 씨가 하고 싶은 작업이 궁금해요.":"{호칭}, 다음엔 어떤 작업을 하고 싶어요? 궁금해요.",
 "세린 씨도 편하게 쉬어요.":"{호칭}, 오늘은 같이 편하게 쉬어요.",
 "세린 씨의 일상도 더 알고 싶어요.":"{호칭}, 병원 밖에서는 뭘 하며 지내요? 더 듣고 싶어요.",
 "오늘은 지안 씨도 마음껏 즐겨요.":"{호칭}, 오늘은 마음껏 즐겨요.",
 "지안 씨가 좋아하는 노래가 떠오르네요.":"{호칭}, 우리 그때 같이 들은 노래가 떠오르네요.",
 "지안 씨가 좋아하는 춤을 계속 보고 싶어요.":"{호칭}, 앞으로도 그렇게 좋아하는 춤을 추는 모습, 계속 보고 싶어요.",
 "지안 씨의 내년을 응원해요.":"{호칭}, 내년에도 응원할게요.",
 "오늘은 재희 씨가 하고 싶은 거 해요.":"{호칭}, 오늘은 하고 싶은 거 해요.",
 "재희 씨가 편하게 있어도 좋아요.":"{호칭}, 계속 얘기 안 해도 돼요. 저는 이렇게 있는 것도 좋아요.",
 "재희 씨가 골라 줘서 좋아요.":"{호칭}, 저를 생각하면서 골라 줘서 좋아요."
};
const eveHurtCasual={
 "서이준":"…아직 지난 얘기가 마음에 걸려. 오늘은 조금 천천히 지내자.",
 "강도윤":"아직 마음이 편해지진 않았어. 오늘은 내 속도대로 있어도 될까?",
 "한시우":"나 지금 농담으로 넘기고 싶은 기분은 아니야. 조금 있다 얘기하자.",
 "백지한":"오늘은 마음이 좀 복잡해. 가까워지는 것보다 얘기가 먼저일 것 같아.",
 "정태오":"지난 일은 아직 정리하지 못했어. 오늘은 거리를 좀 두고 싶어.",
 "임하나":"나도 아직 마음이 좀 아파. 괜찮은 척하고 싶지는 않아.",
 "차유리":"아직 그때 얘기가 걸려. 오늘은 평소처럼 스킨십하기는 싫어.",
 "오세린":"아직 서운한 마음이 남아 있어. 서두르지 않았으면 해.",
 "유지안":"오늘은 웃으면서 넘어가고 싶지 않아. 조금 쉬었다 얘기하자.",
 "공재희":"나 아직 좀 속상해. 오늘은 그냥 안아 준다고 괜찮아질 것 같진 않아."
};
const eveNeutralAcknowledgments={
 "강도윤":[["왔네요. 저쪽 길부터 걸어 봐요.","왔네. 저쪽 길부터 걸어 보자."],["모카도 그쪽으로 가고 싶은가 봐요.","모카도 그쪽으로 가고 싶은가 봐."],["얘기 듣다 보니 벌써 한 해가 다 갔다는 게 실감 나네요.","얘기 듣다 보니 벌써 한 해가 다 갔다는 게 실감 나네."],["마음에 들면 저도 기쁘죠.","마음에 들면 나도 기쁘지."],["나중에 어떻게 됐는지 서로 얘기해 줘요.","나중에 어떻게 됐는지 서로 얘기해 주자."],["저도 즐거웠어요. 모카랑 여기서 인사할게요.","나도 즐거웠어. 모카랑 여기서 인사할게."]],
 "서이준":[["…맞춰 왔네요. 식당은 이쪽이에요.","…맞춰 왔네. 식당은 이쪽이야."],["저 녀석 먹는 것만 보고 갈게요.","저 녀석 먹는 것만 보고 갈게."],["…그랬어요? 그 얘기는 처음 듣네요.","…그랬어? 그 얘기는 처음 듣네."],["…다행이네요. 추울 때 꼭 껴요.","…다행이네. 추울 때 꼭 껴."],["계획대로 되면 나중에 들려줘요.","계획대로 되면 나중에 들려줘."],["…저도요. 잘 들어가요.","…나도. 잘 들어가."]],
 "한시우":[["오예, 왔어요! 어디부터 갈까요?","오예, 왔어! 어디부터 갈까?"],["좋아요. 저쪽 장식도 보고 가요!","좋아. 저쪽 장식도 보고 가자!"],["와, 그런 일도 있었어요? 그거 더 듣고 싶은데요.","와, 그런 일도 있었어? 그거 더 듣고 싶은데."],["히히, 구해 온 보람 있네요!","히히, 구해 온 보람 있네!"],["콜! 내년에 어디까지 했는지 얘기해 봐요.","콜! 내년에 어디까지 했는지 얘기해 보자."],["저도요! 오늘 같이 놀아서 좋았어요.","나도! 오늘 같이 놀아서 좋았어."]],
 "정태오":[["오셨군요. 강변은 이쪽입니다.","왔구나. 강변은 이쪽이야."],["이 길로 가면 조명이 잘 보입니다.","이 길로 가면 조명이 잘 보여."],["그런 일이 있었군요. 들려주셔서 감사합니다.","그런 일이 있었구나. 들려줘서 고마워."],["마음에 드신다니 다행입니다.","마음에 든다니 다행이야."],["원하는 일이 잘 풀리길 바랍니다.","원하는 일이 잘 풀리길 바라."],["저도 즐거웠습니다. 조심히 들어가십시오.","나도 즐거웠어. 조심히 들어가."]],
 "백지한":[["오셨네요. 자리 잘 잡아 뒀어요.","왔네. 자리 잘 잡아 뒀어."],["이쪽 길은 사람도 적어서 걷기 좋네요.","이쪽 길은 사람도 적어서 걷기 좋네."],["그런 일도 있었어요? 얘기 듣는 재미가 있네요.","그런 일도 있었어? 얘기 듣는 재미가 있네."],["그러면 잘 고른 거네요. 마음이 놓여요.","그러면 잘 고른 거네. 마음이 놓여."],["나중에 계획이 어떻게 됐는지 알려 줘요. 저도 알려 줄게요.","나중에 계획이 어떻게 됐는지 알려 줘. 나도 알려 줄게."],["저도 즐거웠어요. 오늘 시간 내 줘서 고마워요.","나도 즐거웠어. 오늘 시간 내 줘서 고마워."]],
 "임하나":[["와 주셨네요. 저 서점에 먼저 들러도 돼요?","와 줬네. 나 서점에 먼저 들러도 돼?"],["네. 저쪽 불빛도 가까이서 보고 싶어요.","응. 저쪽 불빛도 가까이서 보고 싶어."],["그랬군요. 저도 한 해 동안 기억에 남은 게 하나 있어요.","그랬구나. 나도 한 해 동안 기억에 남은 게 하나 있어."],["……다행이에요. 목도리가 따뜻했으면 좋겠어요.","……다행이야. 목도리가 따뜻했으면 좋겠어."],["네. 내년 이맘때는 어디에 다녀왔는지 얘기해 줄게요.","응. 내년 이맘때는 어디에 다녀왔는지 얘기해 줄게."],["저도요. 집에 가는 길에도 오늘 생각이 날 것 같아요.","나도. 집에 가는 길에도 오늘 생각이 날 것 같아."]],
 "차유리":[["반가워요. 표는 벌써 받아 왔어요.","반가워. 표는 벌써 받아 왔어."],["저 창에 비친 빛까지 보면서 가요.","저 창에 비친 빛까지 보면서 가자."],["오, 그런 일도 있었어요? 얘기 들으니까 그림처럼 떠올라요.","오, 그런 일도 있었어? 얘기 들으니까 그림처럼 떠올라."],["좋아해 줘서 기뻐요. 그리는 재미가 있었거든요.","좋아해 줘서 기뻐. 그리는 재미가 있었거든."],["내년에 뭘 하고 있을지 서로 기대해 봐요.","내년에 뭘 하고 있을지 서로 기대해 보자."],["저도 재밌었어요. 잘 가요!","나도 재밌었어. 잘 가!"]],
 "오세린":[["어서 와요. 이쪽 창가 자리가 따뜻해요.","어서 와. 이쪽 창가 자리가 따뜻해."],["네. 가까이 가니까 장식이 더 잘 보이네요.","응. 가까이 가니까 장식이 더 잘 보이네."],["으음, 얘길 들으니 어떤 한 해였는지 알 것 같아요.","으음, 얘길 들으니 어떤 한 해였는지 알 것 같아."],["저도 기뻐요. 찻잔은 쓰는 사람이 있어야 더 예쁘잖아요.","나도 기뻐. 찻잔은 쓰는 사람이 있어야 더 예쁘잖아."],["그러게요. 서로 편안한 한 해를 보냈으면 좋겠어요.","그러게. 서로 편안한 한 해를 보냈으면 좋겠어."],["저도 좋은 저녁이었어요. 편안한 밤 보내요.","나도 좋은 저녁이었어. 편안한 밤 보내."]],
 "유지안":[["왔어요? 오늘은 공연을 실컷 볼 수 있겠어요!","왔어? 오늘은 공연을 실컷 볼 수 있겠다!"],["좋아요. 저 조명 있는 쪽으로 가 봐요!","좋아. 저 조명 있는 쪽으로 가 보자!"],["와, 그 얘기는 오늘 처음 들었어요!","와, 그 얘기는 오늘 처음 들었어!"],["헤헤, 그 멜로디가 마음에 들면 좋겠어요!","헤헤, 그 멜로디가 마음에 들면 좋겠어!"],["좋아요! 내년에 그 계획이 어디까지 갔는지 들려줘요.","좋아! 내년에 그 계획이 어디까지 갔는지 들려줘."],["저도요! 오늘 같이 웃어서 좋았어요.","나도! 오늘 같이 웃어서 좋았어."]],
 "공재희":[["왔어요? 저 분홍 장갑 덕분에 바로 보였죠?","왔어? 나 분홍 장갑 덕분에 바로 보였지?"],["저 기계엔 뭐 들었는지 보기만 하고 가요ㅋㅋ","저 기계엔 뭐 들었는지 보기만 하고 가자ㅋㅋ"],["헐, 그거 처음 듣는 얘기예요. 그래서 어떻게 됐어요?","헐, 그거 처음 듣는 얘기야. 그래서 어떻게 됐어?"],["진짜요? 그거 고르길 잘했네요ㅋㅋ","진짜? 그거 고르길 잘했네ㅋㅋ"],["오, 기억해 둘게요. 저도 하고 싶은 거 정해 볼래요.","오, 기억해 둘게. 나도 하고 싶은 거 정해 볼래."],["저도요. 집에 조심히 가요ㅋㅋ","나도. 집에 조심히 가ㅋㅋ"]]
};

const eveNeutralChoices=[
 ['반갑게 인사한다'],['천천히 함께 걷는다'],['올해 있었던 일을 이야기한다'],
 ['선물 고마워요.','선물 고마워.'],['각자의 내년 계획을 이야기한다'],['오늘 즐거웠어요.','오늘 즐거웠어.']
];
function eveVoiceProfile(p,day,historical=false){
 const a=memoryFor(p).address;
 function role(side){
  // Older albums did not store the agreement date with each line.
  if(historical&&(!a.offerDay||day<a.offerDay)){
   const laterNickname=side==='npc'&&a.nicknameOffered>0&&a.nicknameOffered<=day;
   return {casual:false,call:laterNickname?(a.npcToPlayer||''):''};
  }
  return {casual:!!speechRegisterIndex(p,side,day),call:agreedAddress(p,side,day)};
 }
 return {player:role('player'),npc:role('npc')};
}
function eveSpoken(p,side,day,polite,casual,profile,call=false){
 const voice=(profile||eveVoiceProfile(p,day))[side];
 let line=voice.casual?casual:(evePoliteFixes[polite]||polite);
 if(line.includes('{호칭}, ')){
  let term=voice.call;
  if(!term&&side==='player'&&polite.includes(p.slice(1)+' 씨')){
   const given=p.slice(1);
   term=voice.casual&&npcProfiles[p].age<=Number(state.age)?vocative(given):given+' 씨';
  }
  line=line.replaceAll('{호칭}, ',()=>term?term+', ':'');
 }
 else if(call&&voice.call)line=voice.call+', '+line;
 if(side==='npc'&&p==='강도윤')line=line.replace(/^하하[,!.… ]+/, '').replace(/ 하하[.,] /g,' ');
 return chatSpacing(line);
}
function eveDialogue(p,index,day,romantic,hurt,profile){
 const scene=eveScenes[p][index],casual=eveCasualScenes[p][index];
 const npc=(polite,informal,call=false)=>eveSpoken(p,'npc',day,polite,informal,profile,call);
 const player=(polite,informal,call=false)=>eveSpoken(p,'player',day,polite,informal,profile,call);
 const opening=romantic?npc(scene[1],casual[0],index===0)
  :hurt&&index===0?npc(touchProfiles[p].hurt[1],eveHurtCasual[p])
  :npc(eveNeutralVoice[p][index],casual[3],index===0);
 const neutral=eveNeutralChoices[index],action=neutral.length===1;
 const acknowledgment=eveNeutralAcknowledgments[p][index];
 return {
  narration:scene[0],opening,
  warm:{label:player(scene[2],casual[1],index===3),reply:npc(scene[3],casual[2],index===5),warm:true,action:false},
  quiet:{label:action?neutral[0]:player(neutral[0],neutral[1],index===3),reply:npc(...acknowledgment,index===5),warm:false,action}
 };
}
function readEveStep(p,index,step,lines){
 if(typeof step.warm==='boolean')return step;
 if(step.label===eveNeutralChoices[index][0])return lines.quiet;
 if(step.label===eveScenes[p][index][2])return lines.warm;
 return step;
}
function renderEveVisit(ev,p){
 const v=initSim(),x=christmasState(),day=ev.day??v.day;
 if(!ev.eveContext||!ev.eveVoice){
  ev.eveContext=ev.eveContext||seasonContext(p,day);
  ev.eveVoice=ev.eveVoice||eveVoiceProfile(p,day);
  save();
 }
 const c=ev.eveContext,romantic=c.romantic&&!c.conflicted&&!c.tired;
 const steps=ev.eveSteps||(ev.eveSteps=[]),n=steps.length,total=eveScenes[p].length;
 $('progress').textContent='크리스마스이브 · '+Math.min(n+1,total)+'/'+total;
 let current;
 for(let i=0;i<Math.min(n+1,total);i++){
  current=eveDialogue(p,i,day,romantic,c.conflicted,ev.eveVoice);
  add('이야기',current.narration);add(p,current.opening);
  if(i<n){
   const answer=readEveStep(p,i,steps[i],current);
   steps[i]=answer;
   if(answer.action)add('이야기',answer.label);
   else add(state.name,answer.label,true);
   add(p,answer.reply);
  }
 }
 if(n>=total){
  choiceButton('이브 마치기',()=>{if(v.activeEvent===ev)finishEvent()});
  return;
 }
 const choices=romantic?[current.warm,current.quiet]:[current.quiet];
 for(const answer of choices)choiceButton(answer.label,()=>{
  if(v.activeEvent!==ev||steps.length!==n)return;
  steps.push(answer);
  v.affection[p]=Math.min(999,v.affection[p]+(c.conflicted?0:answer.warm?3:1));
  if(answer.warm)socialRecord(p).interest++;
  else if(!c.conflicted)feel(p,{security:1});
  if(n===3){x.gift=p+'의 크리스마스 선물';writeJournal(x.gift+' 받음')}
  if(steps.length===total){
   x.eveDone=true;ev.answered=true;socialRecord(p).lastTogether=day;
   const m=memoryFor(p);
   (m.preferences.seasonHistory||(m.preferences.seasonHistory=[])).push({
    id:'christmasEve',day,choices:steps.map(s=>s.label),reply:answer.reply,eveVoice:ev.eveVoice
   });
   remember(p,'season:christmasEve',answer.reply);
   writeJournal(nameWith(p)+' 크리스마스이브를 보냈다.');
  }
  save();renderChoiceEvent();
 });
}
