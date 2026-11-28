const programmingClass = '프로그래밍 수업';
const programmingTopics = ['코딩 기초', '웹 개발', '프로그램 제작', '정보 보안'];
const programmingScenes = [
 {title:'익숙한 얼굴', after:1, narration:'노트북을 켜고 있는데 강의실 문이 열렸다. 출석부를 훑던 강사가 내 이름에서 잠시 멈췄다.',
  known:'…여기서 뵐 줄은 몰랐네요. 오늘은 제가 수업을 맡았습니다.',
  first:'서이준입니다. 오늘 수업을 맡았습니다. 노트북부터 켜 주세요.'},
 {title:'오류를 찾는 시간', after:3, narration:'이준이 내 모니터를 들여다보려고 의자 옆에 섰다.',
  known:'이 줄에서 변수 이름이 달라졌어요. 같은 이름으로 맞춘 다음 다시 실행해 보세요.'},
 {title:'수업이 끝난 뒤', after:5, narration:'마지막 수강생이 문을 닫고 나가자 이준이 노트북을 덮었다.',
  known:'질문 더 있으세요? …없으면 커피라도 한잔할까요? 이제 수업도 끝났으니까.',
  dating:'질문 더 없으세요? …흠. 수업 끝났는데 아직도 존댓말이 나오네. 커피 마시고 갈래?'},
 {title:'첫 번째 프로그램', after:8, narration:'내가 만든 프로그램을 실행하자 이준이 입력 칸을 비운 채 버튼을 눌러 봤다. 안내 문구가 뜨는 걸 보고 입꼬리를 올렸다.',
  known:'빈칸일 때도 처리를 해 뒀네요. 잘 만들었어요.'}
];

function attendProgrammingClass(){
 const v=initSim(), d=developmentRecord();
 if(v.energy<12)return {place:'center',note:'체력이 부족해 수업 대신 쉬었다.'};
 const course=d.programming||(d.programming={lessons:0,nextScene:0});
 const topic=programmingTopics[Math.min(programmingTopics.length-1,Math.floor(course.lessons/2))];
 const known=!!v.met.서이준;
 v.energy-=12;
 const health=healthRecord();
 health.fatigue=Math.min(100,health.fatigue+8);
 v.skills.기술력+=3;
 v.skills.지성+=1;
 course.lessons++;
 const result={place:'center',note:programmingClass+' · '+topic+' (기술력 +3 / 지성 +1)'};
 const scene=programmingScenes[course.nextScene];
 if(scene&&course.lessons>=scene.after&&course.lastSceneDay!==v.day&&
    !npcLifeBusy('서이준',v.day,v.slot)&&Math.random()<.55){
  result.programmingScene={index:course.nextScene,known,dating:vIsDating('서이준')};
  course.nextScene++;
  course.lastSceneDay=v.day;
  v.met.서이준=true;
  socialRecord('서이준').lastSeen=v.day;
 }
 return result;
}

function renderProgrammingScene(ev){
 const scene=programmingScenes[ev.programmingScene.index];
 const {known,dating}=ev.programmingScene;
 $('where').textContent='연화동 문화센터';
 $('progress').textContent=programmingClass+' · '+scene.title;
 add('이야기',scene.narration);
 add('서이준',(dating&&scene.dating)||(!known&&scene.first)||scene.known,false,false,null,true);
 choiceButton('일정 계속하기',finishEvent,true);
}
