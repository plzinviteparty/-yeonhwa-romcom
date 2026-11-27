
(function(){
'use strict';
/* 연화동 모듈형 아우트로 + 경량 회차 보관 (v0.196) */
const YEAR_ARCHIVE_KEY='yeonhwa-year-archive-v1';
const YEAR_NPC_FUTURES={
 '서이준':['새벽까지 켜져 있는 창','서이준은 여전히 일이 끝나고도 모니터 앞에 오래 앉아 있었다. 다만 요즘은 화면을 끄고 누군가와 저녁을 먹는 날도 늘었다.'],
 '강도윤':['카페 문을 닫은 뒤','강도윤은 가게가 조용해진 시간에 모카와 동네를 걸었다. 자기 이름으로 선택한 일상을 조금씩 늘려 가는 중이었다.'],
 '한시우':['다음 경기를 앞두고','한시우는 몸 상태를 살피며 다음 계획을 세웠다. 운동이 전부였던 일상에도 새로 해 보고 싶은 일이 생겼다.'],
 '정태오':['교대 근무의 사이','정태오는 바쁜 날에도 수영장에 들르는 습관을 지켰다. 누군가를 돌보는 일만큼 자기 시간을 지키는 일도 배우고 있었다.'],
 '백지한':['서랍 속 도면','백지한은 언젠가 살고 싶은 집의 그림을 계속 고쳤다. 누구와 어떻게 살 것인가에 따라 창문과 탁자의 위치도 달라졌다.'],
 '임하나':['하나만의 주말','임하나는 해야 하는 일 사이에 하고 싶은 일을 적기 시작했다. 작은 약속 하나를 지키는 일이 때로는 큰 결심이었다.'],
 '차유리':['빈 캔버스 앞에서','차유리는 생활을 꾸리는 작업과 자신이 좋아하는 그림 사이에서 여전히 고민했다. 그래도 새 캔버스를 펴는 날을 포기하지 않았다.'],
 '오세린':['하루의 마지막 진료','오세린은 병원 문을 닫고 따뜻한 차를 마셨다. 바쁘게 지낸 날일수록 누군가와 한가한 이야기를 나눌 시간이 반가웠다.'],
 '유지안':['음악이 끝난 뒤에도','유지안은 춤추는 시간만큼 춤추지 않는 날의 자신도 챙기기로 했다. 무대 밖에 남아 있는 즐거움을 하나씩 발견했다.'],
 '공재희':['방송 종료 후','공재희는 카메라를 끄고 조용해진 방을 둘러봤다. 화면 너머가 아닌 곳에서 기다리는 사람들과 보내는 시간도 소중해졌다.']
};
const YEAR_JOB_FUTURES={
 '회사원':'익숙해진 출근길에도 처음 도전해 보는 일이 있었다. 하루의 끝에 누구에게 어떤 이야기를 들려줄지 생각하며 집으로 향했다.',
 '프리랜서':'달력에는 마감일과 약속이 나란히 적혀 있었다. 선택한 일을 스스로 책임지는 동안 조금씩 나만의 생활을 만들었다.',
 '취업 준비생':'합격 여부만으로 나를 설명할 수 없다는 걸 알게 됐다. 연화동에서 쌓은 경험들이 다음 선택의 바탕이 되었다.',
 '대학생':'졸업 이후의 방향은 여전히 여러 갈래였다. 그중 하나를 고르기 위해 한 걸음씩 준비했다.',
 '기타':'어떤 이름의 직업을 갖든 한 해 동안 배운 것과 만난 사람들은 사라지지 않았다.'
};
function yearMemoExcerpt(v){
 const all=(v.journal||[]).filter(x=>x&&typeof x.text==='string').slice().reverse();
 const important=all.filter(x=>/고백|연인|교제|이별|재결합|진로|전시|출간|합의|여행|업적|자기계발|첫 만남|성취|공연/.test(x.text));
 const selected=important.length?important:all;
 return selected.slice(-16).map(x=>({day:Math.max(1,Math.min(365,Number(x.day)||1)),text:x.text.slice(0,110)}));
}
function yearArchiveLoad(){
 try{const a=JSON.parse(localStorage.getItem(YEAR_ARCHIVE_KEY)||'[]');return Array.isArray(a)?a.filter(x=>x&&x.version===1).slice(-30):[]}catch(e){return []}
}
function yearArchiveSummary(b){
 const v=initSim();
 return {
  version:1,id:String(Date.now())+'-'+String(v.day),timestamp:new Date().toISOString(),
  name:String(b.name||state.name).slice(0,32), title:String(b.title||'연화동의 봄').slice(0,100),
  line:String(b.line||'').slice(0,300),job:String(b.job||'').slice(0,40),
  code:String(b.code||''),career:{title:String(b.career?.title||''),line:String(b.career?.line||''),profession:b.career?.profession||null},
  partners:(b.partners||[]).map(x=>({name:x.name,days:x.days,lines:(x.lines||[]).slice(0,3)})),
  featuredPartner:b.featuredPartner||null,
  friends:(b.friends||[]).map(x=>({name:x.name,line:x.line})),
  goals:(b.goals||[]).slice(0,20),
  achievements:(b.achievements||[]).map(x=>({name:x.name,day:x.day,description:x.description})).slice(0,30),
  memories:(b.memories||yearMemoExcerpt(v)).slice(0,16),
  combos:(b.career?.profession?.ready?(b.partners||[]).map(x=>[b.career.profession.name,x.name]).filter(([job,p])=>!!professionCombos.find(x=>x[0]===job&&x[1]===p)):[]),
  money:Number(b.money)||0
 };
}
function yearArchiveStore(b){
 try{
  const a=yearArchiveLoad(),r=yearArchiveSummary(b);
  if(a.length&&a[a.length-1].name===r.name&&a[a.length-1].timestamp===b.archiveStamp)return true;
  if(b.archiveStamp&&a.some(x=>x.timestamp===b.archiveStamp))return true;
  b.archiveStamp=r.timestamp;
  a.push(r);
  localStorage.setItem(YEAR_ARCHIVE_KEY,JSON.stringify(a.slice(-30)));
  return true;
 }catch(e){console.warn('완료 회차 보관에 실패했습니다. 파일 백업을 권장합니다.',e);return false}
}
function yearStoryNav(panel,current){
 const labels=[['future','몇 년 후, 나의 미래'],['people','연화동 사람들의 근황'],['diary','지난 한 해의 일기'],['record','최종 기록'],['credits','엔딩 크레딧']];
 const row=yearElement(panel,'div',null,'row year-story-nav');
 for(const [page,label] of labels){
  const button=yearElement(row,'button',label,'secondary');
  button.type='button';button.disabled=page===current;button.onclick=()=>renderYearView(page);
 }
}
function renderYearFuture(panel,b){
 const cover=yearElement(panel,'div',null,'year-cover');
 yearElement(cover,'small',b.name+' · 그로부터 몇 년 뒤');
 yearElement(cover,'h2','내가 선택한 내일').id='yearHeading';
 yearElement(cover,'p','연화동에서 맞은 첫 번째 봄이 지나고, 나에게도 새로운 계절이 몇 번 더 찾아왔다.');
 const career=yearSection(panel,'yearCareerStory',b.career?.profession?.ready?b.career.profession.name:b.career?.title||'나의 일');
 yearElement(career,'p',b.career?.profession?.ready?b.career.profession.line:b.career?.line||YEAR_JOB_FUTURES[b.job]||YEAR_JOB_FUTURES['기타']);
 yearElement(career,'p',YEAR_JOB_FUTURES[b.job]||YEAR_JOB_FUTURES['기타']);
 const love=yearSection(panel,'yearLoveStory',b.partners?.length?'그때도 함께 걷는 사람':'나 자신과 함께 걷는 시간');
 if(b.partners?.length){
  for(const x of b.partners){
   yearElement(love,'h4',x.name+' · 다음 계절');
   for(const [who,line] of (x.lines||[]))yearElement(love,'p',who===x.name?'“'+line+'”':line);
  }
 }else yearElement(love,'p','누구와 연인이 되었는가만으로 한 해를 정의하지 않기로 했다. 혼자 보내는 날에도 내 일상은 다음 장으로 이어졌다.');
 if(b.career?.profession?.ready){
  for(const x of b.partners||[]){const combo=professionScene(b.career.profession,x.name);
   if(!combo)continue;
   const extra=yearSection(panel,'','특별 후일담 · '+b.career.profession.name+' × '+x.name);
   yearElement(extra,'h4',combo[2]);yearElement(extra,'p',combo[3]);
  }
 }
 yearStoryNav(panel,'future');
}
function renderYearPeople(panel,b){
 const head=yearElement(panel,'div',null,'year-cover');
 yearElement(head,'small','한 사람도 멈춰 서 있지 않았다');
 yearElement(head,'h2','연화동 사람들은 지금').id='yearHeading';
 const relations=new Map([...(b.partners||[]).map(x=>[x.name,'연인']),...(b.friends||[]).map(x=>[x.name,'절친'])]);
 for(const p of people){
  const x=YEAR_NPC_FUTURES[p],section=yearSection(panel,'',' '+p+(relations.has(p)?' · '+relations.get(p):''));
  yearElement(section,'h4',x[0]);yearElement(section,'p',x[1]);
  const friend=(b.friends||[]).find(y=>y.name===p);
  if(friend)yearElement(section,'p','“'+friend.line+'”');
  if(!relations.has(p))yearElement(section,'small','가끔 건너 듣는 소식');
 }
 yearStoryNav(panel,'people');
}
function renderYearDiary(panel,b){
 const head=yearElement(panel,'div',null,'year-cover');
 yearElement(head,'small',b.name+' · 첫해의 기록');
 yearElement(head,'h2','일기장 마지막 장').id='yearHeading';
 const section=yearSection(panel,'yearDiaryStory','기억하고 싶은 순간들');
 const entries=(b.memories||[]);
 if(!entries.length)yearElement(section,'p','다시 봄이 돌아올 때까지, 내 나름대로 한 해를 채웠다.');
 for(const entry of entries){
  const box=yearElement(section,'div',null,'year-memory');
  yearElement(box,'small','DAY '+entry.day);
  yearElement(box,'p',entry.text);
 }
 yearStoryNav(panel,'diary');
}
function archiveDetailShow(record,mode,where){
 where.replaceChildren();
 const b=record;
 const openButton=(label,next)=>{
  const button=yearElement(where,'button',label,'secondary');
  button.type='button';button.addEventListener('click',()=>archiveDetailShow(record,next,where));
 };
 if(mode==='people'){
  yearElement(where,'h3','연화동 사람들은 지금');
  for(const p of people){const item=YEAR_NPC_FUTURES[p];yearElement(where,'h4',p+' · '+item[0]);yearElement(where,'p',item[1])}
 }else if(mode==='diary'){
  yearElement(where,'h3','생활일지');
  for(const e of record.memories||[]){yearElement(where,'small','DAY '+e.day);yearElement(where,'p',e.text)}
 }else{
  yearElement(where,'h3',record.title+' · '+record.name);
  yearElement(where,'p',record.line);
  yearElement(where,'h4','나의 미래 · '+(record.career?.profession?.ready?record.career.profession.name:record.career?.title||record.job));
  yearElement(where,'p',record.career?.profession?.ready?record.career.profession.line:record.career?.line||'');
  yearElement(where,'h4','함께한 사람들');
  for(const x of record.partners||[]){yearElement(where,'b',x.name);for(const [who,line] of x.lines||[])yearElement(where,'p',who===x.name?'“'+line+'”':line)}
  if(!record.partners?.length)yearElement(where,'p','이 해를 마칠 때는 연인이 없었다.');
  for(const [job,p] of record.combos||[]){const scene=professionCombos.find(x=>x[0]===job&&x[1]===p);if(scene){yearElement(where,'h4','특별 후일담 · '+job+' × '+p+' · '+scene[2]);yearElement(where,'p',scene[3])}}
  yearElement(where,'h4','획득 업적 · '+(record.achievements?.length||0)+'개');
  yearElement(where,'p',(record.achievements||[]).map(x=>x.name).join(' · ')||'아직 없음');
 }
 openButton('미래', 'future');openButton('주민 근황','people');openButton('일기','diary');
}
function archiveUiInit(){
 const album=document.getElementById('album'),anchor=document.getElementById('albumEndings');
 if(!album||!anchor||document.getElementById('yearArchiveOpen'))return;
 const button=document.createElement('button');button.id='yearArchiveOpen';button.type='button';button.className='secondary';button.textContent='완료 회차 보관함';anchor.after(button);
 const area=document.createElement('div');area.id='yearArchiveArea';area.hidden=true;area.className='stat-card';anchor.parentNode.after(area);
 button.addEventListener('click',()=>{
  area.hidden=!area.hidden;if(area.hidden)return;
  area.replaceChildren();yearElement(area,'h3','완료한 생활일지');
  const data=yearArchiveLoad();
  if(!data.length){yearElement(area,'p','아직 완료한 회차가 없어요. 365일 결산을 마치면 이곳에 간단한 후일담 기록이 남아요.');return}
  const detail=yearElement(area,'div');
  for(const entry of data.slice().reverse()){
   const btn=yearElement(area,'button',entry.name+' · '+entry.title+' · '+entry.job,'secondary');
   btn.type='button';btn.onclick=()=>archiveDetailShow(entry,'future',detail);
  }
  archiveDetailShow(data[data.length-1],'future',detail);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',archiveUiInit);else archiveUiInit();
/* 슬롯은 진행 상태만 압축하고, 공용 앨범 본문은 슬롯마다 중복 저장하지 않는다. */
function compactSlotPack(json){
 const data=new TextEncoder().encode(json),dict=new Map();let phrase='',next=256,codes=[];
 for(const n of data){const char=String.fromCharCode(n);if(!phrase){phrase=char;continue}const combined=phrase+char;if(dict.has(combined)){phrase=combined;continue}
  codes.push(dict.has(phrase)?dict.get(phrase):phrase.charCodeAt(0));
  if(next>=65535)return 'J1:'+json;
  dict.set(combined,next++);phrase=char;
 }
 if(phrase)codes.push(dict.has(phrase)?dict.get(phrase):phrase.charCodeAt(0));
 let bytes='';for(const n of codes)bytes+=String.fromCharCode(n&255,n>>>8);
 const packed='L1:'+btoa(bytes);
 return packed.length<json.length?'L1:'+btoa(bytes):'J1:'+json;
}
function compactSlotUnpack(value){
 if(value.startsWith('J1:'))return value.slice(3);
 if(!value.startsWith('L1:'))return value;
 const raw=atob(value.slice(3));
 if(raw.length%2)throw Error('슬롯 압축 데이터 오류');
 const codes=[];for(let i=0;i<raw.length;i+=2)codes.push(raw.charCodeAt(i)|(raw.charCodeAt(i+1)<<8));
 if(!codes.length)return '';
 const dict=Array.from({length:256},(_,i)=>String.fromCharCode(i));
 let prev=dict[codes[0]],out=prev;
 for(let i=1;i<codes.length;i++){
  const k=codes[i],value=k<dict.length?dict[k]:(k===dict.length?prev+prev[0]:null);
  if(value===null||value===undefined)throw Error('슬롯 압축 데이터 오류');
  out+=value;dict.push(prev+value[0]);prev=value;
 }
 return new TextDecoder().decode(Uint8Array.from(out,c=>c.charCodeAt(0)));
}


const $=id=>document.getElementById(id), KEY='yeonhwa-romcom-v05';
const scenes=[
{place:'연화빌라 202호 앞',who:'서이준',intro:'이사 온 첫날. 203호 택배가 202호 현관을 가로막고 있다. 문이 열리더니 옆집 남자가 말한다.\n“그거 제 택배인데요.”',suggest:['문을 막고 있어서 옮기려고 했어요.','그쪽 택배 때문에 못 들어가잖아요.','훔치려다 들켰네요.']},
{place:'연화빌라 입구',who:'백지한',intro:'계약을 담당했던 연화부동산 중개인 백지한에게 연락이 온다. 입주 상태를 확인하러 잠시 들르겠다는 것이다. 잠시 뒤 현관에서 벨이 울린다.\n“어? 이준 씨, 새 이웃이랑 인사하셨어요?”\n서이준이 짧게 대답한다. “택배 때문에요.”',suggest:['두 분 원래 아는 사이예요?','집에 하자는 없는 거죠?','택배 때문에 벌써 친해졌네요.']},
{place:'연화편의점',who:'한시우',intro:'편의점 앞에서 후드티 차림의 남자가 통화 중이다. 점원 임하나가 계산대에서 고개를 든다.\n“어서 오세요. 필요한 거 있으시면 말씀하세요.”\n남자가 통화를 끊자 임하나가 말한다. “시우 씨, 외상값은요?”',suggest:['저 사람 누구예요?','외상 얘기는 못 들은 걸로 할게요.','생수 어디 있어요?']},
{place:'카페 오후 네 시',who:'강도윤',intro:'카페 사장이 메뉴판을 건넨다.\n“어서 오세요. 주문하시겠어요?”\n창가에 앉은 차유리가 노트북 화면을 보고 투덜거린다. “수정 요청이 또 왔네.”\n그때 한시우가 들어온다. “형, 나도 서비스.”\n“주문부터 해, 시우야.”',suggest:['아이스 아메리카노 주세요.','창가 자리 비어 있나요?','저분은 누구예요?']},
{place:'연화빌라 202호',who:'서이준',intro:'밤이 되어 돌아온 현관 앞에 관리실에서 배포한 분리수거 안내문이 꽂혀 있다.\n맞은편에서 서이준이 쓰레기봉투를 들고 나온다. “아, 안녕하세요.”',suggest:['안녕하세요.','분리수거는 어디에 내놓나요?','그냥 집으로 들어간다.']}
];
let state=null;
const people=['유지안','서이준','강도윤','한시우','백지한','정태오','임하나','차유리','오세린','공재희'];const items=[{"name":"드립백 커피","cost":5000},{"name":"고양이 장난감","cost":8000},{"name":"작은 책","cost":7000},{"name":"간식","cost":3000},{"name":"고양이 습식 사료","cost":4000},{"name":"휴대용 손전등","cost":18000},{"name":"스페셜티 원두","cost":16000},{"name":"강아지 노즈워크 장난감","cost":12000},{"name":"커피 테이스팅 노트","cost":9000},{"name":"게임 패드","cost":48000},{"name":"키캡 세트","cost":22000},{"name":"과일 젤리","cost":3500},{"name":"수영 타월","cost":16000},{"name":"방수 파우치","cost":11000},{"name":"텀블러","cost":23000},{"name":"건축 사진집","cost":28000},{"name":"가죽 카드지갑","cost":45000},{"name":"디저트 세트","cost":12000},{"name":"문구 세트","cost":8000},{"name":"따뜻한 담요","cost":18000},{"name":"허브차","cost":6500},{"name":"색상 견본집","cost":26000},{"name":"스케치북","cost":9000},{"name":"디자인 소품","cost":15000},{"name":"동물 그림 엽서","cost":4000},{"name":"무향 핸드크림","cost":9000},{"name":"꽃다발","cost":25000},{"name":"스포츠 양말","cost":7000},{"name":"운동용 헤어밴드","cost":6000},{"name":"댄스 음악 앨범","cost":19000},{"name":"고급 향수","cost":85000},{"name":"넥타이","cost":39000},{"name":"커플 머그컵","cost":24000},{"name":"에너지바","cost":2500},{"name":"핑크 리본 헤어핀","cost":7000},{"name":"검정 레이스 초커","cost":12000},{"name":"토끼 인형 키링","cost":9000},{"name":"애니메이션 아크릴 스탠드","cost":18000},{"name":"핑크 마우스패드","cost":15000},{"name":"방송용 미니 조명","cost":29000},{"name":"딸기 우유","cost":1800},{"name":"고양이 발바닥 키캡","cost":6000}];const giftPrefs={"공재희":[["게임 패드","키캡 세트","핑크 리본 헤어핀","검정 레이스 초커","토끼 인형 키링","애니메이션 아크릴 스탠드","핑크 마우스패드","고양이 발바닥 키캡"],["과일 젤리","간식","방송용 미니 조명","딸기 우유"],["건축 사진집","넥타이"]],"서이준":[["고양이 습식 사료","고양이 장난감"],["휴대용 손전등","드립백 커피"],["게임 패드","고급 향수"]],"강도윤":[["스페셜티 원두","강아지 노즈워크 장난감","커피 테이스팅 노트"],["디저트 세트","작은 책"],["넥타이"]],"한시우":[["키캡 세트","게임 패드","과일 젤리"],["간식","에너지바"],["건축 사진집"]],"정태오":[["수영 타월","방수 파우치"],["텀블러","에너지바"],["고급 향수"]],"백지한":[["건축 사진집","가죽 카드지갑"],["드립백 커피","디저트 세트"],["커플 머그컵"]],"임하나":[["문구 세트","따뜻한 담요"],["허브차","디저트 세트"],["고급 향수"]],"차유리":[["색상 견본집","디자인 소품","스케치북"],["건축 사진집","작은 책"],["넥타이"]],"오세린":[["동물 그림 엽서","무향 핸드크림"],["허브차","작은 책"],["고급 향수"]],"유지안":[["스포츠 양말","운동용 헤어밴드","댄스 음악 앨범"],["에너지바","텀블러"],["넥타이"]]};function initSim(){if(!state.identity)state.identity={traits:{솔직함:0,신중함:0,다정함:0,장난기:0},background:null};if(!state.sim)state.sim={day:1,money:1200000,energy:100,intellect:20,affection:{},gifts:{}};const v=state.sim;v.skills=v.skills||{지성:v.intellect||20,창의성:0,표현력:0,기술력:0,생활력:0,사교성:0};v.experience=v.experience||{글쓰기:0,개발:0,디자인:0,카페:0};v.schedule=v.schedule||['아르바이트','글쓰기','휴식'];if(v.schedule.length===3)v.schedule.splice(2,0,'자유외출');v.skills.운동능력=v.skills.운동능력||0;v.skills.게임숙련도=v.skills.게임숙련도||0;v.weekPlans=v.weekPlans||{};v.encounters=v.encounters||[];v.journal=v.journal||[];v.freeVisitDay=v.freeVisitDay||0;v.topicRewards=v.topicRewards||{};v.met=v.met||{};v.talkCount=v.talkCount||{};v.lastTopics=v.lastTopics||{};v.storyUnlocked=v.storyUnlocked||{};v.personalEvents=v.personalEvents||{};v.finalEvents=v.finalEvents||{};v.symbolicGifts=v.symbolicGifts||{};v.confessions=v.confessions||{};v.romance=v.romance||{};v.schemaVersion=3;v.innerGrowth=v.innerGrowth||{};for(const k of ['공감능력','자기이해','자기주장','책임감','포용력'])if(!Number.isFinite(v.innerGrowth[k]))v.innerGrowth[k]=0;v.growthRecords=v.growthRecords||{};v.conflicts=v.conflicts||{};v.knownFacts=v.knownFacts||{};v.storyProgress=v.storyProgress||{};v.relationshipMemory=v.relationshipMemory||{};for(const p of people){const m=v.relationshipMemory[p]||(v.relationshipMemory[p]={});m.feelings=m.feelings||{longing:0,hurt:0,jealousy:0,security:0,awareness:0};m.address=m.address||{};m.preferences=m.preferences||{};m.history=m.history||[];m.facts=m.facts||{};for(const k of ['longing','hurt','jealousy','security','awareness'])if(!Number.isFinite(m.feelings[k]))m.feelings[k]=0;}for(const p of people)if(state.sim.affection[p]===undefined)state.sim.affection[p]=0;return state.sim}function memoryFor(p){const v=initSim();return v.relationshipMemory[p]}
function remember(p,id,detail){const m=memoryFor(p);if(m.facts[id])return false;m.facts[id]={day:initSim().day,detail};m.history.push({day:initSim().day,id,detail});return true}
const maxRelationshipPressure=20;
function clampRelationshipPressure(value){return Math.max(0,Math.min(maxRelationshipPressure,value))}
function relationshipPressure(p){
 const v=initSim(),m=v.relationshipMemory[p];
 if(m.pressure)return m.pressure;
 const legacy=v.social?.[p]?.possession;
 const issue=v.couple?.[p]?.issue;
 const knownBetrayal=[issue?.active,...(issue?.queue||[])].some(x=>x?.kind==='betrayal'||x?.source==='confirmed');
 m.pressure={
  obsession:clampRelationshipPressure(legacy?.obsession??m.feelings.jealousy),
  distrust:clampRelationshipPressure(legacy?.distrust??(knownBetrayal?9:0))
 };
 if(legacy){delete legacy.obsession;delete legacy.distrust;}
 return m.pressure;
}
function feel(p,changes){
 const f=memoryFor(p).feelings;
 const obsession=changes.obsession??changes.jealousy,distrust=changes.distrust;
 if((Number.isFinite(obsession)&&obsession!==0)||(Number.isFinite(distrust)&&distrust!==0)){
  const pressure=relationshipPressure(p);
  if(Number.isFinite(obsession))pressure.obsession=clampRelationshipPressure(pressure.obsession+obsession);
  if(Number.isFinite(distrust))pressure.distrust=clampRelationshipPressure(pressure.distrust+distrust);
 }
 for(const [k,n] of Object.entries(changes))if(Object.hasOwn(f,k)&&Number.isFinite(n))f[k]=Math.max(0,Math.min(100,f[k]+n));
 return f;
}
function growInner(id,changes){const v=initSim();if(v.growthRecords[id])return false;v.growthRecords[id]={day:v.day,changes};for(const [k,n] of Object.entries(changes))if(Object.hasOwn(v.innerGrowth,k)&&Number.isFinite(n))v.innerGrowth[k]=Math.max(0,Math.min(100,v.innerGrowth[k]+n));return true}
function emotionNight(day){for(const p of people){const s=socialRecord(p);if(!s.lastSeen||relationshipTier(p)<2)continue;const gap=day-s.lastSeen;feel(p,{longing:gap>=5?2:gap===0?-4:0,security:gap===0?1:0})}}
function seasonInfo(day){const n=Math.max(1,Math.min(365,day));const index=n<=92?0:n<=184?1:n<=275?2:3;return {index,name:['봄','여름','가을','겨울'][index],emoji:['🌸','☀️','🍂','❄️'][index],day:n-[0,92,184,275][index],length:[92,92,91,90][index],year:n};}
function calendarDate(day){const d=new Date(Date.UTC(2021,2,day));return {label:(d.getUTCMonth()+1)+'월 '+d.getUTCDate()+'일',last:new Date(Date.UTC(2021,2,day+1)).getUTCDate()===1}}const festivalNotices=[{id:'autumn',from:184,to:216,title:'🍂 가을이 다가옵니다',body:'10월 10일~12일에는 연화제가 열립니다. 플리마켓, 야시장, 공연과 마지막 날 불꽃놀이를 즐길 수 있어요. 함께 가고 싶은 주민과 친해져 보세요.'},{id:'autumn-week',from:217,to:226,title:'🎆 연화제 안내',body:'10월 10일~12일 연화제! 마지막 날 불꽃놀이를 함께 즐길 사람을 생각해 보세요. 축제 동행은 연애 루트를 확정하지 않습니다.'},{id:'winter',from:275,to:291,title:'❄️ 겨울이 다가옵니다',body:'12월 24일 크리스마스이브와 25일 크리스마스는 특별한 날입니다. 마음에 드는 주민의 개인 이야기를 진행하고 함께 보낼 시간을 준비해 보세요.'},{id:'christmas-week',from:292,to:300,title:'🎄 크리스마스가 다가옵니다',body:'12월 24일과 25일을 위해 일정을 비워 두세요. 크리스마스는 중요한 관계의 분기점으로 예정되어 있습니다.'}];
function showFestivalNotice(){const v=initSim();if(v.running||v.activeEvent||v.finished)return;v.festivalNotices=v.festivalNotices||{};const n=festivalNotices.find(x=>v.day>=x.from&&v.day<=x.to&&!v.festivalNotices[x.id]&&(!x.id.startsWith('autumn')||!v.festivalDone));if(!n||document.getElementById('festivalNoticeDialog'))return;const d=document.createElement('dialog');d.id='festivalNoticeDialog';d.style.cssText='max-width: min(88vw,420px);border:1px solid #d7ded7;border-radius:18px;padding:24px;background:#faf9f5;color:#30463b;line-height:1.6';const h=document.createElement('h2');h.textContent=n.title;const p=document.createElement('p');p.textContent=n.body;const b=document.createElement('button');b.textContent='확인';const close=()=>{v.festivalNotices[n.id]=true;save();d.remove()};b.onclick=close;d.addEventListener('cancel',e=>{e.preventDefault();close()});d.append(h,p,b);document.body.append(d);d.showModal()}
function renderSeason(){const v=initSim(),s=seasonInfo(v.day),el=$('seasonBanner');el.className='season-banner '+['spring','summer','autumn','winter'][s.index];el.innerHTML='<strong>'+s.emoji+' '+s.name+' · '+weatherFor(v.day).icon+' '+weatherFor(v.day).name+' · '+s.day+'/'+s.length+'일</strong><div class="muted-note">1년 365일 중 '+Math.min(v.day,365)+'일째 · '+(s.index+1)+'/4 계절</div><div class="season-track"><span style="width:'+(s.day/s.length*100)+'%"></span></div><small>오늘의 날씨에 따라 만남의 대화 주제가 달라집니다.</small>';const grid=$('weekPreview');grid.innerHTML='';const icons=['☕','📚','✍️','💻','🎨','🍰','💬','🛏️','🏊','🏃','🚶','📍','🎮'];const acts=['아르바이트','편의점 알바','부동산 사무 보조','동물병원 보조','댄스 학원 데스크','공부','글쓰기','개발','디자인','카페 실습','교류','휴식','수영','러닝','산책','자유외출','PC방에서 게임하기'];for(let i=0;i<7;i++){const day=v.day+i;const card=document.createElement('div');card.className='week-day'+(i===0?' today':'');const label=document.createElement('b');label.textContent=['월','화','수','목','금','토','일'][(day-1)%7];const date=document.createElement('div');date.textContent=calendarDate(day).label;const sym=document.createElement('span');sym.textContent=i===0?icons[Math.max(0,acts.indexOf(v.schedule[0]))]:'·';card.append(label,date,sym);grid.append(card)}}
const careLines={"공재희":"아프면 방송이고 뭐고 그냥 자요. 필요한 거 있으면 말하고.","서이준":"문 앞에 죽 뒀어요. 답장할 힘 있으면 그냥 더 자요.","강도윤":"따뜻한 죽을 가져왔어요. 오늘은 아무것도 하지 말고 쉬어요.","한시우":"오늘은 게임도 금지! 얼른 나으면 같이 놀아요.","정태오":"필요한 물건을 가져왔습니다. 충분히 쉬십시오.","백지한":"오늘 일정은 다 미뤄요. 아픈 사람한테 약속 잡을 생각은 없으니까.","임하나":"...... 있잖아요. 죽을 조금 사 왔어요. 괜찮으시면 드세요.","차유리":"필요한 거 있어요? 괜찮으면 문 앞에 두고 갈까요?","오세린":"으음, 오늘은 푹 쉬어요. 증상이 계속되면 병원에 가고요.","유지안":"오늘은 무조건 휴식 데이! 필요한 거 있으면 말해요."};
const householdGoods={"lamp":["따뜻한 스탠드",28000,"조명","휴식"],"rug":["부드러운 러그",35000,"바닥","휴식"],"books":["작은 책장",48000,"가구","독서"],"desk":["작업용 책상",89000,"가구","작업"],"plant":["초록 화분",9000,"식물","식물"],"poster":["아트 포스터",12000,"벽","미술"],"speaker":["블루투스 스피커",39000,"소품","음악"],"console":["중고 게임기",110000,"소품","게임"],"mug":["찻잔 세트",18000,"소품","차"],"bear":["곰인형",19000,"소품","인형"],"mat":["요가 매트",16000,"소품","운동"],"coffee":["핸드드립 세트",26000,"소품","커피"]},householdRecipes={"rice":["계란볶음밥",1,0,0,18,1],"soup":["채소 수프",0,2,0,20,1],"pasta":["토마토 파스타",1,1,0,23,12],"curry":["카레라이스",2,1,0,26,20],"cake":["딸기 팬케이크",1,0,1,22,25],"tea":["과일 허브차",0,0,1,12,0]},householdReactions={"서이준":["books","…책장 좋네요. 다음엔 책 하나 가져올게요."],"강도윤":["coffee","하하, 드립 세트 마련했네요. 다음엔 같이 내려 볼까요?"],"한시우":["console","오예! 이거 둘이 할 수 있는 게임도 있어요?"],"정태오":["mat","운동할 공간도 마련하셨군요. 무리하지 않는 범위에서 하십시오."],"백지한":["lamp","조명 위치 좋네요. 이 방 분위기가 한결 편안해졌어요."],"임하나":["rug","…이 러그 정말 포근하네요. 여기 앉아 있어도 돼요?"],"차유리":["poster","오, 이 포스터 색감 좋다! 직접 고른 거예요?"],"오세린":["plant","아아, 새잎이 났네요. 정성껏 돌보셨군요."],"유지안":["speaker","와우! 이걸로 우리 노래 같이 들어요!"],"공재희":["bear","헐ㅋㅋ 곰인형 귀여움. 얘 이름 있어요?"]};
const sharedLifeVoices={"서이준":["…필요한 것만 사요. 제가 들게요.","…설거지는 제가 할게요.","…책 한 권 가져왔어요. 읽고 나면 얘기해요.","문 앞에 죽을 두고 갈까요?"],"강도윤":["하하, 저녁 메뉴부터 정할까요?","간은 같이 봐요. 제 입맛만 맞추면 안 되니까.","오늘은 특별히 할 일도 없으니 느긋하게 쉬어요.","따뜻한 수프를 가져왔어요."],"한시우":["오, 간식 코너는 못 지나가지!","오, 생각보다 잘하는데요? 맛 좀 봐요!","오늘은 그냥 누워서 이것저것 얘기하고 싶어요.","오늘은 게임도 쉬어요. 죽 가져왔으니까."],"정태오":["무거운 것은 제가 들겠습니다.","제가 채소를 손질하겠습니다.","같이 영화라도 보시겠습니까?","식사와 물을 가져왔습니다."],"백지한":["냉장고에 뭐 있는지부터 생각해 봐요.","제가 손질할 테니 원하는 맛을 말해 줘요.","이 방에서 쉬는 것도 꽤 좋네요. 영화 하나 고를까요?","죽을 가져왔어요. 오늘은 푹 쉬어요."],"임하나":["저… 제가 먹고 싶은 것도 골라도 될까요?","같이 만드니까 덜 긴장돼요.","좋은 문장을 발견하면 서로 알려 줘요.","따뜻한 차를 가져왔어요."],"차유리":["오, 저거 색깔 예쁘다. 샐러드 해 먹을까요?","플레이팅은 제가 할게요!","각자 그림 그리고 나중에 보여 주기 어때요?","아프면 작업도 쉬어야죠. 먹을 거 두고 갈게요."],"오세린":["으음, 제철 채소가 좋겠네요.","천천히 만들어요. 함께 먹는 게 중요한걸요.","아아, 차를 마시면서 이야기할까요?","수분 챙기고 쉬어요. 심하면 진료도 받고요."],"유지안":["와우! 오늘은 맛있는 거 잔뜩 사요!","이거 우리 같이 만들면 맛있겠다!","오늘은 소파에서 뒹굴면서 영화나 볼까요?","오늘은 아무것도 하지 마요. 푹 쉬어요."],"공재희":["헐ㅋㅋ 딸기 우유도 사면 안 됨?","나 요리 영상만 많이 봤는데ㅋㅋ 해 볼게요.","영화 보면서 간식 먹자. 게임도 ㄱㄴ.","웅… 먹을 거 가져왔어요. 무리 ㄴㄴ."]};
const sharedLifeKinds={shopping:'함께 장보기',cooking:'함께 요리하기',home:'집에서 함께 쉬기'};
function hasBlockingCoupleIssue(p,allowDistance=false){
 const issue=coupleIssueRecord(p).active;
 return !!issue&&(!allowDistance||issue.kind!=='distance');
}
function bookingAvailabilityNote(root,message){
 const note=document.createElement('p');note.className='muted-note';note.textContent=message;root.append(note);
 return note;
}
function sharedLifeEligible(p){return vIsDating(p)?!hasBlockingCoupleIssue(p,true):friendAvailable(p)&&socialRecord(p).friendship>=4}
function sharedLifeSlotFree(p,day,slot,kind){
 if(kind==='home'&&slot!==3)return false;
 return sharedLifeEligible(p)&&validMeetingDay(day)&&!fixedActivity(day,slot)&&npcMeetingTime(p,day,slot,true);
}
function sharedLifeSlot(p,day,kind){
 return preferredSlot(meetingSlots.filter(slot=>sharedLifeSlotFree(p,day,slot,kind)));
}
function bookingSelect(parent,title){
 const label=document.createElement('label'),select=document.createElement('select');
 label.textContent=title;label.append(select);parent.append(label);
 return select;
}
function bookingOption(select,value,label){
 const o=document.createElement('option');o.value=String(value);o.textContent=label;select.append(o);
}
function bookingPicker(parent,firstDay,lastDay,slotsFor,onChange,preferredSlot=1){
 const date=bookingSelect(parent,'날짜'),time=bookingSelect(parent,'시간대');
 const options=new Map();
 function refreshTimes(preferred){
  const slots=options.get(Number(date.value))||[];
  time.replaceChildren();
  for(const slot of slots){
   const leave=fixedActivity(Number(date.value),slot)==='출근'?' (연차 필요)':'';
   bookingOption(time,slot,dayLabels[slot]+leave);
  }
  if(slots.includes(preferred))time.value=String(preferred);
  time.disabled=!slots.length;
  onChange(!!slots.length);
 }
 function refresh(preferred){
  const old=date.value;
  options.clear();date.replaceChildren();
  for(let day=firstDay;day<=lastDay;day++){
   const slots=slotsFor(day);
   if(!slots.length)continue;
   options.set(day,slots);
   const weekday='월화수목금토일'[(day-1)%7];
   const times=slots.length===4?'전 시간대':slots.map(slot=>dayLabels[slot]).join('·')+(slots.length===1?'만':'');
   bookingOption(date,day,calendarDate(day).label+' ('+weekday+') · '+times);
  }
  if(options.has(Number(old)))date.value=old;
  date.disabled=!options.size;
  refreshTimes(preferred??preferredSlot);
 }
 date.onchange=()=>refreshTimes(time.value===''?preferredSlot:Number(time.value));
 refresh();
 return {refresh,day:()=>Number(date.value),slot:()=>time.value===''?null:Number(time.value)};
}
function sharedLifeControls(p,root){const v=initSim();if(v.finished)return;const wrap=document.createElement('details'),title=document.createElement('summary');title.textContent='함께 보내는 일상';wrap.append(title);root.append(wrap);
if(!sharedLifeEligible(p)){
 bookingAvailabilityNote(wrap,vIsDating(p)?'관계 탭에서 진행 중인 갈등을 먼저 풀어 주세요.':'함께 장보기·요리·집에서 쉬기는 연인이거나 우정 4 이상인 친구와 잡을 수 있어요.');
 return;
}
 const kind=bookingSelect(wrap,'활동');
 for(const [id,name] of Object.entries(sharedLifeKinds))bookingOption(kind,id,name);
 const b=document.createElement('button'),availability=bookingAvailabilityNote(wrap,'');
 b.textContent='일상 약속 잡기';
 const pick=bookingPicker(wrap,v.day+1,Math.min(364,v.day+14),
  day=>dateBook()[day]?[]:[0,1,2,3].filter(slot=>sharedLifeSlotFree(p,day,slot,kind.value)),
  available=>{
   b.disabled=!available;availability.hidden=available;
   availability.textContent=kind.value==='home'?'앞으로 14일 안에 함께 비는 저녁이 없어요.':'앞으로 14일 안에 함께 가능한 시간이 없어요.';
  });
 kind.onchange=()=>pick.refresh(kind.value==='home'?3:1);
 b.onclick=()=>{
  const day=pick.day(),slot=pick.slot();
  if(v.finished||day<=v.day||slot===null||dateBook()[day]||!sharedLifeSlotFree(p,day,slot,kind.value))return;
  const plan={p,slot,venue:sharedLifeKinds[kind.value],sharedLife:kind.value};
  dateBook()[day]=plan;confirmScheduledOuting(day,plan);writeJournal(p+' · '+calendarDate(day).label+' '+dayLabels[slot]+' · '+plan.venue);
  save();renderPhone();renderSim();syncSchedule();
 };
 wrap.append(b);
}
function renderSharedHomeEvening(ev,p){
 const v=initSim(),o=ev.sharedLife,day=ev.day||v.day;
 const rest=['차 한 잔만 더 마시고 쉬어요.','좋아요. 그럼 한 잔 더 마시고 들어갈게요.','두 사람은 찻잔이 식을 때까지 소파에 앉아 있었다.'];
 const goodnight=['오늘 와 줘서 고마워요. 조심히 들어가요.','저도 좋았어요. 집에 도착하면 연락할게요.','현관에서 인사를 나누고 문이 닫힐 때까지 배웅했다.'];
 const endings={rest,goodnight,overnight:['괜찮으면 오늘 밤 같이 보낼래요?',coupleVoices[p][2][2]]};
 add('이야기','창밖이 어두워졌다. 방 안엔 소파 옆 조명만 켜져 있었다.');
 if(renderCoupleChapter(ev,p,'player',finishEvent))return true;
 if(!o.evening&&!o.intimacy?.kiss)chapterOffer(ev,p,()=>!o.evening&&!o.intimacy?.kiss&&chapterEveningSlot(ev));
 if(o.evening){
  const [line,reply,detail]=endings[o.evening];
  add(state.name,line,true);add(p,reply);
  if(o.evening==='overnight')renderOvernightCloseness(p);else add('이야기',detail);
  if(o.evening==='goodnight'){choiceButton('일정 계속하기',finishEvent);return true}
  return false;
 }
 const alternatives=['rest','goodnight'].map(key=>({label:endings[key][0],onPick(){if(!ev.coupleChapter&&!o.evening&&!o.intimacy?.kiss)o.evening=key}}));
 return renderHomeKissChoices(ev,p,o,'player',alternatives,'sharedHome');
}
function renderSharedLife(ev){const v=initSim(),p=ev.person,o=ev.sharedLife,a=sharedLifeVoices[p],k=o.kind,dating=vIsDating(p);$('progress').textContent=sharedLifeKinds[k];add('이야기',k==='shopping'?'나란히 장바구니를 들고 진열대를 둘러봤다.':k==='cooking'?'앞치마를 두르고 함께 저녁을 준비했다.':'저녁에 초인종이 울렸다. 현관에서 인사를 나누고 '+nameWith(p)+' 나란히 소파에 앉았다.');if(k==='home'){if((ev.pairItemQuestion||!o.answer)&&renderPairItemQuestion(ev,p))return;householdVisit(ev,p)}
 if(dating&&renderDateSpark(ev,sharedLifeKinds[k],[p],!o.answer))return;
 add(p,a[{shopping:0,cooking:1,home:2}[k]]);if(o.answer){add(k==='home'?'이야기':state.name,o.answer,k!=='home');add(p,o.reply);
 if(relationshipVoices[p].slice(2,4).includes(o.reply)){
  add(p,friendStoryLine(takeFriendTopic(o,p),p,ev.day??v.day));
 }if(k==='home'){if(renderSharedHomeEvening(ev,p))return;if(o.evening==='overnight'){choiceButton('일정 계속하기',finishEvent);return}}if(renderPartnerComfort(ev,p))return;if(renderRelationshipTouch(ev,p))return;if(renderCoupleHabit(ev,p))return;if(renderPlayfulCouple(ev,p))return;coupleHabitRecall(ev,p);choiceButton('일정 계속하기',finishEvent);return}const opts=k==='shopping'?['서로 먹고 싶은 것을 하나씩 고른다','필요한 것만 사서 돌아간다']:k==='cooking'?['함께 맛을 보며 완성한다','각자 잘하는 일을 나누어 맡는다']:['각자 좋아하는 것을 하며 함께 쉰다',dating?'가까이 앉아도 괜찮을지 물어본다':'서로 좋아하는 취미를 소개한다'];for(const label of opts)choiceButton(label,()=>{if(o.answer)return;o.answer=label;o.reply=relationshipVoice(p,dating?'steady':'friend')||npcVoice[p][0];if(k==='shopping'){const r=household();r.stock.grain++;r.stock.veg++;r.stock.fruit++}if(k==='cooking'){v.skills.생활력++;v.energy=Math.min(100,v.energy+10)}healthRecord().fatigue=Math.max(0,healthRecord().fatigue-5);socialRecord(p).lastTogether=v.day;socialRecord(p).lastSeen=v.day;v.affection[p]=Math.min(999,v.affection[p]+2);if(dating)feel(p,{security:2});else{socialRecord(p).friendship+=2;friendshipRecord(p).outings.push({day:v.day,venue:sharedLifeKinds[k],choice:label})}remember(p,'sharedLife:'+k+':'+v.day,label);writeJournal(p+' · '+sharedLifeKinds[k]);save();renderChoiceEvent();renderSim()})}

const specialMemoryVoices={"서이준":["…백 일이네요. 달력에 표시해 뒀어요.","조용한 바닷가라면 좋겠어요. 사람 많은 곳은 조금 피하고요.","…이렇게 멀리 와도 옆에 있는 건 똑같네요.","…아침 바다도 보고 갈까요?"],"강도윤":["하하, 백 일 동안 좋은 기억이 정말 많았네요.","작은 카페가 있는 바닷가로 가 볼까요?","오늘은 제가 손님이고 싶어요. 당신이랑 같이.","하하, 아침은 제가 준비할게요. 먹고 싶은 거 있어요?"],"한시우":["오예! 벌써 백 일이에요? 와, 진짜 기쁘다.","바다 가요! 오늘은 실컷 놀고 맛있는 것도 먹어요.","와, 여기 진짜 좋다. 같이 사진 찍어요!","오예, 아침 산책까지 하고 돌아가요!"],"정태오":["함께한 지 백 일이 되었습니다. 기억하고 있었습니다.","안전하게 다녀올 수 있는 곳으로 일정을 잡아 보겠습니다.","이렇게 여유로운 시간을 함께 보내니 좋습니다.","아침 식사부터 챙기고 출발합시다."],"백지한":["벌써 백 일이네요. 아직도 못 들어 본 얘기가 많아서 좋아요.","바다가 보이는 숙소를 찾아봤어요. 어떠세요?","이 풍경은 혼자 보는 것보다 둘이 보는 게 좋겠네요.","조금 더 앉아 있다가 가요. 서두를 필요 없잖아요."],"임하나":["저… 백 일인 거 기억하고 있었어요.","저도 이번에는 제 시간을 내서 여행 가고 싶어요.","…이런 하루를 오래 기억하고 싶어요.","아침에 눈을 뜨니까 정말 여행 온 게 실감 나요."],"차유리":["오, 벌써 백 일! 오늘 사진 한 장 남겨요.","바닷가 색감 진짜 예쁠 것 같은데요?","저 빛 좀 봐요. 사진 말고 눈으로도 기억해야겠다.","아침 풍경은 또 다른 색이네요. 잘 왔다."],"오세린":["아아, 함께한 백 일이 참 소중했어요.","으음, 조용한 곳에서 함께 쉬어 볼까요?","바람 소리만 들으니 마음이 편안하네요.","따뜻한 차 한 잔 하고 돌아가요."],"유지안":["와우! 우리 백 일이다! 오늘은 맛있는 거 먹어요!","예쓰! 바다 보러 가요!","와, 바람 진짜 좋다. 오늘 사진 많이 남겨요!","아침 공기 최고! 조금만 더 걸어요!"],"공재희":["헐ㅋㅋ 우리 벌써 백 일임? 나 기억하고 있었음.","바다 ㄱㄱ. 방송은 쉬고 갈래요.","웅ㅋㅋ 사진 찍자. 우리 둘만 보게.","아침인데 벌써 가기 싫음ㅋㅋ"]};
function specialRecord(){const v=initSim();return v.specialMemory||(v.specialMemory={anniversaries:{},trips:[],gifts:[]})}
function anniversaryDue(p,day){if(!vIsDating(p))return false;const c=coupleRecord(p),key=p+'|'+c.since;return day>=c.since+100&&day<=c.since+107&&!specialRecord().anniversaries[key]&&!coupleIssueRecord(p).active&&!npcLifeBusy(p,day,3)}
function anniversaryGate(){const v=initSim();if(v.day>=365||[299,300].includes(v.day))return false;const p=lovers().find(q=>anniversaryDue(q,v.day));if(!p)return false;v.activeEvent={place:'home',person:p,day:v.day,description:'함께한 백 일을 돌아보는 연락이 왔다.',anniversary:{since:coupleRecord(p).since}};save();renderChoiceEvent();return true}
function renderAnniversary(ev){const v=initSim(),p=ev.person,o=ev.anniversary;$('progress').textContent='우리의 100일';add(p,spokenCall(p,'npc',ev.day??v.day,specialMemoryVoices[p][0]));if(o.answer){add(state.name,o.answer,true);add(p,o.reply);choiceButton('오늘 일정 시작하기',finishEvent);return}for(const [label,cost] of [['함께했던 추억을 이야기한다',0],['작은 손편지를 건넨다',0],['기념일 디저트를 준비한다',12000],['오늘은 짧게 축하하고 각자 일정을 보낸다',0]]){if((cost>0&&v.money<cost))continue;choiceButton(label,()=>{if(o.answer||(cost>0&&v.money<cost))return;v.money-=cost;o.answer=label;o.reply=relationshipVoice(p,'steady')||npcVoice[p][0];specialRecord().anniversaries[p+'|'+o.since]={day:v.day,choice:label};if(cost)specialRecord().gifts.push({p,day:v.day,name:'기념일 디저트'});feel(p,{security:3});remember(p,'anniversary:'+o.since,label);writeJournal(p+' · 교제 100일');save();renderChoiceEvent();renderSim()})}}
const seasonalTripData=[["벚꽃 소도시 여행","기차 창밖으로 연분홍 꽃들이 스쳐 갔다.","가로등 불빛 아래 꽃잎이 떨어졌다.","꽃잎이 내려앉은 길을 다시 걸었다.",["벚꽃 아래에서 사진을 찍는다","작은 찻집에 들른다"],"꽃길을 함께 걷는다"],["여름 바다 여행","햇빛에 반짝이는 바다. 모래사장에 짐을 내려놓자 파도 소리가 가까워졌다.","해가 지고 물놀이의 열기가 식었다. 밤바다 위로 작은 불꽃들이 반짝였다.","아침 햇살이 수평선에 번졌다. 파도가 어제의 발자국을 지웠다.",["함께 물놀이를 한다","파라솔 아래에서 느긋하게 쉰다"],"밤바다를 함께 걷는다"],["가을 단풍 여행","붉고 노란 잎이 골목을 물들였다.","낙엽이 바스락거리는 길을 지나 숙소에 도착했다.","서늘한 아침 공기 속에서 마지막 단풍길을 걸었다.",["단풍길을 산책한다","작은 소품 가게를 둘러본다"],"낙엽이 쌓인 길을 함께 걷는다"],["겨울 온천 여행","눈 덮인 마을에 도착했다. 온천에서 각자 몸을 녹이고 다시 만나기로 했다.","창밖에 눈이 내렸다. 따뜻한 숙소에서 저녁을 먹었다.","새하얀 눈 위에 발자국을 남기며 아침 공기를 마셨다.",["눈 내리는 마을을 걷는다","따뜻한 음료를 마시며 쉰다"],"눈 내리는 골목을 함께 걷는다"]],seasonalTripVoices={"서이준":["…꽃잎이 옷에 붙었어요. 떼어 드릴까요?","…물에 들어가는 것보단 파도 보는 게 좋네요.","…이런 골목은 천천히 걸어야 보이는 게 많아요.","…밖은 춥네요. 따뜻한 데 들어가요.","…이렇게 둘이 있으니 조용해서 좋네요."],"강도윤":["하하, 꽃이 예쁜 곳에서 커피 한 잔 하고 싶네요.","오늘은 가게 걱정 없이 실컷 놀아도 되겠죠?","저 작은 가게, 분위기 좋네요.","따뜻한 음료 하나씩 골라요. 오늘은 저도 손님입니다.","오늘은 제가 뭘 더 챙기려고 애쓰지 않아도 되겠죠?"],"한시우":["와, 여기 사진 진짜 예쁘게 나오겠는데요? 같이 찍어요!","오, 물놀이 ㄱㄱ! 아, 손목은 무리 안 할게요.","낙엽 밟는 소리 은근 중독성 있네!","오예, 따뜻한 데 들어갔다가 눈 구경 또 해요!","히히, 아직 자긴 아깝지 않아요?"],"정태오":["꽃길이 아름답습니다. 천천히 걸으시죠.","안전한 구역에서 수영하시죠. 원하시면 함께 들어가겠습니다.","이 길은 경사가 완만하군요.","발밑이 미끄럽습니다. 조심해서 걸으십시오.","오늘만큼은 업무 생각을 하지 않아도 되겠군요."],"백지한":["이 골목은 꽃이랑 건물이 참 잘 어울리네요.","이 풍경은 직접 보는 게 사진보다 낫네요.","오래된 집의 창문 좀 봐요. 참 좋은 비례네요.","눈 오는 날 창밖을 볼 수 있는 자리가 좋겠어요.","아직 하루가 끝나지 않았으면 좋겠네요."],"임하나":["저… 사진 한 장 찍어도 괜찮을까요?","저도 물가에 조금 들어가 보고 싶어요.","이런 작은 가게는 혼자였으면 지나쳤을 것 같아요.","따뜻하니까 몸이 풀리는 기분이에요.","…오늘은 시간을 제 마음대로 써도 된다는 게 좋아요."],"차유리":["오, 저 꽃잎 색감 좀 봐요!","잠깐, 지금 빛 완전 예쁘다. 사진 찍어 줄게요!","이 색 조합은 작업할 때 참고하고 싶네요.","눈이 빛을 이렇게 반사하는구나. 예쁘다!","오늘 사진은 나중에 같이 골라요."],"오세린":["아아, 꽃향기가 은은하네요.","으음, 파도 소리 들으니 마음이 편해요.","가을 공기가 참 좋네요. 조금 쉬었다 갈까요?","아아, 따뜻한 차 한 잔이 생각나요.","이렇게 평온하게 하루를 마칠 수 있어 좋네요."],"유지안":["와우! 꽃잎 날리는 거 완전 뮤직비디오 같아요!","예쓰! 물장난 한 판 어때요?","와우, 이 길 걸으면서 듣고 싶은 노래 있어요!","눈 밟으니까 소리 너무 좋다!","아직 에너지 남았는데 노래 하나만 더 들을래요?"],"공재희":["헐ㅋㅋ 꽃잎 머리에 붙었음. 잠깐만요.","와 바다 진짜 예쁨ㅋㅋ 물 들어갈래요?","오 여기 감성 미쳤다. 사진 ㄱㄱ.","웅ㅋㅋ 따뜻한 방에서 간식 먹는 거 최고임.","아니 오늘 끝나기 아까운데 좀 더 얘기해요."]};
function tripSeason(day){return seasonInfo(day).index}
function tripTitle(day){return seasonalTripData[tripSeason(day)][0]}
function tripScenes(o){
 const season=o.season??1,a=seasonalTripData[season];
 if(o.stage===2)return [{title:'여행의 아침',description:a[3],opts:['함께 아침 산책을 한다','기념사진을 남기고 돌아간다']}];
 const departure=o.departureSlot??0;
 const evening={title:departure===3?'저녁 · 여행지 도착':'저녁 · 계절의 풍경',description:departure===3?[
  '역에서 내리니 가로등 아래 꽃잎이 흩날렸다. 숙소에 짐을 맡기고 저녁을 먹으러 나왔다.',
  '짐을 내려놓고 바닷가로 나왔다. 방파제 끝에서 작은 불꽃이 터질 때마다 어두운 수평선이 잠깐씩 드러났다.',
  '숙소 창문마다 불이 켜져 있었다. 가방을 맡기고 다시 나오니 발밑에서 마른 은행잎이 바스락거렸다.',
  '막차에서 내리자 눈이 쏟아졌다. 숙소에서 장갑을 말리는 동안 따끈한 저녁상이 차려졌다.'
 ][season]:a[2],opts:[a[5],o.group?'다 같이 저녁 식사를 한다':'함께 저녁 식사를 한다']};
 const lodging={title:'밤 · 숙소',description:o.group?'숙소에서 각자 편안하게 쉴 공간을 정했다.':'숙소로 돌아왔다. 창가에 짐을 내려놓고 나란히 앉았다.',opts:o.group?['다 같이 이야기하다 각자 쉰다','각자의 시간을 갖는다']:['조금 더 이야기를 나눈다','가까이 앉아도 괜찮을지 물어본다','오늘은 각자 편하게 쉰다']};
 if(departure===3)return [evening,lodging];
 return [{title:departure===2?'오후 · 도착':'낮 · 도착',description:a[1],opts:a[4]},evening,lodging];
}
function tripPeopleOK(ps,group){return ps.length>0&&ps.every(p=>group?closeFriend(p)&&friendAvailable(p):vIsDating(p)&&!hasBlockingCoupleIssue(p,true))}
function tripDepartureSlots(ps,day,group,checkBooking=true,legacyMorning=false){
 if(!Number.isInteger(day)||day<2||day>=364||[299,300].some(d=>d===day||d===day+1)||!tripPeopleOK(ps,group))return [];
 const bookings=dateBook(),out=bookings[day],back=bookings[day+1];
 if(checkBooking?(out||back):(back&&(!out?.trip||back.trip?.id!==out.trip.id)))return [];
 for(let i=0;i<4;i++){
  if(fixedActivity(day+1,i)||ps.some(p=>npcLifeBusy(p,day+1,i)))return [];
 }
 // Hana can take the morning train home after her day off, before her next night shift.
 const canReturn=p=>dateSlot(p,day+1)===1||nightNpcFree(p,day+1,true)||
  (p==='임하나'&&regularOutingDay(p,day)&&!unresolvedOutingConflict(p)&&!touchContext(p,day+1,true).conflicted);
 if(!ps.every(canReturn))return [];
 return [0,1,2,3].filter(slot=>{
  const available=p=>legacyMorning&&slot===0?(dateSlot(p,day)===1||nightNpcFree(p,day,true)):npcMeetingTime(p,day,slot,true,false);
  if(!ps.every(available))return false;
  for(let i=slot;i<4;i++)if(fixedActivity(day,i)||ps.some(p=>npcLifeBusy(p,day,i)))return false;
  return true;
 });
}
function tripControls(p,root){
 const v=initSim();if(v.finished)return;
 const group=!vIsDating(p),wrap=document.createElement('details'),title=document.createElement('summary');
 title.textContent=group?'절친들과 1박 2일 여행':'연인과 1박 2일 여행';
 wrap.append(title);root.append(wrap);
 const unavailable=group?(closeFriend(p)&&friendAvailable(p)?'':'절친 관계가 되면 함께 여행할 수 있어요.'):
  v.day-coupleRecord(p).since<20?'교제 D+20부터 갈 수 있어요.':hasBlockingCoupleIssue(p,true)?'관계 탭에서 진행 중인 갈등을 먼저 풀어 주세요.':'';
 if(unavailable){bookingAvailabilityNote(wrap,unavailable);return}
 if(p==='임하나')bookingAvailabilityNote(wrap,'하나는 쉬는 일요일에 떠나 다음 날 오전에 돌아오는 여행을 잡을 수 있어요.');
 const checks=[];
 if(group)for(const q of people.filter(q=>q!==p&&closeFriend(q)&&friendAvailable(q))){
  const label=document.createElement('label'),c=document.createElement('input');
  c.type='checkbox';label.append(c,document.createTextNode(q+'도 초대하기'));wrap.append(label);checks.push([q,c]);
 }
 const chosen=()=>[p,...checks.filter(([,c])=>c.checked).map(([q])=>q)];
 const sel=document.createElement('select'),time=document.createElement('select'),b=document.createElement('button');
 sel.setAttribute('aria-label','여행 날짜');time.setAttribute('aria-label','여행 출발 시간대');
 b.textContent='계절 여행 예약 (80,000원)';const status=bookingAvailabilityNote(wrap,'');
 const refreshTimes=()=>{
  const previous=time.value;time.replaceChildren();
  for(const slot of tripDepartureSlots(chosen(),Number(sel.value),group)){
   const o=document.createElement('option');o.value=slot;o.textContent=dayLabels[slot]+' 출발';time.append(o);
  }
  if(Array.from(time.options).some(o=>o.value===previous))time.value=previous;
  b.disabled=!time.options.length||v.money<80000;
  status.textContent=!time.options.length?'앞으로 28일 안에 함께 떠날 수 있는 1박 2일 일정이 없어요.':v.money<80000?'여행에 80,000원이 필요해요.':'';
  status.hidden=!status.textContent;
 };
 const refresh=()=>{
  const previous=sel.value;sel.replaceChildren();
  for(let d=v.day+1;d<=Math.min(363,v.day+28);d++)if(tripDepartureSlots(chosen(),d,group).length){
   const o=document.createElement('option');o.value=d;o.textContent=calendarDate(d).label+' ~ '+calendarDate(d+1).label+' · '+tripTitle(d);sel.append(o);
  }
  if(Array.from(sel.options).some(o=>o.value===previous))sel.value=previous;
  refreshTimes();
 };
 for(const [,c] of checks)c.onchange=refresh;
 sel.onchange=refreshTimes;refresh();
 b.onclick=()=>{
  const day=Number(sel.value),slot=Number(time.value),qs=chosen();
  if(v.finished||day<=v.day||!time.options.length||!tripDepartureSlots(qs,day,group).includes(slot)||v.money<80000)return;
  const id='trip:'+day+':'+qs.join('|'),season=tripSeason(day);
  const plan={p,slot,venue:tripTitle(day),trip:{id,people:qs,group,stage:1,season,flexTime:true}};
  dateBook()[day]=plan;dateBook()[day+1]={p,slot:0,venue:'여행 둘째 날',trip:{id,people:qs,group,stage:2,season}};
  confirmScheduledOuting(day,plan);writeJournal(qs.join('·')+' · '+dayLabels[slot]+' 출발 · 1박 2일 여행 예약');
  save();renderPhone();renderSim();syncSchedule();
 };
 wrap.append(sel,time,b);
}
function tripStart(d,run){
 const v=initSim(),o=d.trip,r=specialRecord(),slot=d.slot??0;
 if(o.stage===1){
  // Older trips were reserved at slot 0 based on the character's two-day availability.
  const available=tripDepartureSlots(o.people,v.day,o.group,false,!o.flexTime&&slot===0).includes(slot);
  const back=dateBook()[v.day+1];
  if(!available||back?.trip?.id!==o.id||v.money<80000||v.energy<10){
   delete dateBook()[v.day];if(back?.trip?.id===o.id)delete dateBook()[v.day+1];
   run.notes.push('여행 취소 · 일정 또는 비용·체력 부족');return false;
  }
  v.money-=80000;v.energy-=10;r.trips.push({id:o.id,day:v.day,people:o.people,group:o.group,status:'started'});
 }else if(!r.trips.some(t=>t.id===o.id&&t.status==='started')){
  delete dateBook()[v.day];return false;
 }
 delete dateBook()[v.day];
 v.activeEvent={person:d.p,place:'home',day:v.day,description:o.stage===1?dayLabels[slot]+'에 만나 '+tripTitle(v.day)+'을 떠났다.':'여행지에서 아침을 맞이했다.',tripScene:{...o,departureSlot:slot}};
 run.notes.push(seasonalTripData[o.season??1][0]+' · '+o.stage+'일차');save();renderChoiceEvent();return true;
}
const tripLodgingAndMorningVoices={
 '서이준':['창가에 앉을래요? 불 끄면 밖이 더 잘 보여요.','…잠은 잘 잤어요? 저는 눈 뜨자마자 커튼부터 열었어요.'],
 '강도윤':['창가 자리 비워 뒀어요. 이리 와요. 여기 앉으면 밖이 잘 보여요.','커피 한 잔 할래요? 오늘은 둘 다 천천히 마시고 출발해요.'],
 '한시우':['오늘 찍은 사진 볼래요? 저 점프한 거 진짜 웃겨요.','짐 싸기 전에 아침은 먹고 가요. 저 벌써 배고파요.'],
 '정태오':['짐은 내려놓으시죠. 저녁 내내 걸었으니 잠시 쉬어도 좋겠습니다.','돌아가기 전에 잠깐 더 걸을까요? 아침엔 길이 조용합니다.'],
 '백지한':['여기 조명이 좋네요. 소파에 앉으니까 이제야 여행 온 기분이에요.','커튼 열어도 돼요? 어제 본 풍경이 아침엔 다르게 보이더라고요.'],
 '임하나':['저, 조금만 더 얘기하고 자도 돼요? 오늘은 시간이 너무 빨리 가요.','어제 지나온 길, 아침에도 한 번 보고 싶어요. 같이 갈래요?'],
 '차유리':['오늘 찍은 사진 좀 같이 봐요. 아까 찍은 건 벌써 배경화면으로 쓰고 싶어요.','아침 빛은 완전 다르네. 가기 전에 여기서 한 장만 더 찍어요.'],
 '오세린':['차 한 잔 마실래요? 불은 이쪽만 켜 두면 좋겠어요.','잘 잤어요? 바깥 공기가 좋아서 창문을 조금 열어 뒀어요.'],
 '유지안':['오늘 걸으면서 생각난 노래가 있는데, 지금 같이 들어 볼래요?','아직 집 갈 기분이 아닌데! 아침 산책 한 바퀴만 더 해요.'],
 '공재희':['여기 소파 진짜 푹신해요. 과자 뜯고 딱 십 분만 더 놀아요ㅋㅋ','벌써 짐 싸요? 잠깐만요. 마지막 사진 하나만 찍고 가요.']
};
const tripLodgingBeats={
 '강도윤':{
  reply:['여기서 뭐 보고 있었어요?','여기서 뭐 보고 있었어?'],
  answer:['길 건너 가게요. 간판 불이 하나씩 꺼지는데, 가게 주인들도 이제 집에 가나 싶어서요.','길 건너 가게. 간판 불이 하나씩 꺼지는데, 가게 주인들도 이제 집에 가나 싶어서.'],
  near:['보는 동안 손잡고 있어도 돼요?','보는 동안 손잡고 있어도 돼?'],
  gesture:'도윤이 내 손을 잡았다. 창에 비친 우리를 보다가 고개를 돌렸더니, 도윤은 벌써 나를 보고 있었다.',
  talk:['저기 끝집은 아직 열었네요. 뭐 파는 집 같아요?','저기 끝집은 아직 열었네. 뭐 파는 집 같아?'],
  goodnight:['빵집에 한 표요. 내일 나갈 때 누가 맞혔나 봐요.','빵집에 한 표. 내일 나갈 때 누가 맞혔나 보자.'],
  invite:['아까부터 자꾸 이쪽을 보게 되네요. 입 맞춰도 돼요?','아까부터 자꾸 이쪽을 보게 돼. 입 맞춰도 돼?']
 },
 '서이준':{
  reply:['그럼 큰 불만 꺼 볼까요?','그럼 큰 불만 꺼 볼까?'],
  answer:['저기 골목 끝에 불 하나 보이죠? 여기서 보니까 길이 어디로 이어지는지 알겠어요.','저기 골목 끝에 불 하나 보이지? 여기서 보니까 길이 어디로 이어지는지 알겠어.'],
  near:['조금만 기댈게요. 그래도 돼요?','조금만 기댈게. 그래도 돼?'],
  gesture:'이준이 자리를 내줬다. 어깨를 맞대고 같은 데를 가리키다 손끝이 겹쳤다. 손을 거두려는데 그가 내 손가락을 가만히 잡았다.',
  talk:['그 길로 내일 걸어 볼까요?','그 길로 내일 걸어 볼까?'],
  goodnight:['좋아요. 지도는 안 켜 봐도 될 것 같아요. 여기서 길을 다 외웠어요.','좋아. 지도는 안 켜 봐도 될 것 같아. 여기서 길을 다 외웠어.'],
  invite:['…이쪽 좀 봐요. 입 맞추고 싶은데, 괜찮아요?','…이쪽 좀 봐. 입 맞추고 싶은데, 괜찮아?']
 },
 '한시우':{
  reply:['얼마나 웃기길래 그래요? 보여 줘요.','얼마나 웃기길래 그래? 보여 줘.'],
  answer:['넘겨 봐요. 여기까진 멋있죠? 딱 다음 장에 양말만 나왔어요.','넘겨 봐. 여기까진 멋있지? 딱 다음 장에 양말만 나왔어.'],
  near:['사진은 잠깐만요. 이렇게 붙어 있으니까 좀 떨려요.','사진은 잠깐만. 이렇게 붙어 있으니까 좀 떨려.'],
  gesture:'시우가 휴대전화를 내렸다. 내가 그의 어깨에 기대자 두 뺨이 스쳤다. 뭐라고 놀릴 줄 알았는데, 시우는 귀만 빨개진 채 가만히 있었다.',
  talk:['그 양말 사진은 꼭 보내 줘요.','그 양말 사진은 꼭 보내 줘.'],
  goodnight:['잠깐만요. 저도 골라서 보낼 권리 있죠? 좀 멋있는 것도 끼워 넣을래요.','잠깐만. 나도 골라서 보낼 권리 있지? 좀 멋있는 것도 끼워 넣을래.'],
  invite:['잠깐, 그쪽 보지 말고요. …입 맞춰도 돼요?','잠깐, 그쪽 보지 말고. …입 맞춰도 돼?']
 },
 '정태오':{
  reply:['그러게요. 다리 좀 펴고 앉아요.','그러게. 다리 좀 펴고 앉자.'],
  answer:['이렇게 앉으니 좋군요. 오늘은 급히 돌아갈 일이 없어서요.','이렇게 앉으니 좋네. 오늘은 급히 돌아갈 일이 없어서.'],
  near:['그럼 잠깐 기댈게요.','그럼 잠깐 기댈게.'],
  gesture:'태오가 내 쪽 어깨를 조금 낮췄다. 한동안 그렇게 앉아 있다 고개를 들었다. 태오도 내 쪽으로 천천히 고개를 숙였다.',
  talk:['오늘 걸은 데 중에 어디가 제일 좋았어요?','오늘 걸은 데 중에 어디가 제일 좋았어?'],
  goodnight:['돌아오는 길이 좋았습니다. 숙소에 거의 다 왔을 때는 조금 아쉽더라고요.','돌아오는 길이 좋았어. 숙소에 거의 다 와서는 조금 아쉽더라.'],
  invite:['입을 맞추고 싶습니다. 괜찮습니까?','입 맞추고 싶어. 그래도 돼?']
 },
 '백지한':{
  reply:['여기서 보니까 뭐가 제일 마음에 들어요?','여기서 보니까 뭐가 제일 마음에 들어?'],
  answer:['등 하나만 켜 놔도 충분한 거요. 집이었으면 벌써 저 조명 어디 건지 찾아봤을 텐데.','등 하나만 켜 놔도 충분한 거. 집이었으면 벌써 저 조명 어디 건지 찾아봤을 텐데.'],
  near:['그건 내일 찾아보고, 지금은 저 좀 봐요.','그건 내일 찾아보고, 지금은 나 좀 봐.'],
  gesture:'지한이 몸을 돌려 소파 등받이에 팔을 걸쳤다. 내가 그쪽으로 다가가자 입가에 남아 있던 웃음이 조금 옅어졌다.',
  talk:['집에 하나 둔다면 어디에 놓을 거예요?','집에 하나 둔다면 어디에 놓을 거야?'],
  goodnight:['침대 옆이요. 밤마다 저 등 켜면 오늘 생각나겠네요.','침대 옆에. 밤마다 저 등 켜면 오늘 생각나겠네.'],
  invite:['이렇게 가까이 앉으니까 나도 욕심나네요. 입 맞춰도 돼요?','이렇게 가까이 앉으니까 나도 욕심나네. 입 맞춰도 돼?']
 },
 '임하나':{
  reply:['좋아요. 무슨 얘기부터 할까요?','좋아. 무슨 얘기부터 할까?'],
  answer:['별 얘기 없어도 돼요. 오늘은 시계 안 봐도 되잖아요. 그게 좋아서요.','별 얘기 없어도 돼. 오늘은 시계 안 봐도 되잖아. 그게 좋아서.'],
  near:['그럼 조금만 기대 있어도 돼요?','그럼 조금만 기대 있어도 돼?'],
  gesture:'하나가 고개를 끄덕였다. 어깨에 살짝 기대자 하나도 내게 몸을 기댔다. 내가 얼굴을 들었을 때 하나가 먼저 내 손을 꼭 잡았다.',
  talk:['오늘 뭐가 제일 기억에 남아요?','오늘 뭐가 제일 기억에 남아?'],
  goodnight:['사실 지금이요. 얘기 끝나도 늦을까 봐 뛰어갈 일이 없잖아요.','사실 지금. 얘기 끝나도 늦을까 봐 뛰어갈 일이 없잖아.'],
  invite:['저, 먼저 입 맞춰 봐도 돼요? 조금 전부터 그러고 싶었어요.','나 먼저 입 맞춰 봐도 돼? 조금 전부터 그러고 싶었어.']
 },
 '차유리':{
  reply:['배경화면 후보가 어느 거예요?','배경화면 후보가 어느 거야?'],
  answer:['이거요. 내가 찍어 놓고도 왜 이렇게 웃고 있나 했는데, 옆에서 같이 웃었더라고요.','이거. 내가 찍어 놓고도 왜 이렇게 웃고 있나 했는데, 옆에서 같이 웃었더라고.'],
  near:['카메라는 내려놓고, 우리 조금 더 붙어 있을까요?','카메라는 내려놓고, 우리 조금 더 붙어 있을까?'],
  gesture:'유리가 휴대전화를 내려놓고 사진 속 표정을 흉내 냈다. 나도 따라 웃었다. 이번에는 둘 사이에 카메라가 없어서 눈이 바로 마주쳤다.',
  talk:['그 사진 저도 보내 줘요.','그 사진 나도 보내 줘.'],
  goodnight:['원본으로 보낼게요. 구석에 찍힌 손까지 나와야 재밌거든요.','원본으로 보낼게. 구석에 찍힌 손까지 나와야 재밌거든.'],
  invite:['지금 그 표정은 나만 볼래요. 입 맞춰도 돼요?','지금 그 표정은 나만 볼래. 입 맞춰도 돼?']
 },
 '오세린':{
  reply:['좋아요. 잔은 제가 꺼낼게요.','좋아. 잔은 내가 꺼낼게.'],
  answer:['고마워요. 잔을 쥐고 있으니까 이제야 하루가 다 간 것 같아요.','고마워. 잔을 쥐고 있으니까 이제야 하루가 다 간 것 같아.'],
  near:['잔보다 손이 더 따뜻할 것 같은데, 잡아 봐도 돼요?','잔보다 손이 더 따뜻할 것 같은데, 잡아 봐도 돼?'],
  gesture:'세린이 잔을 내려놓고 두 손으로 내 손을 감쌌다. 내가 가까이 앉자 세린의 엄지가 내 손등을 천천히 쓸었다.',
  talk:['차 다 마실 때까지만 얘기해요.','차 다 마실 때까지만 얘기하자.'],
  goodnight:['좋아요. 말하다 식어도 뭐 어때요. 오늘은 데워 마실 시간도 있잖아요.','좋아. 말하다 식어도 뭐 어때. 오늘은 데워 마실 시간도 있잖아.'],
  invite:['지금 입 맞추고 싶어요. 그래도 괜찮을까요?','지금 입 맞추고 싶어. 그래도 괜찮을까?']
 },
 '유지안':{
  reply:['좋아요. 어떤 노래였어요?','좋아. 어떤 노래였어?'],
  answer:['후렴 들으면 알걸요? 아까 길 걸을 때도 나도 모르게 흥얼거렸어요.','후렴 들으면 알걸? 아까 길 걸을 때도 나도 모르게 흥얼거렸어.'],
  near:['이어폰 한쪽만 줘요. 어깨에 기대서 들을래요.','이어폰 한쪽만 줘. 어깨에 기대서 들을래.'],
  gesture:'지안이 이어폰 한쪽을 내 귀에 끼워 줬다. 후렴이 끝나고도 우리는 어깨를 맞댄 채 앉아 있었다. 지안이 음악을 멈췄다.',
  talk:['맞다, 아까 흥얼거리던 거! 한 곡 더 골라 줘요.','맞다, 아까 흥얼거리던 거! 한 곡 더 골라 줘.'],
  goodnight:['그럼 다음 곡까지만 들어요. 내일 이 노래 들으면 오늘 걷던 길 생각나겠죠?','그럼 다음 곡까지만 듣자. 내일 이 노래 들으면 오늘 걷던 길 생각나겠지?'],
  invite:['노래 하나도 안 들어왔어요. 입 맞추고 싶은데, 나만 그래요?','노래 하나도 안 들어왔어. 입 맞추고 싶은데, 나만 그래?']
 },
 '공재희':{
  reply:['십 분 안에 다 먹을 수 있는 거예요?','십 분 안에 다 먹을 수 있는 거야?'],
  answer:['봉지 뜯는 데 벌써 일 분 썼는데요. 방금부터 다시 세요.','봉지 뜯는 데 벌써 일 분 썼는데. 방금부터 다시 세자.'],
  near:['그럼 십 분만 어깨 빌려줘요.','그럼 십 분만 어깨 빌려줘.'],
  gesture:'재희가 부스러기를 털고 내 쪽으로 바짝 붙었다. 내가 어깨에 기대자 시간 재겠다며 켰던 휴대전화 화면을 슬쩍 꺼 버렸다.',
  talk:['그렇게 치면 벌써 몇 번째 십 분이에요?','그렇게 치면 벌써 몇 번째 십 분이야?'],
  goodnight:['들켰다. 그럼 이 봉지 빌 때까지만이에요. 이번엔 진짜예요.','들켰다. 그럼 이 봉지 빌 때까지만이야. 이번엔 진짜야.'],
  invite:['아, 지금은 시계 안 볼래요. …뽀뽀해도 돼요?','아, 지금은 시계 안 볼래. …뽀뽀해도 돼?']
 }
};
function tripDialogue(p,season,dayStage,sceneIndex,group){
 if(dayStage===2)return season===1?specialMemoryVoices[p][3]:tripLodgingAndMorningVoices[p][1];
 if(sceneIndex===0)return seasonalTripVoices[p][season];
 if(sceneIndex===1)return season===1?specialMemoryVoices[p][2]:seasonalTripVoices[p][4];
 return group?friendshipVoices[p][2]:tripLodgingAndMorningVoices[p][0];
}
function overnightPreparationHint(person){
 const item=npcProfiles[person].gender==='여'?'핑거돔':'콘돔';
 return '가방에서 충전기를 꺼내는 사이, 파우치 안에 챙겨 온 '+item+' 포장이 잠깐 보였다.';
}
const overnightClosenessVoices={
 '서이준':[
  '…지금 입 맞추고 싶어요. 괜찮아요?',
  '당신이 고개를 끄덕이자 이준이 조심스레 뺨에 손을 대고 입을 맞췄다. 입술이 떨어진 뒤에도 그는 한동안 눈을 마주치지 못했다.',
  '당신이 이불 끝을 들자 이준이 그제야 옆에 누웠다. 이불 속에서 손끝이 닿았다. 이번에는 이준이 먼저 손을 잡았다.'
 ],
 '강도윤':[
  '지금 입 맞춰도 돼요? 저도 오늘은 원하는 걸 먼저 말해 보고 싶어요.',
  '당신이 좋다고 하자 도윤이 뺨을 감싸고 입을 맞췄다. 평소처럼 웃어 넘기지 않고, 이마를 가만히 맞댔다.',
  '당신이 자리를 내주자 도윤이 그 옆에 누웠다. 베개가 편하냐고 물으려던 입이 열렸다가 닫혔다. 그는 조금 웃고는 당신 쪽으로 고개를 돌렸다.'
 ],
 '한시우':[
  '저 지금 좀 떨리는데요. 그래도 입 맞추고 싶어요. 해도 돼요?',
  '당신이 고개를 끄덕이자 시우가 허리에 가볍게 손을 댔다. 입맞춤이 끝나고 눈이 마주치자 시우가 뒤늦게 웃었다. 긴장이 풀린 얼굴이었다.',
  '나란히 눕자 시우가 천장을 보며 숨을 골랐다. 잠깐 뒤, 고개만 돌려 당신을 보았다. 이번엔 웃음이 먼저 나오지 않았다.'
 ],
 '정태오':[
  '조금 더 가까이 가고 싶습니다. 입을 맞춰도 되겠습니까?',
  '태오는 당신이 대답할 때까지 기다렸다. 당신이 고개를 끄덕인 뒤에야 뺨을 감싸고 짧게 입을 맞췄다. 손을 거둘 때도 서두르지 않았다.',
  '당신이 옆자리를 가리키자 태오가 천천히 누웠다. 평소 곧게 펴던 어깨에 힘이 풀렸다. 가까이에서 그가 길게 숨을 내쉬는 소리가 들렸다.'
 ],
 '백지한':[
  '아까부터 입 맞추고 싶었어요. 지금 해도 돼요?',
  '당신이 그러라고 하자 지한이 손바닥으로 뺨을 감쌌다. 입술이 떨어졌는데도 시선은 그대로였다. 웃을 줄 알았는데, 지한은 잠깐 아무 말도 못 했다.',
  '당신이 그의 손을 잡아 이끌었다. 지한은 허리에 손을 가볍게 얹고 따라 누웠다. 가까이서 보니 여유로운 얼굴에 귀만 조금 붉었다.'
 ],
 '임하나':[
  '저… 오늘은 제가 먼저 입 맞춰도 돼요?',
  '당신이 고개를 끄덕이자 하나가 손끝으로 뺨을 짚었다. 잠깐 망설였지만, 마지막 한 뼘은 하나가 먼저 좁혀 입을 맞췄다.',
  '당신이 이불을 반쯤 들자 하나가 옆에 누웠다. 등을 돌릴 줄 알았는데, 하나는 당신 쪽으로 돌아누워 손을 내밀었다.'
 ],
 '차유리':[
  '계속 눈 마주치니까 자꾸 그러고 싶어져요. 입 맞춰도 돼요?',
  '좋다는 말이 끝나자 유리가 손으로 뺨을 감싸고 입을 맞췄다. 물러난 뒤엔 방금 본 표정을 기억하려는 듯 당신 얼굴을 한참 들여다봤다.',
  '유리는 당신이 옆자리를 두드리자 따라 누웠다. 나란히 누우니 같은 조명 아래서도 서로의 얼굴이 아까와 조금 다르게 보였다.'
 ],
 '오세린':[
  '지금 입 맞추고 싶은데, 괜찮아요?',
  '당신이 좋다고 하자 세린이 뺨에 손을 얹었다. 입을 맞춘 뒤에도 급히 물러나지 않고 눈이 다시 마주칠 때까지 기다렸다.',
  '당신이 먼저 베개에 기대자 세린도 옆으로 누웠다. 이불을 나눠 덮고 나서는 세린이 먼저 손을 내밀었다.'
 ],
 '유지안':[
  '잠깐만요. 웃으면 못 물어볼 것 같아서. 저, 지금 입 맞춰도 돼요?',
  '당신이 좋다고 하자 지안이 뺨을 두 손으로 감쌌다. 입을 맞추고 물러날 때는 아까 못 웃은 몫까지 웃었다.',
  '당신이 손을 잡아 이끌자 지안이 웃음기를 조금씩 거두며 옆에 누웠다. 서로 너무 가까워서 이번엔 아무 말도 하지 않았다.'
 ],
 '공재희':[
  '지금 입 맞추고 싶은데… 더 가까이 가도 돼요?',
  '당신이 고개를 끄덕이자 재희가 뺨을 잡고 다가왔다. 입맞춤이 끝나고도 늘 하던 농담은 나오지 않았다. 재희는 손도 떼지 않았다.',
  '당신이 이불 끝을 들자 재희가 말없이 옆에 누웠다. 한동안 눈을 맞추다가, 재희가 발끝으로 당신의 발을 살짝 건드렸다.'
 ]
};
function renderOvernightCloseness(p){
 const [ask,kiss,lieDown]=overnightClosenessVoices[p];
 add('이야기',nightFlowScenes[p].stay);
 add(p,ask);
 add('이야기',kiss);
 add('이야기',lieDown);
 add('이야기','잠시 후, 침대 옆 조명이 꺼졌다.');
}
function tripOvernightReady(o,p,day){
 return o.stage===1&&!o.group&&o.people.length===1&&privateEveningReady(p,day);
}
function renderTrip(ev){
 const v=initSim(),o=ev.tripScene,p=ev.person,index=o.season??1,scenes=tripScenes(o);
 o.steps=o.steps||[];
 if(o.answer&&!o.steps.length)o.steps=scenes.map(()=>({label:o.answer,reply:'함께 시간을 보냈다.'}));
 const step=o.steps.length,trip=specialRecord().trips.find(t=>t.id===o.id);
 const soloLodge=o.stage===1&&!o.group&&o.people.length===1;
 const lodge=soloLodge?tripLodgingBeats[p]:null;
 const player=soloLodge?speechRegisterIndex(p,'player',ev.day??v.day):0;
 const npc=soloLodge?speechRegisterIndex(p,'npc',ev.day??v.day):0;
 const refresh=()=>{save();renderChoiceEvent();renderSim()};
 function completeStage(lastChoice){
  if(o.answer)return;
  const labels=o.steps.map(x=>x.label);
  if(lastChoice)labels.push(lastChoice);
  o.answer=labels.join(' / ');
  for(const q of o.people){
   const r=socialRecord(q);r.lastTogether=v.day;r.lastSeen=v.day;
   if(o.group)r.friendship++;else if(vIsDating(q))feel(q,{security:2});
   remember(q,'trip:'+o.id+':'+o.stage,o.answer);
  }
  if(o.stage===2&&trip)trip.status='complete';
 }
 $('progress').textContent=seasonalTripData[index][0]+' · '+o.stage+'일차';
 for(let i=0;i<=Math.min(step,scenes.length-1);i++){
  const scene=scenes[i];
  const sharedMorning=i===0&&o.stage===2&&!o.group&&trip?.stayedTogether;
  const atLodge=soloLodge&&i===scenes.length-1;
  const decision=o.steps[i];
  const newArrival=atLodge&&(o.lodging||decision?.lodgingExit||(!decision&&!o.night?.kiss&&!o.answer));
  const opening=newArrival?'숙소에 돌아와 가방을 내려놓았다.':sharedMorning&&!trip.loveNight?'빈 베개 옆에 손을 짚고 일어나니 창가에 선 '+p+'의 뒷모습이 보였다. 돌아보는 얼굴에 아직 잠이 조금 남아 있었다.':scene.description;
  add('이야기',scene.title+' — '+opening);
  const eveningArrival=o.stage===1&&o.departureSlot===3;
  for(const q of o.people){
   const line=tripDialogue(q,index,o.stage,i+(eveningArrival?1:0),o.group);
   const day=ev.day??v.day;
   add(q,sharedMorning&&addressTurn(q,day)%3===0?spokenCall(q,'npc',day,line):line);
  }
  if(sharedMorning)add('이야기',trip.loveNight?loveNightScene(p,trip.loveNight,trip.loveRoute).morning:scene.description);
  // The evening scene also exists on late departures. Day two is a separate event.
  if(soloLodge&&i===scenes.length-2&&vIsDating(p)&&
   renderDateSpark(ev,seasonalTripData[index][0],[p],step===i&&!decision&&!o.answer))return;
  if(atLodge&&o.lodging){
   add(state.name,lodge.reply[player],true);add(p,lodge.answer[npc]);
   if(o.lodging==='close'){
    add(state.name,lodge.near[player],true);add('이야기',lodge.gesture);add(p,lodge.invite[npc]);
   }
  }
  if(!decision)continue;
  if(decision.overnight){
   // A trip saved after the original single-choice overnight scene.
   add(state.name,'괜찮으면 오늘 밤 같이 보낼래요?',true);
   add(p,decision.reply);
   renderOvernightCloseness(p);
  }else if(decision.lodgingExit){
   if(decision.lodgingExit==='rest')add('이야기',decision.label);
   else add(state.name,decision.label,true);
   if(decision.lodgingExit==='talk')add(p,decision.reply);
   else add('이야기',decision.reply);
  }else{
   add('이야기',decision.label);
   add('이야기',decision.reply);
  }
 }
 if(step>=scenes.length){
  if(!o.answer){completeStage();save()}
  choiceButton('일정 계속하기',finishEvent);return;
 }
 const lodging=o.stage===1&&step===scenes.length-1;
 if(lodging&&lodge){
  if(renderCoupleChapter(ev,p,'trip',()=>{
   if(v.activeEvent!==ev||o.answer)return;
   completeStage(coupleChapters[p][ev.coupleChapter.index].title);finishEvent();
  }))return;
  const shown=o.lodging;
  const active=()=>v.activeEvent===ev&&o.steps.length===step&&!o.answer;
  const awaiting=()=>active()&&!ev.coupleChapter&&o.lodging===shown&&!o.night?.kiss;
  const ready=()=>tripOvernightReady(o,p,v.day);
  const rest='오늘은 각자 편하게 쉰다';
  const decline=player?'오늘은 그냥 이렇게 조금 더 있을래.':'오늘은 그냥 이렇게 조금 더 있을래요.';
  function endLodging(kind,label,reply){
   if(!awaiting())return false;
   o.steps.push({lodgingExit:kind,label,reply});return true;
  }
  if(!o.night?.kiss&&shown!=='close'){
   if(shown==='talk'){
    if(ready())choiceButton(lodge.near[player],()=>{
     if(!awaiting())return;
     if(ready())o.lodging='close';
     refresh();
    });
    else{
     const sit=player?'옆에 조금 더 가까이 앉아도 돼?':'옆에 조금 더 가까이 앉아도 돼요?';
     choiceButton(sit,()=>{
      if(!awaiting())return;
      const c=touchContext(p,v.day);
      const apart=c.tired||c.conflicted||relationshipBoundaryLine(p,v.day);
      const response=apart?'오늘은 이대로가 편하다고 했다. 우리는 앉은 자리에서 조금 더 이야기했다.':'고개를 끄덕이며 옆을 비워 줬다. 나란히 앉아 오늘 걸었던 길을 되짚어 봤다.';
      if(endLodging('sit',sit,response))refresh();
     });
    }
    chapterOffer(ev,p,()=>o.lodging==='talk'&&!o.night?.kiss&&active());
    choiceButton(lodge.talk[player],()=>{
     if(endLodging('talk',lodge.talk[player],lodge.goodnight[npc]))refresh();
    });
   }else{
    choiceButton(lodge.reply[player],()=>{if(awaiting()){o.lodging='talk';refresh()}});
   }
   choiceButton(rest,()=>{
    if(endLodging('rest',rest,'잘 자라는 인사를 나누고 각자 쉴 자리에 누웠다.'))refresh();
   });
   return;
  }
  const beat=o.night||(o.night={});
  renderIntimateEvening(ev,p,beat,{
   host:'trip',canKiss:()=>active()&&ready(),canStay:ready,
   alternatives:[{label:decline,onPick:()=>endLodging('decline',decline,'둘이 나란히 앉아 있다가 졸릴 무렵 잘 자라는 인사를 나눴다.')}],
   onKiss:()=>{
    const touches=flirtRecord(p).touches;
    if(!touches.some(t=>t.day===v.day&&t.type==='입맞춤'))touches.push({day:v.day,type:'입맞춤',scene:'trip'});
   },
   onStay:()=>{if(trip)trip.stayedTogether=true},
   onFinish:()=>{
    if(v.activeEvent!==ev||!beat.ending)return;
    completeStage((beat.kiss==='deep'?'진한 입맞춤':'가벼운 입맞춤')+' · '+(beat.ending==='stay'?'숙소에서 함께 밤을 보냈다.':beat.ending==='linger'?'안겨서 조금 더 이야기했다.':'오늘은 여기까지 하기로 했다.'));
    finishEvent();
   }
  });
  return;
 }
 for(const [i,label] of scenes[step].opts.entries()){
  choiceButton(label,()=>{
   if(v.activeEvent!==ev||o.steps.length!==step||o.answer)return;
   const reply=lodging?(i===scenes[step].opts.length-1?'각자의 휴식 시간을 존중하며 하루를 마쳤다.':'늦은 시간까지 이야기하다 각자 편안히 쉬었다.'):'함께 보낸 순간을 기억에 남겼다.';
   o.steps.push({label,reply});refresh();
  });
 }
}

function household(){const v=initSim();return v.household||(v.household={stock:{grain:2,veg:2,fruit:1},owned:{},display:{},recipes:{},mealDay:0,cookedDays:{},plantWater:0,plantGrowth:0,collections:{},history:[]})}
function householdBuy(id){const v=initSim(),r=household(),a=householdGoods[id];if(!a||r.owned[id]||v.money<a[1]||v.running||v.activeEvent||v.finished)return false;v.money-=a[1];r.owned[id]=true;r.display[id]=true;if(id==='plant')r.plantWater=v.day;r.history.push({day:v.day,kind:'purchase',id});writeJournal('방 꾸미기 · '+a[0]);save();return true}
function householdCookable(a,r,skill){return r.stock.grain>=a[1]&&r.stock.veg>=a[2]&&r.stock.fruit>=a[3]&&skill>=a[5]}
function householdActivity(act){const v=initSim(),r=household(),h=healthRecord();if(act==='장보기'){if(v.money<18000)return {place:'home',note:'장보기 비용 부족',person:null};v.money-=18000;r.stock.grain+=3;r.stock.veg+=3;r.stock.fruit+=2;v.energy=Math.max(0,v.energy-5);return {place:'store',note:'장보기 · 곡물/달걀 +3, 채소 +3, 과일 +2 (-18,000원)',person:null}}if(act==='요리'){const id=r.selectedRecipe||'rice',a=householdRecipes[id]||householdRecipes.rice;if(!householdCookable(a,r,v.skills.생활력))return {place:'home',note:'재료 또는 생활력 부족 · 요리 대신 쉬었다.',person:null};if(r.mealDay===v.day)return {place:'home',note:'오늘은 이미 요리했다. 남은 시간은 쉬었다.',person:null};r.stock.grain-=a[1];r.stock.veg-=a[2];r.stock.fruit-=a[3];r.mealDay=v.day;r.cookedDays[v.day]=true;r.recipes[id]=(r.recipes[id]||0)+1;v.skills.생활력+=2;v.energy=Math.min(100,v.energy+a[4]);h.fatigue=Math.max(0,h.fatigue-6);return {place:'home',note:a[0]+' 완성 · 체력 +'+a[4]+' / 생활력 +2',person:null}}if(act==='방 정리'){v.energy=Math.max(0,v.energy-5);h.fatigue=Math.max(0,h.fatigue-10);v.skills.생활력++;return {place:'home',note:'방을 정리했다. 누적 피로 -10 / 생활력 +1',person:null}}if(act==='취미 생활'){const k=r.hobby||'독서';r.collections[k]=(r.collections[k]||0)+1;h.fatigue=Math.max(0,h.fatigue-12);const skill={독서:'지성',음악:'표현력',그림:'창의성',게임:'게임숙련도'}[k];v.skills[skill]=(v.skills[skill]||0)+1;return {place:'home',note:k+' 취미 생활 · '+skill+' +1 / 누적 피로 -12',person:null}}return null}
function householdNight(day,notes){const r=household(),v=initSim();if(r.cookedDays[day]){v.money+=4000;notes.push('직접 요리 · 기본 생활비 4,000원 절약')}if(r.display.lamp||r.display.rug)healthRecord().fatigue=Math.max(0,healthRecord().fatigue-2);if(r.display.plant&&day-r.plantWater<=3&&r.plantGrowth<30)r.plantGrowth++; }
function householdPanel(){const v=initSim(),r=household(),root=$('life');let b=$('householdPanel');if(!b){b=document.createElement('section');b.id='householdPanel';b.className='stat-card';root.append(b)}b.replaceChildren();const locked=!!v.running||!!v.activeEvent||!!v.finished;const addText=(tag,line)=>{const el=document.createElement(tag);el.textContent=line;b.append(el);return el};addText('h2','나의 집 · 생활과 취미');const room=document.createElement('div');room.style.cssText='display:flex;flex-wrap:wrap;gap:6px;padding:12px;border-radius:10px;background:#ede9df;color:#343a35';for(const [id,a] of Object.entries(householdGoods))if(r.display[id]){const t=document.createElement('span');t.textContent=a[0];t.style.cssText='padding:6px;background:#fff8;border-radius:5px';room.append(t)}if(!room.children.length)room.textContent='아직 소박한 방 · 기본 침대와 책상';b.append(room);addText('p','식재료 · 곡물/달걀 '+r.stock.grain+' · 채소 '+r.stock.veg+' · 과일 '+r.stock.fruit);const sel=document.createElement('select');for(const [id,a] of Object.entries(householdRecipes)){const o=document.createElement('option');o.value=id;o.textContent=a[0]+' · 생활력 '+a[5]+(householdCookable(a,r,v.skills.생활력)?' · 가능':' · 재료/능력 부족');sel.append(o)}sel.value=r.selectedRecipe||'rice';sel.disabled=locked;sel.onchange=()=>{r.selectedRecipe=sel.value;save()};b.append(sel);addText('small','일정에서 장보기·요리를 선택하면 실행됩니다. 하루 한 번 요리 가능.');const hobby=document.createElement('select');for(const k of ['독서','음악','그림','게임']){const o=document.createElement('option');o.value=k;o.textContent=k+' · '+(r.collections[k]||0)+'회';hobby.append(o)}hobby.value=r.hobby||'독서';hobby.disabled=locked;hobby.onchange=()=>{r.hobby=hobby.value;save()};b.append(hobby);const d=document.createElement('details');const sum=document.createElement('summary');sum.textContent='가구·소품 상점';d.append(sum);for(const [id,a] of Object.entries(householdGoods)){const row=document.createElement('div');row.className='compact';const label=document.createElement('span');label.textContent=a[0]+' · '+(r.owned[id]?'보유':a[1].toLocaleString()+'원');const btn=document.createElement('button');btn.className='secondary';btn.textContent=r.owned[id]?(r.display[id]?'보관':'전시'):'구매';btn.disabled=locked||(!r.owned[id]&&v.money<a[1]);btn.onclick=()=>{if(v.running||v.activeEvent||v.finished)return;if(r.owned[id]){r.display[id]=!r.display[id];save()}else if(!householdBuy(id))return;renderSim();$('householdPanel')?.querySelector('details')?.setAttribute('open','')};row.append(label,btn);d.append(row)}b.append(d);if(r.owned.plant){addText('p','화분 · 성장 '+r.plantGrowth+'/30'+(v.day-r.plantWater>3?' · 물이 필요해요':' · 촉촉함'));const w=document.createElement('button');w.textContent='화분에 물 주기';w.disabled=locked||r.plantWater===v.day;w.onclick=()=>{if(v.running||v.activeEvent||v.finished)return;r.plantWater=v.day;save();renderSim()};b.append(w)}}
function householdVisit(ev,p){if(ev.homeScene===3)return;const r=household(),a=householdReactions[p];if(!a||!r.display[a[0]])return;ev.householdReaction=ev.householdReaction||{id:a[0],line:a[1]};add(p,ev.householdReaction.line)}

function healthRecord(){const v=initSim();return v.health||(v.health={fatigue:0,strain:0,sickDays:0,lastIllness:-30})}
function healthNight(day,run,notes){const v=initSim(),h=healthRecord(),rests=run.plan.filter(a=>a==='휴식').length;h.fatigue=Math.max(0,Math.min(100,h.fatigue-8));if(h.sickDays){h.sickDays=Math.max(0,h.sickDays-(rests>=2?2:1));if(!h.sickDays)notes.push('몸 상태가 회복되었다.');return}h.strain=h.fatigue>=65?h.strain+1:0;if(h.strain>=3&&day-h.lastIllness>=30&&Math.random()<.15){h.sickDays=2;h.lastIllness=day;h.strain=0;h.fatigue=45;notes.push('몸살 기운이 생겼다. 당분간 무리하지 말자.');const candidates=people.filter(p=>socialRecord(p).contact&&relationshipTier(p)>=3&&(vIsDating(p)||friendAvailable(p))&&!npcLifeBusy(p,day,3));if(candidates.length&&Math.random()<.65){h.carePending=candidates.find(vIsDating)||candidates[Math.floor(Math.random()*candidates.length)];notes.push('가까운 주민에게 몸이 좋지 않다고 연락했다.')}}}
function renderCare(ev){const v=initSim(),h=healthRecord(),p=ev.carePerson||h.carePending;if(!p||ev.person||!ev.description.includes('일정 결과'))return false;if(!ev.carePerson){ev.carePerson=p;save()}add('이야기',p+'에게서 답장이 왔다.');add(p,careLines[p]);if(ev.careVisit){add('이야기','약속한 도움을 받았다.');add(p,ev.careVisit)}if(!ev.careAnswer){for(const [label,k] of [['고마워요. 도움을 받을게요.',1],['마음만으로도 고마워요. 푹 쉴게요.',2]])choiceButton(label,()=>{if(ev.careAnswer)return;ev.careAnswer=k;h.lastCareReply=v.day;socialRecord(p).lastIllnessCare=v.day;if(k===1){socialRecord(p).lastDoorEncounter=v.day;h.fatigue=Math.max(0,h.fatigue-10);v.energy=Math.min(100,v.energy+10);ev.careVisit=sharedLifeVoices[p][3];if(vIsDating(p))feel(p,{security:2});else socialRecord(p).friendship++}h.carePending=null;writeJournal(p+' · 몸살 안부');save();renderChoiceEvent();renderSim()});return true}return false}
function renderSim(){const v=initSim();$('yearReopen').hidden=!yearReady(v);birthdayMessages(v.day);phoneBadge();renderSeason();if(document.getElementById('life')?.classList.contains('active'))showFestivalNotice();$('simStats').innerHTML='';const title=document.createElement('div');title.className='compact';title.innerHTML='<b>'+calendarDate(v.day).label+' · DAY '+v.day+'</b><span>💰 '+v.money.toLocaleString()+'원</span>';$('simStats').append(title);const e=document.createElement('div');e.textContent='체력 '+v.energy+'/100';const bar=document.createElement('div');bar.className='meter';const fill=document.createElement('span');fill.style.width=Math.max(0,Math.min(100,v.energy))+'%';bar.append(fill);$('simStats').append(e,bar);const healthStatus=healthRecord(),f=document.createElement('div');f.textContent='누적 피로 '+healthStatus.fatigue+'/100'+(healthStatus.sickDays?' · 몸살 (회복까지 '+healthStatus.sickDays+'일)':'');$('simStats').append(f);const living=document.createElement('small');living.className='muted-note';living.textContent='수면 체력 +60 · 피로 -8 / 휴식 피로 -22 · 생활비 10,000원/일 · 월세·관리비 550,000원/월말'+(v.money<0?' · 미납 '+(-v.money).toLocaleString()+'원':'');$('simStats').append(living);birthdayPanel();householdPanel();
$('career').innerHTML='';for(const [skill,value] of Object.entries(v.skills)){const card=document.createElement('div');card.className='stat-card';card.textContent=skill+' · '+value;const meter=document.createElement('div');meter.className='meter';const fill=document.createElement('span');fill.style.width=Math.min(100,value)+'%';meter.append(fill);card.append(meter);$('career').append(card)}
const innerTitle=document.createElement('h2');innerTitle.textContent='내면 성장';$('career').append(innerTitle);for(const [k,n] of Object.entries(v.innerGrowth)){const el=document.createElement('div');el.className='stat-card';el.textContent=k+' · '+n;$('career').append(el)}const careers=[['소설가','창의성','글쓰기'],['게임 개발자','기술력','개발'],['디자이너','창의성','디자인'],['카페 창업','생활력','카페']];const h=document.createElement('h2');h.textContent='진로 발견';$('career').append(h);for(const [name,skill,exp] of careers){const d=document.createElement('div');d.className='stat-card';const unlocked=v.skills[skill]>=20&&v.experience[exp]>=5;d.textContent=(unlocked?'✦ ':'🔒 ')+name+' · '+(unlocked?'발견 완료':exp+' '+v.experience[exp]+'/5 · '+skill+' '+v.skills[skill]+'/20');$('career').append(d)}
careerPanel();professionPanel($('career'));developmentPanel($('career'));souvenirPanel($('career'));exKeepsakePanel($('career'));renderPairItemsPanel();$('relations').append($('giftPanel'),$('giftFeedback'));$('relationships').innerHTML='';const met=new Set([...Object.keys(v.met).filter(p=>v.met[p]),'서이준','백지한',...(state.scene>=2?['한시우','임하나']:[]),...(state.scene>=3?['강도윤','차유리']:[])]);for(const p of [...people].sort((a,b)=>Number(met.has(b))-Number(met.has(a))||(v.affection[b]||0)-(v.affection[a]||0))){const card=document.createElement('div');card.className='relationship-card';const top=document.createElement('div');top.className='compact';const name=document.createElement('b');name.textContent=p;const val=document.createElement('span');const level=v.affection[p]>=300?'각별한 사이':v.affection[p]>=200?'깊은 유대':v.affection[p]>=100?'특별한 사이':['초면','안면','친해지는 중','가까운 사이'][relationshipTier(p)];const datingDay=datingDayLabel(v,p);val.textContent=met.has(p)?(v.romance[p]==='dating'?'연인'+(datingDay?' · '+datingDay:''):level)+' · '+v.affection[p]+'/999':'아직 만나지 않음';top.append(name,val);card.append(top);if(met.has(p)){const profile=document.createElement('button');profile.className='secondary';profile.textContent='인물 프로필 보기';profile.onclick=()=>openNpcProfile(p);card.append(profile);const social=socialRecord(p),interest=document.createElement('p');interest.className='muted-note';interest.textContent='연애 관심도 '+social.interest+' · 우정 '+social.friendship+' · 외출 '+dateHistory(p).length+'회 (기록 기준)';card.append(interest);renderRelationshipScores(card,p);if(closeFriend(p)){const f=document.createElement('p');f.textContent='절친 · 연애와 별개의 소중한 관계';f.className='muted-note';card.append(f)}const story=document.createElement('p');story.className='muted-note';story.textContent=storyHint(p);card.append(story);const lifeHint=npcLifeHint(p);if(lifeHint){const t=document.createElement('p');t.className='muted-note';t.textContent=lifeHint;card.append(t)}if(v.affection[p]>=100){const status=document.createElement('p');status.className='muted-note';status.textContent=v.romance[p]==='dating'?'♥ 연인 관계':romanceReady(p)?'고백 이벤트 대기 · 수락해야 연인 확정':!v.personalEvents[p]?'개인 서사 완료 필요':!v.finalEvents[p]?'최종 이벤트 완료 필요':!v.symbolicGifts[p]?'상징적인 선물 이벤트 필요':'연애 루트 대기';card.append(status)}const meter=document.createElement('div');meter.className='meter';const fill=document.createElement('span');fill.style.width=(v.affection[p]/999*100)+'%';meter.append(fill);card.append(meter);const hints=v.giftHints?.[p]||[];if(hints.length){const hint=document.createElement('p');hint.className='muted-note';hint.textContent='대화에서 알아낸 취향: '+hints.join(', ');card.append(hint)}const known=Object.entries(v.giftHistory?.[p]||{});if(known.length){const memo=document.createElement('details'),title=document.createElement('summary');title.textContent='알아낸 선물 취향 ('+known.length+')';memo.append(title);for(const [item,info] of known){const line=document.createElement('p');line.className='muted-note';line.textContent=item+' · '+info.reaction;memo.append(line)}card.append(memo)}const btn=document.createElement('button');btn.className='secondary';btn.textContent=v.affection[p]>=20?'선물하기':'지인부터 선물 가능';btn.disabled=v.affection[p]<20;btn.addEventListener('click',()=>{if(selectedGiftTarget===p&&!$('giftPanel').classList.contains('hide')){$('giftPanel').classList.add('hide');selectedGiftTarget=null;return}selectedGiftTarget=p;$('giftHeading').textContent=p+'에게 선물하기';card.append($('giftPanel'),$('giftFeedback'));$('giftFeedback').classList.add('hide');$('giftPanel').classList.remove('hide')});card.append(btn);if(selectedGiftTarget===p){card.append($('giftPanel'),$('giftFeedback'))}}$('relationships').append(card)}save()}
