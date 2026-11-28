const practiceScenes = {
 '카페 실습': {
  person:'강도윤', place:'cafe', title:'마감 후 한 잔', after:4,
  opening:'도윤이 문패를 뒤집고 카운터에 잔 두 개를 올려놓았다.',
  invitation:'하하, 원두 조금 남겨 뒀어요. 아까 내린 거랑 비교해 볼래요?',
  choice:'분쇄도를 한 칸 바꿔서 맛을 비교한다',
  reply:'이번 잔이 조금 더 묵직하죠? 설정 적어 둬요. 다음에 같은 맛 내고 싶을 때 쓰게.',
  skill:'생활력'
 },
 '영상 편집 연습': {
  person:'공재희', place:'home', title:'첫 십 초', after:4,
  opening:'재희가 보낸 편집본을 재생했다. 영상은 시작했는데 정작 재희 목소리는 한참 뒤에 나왔다.',
  invitation:'앞에 십 초만 같이 봐줘요. 저 지금 세 번 잘랐는데 세 번 다 똑같아 보임 ㅡㅡ',
  choice:'재희가 웃음을 터뜨리는 장면을 도입부에 놓는다',
  reply:'헐 ㅋㅋ 내 웃음소리 저래요? 아 근데 이게 훨씬 낫다. 이걸로 갈래요.',
  skill:'기술력'
 }
};

function practiceSceneFor(activity,result){
 const scene=practiceScenes[activity];
 if(!scene||!result||/부족|대신 쉬/.test(result.note||''))return null;
 const v=initSim();
 if(activity==='카페 실습'&&v.slot!==3)return null;
 const seen=developmentRecord().practiceSeen;
 if(seen?.[activity]||!v.met[scene.person]||!socialRecord(scene.person).contact||
    npcLifeBusy(scene.person,v.day,v.slot)||professionCount(activity)<scene.after)return null;
 return {person:scene.person,place:scene.place,day:v.day,slot:v.slot,
  description:scene.opening,practiceScene:{activity}};
}

function renderPracticeScene(ev){
 const v=initSim(), record=developmentRecord(), event=ev.practiceScene;
 const scene=practiceScenes[event.activity];
 $('progress').textContent=scene.title;
 if(event.activity==='영상 편집 연습')$('where').textContent='연화빌라 · 영상 통화';
 add('이야기',scene.opening);
 add(scene.person,scene.invitation);
 if(event.answer){
  add(state.name,event.answer,true);
  if(event.helped){
   add(scene.person,scene.reply);
   add('시스템',scene.skill+' +2');
  }
  choiceButton('일정 계속하기',finishEvent);
  return;
 }
 const respond=(label,helped)=>{
  if(event.answer)return;
  event.answer=label;
  event.helped=helped;
  const seen=record.practiceSeen||(record.practiceSeen={});
  seen[event.activity]=true;
  if(helped) v.skills[scene.skill]+=2;
  writeJournal('자기계발 · '+scene.title+' / '+label);
  save();
  renderChoiceEvent();
 };
 choiceButton(scene.choice,()=>respond(scene.choice,true));
 const decline='오늘은 여기까지 한다';
 choiceButton(decline,()=>respond(decline,false));
}
