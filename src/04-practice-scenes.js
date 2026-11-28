const practiceScenes = {
 '반려동물 관찰 워크숍': {
  person:'오세린', place:'center', location:'연화동 문화센터 · 반려동물 관찰 워크숍', title:'평소랑 달랐던 순간', after:1, publicEvent:true,
  opening:'문화센터 강의실에서 보호자들과 짧은 영상을 봤다. 화면 속 고양이가 밥그릇 앞까지 왔다가 돌아섰다. 세린은 아무 말 없이 그 장면을 한 번 더 틀었다.',
  invitation:'으음, 이번엔 고양이가 밥그릇 앞에 왔을 때 뭘 했는지만 적어 볼까요? 제가 그 집 고양이를 오늘 처음 봤다고 생각하고요.',
  choice:'밥그릇 앞에 두 번 왔다가 냄새만 맡고 돌아섰다고 적는다',
  reply:'아, 두 번 왔군요. 저는 한 번인 줄 알았어요. 보호자분이 그렇게 말해 주시면 제가 궁금한 걸 다음에 물어볼 수 있겠어요.',
  skill:'생활력'
 },
 '공연 리허설': {
  person:'유지안', place:'dance', title:'음악이 돌아올 때까지', after:1, publicEvent:true,
  opening:'공개 리허설 도중 음악이 뚝 끊겼다. 지안이는 음향석을 한번 보고는 뒤쪽에 앉은 관객들에게 손을 들었다.',
  invitation:'뒤에 계신 분들도요! 제가 셋 세면 손뼉 한 번만 쳐 주세요. 하나, 둘, 셋!',
  choice:'앞줄에서 박수를 맞춰 주고 지안이의 손짓을 기다린다',
  reply:'아까 앞에서 바로 받아 준 거 봤어요. 덕분에 뒤에서도 따라오더라고요. 다음엔 내가 신호 줄 테니까 같이 시작해 볼래요?',
  skill:'표현력'
 },
 '학습 멘토링 워크숍': {
  person:'임하나', place:'center', location:'연화동 문화센터 · 학습 멘토링 워크숍',
  title:'여기까진 알겠어요', after:1, publicEvent:true,
  opening:'짝을 지어 풀이를 설명하는 시간이었다. 내가 같은 식을 두 번째 읽자 하나가 연필 끝으로 바로 윗줄을 가리켰다.',
  invitation:'…있잖아요, 여기까진 저도 알겠어요. 근데 다음 줄에서 숫자가 갑자기 바뀌잖아요. 과외할 때도 애들이 꼭 여기서 조용해지더라고요.',
  choice:'식 사이에 빠뜨린 풀이를 한 줄 써 넣는다',
  reply:'아, 이제 알겠어요. 이 줄 쓰고 나니까 저한테도 설명해 볼 수 있을 것 같죠? 이번엔 제가 해 볼게요.',
  skill:'표현력'
 },
 '주거 계약 특강': {
  person:'백지한', place:'center', location:'연화동 문화센터 · 주거 계약 특강',
  title:'사진 밖에 있는 것', after:1, publicEvent:true,
  opening:'지한이 가상의 매물 카드 두 장을 돌렸다. 같은 월세가 적혀 있었지만, 한쪽 카드에는 관리비 칸이 비어 있었다.',
  invitation:'둘 중에 어디 먼저 보러 가실래요? 사진으로 찍으면 오른쪽이 좀 더 근사하긴 하죠.',
  choice:'오른쪽 카드에서 관리비 칸이 비어 있다고 짚는다',
  reply:'그 칸 비어 있는 거 보셨네요. 제가 매물 보여 드릴 때도 그거부터 물어보세요. 아, 이제 제가 더 긴장해야겠는데요?',
  skill:'생활력'
 },
 '디자인 워크숍': {
  person:'차유리', place:'center', location:'연화동 문화센터 · 디자인 워크숍',
  title:'문 앞에서 읽히는 글자', after:1, publicEvent:true,
  opening:'동네 장터 포스터 시안을 벽에 붙였다. 유리는 내 옆을 지나 강의실 문 앞까지 물러섰다.',
  invitation:'여기 와서 봐요. 그림은 잘 보이죠? 그런데 장터가 며칠인지 보여요?',
  choice:'날짜를 제목 아래로 옮기고 그림과의 간격을 벌린다',
  reply:'이제 문 앞에서도 날짜부터 보이네요. 그림도 덜 답답해졌고요. 이 상태로 한 장 뽑아 봐요.',
  skill:'창의성'
 },
 '아마추어 게임 대회': {
  person:'한시우', place:'pc', title:'그때 왜 멈췄어요?', after:1, publicEvent:true,
  opening:'대회 마지막 경기에서 상대를 쫓다 멈춰 섰다. 뒤늦게 합류한 아군과 함께 상대의 역습을 막아 냈다. 경기가 끝나고 헤드셋을 벗는데, 해설석에 있던 한시우가 리플레이를 띄워 놓고 손을 흔들었다.',
  invitation:'아까 여기서 왜 멈췄어요? 중계할 땐 상대 놓친 줄 알았거든요. 다시 보니까 먼저 뒤를 확인했네.',
  choice:'팀원이 따라올 때까지 기다린 장면을 다시 본다',
  reply:'아, 팀원이 오는 소리 듣고 멈췄구나. 그래서 상대가 돌아왔을 때 둘이 같이 막았네요. 잠깐만, 이건 해설할 때 내가 놓친 건데요? 한 번만 더 돌려 봐요.',
  skill:'게임숙련도'
 },
 '지역 안전 교육': {
  person:'정태오', place:'police', title:'아이 눈높이에서', after:1, publicEvent:true,
  opening:'주민 안전 교육이 끝날 무렵, 맨 앞줄 아이가 손을 들었다가 내렸다. 태오는 설명을 멈추고 아이 앞에 쪼그려 앉았다.',
  invitation:'질문 있으십니까? …천천히 말씀하셔도 됩니다. 뒤에 기다리는 사람 없습니다.',
  choice:'뒤쪽 의자를 치우고 아이가 말을 꺼낼 때까지 기다린다',
  reply:'감사합니다. 앞에 어른이 빽빽하게 앉아 있으면 저라도 말하기 어렵겠습니다.',
  skill:'사교성'
 },
 '카페 실습': {
  person:'강도윤', place:'cafe', title:'마감 후 한 잔', after:4,
  opening:'도윤이 문패를 뒤집고 카운터에 잔 두 개를 올려놓았다.',
  invitation:'하하, 원두 조금 남겨 뒀어요. 아까 내린 거랑 비교해 볼래요?',
  choice:'분쇄도를 한 칸 바꿔서 맛을 비교한다',
  reply:'이번 잔이 조금 더 묵직하죠? 설정 적어 둬요. 다음에 같은 맛 내고 싶을 때 쓰게.',
  skill:'생활력'
 },
 '영상 편집 연습': {
  person:'공재희', place:'home', location:'연화빌라 · 영상 통화', title:'첫 십 초', after:4,
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
 if(seen?.[activity]||(!scene.publicEvent&&(!v.met[scene.person]||!socialRecord(scene.person).contact))||
    npcLifeBusy(scene.person,v.day,v.slot)||professionCount(activity)<scene.after)return null;
 if(scene.publicEvent){
  v.met[scene.person]=true;
  socialRecord(scene.person).lastSeen=v.day;
 }
 return {person:scene.person,place:scene.place,day:v.day,slot:v.slot,
  description:scene.opening,practiceScene:{activity}};
}

function renderPracticeScene(ev){
 const v=initSim(), record=developmentRecord(), event=ev.practiceScene;
 const scene=practiceScenes[event.activity];
 $('progress').textContent=scene.title;
 if(scene.location)$('where').textContent=scene.location;
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
