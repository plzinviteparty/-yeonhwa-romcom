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
