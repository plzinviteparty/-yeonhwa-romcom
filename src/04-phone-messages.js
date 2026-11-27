const phoneScripts={"공재희":[["머해요","나 방종했는데ㅋㅋ","방송 잘했어요?","오늘 도네 좀 받았어요ㅋㅋ","재희 씨 생각하고 있었어요.","모야모야? 진짜?ㅋㅋ"],["오늘 수업 갔다옴","출석 성공ㅋㅋ","고생했어요.","이제 잘 거예요.","나중에 같이 놀아요.","웅ㅋㅋ 언제?"]],
'서이준':[['오늘도 바쁘셨나 봐요.','저녁은 먹었어요? 또 대충 때운 건 아니고요?','챙겨 먹었어요. 이준 씨는요?','저도 먹었어요. 그럼 됐네요.','걱정해 주시는 거예요?','…궁금하면 안 돼요?'],['빌라 앞에 고양이가 와 있네요.','사진 찍으려니까 냅다 도망가더라고요.','다음엔 같이 보러 가요.','좋습니다.','저 생각나서 연락하셨어요?','…고양이 보면 그쪽 생각이 좀 나서요.']],
'강도윤':[['오늘 모카가 산책을 두 번이나 갔어요.','덕분에 저도 운동했네요.','모카는 신났겠네요!','네, 아직도 더 나가고 싶어 해요.','다음엔 저도 같이 가고 싶어요.','좋아요. 모카도 좋아하겠는데요?'],['새로운 디저트를 만들어 봤어요.','다음에 오시면 맛 좀 봐 주세요.','기대할게요!','입맛에 맞았으면 좋겠네요.','저한테 먼저 맛보여 주시는 거예요?','네. 의견이 궁금해서요.']],
'한시우':[['오늘 연습 끝!','이제야 밥 먹으러 가요 ㅋㅋ','고생했어요. 맛있는 거 드세요!','감사합니다 ㅋㅋ','저한테 제일 먼저 자랑하는 거예요?','오, 그렇게 생각해도 되는데요?'],['재밌는 게임 발견했어요','혼자 하기엔 좀 아까운데','어떤 게임이에요?','다음에 보여 드릴게요!','저랑 같이 하고 싶으신 거죠?','들켰네요 ㅋㅋ']],
'정태오':[['오늘 바람이 차더라고요.','외출하실 때 겉옷 챙기십시오.','태오 씨도 조심하세요.','감사합니다.','저 챙겨 주시는 거예요?','…네.'],['수영을 마치고 돌아가는 길입니다.','오늘 하루는 어떠셨습니까?','무난하게 잘 보냈어요.','다행입니다.','태오 씨 얘기도 듣고 싶어요.','그럼 잠시 이야기할까요.']],
'백지한':[['오늘 길에서 괜찮은 가게를 발견했어요.','생각나서 연락했는데, 잘 지내시죠?','어떤 가게인데요?','다음에 알려 드릴게요.','제 생각이 나셨어요?','네. 그럼 안 됩니까?'],['오늘은 일찍 퇴근했어요.','저녁에 뭐 하세요?','집에서 쉬려고요.','푹 쉬세요.','지한 씨는 저랑 놀고 싶으세요?','이렇게 쉽게 들켜도 되나.']],
'임하나':[['저기, 지금 연락해도 괜찮아요?','오늘은 조금 일찍 쉬게 됐어요.','잘됐네요. 푹 쉬어요.','네! 감사해요.','쉬는 시간에 저한테 연락해 준 거예요?','네… 이야기하고 싶었어요.'],['오늘 맛있는 빵을 발견했어요.','다음에 알려 드릴게요.','어떤 빵인지 궁금해요.','크림이 들어간 빵이에요!','다음엔 같이 먹어요.','좋아요…!']],
'차유리':[['작업 드디어 끝났어요!','오늘은 아무것도 안 할 거예요 ㅎㅎ','고생했어요!','이제 좀 살겠네요.','저랑 놀면서 쉬는 건 어때요?','그건 예외죠!'],['예쁜 소품 가게를 발견했어요.','구경하는 재미가 있더라고요.','어디인지 알려 주세요.','다음에 알려 드릴게요!','같이 구경하고 싶어요.','좋아요. 취향도 궁금해요.']],
'오세린':[['오늘 병원 일이 조금 일찍 끝났어요.','하루 잘 보내셨나요?','네. 세린 씨도 고생하셨어요.','고마워요.','연락 주셔서 기분 좋아졌어요.','저도 답장이 와서 좋네요.'],['오늘 귀여운 강아지가 다녀갔어요.','덕분에 잠깐 웃었네요.','어떤 강아지였어요?','꼬리를 정말 열심히 흔들더라고요.','세린 씨 웃는 모습 보고 싶네요.','어머, 그런 말을 다 하시네요.']],
'유지안':[['오늘 수업 끝났어요!','몸은 힘든데 기분은 좋네요.','고생했어요. 푹 쉬세요!','네! 오늘은 일찍 잘래요.','저랑 얘기하면 더 기분 좋아질까요?','그럴지도요!'],['오늘 러닝하기 좋은 날이었어요.','요즘 운동은 잘하고 계세요?','조금씩 하고 있어요.','꾸준히 하는 게 최고예요!','다음엔 같이 뛰고 싶어요.','좋아요! 페이스 맞춰 드릴게요.']]
};
let phoneSelected=null;
function phoneData(){
 const v=initSim(),phone=v.phone||(v.phone={threads:{},last:{}});
 syncRepairMessages(v,phone);
 return phone;
}
function confirmScheduledOuting(day,plan){
 const trip=plan.trip;
 if(plan.phoneConfirmed||(!plan.sharedLife&&trip?.stage!==1))return false;
 const when=calendarDate(day).label+(trip?' '+dayLabels[plan.slot??0]+'에 출발해서 '+calendarDate(day+1).label+'까지':' '+dayLabels[plan.slot]+'에');
 const activity={shopping:'같이 장 봐요.',cooking:'같이 요리해요.',home:'집에서 같이 쉬어요.'};
 const playerLine=when+' '+(trip?plan.venue+' 같이 가요.':activity[plan.sharedLife]);
 const threads=phoneData().threads;
 for(const p of trip?trip.people:[plan.p]){
  const thread=threads[p]||(threads[p]=[]);
  thread.push({day:initSim().day,booking:true,playerLine,npcLine:dateConfirmLines[p][0],reply:1});
 }
 plan.phoneConfirmed=true;
 return true;
}
function movePendingHomeVisits(v){
 let changed=false;
 for(const [date,plan] of Object.entries(dateBook())){
  const day=Number(date);
  if(!plan||plan.sharedLife!=='home'||plan.slot===3||day<v.day||day===v.day&&v.running)continue;
  if(!sharedLifeSlotFree(plan.p,day,3,'home'))continue;
  plan.slot=3;
  if(plan.phoneConfirmed){
   const threads=phoneData().threads;
   const thread=threads[plan.p]||(threads[plan.p]=[]);
   thread.push({day:v.day,booking:true,playerLine:calendarDate(day).label+' 저녁에 집에서 같이 쉬어요.',npcLine:dateConfirmLines[plan.p][0],reply:1});
  }else confirmScheduledOuting(day,plan);
  changed=true;
 }
 if(changed)save();
}
function confirmPendingOutings(day){
 let changed=false;
 for(const [date,plan] of Object.entries(dateBook())){
  if(Number(date)>=day&&confirmScheduledOuting(Number(date),plan))changed=true;
 }
 if(changed)save();
}

function phoneBadge(){const d=phoneData(),n=Object.values(d.threads).reduce((n,t)=>n+unreadPhoneCount(t),0);$('phoneTab').textContent='휴대전화'+(n?' ('+n+')':'')}
const extraPhoneScripts={"공재희":[["인형 또 뽑았어요","집에 둘 데 없는데","어떤 인형이에요?","분홍색 토끼ㅋㅋ","다음에 보여 줘요.","웅 가져갈게요"],["오늘 편집하다가 영상 날릴 뻔함ㅋㅋ","저장 진짜 중요하다…","복구했어요?","다행히 자동 저장 있었어요ㅠㅠ","이제 좀 쉬어요.","웅 맛있는 거 먹어야지ㅋㅋ"],["편의점 신상 디저트 먹어봤어요?","후기 궁금한데","아직 안 먹어 봤어요.","그럼 제가 먼저 먹어봄ㅋㅋ","같이 먹어 볼래요?","오 좋죠ㅋㅋ"],["오늘 방송 안 켜고 쉴 거예요","뭐 하고 놀지 고민중","푹 쉬어요.","웅 오늘은 진짜 쉬어야지","저랑 놀아요.","헐 좋아요ㅋㅋ"]],"서이준":[["현관 앞 택배가 와 있더라고요.","혹시 댁 물건인지 확인해 보세요.","알려 주셔서 감사해요.","별일 아닙니다.","이웃이 이준 씨라 다행이에요.","그 정도예요? ……듣기는 좋네요."],["오늘은 일이 일찍 끝났어요.","오랜만에 여유가 있네요.","푹 쉬세요.","네. 그러려고요.","저랑 이야기할 여유도 있어요?","있어요. 지금은요."],["빌라 앞에 처음 보는 고양이가 있어요.","조금만 다가가도 뒤로 숨네요.","멀리서 지켜봐야겠네요.","네. 저도 여기서만 보려고요.","다음에 같이 보러 가요.","네. 조용히 가 보죠."],["요즘 저녁은 잘 챙겨 먹어요?","바쁘면 자꾸 거르게 되잖아요.","잘 챙기려고요.","다행입니다.","이준 씨도 잘 챙겨요.","알겠습니다. 걱정해 주셔서 감사합니다."]],"강도윤":[["오늘 쿠키가 조금 남았어요.","내일 드릴까요?","감사해요!","따로 챙겨 둘게요.","저만 주시는 거예요?","이상하네. 다른 사람한테는 잘 안 들키는데요."],["원두 샘플이 잔뜩 왔어요.","향이 전부 달라서 재미있네요.","어떤 게 제일 좋아요?","오늘은 과일 향이 나는 게 좋네요.","다음에 저도 골라 볼래요.","좋아요. 같이 골라요."],["오늘 강아지가 장난감을 숨겨 놨어요.","한참 찾았네요 ㅎㅎ","귀엽네요.","덕분에 웃었어요.","사진도 보여 주세요.","좋아요! 다음에 찍어 둘게요."],["오늘은 저도 커피 말고 차가 당기네요.","이런 날도 있죠.","차도 좋아하세요?","네, 향이 좋은 차요.","같이 마시면 좋겠어요.","저도 그러면 좋겠네요."]],"한시우":[["오늘 연습에서 이겼어요!","야호!!","축하해요!","오, 감사합니다! ㅎㅎ","제일 먼저 자랑하러 왔어요?","오, 눈치 빠른데요?"],["편의점 신상 봤어요?","이름부터 수상해요 ㅋㅋ","맛이 궁금하네요.","제가 먼저 먹어 볼게요.","같이 도전해요.","좋아요ㅋㅋ 혼자 죽지 않겠다!"],["오늘 알람 세 개나 껐어요.","큰일 날 뻔 ㅋㅋ","피곤했나 봐요.","그러게요. 일찍 자야죠.","제가 깨워 드릴까요?","진짜요? ㅋㅋ"],["요즘 듣는 노래 있어요?","플레이리스트가 지겨워졌어요.","추천해 드릴게요.","오! 기대할게요.","같이 들으면 좋겠네요.","좋죠!"]],"정태오":[["오늘 수영 기록이 조금 좋아졌습니다.","꾸준히 하니 효과가 있군요.","축하합니다!","감사합니다.","다음엔 같이 수영해요.","좋습니다. 시간을 맞춰 보죠."],["오늘 동네가 조용했습니다.","별일 없는 하루가 좋군요.","다행이에요.","그렇습니다.","태오 씨도 편히 쉬어요.","네. 감사합니다."],["길을 걷다가 괜찮은 산책로를 발견했습니다.","사람이 많지 않더라고요.","좋은 곳이네요.","네. 조용합니다.","같이 가 보고 싶어요.","그럼 다음에 안내하겠습니다."],["오늘 식사를 조금 늦게 했습니다.","이제 쉬려고 합니다.","고생하셨어요.","감사합니다.","쉬기 전에 저랑 이야기해요.","좋습니다. 잠시라면......"]],"백지한":[["오늘 매물 사진을 정리하다 보니","집마다 분위기가 참 다르네요.","어떤 집이 좋으세요?","채광 좋은 집이요.","저랑 취향이 맞는지 궁금해요.","어라, 집 취향만요?"],["괜찮은 식당을 하나 발견했어요.","혼자 가기엔 아깝더라고요.","어떤 음식이에요?","파스타가 괜찮아 보여요.","저랑 가면 되겠네요.","그 말을 기다렸나 봅니다."],["오늘은 일찍 끝났는데","뭘 해야 잘 놀았다는 소문이 날까요?","영화라도 보세요.","그것도 좋죠.","저랑 놀면 되죠.","이렇게 쉽게 해결될 일이었네요?"],["오늘 길에서 예쁜 조명을 봤어요.","동네가 제법 분위기 있더라고요.","어디예요?","다음에 알려 드리죠.","같이 보러 가요.","좋아요. 혼자 보기 아까웠거든요."]],"임하나":[["...... 있잖아요.","오늘 과외가 조금 일찍 끝났어요.","잘됐네요. 쉬어요.","네. 그러려고요.","저랑 이야기할래요?","네! 좋아요."],["오늘 편의점에 새 빵이 들어왔어요.","맛있어 보여서 하나 샀어요.","맛있게 드세요.","감사해요.","다음엔 같이 먹어요.","...... 좋아요."],["요즘 읽을 책을 찾고 있어요.","추천해 주실 만한 게 있나요?","생각해 볼게요.","감사해요.","같이 서점 구경할까요?","저랑요? 좋아요."],["오늘은 집에 가는 길이 조용했어요.","그냥 조금 이야기하고 싶어서요.","편하게 이야기해요.","고마워요.","먼저 연락해 줘서 좋아요.","...... 정말요?"]],"차유리":[["작업하다가 색 조합 하나 건졌어요.","이런 날은 기분 좋다.","축하해요!","고마워요.","다음에 보여 줄래요?","좋아요. 같이 봐요."],["오늘은 아무것도 안 사고 구경만 했어요.","나름 대단하지 않아요?","잘 참았네요.","그러니까요!","다음엔 같이 구경할까요?","좋아요. 어디부터 갈까요?"],["새로운 음악 틀어 놓고 작업 중이에요.","집중이 잘되네요.","어떤 음악이에요?","잔잔한 연주곡이요.","저도 같이 듣고 싶어요.","그럼 나중에 같이 들어 볼래요?"],["오늘 작업 끝!","이제 맛있는 거 먹을 시간이에요.","맛있게 먹어요.","네!","뭐 먹을지 같이 정할까요?","좋아요. 뭐 먹고 싶어요?"]],"오세린":[["오늘 진료를 잘 마쳤어요.","마음이 한결 가볍네요.","고생하셨어요.","고마워요. 후후.","세린 씨도 돌봄받아야죠.","어머, 그렇게 말해 주니 좋네요."],["허브차를 새로 샀어요.","향이 참 좋네요.","무슨 차예요?","캐모마일이에요.","같이 마시고 싶어요.","좋아요. 여유 있을 때 마셔요."],["오늘 귀여운 강아지가 왔어요.","꼬리를 어찌나 흔들던지.","귀엽겠어요.","어머, 정말요?","세린 씨도 웃었겠네요.","그럼요. 덕분에 웃었죠."],["으음, 오늘은 저녁 메뉴가 고민이네요.","뭘 먹을까 싶어요.","따뜻한 국물 어때요?","좋은 생각이네요.","같이 먹으면 더 좋겠어요.","어머, 그래요?"]],"유지안":[["오늘 학생이 어려운 동작을 성공했어요!","와우! 제가 더 신났네요.","축하해요!","예쓰! 기분 최고예요.","지안 씨도 멋졌겠네요.","오~ 칭찬 감사합니다!"],["새 운동화 구경 중이에요.","색깔이 너무 많다!","잘 어울리는 걸 골라요.","좋죠!","같이 골라 볼까요?","예쓰! 의견 환영!"],["오늘 스트레칭하다가","몸이 좀 가벼워진 느낌이에요!","꾸준히 하니까 그렇죠.","맞아요!","다음에 같이 해요.","좋죠! 같이 풀어요."],["요즘 신나는 노래 찾고 있어요.","추천곡 있어요?","찾아 볼게요.","오예!","같이 들으면서 춤춰요.","와우, 그거 재밌겠다!"]]};for(const p of Object.keys(extraPhoneScripts))phoneScripts[p].push(...extraPhoneScripts[p]);
const memoryPhoneLines={"공재희":["지난번에 놀았던 거 생각남","또 가고 싶어요ㅋㅋ","요즘 왜 안 보여요","바빠요?"],"서이준":["지난번에 같이 나갔던 거요. 생각보다 재밌었어요.","그때 말하기는 좀 민망해서요.","요즘 얼굴 보기 힘드네요.","별일 있는 건 아니죠?"],"강도윤":["어제 이야기하다 보니 시간이 정말 빨리 갔어요.","오늘도 좋은 하루 보내세요!","요즘 얼굴을 못 봤네요.","잘 지내고 계세요?"],"한시우":["어제 진짜 재밌었어요 ㅋㅋ","다음에도 놀아요! ㅋㅋ","요즘 왜 이렇게 안 보여요?","잘 지내죠?"],"정태오":["어제 함께한 시간이 좋았습니다.","감사 인사를 드리고 싶었습니다.","최근 뵙지 못했군요.","잘 지내고 계십니까?"],"백지한":["어제는 제가 시간 가는 줄도 몰랐네요.","이런 일이 흔한 건 아닌데.","요즘 좀처럼 못 뵙네요.","잘 지내시죠?"],"임하나":["...... 있잖아요. 어제 정말 즐거웠어요.","말씀드리고 싶어서 연락했어요.","요즘 잘 지내세요?","한동안 못 뵌 것 같아서요."],"차유리":["어제 같이 있으니까 기분 전환 제대로 됐어요!","다음에도 시간 맞춰 볼까요?","요즘 얼굴 보기 어렵네요.","잘 지내고 있어요?"],"오세린":["어제 덕분에 여유로운 시간을 보냈어요.","고맙다는 말씀 드리고 싶었어요.","한동안 못 뵈었네요.","요즘 어떻게 지내세요?"],"유지안":["어제 완전 재밌었어요!","예쓰, 다음에도 같이 놀아요!","요즘 통 못 봤네요!","잘 지내고 있죠?"]};
const npcVoice={"공재희":["ㅇㅋㅋㅋ","모야. 나도요.","그럼 날짜 잡아요.","아 그래요?","나도 보고 싶었어요."],"서이준":["뭐, 기억해 둘게요.","…저만 그런 줄 알았는데.","다음엔 미리 말해요. 시간 비워 둘 테니까.","다행입니다.","그건 얼굴 보고 얘기해요."],"강도윤":["하하, 제가 더 고맙죠.","그 말 들으니 괜히 웃음이 나네요.","다음에는 제가 먼저 연락할게요.","잘 지낸다니 마음이 놓여요.","얼른 얼굴 보고 이야기하고 싶네요."],"한시우":["잘됐네요!","어, 저만 그런 줄 알았는데!","다음엔 제가 먼저 연락할게요. 약속!","오, 다행이다!","그럼 다음에 꼭 봐요!"],"백지한":["제 점수 좀 올라갔나요?","이러면 제가 또 기대하잖아요.","다음 코스도 생각해 둘게요.","그럼 안심해도 되겠네요.","이번엔 제가 먼저 찾아갈까요?"],"정태오":["감사합니다.","…저도 그렇습니다.","다음 일정을 확인해 보겠습니다.","다행입니다. 무리하지 마십시오.","다음에 뵙겠습니다."],"임하나":["다행이에요. 마음에 드셨으면 했어요.","저도요. ……말해 주셔서 고마워요.","다음에도 시간 괜찮으시면 좋겠어요.","걱정했는데 다행이에요.","네. 다음에 꼭 이야기해요."],"차유리":["좋다! 잘 골랐네요.","오, 통했네요.","다음엔 다른 데도 가 볼까요?","좋아요. 잘 쉬어요.","시간 맞으면 얼굴 봐요."],"오세린":["아아, 마음이 전해졌나 봐요.","저도 그 시간이 참 좋았어요.","다음에도 여유롭게 만나요.","마음이 놓이네요.","차 한잔하면서 이야기해요."],"유지안":["와우, 기분 좋네요!","저도 계속 생각났어요!","다음엔 더 신나게 놀아요!","좋아요! 컨디션 잘 챙겨요.","다음에 만나서 밀린 얘기 다 해요!"]},careerAdvice={"공재희":"남들이 하라는 거 말고 내가 할 수 있는 거부터 해 보면 안 돼요?","서이준":"잘하는 일이랑 계속 하고 싶은 일은 다르잖아요. 저도 일 바꾸고 나서야 알았어요.","강도윤":"잘하는 일이 꼭 평생 해야 할 일은 아니잖아요. 저도 제 가게를 어떻게 꾸려 갈지 고민 중이에요.","한시우":"잘한다고 계속 재밌는 건 아니더라고요. 다른 것도 해 보고 결정하면 안 돼요?","백지한":"그만둘 때 들어갈 돈부터 계산해 봐요. 하고 싶은 일도 현실적인 계획이 있어야 오래 가죠.","정태오":"지금 당장 결론을 내릴 필요는 없습니다. 생활을 유지할 방법부터 확보하십시오.","임하나":"저도 해야 하는 일과 하고 싶은 일이 자꾸 헷갈려요. 그래도 자기 마음을 무시하지 않았으면 좋겠어요.","차유리":"작은 작업부터 직접 해 봐요. 생각만 할 때랑 돈 받고 할 때는 다르거든요.","오세린":"직업이 삶의 전부는 아니에요. 어떤 하루를 살고 싶은지부터 생각해 보면 어떨까요?","유지안":"꿈이 바뀌어도 실패는 아니잖아요. 저도 무대 말고 다른 곳에서 춤추고 있으니까요."};
function nextMeetReply(p,day,salt=0){
 if(p!=='한시우')return npcVoice[p][2];
 // Stable across rerenders and saves; no additional state or serialized dialogue data.
 const lines=[
  '좋아요, 다음엔 제가 먼저 날짜 잡아 볼게요!',
  '히히, 사실 또 만날 핑계 찾고 있었어요.',
  '다음에는 제가 괜찮은 데 하나 찾아 둘게요.',
  '그러면 다음번엔 좀 더 오래 봐요. 아쉽단 말이에요.',
  '오, 벌써 다음 약속이 기다려지는데요?',
  '좋아요! 다음에 만나면 들려줄 얘기 모아 둘게요.',
  '저 먼저 연락해도 되죠? 진짜 할 건데.'
 ];
 const d=Number.isFinite(day)?day:1;
 return lines[((d+salt*2)%lines.length+lines.length)%lines.length];
}
const developmentProjects={"글쓰기":{"skill":"창의성","stages":[[12,30,"첫 원고 완성","짧은 이야기를 끝까지 썼다. 결말까지 도달한 원고를 다시 읽어 보니 처음의 문장과는 다른 자신이 보였다."],[28,60,"작품 공개","퇴고한 원고를 독자에게 공개했다. 이제 이야기는 혼자만의 것이 아니다."],[55,100,"두 번째 작품 완성","새로운 작품까지 완성했다. 꾸준히 쓰는 일이 자신의 생활에 자리 잡았다."]]},"개발":{"skill":"기술력","stages":[[12,30,"작동하는 프로토타입","오랫동안 수정하던 프로그램이 마침내 원하는 대로 작동했다."],[28,65,"개인 프로젝트 공개","테스트와 오류 수정을 거쳐 자신이 만든 프로그램을 공개했다."],[55,105,"프로젝트 개선판","사용자 의견을 반영해 기능을 개선했다. 처음보다 더 많은 것을 스스로 해결할 수 있다."]]},"디자인":{"skill":"창의성","stages":[[12,30,"첫 디자인 시리즈","한 가지 콘셉트로 작업물을 모았다. 자신이 좋아하는 색과 형태가 조금씩 분명해졌다."],[28,60,"포트폴리오 완성","작업물의 의도와 과정을 정리해 하나의 포트폴리오를 완성했다."],[55,100,"독립 디자인 프로젝트","자신의 취향과 목적이 담긴 새로운 시리즈를 공개했다."]]},"카페 실습":{"skill":"생활력","stages":[[12,30,"나만의 레시피","반복해 연습하던 음료의 맛을 일정하게 맞출 수 있게 되었다."],[28,65,"시그니처 메뉴 개발","직접 선택한 재료와 비율로 자신만의 음료를 완성했다."],[55,105,"카페 운영 계획","메뉴와 원가, 운영 방식을 정리해 작은 가게의 운영 계획서를 만들었다."]]},"공부":{"skill":"지성","stages":[[12,40,"학습 노트 완성","배운 것을 자신의 말로 정리한 노트가 한 권 분량이 되었다."],[28,85,"심화 학습 과정 완주","처음에는 어려웠던 문제를 스스로 설명할 수 있게 되었다."],[55,145,"나만의 학습 체계","오랫동안 쌓아 온 공부 방법과 자료를 정리했다."]]},"운동":{"skill":"운동능력","stages":[[15,30,"운동 습관 만들기","몸을 움직이는 시간이 일상의 일부가 되었다."],[35,75,"나만의 운동 기록","예전보다 오래 움직일 수 있게 되었다. 자신의 속도로 기록을 쌓았다."],[65,130,"꾸준한 훈련","기록보다 컨디션을 살피며 운동을 이어 가는 방법을 익혔다."]]},"게임":{"skill":"게임숙련도","stages":[[12,30,"나만의 공략 노트","반복 플레이하며 스스로 전략을 정리했다."],[28,70,"새로운 도전 과제","오랫동안 도전하던 게임의 목표를 달성했다."],[55,120,"게임 연구 기록","다양한 전략과 플레이 방식을 비교해 자신만의 공략 기록을 완성했다."]]},"교류":{"skill":"사교성","stages":[[12,30,"동네의 익숙한 얼굴","연화동에서 인사를 나누는 사람들이 늘어났다."],[28,65,"작은 교류 모임","함께 이야기하고 서로의 관심사를 나누는 자리를 만들었다."],[55,110,"나의 생활 공동체","연애 여부와 무관하게 일상을 함께 나눌 수 있는 관계를 쌓았다."]]}};
const careerEndingText={"employee":["나의 자리를 만들다","꾸준히 일하면서 자신의 업무를 익혔다. 안정적인 수입과 경험은 다음 해의 선택지를 넓혀 준다."],"employeeStart":["새로운 출근길","새로운 직장 생활을 시작했다. 아직 익숙하지 않은 일도 있지만 자신만의 자리를 만들어 가고 있다."],"freelance":["내 이름으로 일하다","외주 경험과 작업물을 쌓아 자신의 이름으로 일하는 기반을 마련했다."],"freelanceStart":["독립의 첫걸음","독립적으로 일하는 삶을 선택했다. 다음 해에는 수입과 작업의 균형을 더 다듬어야 한다."],"student":["배움이 쌓이는 계절","수업과 자기계발을 꾸준히 이어 갔다. 다음 학년을 준비하며 관심 분야를 조금 더 구체화했다."],"studentExplore":["아직 펼치지 않은 노트","아직 진로를 결정하지 않았지만 배움과 경험을 통해 자신에게 맞는 길을 탐색하고 있다."],"search":["다음 문을 두드리다","자기계발을 통해 다음 직업을 준비했다. 아직 취업이 확정된 것은 아니지만 보여 줄 작업물이 생겼다."],"explore":["길을 찾는 중","정해진 직업 없이 여러 가능성을 살펴보았다. 한 해의 경험은 다음 선택의 출발점이 된다."],"hobby":["나만의 세계","직업의 이름과 관계없이 자신이 좋아하는 일을 꾸준히 이어 가며 결과물을 만들었다."],"transition":["새로운 방향","익숙한 일에서 벗어나 다른 진로를 선택했다. 변화의 과정 자체가 한 해의 중요한 경험이었다."]};
function developmentRecord(){const v=initSim();return v.development||(v.development={counts:{},completed:{},days:{},workDays:{},restDays:{},fatigueDays:{},history:[]})}
function trackDevelopment(a,result,before){const v=initSim(),d=developmentRecord();if(!result||/부족|하지 못|대신 쉬/.test(result.note||''))return;const k=['수영','러닝','산책'].includes(a)?'운동':a==='PC방에서 게임하기'?'게임':a==='대학 수업'?'공부':a;if(developmentProjects[k]){const key=v.day+':'+v.slot+':'+a;if(d.days[key])return;d.days[key]=true;d.counts[k]=(d.counts[k]||0)+1}if(['출근','대학 수업','외주 작업','아르바이트'].includes(a)||partJobs[a]){const key=v.day+':'+a;d.workDays[key]=true}if(a==='휴식')d.restDays[v.day]=true;}
function developmentProgress(k){const v=initSim(),d=developmentRecord(),p=developmentProjects[k],legacy=k==='카페 실습'?v.experience.카페:v.experience[k];return Math.max(d.counts[k]||0,Number.isFinite(legacy)?legacy:0)}
function nextDevelopmentMilestone(){const v=initSim(),d=developmentRecord();for(const [k,p] of Object.entries(developmentProjects)){const n=d.completed[k]||0,a=p.stages[n];if(a&&developmentProgress(k)>=a[0]&&(v.skills[p.skill]||0)>=a[1])return {k,n};}return null}
function developmentGate(){const v=initSim(),m=nextDevelopmentMilestone();if(!m||v.day>=365)return false;v.activeEvent={place:'home',day:v.day,description:'꾸준히 해 온 일이 작은 결실을 맺었다.',developmentEvent:m};save();renderChoiceEvent();return true}
function renderDevelopment(ev){const v=initSim(),o=ev.developmentEvent,d=developmentRecord(),p=developmentProjects[o.k],a=p.stages[o.n];$('progress').textContent='나의 성장 · '+a[2];add('이야기',a[3]);if(o.answer){add(state.name,o.answer,true);choiceButton('일정 계속하기',finishEvent);return}for(const label of ['나의 결과물로 기록해 둔다','이번 성취를 다음 도전의 출발점으로 삼는다'])choiceButton(label,()=>{if(o.answer)return;o.answer=label;d.completed[o.k]=Math.max(d.completed[o.k]||0,o.n+1);d.history.push({day:v.day,kind:o.k,stage:o.n,title:a[2]});growInner('development:'+o.k+':'+o.n,{자기이해:2,책임감:2});writeJournal('자기계발 · '+a[2]);save();renderChoiceEvent();renderSim()})}
function developmentPanel(root){const v=initSim(),d=developmentRecord(),wrap=document.createElement('div');wrap.className='stat-card';const h=document.createElement('h2');h.textContent='나만의 성장 · 자기계발';wrap.append(h);for(const [k,p] of Object.entries(developmentProjects)){const n=d.completed[k]||0,a=p.stages[n],t=document.createElement('p');t.textContent=k+' · '+developmentProgress(k)+'회 · '+(a?'다음 목표: '+a[2]+' ('+a[0]+'회 / '+p.skill+' '+a[1]+')':'모든 목표 달성');wrap.append(t);if(n){const z=document.createElement('small');z.textContent=p.stages.slice(0,n).map(x=>x[2]).join(' · ');wrap.append(z)}}root.append(wrap)}
function careerSummary(){const v=initSim(),d=developmentRecord(),work=Object.keys(d.workDays),projects=Object.values(d.completed).reduce((a,b)=>a+b,0),workCount=k=>work.filter(x=>x.endsWith(':'+k)).length;return {job:state.job,work:Math.max(lifeRecord().work||0,workCount('출근')),freelance:workCount('외주 작업'),study:workCount('대학 수업'),projects,changes:lifeRecord().history.length,rest:Object.keys(d.restDays).length,fatigue:Object.keys(d.fatigueDays).length,money:v.money,skills:{...v.skills}}}
function careerEndingCode(a){switch(a.job){case '회사원':return a.work>=90?'employee':'employeeStart';case '프리랜서':return a.freelance>=30&&a.projects>=1?'freelance':'freelanceStart';case '대학생':return a.study>=50||a.skills.지성>=100?'student':'studentExplore';case '취업 준비생':return a.projects>=2?'search':a.changes?'transition':'explore';default:return a.projects>=2?'hobby':a.changes?'transition':'explore'}}
function annualCareerEnding(){const a=careerSummary(),code=careerEndingCode(a),t=careerEndingText[code],v=initSim(),d=developmentRecord();return {code,title:t[0],line:t[1],summary:a,results:d.history.map(x=>x.title),balance:a.fatigue>=20?'몸과 마음을 쉬게 하는 시간도 다음 해에는 더 필요하다.':a.rest>=60?'일과 휴식 사이에서 자신만의 리듬을 찾아 갔다.':'다음 해에도 자신에게 맞는 생활 리듬을 찾아갈 것이다.'}}
function captureCareerEnding(ev){const e=ev.careerEnding||annualCareerEnding(),lines=[['이야기',e.title],['이야기',e.line],['이야기',e.balance],['기록','직업 '+e.summary.job+' / 완성한 자기계발 목표 '+e.summary.projects+'개 / 소지금 '+e.summary.money+'원'],...e.results.map(x=>['성취',x])];albumUnlock('ending','career:'+e.code,'',e.title,lines,ev.day||initSim().day)}

const professionRoutes={"작가":["글쓰기",28,"창의성",60,"퇴고한 원고를 출판사에 제안했다.","첫 출판 계약을 맺고 작품을 출간했다."],"게임 개발자":["개발",28,"기술력",65,"개인 게임을 완성하고 테스트했다.","자신의 게임을 출시했다."],"프로게이머":["게임",55,"게임숙련도",120,"대회 준비와 경기 분석을 이어 갔다.","선발 테스트를 거쳐 팀에 합류했다."],"바리스타":["카페 실습",28,"생활력",65,"실습과 현장 경험을 쌓았다.","자신의 이름으로 커피를 내리는 바리스타가 되었다."],"제과제빵사":["제과제빵 실습",35,"생활력",70,"반죽과 굽기 실습을 이어 갔다.","관련 교육과 현장 경험을 거쳐 제과제빵 분야에서 일하게 되었다."],"물리치료사":["재활·인체 공부",35,"지성",95,"관련 학과 진학을 준비하고 재활 분야를 탐색했다.","수년 후 관련 학과 교육과 실습을 마치고 국가시험에 합격해 물리치료사 면허를 취득했다.",true],"경찰":["공직 시험 준비",40,"지성",100,"체력과 필기시험을 준비했다.","채용시험과 교육을 거쳐 경찰로 임용되었다.",true],"인테리어 디자이너":["디자인",35,"창의성",80,"공간 설계 포트폴리오를 준비했다.","공간 설계 프로젝트를 맡게 되었다."],"일러스트레이터":["디자인",35,"창의성",80,"그림을 모아 포트폴리오를 준비했다.","자신의 그림으로 작업을 의뢰받게 되었다."],"교사":["교육 공부",40,"지성",100,"교원 양성 과정 진학을 준비했다.","수년 후 교원 양성 과정과 자격 취득을 마치고 채용 절차를 거쳐 교사가 되었다.",true],"애견유치원 선생님":["반려견 돌봄 실습",20,"생활력",55,"보호소 봉사와 돌봄 실습을 통해 행동과 안전 관리에 관심을 갖게 되었다.","관련 교육과 현장 실습을 거쳐 애견유치원에서 반려견을 돌보게 되었다."],"반려동물 관련 사업가":["반려견 돌봄 실습",35,"생활력",80,"돌봄 실습과 운영 계획을 준비했다.","현장 경험과 사업 준비를 거쳐 반려동물 관련 사업을 시작했다."],"댄서·안무가":["댄스 연습",35,"운동능력",80,"춤을 연습하고 직접 안무를 만들었다.","자신의 안무로 무대에 서게 되었다."],"영상 편집자":["영상 편집 연습",35,"기술력",80,"편집 포트폴리오를 완성했다.","영상 편집 작업을 의뢰받게 되었다."],"인터넷 방송인":["방송 연습",35,"표현력",50,"콘텐츠 기획과 방송 연습을 이어 갔다.","자신의 콘텐츠를 방송하는 크리에이터가 되었다."]},professionCombos=[["물리치료사","한시우","경기를 마친 시우가 손목 보호대를 풀었다. 물리치료사 면허를 취득한 당신은 그의 손목 상태를 살피고 필요한 진료를 권했다.","오, 오늘도 손목 체크인가요? …이번엔 아프면 바로 말할게요."],["게임 개발자","서이준","이준이 당신의 완성 게임을 실행했다. 엔딩 크레딧이 올라갈 때까지 둘은 화면을 바라보았다.","…끝까지 만든 거, 진심으로 대단하다고 생각해요."],["게임 개발자","한시우","시우가 새 게임의 테스트 빌드를 켰다.","오예, 오늘은 내가 QA! 근데 진짜 재밌는데요?"],["프로게이머","한시우","서로의 경기 일정을 확인하고 응원 메시지를 보냈다.","콜! 오늘은 각자 경기에서 최선을 다하는 거예요."],["바리스타","강도윤","도윤의 독립 카페에서 각자 고른 원두를 비교했다.","하하, 이제 제가 시음 평가를 받는 차례네요."],["제과제빵사","강도윤","갓 구운 디저트와 도윤의 커피를 함께 맛봤다.","이 조합 좋네요. 각자 만든 걸 같이 맛볼 수 있어서 좋아요."],["경찰","정태오","퇴근한 두 사람은 업무와 원칙에 대해 이야기를 나눴다.","…서로의 일을 이해할 수 있다는 것이 다행입니다."],["인테리어 디자이너","백지한","지한이 평면도를 펴고 당신은 내부 공간의 스케치를 그렸다.","햇빛이 이쪽으로 들겠네요. 이렇게 그려 놓으니까 저도 살고 싶어져요."],["작가","차유리","출간을 앞둔 책의 표지 시안을 유리가 펼쳐 보였다.","오케이, 이번엔 작가님의 세계를 제대로 담아 볼게요."],["일러스트레이터","차유리","전시 공간에 각자의 그림을 걸었다.","우리 그림 완전 다르다. 그래서 더 재밌는 거지!"],["교사","임하나","학생들의 학습 방법에 대해 이야기하다 시간이 훌쩍 지났다.","저도 학생들이 원하는 걸 더 잘 들어 주고 싶어요."],["애견유치원 선생님","오세린","유치원에서 만나는 반려견들의 일상과 건강 관리에 관해 이야기를 나눴다.","아아, 아이들마다 성격이 다르죠. 건강이 걱정되면 병원에 데려와 주세요."],["애견유치원 선생님","강도윤","모카가 유치원 문 앞에서 꼬리를 흔들었다. 도윤은 모카의 준비물을 챙겨 왔다.","하하, 모카가 저보다 선생님을 더 기다리는 것 같네요."],["반려동물 관련 사업가","오세린","반려동물의 안전과 복지를 고려한 운영 방안을 의논했다.","으음, 동물들이 편안한 곳이라면 참 좋겠네요."],["댄서·안무가","유지안","공연을 마친 두 사람은 무대 뒤에서 서로의 동작을 이야기했다.","와우! 다음엔 각자 만든 안무도 보여 줘요!"],["영상 편집자","공재희","재희가 방송 영상의 편집본을 보다가 웃음을 터뜨렸다.","헐ㅋㅋ 이 장면 살린 거 개좋음. 내 영상인데도 재밌네."],["인터넷 방송인","공재희","각자의 방송을 마치고 합방을 준비했다.","웅ㅋㅋ 오늘은 둘 다 주인공임."]],professionActivities={"제과제빵 실습":"생활력","재활·인체 공부":"지성","공직 시험 준비":"지성","교육 공부":"지성","반려견 돌봄 실습":"생활력","댄스 연습":"운동능력","영상 편집 연습":"기술력","방송 연습":"표현력"};
const professionStories={"작가":["차유리","원고 파일을 다시 열었다. 처음에는 몇 줄에 불과했던 이야기가 제법 길어졌다.","오, 이야기 완성하면 읽어 보고 싶네요. 무슨 이야기를 하고 싶은지가 먼저죠.","퇴고하면서 마음에 들던 문장도 과감히 고쳤다. 원고를 끝까지 책임지는 일이 어떤 의미인지 알게 되었다."],"게임 개발자":["서이준","직접 만든 작은 프로그램이 화면에서 움직였다. 다른 사람도 즐길 수 있는 게임을 만들고 싶어졌다.","…일단 작게 완성해 보는 게 좋아요. 처음부터 모든 걸 만들 필요는 없으니까.","테스트 기록을 정리하고 오류를 수정했다. 마지막까지 작동하는 것을 만드는 데 집중했다."],"프로게이머":["한시우","경기 영상을 돌려 보니 반사 신경만으로는 설명할 수 없는 판단들이 눈에 들어왔다.","랭크만 올린다고 다 되는 건 아니에요. 팀이랑 호흡 맞추는 것도 진짜 중요하거든요.","연습 기록에서 반복되는 실수를 찾아냈다. 기록과 컨디션 관리에도 신경 쓰기 시작했다."],"바리스타":["강도윤","같은 원두인데도 추출 방식에 따라 향이 달라졌다.","하하, 맛을 기록해 보세요. 다음에 같은 맛을 내려면 그게 중요하거든요.","추출 조건과 손님들의 반응을 비교하며 자신만의 메뉴를 연구했다."],"제과제빵사":["강도윤","반죽이 부풀어 오르는 동안 오븐 앞에서 기다렸다.","커피랑 어울리는 디저트 하나 만들어 보면 어떨까요? 실패작은 제가 시식해 드리죠.","굽는 온도와 시간을 기록하고 실패한 반죽의 원인을 정리했다."],"물리치료사":["한시우","인체의 움직임을 설명하는 자료를 읽었다. 통증을 겪는 사람이 일상을 되찾도록 돕는 일에 관심이 생겼다.","손목 때문에 재활 받은 적 있거든요. 괜찮아졌다고 막 쓰면 또 아프더라고요. 그쪽 공부하려고요?","관련 학과와 교육 과정, 실습 및 면허 취득 경로를 알아보았다. 아직 치료를 할 수는 없지만 어떤 공부가 필요한지 분명해졌다."],"경찰":["정태오","지역 주민을 돕는 공공 업무와 그 책임에 대해 알아보았다.","권한만큼 책임도 따르는 일입니다. 어떤 경찰이 되고 싶은지 먼저 생각해 보십시오.","필기 공부와 체력 훈련을 병행하며 채용 준비 계획을 구체화했다."],"인테리어 디자이너":["백지한","평면도를 보며 공간에 따라 사람의 생활이 달라질 수 있다는 사실이 흥미로워졌다.","예쁘기만 한 집보다 실제로 살기 좋은 집이 더 어렵죠. 동선부터 생각해 봐요.","가상의 주거 공간을 설계하고 조명과 수납, 동선을 점검했다."],"일러스트레이터":["차유리","여러 장의 그림을 펼쳐 놓자 자신만의 표현이 조금씩 보이기 시작했다.","오, 이 색 조합 좋네요. 남들 잘 그리는 방식 말고 자기 취향도 끝까지 가져가요.","작품별 의도와 제작 과정을 정리하고 포트폴리오를 구성했다."],"교사":["임하나","누군가에게 어려운 내용을 설명하는 일이 생각보다 즐거웠다.","저도 과외하면서 느꼈어요. 제가 아는 것과 상대가 이해하는 건 다르더라고요.","학습자의 입장에서 자료를 구성하고 교원 양성 과정과 진학 방법을 알아보았다."],"애견유치원 선생님":["오세린","보호소에서 개마다 사람을 대하는 방식이 다르다는 것을 배웠다.","아아, 강아지마다 쉬고 싶은 순간도 다르답니다. 그 신호를 살펴보는 게 중요해요.","돌봄 실습에서 놀이와 휴식, 안전한 환경 관리의 중요성을 익혔다."],"반려동물 관련 사업가":["백지한","반려동물을 위한 공간과 서비스가 어떻게 운영되는지 알아보고 싶어졌다.","사업이라면 좋은 뜻만으로는 부족하죠. 공간이랑 운영비, 안전부터 계산해 봐요.","돌봄 경험을 바탕으로 비용과 안전, 운영 방안을 정리했다."],"댄서·안무가":["유지안","음악에 맞춰 직접 동작을 연결해 보았다.","와우! 잘 추는 것도 좋은데 자기가 왜 그렇게 움직이는지 알면 더 재밌어요.","짧은 안무를 완성하고 촬영한 영상으로 동작을 다시 확인했다."],"영상 편집자":["공재희","같은 영상도 컷을 배치하는 방식에 따라 전혀 다르게 느껴졌다.","헐ㅋㅋ 여기 잘라서 붙이니까 완전 다른 영상 됨. 편집 재밌지 않아요?","영상의 흐름과 자막, 소리의 균형을 살피며 작업물을 정리했다."],"인터넷 방송인":["공재희","어떤 콘텐츠를 꾸준히 사람들에게 보여 줄 수 있을지 고민했다.","웅ㅋㅋ 처음부터 시청자 수만 보지 마요. 본인이 재밌어야 오래 함.","방송 기획과 진행 기록을 정리하고 휴식 시간과 공개 범위를 계획했다."]};
function professionStoryRecord(){const r=professionRecord();return r.stories||(r.stories={})}
function professionStage(name){return professionStoryRecord()[name]||0}
function professionStoryCandidate(name,stage){const v=initSim(),r=professionRecord(),a=professionRoutes[name];if(!a)return false;const n=professionCount(a[0]);if(stage===0)return n>=Math.min(3,a[1])||(a[0]==='반려견 돌봄 실습'&&r.volunteerDays.length>=2);return n>=Math.ceil(a[1]/2)}
function professionDiscoveryGate(){const v=initSim(),r=professionRecord();if(v.day>=365||v.day<15)return false;const names=r.target?[r.target]:Object.keys(professionRoutes);const name=names.find(k=>professionStage(k)<2&&(professionStage(k)===0||r.target===k)&&professionStoryCandidate(k,professionStage(k)));if(!name)return false;const stage=professionStage(name),a=professionStories[name];v.activeEvent={place:'home',day:v.day,description:stage?'준비해 온 일을 돌아보았다.':'새로운 진로에 관심이 생겼다.',professionStory:{name,stage,npc:v.met[a[0]]&&socialRecord(a[0]).contact?a[0]:null}};save();renderChoiceEvent();return true}
function renderProfessionStory(ev){const v=initSim(),o=ev.professionStory,a=professionStories[o.name],r=professionRecord();$('progress').textContent=o.stage?'진로의 중간 지점':'진로 발견 · '+o.name;add('이야기',a[o.stage?3:1]);if(o.npc&&!o.stage)add(o.npc,a[2]);if(o.answer){add(state.name,o.answer,true);choiceButton('일정 계속하기',finishEvent);return}const opts=o.stage?['지금의 준비를 계속한다','속도를 조절하며 이어 간다']:['이 길을 목표로 삼아 보고 싶다','흥미롭지만 아직 결정하지 않는다'];for(const [i,label] of opts.entries())choiceButton(label,()=>{if(o.answer)return;o.answer=label;professionStoryRecord()[o.name]=o.stage+1;if(!o.stage&&i===0&&(!r.target||r.target===o.name)){r.target=o.name;r.history.push({day:v.day,target:o.name,source:o.npc?'주민의 이야기':'자기계발'});r.prepared=false}growInner('professionStory:'+o.name+':'+o.stage,{자기이해:2});writeJournal('진로 발견 · '+o.name+' / '+label);save();renderChoiceEvent();renderSim()})}
function professionRemainingSlots(name){const v=initSim(),r=professionRecord(),a=professionRoutes[name];if(!a)return 0;const base=Math.max(0,a[1]-professionCount(a[0]),Math.ceil((a[3]-(v.skills[a[2]]||0))/3));return base+(a[0]==='반려견 돌봄 실습'?Math.max(0,4-r.volunteerDays.length):0)+(a[0]==='공직 시험 준비'?Math.ceil(Math.max(0,50-(v.skills.운동능력||0))/3):0)}

function professionRecord(){const v=initSim();return v.profession||(v.profession={target:null,counts:{},volunteerDays:[],history:[],prepared:false})}
function professionCount(k){return developmentProjects[k]?developmentProgress(k):(professionRecord().counts[k]||0)}
function professionReadyRule(a,n,skill,vol,fitness){return n>=a[1]&&skill>=a[3]&&(a[0]!=='반려견 돌봄 실습'||vol>=4)&&(a[0]!=='공직 시험 준비'||fitness>=50)}
function professionReady(name){const v=initSim(),r=professionRecord(),a=professionRoutes[name];return !!a&&professionReadyRule(a,professionCount(a[0]),v.skills[a[2]]||0,r.volunteerDays.length,v.skills.운동능력||0)}
function professionActivity(a){const v=initSim(),r=professionRecord(),h=healthRecord();if(a==='유기견 보호소 봉사'){if(v.slot===3||v.energy<15||r.volunteerDays.includes(v.day))return {place:'home',note:'오늘은 봉사 일정이 맞지 않아 쉬었다.',person:null};v.energy-=15;h.fatigue=Math.min(100,h.fatigue+8);r.volunteerDays.push(v.day);v.skills.생활력+=2;return {place:'park',note:'유기견 보호소 봉사 · 돌봄과 환경 정리',volunteer:true,person:null}}if(!Object.hasOwn(professionActivities,a))return null;if(a==='반려견 돌봄 실습'&&r.volunteerDays.length<2)return {place:'home',note:'보호소 봉사 2회 이후 실습 가능',person:null};if(v.energy<12)return {place:'home',note:'체력이 부족해 대신 쉬었다.',person:null};v.energy-=12;h.fatigue=Math.min(100,h.fatigue+8);const k=professionActivities[a];v.skills[k]=(v.skills[k]||0)+3;r.counts[a]=(r.counts[a]||0)+1;return {place:'home',note:a+' 완료 · '+k+' +3',person:null}}
function volunteerGuests(){const v=initSim();if((v.day-1)%7<5)return [];return [['정태오','급여량은 목록에 맞춰 주십시오. 이쪽은 제가 정리하겠습니다.'],['강도윤','하하, 오늘은 간식보다 물그릇부터 챙겨 볼까요?'],['백지한','이쪽 울타리 상태도 확인해 볼게요. 안전이 먼저죠.']].filter(([p])=>v.met[p]&&!npcLifeBusy(p,v.day,v.slot)&&Math.random()<.55)}
const shelterMeetLines={
 '강도윤|정태오':[
  ['이야기','앞치마를 벗는데 두 사람이 동시에 손을 내밀었다. 도윤은 따뜻한 캔을, 태오는 내가 맡겨 둔 겉옷을 들고 있었다.'],
  ['정태오','도윤아. 내 건?'],
  ['강도윤','형은 찬 거 좋아하시잖아요.'],
  ['정태오','그래서 딱 하나만 사 왔구나.']
 ],
 '강도윤|백지한':[
  ['이야기','손을 씻고 나오니 도윤이 벤치 한쪽에 내 몫의 캔을 놔두었다. 맞은편에서는 지한이 자기 옆자리를 털고 있었다.'],
  ['백지한','형, 그거 내 거면 이쪽으로 던져.'],
  ['강도윤','네 거였으면 벌써 던졌지.']
 ],
 '백지한|정태오':[
  ['이야기','마지막 물그릇을 엎어 놓고 장갑을 벗었다. 지한이 차 열쇠를 꺼내자 태오도 주머니를 뒤졌다. 두 차의 잠금 풀리는 소리가 나란히 났다.'],
  ['백지한','형도 누구 태워다 주게?'],
  ['정태오','그러려고. 넌 차 바로 앞에 두고 뭘 또 눌러.']
 ]
};
const shelterEndings={
 '강도윤|정태오':'결국 따뜻한 캔은 내가 받고, 셋이 자판기로 갔다. 태오가 찬 음료를 뽑아 도윤의 볼에 대자 그제야 도윤도 웃었다.',
 '강도윤|백지한':'도윤이 캔을 들고 맞은편으로 건너왔다. 지한이 자리를 더 터 주는 바람에 셋이 좁은 벤치 하나에 나란히 앉았다.',
 '백지한|정태오':'마침 담당자가 빈 이동장 두 개를 들고 나왔다. 누가 나를 데려다줄지 정하기도 전에 두 사람의 뒷좌석이 하나씩 찼다.'
};
const shelterPartners={
 '강도윤':{kiss:'도윤이 입술을 떼고도 내 소매 끝을 잡고 있었다. 창고 안에서 누가 헛기침을 하자 그제야 손을 놓았다.',
  unknown:['……둘이 그런 사이였어요? 나랑 만나면서요?','……둘이 그런 사이였어? 나랑 만나면서?'],
  known:['알고 있었는데도 이상하네요. 오늘은 웃으면서 잘 가라는 말이 안 나와요.','알고 있었는데도 이상하네. 오늘은 웃으면서 잘 가라는 말이 안 나와.'],
  agreed:['오늘은 내 옆에 앉을 줄 알았거든요. 다음엔 내가 먼저 자리 맡아도 돼요?','오늘은 내 옆에 앉을 줄 알았거든. 다음엔 내가 먼저 자리 맡아도 돼?'],
  sees:'도윤은 창고 문턱에 선 채 캔의 고리만 만지작거렸다.', alone:'다른 봉사자들이 먼저 나가고 나서야 도윤이 내 쪽으로 돌아섰다.'},
 '정태오':{kiss:'태오가 고개를 숙여 내 입맞춤을 받았다. 선반에 얹어 둔 장갑을 다시 집으려다, 열린 문 너머를 보고 손을 멈췄다.',
  unknown:['두 분이 사귀고 있었습니까? ……저도 알아야 하는 일 아닙니까.','둘이 사귀고 있었어? ……그건 나도 알아야 하는 거잖아.'],
  known:['이미 들었습니다. 그런데 제가 거기 서 있는 동안은 조금 기다려 줄 수 없었습니까?','이미 들었어. 그래도 내가 거기 서 있는 동안은 조금 기다려 줄 수 없었어?'],
  agreed:['알고 만나는 사이여도 질투는 나는군요. 다음 봉사는 저랑 같이 오시겠습니까?','알고 만나는 사이여도 질투는 나네. 다음 봉사는 나랑 같이 올래?'],
  sees:'태오가 들고 있던 빈 상자를 바닥에 내려놓았다. 내 쪽을 한 번 보고 말없이 문을 잡아 주었다.', alone:'둘만 남자 태오는 그제야 문에서 손을 뗐다.'},
 '백지한':{kiss:'지한이 내 입맞춤에 살짝 웃으며 한 번 더 고개를 기울였다. 뒤에서 경첩 소리가 났다. 창고 문은 처음부터 열려 있었다.',
  unknown:['둘이 사귀어요? 잠깐만요. 이따 연락하겠다는 말 말고, 지금 나 보고 얘기해 줘요.','둘이 사귀어? 잠깐만. 이따 연락하겠다는 말 말고, 지금 나 보고 얘기해 줘.'],
  known:['아는 거랑 바로 앞에서 보는 건 다르네요. 조금만 더 있어요. 지금은 나랑.','아는 거랑 바로 앞에서 보는 건 다르네. 조금만 더 있어. 지금은 나랑.'],
  agreed:['오늘은 내가 한발 늦었네요. 다음번엔 나한테 먼저 와 줄래요?','오늘은 내가 한발 늦었네. 다음번엔 나한테 먼저 와 줄래?'],
  sees:'지한이 열쇠를 손바닥에 말아 쥐었다. 문을 비켜 주면서도 나한테서 눈을 떼지 않았다.', alone:'다른 사람들의 발소리가 멀어지자 지한이 한 걸음 다가왔다.'}
};
function shelterEncounter(ev){
 const o=ev.volunteerEvent;
 if(o.encounter!==undefined)return o.encounter;
 const v=initSim(),recent=v.shelterMeetings||{},guests=o.guests.map(([p])=>p).filter(p=>shelterPartners[p]&&vIsDating(p));
 const pairs=[];
 for(const [i,p] of guests.entries())for(const q of guests.slice(i+1)){
  const key=pairKey(p,q),last=recent[key]||0;
  if(pairState(p,q)&&(!last||ev.day-last>=14))pairs.push({pair:[p,q],last});
 }
 pairs.sort((a,b)=>a.last-b.last);
 o.encounter=pairs.length?{pair:pairs[0].pair}:null;
 save();
 return o.encounter;
}
function renderShelterEncounter(ev){
 const scene=shelterEncounter(ev);if(!scene)return false;
 const v=initSim(),[p,q]=scene.pair,key=pairKey(p,q);
 for(const [speaker,line] of shelterMeetLines[key])add(speaker,line);
 if(scene.choice){
  if(scene.choice==='quiet')add('이야기',shelterEndings[key]);
  else{
   const other=scene.choice===p?q:p,voice=shelterPartners[other];
   add('이야기','물품 창고 옆에서 둘만 남은 줄 알고 입을 맞췄다.');
   add('이야기',shelterPartners[scene.choice].kiss);
   add('이야기',voice.sees+' '+voice.alone);
   const speech=memoryFor(other).address.npcSpeech,casual=speech==='반말'||(speech==='혼용'&&ev.day%2===0);
   add(other,voice[scene.outcome][casual?1:0]);
  }
  choiceButton('일정 계속하기',finishEvent);return true;
 }
 const finish=chosen=>{
  if(v.activeEvent!==ev||scene.choice)return;
  scene.choice=chosen;
  (v.shelterMeetings||(v.shelterMeetings={}))[key]=ev.day;
  if(chosen!=='quiet'){
   const witness=chosen===p?q:p;
   scene.outcome=bothConsented(witness,chosen)?'agreed':secretUnknown(witness,chosen)?'unknown':'known';
   if(scene.outcome==='unknown')revealOne(witness,chosen);
   else feel(witness,{jealousy:1});
   remember(witness,'shelter:witness:'+chosen+':'+ev.day,'보호소에서 '+chosen+'의 입맞춤을 직접 봄');
   writeJournal('보호소 창고 앞 · '+witness+'의 눈앞에서 '+chosen+'에게 입을 맞췄다.');
  }
  save();renderChoiceEvent();renderSim();
 };
 for(const name of scene.pair)choiceButton(name+'에게 따로 손짓해 살짝 입을 맞춘다',()=>finish(name));
 choiceButton('셋이 함께 봉사를 마무리한다',()=>finish('quiet'));
 return true;
}
function renderVolunteer(ev){const v=initSim(),o=ev.volunteerEvent,n=professionRecord().volunteerDays.length;$('progress').textContent='유기견 보호소 봉사';$('where').textContent='연화동 인근 유기견 보호소';const a=n===1?['담당자가 낯선 개에게 접근하는 방법과 위생 수칙을 설명했다.','배식과 물그릇 정리를 돕는다','관찰하며 담당자의 설명을 듣는다']:n===2?['담당자가 개별 성격과 돌봄 기록을 보여 주었다. 좋아하는 것과 돌보는 일은 다르다는 걸 알게 되었다.','행동과 돌봄 기록에 관심을 갖는다','환경 정리와 급여 보조를 계속한다']:['익숙해진 보호소에서 담당자와 개별 돌봄 방법을 확인했다.','안전한 놀이와 휴식 환경을 준비한다','위생 관리와 정리 작업을 돕는다'];add('이야기',a[0]);for(const [p,line] of o.guests)add(p,line);if(o.answer){add(state.name,o.answer,true);if(n===2)add('시스템','반려견 돌봄 실습과 애견유치원 선생님 진로가 열렸다.');if(renderShelterEncounter(ev))return;choiceButton('일정 계속하기',finishEvent);return}for(const label of a.slice(1))choiceButton(label,()=>{if(o.answer)return;o.answer=label;growInner('volunteer:'+v.day,{공감능력:1,책임감:1});for(const [p] of o.guests){v.affection[p]=Math.min(999,(v.affection[p]||0)+2);socialRecord(p).friendship++}writeJournal('보호소 봉사 · '+label);save();renderChoiceEvent();renderSim()})}
function professionPanel(root){const v=initSim(),r=professionRecord(),b=document.createElement('div');b.className='stat-card';const h=document.createElement('h2');h.textContent='꿈과 진로 · '+(r.target||'탐색 중');b.append(h);const info=document.createElement('p');info.textContent='보호소 봉사 '+r.volunteerDays.length+'일 · 반려견 돌봄 실습 '+professionCount('반려견 돌봄 실습')+'회';b.append(info);const sel=document.createElement('select');for(const name of ['',...Object.keys(professionRoutes)]){const o=document.createElement('option');o.value=name;o.textContent=name||'진로 선택';sel.append(o)}sel.value=r.target||'';const btn=document.createElement('button');btn.textContent='이 진로를 목표로 삼기';btn.disabled=v.day<15||!!v.running||!!v.activeEvent||v.finished;btn.onclick=()=>{if(!sel.value||v.running||v.activeEvent||v.finished)return;if(professionRoutes[sel.value][0]==='반려견 돌봄 실습'&&r.volunteerDays.length<2){alert('먼저 보호소 봉사에 2회 참여해 보세요.');return}if(r.target===sel.value)return;r.target=sel.value;r.prepared=false;r.history.push({day:v.day,target:r.target});writeJournal('진로 목표 · '+r.target);save();renderSim()};b.append(sel,btn);if(r.target){const a=professionRoutes[r.target],t=document.createElement('p');t.textContent=a[0]+' '+professionCount(a[0])+'/'+a[1]+'회 · '+a[2]+' '+(v.skills[a[2]]||0)+'/'+a[3]+(a[0]==='반려견 돌봄 실습'?' · 봉사 4회':a[0]==='공직 시험 준비'?' · 운동능력 50':'')+(r.prepared?' · 진로 준비 완료':'');b.append(t);const eta=document.createElement('small');eta.textContent='남은 준비 활동 약 '+professionRemainingSlots(r.target)+'회 · 주 2회 기준 약 '+Math.ceil(professionRemainingSlots(r.target)/2)+'주 (이벤트 및 일정 별도)';b.append(eta);if(a[6]){const p=document.createElement('small');p.textContent='학위·자격 또는 채용 절차는 이후 에필로그에서 진행됩니다.';b.append(p)}}root.append(b)}
function professionGate(){const v=initSim(),r=professionRecord();if(!r.target||r.prepared||!professionReady(r.target)||v.day>=365)return false;v.activeEvent={place:'home',day:v.day,description:'준비해 온 진로를 구체화할 때가 되었다.',professionEvent:{name:r.target}};save();renderChoiceEvent();return true}
function renderProfession(ev){const o=ev.professionEvent,a=professionRoutes[o.name],r=professionRecord();$('progress').textContent='진로 · '+o.name;add('이야기',a[4]);if(o.answer){add(state.name,o.answer,true);choiceButton('일정 계속하기',finishEvent);return}for(const [label,k] of [['이 길을 계속 준비해 나간다',true],['아직 다른 길도 알아보고 싶다',false]])choiceButton(label,()=>{if(o.answer)return;o.answer=label;r.prepared=k;if(!k)r.target=null;writeJournal('진로 · '+o.name+' / '+label);save();renderChoiceEvent();renderSim()})}
function professionEnding(){const r=professionRecord();if(!r.target)return null;const a=professionRoutes[r.target],ready=r.prepared&&professionReady(r.target);return {name:r.target,ready,line:ready?a[5]:'아직 준비를 이어 가고 있다.',later:!!a[6]}}
function professionScene(e,p){return e?.ready?professionCombos.find(x=>x[0]===e.name&&x[1]===p)||null:null}

function lifeRecord(){const v=initSim();return v.lifePath||(v.lifePath={stage:0,work:0,history:[],counsel:[]})}
function careerPanel(){const v=initSim(),l=lifeRecord(),el=$('career');const box=document.createElement('div');box.className='stat-card';const t=document.createElement('h2');t.textContent='나의 인생 · '+state.job;box.append(t);const info=document.createElement('p');info.textContent=Object.entries(state.identity.traits).map(([k,n])=>k+' '+n).join(' · ');box.append(info);const ready=v.day>=30&&(l.work>=30||v.day>=90||state.job!=='회사원');if(ready&&!v.running&&!v.activeEvent&&!v.finished){birthdayButton(box,l.stage?'진로 다시 고민하기':'지금의 삶을 돌아보기',()=>{v.activeEvent={place:'home',description:'앞으로 어떤 일을 하며 살아가고 싶은지 생각해 보았다.',careerEvent:true,day:v.day};save();renderChoiceEvent()});if(l.stage)for(const p of people.filter(p=>socialRecord(p).contact&&v.affection[p]>=25&&!l.counsel.includes(p)))birthdayButton(box,p+'에게 진로 상담하기',()=>{v.activeEvent={place:'home',person:p,description:'전화로 앞으로의 진로에 관한 고민을 털어놓았다.',careerEvent:true,counsel:true,day:v.day};save();renderChoiceEvent()})}for(const s of l.history){const p=document.createElement('p');p.textContent=s;box.append(p)}el.prepend(box)}
function renderCareerEvent(ev){const v=initSim(),l=lifeRecord();if(ev.counsel)add(ev.person,careerAdvice[ev.person]);if(ev.answered){add(state.name,ev.selected,true);choiceButton('돌아가기',finishEvent);return}const options=ev.counsel?['조언을 참고해 볼게요.']:l.stage===0?['지금 하는 일이 나와 맞는지 고민된다.','지금의 생활도 나쁘지 않다.']:['현재 직업 유지','퇴사하고 진로 탐색','프리랜서로 전환','회사원으로 취업'];for(const label of options)choiceButton(label,()=>{if(ev.answered)return;if(ev.counsel){l.counsel.push(ev.person);v.affection[ev.person]=Math.min(999,v.affection[ev.person]+3);state.identity.traits.신중함++}else if(!l.stage){l.stage=1;state.identity.traits.솔직함++}else{const old=state.job;if(label==='퇴사하고 진로 탐색')state.job='취업 준비생';if(label==='프리랜서로 전환'){if(v.skills.기술력<20&&v.skills.창의성<20){alert('기술력 또는 창의성 20 이상이 필요해요.');return}state.job='프리랜서'}if(label==='회사원으로 취업')state.job='회사원';if(old!==state.job){l.history.push(calendarDate(v.day).label+' · '+old+' → '+state.job);state.identity.traits.솔직함++}else state.identity.traits.신중함++}ev.answered=true;ev.selected=label;writeJournal('진로 · '+label);save();renderChoiceEvent();renderSim()})}
const jealousLines={"공재희":"요즘 다른 사람이랑 많이 놀던데. 나랑은 언제 놀아요?","서이준":"요즘 약속 많네요. …아뇨, 뭐. 바쁜 사람 붙잡을 생각은 없어요.","강도윤":"요즘 약속이 많으시죠? 저도 한 자리쯤 남겨 두시면 좋겠는데. 하하.","한시우":"요즘 저 말고도 같이 노는 사람 많죠? 저도 좀 끼워 줘요.","정태오":"요즘 바쁘신 듯합니다. …다음에 시간 괜찮으십니까?","백지한":"요즘 제 경쟁자가 좀 늘어난 기분인데요. 제가 더 부지런해야겠네요.","임하나":"요즘 다른 분하고도 자주 만나시는 것 같아서요. ……저도 다음에 같이 나가고 싶어요.","차유리":"요즘 약속 많네요. 다음엔 제 차례로 해요.","오세린":"요즘 즐거운 일이 많으신가 봐요. 저도 다음에 함께할 수 있으면 좋겠네요.","유지안":"요즘 인기 많네요! 저랑도 놀 시간 남겨 둬요."};
const relationshipRecallVoices={"서이준":["…답장 늦어도 기다리기로 했잖아요. 급한 일 아니에요.","…오늘은 별일 없어도 연락해 봤어요. 고양이가 또 현관 앞에서 기다리더라고요.","지난번엔 그냥 옆에 있는 게 좋다고 했죠. 오늘도 영화만 봐도 돼요.","그때 강변에서 탄산음료 골랐었죠. 오늘도 술 말고 따뜻한 차로 할까요?","…그날 강변에서 아무것도 안 사고 걸었던 거, 꽤 좋았어요.","비 피하면서 함께 기다렸던 날도 있었죠. 날씨가 많이 달라졌네요.","더워서 쉬어 갔던 날이 엊그제 같은데요."],"강도윤":["하하, 답장은 편할 때 해요. 저도 오늘은 제 시간을 보내고 있거든요.","오늘은 제가 마시고 싶은 커피를 골라 봤어요. 다음에 같이 맛봐요.","지난번처럼 오늘도 편히 쉬어요. 제가 자꾸 뭘 해 드릴 필요는 없잖아요.","그날 강변에서 무알코올로 골랐죠. 오늘은 따뜻한 차 준비해 봤어요.","그날은 음료 없이 걷기만 했는데도 즐거웠어요.","비를 피하던 날 생각나네요. 어느새 공기가 이렇게 달라졌어요.","그 더위에 같이 쉬어 갔던 게 기억나요."],"한시우":["오케이, 답장은 자유 시간에! 저도 연습 집중하고 올게요.","오, 오늘 경기 끝났어요! 먼저 연락한다고 했잖아요ㅋㅋ","오늘은 괜히 가까이 가서 부담 주기 싫어요. 그냥 같이 놀까요?","그때 강변에서 음료 골랐었죠? 오늘은 따뜻한 음료 조합도 도전해요!","그날은 뭘 사 먹지도 않았는데, 같이 걷는 게 좋더라고요.","비 피하던 날 생각나네요. 우리 둘 다 어깨 젖었잖아요ㅋㅋ","그때 진짜 더웠는데, 벌써 겉옷 챙길 날씨네요. 시간 빠르다."],"백지한":["오늘은 제 일정부터 마치려고요. 답장은 여유 있을 때 줘요. 우리 그러기로 했잖아요.","보고 싶다고 해서 시간을 전부 달라는 뜻은 아니니까요. 다음에 비는 날 알려 줘요.","지난번엔 거리를 두고 싶다고 했죠. 오늘은 제가 먼저 묻기 전까지 이 자리에서 있을게요.","그날 술 대신 음료 골랐었죠. 이번에도 그쪽 선택부터 물어볼게요.","음료도 없이 강변을 걸었던 날이 의외로 기억에 남네요.","비 피하던 날 그 건물 처마 기억나요?","그 더위에 쉬었던 날 생각하면 지금 바람이 반갑네요."],"정태오":["근무를 마친 뒤 연락드립니다. 답장은 편한 시간에 주십시오.","용건이 없어도 연락하라고 하셨지요. 오늘은 안부를 여쭙고 싶었습니다.","지난번에는 거리를 유지하셨지요. 오늘도 편하게 쉬십시오.","그때 강변에서 무알코올 음료를 선택하셨지요. 오늘도 따뜻한 물을 준비했습니다.","아무것도 사지 않고 걸었던 강변이 기억납니다.","비가 오던 날 잠시 쉬어 갔던 일이 생각납니다.","더위 때문에 쉬었던 날과는 기온이 많이 다릅니다."],"임하나":["답장이 늦어도 괜찮다고 하셨죠. 저도 오늘은 하고 싶은 일을 하면서 기다릴게요.","저… 오늘은 제가 가고 싶은 서점이 생겼어요. 다음에는 제가 먼저 외출 장소를 골라도 될까요?","지난번에는 그냥 같이 있는 게 좋다고 하셨죠. 오늘도 그렇게 쉬고 싶어요.","그날 강변에서 음료를 고르셨죠. 저도 이번에는 좋아하는 맛을 먼저 골라 봤어요.","그날 아무것도 사지 않고 걸었던 시간이 참 좋았어요.","비가 오던 날 같이 시간을 보냈던 것도 기억나요.","더운 날 잠깐 쉬었던 거 기억나요. 이제는 공기가 차가워졌네요."],"차유리":["오늘 작업 마감 중이라 답장 좀 늦을 수도 있어요. 각자 할 일 하고 또 봐요!","오, 작업 끝났어요! 전에 각자 시간 보내고 만나자고 했잖아요. 이제 좀 놀고 싶네요.","지난번처럼 오늘은 각자 편한 자세로 있을까요? 그림도 좀 그리고요.","그날 무알코올 음료 패키지 색이 예뻤죠. 오늘은 따뜻한 음료 컵도 구경해 봐요.","그날 그냥 걸었을 때 본 밤의 색도 꽤 좋았어요.","비 오던 날 보던 풍경이랑 오늘 색은 또 다르네요.","폭염에 잠깐 쉬었던 날도 색감이 기억나요."],"오세린":["으음, 답장은 여유 있을 때 해요. 서로의 일상을 존중하기로 했잖아요.","오늘은 혼자 차를 마시다가 문득 안부가 궁금해졌어요. 편안한 하루 보내고 있나요?","지난번처럼 각자 편안히 쉬는 시간도 좋겠네요.","그날 강변에서 술 대신 음료를 고르셨죠. 오늘은 따뜻한 차가 어떨까요?","음료 없이 강변을 걸었던 날의 바람도 참 좋았어요.","비를 피했던 날의 공기가 생각나네요.","더위에 쉬었던 날도 좋은 기억이 되었네요."],"유지안":["넵! 각자 할 일 끝나고 연락하기! 오늘도 파이팅이에요.","와우, 오늘 연습 끝! 전에 솔직하게 기대하겠다고 했죠? 다음에 또 놀고 싶어요.","좋죠! 오늘은 각자 편하게 있는 휴식 안무예요.","그날 강변에서 음료 골랐죠! 이번엔 따뜻한 음료로 겨울 준비 건배?","아무것도 안 사고 걸었던 그날도 완전 좋았어요!","비 오던 날 같이 쉬었던 거 기억나요?","폭염에 체력 충전했던 날이 생각나네요!"],"공재희":["웅, 바쁠 땐 나도 내 일 하면서 기다릴게요. 답장 재촉 안 하기로 했잖아요ㅋㅋ","나 오늘 먼저 톡하고 싶어서 보냄ㅋㅋ 부담 없이 봐요.","지난번엔 그냥 옆에 있어 달랬죠. 오늘도 쿠션 안고 영상만 봐요.","그날 강변에서 무알코올 골랐잖아요ㅋㅋ 오늘은 따뜻한 딸기 음료 어때요?","그날 음료 안 사고 그냥 걸었던 거도 좋았음ㅋㅋ","비 왔던 날 생각나네. 그때랑 공기 완전 다름.","더워서 쉬었던 날이 엊그제 같은데 이제 핫팩 시즌임."]};
const agreementKinds={"서이준":[0,1,1],"강도윤":[0,1,0],"한시우":[0,1,1],"정태오":[0,1,1],"백지한":[0,1,1],"임하나":[0,1,0],"차유리":[1,1,0],"오세린":[0,1,1],"유지안":[0,1,1],"공재희":[0,1,1]};
function latestBefore(list,day){return (list||[]).filter(x=>x&&Number.isFinite(x.day)&&x.day<day).sort((a,b)=>b.day-a.day)[0]||null}
function relationshipRecall(p,day){const m=memoryFor(p),soc=socialRecord(p),hist=soc.attachmentHistory||[],a=latestBefore(hist,day),index=a?attachmentProfiles[p].choices.findIndex(x=>x[0]===a.choice):-1;const kind=index>=0?agreementKinds[p][index]:null;const distance=latestBefore((m.preferences.touchHistory||[]).filter(x=>x.kind==='distance'||x.index===5),day);const newer=distance&&(m.preferences.touchHistory||[]).some(x=>x.day>distance.day&&x.day<day&&x.accepted);return {agreement:a,kind,distance:distance&&!newer&&day-distance.day<=45?distance:null,season:latestBefore(m.preferences.seasonHistory||[],day)}}
function rememberedSummer(p,day){const h=latestBefore((memoryFor(p).preferences.seasonHistory||[]).filter(x=>['summerNight','summerRain','summerHeat'].includes(x.id)),day);if(!h)return '';const a=relationshipRecallVoices[p];return h.id==='summerNight'?(h.drink===1?a[3]:h.drink===2?a[4]:autumnVoices[p][6]):h.id==='summerRain'?a[5]:a[6]}
const agreementPhoneTalk={"서이준":[["오늘은 밀린 책 좀 읽으려고요. 답장은 편할 때 해요.","좋아요. 저도 제 할 일 하려고요.","…네. 나중에 얘기해요.","다 읽으면 어떤 책인지 알려 줘요.","그럴게요. 아직 반도 못 읽었지만."],["현관 앞에 고양이가 또 와 있더라고요. 문득 생각나서 연락했어요.","고양이는 잘 지내요?","네. 오늘은 밥 먹고 바로 사라졌어요.","다음에 같이 보러 가요.","…좋아요. 조용히 가 봐요."]],"강도윤":[["오늘은 가게 일 끝내고 저도 좀 쉬려고요. 답장은 천천히 해요.","좋아요. 도윤 씨도 푹 쉬어요.","고마워요. 오늘은 일찍 가려고요.","오늘은 뭐 하면서 쉬려고요?","모카랑 산책하고 차 한잔 마시려고요."],["오늘은 제가 마시고 싶은 커피를 골라 봤어요. 다음에 같이 맛봐요.","어떤 원두로 골랐어요?","과일 향이 은은한 원두예요. 식으면서 맛이 달라지더라고요.","좋아요. 다음에 같이 마셔요.","그럼 조금 남겨 둘게요."]],"한시우":[["오늘은 연습에 좀 집중하고 올게요. 답장은 천천히!","연습 잘하고 와요.","오케이! 다녀올게요.","저도 오늘 할 일 좀 해야겠어요.","좋아요! 각자 파이팅!"],["오늘 경기 끝났어요! 먼저 연락한다고 했잖아요ㅋㅋ","경기 어땠어요?","와, 오늘은 마지막에 진짜 아슬아슬했어요!","수고했어요. 푹 쉬어요.","오늘은 진짜 푹 잘래요 ㅋㅋ"]],"정태오":[["근무를 마쳤습니다. 답장은 편한 시간에 주십시오.","오늘도 수고하셨어요.","감사합니다. 이제 식사하러 가려고 합니다.","저도 오늘은 쉬려고요.","예. 충분히 쉬십시오."],["용건이 없어도 연락하라고 하셨지요. 오늘 하루는 어떠셨습니까?","별일 없이 지냈어요.","다행입니다. 평온한 하루였군요.","조금 바빴어요.","고생하셨습니다. 이제는 좀 쉬실 수 있으면 좋겠습니다."]],"백지한":[["오늘은 제 일정부터 마치려고요. 답장은 여유 있을 때 줘요.","일 잘 마치고 쉬어요.","좋아요. 오늘은 저녁 약속도 비워 뒀거든요.","저도 밀린 일이 좀 있어요.","그럼 각자 마치고 편할 때 연락하죠."],["다음에 시간 비는 날 알려 줘요. 같이 가 보고 싶은 곳이 생겼어요.","어떤 곳인데요?","작은 전시 공간이에요. 사진 보니까 꽤 괜찮더라고요.","좋아요. 일정 확인해 볼게요.","천천히 봐요. 급한 건 아니니까."]],"임하나":[["오늘은 쉬는 시간에 책 좀 읽으려고요. 답장은 편할 때 해요.","좋아요. 재미있게 읽어요.","네! 오랜만에 제가 고른 책이에요.","어떤 책 읽어요?","짧은 여행 에세이예요. 사진도 예뻐요."],["저… 가 보고 싶은 서점이 생겼어요. 다음에는 제가 외출 장소를 골라도 될까요?","좋아요. 어디인지 궁금해요.","골목 안에 있는 작은 서점인데요. 다음에 보여 드릴게요.","이번 주는 바빠서 다음에 정해요.","네. 천천히 정해도 괜찮아요."]],"차유리":[["오늘 작업 마감 중이라 답장 좀 늦을 수도 있어요. 각자 할 일 하고 또 봐요!","마감 잘 끝내요!","오케이! 파일만 넘기면 끝이에요.","저도 할 일 좀 하고 올게요.","좋다! 우리 둘 다 힘내요."],["오, 작업 끝났어요! 이제 좀 놀고 싶네요.","드디어 끝났네요. 수고했어요!","와, 이제 노트북 좀 덮어야겠어요.","다음에 같이 놀아요.","좋아요! 이번엔 일 얘기 금지로 해요."]],"오세린":[["으음, 답장은 여유 있을 때 해요. 저도 오늘은 느긋하게 쉬려고요.","세린 씨도 편하게 쉬어요.","아아, 고마워요. 책 한 권 꺼내 뒀어요.","오늘은 뭐 하면서 쉬어요?","창문 열어 놓고 차를 마시려고요."],["혼자 차를 마시다가 문득 안부가 궁금해졌어요. 오늘은 어떻게 지내요?","오늘은 꽤 편안했어요.","아아, 듣기 좋네요. 저도 여유로운 날이에요.","조금 지쳤어요.","으음, 오늘은 일찍 쉬어도 좋겠네요."]],"유지안":[["오늘은 제 할 일 좀 하고 올게요! 답장은 여유 있을 때!","좋아요. 오늘도 파이팅!","예쓰! 끝나고 맛있는 거 먹어야지.","저도 오늘은 좀 바빠요.","오케이! 우리 각자 잘 보내요."],["오늘 괜찮은 가게 하나 발견했어요! 다음에 같이 갈래요?","어떤 가게예요?","샌드위치 가게요! 메뉴가 엄청 많더라고요.","좋아요. 다음에 같이 가요.","와우! 그럼 메뉴는 그때 같이 골라요."]],"공재희":[["오늘 밀린 거 좀 처리할 거임. 답장은 천천히ㅋㅋ","잘 끝내고 쉬어요.","웅ㅋㅋ 오늘 안에 끝낸다.","저도 할 일이 좀 있어요.","오 서로 파이팅임ㅋㅋ"],["오늘 웃긴 거 발견했는데 다음에 만나면 보여 줄게요ㅋㅋ","뭔데요? 궁금해요.","말로 하면 재미없음ㅋㅋ 사진 찍어 놨어요.","다음에 꼭 보여 줘요.","ㅇㅋ 저장해 둠."]]};
function agreementPhoneScript(p,kind){const a=agreementPhoneTalk[p][kind===1?0:1];return [a[0],'',a[1],a[2],a[3],a[4]]}
function agreementMessageScript(p,m,a){if(!m.contextKey?.startsWith('agreement:')||m.reply)return a;const day=Number(m.contextKey.split(':')[1]);const rec=(socialRecord(p).attachmentHistory||[]).find(x=>x.day===day);const i=rec?attachmentProfiles[p].choices.findIndex(x=>x[0]===rec.choice):-1;const kind=i>=0?agreementKinds[p][i]:a?.[2]==='좋아요. 각자의 시간을 보내요.'&&a?.[0]===relationshipRecallVoices[p][0]?1:0;return agreementPhoneScript(p,kind)}

function rememberedPhone(p,day,t){const rec=relationshipRecall(p,day),a=relationshipRecallVoices[p],m=memoryFor(p);if(!rec.agreement||day-rec.agreement.day<2||day-rec.agreement.day>35||m.feelings.hurt>=5)return null;const key='agreement:'+rec.agreement.day;if(t.some(x=>x.contextKey===key))return null;return {contextKey:key,script:agreementPhoneScript(p,rec.kind)}}
function relationshipBoundaryLine(p,day){return relationshipRecall(p,day).distance?relationshipRecallVoices[p][2]:''}
function rememberedDrink(p,day){const h=latestBefore((memoryFor(p).preferences.seasonHistory||[]).filter(x=>x.id==='summerNight'),day);return h&&h.drink===1?relationshipRecallVoices[p][3]:''}

function vIsDating(p){return initSim().romance[p]==='dating'}
const romanceAfterglowVoices={"서이준":["어제 집에 돌아와서도 한참 잠이 안 왔어요.","…별일은 아니고, 같이 있었던 시간이 생각나서요.","저도 어제 일이 생각났어요.","…그럼 저만 그런 건 아니었네요.","어제 즐거웠어요.","네. 다음에 또 봐요.","이준이 잠시 눈을 맞췄다. 어제와 같은 낮은 목소리였다.","…오늘은 눈 마주쳐도 모른 척 안 할 거죠?","이준 씨가 먼저 보고 있었잖아요.","…그건 부정 못 하겠네요."],"강도윤":["어제 집에 잘 들어가셨어요?","하하, 오늘도 어제 같이 마셨던 차 향이 생각나더라고요.","다음에 또 같이 마시고 싶어요.","좋아요. 이번엔 다른 향도 골라 볼까요?","어제 잘 쉬었어요.","다행이네요. 저도 그랬어요.","도윤이 당신을 발견하고 웃었다. 손을 내밀려다 잠시 멈췄다.","어제는 제가 조금 욕심을 냈죠. 오늘도 만나니까 좋네요.","저도 다시 보고 싶었어요.","……하하. 이러면 또 욕심이 생기는데요."],"한시우":["어제 집 잘 갔어요?","아, 겉옷은 급하게 안 돌려줘도 돼요. 다음에 보면 되니까.","다음에 만나면 돌려줄게요.","좋다! 만날 이유 하나 생겼네.","빌려줘서 고마워요.","추우면 또 말해요 ㅎㅎ","시우가 당신을 보자 반갑게 손을 흔들었다.","와, 오늘도 보네요! 어제 같이 걸은 거 재밌었어요.","저도 즐거웠어요.","다음에도 같이 걸어요! ㅋㅋ"],"정태오":["어제 무사히 귀가하셨습니까?","함께 걸었던 시간이 생각났습니다. 기분 좋은 하루였습니다.","저도 좋은 기억으로 남았어요.","…그렇습니까. 기쁘군요.","잘 들어갔어요. 감사합니다.","다행입니다. 오늘도 좋은 하루 보내십시오.","태오가 당신의 옆에 서서 걸음을 늦췄다.","…지난번처럼 잠시 함께 걸으시겠습니까?","좋아요. 천천히 가요.","감사합니다. 오늘은 서두르지 않겠습니다."],"백지한":["어제는 시간이 유난히 빨리 지나갔네요.","오늘도 문득 그때 생각이 났어요.","저도 조금 아쉬웠어요.","그럼 다음에는 조금 여유 있게 만나죠.","어제 즐거웠어요.","좋아요. 저도요.","지한이 당신과 눈을 맞추며 웃었다.","오늘은 시간을 얼마나 내 주실 수 있을까요? 지난번엔 너무 짧았거든요.","오늘도 얼굴 보니까 좋네요.","좋네요. 제가 묻고 싶었던 답이에요."],"임하나":["저기… 손목은 좀 괜찮아요?","보호대 쓰는 게 불편하면 억지로 끼지 마세요. 걱정돼서요.","걱정해 줘서 고마워요.","……네. 다행이에요.","오늘은 무리하지 않을게요.","네! 정말 조심해요.","하나가 당신을 보자 안도한 표정을 지었다.","저… 지난번에 너무 놀라서 말도 제대로 못 했어요.","덕분에 마음이 편했어요.","……그렇게 말해 주니까 기뻐요."],"차유리":["어제 집 가서도 기분이 좋았어요.","별거 안 해도 편하게 같이 있는 게 꽤 좋더라고요.","저도 그런 시간이 좋아요.","좋다! 다음에도 부담 없이 만나요.","어제 즐거웠어요.","오케이! 저도요.","유리가 당신을 보고 활짝 웃었다.","오, 또 만났네요. 어제 그 표정 생각났는데.","어떤 표정이요?","그건 비밀. 좋은 표정이었어요."],"오세린":["어제 잘 돌아가셨어요?","아아, 비가 그치고 나니 조금 아쉽더라고요.","저도 조금 더 있고 싶었어요.","후후. 다음에는 비가 오지 않아도 함께 쉬어요.","어제 따뜻했어요.","다행이에요. 편히 쉬셨으면 했거든요.","세린이 부드럽게 미소 지었다.","으음, 지난번에 함께 보낸 시간이 문득 생각났어요.","저도 기억하고 있어요.","아아, 그러면 오늘도 기분 좋은 날이겠네요."],"유지안":["어제 진짜 재밌었어요!","아, 집에 가서도 괜히 웃음 나더라. 좀 이상하죠?","저도 계속 생각났어요.","……아, 뭐야. 또 떨리게.","어제 즐거웠어요.","좋아요! 다음에 또 놀아요.","지안이 당신을 보더니 웃다가 잠시 시선을 피했다.","아하하, 오늘은 얼굴에 뭐 안 묻었네요.","지난번 일 생각났어요?","……네. 좀 많이요."],"공재희":["헐 어제 집 가니까 너무 조용했음ㅋㅋ","같이 있던 거 계속 생각나더라.","저도 재희 씨 생각났어요.","뭐야ㅋㅋ 그럼 또 봐야겠네.","어제 즐거웠어요.","웅ㅋㅋ 나도.","재희가 당신을 발견하고 휴대전화를 내려놓았다.","헐ㅋㅋ 또 봄. 어제 진짜 시간 빨리 갔는데.","오늘도 만나서 좋아요.","……웅. 나도 진짜 좋음."]},visitAfterglowVoices={"서이준":["…어제 돌아가고 나서 방이 좀 조용하게 느껴졌어요.","같이 앉아 있던 자리가 눈에 들어오더라고요."],"강도윤":["어제 집에 잘 들어가셨어요?","오늘 차를 우리다가 어제 같이 마셨던 게 생각났어요."],"한시우":["어제 놀다 가고 나니까 집이 좀 조용했어요.","다음엔 간식 더 사 놓을게요 ㅎㅎ"],"정태오":["어제 무사히 귀가하셨습니까?","집에서 함께 보낸 시간이 참 편안했습니다."],"백지한":["어제 집에 와 주셔서 좋았어요.","평소와 같은 공간인데 좀 다르게 느껴지더라고요."],"임하나":["어제 와 주셔서 고마웠어요.","저도 그렇게 편하게 쉬어 본 게 오랜만이라서요."],"차유리":["어제 진짜 푹 쉬었네요.","같이 아무것도 안 하는 것도 좋더라고요."],"오세린":["어제 잘 돌아가셨어요?","창가에 앉으니 어제 함께 듣던 빗소리가 생각나네요."],"유지안":["어제 집에서 진짜 편하게 놀았다!","오늘도 그때 생각나서 좀 웃었어요."],"공재희":["헐 어제 집 가고 나니까 쿠션만 남았음ㅋㅋ","또 놀러 와요. 그냥 같이 있어도 좋더라."]};
function afterglowRecord(p){const z=socialRecord(p);return z.romanceAfterglow||(z.romanceAfterglow={events:[],items:{}})}
function recordRomanceAfterglow(ev){const p=ev?.person;if(!p||!romanceAfterglowVoices[p])return;const v=initSim(),r=afterglowRecord(p),visit=ev.spontaneousVisit?.done&&!ev.spontaneousVisit.first?.leave,sensory=ev.sensoryRomance?.answer?.warm,heart=ev.heartMoment?.answer?.accepted,affection=ev.loverAffection?.answer?.warm;for(const [kind,ok] of [['sensory',sensory],['visit',visit],['heart',heart],['affection',affection]])if(ok&&!r.events.some(x=>x.day===v.day&&x.kind===kind))r.events.push({day:v.day,kind,phone:false,meeting:false});if(p==='한시우'&&ev.sensoryRomance?.approach&&!r.items.coat)r.items.coat={day:v.day,status:'borrowed'};if(p==='임하나'&&sensory&&!r.items.brace)r.items.brace={day:v.day,status:'gift'};}
function recentlySentOutingText(thread,day){
 return thread.some(m=>m.day<=day&&day-m.day<8&&(m.contextKey?.startsWith('together:')||/^afterglow:(?!visit:|sensory:)/.test(m.contextKey||'')));
}
function afterglowPhone(p,day,t){const r=afterglowRecord(p),a=romanceAfterglowVoices[p];if(!a||platonicOnly(p)||touchContext(p,day).conflicted)return null;const e=r.events.filter(x=>!x.phone&&day>x.day&&day-x.day<=10&&(x.kind==='sensory'||x.kind==='visit'||!recentlySentOutingText(t,day))).sort((a,b)=>b.day-a.day||(b.kind==='visit')-(a.kind==='visit'))[0];if(!e)return null;const key='afterglow:'+e.kind+':'+e.day;if(t.some(m=>m.contextKey===key))return null;let script=e.kind==='visit'?[...visitAfterglowVoices[p],...a.slice(2,6)]:a.slice(0,6);if(e.kind!=='sensory'&&e.kind!=='visit')script=['지난번 함께 보낸 시간이 생각났어요.',npcVoice[p][1],'저도 즐거웠어요.',nextMeetReply(p,day,0),'오늘도 좋은 하루 보내요.',npcVoice[p][0]];if(p==='한시우'&&e.kind!=='visit'&&r.items.coat?.status!=='borrowed')script=['어제 잘 들어갔어요?','같이 있던 시간이 생각났어요. ㅎㅎ','저도 즐거웠어요.','다음에도 또 만나요!','오늘도 좋은 하루 보내요.','좋아요! 이따 푹 쉬어요.'];if(p==='임하나'&&e.kind!=='sensory'&&e.kind!=='visit')script=['저… 어제 함께 있어서 좋았어요.','오늘도 좋은 하루 보내세요.','저도 즐거웠어요.','……네. 다음에도 만나요.','고마워요. 하나 씨도요.','네!'];if(day-e.day>1)script=script.map(x=>x.replaceAll('어제','지난번'));return {contextKey:key,script,afterglowEvent:{day:e.day,kind:e.kind}}}
function renderAfterglowMeeting(ev,p){if(!romanceBonusAllowed(ev,'afterglowMeeting'))return false;const v=initSim(),r=afterglowRecord(p),a=romanceAfterglowVoices[p];if(!ev.afterglowMeeting){if(!ev.answered||platonicOnly(p)||touchContext(p,v.day).conflicted)return false;const e=r.events.filter(x=>!x.meeting&&['sensory','visit'].includes(x.kind)&&v.day>x.day&&v.day-x.day<=30).sort((a,b)=>b.day-a.day)[0],coat=p==='한시우'&&r.items.coat?.status==='borrowed'&&v.day>r.items.coat.day&&(!r.items.coat.lastAsked||v.day-r.items.coat.lastAsked>=5);if(!e&&!coat)return false;ev.afterglowMeeting={day:coat?undefined:e?.day,kind:coat?undefined:e?.kind,coat:!!coat};save()}const o=ev.afterglowMeeting;const specific=!o.coat&&o.kind==='sensory';
if(!specific&&o.kind!=='visit'&&!o.coat&&!o.answer)return false;
if(specific){add('이야기',a[6]);add(p,a[7])}
else if(o.coat)add(p,'아, 겉옷! 아직 갖고 있어요? 급한 건 아닌데요.');
else if(o.kind==='visit')add(p,'지난번에 같이 쉬었던 날 생각나요. 그날은 시간이 금방 가더라고요.');
if(o.answer){add(state.name,o.answer.label,true);add(p,o.answer.reply);return false}const opts=o.coat?[['빌려준 겉옷을 돌려준다','오, 잘 입었어요? 다음에 추우면 또 빌려줄게요.',true],['다음에 돌려줄게요.','오케이! 천천히 돌려줘요.',false]]:specific?[[a[8],a[9],false],['그 얘기는 다음에 하고 싶어요.','그래요. 다음에 얘기해요.',false]]:[['저도요. 편하게 쉴 수 있었어요.','편했다니 다행이에요.',false],['벌써 시간이 그렇게 됐나 싶었죠.','그러게요. 어느새 돌아갈 시간이었죠.',false]];
for(const [label,reply,returned] of opts)choiceButton(label,()=>{if(o.answer)return;o.answer={label,reply,returned};if(o.coat)r.items.coat.lastAsked=v.day;if(returned){r.items.coat.status='returned';r.items.coat.returnDay=v.day}const e=r.events.find(x=>x.day===o.day&&x.kind===o.kind);if(e)e.meeting=true;feel(p,{security:1});remember(p,'afterglow:'+v.day,label+' / '+reply);writeJournal(p+' · 지난 만남의 여운');save();renderChoiceEvent();renderSim()});return true}

function jealousPhoneScript(p,j){const prefix=j.source==='seen'?'지난번 '+j.person+'와 함께 있는 모습을 봤어요.':j.source==='heard'?j.witness+'에게 '+j.person+'와 만났다는 이야기를 들었어요.':'';const a=jealousMeetScenes[p],b=jealousRebuff[p];return [prefix||jealousLines[p],prefix?jealousLines[p]:'',a[2],a[3],'각자 다른 사람과도 만날 수 있잖아요.',b[0][1]]}
function contextualPhone(p,day,t){const s=socialRecord(p),a=memoryPhoneLines[p];if(aftermathRecord(p))return aftermathPhone(p,day,t)||friendPhone(p,day,t);if(platonicOnly(p))return friendPhone(p,day,t);if(vIsDating(p)&&s.jealousPending)delete s.jealousPending;if(s.jealousPending&&day>s.jealousPending.day&&relationshipRecall(p,day).kind===1&&memoryFor(p).feelings.hurt<5){delete s.jealousPending;feel(p,{jealousy:-2});}if(s.jealousPending&&day>s.jealousPending.day){const j=s.jealousPending;delete s.jealousPending;return {contextKey:'jealous:'+j.day,script:jealousPhoneScript(p,j)}}if(!a)return null;const glow=afterglowPhone(p,day,t);if(glow)return glow;const learned=rememberedPhone(p,day,t);if(learned)return learned;const last=s.lastTogether;if(s.lastDate?.day===last&&last&&day-last>=1&&day-last<=3&&(s.lastDate.disclosed||!recentlySentOutingText(t,day))&&!t.some(m=>m.contextKey==='together:'+last))return {contextKey:'together:'+last,script:[a[0].replaceAll('어제',day-last===1?'어제':'지난번'),s.lastDate.disclosed?'귀한 휴가를 함께 보내 주셔서 고마워요.':a[1],'저도 즐거웠어요.',nextMeetReply(p,day,0),'또 둘이 만나고 싶어요.',nextMeetReply(p,day,2)]};if(last&&day-last>=1&&day-last<=3&&!recentlySentOutingText(t,day)&&!t.some(m=>m.contextKey==='together:'+last))return {contextKey:'together:'+last,script:[a[0].replaceAll('어제',day-last===1?'어제':'지난번'),a[1],'저도 즐거웠어요.',nextMeetReply(p,day,1),'저도 계속 생각났어요.',npcVoice[p][1]]};if(relationshipTier(p)>=2&&s.lastSeen&&day-s.lastSeen>=7&&!t.some(m=>m.contextKey==='absence:'+s.lastSeen))return {contextKey:'absence:'+s.lastSeen,script:[a[2],a[3],'잘 지내고 있어요.',npcVoice[p][3],'저도 보고 싶었어요.',npcVoice[p][4]]};return null}
const JIHAN='백지한';
function jihanBond(){const z=socialRecord(JIHAN);return z.possession||(z.possession={desire:7,scar:0,lastPhone:0,lastScene:0,phoneCount:0,sceneCount:0,mutedUntil:0,history:[]})}
function jihanScar(day){const r=jihanBond();if(r.scar===day)return;r.scar=day;r.mutedUntil=0;r.history.push({day,kind:'betrayal'})}
function jihanChange(kind,day){
 const r=jihanBond();
 if(kind==='warm')feel(JIHAN,{distrust:-2,obsession:-1,security:2});
 else if(kind==='boundary'){r.mutedUntil=day+7;feel(JIHAN,{obsession:-2,security:1});}
 else if(kind==='avoid'&&r.scar)feel(JIHAN,{distrust:1,obsession:2});
 r.history.push({day,kind});
}
const jihanPhoneNormal=[['오늘은 제가 좀 욕심을 내도 돼요?','다음에 만날 때는 제 옆에 오래 있어 줘요.','좋아요. 저도 더 오래 있고 싶어요.','그 말 기억해 둘게요. 기대해도 되는 거죠?','각자 시간도 필요해요.','알죠. 그래도 보고 싶은 건 숨기기 싫네요.'],['아까 헤어지고 나니까 좀 아쉽더라고요.','다음에는 제가 먼저 손 내밀어도 돼요?','좋아요.','좋네. 다음에 얼굴 보고 얘기해요.','오늘은 각자 쉬어요.','좋아요. 푹 쉬어요.'],['오늘따라 목소리가 듣고 싶네요.','제가 이렇게 먼저 찾는 것도 꽤 드문 일인데.','저도 보고 싶어요.','그럼 다음에 만날 때는 조금 더 가까이 있어요.','지금은 혼자 있고 싶어요.','알겠어요. 여유 생기면 연락 줘요.']];
const jihanPhoneScar=[['오늘 어디예요?','혼자 있는 거예요? 그냥 궁금해서요.','오늘은 별일 없어요. 우리 이야기해요.','…그래요. 내가 또 괜한 생각을 했나 봐요.','일정을 전부 알려 줄 필요는 없어요.','…알아요. 조금 시간을 갖죠.'],['오늘도 약속 있어요?','나한테는 왜 이렇게 묻기 어려운 사람이 됐을까.','불안한 마음은 이야기해도 돼요.','…그럼 조금만 들어 줘요.','추궁하는 건 그만해요.','알겠어요. 지금은 제가 진정하는 게 먼저겠네요.'],['지금 뭐 해요?','답장 없으면 자꾸 지난 일이 생각나요.','지한 씨 마음을 이해하고 싶어요.','…내가 이렇게까지 신경 쓸 줄은 몰랐네요.','답장을 재촉하지 말아 주세요.','…알겠어요. 기다릴게요.']];
const pressureTextVoices={
 '백지한':[
  {
   polite:['어디예요?','혼자 있어요?','물어볼 게 하나 더 있어요.','지금 옆에 누가 있으면, 그 사람 앞에서는 내 전화 못 받아요?','누구랑 있는지 묻고 싶어서 이러는 거예요.','나 좀 봐요. 문자 한 줄이 그렇게 어려워요?'],
   casual:['어디야?','혼자 있어?','물어볼 게 하나 더 있어.','지금 옆에 누가 있으면, 그 사람 앞에서는 내 전화 못 받아?','누구랑 있는지 묻고 싶어서 이러는 거야.','나 좀 봐. 문자 한 줄이 그렇게 어려워?'],
   choices:[["나 여기 있어요. 목소리 들으면서 얘기할까요?","나 여기 있어. 목소리 들으면서 얘기할까?"],["어디서 누구랑 있는지까지는 묻지 말아 줘요.","어디서 누구랑 있는지까지는 묻지 마."]],
   answers:[['답 왔네요. ……좋다. 잠깐만 나랑 얘기해요.','답 왔네. ……좋다. 잠깐만 나랑 얘기해.'],['알겠어요. 어디 있는지는 그만 물을게요. 먼저 연락 줘요.','알겠어. 어디 있는지는 그만 물을게. 먼저 연락 줘.']]
  },{
   polite:['나한테 언제 전화해 줄 수 있어요?','몇 시쯤인지 말해 줘요.','그 시간은 비워 둘게요.','다른 사람 전화 오면 받지 말고.','……싫어요? 그 잠깐도 나 혼자 차지하면 안 돼요?','몇 시에 걸면 돼요. 그 말부터 해 줘요.'],
   casual:['나한테 언제 전화해 줄 수 있어?','몇 시쯤인지 말해 줘.','그 시간은 비워 둘게.','다른 사람 전화 오면 받지 말고.','……싫어? 그 잠깐도 나 혼자 차지하면 안 돼?','몇 시에 걸면 돼. 그 말부터 해 줘.'],
   choices:[["나도 통화하고 싶어요. 언제 되는지 보고 먼저 걸게요.","나도 통화하고 싶어. 언제 되는지 보고 먼저 걸게."],["지금 몇 시라고 정하진 않을래요. 내가 전화할게요.","지금 몇 시라고 정하진 않을래. 내가 전화할게."]],
   answers:[['기다리는 건 할 수 있어요. 나한테도 내 차례가 있다는 것만 알면.','기다리는 건 할 수 있어. 나한테도 내 차례가 있다는 것만 알면.'],['……전화까지 내 맘대로 정했네요. 오늘은 먼저 안 걸게요.','……전화까지 내 맘대로 정했네. 오늘은 먼저 안 걸게.']]
  }
 ],
 '강도윤':[
  {
   polite:['오늘은 내가 먼저 보고 싶다고 해도 돼요?','아까부터 썼다 지웠다 하고 있어요.','먹고 싶은 거 있냐고 물으면 대답해 줄 것 같아서요.','그냥 그걸로 보낼걸.','……그래도 오늘은 내가 보고 싶다는 말에 답 좀 해 줘요.','나도 그 말 듣고 싶어요.'],
   casual:['오늘은 내가 먼저 보고 싶다고 해도 돼?','아까부터 썼다 지웠다 하고 있어.','먹고 싶은 거 있냐고 물으면 대답해 줄 것 같아서.','그냥 그걸로 보낼걸.','……그래도 오늘은 내가 보고 싶다는 말에 답 좀 해 줘.','나도 그 말 듣고 싶어.'],
   choices:[["말해 줘서 좋아요. 나도 보고 싶어요.","말해 줘서 좋아. 나도 보고 싶어."],["보고 싶다고 해도 돼요. 내 대답은 조금 기다려 줘요.","보고 싶다고 해도 돼. 내 대답은 조금 기다려 줘."]],
   answers:[['그렇게 말해 주니까 좋네요. 괜히 다른 얘기 안 꺼내길 잘했어요.','그렇게 말해 주니까 좋네. 괜히 다른 얘기 안 꺼내길 잘했어.'],['내가 듣고 싶은 답이 있어서 자꾸 보냈네요. 오늘은 여기까지 할게요.','내가 듣고 싶은 답이 있어서 자꾸 보냈네. 오늘은 여기까지 할게.']]
  },{
   polite:['혹시 내가 뭐 잘못했어요?','마음에 걸리는 게 있으면 말해 줘요.','사실 딱히 짚이는 것도 없는데.','내가 뭘 잘못한 거면 고치기라도 하잖아요.','나 혼자 기다리고 있는 건지, 그것만 좀 알려 줄래요?','괜찮을 때 연락 달라고 써야 하는데, 오늘은 그 말이 잘 안 써져요.'],
   casual:['혹시 내가 뭐 잘못했어?','마음에 걸리는 게 있으면 말해 줘.','사실 딱히 짚이는 것도 없는데.','내가 뭘 잘못한 거면 고치기라도 하잖아.','나 혼자 기다리고 있는 건지, 그것만 좀 알려 줄래?','괜찮을 때 연락 달라고 써야 하는데, 오늘은 그 말이 잘 안 써져.'],
   choices:[["잘못한 거 없어요. 답이 늦어도 우리 괜찮아요.","잘못한 거 없어. 답이 늦어도 우리 괜찮아."],["내가 바로 답을 못 해도 잘못부터 찾지는 말아요.","내가 바로 답을 못 해도 잘못부터 찾지는 마."]],
   answers:[['그러면 됐어요. 나도 숨 좀 돌리고 있을게요.','그러면 됐어. 나도 숨 좀 돌리고 있을게.'],['답이 없다고 혼자 일을 너무 키웠네요. 나중에 얘기해요.','답이 없다고 혼자 일을 너무 키웠네. 나중에 얘기하자.']]
  }
 ],
 '서이준':[
  {
   polite:['통화 돼요?','급한 일은 아니에요.','……그러면 안 걸어도 되겠다고 생각하려나.','솔직히 답 없으니까 좀 신경 쓰여요.','아까 급한 일 아니라는 말은 취소할게요.','목소리 듣고 싶어요.'],
   casual:['통화 돼?','급한 일은 아니야.','……그러면 안 걸어도 되겠다고 생각하려나.','솔직히 답 없으니까 좀 신경 쓰여.','아까 급한 일 아니라는 말은 취소할게.','목소리 듣고 싶어.'],
   choices:[["나도 목소리 듣고 싶어요. 잠깐 통화해요.","나도 목소리 듣고 싶어. 잠깐 통화하자."],["전화는 내가 여유 있을 때 걸게요. 지금은 기다려 줘요.","전화는 내가 여유 있을 때 걸게. 지금은 기다려 줘."]],
   answers:[['…왔네요. 괜히 말 돌렸어요. 연락 기다렸어요.','…왔네. 괜히 말 돌렸어. 연락 기다렸어.'],['알겠어요. 이 뒤로는 더 안 보낼게요.','알겠어. 이 뒤로는 더 안 보낼게.']]
  },{
   polite:['내 문자 기다려 본 적 있어요?','난 요즘 좀 그래요.','화면 켜지면 이름부터 봐요.','다른 이름이면 다시 엎어 두고.','……나만 그러는 건지 물어보고 싶었어요.','이건 대충 웃고 넘기지 말아요.'],
   casual:['내 문자 기다려 본 적 있어?','난 요즘 좀 그래.','화면 켜지면 이름부터 봐.','다른 이름이면 다시 엎어 두고.','……나만 그러는 건지 물어보고 싶었어.','이건 대충 웃고 넘기지 마.'],
   choices:[["기다린 적 있어요. 나도 알림 오면 이름부터 봐요.","기다린 적 있어. 나도 알림 오면 이름부터 봐."],["좋아하는 걸 답장 속도로 확인하지는 말아요.","좋아하는 걸 답장 속도로 확인하지는 마."]],
   answers:[['…이 답은 지우지 말아요. 나중에 또 읽게.','…이 답은 지우지 마. 나중에 또 읽게.'],['나도 답 늦을 때 있는데. 그렇게 묻는 거 별로였겠네요. 그만할게요.','나도 답 늦을 때 있는데. 그렇게 묻는 거 별로였겠네. 그만할게.']]
  }
 ],
 '공재희':[
  {
   polite:['뭐 해요 👀','나 지금 폰 들고 대기 중인데ㅋㅋ','아니 근데 왜 내가 먼저 보내 놓고 눈치 보지','딱 한 글자만 보내 봐요. 점도 됨.','점 하나 온다고 좋아할 내가 좀 웃기네.','사실 나 보고 싶었냐고 물어보려고 했어요.'],
   casual:['뭐 해 👀','나 지금 폰 들고 대기 중인데ㅋㅋ','아니 근데 왜 내가 먼저 보내 놓고 눈치 보지','딱 한 글자만 보내 봐. 점도 됨.','점 하나 온다고 좋아할 내가 좀 웃기네.','사실 나 보고 싶었냐고 물어보려고 했어.'],
   choices:[["나 왔어요. 기다렸어요?","나 왔어. 기다렸어?"],["폰 계속 보고 있으면 더 애타요. 내가 다시 톡할게요.","폰 계속 보고 있으면 더 애타. 내가 다시 톡할게."]],
   answers:[['아 왔다. 나 방금 웃은 거 비밀이에요ㅋㅋ','아 왔다. 나 방금 웃은 거 비밀이야ㅋㅋ'],['웅. 이제 폰 엎어 놓을게요. 먼저 톡 줘요.','웅. 이제 폰 엎어 놓을게. 먼저 톡 줘.']]
  },{
   polite:['나 오늘 딱 하나만 물어볼래요','요즘 좋은 거 보면 누구한테 제일 먼저 보내요?','나는 여기부터 켜거든요.','……왜 물어보긴. 내 이름 나오면 좋으니까.','이런 건 빨리 대답해 줘야 내가 덜 민망한데ㅠ','나 지우기 전에 빨리 와요ㅠㅠ'],
   casual:['나 오늘 딱 하나만 물어볼래','요즘 좋은 거 보면 누구한테 제일 먼저 보내?','나는 여기부터 켜거든.','……왜 물어보긴. 내 이름 나오면 좋으니까.','이런 건 빨리 대답해 줘야 내가 덜 민망한데ㅠ','나 지우기 전에 빨리 와ㅠㅠ'],
   choices:[["재밌는 거 보면 같이 웃고 싶어서 여기부터 찾아요.","재밌는 거 보면 같이 웃고 싶어서 여기부터 찾아."],["누구한테 먼저 보내는지 순서는 안 정할래요.","누구한테 먼저 보내는지 순서는 안 정할래."]],
   answers:[['오케이. 나 이거 캡처해도 돼요? 혼자 볼 건데ㅋㅋ','오케이. 나 이거 캡처해도 돼? 혼자 볼 건데ㅋㅋ'],['앗. 내가 답 정해 놓고 물어봤네요. 그만 물어볼게요.','앗. 내가 답 정해 놓고 물어봤네. 그만 물어볼게.']]
  }
 ],
 '임하나':[
  {
   polite:['……잠깐만 얘기할 수 있어요?','바쁘면 이따 답해 줘도 돼요.','방금 제가 이따 해도 된다고 했는데요.','자꾸 이 창에서 못 나가겠어요.','언제쯤 다시 얘기할 수 있는지만 말해 줄래요?','알면 그때까진 가만히 있을 수 있을 것 같아요.'],
   casual:['……잠깐만 얘기할 수 있어?','바쁘면 이따 답해 줘도 돼.','방금 내가 이따 해도 된다고 했는데.','자꾸 이 창에서 못 나가겠어.','언제쯤 다시 얘기할 수 있는지만 말해 줄래?','알면 그때까진 가만히 있을 수 있을 것 같아.'],
   choices:[["네, 얘기해요. 나 지금 듣고 있어요.","응, 얘기하자. 나 지금 듣고 있어."],["지금은 답하기 어려워요. 내가 먼저 연락할게요.","지금은 답하기 어려워. 내가 먼저 연락할게."]],
   answers:[['아, 이제 폰 내려놔도 되겠다. 답해 줘서 좋아요.','아, 이제 폰 내려놔도 되겠다. 답해 줘서 좋아.'],['네. 기다린다고 해 놓고 계속 보내면 기다리는 게 아니죠. 저도 할 일 하고 있을게요.','응. 기다린다고 해 놓고 계속 보내면 기다리는 게 아니지. 나도 할 일 하고 있을게.']]
  },{
   polite:['나중에 보자는 말 있잖아요.','저는 언제인지 알아야 마음이 놓여요.','이번엔 제가 먼저 날짜 물어봐도 돼요?','갖고 싶은 게 있냐고 하면 별로 없는데.','이상하게 같이 있을 시간은 자꾸 더 달라고 하고 싶어요.','……이번에는 남는 시간 말고, 먼저 비워 주면 안 돼요?'],
   casual:['나중에 보자는 말 있잖아.','나는 언제인지 알아야 마음이 놓여.','이번엔 내가 먼저 날짜 물어봐도 돼?','갖고 싶은 게 있냐고 하면 별로 없는데.','이상하게 같이 있을 시간은 자꾸 더 달라고 하고 싶어.','……이번에는 남는 시간 말고, 먼저 비워 주면 안 돼?'],
   choices:[["나도 만나고 싶어요. 같이 날짜 골라요.","나도 만나고 싶어. 같이 날짜 고르자."],["오늘 바로 정하긴 어려워요. 조금만 기다려 줘요.","오늘 바로 정하긴 어려워. 조금만 기다려 줘."]],
   answers:[['……네. 지금 이렇게 대답해 준 것만으로도 한결 나아요.','……응. 지금 이렇게 대답해 준 것만으로도 한결 나아.'],['그럼 지금은 정하지 말아요. 제가 너무 조급했어요.','그럼 지금은 정하지 말자. 내가 너무 조급했어.']]
  }
 ],
 '정태오':[
  {
   polite:['통화하실 수 있습니까?','언제쯤 시간이 나십니까.','일정이 궁금해서 묻는 건 아닙니다.','……그렇게 적고 보니 변명 같군요.','기다려야 할 시간이 얼마인지 알고 싶습니다.','답 한 줄 주실 때까지는 도무지 다른 일에 손이 안 갑니다.'],
   casual:['통화할 수 있어?','언제쯤 시간 나?','일정이 궁금해서 묻는 건 아니야.','……써 놓고 보니 그것도 변명이네.','얼마나 더 기다리면 되는지 알고 싶어.','답 한 줄 올 때까지는 도무지 다른 일에 손이 안 가.'],
   choices:[["통화하고 싶어요. 내가 가능한 시간부터 알려 줄게요.","통화하고 싶어. 내가 가능한 시간부터 알려 줄게."],["지금 당장 몇 시라고 대답하긴 어려워요. 여유가 생기면 연락할게요.","지금 당장 몇 시라고 대답하긴 어려워. 여유가 생기면 연락할게."]],
   answers:[['답 주셨군요. 이제 다른 일에도 집중할 수 있겠습니다.','답 왔네. 이제 다른 일에도 집중할 수 있겠다.'],['알겠습니다. 제가 조급해서 재촉했습니다. 연락하실 때까지 기다리겠습니다.','알았어. 내가 조급해서 재촉했어. 먼저 연락할 때까지 기다릴게.']]
  },{
   polite:['다음에 만나면 여쭙고 싶은 게 있습니다.','제가 먼저 연락하지 않으면 제 생각이 나십니까?','문자로 여쭐 생각은 없었는데.','보낸 김에 솔직하게 말씀드리겠습니다.','요즘은 저만 기다리는 것 같아서 싫습니다.','다음에는 제가 먼저 연락할 때까지 기다리지 말아 주십시오.'],
   casual:['다음에 만나면 묻고 싶은 게 있어.','내가 먼저 연락 안 해도 가끔 내 생각 나?','문자로 물을 생각은 없었는데.','보낸 김에 솔직히 말할게.','요즘은 나만 기다리는 것 같아서 싫어.','다음에는 내가 먼저 연락할 때까지 기다리지 말아 줘.'],
   choices:[["연락 없는 날도 생각나요. 이번엔 내가 먼저 연락할게요.","연락 없는 날도 생각나. 이번엔 내가 먼저 연락할게."],["연락한 횟수로 내 마음을 재지는 말아 줘요.","연락한 횟수로 내 마음을 재지는 마."]],
   answers:[['그 말이면 됐습니다. 괜히 어려운 질문부터 했군요.','그 말이면 됐어. 괜히 어려운 질문부터 했네.'],['제 말을 먼저 쏟아 놓고 답까지 재촉했군요. 이만하겠습니다.','내 말을 먼저 쏟아 놓고 답까지 재촉했네. 그만할게.']]
  }
 ],
 '한시우':[
  {
   polite:['나 지금 전화 걸까 말까 하는데요','받을 수 있어요?','벨 울리고 안 받으면 그게 더 쫄릴 것 같아서ㅋㅋ','……근데 안 걸고 여기서 기다리는 게 더 쫄리네.','아, 진짜 보고 싶어요.','이번엔 먼저 한 번만 걸어 주면 안 돼요?'],
   casual:['나 지금 전화 걸까 말까 하는데','받을 수 있어?','벨 울리고 안 받으면 그게 더 쫄릴 것 같아서ㅋㅋ','……근데 안 걸고 여기서 기다리는 게 더 쫄리네.','아, 진짜 보고 싶어.','이번엔 먼저 한 번만 걸어 주면 안 돼?'],
   choices:[["나도 목소리 듣고 싶어요. 내가 걸까요?","나도 목소리 듣고 싶어. 내가 걸까?"],["지금 통화는 어려워요. 나중에 내가 걸게요.","지금 통화는 어려워. 나중에 내가 걸게."]],
   answers:[['와, 답 왔다. 나 방금까지 괜히 방 안을 몇 바퀴나 돌았어요.','와, 답 왔다. 나 방금까지 괜히 방 안을 몇 바퀴나 돌았어.'],['앗, 내가 혼자 급발진했죠. 이따 봐요.','앗, 내가 혼자 급발진했지. 이따 봐.']]
  },{
   polite:['나한테 먼저 해 주면 좋은 거 하나 있어요.','다음에 보고 싶으면 그냥 보고 싶다고 해 줘요.','그럼 나 진짜 좋아할 건데.','내가 자꾸 먼저 말하니까','가끔은 대답만 듣고도 내가 좋아서 착각하는 건가 싶어요.','나 좋다고 먼저 말해 주면 안 돼요? 지금 좀 듣고 싶어서.'],
   casual:['나한테 먼저 해 주면 좋은 거 하나 있어.','다음에 보고 싶으면 그냥 보고 싶다고 해 줘.','그럼 나 진짜 좋아할 건데.','내가 자꾸 먼저 말하니까','가끔은 대답만 듣고도 내가 좋아서 착각하는 건가 싶어.','나 좋다고 먼저 말해 주면 안 돼? 지금 좀 듣고 싶어서.'],
   choices:[["그럼 내가 먼저 말할게요. 보고 싶어요.","그럼 내가 먼저 말할게. 보고 싶어."],["그 말은 내가 하고 싶을 때 먼저 하고 싶어요.","그 말은 내가 하고 싶을 때 먼저 하고 싶어."]],
   answers:[['지금 그거 보니까 나 또 혼자 웃고 있어요 ㅋㅋ','지금 그거 보니까 나 또 혼자 웃고 있어 ㅋㅋ'],['아 맞다. 말해 달라고 해 놓고 옆에서 계속 찌르면 곤란하죠. 여기까지만 할게요.','아 맞다. 말해 달라고 해 놓고 옆에서 계속 찌르면 곤란하지. 여기까지만 할게.']]
  }
 ],
 '차유리':[
  {
   polite:['나 지금 좀 유치한 거 물어봐도 돼요?','하루 중에 내 생각은 언제 해요?','난 별거 다 하다가 생각나거든요.','이걸 물어볼까 말까 하면서도 또 생각났고.','그러니까 오늘만큼은 나 혼자 이러는 거 아니라고 해 줘요.','그 답 하나 받으려고 자꾸 여기만 보게 되네요.'],
   casual:['나 지금 좀 유치한 거 물어봐도 돼?','하루 중에 내 생각은 언제 해?','난 별거 다 하다가 생각나거든.','이걸 물어볼까 말까 하면서도 또 생각났고.','그러니까 오늘만큼은 나 혼자 이러는 거 아니라고 해 줘.','그 답 하나 받으려고 이러고 있다, 내가.'],
   choices:[["이런 문자 오기 전에도 생각나요. 오늘도 그랬어요.","이런 문자 오기 전에도 생각나. 오늘도 그랬어."],["생각날 때마다 알려 줘야 하는 사이가 되긴 싫어요.","생각날 때마다 알려 줘야 하는 사이가 되긴 싫어."]],
   answers:[['아, 이제야 딴생각 좀 하겠다. 방금 그 말 좋았어요.','아, 이제야 딴생각 좀 하겠다. 방금 그 말 좋았어.'],['그래요. 질문 하나 한다더니 내가 말을 너무 붙였네. 여기까지 할게요.','그래. 질문 하나 한다더니 내가 말을 너무 붙였네. 여기까지 할게.']]
  },{
   polite:['나한테 뭐 보여 주고 싶은 거 없어요?','오늘 본 거 중에 제일 사소한 거 하나만.','누구나 볼 수 있게 올리는 거 말고요.','나한테만 보여 주고 싶은 거.','……아, 쓰고 나니까 내가 뭘 원하는지 알겠네. 나만 아는 게 하나쯤 있었으면 좋겠어요.','다른 사람한텐 못 보여 주는 것도 나한텐 보여 줬으면 좋겠어요.'],
   casual:['나한테 뭐 보여 주고 싶은 거 없어?','오늘 본 거 중에 제일 사소한 거 하나만.','누구나 볼 수 있게 올리는 거 말고.','나한테만 보여 주고 싶은 거.','……아, 쓰고 나니까 내가 뭘 원하는지 알겠네. 나만 아는 게 하나쯤 있었으면 좋겠어.','다른 사람한텐 못 보여 주는 것도 나한텐 보여 줬으면 좋겠어.'],
   choices:[["좋아요. 다음에 눈에 들어오는 게 있으면 제일 먼저 보여 줄게요.","좋아. 다음에 눈에 들어오는 게 있으면 제일 먼저 보여 줄게."],["보여 줄 게 떠오르면 그때 내가 보내도 될까요?","보여 줄 게 떠오르면 그때 내가 보내도 될까?"]],
   answers:[['그거 좋네요. 내 얘기도 다음에 하나 꺼내 놓을게요.','그거 좋네. 내 얘기도 다음에 하나 꺼내 놓을게.'],['보여 주고 싶을 때 보여 줘요. 보채서 받은 건 나도 별로예요.','보여 주고 싶을 때 보여 줘. 보채서 받은 건 나도 별로야.']]
  }
 ],
 '오세린':[
  {
   polite:['내가 오늘은 먼저 부탁해도 돼요?','조금만 나랑 얘기해요.','바쁠 때 재촉하지 않는 게 예의인 줄은 알아요.','그런데 예의 차리고 얌전히 기다리기엔','지금은 당신이 너무 보고 싶네요.','지금 들으면 좋겠어요. 당신 목소리.'],
   casual:['내가 오늘은 먼저 부탁해도 돼?','조금만 나랑 얘기해.','바쁠 때 재촉하지 않는 게 예의인 줄은 알아.','그런데 예의 차리고 얌전히 기다리기엔','지금은 네가 너무 보고 싶어.','지금 들으면 좋겠어. 네 목소리.'],
   choices:[["나도 얘기하고 싶었어요. 조금 더 같이 있어요.","나도 얘기하고 싶었어. 조금 더 같이 있자."],["오늘은 내 시간을 보내고 싶어요. 내일 이야기해요.","오늘은 내 시간을 보내고 싶어. 내일 이야기하자."]],
   answers:[['목소리도 듣고 싶지만, 지금은 이 말만 좀 더 읽고 있을게요.','목소리도 듣고 싶지만, 지금은 이 말만 좀 더 읽고 있을게.'],['그래요. 당신이 편할 때 다시 이야기해요. 나도 내 시간을 보내고 있을게요.','그래. 네가 편할 때 다시 이야기하자. 나도 내 시간을 보내고 있을게.']]
  },{
   polite:['하루 중에 나한테만 남겨 줄 수 있는 시간이 있어요?','길지 않아도 돼요.','십 분이면 좋겠네요.','그 시간에는 다른 사람 연락이 와도 나부터 봐 줘요.','이렇게까지 말하고 나면 내 욕심이 너무 잘 보이나요?','그래도 그 십 분만큼은 정말 나한테 줄래요?'],
   casual:['하루 중에 나한테만 남겨 줄 수 있는 시간이 있어?','길지 않아도 돼.','십 분이면 좋겠어.','그 시간에는 다른 사람 연락이 와도 나부터 봐 줘.','이렇게까지 말하면 내가 무슨 욕심 내는지 다 보이지?','그래도 그 십 분만큼은 정말 나한테 줄래?'],
   choices:[["둘이서만 얘기할 시간, 나도 갖고 싶어요.","둘이서만 얘기할 시간, 나도 갖고 싶어."],["매일 정해 두는 건 부담스러워요. 편할 때 연락해요.","매일 정해 두는 건 부담스러워. 편할 때 연락하자."]],
   answers:[['그 말 듣고 싶었어요. 이제 좀 마음이 놓이네요.','그 말 듣고 싶었어. 이제 좀 마음이 놓이네.'],['내가 욕심냈네요. 지금 답을 정해 달라고 하진 않을게요.','내가 욕심냈네. 지금 답을 정해 달라고 하진 않을게.']]
  }
 ],
 '유지안':[
  {
   polite:['나 지금 좀 삐쳤어요.','누구한테냐고 물어봐 주면 안 돼요?','아니, 기다리기 싫으니까 그냥 말할래요.','보고 싶으면 먼저 보고 싶다고 말할 수도 있잖아요.','그 말 나도 가끔은 내가 먼저 듣고 싶어요.','나 지금 그 말 들으려고 이러고 있어요.'],
   casual:['나 지금 좀 삐쳤어.','누구한테냐고 물어봐 주면 안 돼?','아니, 기다리기 싫으니까 그냥 말할래.','보고 싶으면 먼저 보고 싶다고 말할 수도 있잖아.','그 말 나도 가끔은 내가 먼저 듣고 싶어.','나 지금 그 말 들으려고 이러고 있어.'],
   choices:[["무슨 일인지 궁금해요. 나도 보고 싶었어요.","무슨 일인지 궁금해. 나도 보고 싶었어."],["속상한 건 듣고 싶어요. 무슨 일인지 맞혀 보라고 하진 말아 줘요.","속상한 건 듣고 싶어. 무슨 일인지 맞혀 보라고 하진 마."]],
   answers:[['봤어요. 나도 보고 싶었어요. 그 말을 꺼내기가 그렇게 어렵더라.','봤어. 나도 보고 싶었어. 그 말을 꺼내기가 그렇게 어렵더라.'],['알았어요. 내가 삐쳤다고 지금 하던 거 놓고 답하라는 건 좀 그렇죠.','알았어. 내가 삐쳤다고 지금 하던 거 놓고 답하라는 건 좀 그렇지.']]
  },{
   polite:['오늘 나중에 시간 나요?','나 그 시간 좀 찜하면 안 돼요?','나중에 또 물으면 그사이에 누가 먼저 데려갈 것 같아서.','내가 이거 쓰면서도 승부욕 좀 그만 부리자고 했거든요.','근데 양보하고 싶은 마음이 영 안 생기네요.','오늘은 나 먼저 만나면 안 돼요?'],
   casual:['오늘 나중에 시간 나?','나 그 시간 좀 찜하면 안 돼?','나중에 또 물으면 그사이에 누가 먼저 데려갈 것 같아서.','내가 이거 쓰면서도 승부욕 좀 그만 부리자고 했거든.','근데 양보하고 싶은 마음이 영 안 생기네.','오늘은 나 먼저 만나면 안 돼?'],
   choices:[["나도 같이 보내고 싶어요. 시간 맞춰 봐요.","나도 같이 보내고 싶어. 시간 맞춰 보자."],["오늘 내 시간을 미리 정해 두진 말아요. 내가 먼저 얘기할게요.","오늘 내 시간을 미리 정해 두진 마. 내가 먼저 얘기할게."]],
   answers:[['좋아요. 대답 들었으니까 이제 덜 조급해요.','좋아. 대답 들었으니까 이제 덜 조급해.'],['알았어요. 나 혼자 마음 급하다고 반칙까지 하면 안 되죠. 먼저 연락해 줘요.','알았어. 나 혼자 마음 급하다고 반칙까지 하면 안 되지. 먼저 연락해 줘.']]
  }
 ]
};

// Every entry in the thread is one conversation. Save the exact texts that arrived,
// so a later change in speech register never rewrites an older bubble.
function speechRegisterIndex(p,side,day){
 const a=memoryFor(p).address,mode=a[side+'Speech'];
 return !(a.offerDay>day)&&(mode==='반말'||mode==='혼용'&&day%2===0)?1:0;
}
function unreadPhoneCount(thread){
 return thread.reduce((count,m)=>count+(m.reply?0:m.pressureBurst?m.pressureBurst.lines.length:1),0);
}
function pressureTextPause(v,p,day,slot){
 const z=v.social?.[p],a=v.activeEvent,plan=v.datePlans?.[day],trip=plan?.trip;
 return !vIsDating(p)||!z?.contact||v.finished||!!everydayIssue(p)||!!breakupWarning(p)||
  (p===JIHAN&&day<jihanBond().mutedUntil)||
  ['cooling','ready'].includes(z.aftermath?.status)||
  z.lastTogether===day||z.lastSeen===day||
  (v.overnightPending?.p===p&&day-v.overnightPending.day<=1)||
  a?.person===p||!!a?.groupPartners?.includes(p)||!!a?.tripScene?.people?.includes(p)||
  (trip?.people?.includes(p)&&(trip.stage===2||slot>=plan.slot))||
  (plan?.slot===slot&&(plan.p===p||!!plan.group?.includes(p)));
}
function pressureTextReason(p,day,thread,pressure){
 if(pressure.distrust>=5||memoryFor(p).feelings.jealousy>=4)return 'uneasy';
 if(thread.some(m=>!m.reply&&!m.pressureBurst&&m.day<day))return 'waiting';
 const z=socialRecord(p),last=Math.max(z.lastSeen||0,z.lastTogether||0,coupleRecord(p).since||0);
 return last&&day-last>=2?'missing':null;
}
function pressurePriorityMessage(m,day){
 if(m.reply)return false;
 if(m.breakupNotice||m.coupleRepair)return true;
 if(m.npcOffer)return m.npcOffer.day>day;
 return m.day>=day-1&&(m.outingQuestion||m.npcLifeNotice||m.birthday);
}
function tickPressureTexts(v,day,slot){
 if(v.finished||![0,2,3].includes(slot))return 0;
 const phone=phoneData();let sent=0;
 for(const p of people){
  if(v.romance[p]!=='dating'||!v.social?.[p]?.contact)continue;
  const thread=phone.threads[p]||(phone.threads[p]=[]);
  let m=thread.findLast(item=>item.pressureBurst),batch=m?.pressureBurst;
  if(m?.day===day&&(m.reply||batch.stopped||batch.lines.length>=batch.limit))continue;
  const pressure=relationshipPressure(p);
  const paused=pressureTextPause(v,p,day,slot)||thread.some(item=>pressurePriorityMessage(item,day));
  if(m?.day===day){
   // A new exchange or an actual meeting ends the wait, even when a saved
   // game is resumed later that same day. Keep the already delivered lines.
   if(paused||pressure.obsession<12||thread.at(-1)!==m||
      (thread.filter(other=>other!==m&&!other.reply).length<batch.pendingBefore||thread.some(other=>other!==m&&other.replyDay===day))){
    batch.stopped=true;continue;
   }
  }else{
   if(slot!==0||paused||pressure.obsession<12||m&&(!m.reply||day<(batch.nextDay??m.day+7)))continue;
   if(thread.some(other=>other.day===day||other.replyDay===day))continue;
   const reason=pressureTextReason(p,day,thread,pressure);
   if(!reason)continue;
   const preferred=p===JIHAN?0:reason==='uneasy'?1:0;
   const variant=batch?.variant===preferred?(preferred+1)%pressureTextVoices[p].length:preferred;
   batch={variant,reason,pendingBefore:thread.filter(other=>!other.reply).length,limit:pressure.obsession>=16?6:5,lines:[],nextDay:day+7};
   m={day,contextKey:'pressure:'+day,pressureBurst:batch};thread.push(m);
  }
  const goal=slot===0?2:slot===2?4:batch.limit;
  const lines=pressureTextVoices[p][batch.variant][speechRegisterIndex(p,'npc',day)?'casual':'polite'];
  while(batch.lines.length<goal){
   batch.lines.push({day,slot,text:lines[batch.lines.length]});
   sent++;
  }
  phone.last[p]=day;
 }
 return sent;
}
function replyPressureText(p,m,index){
 const v=initSim(),batch=m.pressureBurst;
 if(m.reply||!vIsDating(p)||!phoneData().threads[p]?.includes(m))return;
 const script=pressureTextVoices[p][batch.variant];
 m.reply=index+1;m.replyDay=v.day;
 batch.playerLine=script.choices[index][speechRegisterIndex(p,'player',v.day)];
 batch.npcLine=script.answers[index][speechRegisterIndex(p,'npc',v.day)];
 const thread=phoneData().threads[p];
 if(thread.at(-1)!==m){
  // A reply to an older burst belongs after any intervening conversation.
  batch.replySeparate=true;
  thread.push({day:v.day,reply:1,pressureReplyTo:m.contextKey,playerLine:batch.playerLine,npcLine:batch.npcLine});
 }
 batch.nextDay=Math.max(batch.nextDay,v.day+(index===1?12:6));
 if(index===0)feel(p,{security:1,obsession:-1});
 if(index===1&&p===JIHAN)jihanBond().mutedUntil=Math.max(jihanBond().mutedUntil,v.day+7);
 writeJournal(p+' · 연달아 온 문자에 답장');save();phoneBadge();renderPhone();renderSim();
}
function renderPressureText(p,m,group,bubble){
 const b=m.pressureBurst,day=initSim().day,script=pressureTextVoices[p][b.variant];
 let previousSlot=null;
 for(const line of b.lines){
  if(line.slot!==previousSlot)appendPhoneDate(group,dayLabels[line.slot]);
  previousSlot=line.slot;
  bubble(p,line.text,false,true);
 }
 if(m.reply){
  if(b.playerLine&&!b.replySeparate){
   if(m.replyDay!==m.day)appendPhoneDate(group,calendarDate(m.replyDay).label);
   bubble(state.name,b.playerLine,true,true);bubble(p,b.npcLine,false,true);
  }
  return;
 }
 if(!vIsDating(p))return;
 for(const [index,choices] of script.choices.entries()){
  const button=document.createElement('button');button.type='button';button.className='secondary';
  button.textContent=choices[speechRegisterIndex(p,'player',day)];
  button.onclick=()=>replyPressureText(p,m,index);group.append(button);
 }
}

function jihanPhoneTick(day,d){if(everydayIssue(JIHAN))return 0;const series=d.threads[JIHAN]?.findLast(m=>m.pressureBurst);if(series&&vIsDating(JIHAN)&&(!series.reply||day<(series.pressureBurst.nextDay??series.day+7)))return 0;const p=JIHAN,z=socialRecord(p),r=jihanBond(),dating=vIsDating(p),ex=exRecord(p);if(!z.contact||day<r.mutedUntil||(!dating&&!(r.scar&&ex&&initSim().romance[p]==='ended'&&aftermathRecord(p)?.status==='friend'&&ex.remaining>=3)))return 0;const t=d.threads[p]||(d.threads[p]=[]),pending=t.findLast(m=>m.jihanBond&&!m.reply),pressure=relationshipPressure(p);if(pending){if(dating&&r.scar&&pressure.distrust>=5&&day-pending.day>=1&&(!pending.followups||pending.followups.length<2)&&(!pending.followups?.length||pending.followups.at(-1).day<day)){pending.followups=(pending.followups||[]);pending.followups.push({day,line:pending.followups.length?'…누구랑 있는지는 왜 말을 안 해요?':'왜 답장이 없어요? 바쁜 거예요?'});feel(p,{obsession:1});return 1}return 0}if(t.some(m=>!m.reply)||day-r.lastPhone<(r.scar&&pressure.distrust>=5?2:7))return 0;if(!dating){if(r.exPing)return 0;r.exPing=true;t.push({day,jihanBond:true,script:['…아직도 가끔 생각나요.','다시 이야기할 수 있으면 좋겠네요.','나중에 이야기해요.','기다릴게요.','더 연락하지 말아 주세요.','…알겠어요.'],contextKey:'jihan:ex:'+day});}else{const pool=r.scar&&pressure.distrust>=4?jihanPhoneScar:jihanPhoneNormal;t.push({day,jihanBond:true,script:pool[r.phoneCount++%pool.length].slice(),contextKey:'jihan:bond:'+day})}r.lastPhone=day;d.last[p]=day;return 1}
function jihanSceneReady(ev){if(!ev||ev.person!==JIHAN||!initSim().running||!vIsDating(JIHAN)||ev.jihanScene||ev.jobEvent||ev.group||ev.groupPartners||ev.triangle||ev.aftermath||ev.coupleIssue||ev.conflictStage||ev.breakup||ev.npcBreakup||ev.leftEncounter||ev.speechOffer||ev.contactFollowup||ev.surpriseVisit?.first?.leave)return false;const r=jihanBond(),day=initSim().day,pressure=relationshipPressure(JIHAN);return day>=r.mutedUntil&&(!r.lastScene||day-r.lastScene>=(r.scar&&pressure.distrust>=4?4:8))}
const jihanSceneNormal=[['지한이 한 발 가까이 다가왔다. 옷깃에 묻은 먼지를 떼어 주고는 눈을 맞췄다.','오늘은 나한테 조금만 더 시간을 줘요. 손 잡아도 돼요?','손을 잡는다','지한이 손가락 사이로 손을 얽었다. 낮게 웃는 목소리가 가까웠다.','이렇게 있으니까 이제야 좀 내 시간 같네요.'],['지한이 당신의 귀갓길에 걸음을 맞췄다.','다른 약속도 좋지만 오늘은 제가 제일 기억에 남았으면 좋겠는데. 안아도 돼요?','가볍게 안는다','지한이 조심스럽게 허리에 팔을 둘렀다가 당신이 움직이자 놓아 주었다.','좋네요. 다음에는 제가 먼저 보고 싶다고 할게요.']];
const jihanSceneScar=[['지한은 웃으면서도 당신의 얼굴을 오래 바라봤다.','오늘은 어디 있었어요? …나만 모르는 이야기가 또 있는 건 아니죠?','불안한 마음에 대해 이야기한다','','…믿고 싶은데, 아직 마음대로 안 되네요.'],['지한이 손을 내밀려다 멈췄다. 미소가 옅어졌다.','이렇게까지 붙잡는 제가 우스워요? 아직 저한테 마음이 있는지 자꾸 확인하고 싶어요.','솔직하게 마음을 이야기한다','','…그래요. 오늘은 그 말만 믿어 볼게요.']];
function renderJihanScene(ev){const v=initSim(),r=jihanBond(),o=ev.jihanScene,a=(o.scar?jihanSceneScar:jihanSceneNormal)[o.index];$('progress').textContent=o.scar?'두 사람의 순간 · 남겨진 불신':'두 사람의 순간 · 독점하고 싶은 시간';add('이야기',a[0]);add(JIHAN,a[1]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.kind==='warm'&&a[3])add('이야기',a[3]);add(JIHAN,o.answer.reply);choiceButton('일정 계속하기',finishEvent);return}for(const [label,kind,reply] of [[a[2],'warm',a[4]],['오늘은 조금 거리를 두고 싶어요.','boundary',o.scar?'…알겠어요. 더 묻지 않을게요.':'좋아요. 편하게 있어요.'],['오늘은 이만 가 볼게요.','avoid',o.scar?'…그래요. 조심히 가요.':'아쉽지만 다음에 봐요.']])choiceButton(label,()=>{if(o.answer)return;o.answer={label,kind,reply};r.lastScene=v.day;jihanChange(kind,v.day);if(kind==='warm'&&!o.scar)v.affection[JIHAN]=Math.min(999,v.affection[JIHAN]+2);save();renderChoiceEvent();renderSim()})}

// Freeze the first bubble at send time when an ordinary text uses a vocative.
function stampPhoneOpening(p,m){
 const day=m.day;
 if((day+people.indexOf(p))%3!==0)return m;
 if(m.contextKey&&!/^(?:together:|absence:|afterglow:(?:sensory|visit):|friend:after:)/.test(m.contextKey))return m;
 const line=m.npcOffer?m.npcLine:m.script?.[0];
 if(!line||!agreedAddress(p,'npc',day))return m;
 const mode=speechRegisterIndex(p,'npc',day)?'반말':'존댓말';
 const spoken=formatSpeech(p,line,'npc',mode,day);
 const called=spokenCall(p,'npc',day,spoken);
 if(called!==spoken)m.calledOpening=called;
 return m;
}
function deliverPhone(day){const v=initSim(),d=phoneData();let count=birthdayMessages(day);expireNpcOffers(day);count+=jihanPhoneTick(day,d);for(const p of people){const s=socialRecord(p);if(!s.contact||everydayIssue(p)||(d.threads[p]||[]).some(m=>!m.reply)||['cooling','ready'].includes(aftermathRecord(p)?.status)||(v.romance[p]==='dating'&&breakupWarning(p)))continue;const history=d.threads[p]||(d.threads[p]=[]),context=chapterLetter(p,day)||contextualPhone(p,day,history)||friendPhone(p,day,history);if(context&&day-(d.last[p]||0)>=1){history.push(stampPhoneOpening(p,{day,...context}));if(context.chapterLetter)v.couple[p].chapterLetterDay=day;if(context.afterglowEvent){const e=afterglowRecord(p).events.find(x=>x.day===context.afterglowEvent.day&&x.kind===context.afterglowEvent.kind);if(e)e.phone=true}d.last[p]=day;count++;continue}if(day-(d.last[p]||0)<4)continue;const offer=makeNpcOffer(p,day,history);if(offer){history.push(stampPhoneOpening(p,offer));d.last[p]=day;count++;continue}if(aftermathRecord(p)||platonicOnly(p))continue;const chance=relationshipTier(p)>=3?.32:.18;if(Math.random()>=chance)continue;const t=d.threads[p]||(d.threads[p]=[]);const eligible=phoneScripts[p].map((_,i)=>i).filter(i=>!(p==='정태오'&&i===0&&seasonInfo(day).index===1));const recent=t.slice(-3).map(m=>m.index),unused=eligible.filter(i=>!t.some(m=>m.index===i)),pool=unused.length?unused:eligible.filter(i=>!recent.includes(i));const available=pool.length?pool:eligible;if(!available.length)continue;const index=available[Math.floor(Math.random()*available.length)];t.push(stampPhoneOpening(p,{day,index,script:phoneScripts[p][index].slice()}));d.last[p]=day;count++}phoneBadge();return count}
const phoneBusyVoices={"서이준":"…네. 나중에 얘기해요.","강도윤":"그럼 일부터 보세요. 나중에 연락해요.","한시우":"오케이! 나중에 톡해요!","정태오":"알겠습니다. 편한 시간에 연락하십시오.","백지한":"좋아요. 여유 생기면 연락 줘요.","임하나":"네! 천천히 답해 주세요.","차유리":"오케이! 나중에 얘기해요.","오세린":"아아, 그럼 나중에 이야기해요.","유지안":"오케이! 할 일 먼저 해요!","공재희":"ㅇㅋ 나중에 톡해요ㅋㅋ"};
function phoneBusyReply(p){return phoneBusyVoices[p]}
const phoneHistoryLimits={};
function appendPhoneDate(group,date){
 const label=document.createElement('div');label.className='phone-message-day';label.textContent=date;group.append(label);
}
function phoneAvatar(p){
 const avatar=document.createElement('span'),file=standingPortraitFiles[p];
 avatar.className='phone-avatar';
 avatar.setAttribute('aria-hidden','true');
 if(file){
  avatar.dataset.portrait=file;
  avatar.style.setProperty('--portrait','url("assets/portraits/'+file+'.webp")');
 }
 return avatar;
}
function renderPhone(){const v=initSim();movePendingHomeVisits(v);confirmPendingOutings(v.day);const d=phoneData(),contacts=$('phoneContacts'),thread=$('phoneThread');contacts.replaceChildren();thread.replaceChildren();const names=people.filter(p=>socialRecord(p).contact);if(!names.length){contacts.textContent='아직 교환한 연락처가 없어요.';return}if(!names.includes(phoneSelected))phoneSelected=names[0];for(const p of names){const b=document.createElement('button');b.className=p===phoneSelected?'':'secondary';b.setAttribute('aria-pressed',String(p===phoneSelected));const unread=unreadPhoneCount(d.threads[p]||[]);const label=document.createElement('span');label.className='phone-contact-label';
label.textContent=p;if(unread){const badge=document.createElement('small');badge.textContent='새 메시지 '+unread;label.append(badge)}b.append(phoneAvatar(p),label);b.onclick=()=>{phoneSelected=p;phoneHistoryLimits[p]=3;renderPhone()};contacts.append(b)}const p=phoneSelected,h=document.createElement('h2');let currentMessage=null,messageGroup=null,lastDate=null,phonePlayerSpoke=false;const datingDay=datingDayLabel(v,p);h.className='phone-thread-heading';h.append(phoneAvatar(p),document.createTextNode(datingDay?p+' · '+datingDay:p));thread.append(h);function bubble(who,line,me=false,verbatim=false){const b=document.createElement('div');b.className='bubble'+(me?' me':'');const datePrefix=!me&&who.endsWith(' · '+p)?who.slice(0,-(' · '+p).length):null;if(datePrefix&&datePrefix!==lastDate){appendPhoneDate(messageGroup,datePrefix);lastDate=datePrefix;}const mode=currentMessage?(me?phoneSpeechMode(p,currentMessage,'player'):phoneSpeechMode(p,currentMessage,'npc',phonePlayerSpoke)):undefined;const side=me?'player':'npc',spoken=verbatim?line:formatSpeech(p,line,side,mode,currentMessage?phoneLineDay(currentMessage,me||phonePlayerSpoke?'player':'npc'):undefined);
 const addressed=verbatim?spoken:phoneAddress(p,currentMessage,spoken,side);
 if(!me&&(!messageGroup.lastElementChild?.classList.contains('bubble')||messageGroup.lastElementChild.classList.contains('me'))){
  const name=document.createElement('strong');name.textContent=p;b.append(phoneAvatar(p),name);
 }
 if(me)phonePlayerSpoke=true;b.append(document.createTextNode(chatSpacing(addressed)));messageGroup.append(b)}speechControls(p,thread);friendControls(p,thread);sharedLifeControls(p,thread);tripControls(p,thread);dateControls(p,thread);groupOutingControls(p,thread,agreedOutingPartners(p));coupleIssueControls(p,thread);aftermathControls(p,thread);relationshipControls(p,thread);multiDiscussionControls(p,thread);exControls(p,thread);exKeepsakeControls(p,thread);const messages=d.threads[p]||[];if(!messages.length){thread.append(document.createTextNode('아직 받은 메시지가 없어요.'));return}const messageList=document.createElement('div');messageList.className='phone-messages';thread.append(messageList);const limit=phoneHistoryLimits[p]||3;const cutoff=Math.max(0,messages.length-limit);const hidden=messages.slice(0,cutoff).filter(m=>m.reply);if(hidden.length){const more=document.createElement('button');more.className='secondary';more.style.cssText='width:100%;margin:8px 0';more.textContent='이전 메시지 더 보기 ('+hidden.length+'개 남음)';more.onclick=()=>{phoneHistoryLimits[p]=limit+3;renderPhone();const next=$('phoneThread').querySelector('[data-history-index="'+cutoff+'"]');if(next)next.scrollIntoView({block:'center'})};messageList.append(more)}for(const [index,m] of messages.entries()){if(index<cutoff&&m.reply)continue;currentMessage=m;phonePlayerSpoke=false;messageGroup=document.createElement('div');messageGroup.className='phone-message-group';messageGroup.dataset.historyIndex=index;messageList.append(messageGroup);const date=calendarDate(m.day).label;if(date!==lastDate){appendPhoneDate(messageGroup,date);lastDate=date;}if(m.pressureReplyTo){bubble(state.name,m.playerLine,true,true);bubble(p,m.npcLine,false,true);continue}if(m.pressureBurst){renderPressureText(p,m,messageGroup,bubble);continue}if(m.jihanBond){const a=m.script;bubble(calendarDate(m.day).label+' · '+p,a[0]);if(a[1])bubble(p,a[1]);for(const f of m.followups||[])bubble(calendarDate(f.day).label+' · '+p,f.line);if(m.reply){bubble(state.name,m.jihanLabel,true);bubble(p,m.jihanReply);continue}for(const [label,k,reply,kind] of [[a[2],1,a[3],'warm'],[a[4],2,a[5],'boundary'],['지금은 조금 바빠요.',3,'…알겠어요.','avoid']]){const b=document.createElement('button');b.className='secondary';b.textContent=phoneChoiceText(p,m,label);b.onclick=()=>{if(m.reply)return;m.reply=k;m.jihanLabel=label;m.jihanReply=reply;jihanChange(kind,v.day);if(kind==='boundary'&&!vIsDating(p))jihanBond().mutedUntil=999;save();phoneBadge();renderPhone();renderSim()};messageGroup.append(b)}continue}if(m.npcLifeNotice){npcLifePhone(p,m,messageGroup,bubble);continue}if(m.outingQuestion){const q=m.outingQuestion.other;if(m.playerLine)bubble(state.name,m.playerLine,true);bubble(p,m.npcLine);if(m.reply){bubble(state.name,m.outingLabel,true);bubble(p,m.outingReply);continue}const opts=[['친구로 만난 거예요.','…그래요. 그 말 믿을게요.','deny'],['조금 마음이 쓰이는 사람이에요.','…솔직하게 말해 줘서 고마워요. 생각할 시간이 필요하네요.','admit'],['그 사람과 교제하고 있어요.','…지금 그게 무슨 말이에요?','reveal'],['지금은 이야기하고 싶지 않아요.','…알겠어요. 나중에 다시 이야기해요.','avoid']].filter(x=>x[2]!=='reveal'||vIsDating(q)&&secretUnknown(p,q));for(const [label,reply,kind] of opts){const b=document.createElement('button');b.className='secondary';b.textContent=phoneChoiceText(p,m,label);b.onclick=()=>{if(m.reply)return;m.reply=1;m.outingLabel=label;m.outingReply=reply;if(kind==='reveal'){revealOne(p,q);m.outingReply=romanceProfiles[p][7]}else if(kind==='deny')feel(p,{jealousy:-2});else {feel(p,{jealousy:2,hurt:1});noteCoupleIssue(p,v.day,'jealous',q)}save();phoneBadge();renderPhone();renderSim()};messageGroup.append(b)}continue}if(m.coupleRepair){renderRepairMessage(v,p,m,messageGroup,bubble);continue}if(m.exAfterText){renderExAfterPhone(p,m,messageGroup,bubble);continue}if(m.breakupNotice){bubble(calendarDate(m.day).label+' · '+p,m.npcLine);if(!m.reply){const b=document.createElement('button');b.className='secondary';b.textContent='메시지 확인';b.onclick=()=>{m.reply=1;save();phoneBadge();renderPhone()};messageGroup.append(b)}continue}if(m.groupInvite){bubble(state.name,m.playerLine,true,true);bubble(p,m.npcLine,false,true);continue}if(m.booking){if(m.playerLine)bubble(state.name,m.playerLine,true);bubble(p,friendBookingText(p,m));continue}if(m.npcOffer){const o=m.npcOffer,a=npcAutonomyVoices[p];bubble(p,(m.calledOpening??m.npcLine)+'\n'+calendarDate(o.day).label+(Number.isInteger(o.slot)?' '+dayLabels[o.slot]:'')+' · '+o.venue,false,!!m.calledOpening);if(m.reply){bubble(state.name,m.offerLabel||'지난 제안',true);if(m.offerReply)bubble(p,m.offerReply);if(m.reply===4&&m.offerLabel==='일정을 다시 확인한다'&&!m.retried&&!messages.some(x=>x!==m&&x.npcOffer&&!x.reply)){const retry=document.createElement('button');retry.className='secondary';retry.textContent='다른 날짜로 다시 약속 잡기';retry.onclick=()=>{if(m.retried)return;m.retried=true;retryNpcOffer(p,m,messages,true);save();phoneBadge();renderPhone();renderSim();syncSchedule()};messageGroup.append(retry)}continue}
 const slots=o.day>v.day?dateBookingSlots(p,o.day):[];
 let offerTime=null;
 if(slots.length){
  offerTime=bookingSelect(messageGroup,'만날 시간대');
  for(const slot of slots)bookingOption(offerTime,slot,dayLabels[slot]);
  const preferred=Number.isInteger(o.slot)?o.slot:1;
  if(slots.includes(preferred))offerTime.value=String(preferred);
 }
 const opts=[['좋아요. 그날 만나요.',1],['다른 날짜는 어때요?',2],['이번에는 어려워요.',3]];for(const [label,k] of opts){const b=document.createElement('button');b.type='button';b.className='secondary';b.textContent=phoneChoiceText(p,m,label);b.onclick=()=>{if(m.reply)return;if(k===1){if(!offerTime||!acceptNpcOffer(p,m,Number(offerTime.value)))retryNpcOffer(p,m,messages,true)}else if(k===2){retryNpcOffer(p,m,messages,false)}else{m.reply=k;m.offerLabel=label;m.offerReply=a[4]}save();phoneBadge();renderPhone();renderSim();syncSchedule()};messageGroup.append(b)}continue}let a=chapterLetterScript(p,m,v.day)||phoneScripts[p]?.[m.index];if(!Array.isArray(a)||a.length<6||!a[0]){const pool=phoneScripts[p]||[];if(!pool.length){bubble(p,'메시지를 불러올 수 없어요.');if(!m.reply){const b=document.createElement('button');b.textContent='메시지 확인';b.onclick=()=>{m.reply=3;save();phoneBadge();renderPhone()};messageGroup.append(b)}continue}const used=messages.slice(0,index).map(x=>x.index);const options=pool.map((_,i)=>i).filter(i=>!used.slice(-2).includes(i));m.index=(options.length?options:pool.map((_,i)=>i))[0];m.script=pool[m.index].slice();a=m.script;save()}a=agreementMessageScript(p,m,a);
if(!m.reply&&m.contextKey?.startsWith('friend:check:')){
 Object.assign(m,friendCheckMessage(p,m.day,messages));
 a=m.script;
 save();
}
if(m.contextKey?.startsWith('friend:check:'))a=[p==='정태오'?'요즘 어떻게 지내십니까?':'요즘 어떻게 지내요?', '', '잘 지내요. 다음에 이야기해요.',p==='정태오'?'예. 다음에 뵙겠습니다.':'좋아요. 다음에 봐요.', '요즘 좀 고민이 있어요.',friendshipVoices[p][3]];
if(a?.[0]==='지난번 함께 보낸 시간이 생각났어요.'){
 const day=Number(m.contextKey?.split(':').at(-1)),date=dateHistory(p).find(x=>x.day===day);
 const opener=date?.venue==='고양이 산책'?'그날 제 신발 옆에 앉았던 고양이 기억나요?':date?.venue?'그날 같이 갔던 '+date.venue+' 생각이 났어요.':'문득 생각나서 연락했어요. 오늘은 어떻게 지내요?';
 a=[opener,'',date?'저도 그날 생각나요.':'잘 지내요. 연락 줘서 반가워요.',date?.venue==='고양이 산책'?'오늘도 그 골목 지날 때 한 번 보려고요.':'다음에 또 얘기해요.',a[4],p==='정태오'?'감사합니다.':'고마워요. 좋은 하루 보내요.'];
}if(!a)continue;bubble(calendarDate(m.day).label+' · '+p,m.calledOpening??a[0],false,!!m.calledOpening);if(a[1])bubble(p,a[1]);if(m.reply){bubble(state.name,m.reply===3?'지금은 조금 바빠요.':a[m.reply===1?2:4],true);bubble(p,m.reply===3?phoneBusyReply(p):a[m.reply===1?3:5]);continue}for(const [label,k] of [[a[2],1],[a[4],2],['지금은 조금 바빠요.',3]]){const b=document.createElement('button');b.className='secondary';b.textContent=phoneChoiceText(p,m,label);b.onclick=()=>{if(m.reply)return;m.script=[...a];m.replyDay=v.day;m.reply=k;if(m.contextKey?.startsWith('absence:')&&!vIsDating(p)){const sensitive=['서이준','백지한','임하나','공재희'].includes(p)&&relationshipRecall(p,v.day).kind!==1;if(k===1&&sensitive){feel(p,{hurt:3,longing:4});const lines={'서이준':'……그래 보여요. 근데 그렇게 바빠요?','백지한':'저 없이도 꽤 잘 지내시나 봐요.','임하나':'다행이에요. 저는 조금 보고 싶었는데.','공재희':'잘 지내나 보네. 난 보고 싶었는데.'};m.script=[...a];m.script[3]=lines[p]}else if(k===2)feel(p,{security:5,hurt:-3,longing:-4});else if(k===3)feel(p,{longing:1});}if(m.contextKey?.startsWith('jealous:')){if(k===1)feel(p,{jealousy:-2,security:2});else if(k===2)feel(p,{jealousy:-1,hurt:1});else feel(p,{longing:1});}if(m.birthday&&m.gift&&k!==3){v.birthdayGifts=v.birthdayGifts||{};v.birthdayGifts[p]=m.gift;}if(k!==3){v.affection[p]=Math.min(999,(v.affection[p]||0)+1);if(m.friendMessage){socialRecord(p).friendship++}else if(k===2){socialRecord(p).interest++}if(m.contextKey?.startsWith('absence:')&&k!==3) socialRecord(p).reunionPending={day:v.day,warm:k===2}}writeJournal(p+' · 메시지 답장');save();phoneBadge();renderPhone();renderSim()};messageGroup.append(b)}}}
