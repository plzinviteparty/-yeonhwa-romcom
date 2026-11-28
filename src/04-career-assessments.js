const careerAssessments = {
 '게임 개발자': {
  title:'프로젝트 심사와 기술 면접', work:'개인 게임 빌드와 테스트 기록을 제출했다.',
  question:'면접관이 재현하기 어려운 오류부터 어떻게 확인하겠냐고 물었다.',
  choices:['발생 조건을 기록하고 같은 상황을 재현한다','일단 코드를 한꺼번에 고친다'],
  feedback:'오류가 재현되는 조건을 확인하는 과정이 빠졌다.',
  mentor:'서이준', advice:'…오류가 난 조건부터 하나씩 적어 봐요. 그래야 다음에도 같은 문제가 생겼을 때 찾을 수 있어요.'
 },
 '바리스타': {
  title:'바리스타 필기·실기 평가', work:'필기 답안지를 제출하고 실습대에 섰다.',
  question:'시음해 보니 커피가 목표보다 묽었다. 다시 추출할 기회가 한 번 남았다.',
  choices:['분쇄도와 추출 기록을 확인하고 한 조건만 바꾼다','원두와 물의 양을 한꺼번에 바꾼다'],
  feedback:'여러 조건을 동시에 바꿔 맛이 달라진 원인을 설명하기 어려웠다.',
  mentor:'강도윤', advice:'영업 끝난 뒤에 한 번 더 내려 볼까요? 바꾼 조건을 적어 두면 뭐가 달라졌는지 알기 쉬워요.'
 },
 '제과제빵사': {
  title:'제과제빵 필기·실기 평가', work:'위생과 재료 관리에 관한 필기 답안을 제출하고 빵을 굽기 시작했다.',
  question:'반죽이 예상보다 천천히 부풀었다. 오븐에 넣기 전 무엇을 할까?',
  choices:['반죽 상태와 발효 환경을 확인한다','시간표에 맞춰 바로 오븐에 넣는다'],
  feedback:'시간표를 따르기 전에 반죽이 충분히 발효됐는지 확인할 필요가 있었다.',
  mentor:'강도윤', advice:'어느 시점부터 달라졌는지 적어 뒀어요? 그 기록부터 같이 봐요.'
 },
 '작가': {
  title:'원고 투고와 계약 심사', work:'완성한 원고를 출판사에 보냈다. 편집자가 수정 의견을 보내 왔다.',
  question:'중반에서 주인공이 결정을 바꾸는 이유가 잘 보이지 않는다고 한다.',
  choices:['앞 장면을 다시 읽고 결정의 계기가 드러나도록 고친다','결론만 바꿔서 다시 보낸다'],
  feedback:'편집자는 주인공이 마음을 바꾸는 계기가 앞 장면에도 보여야 한다고 답했다.',
 },
 '콘텐츠 제작자': {
  title:'영상 포트폴리오 심사', work:'기획 의도와 함께 완성한 영상을 제출했다.',
  question:'첫 장면을 보고도 어떤 영상인지 예상하기 어렵다는 의견이 왔다.',
  choices:['핵심 장면을 앞에 두고 도입부를 다시 편집한다','화면 효과를 더 많이 넣는다'],
  feedback:'화면은 화려해졌지만 영상의 주제가 도입부에서 여전히 드러나지 않았다.',
  mentor:'공재희', advice:'앞에 십 초만 다시 잘라 볼래요? 거기만 손봐도 느낌 확 달라질 것 같은데 ㅎㅎ'
 }
};

function assessmentRecord(name){
 const r=professionRecord();
 const records=r.assessments||(r.assessments={});
 return records[name]||(records[name]={attempts:0,passed:false,retryAt:0});
}

function assessmentAvailable(name){
 return !careerAssessments[name]||assessmentRecord(name).passed||
   professionCount(professionRoutes[name][0])>=assessmentRecord(name).retryAt;
}

function renderCareerAssessment(ev){
 const v=initSim(), o=ev.professionEvent, name=o.name;
 const a=careerAssessments[name], record=assessmentRecord(name), career=professionRecord();
 $('progress').textContent=a.title;
 add('이야기',a.work);
 add('이야기',a.question);
 if(o.assessmentChoice===undefined){
  for(const [index,label] of a.choices.entries())choiceButton(label,()=>{
   if(o.assessmentChoice!==undefined)return;
   o.assessmentChoice=index;
   record.attempts++;
   const health=healthRecord();
   o.feedback=[];
   if(index!==0)o.feedback.push(a.feedback);
   if(v.energy<20||(health.fatigue||0)>=85){
    o.feedback.push('컨디션이 좋지 않아 준비한 만큼 보여 주기 어려웠다. 다음 응시 전에는 휴식을 챙겨 보자.');
   }
   o.passed=o.feedback.length===0;
   record.lastFeedback=o.feedback;
   if(o.passed){
    record.passed=true;
    albumUnlock('event','career-assessment:'+name,'',a.title+' 통과',[['기록',a.title+' 통과']],v.day);
   }else{
    record.retryAt=professionCount(professionRoutes[name][0])+2;
   }
   writeJournal('진로 · '+a.title+(o.passed?' 통과':' 재도전 필요'));
   save();
   renderChoiceEvent();
  });
  return;
 }
 add(state.name,a.choices[o.assessmentChoice],true);
 add('시스템',o.passed?'심사를 통과했다.':'이번에는 통과하지 못했다. 관련 활동을 2회 더 하면 다시 도전할 수 있다.');
 for(const line of o.feedback||[])add('기록',line);
 if(o.answer){
  add(state.name,o.answer,true);
  if(o.askedMentor)add(a.mentor,a.advice);
  choiceButton('일정 계속하기',finishEvent);
  return;
 }
 const choose=(label,keep,askedMentor=false)=>{
  if(o.answer)return;
  o.answer=label;
  o.askedMentor=askedMentor;
  career.prepared=keep&&o.passed;
  if(!keep){
   career.target=null;
   career.history.push({day:v.day,target:null,source:'진로 재탐색'});
  }
  writeJournal('진로 · '+name+' / '+label);
  save();
  renderChoiceEvent();
  renderSim();
 };
 const keep=o.passed?'이 길을 계속 준비한다':'보완해서 다시 도전한다';
 choiceButton(keep,()=>choose(keep,true));
 if(!o.passed&&a.mentor&&socialRecord(a.mentor).contact){
  const ask=a.mentor+'에게 조언을 구한다';
  choiceButton(ask,()=>choose(ask,true,true));
 }
 const explore='다른 진로를 알아본다';
 choiceButton(explore,()=>choose(explore,false));
}

const assessmentFees = {
 '게임 개발자':0, '바리스타':30000, '제과제빵사':35000, '작가':0, '콘텐츠 제작자':0
};

function assessmentDates(day){
 const dates=[];
 for(let d=day;d<=Math.min(364,day+28);d++){
  if((d-1)%7>=5&&![299,300].includes(d)&&!dateBook()[d]?.trip)dates.push(d);
 }
 return dates;
}

function assessmentBookingPanel(root,name,status){
 const v=initSim(), career=professionRecord(), record=assessmentRecord(name);
 if(record.passed)return;
 const dates=assessmentDates(v.day);
 const fee=assessmentFees[name];
 const current=record.bookedDay>=v.day?record.bookedDay:null;
 const info=document.createElement('p');
 info.textContent=(current?'예약 · '+calendarDate(current).label+' · ':'토·일 응시 · ')+(fee?'응시료 '+fee.toLocaleString()+'원 (응시 당일 결제)':'응시료 없음');
 root.append(info);
 for(const line of record.lastFeedback||[]){
  const feedback=document.createElement('p');
  feedback.className='muted-note';
  feedback.textContent='지난 평가 · '+line;
  root.append(feedback);
 }
 const locked=()=>v.finished||!!v.running||!!v.activeEvent||career.target!==name;
 if(current){
  const cancel=document.createElement('button');
  cancel.textContent='예약 취소';
  cancel.disabled=locked();
  cancel.onclick=()=>{
   if(locked())return;
   delete record.bookedDay;
   save();
   renderSim();
   syncSchedule();
  };
  root.append(cancel);
  return;
 }
 if(!professionReady(name)||!assessmentAvailable(name))return;
 if(!dates.length){
  status.textContent='올해 남은 응시 일정이 없다.';
  return;
 }
 const select=document.createElement('select'), book=document.createElement('button');
 select.setAttribute('aria-label',careerAssessments[name].title+' 응시 날짜');
 for(const day of dates)scheduleOption(select,day,calendarDate(day).label);
 select.disabled=book.disabled=locked();
 book.textContent='응시 예약';
 book.onclick=()=>{
  const day=Number(select.value);
  if(locked()||record.bookedDay>=v.day||!assessmentDates(v.day).includes(day))return;
  record.bookedDay=day;
  save();
  renderSim();
  syncSchedule();
 };
 root.append(select,book);
}

function startBookedAssessment(){
 const v=initSim(), {target:name,prepared}=professionRecord();
 if(prepared||!Object.hasOwn(careerAssessments,name))return false;
 const record=assessmentRecord(name);
 if(record.passed||record.bookedDay!==v.day||!professionReady(name)||!assessmentAvailable(name))return false;
 delete record.bookedDay;
 const fee=assessmentFees[name];
 if(v.money<fee){
  writeJournal('진로 · 응시료 부족으로 '+careerAssessments[name].title+' 예약 취소');
  v.activeEvent={place:'home',day:v.day,description:'응시료가 부족해 평가 예약이 취소됐다. 진로 화면에서 다시 예약할 수 있다.',assessmentMissed:true};
 }else{
  v.money-=fee;
  v.activeEvent={place:'home',day:v.day,description:'예약한 진로 평가에 응시했다.',professionEvent:{name,assessment:true}};
 }
 save();
 renderChoiceEvent();
 return true;
}
