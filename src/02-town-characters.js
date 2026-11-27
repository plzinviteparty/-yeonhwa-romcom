const locations=[{id:'campus',name:'대학교',emoji:'🎓',desc:'대학생의 수업 중 만남',npc:{}},
{id:'home',name:'연화빌라',emoji:'🏠',desc:'주인공의 집이 있는 오래된 빌라. 옆집에는 서이준이 산다.',npc:{morning:['서이준'],evening:['서이준']}},
{id:'cafe',name:'오후 네 시',emoji:'☕',desc:'강도윤이 운영하는 카페. 차유리가 종종 작업하러 온다.',npc:{morning:['강도윤'],afternoon:['강도윤','차유리'],evening:['강도윤']}},
{id:'clinic',name:'동물병원',emoji:'🐾',desc:'오세린이 근무하는 동물병원. 홍보 포스터는 차유리가 디자인한다.',npc:{morning:['오세린'],afternoon:['오세린','차유리']}},
{id:'store',name:'연화편의점',emoji:'🏪',desc:'댄스 학원과 가까운 편의점. 임하나는 주로 야간에 근무한다.',npc:{afternoon:['한시우'],evening:['임하나','한시우']}},
{id:'dance',name:'댄스 학원',emoji:'🎵',desc:'유지안이 스트릿댄스를 가르치는 학원. 편의점과 가까운 거리다.',npc:{afternoon:['유지안'],evening:['유지안']}},
{id:'river',name:'연화천 산책로',emoji:'🌳',desc:'러닝과 반려견 산책을 즐기기 좋은 강변 길.',npc:{morning:['유지안'],evening:['강도윤']}},
{id:'police',name:'연화파출소',emoji:'🚓',desc:'정태오가 순찰 업무를 보는 동네 파출소.',npc:{morning:['정태오'],afternoon:['정태오']}},
{id:'realty',name:'연화부동산',emoji:'🏘️',desc:'백지한이 일하는 부동산. 건물 구조에 대해서는 꽤 까다롭다.',npc:{morning:['백지한'],afternoon:['백지한']}},
{id:'pool',name:'수영장',emoji:'🏊',desc:'정태오가 취미로 수영하러 오는 시설.',npc:{evening:['정태오']}},
{id:'arcade',name:'오락실',emoji:'🕹️',desc:'동네의 작은 오락실. 게임을 즐길 수 있다.',npc:{evening:['한시우']}},
{id:'pc',name:'PC방',emoji:'💻',desc:'게임과 티켓팅을 할 수 있는 곳.',npc:{afternoon:['한시우'],evening:['한시우']}},
{id:'park',name:'작은 공원',emoji:'🌼',desc:'잠깐 쉬거나 산책하기 좋은 동네 공원.',npc:{afternoon:['임하나']}}
];
let selectedPlace='home';
function drawTown(){const map=$('townMap');map.innerHTML='';const spots={home:[16,12],cafe:[49,12],clinic:[84,12],realty:[16,45],store:[49,45],dance:[84,45],police:[16,79],pool:[49,79],arcade:[84,79],pc:[16,27],park:[49,27],river:[84,27]};locations.filter(loc=>loc.id!=='campus').forEach(loc=>{const pos=spots[loc.id];const btn=document.createElement('button');btn.type='button';btn.className='place'+(selectedPlace===loc.id?' chosen':'');btn.style.left=pos[0]+'%';btn.style.top=pos[1]+'%';if(['river','park'].includes(loc.id))btn.dataset.kind='nature';btn.setAttribute('aria-label',loc.name+' 장소 선택');const ico=document.createElement('span');ico.className='emoji';ico.textContent=loc.emoji;const name=document.createElement('strong');name.textContent=loc.name;btn.append(ico,name);btn.addEventListener('click',()=>{selectedPlace=loc.id;drawTown()});map.append(btn)});const label=document.createElement('span');label.className='map-label';label.textContent='〰 연화천 〰';map.append(label);[[33,54,'🌲'],[66,54,'🌳'],[33,19,'🌼'],[66,19,'🌲'],[33,86,'🌿'],[66,86,'🌳']].forEach(([x,y,emoji])=>{const d=document.createElement('span');d.className='map-deco';d.style.left=x+'%';d.style.top=y+'%';d.textContent=emoji;map.append(d)});const loc=locations.find(l=>l.id===selectedPlace),outing=state&&initSim().running&&initSim().running.outing,time=outing?['morning','noon','afternoon','evening'][initSim().slot]:$('mapTime').value;$('mapTime').disabled=!!outing;if(outing)$('mapTime').value=time;const present=state?availablePeople(loc.id,time):loc.npc[time]||[];const detail=$('placeDetail');detail.innerHTML='';const h=document.createElement('strong');h.textContent=loc.emoji+' '+loc.name;const desc=document.createElement('p');desc.textContent=loc.desc;const people=document.createElement('p');people.textContent=present.length?'이 시간대에 자주 보이는 주민: '+present.join(', '):'이 시간대에 정해진 주민은 없다.';const hint=document.createElement('small');hint.textContent='자유외출 일정 중에만 장소를 방문할 수 있습니다.';detail.append(h,desc,people,hint);if(state){const visit=document.createElement('button');visit.type='button';visit.textContent='📍 '+loc.name+' 방문하기';visit.disabled=!outing;visit.addEventListener('click',()=>visitPlace(loc.id));detail.append(visit);if(outing&&['river','store'].includes(loc.id)&&summerNightEligible(initSim().day,initSim().slot)&&summerNightCandidates().length){const night=document.createElement('button');night.type='button';night.className='secondary';night.textContent='🌙 여름밤 강변 산책 제안하기';night.addEventListener('click',startSummerNight);detail.append(night)}}if(false&&['river','pool'].includes(loc.id)&&state){const btn=document.createElement('button');btn.type='button';btn.textContent=loc.id==='pool'?'🏊 수영하러 가기':'🚶 산책하러 가기';btn.addEventListener('click',()=>performExercise(loc.id==='pool'?'수영':'산책',true));detail.append(btn);if(loc.id==='river'){const run=document.createElement('button');run.className='secondary';run.textContent='🏃 강변에서 러닝';run.addEventListener('click',()=>performExercise('러닝',true));detail.append(run)}}}
$('mapTime').addEventListener('change',drawTown);drawTown();
const placeEvents={
home:['집에 돌아와 잠시 숨을 돌렸다. 창밖으로 연화동의 풍경이 보인다.'],
cafe:['카페 오후 네 시에서 강도윤이 원두를 정리하고 있다.','차유리가 노트북 앞에서 디자인 시안을 수정하고 있다.'],
clinic:['오세린이 진료를 마치고 보호자에게 주의사항을 설명한다.'],
store:['임하나가 계산대에서 상품을 정리하고 있다.','한시우가 편의점 앞에서 휴대전화를 확인한다.'],
dance:['유지안이 거울 앞에서 수강생들에게 동작을 보여준다.'],
river:['강변에 바람이 분다. 달리기 좋은 날씨다.','강도윤이 반려견과 천천히 걷고 있다.','유지안이 운동화를 고쳐 신고 다시 달리기 시작한다.'],
police:['정태오가 순찰을 마치고 파출소로 돌아온다.'],
realty:['백지한이 손님에게 건물 도면을 펼쳐 설명하고 있다.'],
pool:['정태오가 수영을 마치고 수건으로 머리를 닦는다.'],
arcade:['오락실에서 게임기 소리가 들린다.'],
pc:['PC방에서 게임 소리와 키보드 소리가 들린다.'],
park:['작은 공원의 벤치에서 잠깐 쉬어간다.']
};
const introPages=[
'봄의 첫날.\n익숙한 동네를 떠나 연화동으로 이사하기로 했다.\n새로운 집, 새로운 거리. 앞으로 어떤 일이 벌어질지는 아직 모른다.',
'버스에서 내려 골목을 걷자 작은 카페와 편의점, 오래된 상가들이 차례로 눈에 들어온다.\n조금 더 걸으면 강변 산책로가 나온다고 했다.\n낯선 동네인데도 이상하게 오래 머물 수 있을 것 같은 기분이다.',
'연화빌라 202호.\n열쇠를 돌리자 아직 아무것도 놓이지 않은 방이 모습을 드러낸다.\n이곳에서 보낼 365일. 일도, 친구도, 사랑도 아직 정해지지 않았다.\n우선 짐부터 풀어야겠다.'
];
function beginIntro(){state.introPage=0;showIntro()}
function showIntro(){setStoryStanding(null);const n=state.introPage||0;$('introText').textContent=introPages[n];$('introNext').textContent=n===introPages.length-1?'연화동 생활 시작하기':'다음';switchTab('intro');$('where').textContent='연화동으로 가는 길';$('clock').textContent='봄 · DAY 1';$('progress').textContent='프롤로그 '+(n+1)+' / '+introPages.length;save()}
$('introNext').addEventListener('click',()=>{if(state.introPage<introPages.length-1){state.introPage++;showIntro()}else{state.introDone=true;state.introPage=null;scene()}});
const npcArrival={"공재희":"분홍색 포인트가 들어간 검은 옷을 입은 여자가 휴대전화를 들여다보고 있다.",
'강도윤':'카운터 안쪽에서 키 큰 남자가 원두 통을 정리하고 있다. 손님이 들어오자 고개를 들고 환하게 웃는다.',
'차유리':'창가 자리에 앉은 여자가 노트북으로 디자인 작업을 하고 있다. 화면을 확인하던 그와 눈이 마주친다.',
'서이준':'구석 자리에 앉은 검은 머리 남자가 노트북 화면을 들여다보고 있다. 시선을 느꼈는지 고개를 들어 이쪽을 본다.',
'유지안':'운동복 차림의 여자가 숨을 고르며 달리기를 멈춘다. 눈이 마주치자 가볍게 손을 흔든다.',
'정태오':'짧은 머리의 남자가 운동을 마치고 물병을 챙긴다. 눈이 마주치자 고개를 살짝 숙인다.',
'백지한':'단정한 포마드 머리의 남자가 건물 도면을 정리하고 있다. 손님을 발견하고 자연스럽게 웃는다.',
'임하나':'계산대 안쪽에서 검은 단발머리 여자가 물건을 정리하고 있다. 눈이 마주치자 조용히 인사한다.',
'한시우':'붉은 곱슬머리 남자가 휴대전화를 내려놓는다. 이쪽을 보더니 장난스러운 표정을 짓는다.',
'오세린':'갈색 긴 머리의 여자가 진료 기록을 정리하고 있다. 인기척에 고개를 든다.'
};
const placeArrival={
home:'연화빌라 복도는 조용하다. 멀리서 현관문 닫히는 소리가 들린다.',
cafe:'카페 문을 열자 커피 향이 퍼진다. 창가로 햇빛이 들어온다.',
clinic:'동물병원 대기실에 잔잔한 음악이 흐른다.',
store:'편의점 자동문이 열리고 냉장고 소리가 들린다.',
dance:'학원 안에서 음악과 발소리가 들린다.',
river:'연화천을 따라 바람이 분다. 운동하는 사람들과 산책 나온 주민들이 지나간다.',
police:'파출소 앞에 순찰차가 세워져 있다.',
realty:'부동산 유리문 너머로 건물 매물 사진과 도면이 보인다.',
pool:'수영장에 물소리와 안내 방송이 울린다.',
arcade:'오락실 안에서 게임기 소리가 들린다.',
pc:'PC방 안에 키보드 소리가 가득하다.',
park:'공원 나무 아래 벤치가 놓여 있다.'
};

const familiarEncounters={
 realty:{'백지한':['부동산 안쪽에서 지한이 맞은편 의자에 놓인 도면을 자기 책상으로 옮겼다. 내가 앉을 만큼 자리가 났다.','유리문 너머로 지한과 눈이 마주쳤다. 펜을 내려놓는 것과 내가 문을 여는 게 거의 동시였다.','지한은 유리창에 새로 붙인 도면을 반듯하게 펴고 있었다. 유리 너머로 알아보고 손을 흔들었다.']},
 cafe:{'강도윤':['도윤이 빈 잔을 선반에 돌려놓고 나를 반겼다. 고개를 숙여 인사하는 동안 보조개가 패였다.','도윤이 카운터 한쪽을 내 쪽으로 비워 줬다. 주문표를 쓰던 펜이 멈췄다.','도윤이 닦아 놓은 잔을 내려놓았다. 잠깐 한가해진 카운터에 마주 섰다.']}
};
function familiarEncounterLine(place,p,day,slot){
 const variants=familiarEncounters[place]?.[p]||[
  p+' 쪽에서 나를 먼저 발견하고 손을 흔들었다. 가까이 가니 눈이 마주쳤다.',
  p+'도 마침 이쪽을 보고 있었다. 보폭을 조금 늦춰 나란히 섰다.',
  p+'에게 손을 흔들었다. 하던 일을 잠시 멈추고 내 쪽으로 몸을 돌렸다.'
 ];
 return variants[(day+slot)%variants.length];
}
function familiarEncounter(p){
 return people.includes(p)&&(vIsDating(p)||relationshipTier(p)>=1||initSim().social?.[p]?.friendRoute?.bond===true);
}
function arrivalText(place,person){const w=weatherFor(initSim().day).name,outdoor=['park','river'].includes(place);const base=outdoor&&w==='눈'?'눈이 내려 길가에 하얗게 쌓이고 있다.':outdoor&&w==='비'?'빗방울이 길 위로 떨어지고 있다.':place==='cafe'?'카페 안에 커피 향이 퍼진다.':placeArrival[place]||'연화동의 골목에 도착했다.';const special={home:{'서이준':'옆집 현관문이 열리고 검은 머리 남자가 나온다.'},river:{'강도윤':'골든 리트리버와 산책 중인 남자가 걸음을 멈춘다.','유지안':'운동복 차림의 여자가 달리기를 멈추고 숨을 고른다.'},park:{'임하나':'벤치에 앉아 쉬던 단발머리 여자가 고개를 든다.','서이준':'고양이에게 밥을 챙겨 주던 남자가 고개를 든다.'},police:{'정태오':'제복 차림의 남자가 순찰을 준비하다 고개를 숙인다.'},dance:{'유지안':'수업을 마친 분홍 머리 여자가 음악을 끄고 돌아본다.'},pc:{'한시우':'모니터 앞에 앉은 붉은 곱슬머리 남자가 헤드셋을 벗는다.'},arcade:{'한시우':'게임기 앞에서 점수를 확인하던 남자가 돌아본다.'},store:{'한시우':'음료를 고르던 붉은 머리 남자와 눈이 마주친다.'},clinic:{'차유리':'포스터 시안을 들고 온 여자가 인사를 건넨다.'}};if(familiarEncounter(person)){
 const v=initSim();
 const action=familiarEncounterLine(place,person,v.day,v.slot||0);
 return familiarEncounters[place]?.[person]?action:base+'\n\n'+action;
}return base+(person?'\n\n'+(outdoor?(person==='강도윤'?'모카와 산책하던 강도윤이 이쪽을 바라본다.':person+'의 모습이 산책로 너머로 보인다.'):(special[place]?.[person]||npcArrival[person])):'\n\n지금은 특별히 말을 걸 만한 사람이 보이지 않는다.')}
function encounterGreeting(p,place){const tier=relationshipTier(p),n=addressPlayer(p);if(tier===0)return '“'+personalSocialVoice[p][11]+'”';const lines={'공재희':'“'+n+', 왔어요?ㅋㅋ”','서이준':'“'+n+', 또 마주치네요.”','강도윤':place==='river'?'“'+n+'! 산책 나오셨어요?”':'“'+n+', 반가워요!”','한시우':tier>=2?'“'+n+'! 또 만났네.”':'“'+n+', 또 만났네요?”','정태오':'“'+n+', 안녕하십니까.”','백지한':'“'+n+', 오랜만이네요.”','임하나':'“'+n+'... 안녕하세요.”','차유리':'“오, '+n+'! 오늘은 어디 가는 길이에요?”','오세린':'“'+n+', 잘 지내셨어요?”','유지안':'“'+n+', 또 만났네요!”'};return lines[p]}


const voiceProfiles={"공재희":{"greet":["안녕하세요.","어 왔어요?","왜 이제 왔어요ㅋㅋ"],"order":["달달한 거요."],"care":["괜찮아요?"],"love":["진짜 나 좋아해요?"],"default":["아 진짜요?","그래서요?"]},
'서이준':{greet:['“안녕하세요. ...오늘도 나가세요?”','“왔어요? 고양이 밥 주고 들어가는 길이에요.”','“늦었네요. 기다린 건 아니고요.”'],order:['“여긴 커피 괜찮더라고요. 전 늘 같은 걸 마십니다.”'],care:['“괜찮아요? ...무리하지 마세요.”','“힘들면 말해요. 도울 수 있는 건 도울 테니까.”'],love:['“그런 말 아무한테나 하지 마세요.”','“...나한테는 해도 됩니다.”'],default:['“그렇군요. 무슨 일 있었어요?”','“그 얘기, 조금 더 해봐요.”','“...듣고 있어요.”']},
'강도윤':{greet:['“어서 오세요! 오늘도 커피 한 잔?”','“오, 왔어요? 좋아하는 자리 비워 뒀는데.”','“이제 오나 했네. 보고 싶었거든.”'],order:['“따뜻한 아메리카노요? 좋아요. 오늘은 고소한 원두로 내려 드릴게요.”','“취향 기억해 뒀죠. 오늘도 같은 걸로?”','“내가 좋아하는 원두로 한 잔 내려 줘도 돼요?”'],care:['“무슨 일 있어요? 얘기해 봐요. 들어 줄게.”','“오늘 힘들었어요? 잠깐 여기 앉아 있어요.”'],love:['“그렇게 말하면 나 기대해도 되는 거예요?”','“나 지금 꽤 진지한데. 눈치챘어요?”'],default:['“아, 진짜요? 그다음엔요?”','“그거 재밌는데요? 좀 더 얘기해 줘요.”','“음, 그건 생각 못 했네. 어떻게 됐어요?”']},
'한시우':{greet:['“오, 또 만났네? 우리 운명인가?”','“왔네? 오늘은 나랑 놀아 줄 거야?”','“나 기다렸지? 아니라고 하면 좀 서운한데.”'],order:['“커피? 나도 한 잔 얻어먹으면 안 돼?”'],care:['“왜 그렇게 기운이 없어? 누가 괴롭혔어?”','“야, 무리하지 마. 진짜로.”'],love:['“그거 고백이야? 나 설레도 돼?”','“평소엔 장난인데 지금은 진심이야.”'],default:['“어라, 그건 좀 의외인데?”','“그래서? 나 궁금해졌어.”','“아, 웃겨. 너 진짜 재밌다.”']},
'정태오':{greet:['“안녕하십니까.”','“...오셨습니까. 운동하러요?”','“기다리고 있었습니다. ...우연히요.”'],order:['“물은 챙기셨습니까?”'],care:['“안색이 좋지 않습니다. 쉬십시오.”','“혼자 무리하지 마십시오. 제가 도와드리겠습니다.”'],love:['“그런 말씀을 하시면... 곤란합니다.”','“저도 같은 마음입니다.”'],default:['“그렇습니까.”','“말씀하십시오. 듣고 있습니다.”','“...그건 제가 도와드릴 수 있습니다.”']},
'백지한':{greet:['“어, 우리 202호 고객님. 오늘도 반갑네요?”','“이제 고객님이라고 부르면 섭섭하려나?”','“보고 싶어서 왔다고 하면 믿을래요?”'],order:['“커피는 제가 살게요. 대신 얘기 좀 해요.”'],care:['“누가 우리 이웃님 속상하게 했어요?”','“웃어넘길 일이 아니면 말해요. 들어 줄게.”'],love:['“이거 참, 사람 헷갈리게 하시네.”','“나 원래 이런 말 잘하는데, 오늘은 좀 어렵네.”'],default:['“아, 그런 일이? 흥미로운데요.”','“그 얘기 좀 더 해봐요. 궁금해서.”','“내가 괜히 말 붙이는 것 같아요?”']},
'임하나':{greet:['“아, 안녕하세요.”','“오늘도 오셨네요. 반가워요.”','“기다렸... 아니, 그냥 반가워서요.”'],order:['“찾으시는 거 있으세요? 제가 알려 드릴게요.”'],care:['“많이 힘드셨어요? ...저라도 들어 드릴게요.”','“무리하지 마세요. 저도 그게 쉽진 않지만요.”'],love:['“네? 저한테요? ...정말요?”','“저도 같이 있고 싶어요.”'],default:['“아, 그렇군요.”','“그랬어요? 좀 더 얘기해 주실래요?”','“저도 비슷한 적 있어요.”']},
'차유리':{greet:['“오, 안녕! 오늘은 무슨 일이야?”','“야, 잘 왔다. 잠깐 같이 앉자.”','“드디어 왔네! 얘기할 거 쌓였어.”'],order:['“커피? 나도 마감 끝나면 같이 마실래.”'],care:['“표정 왜 그래? 무슨 일 났어?”','“야, 그건 그냥 넘길 일이 아닌데.”'],love:['“뭐야, 갑자기 설레게?”','“나 지금 좀 진심이거든.”'],default:['“헐, 진짜?”','“잠깐, 그다음은?”','“와, 그거 완전 네 얘기네.”']},
'오세린':{greet:['“안녕하세요. 오늘은 어떻게 오셨어요?”','“어머, 또 뵙네요. 잘 지내셨어요?”','“오셨네요. 기다렸어요.”'],order:['“차 한 잔 드릴까요? 진료가 곧 끝나요.”'],care:['“괜찮다고만 하지 마시고 쉬셔야 해요.”','“힘들면 기대셔도 돼요. 대신 무리하진 말아요.”'],love:['“그런 말씀은 가볍게 들을 수 없는데요.”','“저도 당신이 소중해요.”'],default:['“그랬군요. 마음이 쓰이네요.”','“조금 더 자세히 말씀해 주실래요?”','“그건 분명히 짚고 넘어가야겠어요.”']},
'유지안':{greet:['“어, 안녕! 오늘도 운동하러 왔어?”','“왔네! 같이 뛰자.”','“기다렸잖아. 오늘은 같이 가자!”'],order:['“운동 끝나고 마실래? 지금은 뛰자!”'],care:['“힘들면 쉬어. 페이스 맞춰 줄게.”','“나한테 말해. 혼자 끙끙대지 말고.”'],love:['“어? 그런 말 하면 나 진짜 믿는다?”','“나도 좋아. 숨길 생각 없어.”'],default:['“오, 진짜? 그래서?”','“그럼 우리 한번 해볼까?”','“그거 멋지다. 계속 얘기해 줘!”']}
};
function confessionCandidates(){const v=initSim();return people.filter(p=>romanceReady(p)&&socialRecord(p).interest>=3&&!seasonContext(p,v.day).conflicted&&v.romance[p]!=='dating'&&!aftermathRecord(p)&&v.confessions[p]!=='declined').sort((a,b)=>v.affection[b]-v.affection[a])}
function romanceReady(p){const v=initSim();return (v.affection[p]||0)>=100&&!!v.personalEvents[p]&&!!v.finalEvents[p]&&!!v.symbolicGifts[p]}
const closeRelationshipAffection=60,closeRelationshipTalks=8;
function relationshipTier(p){const v=initSim(),a=v.affection[p]||0,n=v.talkCount[p]||0;return a>=closeRelationshipAffection&&n>=closeRelationshipTalks?3:a>=25&&n>=4?2:a>=6&&n>=2?1:0}
function classifyTalk(t){if(/아메리카노|라떼|라테|커피|주문|메뉴|원두|마시고|한잔|한 잔/.test(t))return 'order';if(/좋아해|사랑해|보고싶|보고 싶|데이트|설레|사귀/.test(t))return 'love';if(/힘들|피곤|속상|아프|우울|걱정|괜찮/.test(t))return 'care';if(/안녕|반가|오랜만|또 왔|자주 보|잘 지냈/.test(t))return 'greet';return 'default'}
function talkResponse(p,t){const v=initSim(),tier=relationshipTier(p),intent=classifyTalk(t),profile=voiceProfiles[p]||voiceProfiles['서이준'];let group=profile[intent]||profile.default;const count=v.talkCount[p]||0;const index=Math.min(tier,group.length-1);let response=group[index];if(intent==='default'){response=group[(count+Math.floor(count/3))%group.length];if(tier>=2&&p==='서이준')response='“...오늘은 무슨 일 있었어요? 듣고 싶어서요.”'}
if(/누구세요|이름이 뭐|이름 뭐|소개해/.test(t)){response=count<=1?'“'+p+'입니다. 반가워요.”':'“제 이름 잊었어요? '+p+'이요.”'}
if(/사장님한테 인사|사장님께 인사/.test(t)&&p==='서이준')response='“아, 도윤 씨랑은 인사하셨군요. 저는 203호 사는 서이준입니다.”';
if(/고양이|길냥/.test(t)&&p==='서이준')response=tier>=2?'“걔 오늘도 왔어요. 같이 보러 갈래요?”':'“가끔 밥 챙겨 주는 애가 있어요.”';
if(/수영/.test(t)&&p==='정태오')response=tier>=2?'“다음엔 같이 수영하시겠습니까?”':'“퇴근 후에 종종 옵니다.”';
if(/강아지|반려견/.test(t)&&p==='강도윤')response='“우리 집 리트리버요? 산책을 정말 좋아하죠.”';
if(/게임|대회|경기/.test(t)&&p==='한시우')response='“스타썬더 경기 봤어? 다음엔 직접 보러 와.”';
if(/춤|무대|댄스/.test(t)&&p==='유지안')response='“춤추는 건 언제나 좋아. 무대는... 가끔 그립고.”';
if(/동물|진료|병원/.test(t)&&p==='오세린')response='“아픈 아이들 보면 마음이 쓰이죠. 그래도 돌볼 수 있어서 다행이에요.”';
if(/집|계약|부동산|하자/.test(t)&&p==='백지한')response='“집에 문제 생겼어요? 그건 제가 책임지고 확인할게요.”';
if(/디자인|마감|작업/.test(t)&&p==='차유리')response='“클라이언트 수정 요청이 또 왔거든. 이번엔 좀 괜찮아 보이지?”';
if(/야간|편의점|과외/.test(t)&&p==='임하나')response='“낮엔 과외하고 밤엔 여기 있어요. 가끔 피곤하긴 해요.”';
v.talkCount[p]=count+1;v.lastTopics[p]=intent;return response}

function writeJournal(text){const v=initSim();v.journal.unshift({day:v.day,text});v.journal=v.journal.slice(0,120);save()}
function legacyShowEvent(place,description,person){const v=initSim();v.activeEvent={place,person:person||null,day:v.day};const loc=locations.find(x=>x.id===place);const title=ev.jobEvent?ev.jobEvent[1]:loc?loc.name:'연화동';$('where').textContent=title;$('clock').textContent='DAY '+v.day+' · '+['오전','낮','오후','저녁'][v.slot||0];$('progress').textContent=person?'만남 · '+person:'생활 이벤트';$('log').innerHTML='';$('suggest').innerHTML='';add('이야기',description);if(person){const btn=document.createElement('button');btn.type='button';btn.className='secondary';btn.textContent=person+'에게 인사하기';btn.addEventListener('click',()=>{const key='greet:'+v.day+':'+person;if(!v.topicRewards[key]){v.topicRewards[key]=true;v.affection[person]=Math.min(999,(v.affection[person]||0)+2);add(person,talkResponse(person,'안녕하세요'));add('시스템',person+' 호감도 +2')}else add(person,'“또 뵙네요.”');renderSim()});$('suggest').append(btn)}$('next').classList.add('hide');switchTab('story');writeJournal(title+' · '+description)}
const npcProfiles=Object.freeze({'서이준':{height:181,mbti:'INTJ',age:29,gender:'남',job:'IT 보안 엔지니어',past:'전 게임 개발자',traits:'과묵하고 까칠함, 길고양이를 챙김',smoking:'연초'},'강도윤':{height:187,mbti:'ESFJ',age:32,gender:'남',job:'카페 운영',traits:'친화적',pet:'골든 리트리버 모카'},'한시우':{height:178,mbti:'ENTP',age:26,gender:'남',job:'스타썬더 프로게이머 · 대학 졸업반',education:'군 복무 및 휴학 후 복학',traits:'장난기 많음',injury:'왼쪽 손목'},'정태오':{height:185,mbti:'ISFP',age:34,gender:'남',job:'경찰관',past:'전 강력계 형사',traits:'과묵함, 수영'},'백지한':{height:183,mbti:'ESTP',age:29,gender:'남',job:'공인중개사',past:'건축 분야',traits:'능청스럽고 연애에 능숙함',hobbies:['와인','LP 수집'],smoking:'연초'},'임하나':{height:160,mbti:'ISFJ',age:25,gender:'여',job:'편의점 야간 근무 및 과외',traits:'소심하고 책임감 강함'},'차유리':{height:168,mbti:'ISTP',age:30,gender:'여',job:'프리랜서 디자이너',traits:'외향적'},'오세린':{height:156,mbti:'INFJ',age:33,gender:'여',job:'수의사',traits:'다정하고 단호함'},'공재희':{height:154,mbti:'INFP',age:22,gender:'여',job:'대학생 · 인터넷 방송인',education:'미디어 전공',traits:'인형뽑기와 FPS 게임',smoking:'연초'},'유지안':{height:173,mbti:'ENFP',age:28,gender:'여',job:'스트릿댄스 강사',past:'전 아이돌 연습생',traits:'활발함',smoking:'전자담배'}});
function openNpcProfile(p){const x=npcProfiles[p];if(!x||document.getElementById('npcProfileDialog'))return;const d=document.createElement('dialog');d.id='npcProfileDialog';d.style.cssText='width:min(84vw,380px);box-sizing:border-box;border:1px solid #d7ded7;border-radius:18px;padding:24px;background:#faf9f5;color:#30463b';const h=document.createElement('h2');h.textContent=p;d.append(h);for(const [label,value] of [['나이',x.age+'세'],['키',x.height+' cm'],['직업',x.job],['MBTI',x.mbti],['생일',birthdayLabel(npcBirthdays[p])]]){const row=document.createElement('div');row.style.cssText='display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid #d7ded7';const a=document.createElement('span'),b=document.createElement('b');a.textContent=label;b.textContent=value;row.append(a,b);d.append(row)}const close=document.createElement('button');close.textContent='닫기';close.style.cssText='width:100%;margin-top:20px';close.onclick=()=>d.close();d.addEventListener('close',()=>d.remove());d.append(close);document.body.append(d);d.showModal()}
const npcBirthdays={"공재희":"02-14","서이준":"01-12","강도윤":"03-22","한시우":"08-01","백지한":"10-10","정태오":"12-21","임하나":"06-10","차유리":"02-27","오세린":"04-04","유지안":"07-17"},birthdayLines={"공재희":["생일 축하해요!!","나 날짜 기억했거든요ㅋㅋ","인형 키링"],"서이준":["생일 축하해요. 오늘까지 일 생각만 하진 말고요.","기억하고 있었어요. …뭘 그렇게 놀라요?","보온 텀블러"],"강도윤":["생일 축하해요! 오늘은 맛있는 거 꼭 챙겨 먹어요.","오늘만큼은 제가 챙겨 드리고 싶네요.","수제 생일 케이크"],"한시우":["생일 축하해요! 오늘의 주인공 등장!","오늘은 게임에서 져도 봐 드릴게요. 아마도요.","오락실 캐릭터 키링"],"백지한":["생일 축하해요. 오늘 축하받을 사람이 많겠는데요?","그중에 제 축하도 조금 특별하게 기억해 주시면 좋겠네요.","향수"],"정태오":["생일 축하합니다. 오늘 하루 편안하게 보내십시오.","필요한 일이 있으면 연락 주십시오.","손목 보호대"],"임하나":["생일 축하해요. 달력에 적어 뒀어요.","...... 오늘 좋은 일이 많이 생겼으면 좋겠어요.","손편지와 쿠키"],"차유리":["생일 축하해요! 오늘은 하고 싶은 거 실컷 해 봐요.","기념으로 사진도 남겨 두면 좋겠네요.","직접 디자인한 엽서"],"오세린":["생일 축하해요. 오늘은 자신에게도 다정한 하루를 보내요.","태어나서 이렇게 만나게 된 것도 참 좋은 일이네요.","허브차 선물 세트"],"유지안":["생일 축하해요! 오늘 하루는 완전히 주인공 모드예요.","좋아하는 음악 틀고 신나게 보내요!","플레이리스트와 이어폰 파우치"]};
function birthdayKey(day){return new Date(Date.UTC(2021,2,day)).toISOString().slice(5,10)}
function validBirthday(s){return /^\d{2}-\d{2}$/.test(s||'')&&new Date('2021-'+s+'T00:00:00Z').toString()!=='Invalid Date'&&new Date('2021-'+s+'T00:00:00Z').toISOString().slice(5,10)===s}
function birthdayLabel(s){return s?Number(s.slice(0,2))+'월 '+Number(s.slice(3))+'일':'미등록'}
function birthdayMessages(day){const v=initSim();if(state.birthday!==birthdayKey(day))return 0;const d=phoneData();let count=0;for(const p of people){if(!socialRecord(p).contact||v.affection[p]<25)continue;const t=d.threads[p]||(d.threads[p]=[]);if(t.some(m=>m.birthday))continue;const a=birthdayLines[p],gift=v.affection[p]>=60?a[2]:null;t.push({day,birthday:true,gift,script:[a[0],a[1]+(v.affection[p]>=100?' '+birthdayExtra[p][0]:'')+(gift?' 선물도 준비했어요. ('+gift+')':''),'기억해 줘서 고마워요.','좋은 하루 보내세요.','덕분에 오늘이 더 특별해졌어요.',npcVoice[p][1]]});count++}if(count)save();return count}
const birthdayExtra={"공재희":["오늘 잠깐 나올래요?","헐 내 생일 기억했어요?"],"서이준":["오늘 저녁에 시간 있어요? 케이크 사 놨어요.","내 생일도 기억해요? …고마워요. 좀 좋네요."],"강도윤":["가게에 잠깐 들러요. 오늘은 제가 케이크를 대접하고 싶어요.","제 생일도 기억해 주셨어요? 오늘은 제가 축하받는 날이네요."],"한시우":["오늘 생일인데 그냥 보내면 안 되죠! 같이 놀아요.","어, 진짜 기억했어요? 와, 이건 좀 감동인데."],"백지한":["오늘 저녁은 비워 두셨나요? 생일인 분을 모시고 싶은데.","제 생일까지 챙겨 주시면 제가 괜히 기대하게 되잖아요."],"정태오":["시간 괜찮으시면 저녁 식사를 함께하시겠습니까?","기억해 주셔서 감사합니다. 이런 축하는 오랜만입니다."],"임하나":["...... 오늘 잠깐 만날 수 있을까요? 준비한 게 있어요.","제 생일을요? 정말 고마워요. 오늘은 좀 특별한 날이 됐네요."],"차유리":["오늘 같이 케이크 먹을까요? 기념사진도 찍고요.","와, 기억해 줬네요! 오늘 기분 좋게 작업할 수 있겠어요."],"오세린":["오늘 시간 괜찮으면 차 한잔해요. 함께 축하하고 싶어요.","어머, 기억해 주셨네요. 마음이 따뜻해지는걸요."],"유지안":["오늘 생일 파티 어때요? 좋아하는 노래도 골라 놨어요.","와, 제 생일 기억했어요? 오늘 수업도 신나게 하겠는데요!"]};
function birthdayAction(p,gift){const v=initSim();v.npcBirthdayDone=v.npcBirthdayDone||{};if(v.npcBirthdayDone[p])return;if(gift&&v.money<15000){alert('선물 비용이 부족해요.');return}if(gift)v.money-=15000;v.npcBirthdayDone[p]=true;v.affection[p]=Math.min(999,(v.affection[p]||0)+(gift?8:4));const t=phoneData().threads[p]||(phoneData().threads[p]=[]);t.push({day:v.day,booking:true,reply:1,playerLine:'생일 축하해요!'+(gift?' 작은 선물도 준비했어요.':''),npcLine:birthdayExtra[p][1]});writeJournal(p+' 생일 축하'+(gift?' · 선물 전달':''));save();renderSim()}
function birthdayButton(el,label,fn){const b=document.createElement('button');b.className='secondary';b.textContent=label;b.onclick=fn;el.append(b)}
function birthdayGuests(){const v=initSim();return people.filter(p=>socialRecord(p).contact&&v.affection[p]>=100).sort((a,b)=>v.affection[b]-v.affection[a])}
function birthdayVisit(guests){const v=initSim();if(v.running||v.activeEvent||v.birthdayPartyDone||state.birthday!==birthdayKey(v.day))return;v.activeEvent={place:'cafe',description:guests.length>1?'약속 장소에 도착하자 익숙한 얼굴들이 케이크 앞에서 기다리고 있었다.':'생일을 함께 보내기로 한 약속 장소에 도착했다.',birthdayParty:true,guests,steps:[],day:v.day};save();renderChoiceEvent()}
function renderBirthdayParty(ev){const v=initSim(),g=ev.guests,n=ev.steps.length;$('progress').textContent='생일 · '+Math.min(n+1,3)+'/3';const scenes=['테이블 위에 작은 케이크가 놓여 있다. 촛불이 켜졌다.','함께 케이크를 나누며 이야기를 나눴다.','헤어지기 전, 오늘의 기억을 남기기로 했다.'];const opts=[['소원을 빌고 촛불을 끈다','함께 촛불을 끄자고 한다'],['이렇게 챙겨 줘서 정말 고마워요.','오늘 같이 있어서 행복해요.'],['기념사진을 찍어요.','오늘을 오래 기억할게요.']];for(let i=0;i<=Math.min(n,2);i++){add('이야기',scenes[i]);if(i===0)for(const p of g)add(p,birthdayLines[p][0]);if(i===1)for(const p of g)add(p,birthdayLines[p][1]);if(ev.steps[i])add(state.name,ev.steps[i],true)}if(n===3){choiceButton('생일 모임 마치기',finishEvent);return}for(const label of opts[n])choiceButton(label,()=>{if(ev.steps.length!==n)return;ev.steps.push(label);if(ev.steps.length===3){v.birthdayPartyDone=true;for(const p of g){v.affection[p]=Math.min(999,(v.affection[p]||0)+8);socialRecord(p).lastTogether=v.day;v.birthdayGifts=v.birthdayGifts||{};v.birthdayGifts[p]=birthdayLines[p][2]}writeJournal('생일 모임 · '+g.join(', '))}save();renderChoiceEvent();renderSim()})}
function birthdayPanel(){const v=initSim(),el=$('simStats'),b=document.createElement('button');b.className='secondary';b.textContent=state.birthday?'내 생일 · '+birthdayLabel(state.birthday):'내 생일 등록하기';b.disabled=!!state.birthday;b.onclick=()=>{const s=prompt('생일을 MM-DD 형식으로 입력해 주세요. (예: 06-02)');if(s===null)return;if(!validBirthday(s)){alert('올바른 월과 일을 입력해 주세요.');return}state.birthday=s;save();renderSim()};el.append(b);if(state.birthday===birthdayKey(v.day)){const h=document.createElement('p');h.textContent='🎂 오늘은 당신의 생일입니다!';el.append(h);if(!v.birthdayPartyDone&&!v.running&&!v.activeEvent){const guests=birthdayGuests();for(const p of guests)birthdayButton(el,p+'와 생일 보내기',()=>birthdayVisit([p]));const groups=[['강도윤','백지한','정태오'],['차유리','오세린']];for(const group of groups){const friends=group.filter(p=>guests.includes(p));if(friends.length>=2)birthdayButton(el,friends.join(' · ')+'의 생일 모임',()=>birthdayVisit(friends))}}}if(v.jaeheeBear){const bear=document.createElement('div');bear.textContent='받은 기념품 · 공재희의 흰색 곰인형';$('career').append(bear)}const gifts=Object.entries(v.birthdayGifts||{});if(gifts.length){const h=document.createElement('details'),s=document.createElement('summary');s.textContent='받은 생일 선물 ('+gifts.length+')';h.append(s);for(const [p,g] of gifts){const t=document.createElement('p');t.textContent=p+' · '+g;h.append(t)}el.append(h)}const today=people.filter(p=>npcBirthdays[p]===birthdayKey(v.day)&&v.met[p]);for(const p of today){const t=document.createElement('p');t.textContent='🎂 오늘은 '+p+'의 생일입니다.';el.append(t);if(socialRecord(p).contact&&!v.npcBirthdayDone?.[p]){birthdayButton(el,p+'에게 축하 문자 보내기',()=>birthdayAction(p,false));birthdayButton(el,p+'에게 생일 선물 보내기 (15,000원)',()=>birthdayAction(p,true))}}}
const npcAges=Object.fromEntries(Object.entries(npcProfiles).map(([p,x])=>[p,x.age]));
const npcRelations=Object.freeze({'강도윤:정태오':{address:'형',bond:'군대 후임'},'백지한:강도윤':{address:'형',bond:'친구'},'백지한:정태오':{address:'형',bond:'친구'},'정태오:강도윤':{address:'도윤아',bond:'군대 선임'},'정태오:백지한':{address:'지한아',bond:'친구'},'강도윤:백지한':{address:'지한아',bond:'친구'},'차유리:오세린':{address:'언니',bond:'친구'},'오세린:차유리':{address:'유리야',bond:'친구'},'한시우:서이준':{address:'이준 씨',bond:'어색한 과거 인연'},'서이준:한시우':{address:'시우 씨',bond:'어색한 과거 인연'},'임하나:유지안':{address:'지안 씨',bond:'어색한 사이'},'유지안:임하나':{address:'하나 씨',bond:'어색한 사이'}});
function npcAddress(from,to){return npcRelations[from+':'+to]?.address||to+' 씨'}
function seniorAddress(speakerGender,targetGender){if(speakerGender==='남')return targetGender==='남'?'형':'누나';return targetGender==='남'?'오빠':'언니'}function addressPlayer(p){const tier=relationshipTier(p),age=Number(state.age),name=state.name,profile=npcProfiles[p],custom=initSim().relationshipMemory?.[p]?.address?.npcToPlayer;if(custom)return custom;if(tier<2||!profile)return name+' 씨';if(age>profile.age&&(p==='한시우'||profile.gender==='여'))return seniorAddress(profile.gender,'여');return name+' 씨'}
const npcLifeEvents={"서이준":[[48,3,"보안 점검 프로젝트","…외부 점검 때문에 며칠 귀가가 늦을 것 같아요.","큰 문제 없이 점검을 마쳤어요. 이제 좀 쉬려고요."],[142,4,"개인 개발 실험","작은 프로그램을 만들고 있어요. 며칠은 집중하려고요.","…원하는 기능이 작동하네요. 그냥 개인 작업이에요."],[268,3,"연말 보안 업무","연말이라 확인할 일이 많네요.","점검 끝났습니다. 오랜만에 고양이 밥도 챙겨야겠네요."]],"강도윤":[[62,3,"원두 산지 방문","하하, 새로운 원두를 알아보러 잠깐 다녀올게요.","좋은 원두를 찾았어요. 다음에 맛 보여 드릴게요."],[154,4,"독립 카페 매물 탐색","며칠 동안 가게 후보지를 돌아보려고요.","괜찮은 후보가 있긴 한데, 계약은 서두르지 않으려고요."],[283,3,"커피 시음회","새 블렌드 시음회 준비 중이에요. 시간 되시면 들러요.","시음 의견을 많이 들었어요. 배합을 조정해 봐야겠네요.","cafe","시음회에서 도윤이 서로 다른 두 잔을 건넸다.","하하, 칭찬 말고 맛 차이를 솔직하게 알려 주세요."]],"한시우":[[70,5,"정규 시즌 원정 경기","이번 주 원정 경기 있어요! 연습 좀 빡세게 할 듯.","아쉽게 졌어요. 영상 다시 보면서 다음 경기 준비하려고요.","home","원정 경기 중계를 본 뒤 시우와 영상 통화를 했다.","와, 경기 봤어요? 졌지만 다음엔 더 잘할 거예요."],[165,4,"손목 휴식기","손목이 불편해서 연습량 줄이고 진료받으려고요.","진료받고 쉬는 중이에요. 당분간 무리 안 하려고요."],[258,5,"시즌 마지막 경기","마지막 경기 준비 중! 이번엔 팀워크 잘 맞춰 보고 싶어요.","이겼어요! 팀원들이 진짜 잘해 줬거든요.","home","경기 중계를 본 뒤 시우와 영상 통화를 했다.","오예! 응원해 줘서 고마워요. 오늘은 좀 기뻐해도 되겠죠?"]],"정태오":[[55,3,"지역 안전 교육","며칠간 지역 안전 교육 지원을 맡았습니다.","교육을 마쳤습니다. 주민들이 질문을 많이 해 주셨습니다."],[146,3,"유기견 봉사 준비","보호소에 필요한 물품을 확인하고 있습니다.","물품 정리를 마쳤습니다. 다음 봉사에도 도움이 되겠군요."],[271,4,"연말 특별 근무","특별 근무로 평소 시간에 뵙기 어려울 듯합니다.","근무를 마쳤습니다. 이제 평소 일정으로 돌아갑니다."]],"백지한":[[49,3,"상가 현장 조사","며칠 현장 다녀올 일이 좀 있어요.","현장 확인 끝냈어요. 손볼 곳이 많더라고요."],[158,4,"건축 자료 조사","오래된 건축 자료를 보러 잠깐 시간을 내려고요.","자료 잘 보고 왔어요. 도면 다시 꺼내 보고 싶더라고요."],[276,3,"주택 모형 전시 관람","작은 건축 전시가 열려서 보러 가려고요. 같이 볼래요?","재밌는 설계가 많았어요. 제 취향도 다시 생각해 봤네요.","park","전시를 관람한 뒤 지한과 공원에서 작품 이야기를 나눴다.","어떤 공간이 기억에 남았어요? 당신 취향도 궁금한데."]],"임하나":[[59,3,"과외 시험 대비","학생 시험 기간이라 이번 주는 시간이 조금 부족해요.","시험 준비는 끝났어요. 오늘은 저도 좀 쉬려고요."],[173,4,"가족 일정 조정","집안 일정 때문에 며칠 바쁠 것 같아요.","……이번엔 제 일정도 미리 이야기해 뒀어요."],[278,3,"혼자만의 외출","저… 며칠 제 시간을 내 보려고요.","조용히 쉬고 왔어요. 생각보다 좋았어요."]],"차유리":[[46,4,"디자인 마감","와, 이번 주 마감 몰렸어요. 작업 좀 하고 올게요.","마감 끝! 드디어 컴퓨터 끄고 쉴 수 있다."],[151,4,"개인 작품 준비","의뢰 말고 제 그림 그릴 시간을 좀 빼 놨어요.","그림 몇 점 완성했어요. 마음에 드는 것도 있고 아닌 것도 있고."],[263,4,"작은 전시 참가","공동 전시에 제 그림 몇 점 걸어요. 구경 올래요?","전시 끝났어요. 다른 작가 작업 보는 것도 좋았어요.","cafe","전시를 둘러본 뒤 유리와 작품 이야기를 나눴다.","오, 그 그림이 좋았어요? 그건 저도 꽤 애정하는 건데!"]],"오세린":[[53,3,"동물병원 교육 일정","으음, 며칠 교육 일정이 있어서 조금 바쁠 것 같네요.","새로 배운 내용을 정리하고 있어요. 유익한 시간이었답니다."],[167,4,"집중 진료 기간","예약이 몰려서 평소보다 조금 늦게 마칠 것 같아요.","아아, 진료가 한결 여유로워졌네요. 오늘은 푹 쉬어야겠어요."],[282,3,"반려동물 돌봄 강의","동네 보호자분들께 돌봄 교육을 하기로 했어요.","질문이 많았답니다. 동물의 생활을 이해하는 분들이 늘면 좋겠어요.","clinic","강의가 끝난 뒤 세린이 교육 자료를 정리했다.","아아, 와 주셨네요. 궁금했던 점이 있었나요?"]],"유지안":[[42,4,"수강생 발표회 준비","와우! 발표회 준비 시작했어요. 저녁에 좀 바쁠 듯!","다들 무대 잘 마쳤어요! 제가 더 떨렸다니까요."],[137,5,"안무 제작 프로젝트","새 안무 작업 들어가요. 며칠 연습실에 붙어 있을 것 같아요.","예쓰! 안무 완성! 생각한 느낌이 잘 나왔어요."],[249,4,"동네 공연 참가","저도 이번에 작은 공연 나가요! 시간 되면 보러 와요.","무대 끝! 와, 진짜 오랜만에 관객 보는 기분이 좋았어요.","dance","공연을 마친 지안이 땀을 닦으며 환하게 웃었다.","와우! 왔네요! 오늘 제가 제일 즐거웠던 부분 맞혀 봐요!"]],"공재희":[[61,4,"대학 시험 기간","아 시험 때문에 이번 주 방송 쉬어야 됨ㅋㅋ 공부 좀 하고 올게요.","웅 시험 끝. 일단 F만 아니길 빌어 주세요."],[160,3,"방송 콘텐츠 개편","새 콘텐츠 짜는 중이라 잠깐 휴방할게요.","새 코너 해 봤는데 반응 괜찮았음ㅋㅋ 좀 더 해 보려고요."],[273,4,"기념 방송 준비","나 기념 방송 준비 중이에요!! 이번엔 진짜 열심히 준비했는데… 보러 와 줄 거죠?ㅎㅎ","방송 끝! 생각보다 많은 분들이 와 주셔서 좋았음.","home","기념 방송을 시청한 뒤 재희와 영상 통화로 소감을 나눴다.","헐ㅋㅋ 봤어요? 나 오늘 진짜 열심히 준비했음."]]};
function npcLifeRecord(){const v=initSim();return v.npcLife||(v.npcLife={notices:{},supported:{},history:{}})}
function npcLifeKey(p,i){return p+'|'+i}
function npcLifeActive(p,day){return (npcLifeEvents[p]||[]).findIndex(a=>day>=a[0]&&day<a[0]+a[1])}
function npcLifeBusy(p,day,slot){const i=npcLifeActive(p,day);if(i<0)return false;const a=npcLifeEvents[p][i];return day===a[0]+a[1]-1||slot===2||slot===3}
function npcLifeSupportDay(a){return a[0]+a[1]}
function npcLifeTick(day){const r=npcLifeRecord(),phone=phoneData();for(const [p,events] of Object.entries(npcLifeEvents))for(const [i,a] of events.entries()){const key=npcLifeKey(p,i);if(day>=a[0]&&!r.history[key])r.history[key]={start:a[0],end:npcLifeSupportDay(a),status:'busy'};if(day>=npcLifeSupportDay(a)&&r.history[key])r.history[key].status='complete';if(!socialRecord(p).contact||['cooling','ready'].includes(aftermathRecord(p)?.status))continue;const phase=day===a[0]?'start':day===npcLifeSupportDay(a)?'end':null;if(!phase||r.notices[key+':'+phase])continue;const t=phone.threads[p]||(phone.threads[p]=[]);t.push({day,npcLifeNotice:{i,phase},npcLine:phase==='start'?a[3]:a[4]});r.notices[key+':'+phase]=true}}
function supportBookingSlots(p,i,day,checkBooking=true){
 const v=initSim(),a=npcLifeEvents[p]?.[i];
 if(!a?.[5]||day!==npcLifeSupportDay(a)||day<v.day||day>365||[299,300,365].includes(day)||npcLifeRecord().supported[npcLifeKey(p,i)]||(checkBooking&&dateBook()[day]))return [];
 // Timed performances, live broadcasts and the lecture follow their announced evening session.
 const choices=['커피 시음회','주택 모형 전시 관람','작은 전시 참가'].includes(a[2])?[0,1,2,3]:[3];
 return choices.filter(slot=>!fixedActivity(day,slot)&&!npcLifeBusy(p,day,slot));
}
function reserveNpcLife(p,i,slot){
 const v=initSim(),a=npcLifeEvents[p]?.[i];if(!a)return false;
 const day=npcLifeSupportDay(a);
 if(day<=v.day||!supportBookingSlots(p,i,day).includes(slot))return false;
 dateBook()[day]={p,slot,venue:a[2],npcLifeSupport:i};
 writeJournal(p+' · '+calendarDate(day).label+' '+dayLabels[slot]+' · '+a[2]+' 응원 일정');save();return true;
}
function lifeNoticeReply(p,phase,k){
if(p==='정태오')return phase==='start'?'감사합니다. 잘 다녀오겠습니다.':'예. 이제 조금 쉬겠습니다.';
if(p==='공재희')return phase==='start'?'웅ㅋㅋ 다녀올게요.':'이제 좀 쉬려고요ㅋㅋ';
if(p==='서이준')return phase==='start'?(k===2?'네. 늦어지면 중간에 좀 쉬려고요.':'네. 다녀와서 연락할게요.'):'네. 오늘은 일찍 들어가서 쉴게요.';
return phase==='start'?(k===2?'네. 무리하지 않을게요.':'응원해 줘서 고마워요.'):'고마워요. 이제 좀 쉬려고요.';
}
function npcLifePhone(p,m,thread,bubble){
 const v=initSim(),o=m.npcLifeNotice,a=npcLifeEvents[p]?.[o.i];if(!a)return;
 bubble(calendarDate(m.day).label+' · '+p,m.npcLine);
 if(m.reply){if(m.playerLine)bubble(state.name,m.playerLine,true);if(m.response)bubble(p,m.reply<=2?lifeNoticeReply(p,o.phase,m.reply):m.response);return}
 const opts=o.phase==='start'?[['잘 준비하고 와요. 응원할게요.',1],['바쁠 텐데 무리하지 마세요.',2],['메시지만 확인한다',3]]:[['수고 많았어요.',1],['잘 마쳤다니 다행이에요.',2],['메시지만 확인한다',3]];
 const day=npcLifeSupportDay(a),slots=o.phase==='start'&&day>v.day?supportBookingSlots(p,o.i,day):[];
 let times;
 if(slots.length){
  times=document.createElement('select');times.setAttribute('aria-label','응원 일정 시간대');
  for(const slot of slots){const option=document.createElement('option');option.value=slot;option.textContent=calendarDate(day).label+' '+dayLabels[slot];times.append(option)}
  if(slots.includes(3))times.value='3';
  thread.append(times);opts.unshift([a[5]==='home'?'중계 시청 및 영상 통화':'직접 응원하기',4]);
 }
 for(const [label,k] of opts){
  const b=document.createElement('button');b.className='secondary';b.textContent=phoneChoiceText(p,m,label);
  b.onclick=()=>{
   if(m.reply)return;
   const slot=k===4?Number(times.value):null;
   if(k===4&&!reserveNpcLife(p,o.i,slot)){alert('다른 일정과 겹쳐 약속을 잡지 못했어요.');return}
   m.reply=k;m.playerLine=k===4?calendarDate(day).label+' '+dayLabels[slot]+' · '+label:k===3?'':label;
   m.response=k===4?(p==='공재희'?'헐 진짜 봐 주는 거예요? 약속!ㅎㅎ':'좋아요. 그날 봐요.'):k===3?'':lifeNoticeReply(p,o.phase,k);
   if(k!==3){socialRecord(p).friendship++;v.affection[p]=Math.min(999,(v.affection[p]||0)+1);remember(p,'npcLife:'+o.i+':'+o.phase,m.playerLine)}
   save();phoneBadge();renderPhone();renderSim();syncSchedule()
  };thread.append(b)
 }
}
function renderNpcLifeSupport(ev){const v=initSim(),p=ev.person,o=ev.npcLifeSupport,a=npcLifeEvents[p][o.i];$('progress').textContent='주민의 이야기 · '+a[2];add('이야기',a[6]);add(p,a[7]);if(o.answer){add(state.name,o.answer,true);choiceButton('일정 계속하기',finishEvent);return}for(const label of ['오늘 정말 수고 많았어요.','다음에도 하고 싶은 일을 응원할게요.'])choiceButton(label,()=>{if(o.answer)return;o.answer=label;npcLifeRecord().supported[npcLifeKey(p,o.i)]={day:v.day,choice:label};socialRecord(p).friendship+=2;socialRecord(p).lastTogether=v.day;socialRecord(p).lastSeen=v.day;v.affection[p]=Math.min(999,(v.affection[p]||0)+3);if(vIsDating(p))feel(p,{security:2});remember(p,'npcLife:support:'+o.i,label);writeJournal(p+' · '+a[2]+' 응원');save();renderChoiceEvent();renderSim()})}
function npcLifeHint(p){const v=initSim(),i=npcLifeActive(p,v.day),a=npcLifeEvents[p]?.[i];if(!a)return '';return npcLifeRecord().notices[npcLifeKey(p,i)+':start']?'현재 일정 · '+a[2]+' ('+calendarDate(npcLifeSupportDay(a)).label+' 무렵까지)':'요즘 평소와 일정이 조금 다르다.'}

function npcPlace(p,d,s,day){if(day!==undefined&&npcLifeBusy(p,day,s))return null;return npcBasePlace(p,d,s)}
function npcBasePlace(p,d,s){const weekend=d>=5;switch(p){case '서이준':return s===0?'home':s===3?(d===2?'store':weekend?'park':'home'):null;case '강도윤':return d===0?(s===3?'river':null):s===3?'river':'cafe';case '백지한':return s===3?(['cafe','park','store','cafe','park','cafe','park'][d]):d===5&&s===2?'cafe':d!==6&&s<3?'realty':null;case '정태오':return d===5&&s===2?'cafe':s===3?([1,2,5].includes(d)?'pool':[0,4].includes(d)?'park':d===6?'store':null):![2,5].includes(d)&&s<3?'police':null;case '임하나':return s===3?'store':s===2&&[1,4,6].includes(d)?'park':null;case '차유리':return s===3?([0,3,5].includes(d)?'cafe':[2,6].includes(d)?'park':null):s===2&&[1,3,5].includes(d)?'clinic':s===1||s===2?'cafe':null;case '오세린':return s===3?([0,2,5].includes(d)?'pool':[1,4].includes(d)?'cafe':'park'):d===6&&s===2?'pool':d!==6&&s<3?'clinic':null;case '유지안':return s===0?'river':d===1&&s===3?'store':d!==0&&s>=2?'dance':s===1&&d===0?'park':null;case '공재희':return s===0?null:s===1?([2,5,6].includes(d)?'cafe':null):s===2?['arcade','cafe','cafe','arcade','store','arcade','cafe'][d]:['store','pc','store','pc','store','arcade','park'][d];case '한시우':return s===3?['pc','arcade','store'][d%3]:weekend&&s===2?'pc':null;default:return null}}
function availablePeople(place,time){const v=initSim(),d=(v.day-1)%7,s=v.running?v.slot:({morning:0,noon:1,afternoon:2,evening:3}[time]??2);return people.filter(p=>(p!=='공재희'||v.jaeheeIntro)&&npcPlace(p,d,s,v.day)===place)}
function meetAt(place,time){const loc=locations.find(x=>x.id===place);if(!loc)return null;const possible=availablePeople(place,time).filter(p=>people.includes(p));if(!possible.length)return null;const v=initSim();v.meetMiss=v.meetMiss||{};const pending=possible.filter(p=>socialRecord(p).reunionPending).sort((a,b)=>socialRecord(a).reunionPending.day-socialRecord(b).reunionPending.day);if(pending.length){v.met[pending[0]]=true;return pending[0]}const neglected=possible.filter(p=>v.met[p]&&!socialRecord(p).contact&&v.day-(socialRecord(p).lastSeen||(p==='공재희'?v.jaeheeIntro?.day:0)||1)>=14).sort((a,b)=>(socialRecord(a).lastSeen||0)-(socialRecord(b).lastSeen||0));if(neglected.length){v.meetMiss[place]=0;return neglected[0]}const chance=Math.min(.9,.6+(v.meetMiss[place]||0)*.15);if(Math.random()>chance){v.meetMiss[place]=(v.meetMiss[place]||0)+1;return null}v.meetMiss[place]=0;const ready=possible.filter(p=>contactReady(p)||pickPersonalStory(p,place,null,null));const pool=ready.length&&Math.random()<.72?ready:possible;const p=pool[Math.floor(Math.random()*pool.length)];v.met[p]=true;return p}
function legacyVisitPlace(place){if(!state)return;const v=initSim();if(v.freeVisitDay===v.day){alert('오늘의 자유 방문은 이미 사용했어요. 다음 날 다시 방문해 주세요.');return}v.freeVisitDay=v.day;const time=['morning','noon','afternoon','evening'][v.slot||0];const loc=locations.find(x=>x.id===place);const person=meetAt(place,time);const desc=arrivalText(place,person);showEvent(place,desc,person);renderSim()}
const jobEncounters={'출근':[['서이준','회사','사내 보안 점검을 위해 외부 업체 직원이 방문했다. 옆집에 사는 서이준이다.','여기서 일하시는 줄 몰랐어요.','“저는 외부 보안 업체에서 나왔습니다. 오늘은 점검 때문에 왔어요.”','점검 중이시니 나중에 인사할게요.','“네. 업무 끝나고 뵙겠습니다.”'],['백지한','회사 근처','점심시간, 인근 상가의 임대 안내를 확인하던 백지한과 마주쳤다.','이 근처에도 담당하시는 매물이 있어요?','“네, 상가 쪽도 중개하거든요. 오늘은 현장 확인 중이에요.”','점심은 드셨어요?','“아직이요. 근처에서 먹으려고요.”']],'외주 작업':[['차유리','외주 미팅','외주 프로젝트의 디자인 담당자와 미팅하게 되었다. 차유리다.','이번 작업 잘 부탁드려요.','“저도요! 필요한 자료부터 같이 확인해 봐요.”','작업 방향부터 맞춰 볼까요?','“좋아요. 초반에 정리해 두면 수정도 줄어들죠.”']],'대학 수업':[['임하나','대학 근처','수업을 마치고 나온 길, 근처에서 과외 자료를 정리하던 임하나와 마주쳤다.','공부하고 계셨어요?','“아, 과외 수업 자료를 준비하고 있었어요.”','자료가 많네요. 무리하지 마세요.','“감사해요. 조금만 더 하면 끝나요.”'],['유지안','대학','교내 행사 공연을 준비하는 학생들 사이에서 외부 강사 유지안이 안무를 지도하고 있다.','오늘 공연 준비 중이세요?','“네! 학생들 안무를 봐 주러 왔어요.”','연습 잘 되길 바랄게요.','“고마워요! 다들 열심히 하고 있거든요.”']]};
const partJobs={'편의점 알바':['store','임하나','편의점'],'부동산 사무 보조':['realty','백지한','부동산'],'동물병원 보조':['clinic','오세린','동물병원'],'댄스 학원 데스크':['dance','유지안','댄스 학원']};
function activityPlace(a){return {'아르바이트':'cafe','카페 실습':'cafe','교류':'park','수영':'pool','러닝':'river','산책':'river','공부':'home','글쓰기':'home','개발':'home','디자인':'home','휴식':'home','PC방에서 게임하기':'pc'}[a]||'home'}
function runActivity(a){const result=householdActivity(a)||professionActivity(a)||runActivityCore(a);trackDevelopment(a,result);return result}
function runActivityCore(a){const h=healthRecord();if(a==='휴식')h.fatigue=Math.max(0,h.fatigue-22);else if(['산책','PC방에서 게임하기'].includes(a))h.fatigue=Math.max(0,h.fatigue-3);else h.fatigue=Math.min(100,h.fatigue+(['출근','대학 수업','외주 작업'].includes(a)?7:10));const v=initSim();const place=activityPlace(a);let note='',person=null;if(a==='출근'||a==='대학 수업'||a==='외주 작업'){const cost=a==='출근'?12:10;v.energy=Math.max(0,v.energy-cost);if(a==='출근'){lifeRecord().work++;v.skills.생활력++;note='회사에서 근무했다. 생활력 +1, 체력 -'+cost}else if(a==='대학 수업'){v.skills.지성+=2;note='대학 수업을 들었다. 지성 +2, 체력 -'+cost}else{v.money+=65000;v.skills.기술력++;note='외주 작업을 완료했다. 정산 +65,000원, 기술력 +1, 체력 -'+cost}v.jobEncounterDays=v.jobEncounterDays||{};const candidates=(jobEncounters[a]||[]).filter(e=>!npcLifeBusy(e[0],v.day,v.slot));if(candidates.length&&!v.jobEncounterDays[v.day]&&Math.random()<(a==='출근'?.09:.22)){const e=candidates[Math.floor(Math.random()*candidates.length)];v.jobEncounterDays[v.day]=true;v.met[e[0]]=true;return {place:'work',note,person:e[0],jobEvent:e}}return {place:'home',note,person:null}}if(partJobs[a]){const [loc,npc,name]=partJobs[a];if(v.energy<20){v.energy=Math.min(100,v.energy+10);return {place:'home',note:'체력이 부족해 근무 대신 쉬었다. 체력 +10',person:null}}v.energy-=20;v.money+=40000;v.skills.생활력+=2;const time=['morning','noon','afternoon','evening'][v.slot||0];const available=availablePeople(loc,time);person=available.includes('공재희')&&v.jaeheeIntro&&v.day-(socialRecord('공재희').lastSeen||v.jaeheeIntro.day)>=7? '공재희':available.includes(npc)&&Math.random()<.55?npc:available.length&&Math.random()<.35?meetAt(loc,time):null;if(person)v.met[person]=true;return {place:loc,note:name+'에서 근무했다. 급여 +40,000원, 생활력 +2',person}}if(a==='휴식'){v.energy=Math.min(100,v.energy+25);note='집에서 쉬었다. 체력 +25'}
else if(a==='산책'){v.energy=Math.min(100,v.energy+8);v.skills.운동능력+=1;note='연화천을 산책했다. 운동능력 +1, 체력 +8'}
else if(a==='PC방에서 게임하기'){if(v.money<3000){note='PC방 이용료가 부족해 집에서 쉬었다.';v.energy=Math.min(100,v.energy+10)}else{v.money-=3000;v.energy=Math.min(100,v.energy+5);v.skills.게임숙련도+=3;note='PC방에서 게임을 즐겼다. 이용료 -3,000원, 체력 +5, 게임숙련도 +3';person=meetAt('pc',['morning','noon','afternoon','evening'][v.slot||0])}}
else if(v.energy<10){v.energy=Math.min(100,v.energy+10);return {place:'home',note:'체력이 부족해 '+a+' 대신 쉬었다. 체력 +10',person:null}}
else if(a==='수영'&&v.money<5000){note='수영장 이용료 5,000원이 부족해 수영을 하지 못했다.'}
else{v.energy=Math.max(0,v.energy-(a==='아르바이트'?20:a==='수영'?18:a==='러닝'?15:10));
if(a==='아르바이트'){v.money+=40000;v.skills.생활력+=2;note='카페에서 아르바이트를 했다. 급여 +40,000원, 생활력 +2'}
else if(a==='공부'){v.skills.지성+=3;note='공부를 했다. 지성 +3'}
else if(a==='글쓰기'){v.skills.창의성+=3;v.skills.표현력++;v.experience.글쓰기++;note='글을 썼다. 창의성 +3, 표현력 +1'}
else if(a==='개발'){v.skills.기술력+=3;v.experience.개발++;note='개발 연습을 했다. 기술력 +3'}
else if(a==='디자인'){v.skills.창의성+=3;v.experience.디자인++;note='디자인 작업을 했다. 창의성 +3'}
else if(a==='카페 실습'){v.skills.생활력+=3;v.experience.카페++;note='카페 실습을 했다. 생활력 +3'}
else if(a==='교류'){v.skills.사교성+=3;note='공원에서 사람들과 교류했다. 사교성 +3'}
else if(a==='수영'){v.money-=5000;v.skills.운동능력+=4;note='수영장에서 운동했다. 이용료 -5,000원, 운동능력 +4'}
else if(a==='러닝'){v.skills.운동능력+=3;note='연화천에서 달렸다. 운동능력 +3'}}
if(!note)note=a+' 활동을 마쳤다.';
if(['수영','러닝','산책','교류','아르바이트','카페 실습'].includes(a)){const time=['morning','noon','afternoon','evening'][v.slot||0];person=meetAt(place,time)}
return {place,note,person}}
function legacyPlayDay(){const v=initSim();v.activeEvent=null;const notes=[];let highlight=null;for(let i=0;i<3;i++){v.slot=i;const result=runActivity(v.schedule[i]);notes.push(['오전','낮','오후','저녁'][i]+' · '+result.note);if(result.person)highlight=result}const completed=v.day;v.day=Math.min(365,v.day+1);v.slot=0;const message='DAY '+completed+' 일정 결과\n'+notes.join('\n')+'\n\n'+arrivalText(highlight?highlight.place:activityPlace(v.schedule[2]),highlight&&highlight.person);showEvent(highlight?highlight.place:activityPlace(v.schedule[2]),message,highlight&&highlight.person);renderSim();syncSchedule();drawTown()}

