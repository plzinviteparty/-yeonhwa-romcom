function christmasState(){const v=initSim();return v.christmas||(v.christmas={})}
function christmasFriends(){const v=initSim();return people.filter(p=>v.met[p]&&relationshipTier(p)>=1)}
const eveInvitations={
 '공재희':['{호칭}, 이브에 뭐 해요?','{호칭}, 이브에 뭐 해?'],
 '서이준':['{호칭}, 이브에 약속 있어요? …없으면 저랑 저녁 먹어요.','{호칭}, 이브에 약속 있어? …없으면 나랑 저녁 먹자.'],
 '강도윤':['{호칭}, 이브에 가게 문을 조금 일찍 닫으려고요. 저녁 같이 먹을래요?','{호칭}, 이브에 가게 문을 조금 일찍 닫으려고. 저녁 같이 먹을래?'],
 '한시우':['{호칭}, 이브에 시간 있어요? 저랑 놀러 가요!','{호칭}, 이브에 시간 있어? 나랑 놀러 가자!'],
 '백지한':['{호칭}, 이브 저녁 아직 비어 있어요? 이번에는 제가 먼저 예약하고 싶어서요.','{호칭}, 이브 저녁 아직 비어 있어? 이번엔 내가 먼저 예약하고 싶어서.'],
 '정태오':['{호칭}, 이브 저녁에 시간이 괜찮으십니까? 함께 식사하고 싶습니다.','{호칭}, 이브 저녁에 시간 괜찮아? 같이 식사하고 싶어.'],
 '임하나':['{호칭}, 혹시 이브에 약속 없으시면… 저랑 같이 보내실래요?','{호칭}, 혹시 이브에 약속 없으면… 나랑 같이 보낼래?'],
 '차유리':['{호칭}, 이브에 같이 맛있는 거 먹으러 갈래요?','{호칭}, 이브에 같이 맛있는 거 먹으러 갈래?'],
 '오세린':['{호칭}, 이브에 따뜻한 차라도 함께 마실까요?','{호칭}, 이브에 따뜻한 차라도 함께 마실까?'],
 '유지안':['{호칭}, 이브에 같이 놀아요! 혹시 시간 비어 있어요?','{호칭}, 이브에 같이 놀자! 혹시 시간 비어 있어?']
};
function christmasPlan(){const v=initSim(),x=christmasState();v.weekEnd=null;v.activeEvent={place:'home',description:'크리스마스이브 저녁을 어떻게 보낼까?',christmasEvent:'plan',day:v.day};save();renderChoiceEvent();renderSim()}
function christmasGate(){const v=initSim(),x=christmasState();if(v.day===299&&!x.eveDone){v.activeEvent={place:'park',description:'크리스마스이브. 연화동에 따뜻한 조명이 켜졌다.',christmasEvent:'eve',day:v.day};}else if(v.day===300&&!x.dayDone){v.activeEvent={place:'park',description:'크리스마스. 한 해 동안 쌓아 온 마음을 돌아보는 날이다.',christmasEvent:'day',day:v.day,candidates:confessionCandidates()};}else return false;v.weekEnd=null;save();renderChoiceEvent();renderSim();return true}
function renderChristmas(ev){const v=initSim(),x=christmasState(),kind=ev.christmasEvent;$('progress').textContent='크리스마스';if(kind==='plan'){for(const p of christmasFriends()){if(socialRecord(p).contact&&socialRecord(p).interest>=3)add(p,eveSpoken(p,'npc',ev.day??v.day,...eveInvitations[p]));choiceButton(nameWith(p)+' 이브 보내기',()=>{x.partner=p; x.planned=true;writeJournal('크리스마스이브 약속 · '+p);save();finishEvent()})}choiceButton('혼자 보내기',()=>{x.partner=null;x.planned=true;save();finishEvent()});return}
if(kind==='eve'){if(!x.planned){for(const p of christmasFriends())choiceButton(nameWith(p)+' 함께 보내기',()=>{x.partner=p;x.planned=true;save();renderChoiceEvent()});choiceButton('혼자 보내기',()=>{x.planned=true;x.partner=null;save();renderChoiceEvent()});return}const p=x.partner;if(!p){add('이야기','좋아하는 음식을 준비하고 조용히 한 해를 돌아보았다.');choiceButton('이브 마치기',()=>{x.eveDone=true;save();finishEvent()});return}renderEveVisit(ev,p);return}
if(kind==='day'){const candidates=ev.candidates||[];add('이야기',lovers().length?'크리스마스의 인연을 소중히 간직한다.':'크리스마스에도 마음을 서두를 필요는 없다.');for(const p of candidates)choiceButton(p+'와 따로 이야기하기',()=>{x.dayDone=true;ev.christmasEvent=null;ev.person=p;ev.newConfession=true;save();renderChoiceEvent()});choiceButton('크리스마스 마치기',()=>{x.dayDone=true;finishEvent()});return}
if(kind==='ending'){lifeEndingRender(ev);return}}
function growthBeforeSchedule(v){
 // The last playable day still lets the player collect outstanding milestones.
 if(v.lastGrowthSceneDay===v.day&&v.day<364)return false;
 return professionDiscoveryGate()||professionGate()||developmentGate();
}
function playDay(){const v=initSim();showFestivalNotice();if(document.getElementById('festivalNoticeDialog'))return;if(v.day===1||v.activeEvent||v.running||v.finished)return;
v.pendingDayStart=v.day;
// Travel owns both reserved days. Recheck town events after returning.
if(!dateBook()[v.day]?.trip&&(christmasGate()||npcBreakupGate()||anniversaryGate()||nicknameGate()||crushGate()||confessionGate()||growthBeforeSchedule(v)||everydayArgumentGate()||exNewTriangleGate()||exAfterGate()))return;
delete v.pendingDayStart;
movePendingHomeVisits(v);
v.running={slot:0,notes:[],plan:planFor(v.day).slice(),outing:false};v.activeEvent=null;advanceDay()}
const surpriseVisitVoices={"서이준":["우연인 척","이준이 약속 장소도 아닌 곳에서 기다리고 있었다. 손에 들고 있던 종이봉투를 슬쩍 내밀었다.","…지나가던 길이었어요. 아니, 사실 조금 돌아왔어요. 이거 좋아할 것 같아서.","이준 씨도 같이 먹어요.","…좋아요. 혼자 먹으라고 가져온 건 아니니까요.","봉투 안에는 작은 빵 두 개가 들어 있었다. 이준이 한쪽을 집어 들고 당신 옆에 섰다.","…오늘은 잠깐이라도 얼굴 봐서 좋네요.","그래요. 다음에 천천히 봐요."],"강도윤":["산책길의 발견","도윤이 작은 종이봉투를 들고 다가왔다. 봉투를 열자 달콤한 귤 향이 났다.","하하, 시장에서 맛있는 귤을 발견했는데 혼자 먹기 아까워서요. 얼굴도 보고 싶었고.","같이 하나씩 먹어요.","좋죠. 제가 먼저 하나 까 드릴까요?","도윤이 귤을 반으로 나눴다. 당신에게 한쪽을 건네며 웃었다.","오늘은 이거 전해 드리는 게 제일 기대됐어요.","하하, 바쁘신가 보네요. 다음에 같이 먹어요."],"한시우":["잠깐 얼굴만","시우가 손을 흔들며 다가왔다. 한 손에는 편의점 봉투가 들려 있었다.","앗, 발견! 지나가는 길에 신상 간식 샀는데 하나 더 샀어요. 그냥 보고 싶기도 했고.","같이 맛봐요.","오예! 맛없으면 같이 욕하기!","시우가 봉투에서 간식을 꺼냈다. 당신의 반응을 살피다가 소리 내 웃었다.","히히. 잠깐인데도 기분 좋아지네.","오케이! 오늘 할 일 잘하고 와요."],"정태오":["마중","태오가 익숙한 길목에 서 있었다. 당신을 발견하자 손목시계를 확인하고 다가왔다.","시간이 조금 남았습니다. 괜찮으시다면 잠깐 함께 걸으시겠습니까? 보고 싶었습니다.","좋아요. 조금만 같이 걸어요.","…감사합니다. 기다린 보람이 있군요.","태오가 나란히 걸으며 당신의 보폭에 맞췄다. 바람이 불자 바람이 오는 쪽으로 자리를 바꿨다.","오늘 하루도 수고하셨습니다.","알겠습니다. 다음에 뵙겠습니다. 무리하지 마십시오."],"백지한":["예정에 없던 만남","지한이 휴대전화를 내려놓고 당신에게 다가왔다. 평소보다 가벼운 옷차림이었다.","오늘은 일정이 일찍 끝났어요. 혹시 잠깐 시간을 빌려도 될까요? 그냥 보고 싶어서요.","잠깐은 괜찮아요.","좋네요. 예상에 없던 일 중에 제일 좋은 일이군요.","지한이 당신 옆에 앉아 휴대전화를 뒤집어 놓았다. 시선이 자연스럽게 당신에게 향했다.","이렇게 잠깐 보는 것도 꽤 좋네요.","좋아요. 다음에 시간 맞춰요."],"임하나":["작은 간식","하나가 작은 봉투를 두 손으로 들고 서 있었다. 당신을 보자 한 걸음 다가왔다.","저… 이거 지나가다 맛있어 보여서 샀어요. 하나는 드리고 싶었어요.","고마워요. 같이 먹을까요?","……네! 사실 그러면 더 좋겠다고 생각했어요.","하나는 봉투를 조심스레 열었다. 당신이 맛을 보자 긴장했던 얼굴이 풀렸다.","오늘은 제가 먼저 찾아오길 잘했네요.","네. 다음에 여유 있을 때 같이 먹어요."],"차유리":["작은 선물","유리가 작은 종이봉투를 흔들며 다가왔다. 안에는 귀여운 스티커가 들어 있었다.","오, 마침 잘 만났다! 이거 보자마자 당신 생각나서 하나 사 왔어요.","고마워요. 같이 구경해요.","좋다! 어떤 게 제일 마음에 들어요?","유리가 봉투를 열어 스티커를 펼쳤다. 당신이 하나를 고르자 만족스럽게 웃었다.","오늘은 이거 전해 주려고 좀 돌아왔거든요.","오케이. 다음에 천천히 구경해요."],"오세린":["잠시 쉬어 가는 길","세린이 벤치 옆에 서서 당신에게 손을 흔들었다. 따뜻한 음료 두 잔을 들고 있었다.","아아, 잠깐 얼굴 보고 싶어서요. 부담되지 않으면 같이 쉬었다 갈까요?","좋아요. 잠깐 쉬어요.","으음, 잘 됐네요. 따뜻할 때 마셔요.","세린이 음료를 건넸다. 두 사람 사이로 잔잔한 바람이 지나갔다.","이렇게 짧은 시간도 소중하네요.","네. 오늘은 무리하지 말고 돌아가요."],"유지안":["맛있는 거 발견","지안이 종이봉투를 들고 활짝 웃으며 다가왔다. 갓 구운 빵 냄새가 풍겼다.","와우, 여기 진짜 맛있는 데 발견했어요! 하나 더 샀는데, 당신 생각나서요.","같이 먹고 가요.","좋아요! 아, 이거 진짜 맛있어야 되는데!","지안이 빵을 한 입 먹고 눈을 크게 떴다. 당신을 보며 환하게 웃었다.","아하하, 같이 먹으니까 더 맛있는 것 같아.","좋아요! 다음엔 따끈할 때 같이 사 먹어요."],"공재희":["그냥 보고 싶어서","재희가 모자 챙을 살짝 들어 올렸다. 작은 봉투를 뒤로 숨기고 있다가 당신에게 내밀었다.","헐ㅋㅋ 찾았다. 이거 귀여워서 샀는데 하나 더 있음. 아니 뭐… 그냥 보고 싶기도 했고.","고마워요. 잠깐 같이 있어요.","웅ㅋㅋ 좋다. 오늘 얼굴 봤다.","재희가 옆에 서서 당신의 표정을 살폈다. 평소보다 조용하게 웃었다.","……아 진짜 잠깐인데 좋네.","ㅇㅋ. 바쁘면 다음에 봐요."]};
const partnerComfortVoices={"서이준":["아무 말 없이","이준이 한참 말없이 앉아 있었다. 평소보다 눈 밑이 어두웠다. 당신을 보자 들고 있던 책을 덮었다.","…오늘은 혼자 있고 싶지가 않네요. 별다른 얘기는 안 해도 되는데.","옆에 좀 앉아 있어도 돼요?","이준이 어깨를 살짝 맞댔다. 한참 지나서야 길게 숨을 내쉬었다.","…이렇게 있으니까 좀 낫네요.","…그냥 이것저것 생각이 많았어요. 들어 줘서 고마워요.","그래요. 오늘은 일찍 들어가 볼게요. 연락할게요."],"강도윤":["웃지 않아도 되는 날","도윤의 휴대전화가 울렸다. 화면에 뜬 이름을 확인한 그는 잠시 자리를 비웠다. 돌아왔을 때는 웃음기 없이 셔츠 소매만 만지작거리고 있었다.","하하… 아버지 쪽에서 연락이 왔어요. 가게 이야기인데, 정작 제가 어떻게 지내는지는 안 궁금하신가 봐요. 지금은 좀 솔직하게 얘기해도 될까요?","……잠깐만 안아 줄래요?","도윤이 조심스럽게 몸을 기댔다. 따뜻한 숨이 어깨에 닿고 긴장이 조금씩 풀렸다.","……고마워요. 제가 뭘 해 드리지 않아도 여기 있어 주시네요.","가게를 받은 게 고마운 일이라는 건 알아요. 그런데 그걸로 제 마음까지 정리해야 하는 건 아니잖아요. ……들어 줘서 고마워요.","좋아요. 오늘은 저도 제 마음부터 챙겨 볼게요."],"한시우":["웃음이 멎은 날","시우가 당신을 보며 웃으려다 말았다. 머리를 쓸어 넘기고 한숨을 삼켰다.","아, 오늘 좀 별로였어요. 웃긴 얘기 해 주려고 했는데 생각이 안 나네.","저기… 오늘은 그냥 안아 주면 안 돼요?","시우가 허락을 받고 가까이 와 이마를 잠시 어깨에 기댔다. 익숙한 스킨 향이 가까웠다.","……와, 진짜 좋다. 조금만 이러고 있을게요.","오늘은 제가 좀 속상했나 봐요. 얘기하니까 덜하네요.","오케이. 오늘은 일찍 잘게요. 걱정해 줘서 고마워요."],"정태오":["긴장이 풀리는 순간","태오가 손목시계를 풀어 주머니에 넣었다. 등을 곧게 펴고 있던 자세가 조금 느슨해졌다.","오늘은 생각보다 마음이 무거웠습니다. 지금은 해결책보다 잠시 쉬고 싶군요.","…손을 잡아 주시겠습니까?","태오가 손바닥을 내밀었다. 손을 맞잡자 굳었던 손가락이 천천히 풀렸다.","…감사합니다. 조금 안정되는군요.","말로 정리해 보니 조금 나아졌습니다. 들어 주셔서 감사합니다.","알겠습니다. 충분히 쉬도록 하겠습니다."],"백지한":["계획대로 되지 않는 날","지한이 휴대전화를 뒤집어 놓고 눈을 감았다. 평소와 달리 다음 일정을 확인하지 않았다.","오늘은 뭐 하나 마음대로 되지 않네요. 이런 얼굴 보여 주는 건 좀 부끄럽지만.","…잠시 기대도 괜찮을까요?","지한이 가까이 앉아 어깨에 조용히 기댔다. 향수 향이 옅게 남아 있었다.","…지금은 아무것도 정하지 않아도 될 것 같네요.","다 들어 주니까 좋네요. 꼭 해결해야 할 일처럼 생각하지 않아도 되겠어요.","좋아요. 오늘은 쉬고 다음에 만나요."],"임하나":["참지 않아도 돼요","하나가 가방 끈을 꼭 쥐었다. 괜찮다는 말을 하려던 입술이 잠시 떨렸다.","저… 오늘은 괜찮은 척하기가 조금 힘들어요. 그냥 누군가한테 말하고 싶었어요.","……저, 안아 달라고 해도 될까요?","하나가 조심스럽게 다가와 품에 안겼다. 어깨의 긴장이 조금씩 풀렸다.","……고마워요. 제가 먼저 부탁해도 되는 거였네요.","저도 제 이야기를 끝까지 해 보고 싶었어요. 들어 줘서 고마워요.","네. 오늘은 제 마음도 챙겨 볼게요."],"차유리":["잘하지 않아도 되는 날","유리가 손에 들었던 물건을 내려놓고 기지개를 켰다. 웃는 얼굴이 조금 지쳐 보였다.","오, 오늘은 진짜 별로였어요. 평소엔 그냥 넘기는데 오늘은 잘 안 되네요.","잠깐 어깨에 기대도 돼요?","유리가 가까이 앉아 가볍게 어깨에 머리를 기댔다. 머리카락이 소매에 스쳤다.","…좋다. 오늘은 좀 편하게 있어도 되겠네요.","말하고 보니까 그렇게까지 큰일은 아닌 것 같기도 하고요. 고마워요.","오케이. 오늘은 진짜 푹 쉴게요."],"오세린":["내 몫의 위로","세린이 잔을 두 손으로 감싼 채 잠시 눈을 감았다. 평소의 부드러운 미소가 조금 희미했다.","아아, 오늘은 마음이 좀 지치네요. 늘 괜찮다고 말하는 것도 가끔은 어렵군요.","으음, 잠깐 손을 잡아 주시겠어요?","세린이 손을 포갰다. 따뜻한 손끝이 한동안 가만히 머물렀다.","……이런 위로는 참 따뜻하네요.","들어 주셔서 고마워요. 오늘은 제 마음도 돌보고 싶네요.","네. 오늘은 천천히 쉬어 볼게요."],"유지안":["조용한 얼굴","지안이 평소보다 작은 목소리로 인사했다. 밝게 웃으려다 당신 앞에서 그만두었다.","아, 오늘은 좀 힘들었어요. 괜히 신나는 척하고 싶진 않아서요.","……잠깐만 안아 줘도 돼요?","지안이 조심스럽게 다가왔다. 어깨에 닿은 숨이 한결 느려졌다.","……아, 좋다. 오늘은 이 정도면 됐어요.","말하고 나니까 좀 시원하다. 들어 줘서 정말 고마워요.","좋아요. 오늘은 맛있는 거 먹고 푹 잘게요."],"공재희":["장난 없는 목소리","재희가 휴대전화를 뒤집어 놓았다. 평소의 웃음 섞인 목소리와 달리 말끝이 조용했다.","아 오늘 좀 힘들었음. 그냥… 당신한테는 솔직하게 말하고 싶어서.","나 잠깐 어깨에 기대도 됨?","재희가 허락을 받고 어깨에 머리를 기댔다. 한동안 장난도 말도 없었다.","……좋네. 고마워요.","웅. 말하고 나니까 좀 괜찮아졌음. 들어 줘서 고마워요.","ㅇㅋ. 오늘은 좀 쉬고 나중에 톡할게요."]};
const playfulCoupleVoices={"서이준":["예상 밖의 반격","이준이 당신을 잠깐 바라보다 입꼬리를 올렸다.","…오늘은 유난히 저만 쳐다보시네요. 그렇게 보고 싶었어요?","네. 더 가까이서 보고 싶은데요.","이준의 입꼬리가 멈췄다. 시선을 잠시 내렸다가 다시 올렸다.","……그렇게 바로 나오면 제가 할 말이 없잖아요.","이준 씨도 계속 보고 있었잖아요.","…들켰네요. 이번에는 제가 졌어요.","그냥 얼굴에 뭐 묻었나 봤어요.","…아. 그렇군요. 잠깐 기대했는데."],"강도윤":["뜻밖의 칭찬","도윤이 소매를 걷어 올리며 당신을 보았다.","하하, 오늘은 제가 좀 멋있어 보이지 않아요? 농담이에요.","농담 아닌데요. 정말 멋있어요.","도윤이 손을 멈췄다. 웃으려던 얼굴에 조금 난처한 미소가 번졌다.","……이런 건 예고하고 말해 주셔야죠. 저도 준비하게요.","오늘만요? 평소에도 멋있잖아요.","하하… 오늘은 제가 완전히 당했네요.","농담 잘하시네요.","하하, 그래도 웃어 주셨으니 성공이죠."],"한시우":["장난의 대가","시우가 당신을 빤히 보다가 장난스럽게 눈을 좁혔다.","엥? 오늘 왜 이렇게 귀엽지? 진짜 큰일 났네.","시우 씨도 귀여운데요. 좀 더 보고 싶어요.","시우가 웃음을 터뜨리려다 입을 다물었다. 귀가 서서히 붉어졌다.","와, 잠깐만요. 제가 먼저 놀리려고 한 건데!","제가 그렇게 좋아요?","히히. 네. 엄청 좋아요. 됐죠?","또 놀리는 거죠?","앗, 들켰다! 그래도 진짜예요."],"정태오":["정중한 농담","태오가 당신의 얼굴을 보고 잠시 고개를 갸웃했다.","오늘은 평소보다 표정이 밝으십니다. 저를 만나서 그렇다고 생각해도 되겠습니까?","물론이죠. 태오 씨 보려고 기다렸어요.","태오가 잠깐 말을 멈췄다. 단정하던 표정에 느린 미소가 번졌다.","…그렇게 솔직히 말씀하실 줄은 몰랐습니다.","태오 씨는 저 보고 기쁘지 않아요?","당연히 기쁩니다. 상당히요.","오늘 날씨가 좋아서요.","그렇습니까. 날씨 덕을 좀 봤군요."],"백지한":["여유의 균열","지한이 눈을 맞추며 여유롭게 웃었다.","오늘은 저한테 조금 더 반할 예정 없으세요?","이미 충분히 반했는데 더요?","지한이 잠시 눈을 깜빡였다. 손으로 입가를 가리며 웃었다.","……이건 예상 못 했는데요. 참 곤란하네요.","지한 씨가 먼저 더 반하면요?","좋아요. 그건 이미 진행 중이니까.","오늘은 그냥 편하게 놀아요.","좋죠. 괜히 욕심내지는 않을게요."],"임하나":["용기 낸 장난","하나가 당신을 바라보다 작게 웃었다.","저… 오늘은 제가 먼저 보고 싶었다고 하면 좀 놀랄까요?","저도요. 하나 씨가 먼저 말해 줘서 더 좋아요.","하나가 두 손으로 뺨을 가렸다. 손가락 사이로 웃음이 새어 나왔다.","……아, 제가 먼저 말했는데 왜 제가 더 부끄럽죠?","다음에도 먼저 말해 줘요.","네… 연습 안 해도 말할 수 있게 해 볼게요.","조금 놀랐어요.","그렇죠? 저도 제가 좀 신기해요."],"차유리":["시선의 방향","유리가 당신을 바라보며 장난스럽게 웃었다.","오, 오늘 예쁜 사람 옆에 있으니까 기분 좋은데요?","저도 예쁜 사람 옆이라 기분 좋아요.","유리가 눈을 크게 떴다가 웃음을 터뜨렸다. 괜히 머리카락을 귀 뒤로 넘겼다.","와, 이거 제가 먼저 당할 줄은 몰랐는데!","유리 씨가 웃으니까 더 예뻐요.","아, 그만! 오늘 얼굴 관리 망했다.","오늘 기분 좋은 일이 있나 봐요.","맞아요. 지금도 좋은 일 하나 추가됐고요."],"오세린":["미소가 멈춘 순간","세린이 턱을 괴고 당신을 보며 미소 지었다.","후후, 그렇게 바라보시면 제가 괜히 기대하게 되는데요.","기대해도 괜찮아요. 좋아서 보는 거예요.","세린이 잔을 내려놓았다. 미소는 그대로였지만 눈길이 잠깐 흔들렸다.","……아아, 제가 먼저 장난을 건 건데. 오늘은 제가 더 떨리네요.","세린 씨도 저 좋아하잖아요.","으음, 그렇지요. 숨길 생각은 없답니다.","그냥 편안해 보여서요.","아아, 그렇게 느껴 주셨다면 다행이에요."],"유지안":["먼저 웃은 사람","지안이 당신에게 장난스럽게 눈을 찡긋했다.","아하하! 오늘 저 좀 괜찮죠? 솔직하게 말해 봐요.","괜찮은 정도가 아니라 계속 보고 싶어요.","지안이 한 박자 늦게 웃었다. 괜히 옷깃을 만지며 얼굴을 돌렸다.","……아, 뭐야. 내가 먼저 물어봤는데.","지안 씨 지금 부끄러워요?","아하하! 네! 이건 인정해야겠다.","오늘 옷 잘 어울려요.","와우, 역시 오늘 이거 입길 잘했다!"],"공재희":["장난의 역습","재희가 휴대전화를 내려놓고 당신을 보며 히죽 웃었다.","헐ㅋㅋ 오늘 나 보고 싶어서 온 거 아님?","맞아요. 재희 씨 보고 싶어서 왔어요.","재희가 잠깐 웃음을 멈췄다. 입술을 꾹 다물다가 시선을 돌렸다.","……뭐야. 그렇게 바로 인정하면 나 좀 당황함.","재희 씨는요? 저 보고 싶었어요?","웅. 많이. …됐냐고ㅋㅋ.","그냥 지나가다가 왔어요.","헐ㅋㅋ 알겠음. 그래도 와서 좋다."]};
const relationshipTouchScenes={"서이준":[["손을 내밀기까지","이준이 당신 옆에서 손을 폈다가 다시 주머니에 넣었다.","…손, 잡아도 돼요?","손을 내밀자 이준이 손가락을 조심스럽게 맞물렸다.","…생각보다 신경 쓰이네요."],["익숙해진 손","이준이 나란히 걷다가 익숙한 듯 손바닥을 내밀었다.","…오늘도 잡을래요?","손을 맞잡자 이준의 엄지가 손등을 가볍게 스쳤다.","이제는 이쪽 손이 비어 있으면 좀 이상해요."],["가까운 자리","이준이 옆자리를 비워 두고 당신을 보았다.","…오늘은 어깨에 기대도 돼요?","이준이 천천히 어깨를 맞댔다. 낮은 목소리가 한층 가까이 들렸다.","…이렇게 가까운 건 아직도 좀 떨리는데."]],"강도윤":[["조심스러운 손길","도윤이 손을 내밀다가 당신의 표정을 살폈다.","하하, 손 잡고 걸어도 될까요?","도윤이 손바닥을 부드럽게 감쌌다.","…손이 따뜻하시네요."],["한결 자연스럽게","도윤이 걸음을 늦추고 손을 내밀었다.","오늘도 같이 걸어요. 손 잡을까요?","도윤의 손이 익숙하게 당신의 손을 감쌌다.","하하, 이제는 제가 먼저 찾게 되네요."],["곁에 두고 싶은 사람","도윤이 가까이 서서 팔을 조금 벌렸다.","…잠깐 허리를 감싸도 될까요?","허락하자 도윤이 허리에 가볍게 팔을 둘렀다. 가까운 곳에서 웃음 섞인 숨이 들렸다.","……하하. 익숙해졌다고 생각했는데, 여전히 좋네요."]],"한시우":[["괜히 신경 쓰여","시우가 손을 내밀었다가 웃으며 고개를 돌렸다.","아, 손 잡을래요? 괜히 떨리네.","손이 닿자 시우가 눈을 크게 뜨고 웃었다.","히히. 이거 진짜 좋다."],["나란히 걷기","시우가 당신 옆으로 성큼 다가와 손을 내밀었다.","오늘도 같이 걸어요! 손은요?","손을 잡자 시우가 보폭을 맞추며 웃었다.","와, 이제 혼자 걷는 게 더 어색한데요?"],["장난보다 가까운","시우가 웃다가 당신 옆에서 잠시 멈췄다.","저기, 어깨 감싸도 돼요?","시우의 팔이 어깨에 가볍게 얹혔다. 옷깃에 밴 스킨 향이 은은했다.","…히히. 아직 이렇게 있으면 좀 떨림."]],"정태오":[["먼저 허락을","태오가 손을 내밀고 차분하게 기다렸다.","손을 잡아도 되겠습니까?","허락을 받은 태오가 손을 조심스럽게 잡았다.","…감사합니다. 기쁘군요."],["보폭과 온도","태오가 걸음을 늦추고 손을 내밀었다.","오늘도 함께 걸으시겠습니까? 손도요.","손을 맞잡자 태오의 손가락이 편안하게 자리 잡았다.","이제는 자연스러운 일이 되었군요."],["단정한 다정함","태오가 당신을 바라보고 팔을 조금 들어 올렸다.","…잠시 어깨를 감싸도 되겠습니까?","허락하자 태오가 어깨를 가볍게 감쌌다. 안정적인 온기가 전해졌다.","…여전히 긴장되는군요. 좋은 의미입니다."]],"백지한":[["잠깐의 긴장","지한이 손을 내밀며 미소 지었다.","손 잡고 가실래요?","손을 맞잡자 지한이 잠시 웃음을 멈췄다.","…생각보다 제가 더 긴장했네요."],["당연한 한쪽","지한이 당신 쪽으로 손을 내밀었다.","오늘도 이쪽 손은 당신 몫인데. 괜찮죠?","지한이 손을 잡고 자연스럽게 걸음을 맞췄다.","좋네요. 이제 이게 제일 편해요."],["여유로운 거리","지한이 당신 옆에 서서 살짝 몸을 돌렸다.","조금 가까이 있어도 될까요? 허리에 손을 둘까 하는데.","허락을 받은 지한이 허리에 가볍게 손을 둘렀다. 희미한 향수 향이 가까워졌다.","…이 정도 거리에서는 여유 있는 척하기 어렵네요."]],"임하나":[["용기 낸 손","하나가 손끝을 만지작거리다 당신에게 손을 내밀었다.","저… 손 잡아도 될까요?","손을 맞잡자 하나가 수줍게 웃었다.","……네. 정말 따뜻하네요."],["먼저 잡고 싶은 손","하나가 잠시 망설이다 먼저 손을 내밀었다.","오늘은 제가 먼저 잡고 싶어요. 괜찮아요?","하나가 손가락을 조심스럽게 맞물렸다.","…이제는 먼저 말하는 게 조금 쉬워졌어요."],["기대는 용기","하나가 당신 옆에 앉아 조심스럽게 고개를 들었다.","저… 어깨에 기대도 돼요?","하나가 허락을 받고 어깨에 머리를 살짝 기댔다. 깨끗한 옷감 향이 느껴졌다.","……이렇게 편한데도 심장이 빨리 뛰어요."]],"차유리":[["손끝의 장난","유리가 손을 내밀며 웃었다.","오, 손 잡고 걸을래요?","손이 닿자 유리가 잠깐 웃음을 삼켰다.","와, 생각보다 설레는데요?"],["익숙한 팔짱","유리가 당신 옆으로 다가와 팔을 살짝 들어 올렸다.","오늘은 팔짱 끼고 가요. 괜찮죠?","허락하자 유리가 팔짱을 가볍게 끼었다.","좋다. 이제 이게 편해졌네요."],["느슨한 포옹","유리가 당신 앞에서 팔을 벌리고 웃었다.","잠깐 안아도 돼요? 그냥 그러고 싶어서.","유리가 허락을 받고 가볍게 안았다. 머리카락이 소매에 닿았다.","…오, 이건 아무리 익숙해져도 좋네요."]],"오세린":[["따뜻한 손","세린이 당신 손을 바라보다 미소 지었다.","으음, 손을 잡아도 괜찮을까요?","세린이 허락을 받고 손을 부드럽게 포갰다.","아아, 따뜻하네요."],["편안한 접촉","세린이 옆에 앉아 익숙한 듯 손을 내밀었다.","오늘도 손을 잡고 이야기할까요?","손끝이 포개졌다. 세린은 느긋하게 미소 지었다.","이렇게 있는 시간이 참 편안해졌네요."],["조금 더 가까이","세린이 당신 쪽으로 몸을 돌렸다.","후후, 오늘은 잠시 안아 봐도 될까요?","허락하자 세린이 가볍게 안았다. 은은한 향과 온기가 가까웠다.","……아아. 오래 만나도 이런 순간은 여전히 특별하군요."]],"유지안":[["손 잡고 가요","지안이 손을 내밀고 웃었다.","와, 손 잡고 걸을래요? 아, 좀 떨린다.","손을 잡자 지안이 한 박자 늦게 웃었다.","아하하! 좋다. 진짜 좋다."],["먼저 내민 팔","지안이 당신 옆으로 바짝 다가오기 전 팔을 내밀었다.","오늘 팔짱 끼고 가도 돼요?","허락하자 지안이 자연스럽게 팔짱을 꼈다.","이렇게 걸으면 기분이 좀 더 좋아요."],["장난 없는 포옹","지안이 웃다가 당신을 바라보며 팔을 벌렸다.","…잠깐 안아도 돼요? 오늘 그냥 그러고 싶어요.","지안이 허락을 받고 가볍게 안았다. 평소보다 조용한 웃음이 가까이 들렸다.","……아, 아직도 떨리네. 좋다."]],"공재희":[["손부터","재희가 손을 내밀고 히죽 웃었다.","헐ㅋㅋ 손 잡아도 됨?","손을 맞잡자 재희가 잠깐 시선을 돌렸다.","……웅. 생각보다 좋네."],["옆자리","재희가 당신 옆자리를 가리키고 손을 내밀었다.","오늘도 손 잡을래요? 그냥 이게 편함.","재희가 손을 잡고 가볍게 웃었다.","웅ㅋㅋ 이제 안 잡으면 좀 허전함."],["쿠션보다 가까이","재희가 당신을 바라보고 어깨를 가리켰다.","나 오늘도 기대도 됨? 그냥 좀 가까이 있고 싶음.","허락을 받은 재희가 어깨에 머리를 기댔다. 익숙한 샴푸 향이 가까웠다.","……이건 아직도 좋네. 진짜로."]]};
function relationshipTouchRecord(p){const c=coupleRecord(p);return c.touchGrowth||(c.touchGrowth={seen:{},history:[],last:0})}
function relationshipTouchStage(p,day){if(!vIsDating(p))return -1;const c=coupleRecord(p),r=relationshipTouchRecord(p),t=touchContext(p,day),age=day-c.since,f=flirtRecord(p);if(t.tired||t.conflicted||relationshipBoundaryLine(p,day)||r.last&&day-r.last<10)return -1;const accepted=r.history.filter(x=>x.accepted),prior=f.touches.filter(x=>x.day>=c.since&&x.day<day);if(age>=3&&!r.seen[0])return 0;if(age>=21&&!r.seen[1]&&(accepted.length||prior.length))return 1;if(age>=60&&!r.seen[2]&&r.history.some(x=>x.stage===1&&x.accepted)&&prior.length>=2&&t.security>=4)return 2;return -1}
const coupleHabitScenes={"서이준":[["각자의 침묵","이준이 말을 꺼내려다 당신을 보고 웃었다.","…오늘은 말없이 같이 있어도 좋겠어요. 무슨 말을 해야 할지 고민 안 해도 되니까.","말이 없어도 편하게 함께 있어요.","…좋아요. 이게 우리한테는 잘 맞나 봐요.","오늘은 이야기하면서 보내고 싶어요.","그럼요. 듣고 싶어요.","…오늘은 말이 없어도 되는 날인가요?"],["다음에 들려줄 이야기","이준이 휴대전화 메모를 열어 보였다.","혼자 있을 때 해 주고 싶은 얘기가 생기면 적어 둬요. 만나면 자꾸 잊어버려서요.","우리 서로 이야기할 거리를 모아 둬요.","…그럼 다음에 하나씩 꺼내 봐요.","생각나면 그때 연락해요.","그것도 좋겠네요.","…들려주고 싶은 얘기가 생겼어요."]],"강도윤":[["내 몫도 챙기기","도윤이 무언가 권하려다가 잠시 말을 멈췄다.","하하, 이제는 저도 뭘 하고 싶은지 먼저 생각하게 되네요. 오늘은 서로 원하는 걸 하나씩 정할까요?","서로 원하는 것을 하나씩 고르기로 해요.","좋아요. 제 몫도 빼먹지 않을게요.","오늘은 그때그때 정해요.","하하, 그것도 좋죠.","오늘은 제가 하고 싶은 것도 하나 골랐어요."],["같이 발견한 것","도윤이 휴대전화에 저장한 사진을 보여 주었다.","산책하다가 좋은 풍경을 보면 요즘은 사진을 찍어요. 같이 보고 싶어서요.","좋은 풍경을 발견하면 서로 사진을 보내요.","하하, 그러면 서로의 하루도 조금씩 알 수 있겠네요.","다음에 같이 직접 보러 가요.","좋아요. 같이 보는 게 더 좋겠죠.","오늘 예쁜 풍경 하나 발견했어요. 다음에 보여 드릴게요."]],"한시우":[["오늘의 소소한 사건","시우가 피식 웃으며 말을 꺼냈다.","아, 오늘 진짜 별거 아닌 일 있었는데 만나면 얘기하려고 기억해 뒀어요.","하루에 재미있었던 일 하나씩 이야기해요.","히히. 좋은데요? 재미없는 날엔 재미없었다고 하기!","생각날 때 편하게 이야기해요.","오케이! 부담 없이 가죠.","오늘의 소소한 사건 하나 있음! 들어 볼래요?"],["귀가 인사","시우가 시간을 확인하고 당신을 돌아봤다.","이상하게 집에 도착했다는 연락 받으면 그제야 오늘 하루 끝난 느낌이에요.","여유 있을 때 서로 귀가 인사를 해요.","좋아요! 바쁘면 나중에 보내도 되기.","매번 연락해야 하는 약속은 부담스러워요.","오케이. 하고 싶을 때만 해요.","집에 도착하면 여유 있을 때 연락해요."]],"정태오":[["서두르지 않는 시간","태오가 시계를 확인하다가 손을 내렸다.","함께 있는 동안에는 일정만 생각하지 않으려고 합니다. 잠시 여유를 두는 습관이 생겼군요.","함께할 때는 여유를 조금 남겨 두기로 해요.","좋습니다. 서두를 필요는 없지요.","일정에 따라 편하게 정해요.","알겠습니다. 상황에 맞추겠습니다.","오늘은 시간에 여유를 조금 두었습니다."],["솔직한 하루","태오가 잠시 생각하다가 먼저 말을 꺼냈다.","괜찮다는 말로 모든 것을 설명할 필요는 없다는 걸 알게 되었습니다.","서로 힘든 날에는 솔직하게 말해요.","…좋습니다. 저도 그렇게 하겠습니다.","말하고 싶을 때만 이야기해요.","물론입니다. 그 편이 좋겠습니다.","오늘 하루는 어떠셨습니까? 힘들었으면 저한테 얘기해도 됩니다."]],"백지한":[["비워 둔 시간","지한이 일정 화면을 끄고 당신을 보며 웃었다.","예전 같으면 빈 시간을 채웠을 텐데요. 요즘은 그냥 비워 두는 것도 좋더라고요.","가끔 계획 없는 시간을 함께 보내요.","좋네요. 아무것도 안 해도 성공인 약속이라니.","각자 쉬는 시간도 챙겨요.","그럼요. 서로의 시간은 중요하죠.","오늘은 일부러 일정을 비워 뒀어요."],["기억하고 싶은 말","지한이 당신을 보다가 작게 웃었다.","별말 아닌데도 오래 기억나는 말이 있어요. 그런 말 있어요?","가끔 서로 좋았던 말을 이야기해요.","좋아요. 제가 잘 기억해 두고 있는 것도 알려 드릴게요.","그런 건 마음속에 간직할래요.","좋죠. 굳이 꺼내 놓지 않아도 되니까.","오늘 문득 전에 해 준 말이 생각났어요."]],"임하나":[["먼저 고르는 사람","하나가 잠시 생각하다가 당신에게 먼저 말을 걸었다.","저… 오늘은 제가 하고 싶은 걸 먼저 말해 봐도 될까요? 이제는 그래도 될 것 같아서요.","서로 하고 싶은 걸 숨기지 않기로 해요.","……네. 저도 제 몫을 꼭 말해 볼게요.","부담 없이 천천히 정해요.","네! 그렇게 해요.","저… 오늘 하고 싶은 게 하나 생겼어요."],["작은 기쁨","하나가 조용히 미소 지었다.","별일 아닌데 기분 좋은 일이 있으면 요즘은 누군가에게 말하고 싶어져요.","좋았던 일을 서로 나누어요.","……네. 제일 먼저 얘기하고 싶어요.","생각날 때 이야기해 줘요.","네. 그럴게요.","저… 오늘 기분 좋은 일이 하나 있었어요."]],"차유리":[["오늘의 취향","유리가 당신을 보며 웃었다.","요즘은 뭘 보든 같이 구경하면 뭘 고를까 궁금해요.","서로 마음에 든 것을 하나씩 소개해요.","좋다! 달라도 재밌을 것 같아요.","각자 좋아하는 건 각자 즐겨요.","오케이. 그것도 좋죠.","오, 오늘 보여 주고 싶은 걸 찾았어요."],["편한 모습","유리가 어깨를 느슨하게 풀며 웃었다.","오늘은 잘 보이려고 애쓰지 않아도 되는 날이네요. 이런 날도 있어야죠.","가끔은 꾸미지 않고 편하게 만나요.","좋다. 서로 아무것도 평가 안 하기!","만날 때는 기분 내고 싶어요.","오케이. 그날 기분에 맞춰요.","오늘은 편한 날로 해도 좋죠?"]],"오세린":[["쉬어 가는 약속","세린이 조용히 당신을 바라보며 미소 지었다.","으음, 함께 있어도 각자 쉬고 싶을 때가 있지요. 그걸 말할 수 있는 사이였으면 해요.","쉬고 싶을 때는 편하게 말하기로 해요.","아아, 좋네요. 서로 돌보는 방법이겠지요.","그때그때 필요한 걸 이야기해요.","네. 그러면 되겠어요.","오늘은 잠시 각자 쉬어도 괜찮을까요?"],["날씨 이야기","세린이 창밖을 바라보다 당신을 향해 돌아섰다.","날씨 좋은 날엔 어디 산책하고 있을까 싶더라고요.","서로 하루의 날씨를 이야기해요.","후후, 소소하지만 정겨운 약속이네요.","생각날 때 연락해요.","아아, 부담 없이요.","오늘 하늘이 참 예쁘더라고요. 시간 나면 한 번 올려다봐요."]],"유지안":[["오늘의 발견","지안이 휴대전화 화면을 보여 주며 웃었다.","아하하, 요즘 맛집이나 예쁜 곳 발견하면 혼자 저장해 두기 아깝더라고요.","둘만의 가 보고 싶은 곳 목록을 만들어요.","좋아요! 하나씩 지워 나가면 재밌겠다.","즉흥적으로 놀러 가는 게 좋아요.","오케이! 그날 기분대로 가요.","와우, 우리 목록에 넣을 만한 곳 찾았어요!"],["아무것도 안 하는 날","지안이 기지개를 켜고 당신을 보았다.","가끔은 열심히 놀지 않아도 좋은 것 같아요. 같이 있으면 그냥 쉬는 것도 재밌고요.","가끔 아무것도 안 하는 날을 만들어요.","좋다! 아무것도 안 해도 성공인 날!","오늘 기분에 맞춰 정해요.","좋아요. 무리하지 말기!","오늘은 아무것도 안 하는 날로 할까요?"]],"공재희":[["별거 아닌 사진","재희가 휴대전화를 들어 보이며 웃었다.","요즘 별거 아닌 사진도 보내고 싶어요. 웃긴 거 보면 특히.","웃긴 걸 발견하면 서로 보내요.","웅ㅋㅋ 답장 늦어도 괜찮기.","재밌을 때만 보내 줘요.","ㅇㅋ. 부담 없이 보냄.","보여 주려고 저장해 둔 거 있어요."],["조용한 시간","재희가 휴대전화를 내려놓고 당신 쪽을 보았다.","나 요즘 같이 있을 때 굳이 뭔가 해야 한다는 생각 안 듦. 그냥 있어도 좋더라.","가끔은 각자 할 일을 하며 같이 있어요.","웅. 이거 진짜 좋음.","오늘은 같이 이야기하고 싶어요.","ㅇㅋ! 그러면 얘기하자.","오늘은 그냥 옆에만 있어도 좋을 듯."]]};
function coupleHabitRecord(p){const c=coupleRecord(p);return c.habits||(c.habits={seen:{},history:[],last:0,recall:{}})}
function coupleHabitStage(p,day){if(!vIsDating(p))return -1;const c=coupleRecord(p),r=coupleHabitRecord(p),t=touchContext(p,day),age=day-c.since;const dates=dateHistory(p).filter(x=>x.day>=c.since&&x.day<day);if(t.conflicted||t.tired||breakupWarning(p)||t.security<4||r.last&&day-r.last<14)return -1;if(age>=30&&dates.length>=2&&!r.seen[0])return 0;if(age>=75&&dates.length>=4&&!r.seen[1])return 1;return -1}
function renderCoupleHabit(ev,p){if(!romanceBonusAllowed(ev,'coupleHabit'))return false;const v=initSim(),a=coupleHabitScenes[p];if(!a)return false;if(!ev.coupleHabit){if(!v.running||!vIsDating(p)||!ev.answered&&!ev.sharedLife?.answer||ev.partnerComfort||ev.spontaneousVisit||ev.sensoryRomance||ev.heartMoment||ev.loverAffection||ev.afterglowMeeting||ev.coupleDate||ev.relationshipTouch||ev.playfulCouple)return false;const stage=coupleHabitStage(p,v.day);if(stage<0)return false;ev.coupleHabit={stage,since:coupleRecord(p).since};save()}const o=ev.coupleHabit,b=a[o.stage];add('이야기',b[1]);add(p,b[2]);if(o.answer){add(state.name,o.answer.label,true);add(p,o.answer.reply);return false}for(const [label,reply,agreed] of [[b[3],b[4],true],[b[5],b[6],false]])choiceButton(label,()=>{if(o.answer||!vIsDating(p)||coupleRecord(p).since!==o.since)return;const r=coupleHabitRecord(p);o.answer={label,reply,agreed};r.seen[o.stage]=v.day;r.last=v.day;r.history.push({day:v.day,stage:o.stage,agreed,label});feel(p,{security:agreed?2:1});remember(p,'coupleHabit:'+o.since+':'+o.stage,label+' / '+reply);writeJournal(p+' · '+b[0]);save();renderChoiceEvent();renderSim()});return true}
const habitNews={
 "서이준":{"1":["며칠 전 메모해 둔 게 있어요. 우체통 위에 고양이가 앉아 있는데 편지 넣는 사람마다 걔한테 먼저 인사를 하더라고요. 동네 우체국장 같았어요.","며칠 전 메모해 둔 게 있어. 우체통 위에 고양이가 앉아 있는데 편지 넣는 사람마다 걔한테 먼저 인사를 하더라. 동네 우체국장 같았어."]},
 "강도윤":{"0":["오늘은 제가 먹고 싶은 걸 골랐어요. 잘 익은 복숭아가 든 통조림이요. 어릴 때는 한 조각씩 아껴 먹었거든요.","오늘은 내가 먹고 싶은 걸 골랐어. 잘 익은 복숭아가 든 통조림. 어릴 때는 한 조각씩 아껴 먹었거든."],"1":["이 사진 좀 봐요. 연화천 다리 난간 그림자가 물 위에서는 꼭 피아노 건반 같아요. 같이 봤으면 싶어서 찍어 왔어요.","이 사진 좀 봐. 연화천 다리 난간 그림자가 물 위에서는 꼭 피아노 건반 같아. 같이 봤으면 싶어서 찍어 왔어."]},
 "한시우":{"0":["오늘 팀 단체 사진 찍는데 감독님 폰이 자꾸 옆 팀만 얼굴로 인식하는 거예요. 결국 감독님까지 옆 팀에 끼어서 같이 찍었어요. 단체 맞긴 맞죠?","오늘 팀 단체 사진 찍는데 감독님 폰이 자꾸 옆 팀만 얼굴로 인식하는 거야. 결국 감독님까지 옆 팀에 끼어서 같이 찍었어. 단체 맞긴 맞지?"]},
 "백지한":{"1":["전에 잊기 아까운 말은 꺼내 보자고 했죠. 그 말이 좋았어요. 저도 가끔은 먼저 떠올려 주는 사람이고 싶거든요.","전에 잊기 아까운 말은 꺼내 보자고 했지. 그 말이 좋았어. 나도 가끔은 먼저 떠올려 주는 사람이고 싶거든."]},
 "임하나":{"0":["오늘은 제가 먼저 골라 봤어요. 돌아갈 때 골목 안 작은 빵집에 들르고 싶어요. 진열장 맨 위에 밤식빵이 있었거든요.","오늘은 내가 먼저 골라 봤어. 돌아갈 때 골목 안 작은 빵집에 들르고 싶어. 진열장 맨 위에 밤식빵이 있었거든."],"1":["오늘 과외 끝나고 학생이 자기 힘으로 다 푼 연습장을 보여 줬어요. 전에 틀렸던 문제 옆에 작은 별을 그려 놨더라고요. 그 별 보는데 참 좋았어요.","오늘 과외 끝나고 학생이 자기 힘으로 다 푼 연습장을 보여 줬어. 전에 틀렸던 문제 옆에 작은 별을 그려 놨더라. 그 별 보는데 참 좋았어."]},
 "차유리":{"0":["이 색 좀 봐요. 과일 가게에서 복숭아 두 개를 사 왔는데 맞닿았던 자리만 희게 남았어요. 누가 둘이 붙어 있던 자리를 그려 놓은 것 같죠?","이 색 좀 봐. 과일 가게에서 복숭아 두 개를 사 왔는데 맞닿았던 자리만 희게 남았어. 누가 둘이 붙어 있던 자리를 그려 놓은 것 같지?"]},
 "유지안":{"0":["우리 목록에 넣고 싶은 곳 찾았어요! 골목 안쪽에 중고 음반 가게가 있는데, 헤드폰 끼고 각자 한 곡씩 들어 볼 수 있대요.","우리 목록에 넣고 싶은 곳 찾았어! 골목 안쪽에 중고 음반 가게가 있는데, 헤드폰 끼고 각자 한 곡씩 들어 볼 수 있대."]},
 "공재희":{"0":["이거 봐요ㅋㅋ 어제 뽑기 기계 구경하다 찍었는데 펭귄 인형 하나가 유리벽에 부리 딱 붙이고 있어요. 나랑 눈 마주친 거 같죠?","이거 봐ㅋㅋ 어제 뽑기 기계 구경하다 찍었는데 펭귄 인형 하나가 유리벽에 부리 딱 붙이고 있어. 나랑 눈 마주친 거 같지?"]}
};
function habitRecallLine(p,day,recall){
 const lines=habitNews[p]?.[recall.stage];
 return lines?lines[speechRegisterIndex(p,'npc',day)]:recall.line;
}
function coupleHabitRecall(ev,p){const v=initSim();if(!v.running||!vIsDating(p)||!ev.answered&&!ev.sharedLife?.answer||ev.partnerComfort||ev.coupleHabit||ev.relationshipTouch||ev.playfulCouple||ev.heartMoment||ev.loverAffection||ev.afterglowMeeting||ev.coupleDate||touchContext(p,v.day).conflicted||touchContext(p,v.day).tired)return;if(ev.habitRecall){add(p,habitRecallLine(p,ev.day??v.day,ev.habitRecall));return}const r=coupleHabitRecord(p),e=r.history.filter(x=>x.agreed&&v.day-x.day>=7&&(!r.recall[x.stage]||v.day-r.recall[x.stage]>=21)).sort((a,b)=>(r.recall[a.stage]||0)-(r.recall[b.stage]||0))[0];if(!e)return;const line=coupleHabitScenes[p][e.stage][7];ev.habitRecall={stage:e.stage,line};r.recall[e.stage]=v.day;save();add(p,habitRecallLine(p,ev.day??v.day,ev.habitRecall))}

function renderRelationshipTouch(ev,p){if(!romanceBonusAllowed(ev,'relationshipTouch'))return false;const v=initSim(),a=relationshipTouchScenes[p];if(!a)return false;if(!ev.relationshipTouch){if(!v.running||!vIsDating(p)||!ev.answered&&!ev.sharedLife?.answer||ev.partnerComfort||ev.spontaneousVisit||ev.sensoryRomance||ev.heartMoment||ev.loverAffection||ev.afterglowMeeting||ev.coupleDate||ev.playfulCouple)return false;const stage=relationshipTouchStage(p,v.day);if(stage<0)return false;ev.relationshipTouch={stage,since:coupleRecord(p).since};save()}const o=ev.relationshipTouch,b=a[o.stage];add('이야기',b[1]);add(p,b[2]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.accepted)add('이야기',b[3]);add(p,o.answer.reply);return false}for(const [label,accepted] of [['좋아요.',true],['오늘은 조금 떨어져 있어요.',false]])choiceButton(label,()=>{if(o.answer||!vIsDating(p)||coupleRecord(p).since!==o.since)return;const r=relationshipTouchRecord(p),reply=accepted?b[4]:relationshipTouchDeclines[p];o.answer={label,accepted,reply};r.seen[o.stage]=v.day;r.last=v.day;r.history.push({day:v.day,stage:o.stage,accepted});if(accepted){const type=o.stage===2?({'강도윤':'허리 감싸기','백지한':'허리 감싸기','한시우':'어깨 감싸안기','정태오':'어깨 감싸안기','차유리':'포옹','오세린':'포옹','유지안':'포옹'}[p]||'어깨 기대기'):o.stage===1&&['차유리','유지안'].includes(p)?'팔짱':'손잡기';flirtRecord(p).touches.push({day:v.day,type,scene:'relationshipTouch'});v.affection[p]=Math.min(999,v.affection[p]+2)}feel(p,{security:1});remember(p,'relationshipTouch:'+o.stage,label+' / '+reply);writeJournal(p+' · '+b[0]);save();renderChoiceEvent();renderSim()});return true}
const relationshipTouchDeclines={'서이준':'…그래요. 편하게 있어요.','강도윤':'좋아요. 오늘은 말하면서 걸어요.','한시우':'오케이! 편한 게 제일이죠.','정태오':'알겠습니다. 편하게 계십시오.','백지한':'좋아요. 편한 거리로 있죠.','임하나':'네! 괜찮아요.','차유리':'오케이! 편하게 있어요.','오세린':'네. 편한 게 좋지요.','유지안':'좋아요! 그냥 같이 있어요.','공재희':'웅ㅋㅋ 알겠어요.'};

function renderPlayfulCouple(ev,p){if(!romanceBonusAllowed(ev,'playfulCouple'))return false;const v=initSim(),a=playfulCoupleVoices[p];if(!a)return false;const z=socialRecord(p);if(!ev.playfulCouple){if(!v.running||!vIsDating(p)||v.day-coupleRecord(p).since<5||!ev.answered&&!ev.sharedLife?.answer||ev.partnerComfort||ev.spontaneousVisit||ev.sensoryRomance||ev.heartMoment||ev.loverAffection||ev.afterglowMeeting||ev.coupleDate||ev.relationshipTouch||ev.coupleHabit||touchContext(p,v.day).tired||touchContext(p,v.day).conflicted||z.playfulCoupleDay)return false;ev.playfulCouple={};save()}const o=ev.playfulCouple;add('이야기',a[1]);add(p,a[2]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.kind===0)add('이야기',a[4]);add(p,o.answer.reply);return false}for(const [label,reply,kind] of [[a[3],a[5],0],[a[6],a[7],1],[a[8],a[9],2]])choiceButton(label,()=>{if(o.answer)return;o.answer={label,reply,kind};z.playfulCoupleDay=v.day;if(kind<2){v.affection[p]=Math.min(999,v.affection[p]+2);feel(p,{security:1})}remember(p,'playfulCouple',label+' / '+reply);writeJournal(p+' · '+a[0]);save();renderChoiceEvent();renderSim()});return true}

function partnerComfortReady(p,day){if(!vIsDating(p)||day-coupleRecord(p).since<7||!socialRecord(p).contact)return false;const c=touchContext(p,day),z=socialRecord(p);return c.tired&&!c.conflicted&&!breakupWarning(p)&&(!z.lastPartnerComfort||day-z.lastPartnerComfort>=28)}
function renderPartnerComfort(ev,p){if(!romanceBonusAllowed(ev,'partnerComfort'))return false;const v=initSim(),a=partnerComfortVoices[p];if(!a)return false;if(!ev.partnerComfort){if(!v.running||!partnerComfortReady(p,v.day)||ev.spontaneousVisit||ev.sensoryRomance?.answer?.warm||!ev.answered&& !ev.sharedLife?.answer)return false;ev.partnerComfort={};socialRecord(p).lastPartnerComfort=v.day;save()}const o=ev.partnerComfort;add('이야기',a[1]);add(p,a[2]);add(p,a[3]);if(o.answer){add(state.name,o.answer.label,true);if(o.answer.kind===0)add('이야기',a[4]);add(p,o.answer.reply);return false}for(const [label,reply,kind] of [['좋아요. 제가 곁에 있을게요.',a[5],0],['오늘 무슨 일이 있었는지 이야기해 줄래요?',a[6],1],['오늘은 푹 쉬어요. 다음에 이야기해요.',a[7],2]])choiceButton(label,()=>{if(o.answer)return;o.answer={label,reply,kind};const z=socialRecord(p);z.lastSeen=v.day;if(kind!==2){z.lastTogether=v.day;feel(p,{security:2});v.affection[p]=Math.min(999,v.affection[p]+1)}else feel(p,{security:1});if(kind===0)flirtRecord(p).touches.push({day:v.day,type:['강도윤','한시우','임하나','유지안'].includes(p)?'포옹':['정태오','오세린'].includes(p)?'손잡기':'어깨 기대기',scene:'partnerComfort'});remember(p,'partnerComfort:'+v.day,label+' / '+reply);writeJournal(p+' · '+a[0]);save();renderChoiceEvent();renderSim()});return true}

const doorHomeActivities=new Set(['휴식','공부','글쓰기','개발','디자인','외주 작업','요리','방 정리','취미 생활',
 '재활·인체 공부','공직 시험 준비','교육 공부','영상 편집 연습','방송 연습']);

// Track being in the same place. Reading a message and making an appointment do not count.
function noteDoorMeeting(v,ev){
 if(ev.doorVisit||ev.npcLifeSupport||!v.running&&!ev.coupleMorning&&!ev.newConfession&&!ev.festival&&!ev.birthdayParty)return;
 const guests=[ev.person,...(ev.group?.people||[]),...(ev.groupPartners||[]),...(ev.tripScene?.people||[])];
 if(ev.triangle)guests.push(ev.triangle.lover,ev.triangle.other);
 if(ev.crushMeeting)guests.push(ev.crushMeeting.friend);
 if(ev.crossIntro)guests.push('한시우','서이준');
 if(ev.volunteerEvent?.answer)guests.push(...(ev.volunteerEvent.guests||[]).map(row=>row[0]));
 for(const p of new Set(guests))if(people.includes(p))socialRecord(p).lastDoorEncounter=ev.day??v.day;
}
function doorLastMeeting(v,p,z,dating){
 const since=dating?v.couple?.[p]?.since:0;
 const anniversary=since?v.specialMemory?.anniversaries?.[p+'|'+since]:null;
 const giftVisit=['작은 손편지를 건넨다','기념일 디저트를 준비한다'].includes(anniversary?.choice);
 const when=[z.lastSeen,z.lastTogether,z.lastDoorEncounter,z.lastDate?.day,z.contactAskedDay,z.friendRoute?.bondDay,
  z.aftermath?.friendDay,giftVisit?anniversary.day:0,
  v.encounters?.findLast(e=>e.person===p)?.day,since];
 const last=Math.max(0,...when.filter(d=>Number.isInteger(d)&&d>0&&d<=v.day));
 if(last)return last;
 // Older saves may retain a bond without a dated encounter.
 return z.doorKnownSince??(z.doorKnownSince=v.day);
}
function doorVisitorFree(p,day,slot){
 if(npcLifeBusy(p,day,slot))return false;
 const weekday=(day-1)%7;
 const place=npcBasePlace(p,weekday,slot);
 const workplace=({강도윤:'cafe',백지한:'realty',정태오:'police',임하나:'store',오세린:'clinic',유지안:'dance',한시우:'pc',공재희:'pc'})[p];
 if(place&&place===workplace||p==='차유리'&&slot<3&&['clinic','cafe'].includes(place))return false;
 return !!place||regularOutingDay(p,day);
}
function doorVisitCandidate(v,p,slot){
 const z=v.social?.[p],day=v.day,dating=vIsDating(p);
 const formerPartner=v.romance[p]==='ended';
 if(!z?.contact||formerPartner&&(z.aftermath?.status!=='friend'||day<(z.exRelationship?.readyDay??0))||
  ['cooling','ready'].includes(z.aftermath?.status)||
  z.friendRoute?.crush?.status==='cooling'||dating&&breakupWarning(p)||
  p===JIHAN&&day<jihanBond().mutedUntil||!doorVisitorFree(p,day,slot))return null;
 const visits=z.doorVisits,previous=visits?.last||0;
 if(z.lastSurprise&&day-z.lastSurprise<3||z.lastIllnessCare===day)return null;
 const issueRecord=dating?v.couple?.[p]?.issue:null,issue=issueRecord?.active;
 if([issue,...(issueRecord?.queue||[])].some(x=>x&&(x.kind==='betrayal'||x.source==='confirmed'))||issue?.status==='waiting')return null;
 const personal=v.conflicts?.[p],art=p==='차유리'&&personal?.id==='yuri-art-space'&&['pending','ready'].includes(personal.status);
 const tier=relationshipTier(p),bond=z.friendRoute?.bond;
 if(!dating&&!bond&&!art&&!(tier>=3||tier>=2&&(z.friendship>=4||z.interest>=4||v.flirt?.[p]?.interest>=4)))return null;
 const last=doorLastMeeting(v,p,z,dating),gap=day-last;
 if(gap<=0)return null;
 let repair=null;
 if(art){
  if(day-personal.day<2||personal.status==='ready'&&day<=(personal.reflectedDay??-1))return null;
  repair={type:'personal',kind:personal.id,day:personal.day};
 }else if(issue&&(issue.kind!=='distance'||issue.status==='ready')){
  if(!['pending','ready'].includes(issue.status)||!['jealous','distance'].includes(issue.kind)||
   day-issue.day<2||issue.status==='ready'&&day<(issue.reviewDay??issue.day))return null;
  repair={type:'couple',kind:issue.kind,day:issue.day};
 }else if(!dating&&!formerPartner){
  const m=memoryFor(p),lastHurt=m.lastHurtMeet;
  if(lastHurt&&lastHurt!==(m.doorHurtSettled||0)&&m.feelings.hurt>=5){
   if(day-lastHurt<4)return null;
   repair={type:'hurt',kind:'hurtMeet',day:lastHurt};
  }
 }
 // A fresh disagreement can prompt a return after a welcome visit. A request for space
 // or a second attempt at the very same disagreement observes the regular interval.
 const newRepair=repair&&repair.day>previous&&['stay','reconcile'].includes(visits?.outcome);
 if(previous&&day-previous<(newRepair?3:12))return null;
 const health=healthRecord();
 const worried=gap>=3&&(health.sickDays>0||health.fatigue>=70||health.strain>=2)&&
  !health.carePending&&(!health.lastCareReply||day-health.lastCareReply>=3);
 const reason=repair?'repair':worried?'worry':gap>=(dating?5:7)?'miss':null;
 if(!reason)return null;
 const waited=previous?day-previous:gap;
 return {p,reason,gap,repair,distanceDay:!repair&&issue?.kind==='distance'?issue.day:null,
  priority:Math.min(waited,75)+(reason==='repair'?20:reason==='worry'?12:0),previous};
}
function startDoorVisit(arrival,activityNote=''){
 const v=initSim(),run=v.running;
 if(!run||v.activeEvent||run.outing||run.slot<1||run.surpriseVisit||run.doorBooked||v.finished||!validMeetingDay(v.day)||
  dateBook()[v.day]||v.overnightPending?.day===v.day||v.lastDoorVisitDay&&v.day-v.lastDoorVisitDay<3)return false;
 const slot=Math.min(run.slot,3);
 const guests=people.map(p=>doorVisitCandidate(v,p,slot)).filter(Boolean)
  .sort((a,b)=>b.priority-a.priority||a.previous-b.previous||b.gap-a.gap);
 if(!guests.length)return false;
 const {p,reason,gap,repair,distanceDay}=guests[0],z=socialRecord(p),day=v.day;
 const record=z.doorVisits||(z.doorVisits={});
 const variant=(record[reason]||0)%2;
 record[reason]=(record[reason]||0)+1;record.last=day;delete record.outcome;
 v.lastDoorVisitDay=day;run.surpriseVisit=true;v.slot=slot;
 const knock=arrival==='return'?'저녁 일정을 마치고 집에 돌아왔다. 신발을 벗고 있는데 현관 초인종이 울렸다.':
  '집 안에서 현관 초인종 소리가 들렸다.';
 v.activeEvent={person:p,place:'home',day,slot,description:(activityNote?activityNote+'\n\n':'')+knock,
  doorVisit:{reason,gap,arrival,variant,...(repair?{repair}:{}),...(distanceDay!=null?{distanceDay}:{})}};
 save();renderChoiceEvent();return true;
}

function surpriseVisitCandidate(a,result){const v=initSim(),run=v.running;if(!run||run.slot<2||v.day>=365||[299,300].includes(v.day)||run.surpriseVisit||result.person||result.jobEvent||result.volunteer||!['출근','대학 수업','외주 작업','휴식','산책','러닝','PC방에서 게임하기','아르바이트',...Object.keys(partJobs)].includes(a))return null;if(a==='출근'&&run.plan[run.slot+1]==='출근')return null;const pool=lovers().filter(p=>{const z=socialRecord(p),c=touchContext(p,v.day),loc=npcPlace(p,(v.day-1)%7,run.slot,v.day);return socialRecord(p).contact&&v.day-coupleRecord(p).since>=5&&(!z.doorVisits?.last||v.day-z.doorVisits.last>=12)&&(!z.lastSurprise||v.day-z.lastSurprise>=14)&&z.lastTogether!==v.day&&!c.conflicted&&!c.tired&&!npcLifeBusy(p,v.day,run.slot)&&!['cafe','clinic','realty','police','dance'].includes(loc)&&!(p==='임하나'&&loc==='store')&&!(p==='한시우'&&loc==='pc')});if(!pool.length||Math.random()>.23)return null;pool.sort((a,b)=>(socialRecord(a).lastSurprise||0)-(socialRecord(b).lastSurprise||0));return pool[0]}
function startSurpriseVisit(a,result){const v=initSim(),p=surpriseVisitCandidate(a,result);if(!p)return false;const run=v.running;run.surpriseVisit=true;socialRecord(p).lastSurprise=v.day;const place=a==='출근'||a==='대학 수업'?'work':result.place||'home';v.activeEvent={person:p,place,day:v.day,description:a==='출근'?'퇴근길에 익숙한 얼굴이 보였다.':a==='대학 수업'?'수업을 마치고 나오니 익숙한 얼굴이 보였다.':a==='휴식'?'휴대전화에 잠깐 집 근처에서 만나자는 연락이 왔다.':'일정을 마치고 돌아가는 길에 익숙한 얼굴이 보였다.',surpriseVisit:{activity:a}};save();renderChoiceEvent();return true}
// Each resident speaks through the door first. Both registers are written independently.
const doorstepVoices={
 '서이준':{
  miss:[['…별일은 없어요. 그냥 얼굴이 가물가물해지려고 해서요. 잠깐 볼래요?','…별일은 없어. 그냥 얼굴이 가물가물해지려고 해서. 잠깐 볼래?'],['고양이 사진이 한 장 잘 나왔거든요. …보내면 되는데, 보여 주고 싶어서요.','고양이 사진이 한 장 잘 나왔거든. …보내면 되는데, 보여 주고 싶어서.']],
  worry:['…잘 지내요? 무슨 일 있나 싶어서요. 괜찮으면 목소리만 좀 들려줘요.','…잘 지내? 무슨 일 있나 싶어서. 괜찮으면 목소리만 좀 들려줘.'],
  repair:['…나예요. 지난번 얘기, 혼자 계속 곱씹었어요. 잠깐 들어 줄래요?','…나야. 지난번 얘기, 혼자 계속 곱씹었어. 잠깐 들어 줄래?'],
  admit:['기다렸어요. 먼저 와 주면 그때 얘기해야지, 하고. …그러면서 서운해한 건 미안해요.','기다렸어. 먼저 와 주면 그때 얘기해야지, 하고. …그러면서 서운해한 건 미안해.'],
  listen:['…네. 그런 줄 몰랐어요. 더 말해 줄래요? 이번엔 중간에 입 닫고 가 버리지 않을게요.','…응. 그런 줄 몰랐어. 더 말해 줄래? 이번엔 중간에 입 닫고 가 버리지 않을게.'],
  settled:['또 마음에 걸리면 그땐 내가 먼저 말할게요. 오늘 여기 와서 다행이에요.','또 마음에 걸리면 그땐 내가 먼저 말할게. 오늘 여기 와서 다행이야.'],
  visit:'이준은 휴대전화를 꺼내 동네 고양이가 하품하는 사진을 보여 줬다. 옆으로 넘겼더니 하품하기 직전부터 입을 다물 때까지 스무 장은 됐다.',
  care:['옆에 있을게요. 말 안 하고 있어도 잘 있어요, 나.','옆에 있을게. 말 안 하고 있어도 잘 있어, 나.'],
  brief:['…보니까 좋네요. 그럼 저 갈게요.','…보니까 좋네. 그럼 나 갈게.'],
  later:['…알았어요. 오늘은 그냥 갈게요.','…알았어. 오늘은 그냥 갈게.']
 },
 '강도윤':{
  miss:[['빵 사러 갔다가 두 개 골랐지 뭐예요. 같이 먹을 사람 얼굴도 못 본 지 꽤 됐는데. 잠깐 만날래요?','빵 사러 갔다가 두 개 골랐지 뭐야. 같이 먹을 사람 얼굴도 못 본 지 꽤 됐는데. 잠깐 만날래?'],['오늘은 빈손이에요. 뭐 갖다주는 핑계까지 대야 하나 싶어서요. 보고 싶었어요.','오늘은 빈손이야. 뭐 갖다주는 핑계까지 대야 하나 싶어서. 보고 싶었어.']],
  worry:['밥은 좀 챙겨 먹었어요? 요새 통 얼굴을 못 보니까, 괜찮은지 직접 물어보고 싶더라고요.','밥은 좀 챙겨 먹었어? 요새 통 얼굴을 못 보니까, 괜찮은지 직접 물어보고 싶더라.'],
  repair:['오늘은 웃고 넘어가기가 싫어서 왔어요. 우리 잠깐 이야기할 수 있어요?','오늘은 웃고 넘어가기가 싫어서 왔어. 우리 잠깐 얘기할 수 있어?'],
  admit:['괜찮은 척해 놓고 내 마음 알아주기만 바랐어요. 그건 내가 미안해요.','괜찮은 척해 놓고 내 마음 알아주기만 바랐어. 그건 내가 미안해.'],
  listen:['그랬군요. 내가 웃어넘기면 얘기 꺼내기 더 어려웠겠네요. 듣고 있어요.','그랬구나. 내가 웃어넘기면 얘기 꺼내기 더 어려웠겠다. 듣고 있어.'],
  settled:['다음엔 서운하면 좀 서운하다고 할게요. 나도 그 말 들을 준비 하고요.','다음엔 서운하면 좀 서운하다고 할게. 나도 그 말 들을 준비 하고.'],
  visit:'도윤이 모카 흉내를 냈다. 산책을 더 하고 싶을 때마다 저렇게 눈썹을 쓴다는데, 내가 한 번 더 해 달라고 조를 때마다 자기가 먼저 웃었다.',
  care:['그럼 옆에 있을게요. 물 한 잔만 가져올까요?','그럼 옆에 있을게. 물 한 잔만 가져올까?'],
  brief:['잠깐 봤는데도 좋네요. 들어가요.','잠깐 봤는데도 좋네. 들어가.'],
  later:['그럼 오늘은 이만 갈게요. 편하게 쉬어요.','그럼 오늘은 이만 갈게. 편하게 쉬어.']
 },
 '한시우':{
  miss:[['똑똑. 오늘의 깜짝 손님인데요. 아, 이런 인사는 좀 별로예요? 그냥 보고 싶어서 왔어요!','똑똑. 오늘의 깜짝 손님인데. 아, 이건 좀 별론가? 그냥 보고 싶어서 왔어!'],['오는 길에 엄청 웃긴 거 봤거든요. 근데 혼자 보니까 재미가 반밖에 안 나더라고요. 같이 볼래요?','오는 길에 엄청 웃긴 거 봤거든. 근데 혼자 웃으니까 재미가 반밖에 안 돼. 잠깐 볼래?']],
  worry:['나 왔어요. 한참 못 보니까 자꾸 안 좋은 쪽으로만 상상이 돼서. 오늘은 어때요?','나 왔어. 한참 못 보니까 자꾸 안 좋은 쪽으로만 상상이 돼서. 오늘은 어때?'],
  repair:['나 할 말 있어요. 농담 아니고, 직접 해야 할 것 같아서 왔어요.','나 할 말 있어. 농담 아니고, 직접 해야 할 것 같아서 왔어.'],
  admit:['서운한 걸 장난처럼 툭 던져 놓으면 좀 덜 민망하거든요. 듣는 사람은 영문도 모르는데. 미안해요.','서운한 걸 장난처럼 툭 던져 놓으면 좀 덜 민망하거든. 듣는 사람은 영문도 모르는데. 미안해.'],
  listen:['아, 그랬어요? 나 지금 진짜로 듣고 있어요. 끝까지 말해 줘요.','아, 그랬구나. 나 지금 진짜로 듣고 있어. 끝까지 말해 줘.'],
  settled:['다음엔 나도 숨지 말고 똑바로 말할게요. 오늘처럼요.','다음엔 나도 숨지 말고 똑바로 말할게. 오늘처럼.'],
  visit:'시우가 휴대전화에서 사진을 찾아냈다. 길에서 본 강아지가 주인과 똑같은 표정으로 신호를 기다리고 있었다. 둘이 사진을 번갈아 확대하며 한참 웃었다.',
  care:['옆에 있을게요. 조용히 있는 것도 할 줄 알거든요, 나.','옆에 있을게. 조용히 있는 것도 할 줄 알거든, 나.'],
  brief:['오, 얼굴 봤다. 이걸로 오늘 목적 달성! 나 갈게요.','오, 얼굴 봤다. 이걸로 오늘 목적 달성! 나 갈게.'],
  later:['오케이. 나 먼저 가요. 오늘은 푹 쉬어요.','오케이. 나 먼저 가. 오늘은 푹 쉬어.']
 },
 '정태오':{
  miss:[['약속 없이 찾아와서 놀라셨습니까? 얼굴이 보고 싶었습니다. 잠깐 뵈어도 되겠습니까?','약속 없이 찾아와서 놀랐어? 얼굴이 보고 싶었어. 잠깐 봐도 돼?'],['근처에 볼일이 있었던 건 아닙니다. 여기 오려고 나온 겁니다.','근처에 볼일이 있었던 건 아니야. 여기 오려고 나온 거야.']],
  worry:['요 며칠 못 뵈니 마음이 쓰였습니다. 불편한 곳은 없습니까?','요 며칠 못 보니 마음이 쓰였어. 불편한 덴 없어?'],
  repair:['기다리기만 해서는 안 될 것 같아 왔습니다. 제 말 잠깐 들어 주시겠습니까?','기다리기만 해서는 안 될 것 같아서 왔어. 내 말 잠깐 들어 줄래?'],
  admit:['제 입장을 정리하느라 정작 어떤 마음이었는지는 묻지 않았습니다. 미안합니다.','내 입장을 정리하느라 정작 어떤 마음이었는지는 묻지 않았어. 미안해.'],
  listen:['알겠습니다. 제가 놓친 게 또 있습니까? 마저 듣고 싶습니다.','알겠어. 내가 놓친 게 또 있어? 마저 듣고 싶어.'],
  settled:['앞으로는 짐작하는 대신 먼저 묻겠습니다. 얼굴 보고 이야기해서 다행입니다.','앞으로는 짐작하는 대신 먼저 물을게. 얼굴 보고 얘기해서 다행이야.'],
  visit:'태오는 컵을 두 손으로 쥐고 조카가 가르쳐 준 손가락 놀이를 설명했다. 순서가 기억나지 않는다더니 내가 틀리자 바로 웃으며 고쳐 줬다.',
  care:['곁에 있겠습니다. 필요한 게 있다면 그때 말씀해 주십시오.','곁에 있을게. 필요한 게 있으면 그때 말해 줘.'],
  brief:['시간 내 주셔서 고맙습니다. 저는 이만 가 보겠습니다.','시간 내 줘서 고마워. 난 이만 가 볼게.'],
  later:['알겠습니다. 오늘은 돌아가겠습니다.','알겠어. 오늘은 돌아갈게.']
 },
 '백지한':{
  miss:[['집 보러 왔다고 하면 문 열어 줄래요? …농담이에요. 여기 사는 사람이 보고 싶어서 왔어요.','집 보러 왔다고 하면 문 열어 줄래? …농담이야. 여기 사는 사람이 보고 싶어서 왔어.'],['보고 싶어서 왔어요. 오늘은 그럴듯한 핑계도 안 들고 왔는데, 잠깐 볼래요?','보고 싶어서 왔어. 오늘은 그럴듯한 핑계도 안 들고 왔는데, 잠깐 볼래?']],
  worry:['괜찮냐고 쓰다 지우길 몇 번 했어요. 얼굴 보면 그냥 물을 수 있을 것 같아서. 잘 있어요?','괜찮냐고 쓰다 지우길 몇 번 했어. 얼굴 보면 그냥 물을 수 있을 것 같아서. 잘 있어?'],
  repair:['나예요. 오늘은 말 예쁘게 해서 슬쩍 넘어갈 생각 없어요. 잠깐 괜찮아요?','나야. 오늘은 말 예쁘게 해서 슬쩍 넘어갈 생각 없어. 잠깐 괜찮아?'],
  admit:['내가 궁금했던 건 속마음인데, 막상 먼저 와 주는지만 보고 있었어요. 그러고 서운해해서 미안해요.','내가 궁금했던 건 속마음인데, 막상 먼저 와 주는지만 보고 있었어. 그러고 서운해해서 미안해.'],
  listen:['그 말 듣기가 겁나서 내가 자꾸 말을 돌렸나 봐요. 마저 해요. 듣고 싶어요.','그 말 듣기가 겁나서 내가 자꾸 말을 돌렸나 봐. 마저 해. 듣고 싶어.'],
  settled:['다음에도 보고 싶으면 내가 먼저 갈게요. 그땐 와도 되냐고 물어볼게요.','다음에도 보고 싶으면 내가 먼저 갈게. 와도 되는지는 물어보고.'],
  visit:'지한이 찻잔을 돌리며 오늘 본 오래된 집 얘기를 꺼냈다. 주방 기둥에 아이 셋의 키가 빼곡히 남아 있었다고 했다. 찻물이 식도록 서로 어렸을 때 살던 집 얘기를 했다.',
  care:['옆에 있을게요. 오늘은 내가 들어 줄 차례 같아서요.','옆에 있을게. 오늘은 내가 들어 줄 차례 같아서.'],
  brief:['좀 아쉽긴 한데, 그래도 보니까 좋네요. 들어가요.','좀 아쉽긴 한데, 그래도 보니까 좋네. 들어가.'],
  later:['알겠어요. 오늘은 여기까지. 나 갈게요.','알겠어. 오늘은 여기까지. 나 갈게.']
 },
 '임하나':{
  miss:[['저예요. 올까 말까 하다가 여기까지 왔는데… 그냥 가면 또 보고 싶을 것 같아서요.','나야. 올까 말까 하다가 여기까지 왔는데… 그냥 가면 또 보고 싶을 것 같아서.'],['오늘 재밌는 일이 있었어요. 문자로 쓰고 보니까 하나도 안 웃겨서… 그냥 제가 말해 주려고요.','오늘 재밌는 일이 있었어. 문자로 쓰고 보니까 하나도 안 웃겨서… 그냥 내가 말해 주려고.']],
  worry:['혼자 힘들 때 괜찮다고만 하고 넘어간 적이 많아서요, 제가. 혹시 그런 건가 싶어서 와 봤어요.','혼자 힘들 때 괜찮다고만 하고 넘어간 적이 많아서, 내가. 혹시 그런 건가 싶어서 와 봤어.'],
  repair:['잠깐 얘기할 수 있어요? 이번에도 집에서 할 말 연습만 하다간 얼굴 못 볼 것 같아서 왔어요.','잠깐 얘기할 수 있어? 이번에도 집에서 할 말 연습만 하다간 얼굴 못 볼 것 같아서 왔어.'],
  admit:['제가 참으면 된다 싶었는데 자꾸 마음에 남았어요. 아무 말도 안 하고 알아주길 바란 건 미안해요.','내가 참으면 된다 싶었는데 자꾸 마음에 남았어. 아무 말도 안 하고 알아주길 바란 건 미안해.'],
  listen:['…그동안 말하기 어려웠겠어요. 듣고 있어요. 천천히 말해 줘요.','…그동안 말하기 어려웠겠다. 듣고 있어. 천천히 말해 줘.'],
  settled:['다음에 또 말이 잘 안 나와도, 하고 싶은 말이 있다고는 꼭 얘기할게요.','다음에 또 말이 잘 안 나와도, 하고 싶은 말이 있다고는 꼭 얘기할게.'],
  visit:'하나는 과외를 하다 학생한테 말장난 퀴즈를 배웠다며 내게 문제를 냈다. 내가 세 번이나 틀리자 그제야 입을 가리고 소리 내 웃었다.',
  care:['그럼 옆에 있을게요. 저한테는 신경 안 써도 돼요.','그럼 옆에 있을게. 나한테는 신경 안 써도 돼.'],
  brief:['저도 오늘은 얼굴만 봐도 좋아요. 갈게요.','나도 오늘은 얼굴만 봐도 좋아. 갈게.'],
  later:['알겠어요. 무슨 일 있으면 그때 불러 줘요.','알겠어. 무슨 일 있으면 그때 불러 줘.']
 },
 '차유리':{
  miss:[['보고 싶어서 왔어요. 문자 쓰다가, 답 기다릴 시간에 그냥 내가 가자 싶었어요.','보고 싶어서 왔어. 이 말 문자로 써 놓고 답 기다리느니 내가 가자 싶어서.'],['오늘 묘하게 웃긴 간판을 봤는데, 딱 한 사람한테 보여 주고 싶더라고요. 잠깐 볼래요?','오늘 묘하게 웃긴 간판을 봤는데, 딱 한 사람한테 보여 주고 싶더라. 잠깐 볼래?']],
  worry:['요즘 잘 지내요? 별일 없으면 별일 없다는 소리라도 직접 듣고 싶어서 왔어요.','요즘 잘 지내? 별일 없으면 별일 없다는 소리라도 직접 듣고 싶어서 왔어.'],
  repair:['우리 지난 얘기, 나 혼자서는 영 마무리가 안 되네요. 얼굴 보고 얘기하고 싶어서 왔어요.','우리 지난 얘기, 나 혼자서는 영 마무리가 안 되네. 얼굴 보고 얘기하고 싶어서 왔어.'],
  admit:['내가 꺼내기 불편한 얘길 남도 못 꺼내는 건 똑같은데. 왜 나만 기다릴 생각을 했나 몰라요. 미안해요.','내가 꺼내기 불편한 얘길 남도 못 꺼내는 건 똑같은데. 왜 나만 기다릴 생각을 했나 몰라. 미안해.'],
  listen:['그래서 그랬군요. 내가 입 닫고 기다려야 하는 건 이럴 때였네요. 더 얘기해 줘요.','그래서 그랬구나. 내가 입 닫고 기다려야 하는 건 이럴 때였네. 더 얘기해 줘.'],
  settled:['다음엔 내가 먼저 얘기 꺼낼게요. 그때도 오늘처럼 솔직하게 말해 줘요.','다음엔 내가 먼저 얘기 꺼낼게. 그때도 오늘처럼 솔직하게 말해 줘.'],
  visit:'유리와 동네 간판 사진을 넘겨 봤다. 어떤 가게인지 글자 하나만 보고 맞히기로 했는데, 사진을 찍은 유리마저 정답을 틀렸다.',
  care:['옆자리 빌릴게요. 말하고 싶어지면 그때 말해요.','옆자리 빌릴게. 말하고 싶어지면 그때 말해.'],
  brief:['오늘은 이만큼만 봐도 좋네요. 다음에 또 봐요.','오늘은 이만큼만 봐도 좋네. 다음에 또 봐.'],
  later:['알았어요. 오늘은 각자 쉬기로 해요. 잘 있어요.','알았어. 오늘은 각자 쉬자. 잘 있어.']
 },
 '오세린':{
  miss:[['보고 싶어서 왔어요. 돌려 말하면 문 앞에 더 오래 서 있게 될 것 같아서요.','보고 싶어서 왔어. 돌려 말하면 문 앞에 더 오래 서 있게 될 것 같아서.'],['오늘 좀 일찍 손이 비었어요. 누구 얼굴 볼까 하는데 딱 한 사람 생각나더라고요.','오늘 좀 일찍 손이 비었어. 누구 얼굴 볼까 하는데 딱 한 사람 생각나더라.']],
  worry:['괜찮아요? 오늘은 내가 먼저 물어보고 싶었어요. 뭐가 좀 필요하면 말해 줄래요?','괜찮아? 오늘은 내가 먼저 물어보고 싶었어. 뭐가 좀 필요하면 말해 줄래?'],
  repair:['잠깐 얘기하고 싶어요. 내가 먼저 꺼내야 할 얘기 같아서 왔어요.','잠깐 얘기하고 싶어. 내가 먼저 꺼내야 할 얘기 같아서 왔어.'],
  admit:['내가 서운하다는 건 알았어요. 그런데 둘 사이에 생긴 일을 혼자 결론 내려 버렸네요. 미안해요.','내가 서운하다는 건 알았어. 그런데 둘 사이에 생긴 일을 혼자 결론 내려 버렸네. 미안해.'],
  listen:['알려 줘서 고마워요. 그때 무슨 마음이었는지, 내가 제대로 듣고 싶어요.','알려 줘서 고마워. 그때 무슨 마음이었는지, 내가 제대로 듣고 싶어.'],
  settled:['앞으로 마음에 걸리는 건 바로 물어볼게요. 오늘 이렇게 말해 줘서 고마워요.','앞으로 마음에 걸리는 건 바로 물어볼게. 오늘 이렇게 말해 줘서 고마워.'],
  visit:'세린과 냉장고에 붙일 장보기 목록을 썼다. 세린이 다 먹은 잼을 적다가 좋아하는 맛에 동그라미를 쳤다. 동그라미가 다섯 개였다.',
  care:['옆에 있을게요. 잠들어도 괜찮아요.','옆에 있을게. 잠들어도 괜찮아.'],
  brief:['그래요. 얼굴 보고 얘기하니까 좋네요. 잘 쉬어요.','그래. 얼굴 보고 얘기하니까 좋네. 잘 쉬어.'],
  later:['알겠어요. 오늘은 돌아갈게요. 필요하면 불러요.','알겠어. 오늘은 돌아갈게. 필요하면 불러.']
 },
 '유지안':{
  miss:[['잠깐 볼래요? 걷다가 여기까지 온 게 아니라 오늘은 처음부터 여기로 온 거예요.','잠깐 볼래? 걷다가 여기까지 온 게 아니라 오늘은 처음부터 여기로 온 거야.'],['있잖아요, 오늘 좀 보고 싶었어요. 또 길에서 마주칠 때까지 기다리는 건 너무 오래 걸리잖아요.','있잖아, 오늘 좀 보고 싶었어. 또 길에서 마주칠 때까지 기다리는 건 너무 오래 걸리잖아.']],
  worry:['오늘은 같이 어디 가자고 안 할게요. 잘 지내는지 그거 하나 물어보러 왔어요.','오늘은 같이 어디 가자고 안 할게. 잘 지내는지 그거 하나 물어보러 왔어.'],
  repair:['지금 괜찮아요? 좀 어색하더라도 얼굴 보고 말하고 싶어서 왔어요.','지금 괜찮아? 좀 어색하더라도 얼굴 보고 말하고 싶어서 왔어.'],
  admit:['서운하긴 했어요. 근데 가만 보면 나도 한 발짝을 안 움직이고 있었더라고요. 미안해요.','서운하긴 했어. 근데 가만 보면 나도 한 발짝을 안 움직이고 있었더라. 미안해.'],
  listen:['그럴 수 있죠. 아니, 그렇게만 말하지 말고 제대로 들을게요. 뭐가 제일 서운했어요?','그럴 수 있지. 아니, 그렇게만 말하지 말고 제대로 들을게. 뭐가 제일 서운했어?'],
  settled:['다음엔 둘 중 누가 먼저 오나 기다리지 말아요, 우리. 나도 먼저 갈게요.','다음엔 둘 중 누가 먼저 오나 기다리지 말자, 우리. 나도 먼저 갈게.'],
  visit:'지안이 동네에서 먹어 본 붕어빵 중에 뭐가 제일 맛있는지 물었다. 나는 팥, 지안은 슈크림. 결국 어느 쪽이든 꼬리부터 먹는다는 데서 의견이 맞았다.',
  care:['그럼 오늘은 옆에 딱 붙어 있을게요. 어디 갈 일 없어요.','그럼 오늘은 옆에 딱 붙어 있을게. 어디 갈 일 없어.'],
  brief:['좋아요. 나 오늘 이 인사 하러 온 거예요. 다음에 또 봐요!','좋아. 나 오늘 이 인사 하러 온 거야. 다음에 또 봐!'],
  later:['그럴게요. 다음에 얼굴 봐요.','그럴게. 다음에 얼굴 보자.']
 },
 '공재희':{
  miss:[['뭐 해요? 나 지금 현관 앞이에요. 깜짝 이벤트냐고요? 그냥 내가 보고 싶어서 왔어요.','뭐 해? 나 지금 현관 앞인데. 깜짝 이벤트냐고? 아니, 그냥 내가 보고 싶어서.'],['누구게요? …아, 목소리 내면 너무 쉽잖아요. 보고 싶어서 왔는데 잠깐 볼래요?','누구게. …목소리 내면 너무 쉽잖아. 보고 싶어서 왔는데 잠깐 볼래?']],
  worry:['진짜 잘 있는 거 맞아요? 별일도 없는데 온 거면 나야 그게 제일 좋아요.','진짜 잘 있는 거 맞아? 별일도 없는데 왔으면 그게 제일 좋고.'],
  repair:['오늘은 먼저 말 건 쪽이 지는 걸로 안 칠래요. 나 얘기하고 싶어서 왔어요.','오늘은 먼저 말 건 쪽이 지는 걸로 안 칠래. 나 얘기하고 싶어서 왔어.'],
  admit:['나 삐쳤다고 티 내면 먼저 와 줄 줄 알았어요. 솔직히 좀 치사했죠. 미안해요.','나 삐쳤다고 티 내면 먼저 와 줄 줄 알았어. 솔직히 좀 치사했지. 미안해.'],
  listen:['아… 그건 진짜 몰랐어요. 나도 입 꾹 다물고 있었으면서요. 더 얘기해 줘요.','아… 그건 진짜 몰랐어. 나도 입 꾹 다물고 있었으면서. 응, 더 얘기해 봐.'],
  settled:['나 다음엔 보고 싶다고 바로 말할래요. 괜히 삐친 척하면 오늘 얘기 꺼내도 돼요.','나 다음엔 보고 싶다고 바로 말할래. 괜히 삐친 척하면 오늘 얘기 꺼내도 돼.'],
  visit:'재희가 휴대전화 속 사진을 내밀었다. 인형뽑기 집게 끝에 아슬아슬하게 걸린 토끼였다. 잡혔을지 떨어졌을지 맞히기 전까진 절대 다음 사진을 안 보여 줬다.',
  care:['그럼 여기 있을래요. 몇 분이나 조용히 있나 시간 재기 없기예요.','그럼 여기 있을래. 조용히 있는 거 몇 분이나 가나 재기 없기.'],
  brief:['이렇게 얼굴 보니까 됐어요. 그럼 나 진짜 가요?','이렇게 얼굴 보니까 됐어. 그럼 나 진짜 간다?'],
  later:['알겠어요. 나 그럼 갈게요.','웅, 알았어. 나 그럼 갈게.']
 }
};

// On an unexpected reunion, residents can also hear that the player has missed them.
const doorstepMeetingReplies={
 '서이준':['…나도 기다리기만 했네. 보고 싶으면 먼저 보러 와도 되는데. 앞으로는 그럴게요.','…나도 기다리기만 했네. 보고 싶으면 먼저 보러 와도 되는데. 앞으로는 그럴게.'],
 '강도윤':['그러게요. 올 때마다 그렇게 반가워해 놓고 나는 왜 한 번 나설 생각을 못 했지. 늦어서 미안해요.','그러게. 올 때마다 그렇게 반가워해 놓고 나는 왜 한 번 나설 생각을 못 했지. 늦어서 미안해.'],
 '한시우':['그랬어요? 난 엄청 티 냈다고 생각했는데, 티만 냈구나. 다음에도 보고 싶으면 내가 올게요.','그랬어? 난 엄청 티 냈다고 생각했는데, 티만 냈구나. 다음에도 보고 싶으면 내가 올게.'],
 '정태오':['찾아가면 폐가 될까 싶었습니다. 기다리는 사람 마음까지는 생각 못 했습니다. 다음엔 먼저 묻겠습니다.','찾아가면 폐가 될까 싶었어. 기다리는 사람 마음까지는 생각 못 했어. 다음엔 먼저 물을게.'],
 '백지한':['기다리고 있었어요? 솔직히 그 말은 좀 기쁜데, 오래 기다리게 한 건 미안해요. 다음엔 내가 먼저 물어볼게요.','기다리고 있었어? 솔직히 그 말은 좀 기쁜데, 오래 기다리게 한 건 미안해. 다음엔 내가 먼저 물어볼게.'],
 '임하나':['제가 가면 방해될까 봐 망설였어요. 저도 보고 싶었는데. 다음엔 혼자 고민 말고 먼저 물어볼게요.','내가 가면 방해될까 봐 망설였어. 나도 보고 싶었는데. 다음엔 혼자 고민 말고 먼저 물어볼게.'],
 '차유리':['그랬군요. 둘 다 기다리고 있었다는 걸 이제야 알았네요. 미안해요.','그랬구나. 둘 다 기다리고 있었다는 걸 이제야 알았어. 미안해.'],
 '오세린':['그렇게 느낄 만해요. 나도 보고 싶었어요. 그걸 말해 줘야 알 텐데 너무 늦게 왔네요.','그렇게 느낄 만해. 나도 보고 싶었어. 그걸 말해 줘야 알 텐데 너무 늦게 왔네.'],
 '유지안':['아, 나도 찾아가는 거 좋아하면서 왜 그것만 기다렸지. 오래 기다리게 해서 미안해요.','아, 나도 찾아가는 거 좋아하면서 왜 그것만 기다렸지. 오래 기다리게 해서 미안해.'],
 '공재희':['나도 기다렸단 말이 목까지 올라왔는데, 생각해 보면 먼저 오게 만든 건 나잖아요. 다음번에도 내가 먼저 찾아올래요.','나도 기다렸단 말이 목까지 올라왔는데, 생각해 보면 먼저 오게 만든 건 나잖아. 다음번에도 내가 먼저 찾아올래.']
};
const doorstepJealousVoices={
 '서이준':['…다른 사람이랑 만났다는 얘기, 자꾸 신경 쓰였어요. 혼자 짐작하기 전에 물어보고 싶어서요.','…다른 사람이랑 만났다는 얘기, 자꾸 신경 쓰였어. 혼자 짐작하기 전에 물어보고 싶어서.'],
 '강도윤':['다른 사람이랑 나갔다는 얘기 듣고 내가 좀 서운했어요. 얼굴 보고 솔직하게 말하고 싶었어요.','다른 사람이랑 나갔다는 얘기 듣고 내가 좀 서운했어. 얼굴 보고 솔직하게 말하고 싶었어.'],
 '한시우':['질투 좀 났어요, 나. 남이랑 놀았다는 얘기에. 괜히 농담처럼 말 안 하고 오늘은 똑바로 말하려고 왔어요.','질투 좀 났어, 나. 남이랑 놀았다는 얘기에. 괜히 농담처럼 말 안 하고 오늘은 똑바로 말하려고 왔어.'],
 '정태오':['다른 분과 만났다는 얘기를 듣고 마음에 걸렸습니다. 혼자 추측하고 싶지 않아 왔습니다.','다른 사람이랑 만났다는 얘기를 듣고 마음에 걸렸어. 혼자 추측하고 싶지 않아서 왔어.'],
 '백지한':['다른 사람이랑 보낸 시간이 자꾸 마음에 걸려요. 우습죠? 혼자 셈하고 있는 게 싫어서 왔어요.','다른 사람이랑 보낸 시간이 자꾸 마음에 걸려. 우습지? 혼자 셈하고 있는 게 싫어서 왔어.'],
 '임하나':['다른 사람이랑 만났다는 얘기 듣고 제가 조금 서운했어요. 혼자 속 끓이지 말고 얘기해 보고 싶었어요.','다른 사람이랑 만났다는 얘기 듣고 내가 조금 서운했어. 혼자 속 끓이지 말고 얘기해 보고 싶었어.'],
 '차유리':['나 좀 질투했나 봐요. 다른 사람이랑 다녀왔다는 얘기가 자꾸 생각나서요. 나 혼자만 얘기를 키우긴 싫었어요.','나 좀 질투했나 봐. 다른 사람이랑 다녀왔다는 얘기가 자꾸 생각나서. 나 혼자만 얘기를 키우긴 싫었어.'],
 '오세린':['다른 사람이랑 보낸 시간이 나도 모르게 신경 쓰였어요. 이 얘기는 얼굴 보고 하고 싶었어요.','다른 사람이랑 보낸 시간이 나도 모르게 신경 쓰였어. 이 얘기는 얼굴 보고 하고 싶었어.'],
 '유지안':['다른 사람이랑 놀았다는 얘길 듣고 내가 좀 샘났어요. 그걸 혼자만 들고 있기는 싫어서 왔어요.','다른 사람이랑 놀았다는 얘길 듣고 내가 좀 샘났어. 그걸 혼자만 들고 있기는 싫어서 왔어.'],
 '공재희':['다른 사람이랑 놀았다는 얘기에 나 좀 질투 났어요. 태연한 척해도 안 되던데요. 그래서 왔어요.','다른 사람이랑 놀았다는 얘기에 나 좀 질투 났어. 태연한 척해도 안 되던데. 그래서 왔어.']
};
const doorstepParting={
 '서이준':{
  miss:['…다음에 사진 잘 나온 거 있으면 또 보여 줄게요. 직접.','…다음에 사진 잘 나온 거 있으면 또 보여 줄게. 직접.'],
  ask:['…옆에 있는 게 나아요, 좀 쉴래요?','…옆에 있는 게 나아, 좀 쉴래?'],
  pause:['…알았어요. 늦게 말해도 들을게요.','…알았어. 늦게 말해도 들을게.']
 },
 '강도윤':{
  miss:['그렇게 웃는 거 보려고 왔나 봐요. 이제야 좀 본 것 같네요.','그렇게 웃는 거 보려고 왔나 봐. 이제야 좀 본 것 같네.'],
  ask:['내가 해 줄 수 있는 거 있어요? 그냥 옆에 있어도 되고요.','내가 해 줄 수 있는 거 있어? 그냥 옆에 있어도 되고.'],
  pause:['그럼요. 내 마음 편하자고 얼른 괜찮아지라고 하면 안 되죠.','그럼. 내 마음 편하자고 얼른 괜찮아지라고 하면 안 되지.']
 },
 '한시우':{
  miss:['봐요. 혼자 볼 때보다 훨씬 재밌다니까요!','봐. 혼자 볼 때보다 훨씬 재밌다니까!'],
  ask:['내가 어떻게 해 주면 좋겠어요? 원하는 거 하나만 말해 봐요.','내가 어떻게 해 주면 좋겠어? 원하는 거 하나만 말해 봐.'],
  pause:['오케이. 내가 먼저 왔다고 오늘 꼭 대답해 달라는 건 아니에요.','오케이. 내가 먼저 왔다고 답도 오늘 달라는 건 아니니까.']
 },
 '정태오':{
  miss:['다음에 올 때는 다른 놀이도 하나 배워 오겠습니다.','다음에 올 때는 다른 놀이도 하나 배워 올게.'],
  ask:['필요한 게 있습니까? 곁에 있어도 되겠습니까?','필요한 게 있어? 곁에 있어도 돼?'],
  pause:['알겠습니다. 서두르지 않겠습니다.','알겠어. 서두르지 않을게.']
 },
 '백지한':{
  miss:['다음엔 어떤 집에 살고 싶은지도 들려줘요. 나도 한번 같이 상상해 보고 싶어요.','다음엔 어떤 집에 살고 싶은지도 들려줘. 그건 나도 좀 같이 상상해 보게.'],
  ask:['오늘 내가 조금 더 있어도 돼요? 혼자가 편하면 그렇게 말해도 돼요.','오늘 내가 조금 더 있어도 돼? 혼자가 편하면 그렇게 말해도 돼.'],
  pause:['그래요. 오늘은 내가 기다릴게요.','그래. 오늘은 내가 기다릴게.']
 },
 '임하나':{
  miss:['그렇게 웃어 주니까 오길 잘했다 싶어요.','그렇게 웃어 주니까 오길 잘했다 싶어.'],
  ask:['혹시 제가 해 줬으면 하는 거 있어요?','혹시 내가 해 줬으면 하는 거 있어?'],
  pause:['네. 저도 쉽게 꺼낼 수 있는 말은 아니었어요. 천천히 생각해요.','응. 나도 쉽게 꺼낼 수 있는 말은 아니었어. 천천히 생각해.']
 },
 '차유리':{
  miss:['다음엔 맞힐 자신 있어요. 그러니까 다음 문제는 나중에 여기서 또 풀어요.','다음엔 맞힐 자신 있어. 그러니까 다음 문제는 나중에 여기서 또 풀자.'],
  ask:['여기 좀 더 있을까요? 혼자 쉬는 게 낫겠어요?','여기 좀 더 있을까? 혼자 쉬는 게 낫겠어?'],
  pause:['그럼 오늘 여기까지만 해요. 다음 얘기는 둘 다 마음 편할 때요.','그럼 오늘 여기까지만 하자. 다음 얘기는 둘 다 마음 편할 때.']
 },
 '오세린':{
  miss:['아니, 딸기잼이랑 라즈베리잼은 다르잖아요. 다음엔 내가 한 병 가져올게요.','아니, 딸기잼이랑 라즈베리잼은 다르잖아. 다음엔 내가 한 병 가져올게.'],
  ask:['옆에 있어 주는 거랑 혼자 푹 쉬는 거, 지금은 어느 쪽이 더 좋아요?','옆에 있어 주는 거랑 혼자 푹 쉬는 거, 지금은 어느 쪽이 더 좋아?'],
  pause:['그럴게요. 지금 할 수 있는 만큼만 얘기해 줘도 돼요.','그럴게. 지금 할 수 있는 만큼만 얘기해 줘도 돼.']
 },
 '유지안':{
  miss:['다음에 붕어빵집 보이면 내가 하나씩 살게요. 앉아서 먹어요, 우리.','다음에 붕어빵집 보이면 내가 하나씩 살게. 앉아서 먹자, 우리.'],
  ask:['조금 더 있을까요? 쉬고 싶으면 그렇다고 얘기해도 돼요.','조금 더 있을까? 쉬고 싶으면 그렇다고 얘기해도 돼.'],
  pause:['알겠어요. 속도까지 맞추라고 하면 안 되죠.','알겠어. 속도까지 맞추라고 하면 안 되지.']
 },
 '공재희':{
  miss:['정답 사진은 이거! 아, 이 표정 보려고 나 오늘 찾아온 거였나 봐요.','정답 사진은 이거! 아, 이 표정 보려고 나 오늘 찾아온 거였나 봐.'],
  ask:['나 옆에 있을까요? 혼자가 좋으면 삐치지 않고 갈 수 있어요. 진짜.','나 옆에 있을까? 혼자가 좋으면 삐치지 않고 갈 수 있어. 진짜.'],
  pause:['알겠어요. 오늘 대답 재촉 안 할게요. 내 말 들어 준 거 고마워요.','웅. 오늘 대답 재촉 안 할게. 내 말 들어 준 거 고마워.']
 }
};

function renderDoorVisit(ev){
 const v=initSim(),p=ev.person,o=ev.doorVisit,day=ev.day;
 const voice=doorstepVoices[p],parting=doorstepParting[p],reason=o.reason,repair=reason==='repair',worry=reason==='worry';
 const personal=repair&&o.repair?.type==='personal',jealous=repair&&o.repair?.kind==='jealous';
 const npc=speechRegisterIndex(p,'npc',day),pc=speechRegisterIndex(p,'player',day);
 const you=(formal,casual)=>pc?casual:formal;
 const they=(formal,casual)=>npc?casual:formal;
 const turn=addressTurn(p,day);
 let opening=repair?voice.repair[npc]:worry?voice.worry[npc]:voice.miss[o.variant===1?1:0][npc];
 if(personal)opening=they('그 가게 얘기요. 내 그림으로 채워 보면 어떻겠냐고 했던 거. 다시 얘기하고 싶어서 왔어요.','그 가게 얘기. 내 그림으로 채워 보면 어떻겠냐고 했던 거. 다시 얘기하고 싶어서 왔어.');
 else if(jealous)opening=doorstepJealousVoices[p][npc];
 const choices={
  inside:repair?you('들어와요. 앉아서 얘기해요.','들어와. 앉아서 얘기하자.'):you('들어올래요? 좀 있다 가요.','들어올래? 좀 있다 가.'),
  door:repair?you('안에 들어가진 말고 여기서 얘기해요.','안에 들어가진 말고 여기서 얘기하자.'):you('나갈게요. 문 앞에서 잠깐 얼굴 봐요.','나갈게. 문 앞에서 잠깐 얼굴 보자.'),
  later:repair?you('오늘은 얘기하기 어려워요. 다음에 얘기해요.','오늘은 얘기하기 어려워. 다음에 얘기하자.'):you('오늘은 혼자 있고 싶어요. 다음에 봐요.','오늘은 혼자 있고 싶어. 다음에 보자.'),
  waited:you('저도 기다렸어요. 늘 제가 먼저 보러 가는 것 같았거든요.','나도 기다렸어. 늘 내가 먼저 보러 가는 것 같았거든.'),
  hurt:personal?you('그날 저도 서운했어요. 그런 뜻으로 한 말은 아니었거든요.','그날 나도 서운했어. 그런 뜻으로 한 말은 아니었거든.'):you('저도 서운했어요. 제 얘기도 들어 줄래요?','나도 서운했어. 내 얘기도 들어 줄래?'),
  reconcile:personal?you('그땐 제가 너무 쉽게 말했어요. 우리 이제 화해할래요?','그땐 내가 너무 쉽게 말했어. 우리 이제 화해할래?'):you('먼저 와 줘서 고마워요. 우리 화해할래요?','먼저 와 줘서 고마워. 우리 화해할래?'),
  pause:you('얘기해 줘서 고마워요. 마음 풀릴 때까지 시간이 좀 필요해요.','얘기해 줘서 고마워. 마음 풀릴 때까지 시간이 좀 필요해.'),
  stay:you('조금만 옆에 있어 줄래요?','조금만 옆에 있어 줄래?'),
  rest:you('와 줘서 마음이 놓여요. 이제 좀 혼자 쉴게요.','와 줘서 마음이 놓여. 이제 좀 혼자 쉴게.')
 };
 const inviteKey=turn%3===1?'inside':'waited';
 if(turn%3!==0)choices[inviteKey]=spokenCall(p,'player',day,choices[inviteKey]);
 let admission=voice.admit[npc],heard=voice.listen[npc],accepted=voice.settled[npc];
 if(personal){
  admission=they('그날 내가 좀 날카로웠죠. 가게를 열어서 월세를 낼 수 있을까, 그런 걱정을 하던 참이었어요. 좋은 뜻으로 한 말인 거 알아요.','그날 내가 좀 날카로웠지. 가게를 열어서 월세를 낼 수 있을까, 그런 걱정을 하던 참이었어. 좋은 뜻으로 한 말인 거 알아.');
  heard=they('알아요. 나한테 신나서 그림 얘기해 줬는데 내가 찬물 끼얹은 거잖아요. 미안해요.','알아. 나한테 신나서 그림 얘기해 줬는데 내가 찬물 끼얹은 거잖아. 미안해.');
  accepted=they('그래요. 사실 나도 내 그림 걸어 둔 가게, 한 번쯤은 상상해 봤어요. 다음에 그 얘기 또 해요.','그래. 사실 나도 내 그림 걸어 둔 가게, 한 번쯤은 상상해 봤어. 다음에 그 얘기 또 하자.');
 }
 const approach=o.approach,spoke=!!o.spokeHurt;
 const live=()=>v.activeEvent===ev&&v.day===day;
 const canChoose=()=>live()&&!o.outcome&&o.approach===approach&&!!o.spokeHurt===spoke;
 function choose(key,action){
  choiceButton(choices[key],()=>{
   if(!canChoose())return;
   action();
   save();renderChoiceEvent();renderSim();
  });
 }
 function closeVisit(outcome,key,reply){
  o.outcome=outcome;o.finalLabel=choices[key];o.finalReply=reply;
  applyDoorVisitOutcome(ev,outcome);
 }
 $('where').textContent='연화빌라 · 우리 집';
 $('progress').textContent=repair?'문 앞에서 꺼낸 이야기':worry?'안부를 물으러 온 손님':'보고 싶어서 온 손님';
 add(p,turn%3!==2?spokenCall(p,'npc',day,opening):opening);
 if(!repair&&!worry&&spoke){
  add(state.name,choices.waited,true);
  add(p,doorstepMeetingReplies[p][npc]);
 }
 if(!approach){
  for(const key of ['inside','door','later']){
   choose(key,()=>{
    o.approach=key;
    if(key==='later')closeVisit('later',key,voice.later[npc]);
    else if(key==='door'&&!repair)closeVisit('brief',key,voice.brief[npc]);
    else if(!repair&&!worry)closeVisit('stay',key,parting.miss[npc]);
   });
  }
  if(!repair&&!worry&&!spoke)choose('waited',()=>{o.spokeHurt=true});
  return;
 }
 add(state.name,choices[approach],true);
 if(approach==='later'){
  add(p,o.finalReply);
  add('이야기','짧은 인사 뒤에 복도를 따라 발소리가 멀어졌다.');
 }else{
  add('이야기',approach==='inside'?'현관문을 활짝 열고 안으로 안내했다. 마주 앉으니 복도의 소음이 한결 멀게 들렸다.':'문을 열었다. 우리는 현관 앞에 잠시 마주 섰다.');
  if(repair){
   add(p,admission);
   const expected=o.repair,issue=v.couple?.[p]?.issue?.active;
   let fightDay=0;
   if(expected?.type==='couple'&&issue&&issue.kind===expected.kind&&issue.day===expected.day)
    fightDay=heatedCoupleArgumentDay(p,issue);
   else if(expected?.type==='hurt'&&memoryFor(p).heatedHurtDay===expected.day)
    fightDay=expected.day;
   if(renderArgumentAftermath(ev,expected?.type,fightDay,!o.outcome))return;
   if(spoke){
    add(state.name,choices.hurt,true);
    add(p,heard);
    add('이야기',personal?'그날 내 말이 어디에서 어긋났는지부터 이야기를 다시 꺼냈다. 유리는 중간에 말을 끊지 않았다.':
     '어디서부터 서운했는지 내 쪽 이야기도 꺼냈다. 이야기가 끝날 때까지 상대는 조용히 들어 줬다.');
   }
   if(!o.outcome){
    if(!spoke)choose('hurt',()=>{o.spokeHurt=true});
    choose('reconcile',()=>closeVisit('reconcile','reconcile',accepted));
    choose('pause',()=>closeVisit('pause','pause',parting.pause[npc]));
    return;
   }
   add(state.name,o.finalLabel,true);add(p,o.finalReply);
  }else if(worry&&approach==='inside'){
   add(p,parting.ask[npc]);
   if(!o.outcome){
    choose('stay',()=>closeVisit('stay','stay',voice.care[npc]));
    choose('rest',()=>closeVisit('rest','rest',voice.later[npc]));
    return;
   }
   add(state.name,o.finalLabel,true);add(p,o.finalReply);
   add('이야기',o.outcome==='stay'?'잠깐 눈을 감았다. 옆에서 컵 내려놓는 소리가 났다. 애써 대화를 이어 가지 않아도 괜찮았다.':'현관에서 짧게 인사를 나누고 들어왔다. 혼자 쉬고 싶다는 말을 그대로 들어 줘서 마음이 편했다.');
  }else if(approach==='door'){
   add(p,o.finalReply);
   add('이야기','짧게 안부를 나누고 손을 흔들었다. 오늘은 그걸로 인사가 됐다.');
  }else{
   add('이야기',voice.visit);add(p,o.finalReply);
  }
 }
 if(o.growthText)add('시스템',o.growthText);
 choiceButton('일정 계속하기',()=>{if(live()&&o.outcome)finishEvent()});
}

function renderSurpriseVisit(ev){const v=initSim(),p=ev.person,o=ev.surpriseVisit,a=surpriseVisitVoices[p];$('progress').textContent='뜻밖의 만남 · '+a[0];add('이야기',a[1]);add(p,a[2]);if(o.answer){add(state.name,o.answer.label,true);add(p,o.answer.reply);if(o.answer.stay){add('이야기',a[5]);add(p,a[6])}choiceButton('일정 계속하기',finishEvent);return}for(const [label,reply,stay] of [[a[3],a[4],true],['잠깐 인사만 하고 갈게요.',a[7],false],['오늘은 조금 바빠요. 다음에 봐요.',a[7],false]])choiceButton(label,()=>{if(o.answer)return;o.answer={label,reply,stay};const z=socialRecord(p);z.lastSeen=v.day;if(stay){z.lastTogether=v.day;v.affection[p]=Math.min(999,v.affection[p]+2);feel(p,{security:2});if(v.running)v.running.notes.push(p+'와 잠깐 함께 시간을 보냈다.')}remember(p,'surpriseVisit:'+v.day,label+' / '+reply);writeJournal(p+' · '+a[0]);save();renderChoiceEvent();renderSim()})}

function meetNeighborAfterActivity(activity,result){
  const v=initSim(),p='서이준';
  if(npcPlace(p,(v.day-1)%7,v.slot,v.day)!=='home')return false;
  if(v.day-(v.neighborMeetingDay??-2)<4||socialRecord(p).lastSeen===v.day||Math.random()>=0.35)return false;
  const atHome=result.place==='home';
  const scenes=v.slot===0?(atHome?['현관 앞에 놓인 우편물을 주우려는데 옆집 문이 열린다. 서이준이 열쇠를 챙겨 나온다.','빈 병을 들고 내려간 계단참에서 서이준과 눈이 마주친다.']:['나갈 채비를 하고 문을 여는데, 203호에서도 열쇠 돌아가는 소리가 난다. 서이준이 한발 먼저 계단을 내려간다.']):(atHome?['빈 상자를 접어 들고 나오니 서이준이 공동 현관을 잡아 준다.','우편함 앞에서 서이준과 마주친다. 그는 자기 우편물을 한쪽으로 모아 옆자리를 내준다.']:['빌라로 돌아오니 서이준이 우편함을 닫고 있다. 뒤따라오는 발소리에 그가 고개를 돌린다.']);
  v.neighborMeetingDay=v.day;
  v.met[p]=true;
  const scene=scenes[(v.neighborSceneIndex||0)%scenes.length];
  v.neighborSceneIndex=(v.neighborSceneIndex||0)+1;
  showEvent('home',result.note+'\n\n'+scene,p,activity);
  return true;
}
function advanceDay(){const v=initSim(),run=v.running;if(!run)return;repairPendingPlan(v);syncSchedule();while(run.slot<4){v.slot=run.slot;const d=dateBook()[v.day];
 if(tickPressureTexts(v,v.day,run.slot)){
  if(!run.pressureTextNotice){run.notes.push('휴대전화 · 새 문자가 도착했다.');run.pressureTextNotice=true}
  save();phoneBadge();
 }
 const booked=d?.slot===run.slot;
 const a=booked?'약속':run.plan[run.slot]==='약속'?planFor(v.day)[run.slot]:run.plan[run.slot];
 run.plan[run.slot]=a;
 if(booked){run.doorBooked=true;if(!d.trip&&!d.group&&d.npcLifeSupport==null&&unresolvedOutingConflict(d.p)){cancelConflictOutings(d.p);run.notes.push('외출 취소 · 아직 풀리지 않은 갈등');run.slot++;continue}if(d.trip){if(tripStart(d,run))return;run.slot++;continue}if(d.sharedLife){
 delete dateBook()[v.day];
 const cost=d.sharedLife==='home'?0:6000;
 const reasons=[];
 if(v.energy<5)reasons.push('체력 부족 ('+v.energy+'/5)');
 if(v.money<cost)reasons.push('비용 부족 ('+cost.toLocaleString()+'원 필요)');
 if(d.sharedLife==='home'&&run.slot!==3)reasons.push('함께 비는 저녁 시간이 없었음');
 else if(!sharedLifeSlotFree(d.p,v.day,run.slot,d.sharedLife))reasons.push('예약한 시간에 함께하기 어려움');
 if(reasons.length){run.notes.push(sharedLifeKinds[d.sharedLife]+' 취소 · '+reasons.join(' / '));run.slot++;continue}v.money-=cost;v.energy-=5;run.notes.push(d.p+' · '+sharedLifeKinds[d.sharedLife]);v.activeEvent={place:d.sharedLife==='shopping'?'store':'home',person:d.p,day:v.day,description:'함께 보내기로 한 평범한 하루.',sharedLife:{kind:d.sharedLife}};save();renderChoiceEvent();return}if(d.friendOuting){delete dateBook()[v.day];if(v.energy<10||v.money<10000||!friendBookingSlots(d.p,v.day,false).includes(run.slot)){run.notes.push('친구 외출 취소 · 일정 또는 체력·비용 부족');run.slot++;continue}v.energy-=10;v.money-=10000;run.notes.push(d.p+' · 친구 외출');v.activeEvent={place:'home',person:d.p,day:v.day,description:'친구와 함께 외출했다.',friendScene:{kind:'outing'}};save();renderChoiceEvent();return}if(d.npcLifeSupport!==undefined){const a=npcLifeEvents[d.p]?.[d.npcLifeSupport];delete dateBook()[v.day];if(!a||v.energy<5||fixedActivity(v.day,run.slot)){run.notes.push('응원 일정 취소 · 일정 또는 체력 부족');run.slot++;continue}v.energy-=5;run.notes.push(d.p+' · '+a[2]+' 응원');v.activeEvent={place:a[5],person:d.p,day:v.day,description:'약속한 응원 일정이다.',npcLifeSupport:{i:d.npcLifeSupport}};save();renderChoiceEvent();return}if(d.group){
 delete dateBook()[v.day];
 const venue=groupOutingVenues.includes(d.venue)?d.venue:'연화천 산책';
 if(d.group.length!==2||!groupBookingSlots(d.group,v.day,false).includes(run.slot)){
  run.notes.push('함께하는 외출 취소 · 일정 또는 관계 변경');run.slot++;continue;
 }
 if(v.money<20000||v.energy<10){
  run.notes.push('함께하는 외출 취소 · 비용 또는 체력 부족');run.slot++;continue;
 }
 v.money-=20000;v.energy-=10;
 run.notes.push(d.group.join('·')+' · '+venue+' 함께하는 데이트 (-20,000원)');
 v.activeEvent={place:groupOutingScenes[venue].place,person:d.group[0],groupPartners:d.group.slice(),venue,
  invitedVia:d.invitedVia||null,day:v.day,slot:run.slot,
  description:d.group.includes(d.invitedVia)?'먼저 연락했던 '+d.invitedVia+' 옆에 서서 손을 흔들었다. 멀리서 다른 한 사람도 우리를 알아보고 다가왔다.':'모두의 동의로 잡은 약속 날이다.'};
 save();renderChoiceEvent();return
}if(v.money<20000||v.energy<10){run.notes.push('외출 약속 취소 · 비용 또는 체력 부족');delete dateBook()[v.day];run.slot++;continue}v.money-=20000;v.energy-=10;run.notes.push(d.p+' · '+dateVenue(d.p,d.venue)+' 외출 (-20,000원)');v.activeEvent={person:d.p,place:'home',description:dayLabels[run.slot]+' 약속 시간에 맞춰 도착했다.',venue:dateVenue(d.p,d.venue),day:v.day,slot:run.slot,dateEvent:true,dateDisclosed:!!d.disclosed,answered:false};socialRecord(d.p).lastSeen=v.day;delete dateBook()[v.day];save();renderChoiceEvent();return}if(a==='자유외출'){const h=healthRecord();h.fatigue=Math.min(100,h.fatigue+4);run.outing=true;save();drawTown();switchTab('map');return}const result=runActivity(a);run.notes.push(dayLabels[run.slot]+' · '+result.note);if(result.volunteer){v.activeEvent={place:'park',day:v.day,description:'봉사활동에 참여했다.',volunteerEvent:{guests:volunteerGuests()}};save();renderChoiceEvent();return}if(a==='대학 수업'&&state.job==='대학생'&&v.jaeheeIntro&&v.slot===1&&!npcLifeBusy('공재희',v.day,v.slot)&&!result.jobEvent&&!result.person&&Math.random()<.22){showEvent('campus','수업을 마치고 나오다가 모자와 마스크를 쓴 공재희를 발견했다.','공재희',a);return}if(result.jobEvent){const e=result.jobEvent;showEvent('work',result.note+'\n\n'+(relationshipTier(e[0])>=1?e[0]+'과 업무 중 다시 마주쳤다.':e[2]),e[0],a,e);return}if(result.person){showEvent(result.place,result.note+'\n\n'+(['아르바이트','카페 실습'].includes(a)&&result.person==='강도윤'?(familiarEncounter('강도윤')?familiarEncounterLine('cafe','강도윤',v.day,v.slot||0):'일을 마치자 강도윤이 카운터에서 고개를 들었다.'):' '+arrivalText(result.place,result.person)),result.person,a);return}if(doorHomeActivities.has(a)&&result.place==='home'&&startDoorVisit('home',result.note))return;
if(startSurpriseVisit(a,result)||meetNeighborAfterActivity(a,result))return;run.slot++}
if(startDoorVisit(doorHomeActivities.has(run.plan[3])?'home':'return'))return;
const completed=v.day,notes=run.notes.slice();npcLifeTick(completed);crushNight(completed);emotionNight(completed);coupleIssueNight(completed);triangleReportNight(completed);aftermathNight(completed);exNight(completed);breakupNight(completed);if(healthRecord().fatigue>=65)developmentRecord().fatigueDays[completed]=true;healthNight(completed,run,notes);if(deliverPhone(completed))notes.push('휴대전화 · 새 메시지가 도착했다.');const beforeSleep=v.energy;v.energy=Math.min(100,v.energy+(healthRecord().sickDays?35:60));notes.push('수면 · 체력 +'+(v.energy-beforeSleep)+' ('+v.energy+'/100)');v.money-=10000;notes.push('기본 생활비 -10,000원');householdNight(completed,notes);if(state.job==='회사원'&&calendarDate(completed).last){v.money+=2400000;notes.push('월급 입금 +2,400,000원')}if(calendarDate(completed).last){v.money-=550000;notes.push('월세 및 관리비 -550,000원')}if(v.money<0)notes.push('생활비 부족 · 미납액 '+(-v.money).toLocaleString()+'원 (다음 수입에서 충당)');delete v.weekPlans[completed];v.running=null;v.slot=0;if(completed>=365)v.finished=true;else v.day++;writeJournal('DAY '+completed+' 일정 결과\n'+notes.join('\n'));if(completed>=365){v.activeEvent={place:'home',description:'2월 28일, 마지막 하루.',christmasEvent:'ending',day:v.day};save();renderChoiceEvent()}else if(v.overnightPending?.day===completed){const {p,loveNight,loveRoute}=v.overnightPending;delete v.overnightPending;v.activeEvent={place:'home',person:p,day:v.day,description:'다음 날 아침.',coupleMorning:true,loveNight,loveRoute};v.weekEnd=null;save();renderChoiceEvent()}else showEvent('home','DAY '+completed+' 일정 결과\n'+notes.join('\n'),null);renderSim();syncSchedule();drawTown()}

let selectedGiftTarget=null;
function exerciseEncounter(a){const v=initSim();const pool=a==='수영';const candidates=pool?['정태오']:a==='러닝'?['유지안','강도윤']:['강도윤','유지안','임하나'];const chance=pool?.36:.42;const roll=Math.random();if(roll>chance)return '오늘은 아는 사람을 마주치지 않았다.';const person=candidates[Math.floor(Math.random()*candidates.length)];const first=!v.met[person];v.met[person]=true;v.affection[person]=Math.min(999,(v.affection[person]||0)+(first?3:1));v.encounters.push({day:v.day,person,activity:a});const desc=person==='정태오'?'수영을 마치고 나오는 정태오와 마주쳤다.':person==='유지안'?'러닝 중인 유지안과 인사를 나눴다.':person==='강도윤'?'반려견과 산책 중인 강도윤을 만났다.':'강변에서 잠시 쉬고 있는 임하나를 만났다.';return desc+' '+person+' 호감도 +'+(first?3:1)+(first?' · 첫 만남!':'')}
function performExercise(a,fromMap=false){if(fromMap){visitPlace(a==='수영'?'pool':'river');return}if(!state)return;const v=initSim();if(v.day>365)return;if(v.energy<(a==='산책'?0:12)){alert('체력이 부족합니다. 먼저 쉬어 주세요.');return}if(a==='수영'&&v.money<5000){alert('수영장 이용료 5,000원이 부족합니다.');return}if(a==='수영'){v.money-=5000;v.energy=Math.max(0,v.energy-18);v.skills.운동능력+=4}else if(a==='러닝'){v.energy=Math.max(0,v.energy-15);v.skills.운동능력+=3}else{v.energy=Math.min(100,v.energy+8);v.skills.운동능력+=1}const encounter=exerciseEncounter(a);add('시스템',a+' 활동 완료 · 운동능력 '+(a==='수영'?'+4':a==='러닝'?'+3':'+1')+'\n'+encounter);if(fromMap){switchTab('story');$('where').textContent=a==='수영'?'연화수영장':'연화천 산책로'}renderSim();save()}

function switchTab(tab){if(tab==='relations'&&state)renderPairItemsPanel();if(tab==='story'&&state&&yearReady(initSim())){renderYearView(initSim().yearBook?.page);return}if((tab==='life'||tab==='planner')&&state)showFestivalNotice();if(tab==='planner'&&state&&initSim().day>1){renderSeason();syncSchedule()}if(tab==='phone'&&state&&initSim().day>1)renderPhone();if(tab==='album'&&state){albumMigrate();renderAlbum()}if(state&&initSim().day===1&&tab!=='intro'&&tab!=='story')tab=state.introDone===false?'intro':'story';for(const b of document.querySelectorAll('[data-tab]'))b.classList.toggle('active',b.dataset.tab===(tab==='yearFinale'?'story':tab));for(const p of document.querySelectorAll('.panel'))p.classList.toggle('active',p.id===tab)}
for(const b of document.querySelectorAll('[data-tab]'))b.addEventListener('click',()=>switchTab(b.dataset.tab));
$('cancelGift').addEventListener('click',()=>{$('giftPanel').classList.add('hide');selectedGiftTarget=null});
const helpPages=[['연화동에서의 새로운 생활','첫날 이야기를 마치면 365일 동안 자유롭게 생활할 수 있어요. 정해진 정답은 없습니다. 일과 취미, 휴식, 주민들과의 관계를 원하는 방식으로 즐겨 보세요.'],['생활 · 하루 일정','오전, 낮, 오후, 저녁의 행동을 각각 선택하고 일정을 실행하세요. 아르바이트로 돈을 벌고, 휴식으로 체력을 회복할 수 있어요. 수영과 PC방은 이용료가 필요합니다.'],['동네 · 자유외출','일정에 자유외출을 넣으면 해당 시간에 동네 지도가 열립니다. 장소를 선택하고 방문하기를 누르세요. 주민과의 만남은 요일과 시간에 따라 달라지며 항상 발생하지는 않습니다.'],['성장 · 관계','성장 탭에서 능력치와 진로 발견 조건을 확인하세요. 관계 탭에서는 주민별 호감도와 친밀도를 볼 수 있으며 호감도 20 이상부터 선물을 줄 수 있어요. 연애는 필수가 아닙니다.'],['이야기 · 이벤트','만남이 발생하면 일정이 잠시 멈춥니다. 선택에 따라 호감도가 오르거나 내려갈 수 있어요. 일정 계속하기를 눌러 남은 일정을 진행하세요. 하루 결과도 확인해야 다음 날 일정을 시작할 수 있습니다. 진행 상태는 이 브라우저에 자동 저장됩니다.']];
let helpIndex=0;function drawHelp(){const [title,body]=helpPages[helpIndex];$('helpStep').textContent='생활 안내 '+(helpIndex+1)+' / '+helpPages.length;$('helpTitle').textContent=title;$('helpBody').textContent=body;$('helpPrev').disabled=helpIndex===0;$('helpNext').textContent=helpIndex===helpPages.length-1?'안내 마치기':'다음'}
function openHelp(){helpIndex=0;drawHelp();if(!$('helpDialog').open)$('helpDialog').showModal()}
$('helpOpen').addEventListener('click',openHelp);$('helpPrev').addEventListener('click',()=>{if(helpIndex>0){helpIndex--;drawHelp()}});$('helpNext').addEventListener('click',()=>{if(helpIndex===helpPages.length-1)$('helpDialog').close();else{helpIndex++;drawHelp()}});$('helpClose').addEventListener('click',()=>$('helpDialog').close());
$('helpDialog').addEventListener('close',()=>{if(state&&initSim().day>1){initSim().helpSeen=true;save()}});

const ALBUMKEY=KEY+'-album-v1';
let albumCache=null,albumOwner=null,albumSerialized=null,albumMode='event',albumPerson='all';
const albumSeasonNames={springRain:'봄비와 벚꽃잎',springBlossom:'봄날의 벚꽃',summerRain:'여름 소나기',summerHeat:'한여름의 쉼표',summerNight:'여름밤 연화천',autumnLeaves:'단풍과 찬바람',festival:'연화제',winterSnow:'눈 내리는 연화동',winterWarm:'겨울의 온기',christmasEve:'크리스마스이브'};
const albumFlirtNames={intro:'마음의 시작',daily:'일상의 설렘',gesture:'작은 접촉',invite:'먼저 온 약속',almost:'가까워지는 순간',hurtMeet:'마음의 거리',jealousMeet:'질투',longing:'보고 싶었던 시간',outing1:'외출의 추억 1',outing2:'외출의 추억 2',outing3:'외출의 추억 3'};
function albumMerge(...sources){const out={};for(const src of sources){if(!src||typeof src!=='object'||Array.isArray(src))continue;for(const [key,rec] of Object.entries(src)){if(!/^(event|ending):[^\n]{1,150}$/.test(key)||!rec||typeof rec.title!=='string'||!Array.isArray(rec.pages))continue;const old=Object.hasOwn(out,key)?out[key]:null;const pages=[...(old?.pages||[])];for(const p of rec.pages){if(!p||!Array.isArray(p.lines)||!Number.isInteger(p.day))continue;const lines=p.lines.filter(x=>Array.isArray(x)&&typeof x[0]==='string'&&typeof x[1]==='string').slice(0,70).map(x=>[x[0].slice(0,60),x[1].slice(0,1200)]);if(!lines.length)continue;const signature=JSON.stringify(lines);if(!pages.some(x=>JSON.stringify(x.lines)===signature))pages.push({day:p.day,player:String(p.player||'').slice(0,40),lines});}if(pages.length){pages.sort((a,b)=>b.lines.length-a.lines.length);out[key]={title:rec.title.slice(0,100),person:String(rec.person||'').slice(0,60),category:rec.category==='ending'?'ending':'event',pages:pages.slice(0,3)}}}}return out}
function albumPersist(){
 if(!albumCache)return;
 albumSerialized=JSON.stringify(albumCache);
 try{localStorage.setItem(ALBUMKEY,albumSerialized)}catch(e){console.warn('앨범 별도 저장 실패',e)}
}
function albumData(){if(!albumCache){try{albumCache=albumMerge(JSON.parse(localStorage.getItem(ALBUMKEY)||'{}'))}catch(e){albumCache={}}}if(state&&albumOwner!==state){albumCache=albumMerge(albumCache,state.album);albumOwner=state;state.album=albumCache;albumPersist()}return albumCache}
function albumUnlock(category,id,p,title,lines,day=initSim().day){if(!Array.isArray(lines)||!lines.length)return;const a=albumData(),key=category+':'+id;const rec={category,person:p||'',title,pages:[{day,player:state.name,lines}]};const merged=albumMerge(Object.hasOwn(a,key)?{[key]:a[key]}:{},{[key]:rec})[key];if(!merged)return;if(JSON.stringify(a[key])===JSON.stringify(merged))return;a[key]=merged;state.album=a;albumPersist()}
function albumLog(){return Array.from($('log').querySelectorAll('.bubble')).map(el=>[el.querySelector('strong')?.textContent||'이야기',el.querySelector('span')?.textContent||'']).filter(x=>x[1]&&x[0]!=='시스템')}
const doorVisitTitles={miss:'보고 싶어서 찾아온 날',worry:'안부를 물으러 온 날',repair:'먼저 내 문을 두드린 날'};
function applyDoorVisitOutcome(ev,outcome){
 const o=ev.doorVisit,p=ev.person,v=initSim(),day=ev.day;
 if(v.activeEvent!==ev||!o||o.applied||o.outcome!==outcome)return;
 o.applied=true;
 const z=socialRecord(p),together=outcome==='stay'||outcome==='rest';
 if(outcome!=='later'){
  z.lastSeen=day;
  if(z.reunionPending?.day<=day)delete z.reunionPending;
  v.talkCount[p]=(v.talkCount[p]||0)+1;
 }
 if(together||outcome==='reconcile')z.lastTogether=day;
 if(together||outcome==='brief'){
  feel(p,{longing:together?-4:-1,security:together?2:1});
  v.affection[p]=Math.min(999,(v.affection[p]||0)+(together?2:1));
 }
 if(o.repair&&outcome==='reconcile'){
  const expected=o.repair;
  if(expected.type==='couple'&&vIsDating(p)){
   const r=coupleIssueRecord(p),x=r.active;
   if(x&&x.day===expected.day&&x.kind===expected.kind&&x.kind!=='betrayal'&&x.source!=='confirmed'){
    settleCoupleIssue(p,x,o.finalLabel);
    r.history.push({day,kind:x.kind,repair:true,choice:0,via:'door',label:o.finalLabel,reply:o.finalReply});
   }
  }else if(expected.type==='personal'&&p==='차유리'){
   const x=v.conflicts?.[p];
   if(x&&x.day===expected.day&&unresolvedOutingConflict(p)){
    feel(p,{hurt:o.spokeHurt?-7:-8,security:4});
    o.growthText=settleYuriArtConflict(o.spokeHurt?{자기주장:3,공감능력:1}:{공감능력:3,자기이해:1});
   }
  }else if(expected.type==='hurt'){
   const m=memoryFor(p);
   if(m.lastHurtMeet===expected.day&&m.doorHurtSettled!==expected.day){
    m.doorHurtSettled=expected.day;
    feel(p,{hurt:-7,security:3});
   }
  }
 }
 // Distance can be recorded overnight before either person has said anything about it.
 if(together&&o.distanceDay!=null&&vIsDating(p)){
  const r=coupleIssueRecord(p),x=r.active;
  if(x?.kind==='distance'&&x.status==='pending'&&x.day===o.distanceDay&&x.source!=='confirmed'){
   r.active=null;r.last=day;
   feel(p,{hurt:-(x.hurt||0)});
   r.history.push({day,kind:'distance',repair:false,via:'door',label:o.finalLabel,reply:o.finalReply});
  }
 }
 const closing={later:'오늘은 문을 열지 않고 다음에 보기로 했다.',brief:'현관에서 잠깐 이야기를 나눴다.',stay:'집에서 함께 시간을 보냈다.',rest:'쉬고 싶다는 말을 듣고 자리를 비워 주었다.',reconcile:'서로의 이야기를 듣고 화해했다.',pause:'서운한 마음을 다 풀기에는 조금 더 시간이 필요했다.'};
 writeJournal(p+' · '+doorVisitTitles[o.reason]+' / '+closing[outcome]);
}
function albumCapture(ev){if(!ev)return;const v=initSim(),p=ev.person,day=ev.day||v.day,log=albumLog();const capture=(id,who,title,lines=log)=>albumUnlock('event',id,who,title,lines,day);if(ev.coupleChapter?.choice!=null)capture(p+'|couple:chapter:'+ev.coupleChapter.index,p,coupleChapters[p][ev.coupleChapter.index].title);
 if(ev.everydayArgument?.outcome&& !['pass','space'].includes(ev.everydayArgument.outcome)){
  const end=ev.everydayArgument.outcome==='repaired';
  capture(p+'|couple:everyday:'+(end?'repair':'argument'),p,end?'그날 못 한 말':'참다 꺼낸 말',log);
 }
 if(ev.doorVisit?.outcome)capture(p+'|doorVisit:'+ev.doorVisit.reason,p,doorVisitTitles[ev.doorVisit.reason],log);
 const homeBeat=ev.homeEvening?.intimacy||ev.sharedLife?.intimacy||ev.overnight?.intimacy;
 const night=ev.coupleChapter?.night||ev.tripScene?.night||ev.alleyDate?.night||homeBeat;
 if(ev.alleyDate?.kiss==='yes')capture(p+'|date:alleyKiss',p,'집에 가는 길, 골목에서',log);
 if(night?.invitation?.loveNight)capture(p+'|couple:loveNight',p,'둘이 사랑을 나눈 밤',log);
 if(homeBeat?.ending){
  const kind=homeBeat.ending==='stay'?'stay':homeBeat.kiss==='confirmed'?'kiss':homeBeat.kiss;
  const titles={stay:'둘이 맞는 아침을 기다리며',light:'짧은 입맞춤',deep:'조금 더 긴 입맞춤',kiss:'돌아가기 전 입맞춤'};
  capture(p+'|home:evening:'+kind,p,titles[kind],log);
 }
 if(['stay','kiss'].includes(ev.homeEvening?.choice))capture(p+'|home:evening:'+ev.homeEvening.choice,p,ev.homeEvening.choice==='stay'?'둘이 맞는 아침을 기다리며':'돌아가기 전 입맞춤',log);if(ev.coupleHabit?.answer)capture(p+'|coupleHabit:'+ev.coupleHabit.stage,p,coupleHabitScenes[p][ev.coupleHabit.stage][0],log);if(ev.relationshipTouch?.answer)capture(p+'|relationshipTouch:'+ev.relationshipTouch.stage,p,relationshipTouchScenes[p][ev.relationshipTouch.stage][0],log);if(ev.playfulCouple?.answer)capture(p+'|playfulCouple',p,playfulCoupleVoices[p][0],log);if(ev.partnerComfort?.answer)capture(p+'|partnerComfort',p,partnerComfortVoices[p][0],log);if(ev.surpriseVisit?.answer)capture(p+'|surpriseVisit',p,surpriseVisitVoices[p][0],log);if(ev.afterglowMeeting?.answer)capture(p+'|afterglow',p,'지난 만남의 여운',log);if(ev.spontaneousVisit?.done)capture(p+'|spontaneousVisit',p,spontaneousVisitScenes[p][0],log);if(ev.sensoryRomance?.answer)capture(p+'|sensoryRomance',p,sensoryRomanceScenes[p].title,log);if(ev.loverAffection?.answer)capture(p+'|loverAffection:'+ev.loverAffection.i,p,loverAffectionScenes[p][ev.loverAffection.i][0],log);if(ev.heartMoment?.answer)capture(p+'|heartMoment:'+ev.heartMoment.i,p,heartMomentScenes[p][ev.heartMoment.i][0],log);if(ev.dateDepth?.second)capture(p+'|dateDepth',p,'데이트 · 서로를 알아가는 시간',log);if(ev.anniversary?.answer){capture(p+'|anniversary',p,'우리의 100일',log);return}if(ev.tripScene?.answer){for(const q of ev.tripScene.people)capture(q+'|trip:'+(ev.tripScene.season??1)+':'+ev.tripScene.stage,q,seasonalTripData[ev.tripScene.season??1][0]+' '+ev.tripScene.stage+'일차',log);return}if(ev.sharedLife?.answer){capture(p+'|shared:'+ev.sharedLife.kind,p,sharedLifeKinds[ev.sharedLife.kind],log);return}if(ev.nicknameScene?.answer){capture(p+'|nickname',p,'둘만의 호칭',log);return}if(ev.crushMeeting?.answer){capture(p+'|crushMeeting',p,'친구와 연인 사이',log);return}if(ev.friendCrush?.answer){capture(p+'|friend:crush',p,'친구 이상의 마음',log);return}if(ev.friendScene?.answer){if(ev.friendScene.crushAwake)capture(p+'|friend:awaken',p,'마음을 깨닫는 순간',log);capture(p+'|friend:'+ev.friendScene.kind,p,'우정 · '+({outing:'친구와 외출',talk:'고민 나누기',bond:'소중한 친구'}[ev.friendScene.kind]),log);return}if(ev.npcLifeSupport?.answer){capture(p+'|npcLife:'+ev.npcLifeSupport.i,p,npcLifeEvents[p][ev.npcLifeSupport.i][2],log);return}if(ev.contactFollowup){for(const [q,result] of Object.entries(ev.contactFollowup.answers))if(result==='yes')albumUnlock('event',q+'|contact',q,'연락처 교환',[[q,contactLines[q]],[q,personalSocialVoice[q][0]]],day);return}if(ev.professionStory?.answer){const o=ev.professionStory;capture('profession:story:'+o.name+':'+o.stage,'',o.name+' · '+(o.stage?'중간 지점':'새로운 꿈'),log);return}if(ev.volunteerEvent?.answer){const s=ev.volunteerEvent.encounter;if(s?.choice){const key=pairKey(...s.pair);capture('volunteer:encounter:'+key,key.split('|').join('·'),'봉사가 끝난 뒤',log)}capture('volunteer:'+Math.min(3,professionRecord().volunteerDays.length),'','유기견 보호소 봉사',log);return}if(ev.professionEvent?.answer){capture('profession:prepare:'+ev.professionEvent.name,'',ev.professionEvent.name+' 진로 준비',log);return}if(ev.developmentEvent?.answer){const o=ev.developmentEvent,a=developmentProjects[o.k].stages[o.n];capture('development:'+o.k+':'+o.n,'',a[2],log);return}if(ev.exMemory?.answer){capture(ev.exMemory.person+'|ex:memory',ev.exMemory.person,'남겨진 추억',log);return}if(ev.exBelonging?.answer){capture(p+'|ex:belonging',p,'돌려받는 물건',log);return}if(ev.exAddress?.answer){capture(p+'|ex:address',p,'익숙했던 호칭',log);return}if(ev.npcBreakup?.answer){capture(p+'|ex:'+(ev.npcBreakup.stage===3?'npcBreakup':'warning'),p,ev.npcBreakup.stage===3?'마지막 인사':'달라진 거리',log);return}if(ev.exTalk?.answer){capture(p+'|ex:'+(ev.exTalk.answer.reunited?'reunited':'talk'),p,ev.exTalk.answer.reunited?'다시 시작한 우리':'다시 마주한 마음',log);return}if(ev.breakupAnswer){capture(p+'|ex:breakup',p,'헤어지는 날',log);return}if(ev.multiDiscussion?.answer){capture(p+'|multi:discussion',p,'각자의 관계, 각자의 마음',log);return}if(ev.groupPartners&&ev.groupDateAnswer){awardLife('group');capture('groupDate:'+pairKey(...ev.groupPartners),ev.groupPartners.join('·'),'함께하는 데이트',log);return}if(ev.newConfession&&ev.offerState?.kind){capture(p+'|confession',p,'마음을 전하는 날');return}if(ev.christmasEvent==='ending'){captureFriendEnding(ev);captureCareerEnding(ev);const pr=ev.professionEnding||professionEnding();if(pr?.ready){albumUnlock('ending','profession:'+pr.name,'',pr.name,[['이야기',pr.line]],day);for(const q of lovers()){const scene=professionScene(pr,q);if(scene)albumUnlock('ending','profession:'+pr.name+'|'+q,q,pr.name+' × '+q,[['이야기',scene[2]],[q,formatSpeech(q,scene[3],'npc',undefined,day)]],day)}}const e=ev.lifeEnding||lifeEnding(),chapterEnd=coupleChapterEnding(e);
 if(chapterEnd)albumUnlock('ending','couple:chapter:'+chapterEnd.p,chapterEnd.p,chapterEnd.title,chapterEnd.lines,day);
 albumUnlock('ending','life:'+e.code+':'+(e.active.length?e.active.slice().sort().join('|'):'solo'),e.active.join('·'),e.title,log,day);albumUnlock('ending','life:'+e.code,'',e.title,log,day);return}
if(ev.aftermath&&ev.aftermathAnswer?.friend){capture(p+'|aftermath:friend',p,'새로운 관계');return}if(ev.triangle?.answer){const o=ev.triangle;capture(o.lover+'|couple:triangle',o.lover+'·'+o.other,'뜻밖의 삼자대면',log);if(o.exSnapshot)capture(o.other+'|ex:encounter',o.other,'한때 사랑했던 사람',log)}if(ev.coupleIssue&&ev.issueAnswer&&p){capture(p+'|couple:'+(ev.issueSnapshot.status==='ready'&&ev.issueAnswer.label.startsWith('다시 이야기')?'repair':'conflict'),p,ev.issueSnapshot.status==='ready'&&ev.issueAnswer.label.startsWith('다시 이야기')?'다시 마주한 마음':coupleConflictVoices[p].theme);return}if(ev.coupleMorning&&ev.morningAnswer){capture(p+'|couple:morning',p,'함께 맞이한 아침');return}if(ev.coupleDate?.answer&&p)capture(p+'|couple:'+ev.coupleDate.stage,p,ev.coupleDate.stage==='early'?'연애의 시작':'각자의 일상');if(ev.christmasEvent==='day'&&ev.answered){const lover=christmasState().lover;if(lover)capture(lover+'|confession',lover,'크리스마스의 고백',log);return}
if(ev.christmasEvent==='eve'&&christmasState().eveDone){const who=christmasState().partner;if(who)capture(who+'|christmasEve',who,'크리스마스이브');else capture('solo|christmasEve','','혼자 보내는 크리스마스이브');return}
if(ev.festival&&ev.answered){capture((p||'solo')+'|festival',p,p?'연화제의 마지막 밤':'혼자 즐기는 연화제');return}
if(ev.summerNight&&p&&ev.summerNight.choice!==undefined){capture(p+'|summerNight',p,albumSeasonNames.summerNight);return}
if(ev.personalStory&&ev.answered&&p)capture(p+'|story:'+ev.personalStory.step,p,ev.personalStory.title);
if(ev.flirtScene&&ev.answered&&p)capture(p+'|flirt:'+ev.flirtScene,p,albumFlirtNames[ev.flirtScene]||'두 사람의 순간');
if(ev.attachmentAnswer&&p)capture(p+'|attachment',p,'서로의 속도');
if(ev.crossIntro&&ev.answered)capture('crossIntro','서이준·한시우','어색한 인사');
if(ev.jaeheeGift&&ev.answered)capture('bear','공재희','흰색 곰인형');
if(ev.jaeheeIntro&&ev.answered)capture('jaeheeIntro','공재희','첫 만남');
if(ev.conflictStage&&(ev.answered||['reflect','awkward'].includes(ev.conflictStage)))capture('차유리|conflict:'+ev.conflictStage,'차유리',({start:'그렇게 쉬운 일이 아니야',reflect:'창가의 빈자리',awkward:'서먹한 만남',resolve:'다시 생각해 봤어'})[ev.conflictStage]||'갈등의 순간');
if(ev.birthdayParty&&ev.steps?.length>=3)capture('birthday','','생일 모임');
if(ev.group&&ev.answered)capture('group:'+ev.group.id,ev.group.people.join('·'),'함께하는 만남');
if(ev.weatherScene&&ev.answered&&p)capture(p+'|weather:'+ev.weatherScene.id,p,'날씨가 만든 만남');
if(ev.dateEvent&&p){
 const subs=[[ev.springRain,'springRain'],[ev.seasonalDate,'springBlossom'],[ev.summerDate,ev.summerDate?.id],[ev.autumnDate,'autumnLeaves'],[ev.winterDate,ev.winterDate?.id],[ev.flirtOuting,ev.flirtOuting?.id]];
 for(const [o,id] of subs){
  if(!o?.answer||!id)continue;
  const lines=[];
  for(const step of [o.activity,o.answer]){
   if(!step)continue;
   if(step.label)lines.push([state.name,storyLine(state.name,step.label,true,false,ev)]);
   if(step.narration)lines.push(['이야기',step.narration]);
   if(step.reply)lines.push([p,storyLine(p,step.reply,false,false,ev)]);
  }
  capture(p+'|'+(albumSeasonNames[id]?id:'flirt:'+id),p,albumSeasonNames[id]||albumFlirtNames[id]||'외출의 추억',lines);
 }
 if(ev.playerTouch?.answer!==undefined)capture(p+'|playerTouch',p,'서로에게 다가가는 순간',log);
 if(ev.homeScene&&ev.answered)capture(p+'|home:'+ev.homeScene,p,'홈데이트 '+ev.homeScene,log);
}}
function albumMigrate(){const v=initSim(),a=albumData();for(const p of people){const m=memoryFor(p);for(const h of m.preferences.seasonHistory||[]){if(!albumSeasonNames[h.id]||!h.reply||a['event:'+p+'|'+h.id])continue;albumUnlock('event',p+'|'+h.id,p,albumSeasonNames[h.id],[[p,h.reply]],h.day||v.day)}for(const h of m.history||[]){const match=/^story:(-?\d+)$/.exec(h.id||'');if(match&&h.detail&&!a['event:'+p+'|story:'+match[1]])albumUnlock('event',p+'|story:'+match[1],p,String(h.detail),[['이야기','이전 진행에서 감상한 이야기 · '+h.detail]],h.day||v.day)}}}
function albumCatalogue(){const list=Object.keys(lifeEndingText).map(k=>({key:'ending:life:'+k,person:'',category:'ending'}));for(const p of people){for(const phase of ['argument','repair'])list.push({key:'event:'+p+'|couple:everyday:'+phase,person:p,category:'event'});for(const reason of Object.keys(doorVisitTitles))list.push({key:'event:'+p+'|doorVisit:'+reason,person:p,category:'event'});list.push({key:'event:'+p+'|date:alleyKiss',person:p,category:'event'},{key:'event:'+p+'|couple:loveNight',person:p,category:'event'});coupleChapters[p].forEach((_,i)=>list.push({key:'event:'+p+'|couple:chapter:'+i,person:p,category:'event'}));list.push({key:'ending:couple:chapter:'+p,person:p,category:'ending'})}for(const k of Object.keys(careerEndingText))list.push({key:'ending:career:'+k,person:'',category:'ending'});for(const [k,p] of Object.entries(developmentProjects))p.stages.forEach((_,i)=>list.push({key:'event:development:'+k+':'+i,person:'',category:'event'}));for(const name of Object.keys(professionRoutes)){for(let i=0;i<2;i++)list.push({key:'event:profession:story:'+name+':'+i,person:'',category:'event'});list.push({key:'ending:profession:'+name,person:'',category:'ending'},{key:'event:profession:prepare:'+name,person:'',category:'event'})}for(const [name,p] of professionCombos)list.push({key:'ending:profession:'+name+'|'+p,person:p,category:'ending'});for(let i=1;i<=3;i++)list.push({key:'event:volunteer:'+i,person:'',category:'event'});for(const [id] of lifeAchievementList)list.push({key:'event:achievement:'+id,person:'',category:'event'});for(const p of people){list.push({key:'ending:friend:'+p,person:p,category:'ending'});for(const k of ['outing','talk','bond','awaken','crush'])list.push({key:'event:'+p+'|friend:'+k,person:p,category:'event'});(npcLifeEvents[p]||[]).forEach((a,i)=>{if(a[5])list.push({key:'event:'+p+'|npcLife:'+i,person:p,category:'event'})});list.push({key:'ending:'+p,person:p,category:'ending'});for(let i=0;i<(personalStoryData[p]||[]).length;i++)list.push({key:'event:'+p+'|story:'+i,person:p,category:'event'});for(const id of Object.keys(albumSeasonNames))list.push({key:'event:'+p+'|'+id,person:p,category:'event'});for(let season=0;season<4;season++)for(let stage=1;stage<=2;stage++)list.push({key:'event:'+p+'|trip:'+season+':'+stage,person:p,category:'event'});for(const id of ['coupleHabit:0','coupleHabit:1','relationshipTouch:0','relationshipTouch:1','relationshipTouch:2','playfulCouple','partnerComfort','surpriseVisit','afterglow','spontaneousVisit','sensoryRomance','loverAffection:0','loverAffection:1','heartMoment:0','heartMoment:1','dateDepth','anniversary','shared:shopping','shared:cooking','shared:home','nickname','crushMeeting','contact','attachment','playerTouch','confession','couple:early','couple:steady','couple:morning','couple:conflict','couple:repair','couple:triangle','aftermath:friend','multi:discussion','ex:talk','ex:reunited','ex:breakup','ex:encounter','ex:warning','ex:npcBreakup','ex:memory','ex:belonging','ex:address'])list.push({key:'event:'+p+'|'+id,person:p,category:'event'});for(const id of Object.keys(albumFlirtNames))list.push({key:'event:'+p+'|flirt:'+id,person:p,category:'event'});for(let i=1;i<=5;i++)list.push({key:'event:'+p+'|home:'+i,person:p,category:'event'})}list.push({key:'ending:solo',person:'',category:'ending'});for(const [id,p] of [['crossIntro','서이준·한시우'],['bear','공재희'],['jaeheeIntro','공재희'],['birthday',''],['solo|festival',''],['solo|christmasEve','']])list.push({key:'event:'+id,person:p,category:'event'});return list}
function renderAlbum(){const a=albumData(),catalog=albumCatalogue(),known=new Set(catalog.map(x=>x.key));for(const [key,r] of Object.entries(a))if(!known.has(key))catalog.push({key,person:r.person,category:r.category});const root=$('albumList');root.replaceChildren();$('albumEvents').classList.toggle('active',albumMode==='event');$('albumEndings').classList.toggle('active',albumMode==='ending');$('albumFilter').value=albumPerson;const rows=catalog.filter(x=>x.category===albumMode&&(albumPerson==='all'||(albumPerson==='solo'?!x.person:x.person.split('·').includes(albumPerson))));const unlocked=rows.filter(x=>a[x.key]);$('albumCount').textContent=(albumMode==='ending'?'엔딩 ':'이벤트 ')+unlocked.length+' / '+rows.length+' 수집 · 이 기기의 모든 회차';for(const x of [...unlocked,...rows.filter(x=>!a[x.key])]){const rec=a[x.key],b=document.createElement('button');b.type='button';b.className='album-card'+(rec?'':' locked');const icon=document.createElement('span');icon.className='album-icon';icon.textContent=rec?(albumMode==='ending'?'✦':'❀'):'🔒';const name=document.createElement('strong');name.textContent=rec?rec.title:'???';const meta=document.createElement('small');meta.textContent=rec?((rec.person||'나의 이야기')+' · '+rec.pages.length+'개 기록'):'아직 발견하지 못한 이야기';b.append(icon,name,meta);if(rec)b.onclick=()=>openAlbumEntry(rec,x.key);else b.disabled=true;root.append(b)}}
function friendAlbumLines(key,p,page){
 const match=/^event:([^|]+)\|friend:(outing|talk|bond|awaken)$/.exec(key||'');
 if(!match||match[1]!==p||!friendSceneReplies[p])return page.lines;
 const kind=match[2]==='awaken'?'talk':match[2],raw=friendOpening(p,kind);
 const openings=[raw,p==='강도윤'?raw.replace(/^하하[,!.… ]+/, ''):raw];
 const polite=openings.map(chatSpacing),casual=openings.map(s=>chatSpacing(casualSpeech(s,p,'npc')));
 return page.lines.map((row,i,lines)=>{
  if(i<2||row[0]!==p||lines[i-2][0]!==p||lines[i-2][1]!==row[1]||lines[i-1][0]!==page.player)return row;
  const wasCasual=casual.includes(row[1]),wasPolite=polite.includes(row[1]);
  if(!wasCasual&&!wasPolite)return row;
  const index=friendSceneChoices[kind].findIndex(label=>[chatSpacing(label),chatSpacing(casualSpeech(label,p,'player'))].includes(lines[i-1][1]));
  if(index<0)return row;
  // Siwoo's old arcade opening has the same wording in both speech registers.
  if(wasCasual&&wasPolite&&p==='한시우'&&kind==='outing'){
   return [p,['다음 종목은 볼링! 그때도 진 사람이 음료 사기!','오늘의 하이라이트는 역시 마지막 판!'][index]];
  }
  return [p,friendSceneReplies[p][kind][index][wasCasual&&!wasPolite?1:0]];
 });
}
// Old Eve pages recorded literal dialogue. Reconstruct only a transcript corroborated
// by this run's dated choices; keep already-rendered pages and other runs as saved.
function eveAlbumLines(p,page){
 const v=state?.sim;
 if(!v||v.christmas?.partner!==p||page.player!==state.name||!eveScenes[p])return page.lines;
 const history=v.relationshipMemory?.[p]?.preferences?.seasonHistory?.find(h=>h.id==='christmasEve'&&h.day===page.day);
 const scenes=eveScenes[p];
 if(!history||history.eveVoice||history.choices?.length!==scenes.length)return page.lines;
 const profile=eveVoiceProfile(p,page.day,true);
 const legacy=(line)=>chatSpacing(p==='강도윤'?line.replace(/^하하[,!.… ]+/, '').replace(/ 하하[.,] /g,' '):line);
 const short=page.lines.length===1;
 if(short){
  // A save predating the album may only contain the final line.
  const i=scenes.length-1,[who,line]=page.lines[0];
  if(who!==p||![history.reply,legacy(history.reply||'')].includes(line))return page.lines;
  const warm=history.choices[i]===scenes[i][2];
  if(!warm&&history.choices[i]!==eveNeutralChoices[i][0])return page.lines;
  if(history.reply!==(warm?scenes[i][3]:eveNeutralVoice[p][i]))return page.lines;
  const part=eveDialogue(p,i,page.day,warm,false,profile);
  return [[p,(warm?part.warm:part.quiet).reply]];
 }
 const offset=page.lines.findIndex(row=>row[0]==='이야기'&&row[1]===scenes[0][0]);
 if(offset<0||page.lines.length-offset!==4*scenes.length)return page.lines;
 const out=page.lines.slice(0,offset);
 for(let i=0;i<scenes.length;i++){
  const [narration,opening,answer,reply]=page.lines.slice(offset+i*4,offset+i*4+4);
  const row=scenes[i],neutral=eveNeutralVoice[p][i],hurt=i===0&&opening[1]===legacy(touchProfiles[p].hurt[1]);
  const romantic=opening[1]===legacy(row[1]);
  if(narration[0]!=='이야기'||narration[1]!==row[0]||opening[0]!==p||answer[0]!==page.player||reply[0]!==p)return page.lines;
  if(!romantic&&!hurt&&opening[1]!==legacy(neutral))return page.lines;
  if(answer[1]!==chatSpacing(history.choices[i]))return page.lines;
  const warm=history.choices[i]===row[2];
  if(!warm&&history.choices[i]!==eveNeutralChoices[i][0]||warm&&!romantic)return page.lines;
  if(reply[1]!==legacy(warm?row[3]:neutral))return page.lines;
  const lines=eveDialogue(p,i,page.day,romantic,hurt,profile),chosen=warm?lines.warm:lines.quiet;
  out.push(narration,[p,lines.opening],[chosen.action?'이야기':page.player,chosen.label],[p,chosen.reply]);
 }
 return out;
}
function openAlbumEntry(rec,key){const d=$('albumDialog'),body=$('albumReplay');$('albumTitle').textContent=rec.title;body.replaceChildren();if(key?.endsWith('|trip:2:1'))body.append(illustrationFigure('autumnLodge'));for(const page of rec.pages){const heading=document.createElement('h3');heading.textContent=calendarDate(page.day).label+' · '+(page.player||'이전 회차');body.append(heading);for(const [who,line] of (key==='event:'+rec.person+'|christmasEve'?eveAlbumLines(rec.person,page):friendAlbumLines(key,rec.person,page))){const bubble=document.createElement('div');bubble.className='bubble'+(who===page.player?' me':'');const title=document.createElement('strong');title.textContent=who;const t=document.createElement('span');t.textContent=line;bubble.append(title,t);body.append(bubble)}}if(!d.open)d.showModal()}

