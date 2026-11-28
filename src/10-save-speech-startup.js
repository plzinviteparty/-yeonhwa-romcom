function save(){
 if(!state)return false;
 try{
  stampPhoneSpeech();const album=albumData(),stored=localStorage.getItem(ALBUMKEY);
  // The lifetime album is already stored separately. Portable saves still carry it in full.
  if(stored!==null&&stored===albumSerialized){
   localStorage.setItem(KEY,JSON.stringify({...state,album:undefined}));
  }else{
   try{localStorage.setItem(KEY,JSON.stringify(state))}
   catch(error){
    if(!stored)throw error;
    // A newly unlocked page may not fit beside an older full autosave.
    // Keep every changed record in the autosave until its independent copy is safe.
    const previous=JSON.parse(stored),pending={};
    if(!previous||typeof previous!=='object'||Array.isArray(previous))throw error;
    for(const [id,entry] of Object.entries(album)){
     if(JSON.stringify(previous[id])!==JSON.stringify(entry))pending[id]=entry;
    }
    localStorage.setItem(KEY,JSON.stringify({...state,album:pending}));
    // A different open window may already have contributed other album pages.
    if(localStorage.getItem(ALBUMKEY)===stored){
     albumCache=albumMerge(previous,album);state.album=albumCache;albumPersist();
    }
   }
  }
  $('autosaveWarning').classList.add('hide');$('transferOpen').textContent='세이브 관리';
  return true;
 }catch(error){
  $('autosaveWarning').classList.remove('hide');$('transferOpen').textContent='자동 저장 실패 · 세이브 관리';
  return false;
 }
}
function chatSpacing(s){return typeof s==='string'?s.replace(/([가-힣a-zA-Z0-9!?.,…]) *([ㅋㅎㅠㅜ]{2,})/g,'$1 $2'):s}
function vocative(name){const n=name.charCodeAt(name.length-1);return name+((n>=44032&&n<=55203&&(n-44032)%28!==0)?'아':'야')}
function playerCall(p){const a=memoryFor(p).address;return a.playerToNpc||((a.playerSpeech==='반말')&&npcProfiles[p].age<=Number(state.age)?vocative(p.slice(1)):p.slice(1)+' 씨')}
function speechOfferLine(p){const a=memoryFor(p).address,older=Number(state.age)>npcProfiles[p].age,gap=Math.abs(Number(state.age)-npcProfiles[p].age);if(p==='한시우'&&older)return '근데 '+(a.npcToPlayer||state.name+' 씨')+', 저한테 언제까지 존댓말 할 거예요? 우리 이제 꽤 친하지 않나?';if(p==='임하나'&&older)return '저… 나이 차이도 있는데, 혹시 제가 말을 놓아도 괜찮을까요?';if(older&&gap>=10)return '나이 차이가 좀 있기는 하지만, '+speechOffers[p][0];return speechOffers[p][0]}

const doyunCasual={
'제가 먼저 연락해도 괜찮아요? 바쁠 때 방해했나 싶어서요.':'내가 먼저 연락해도 괜찮아? 바쁠 때 방해했나 싶어서.',
'……제가 챙김받는 쪽도 되는 거군요.':'……나도 기대도 되는 거구나.',
'좋아요. 저도 웃으면서 괜찮다고만 하진 않을게요.':'좋아. 나도 부담되면 얘기할게.',
'그러면 제 휴대전화도 좀 바빠지겠네요.':'그럼 나도 기다려 볼게.',
'이렇게 가까이서 보니까 제가 더 떨리네요.':'이렇게 가까이서 보니까 내가 더 떨리네.'
};

const speechExactCommon={
'저도 좋아해요. 우리 사귀어요.':'나도 좋아해. 우리 사귀자.','나도 좋아해. 우리 사귀어.':'나도 좋아해. 우리 사귀자.',
'잘 지내고 계세요?':'잘 지내?','잘 지내고 있어요.':'잘 지내고 있어.','잘 지낸다니 마음이 놓여요.':'잘 지낸다니 마음이 놓이네.',
'하하, 새로운 원두를 알아보러 잠깐 다녀올게요.':'하하, 새로운 원두를 알아보러 잠깐 다녀올게.',
'좋은 원두를 찾았어요. 다음에 맛 보여 드릴게요.':'좋은 원두를 찾았어. 다음에 맛 보여 줄게.',
'응원해 줘서 고마워요.':'응원해 줘서 고마워.','잘 준비하고 와요. 응원할게요.':'잘 준비하고 와. 응원할게.',
'수고 많았어요.':'수고 많았어.','잘 마쳤다니 다행이에요.':'잘 마쳤다니 다행이야.','바쁠 텐데 무리하지 마세요.':'바쁠 텐데 무리하지 마.',
'좋아요. 그날 만나요.':'좋아. 그날 만나자.','다른 날짜는 어때요?':'다른 날짜는 어때?','이번에는 어려워요.':'이번에는 어려워.',
'지금은 조금 바빠요.':'지금은 조금 바빠.','안녕하세요.':'안녕.','네.':'응.','아니요.':'아니.','감사합니다.':'고마워.','알겠습니다.':'알겠어.','죄송합니다.':'미안해.'
};
// Deictic 저 (저 고양이, 저 건물) and temporal 전 can also stand alone.
// Interpret these as pronouns only in the grammatical contexts used by the dialogue.
function familiarFirstPerson(line){
 const boundary=String.raw`(?=$|[^가-힣]|[ㅋㅎㅠㅜ])`;
 const suffix=String.raw`(?:한테(?:서)?|에게(?:서)?|보다|부터|까지|하고|와|랑|만|도|는|를|의|야|라도|라면|라는|였(?:어요|어|는데|으면)|라)(?:는|은|를|의|도|만)?`;
 let out=line.replace(new RegExp('(?<![가-힣])저('+suffix+')(요)?'+boundary,'gu'),(_,particle)=>'나'+particle)
  .replace(new RegExp('(?<![가-힣])제(가|게(?:서)?(?:는|도|만)?)(요)?'+boundary,'gu'),(_,particle)=>'내'+particle)
  .replace(/(?<![가-힣])저희(?=들|끼리|가|는|도|한테|에게|랑|만|부터|까지|보다|요|[^가-힣]|$)/gu,'우리')
  .replace(/(?<![가-힣])저요(?=[^가-힣]|$)/gu,'나')
  .replace(/(?<![가-힣])저(?=\s)/gu,(word,idx,text)=>{
   const next=text.slice(idx+1).trimStart();
   // An adverb, a predicate or an object referring back to the speaker.
   const self=/^(?:오늘|내일|어제|어릴|지금|먼저|혼자|역시|사실|진짜|아직|방금|이제|이번|벌써|원래|갑자기|보통|맨날|가끔|여기|그날|좀|때문|말고|스스로|자신|이렇|이런|그런|피곤|일할|만나|만난|보고|보러|놀라도|데리고|독점|생각나|생각하기|챙겨|버리고|신경|잘한|없(?:는|이)|좋아[하해]|그만|연습생|하나였)/u;
   const exchange=/^(?:다음 약속|그 (?:말|문자)|아무 일정|여행 가|화면만 보고|손(?: 좀)? 잡아|오른손은 멀쩡|눈 감은 거|스타썬더에서|에임 진짜|점프한 거|마지막 장면은 예상|서점에 먼저 들러)/u;
   return self.test(next)||exchange.test(next)?'나':word;
  })
  .replace(/(?<![가-힣])전(?=\s+(?:늘|길에서|보통|요즘|계속|오른쪽|그 정도|아까|좋아|오늘|지금))/gu,'난')
  .replace(/(?<![가-힣])절(?=\s+따라오)/gu,'날');
 out=out.replace(/(?<![가-힣])제(?=\s+(?!\d|[일이삼사오육칠팔구십]+\s*(?:장|절|회|권)(?![가-힣])))/gu,(word,idx,text)=>{
  if(/(?:각자|저마다|강아지가)\s*$/.test(text.slice(0,idx)))return word;
  return '내';
 });
 // Leave an audible hesitation without calling the speaker 'I' twice.
 out=out.replace(/(?<![가-힣])저(?=\s+우리 이제 헤어)/gu,'있잖아,');
 return out.replace(/(?<![가-힣])저([,…]+|\.{3,})/gu,(word,pause,idx,text)=>{
  const next=text.slice(idx+word.length).trimStart();
  if(/^(?:혹시|괜찮으면|뺨에|두고 가신|우리|.{0,10}(?:내가|나도|내 시간))/.test(next))return '저기'+pause;
  return '나'+pause;
 });
}

// 드리다 lowers the speaker in relation to the recipient. Keep it when
// the recipient named in this clause is a third person, even in casual speech.
function familiarGiving(line,p,side){
 const giving=/(말씀(?:을)?\s*|연락(?:을)?\s*|부탁(?:을)?\s*|요청(?:을)?\s*|인사(?:를)?\s*|도와|돌려|들려|보여|알려|챙겨|건네|빌려|전해|보내|봐|해|(?<![가-힣]))(드리겠습니다|드립니다|드릴(?=[게까지래]|\s+(?:수|게|것|때|차례|필요|이유|말씀))|드려|드렸|드린(?=[\s,.!?…]|$)|드리(?=고|려|지|는|면|니|기|죠|겠|잖|셨|던|더|지만))/gu;
 return line.replace(giving,(word,prefix,form,idx,text)=>{
  const before=text.slice(0,idx).split(/[.!?…\n]/).pop();
  const recipients=[...before.matchAll(/([가-힣]+(?:\s+(?:씨|님|오빠|언니|누나|형))?)(?:께(?:는|도|만)?(?![가-힣])|한테|에게)/gu)];
  if(recipients.length){
   const recipient=recipients[recipients.length-1][1];
   const otherName=side==='player'?p:state?.name;
   const agreed=state?.sim?.relationshipMemory?.[p]?.address?.[side==='player'?'playerToNpc':'npcToPlayer'];
   const direct=['너','네','그쪽','당신','오빠','언니','누나','형',agreed,otherName,otherName?.slice(1)];
   if(!direct.includes(recipient)&&!direct.includes(recipient.replace(/\s*(?:씨|님|오빠|언니|누나|형)$/u,'')))return word;
  }
  const noun=prefix.trim().replace(/[을를]$/,'');
  if(['말씀','연락','부탁','요청','인사'].includes(noun)){
   const stem=noun==='말씀'?'말':noun;
   const ending={'드리겠습니다':'할게','드립니다':'해','드릴':'할','드려':'해','드렸':'했','드린':'한','드리':'하'};
   return stem+ending[form];
  }
  const ending={'드리겠습니다':'줄게','드립니다':'줘','드릴':'줄','드려':'줘','드렸':'줬','드린':'준','드리':'주'};
  return prefix+ending[form];
 });
}
function casualSpeech(line,p,side){
 if(typeof line!=='string'||!line)return line;
 const curated={"제 취향을 어떻게 보셨을지 궁금하군요.":"네가 보는 내 취향은 어떨지 궁금하네.","다 읽으면 감상을 들려드리겠습니다.":"다 읽으면 어땠는지 얘기해 줄게.","서로 읽을 책을 골라 보는 건 어떻습니까?":"서로 읽을 책을 골라 볼까?","그것도 좋겠습니다.":"그것도 괜찮겠다.","그럼 다음에 이야기할 거리가 생기겠군요.":"그럼 다음에 할 얘기가 생기겠네.","내 취향을 어떻게 보셨을지 궁금하구나.":"네가 보는 내 취향은 어떨지 궁금하네.","다 읽으면 감상을 들려드리겠어.":"다 읽으면 어땠는지 얘기해 줄게.","매일 같은 시간에 밥을 줬더니 익숙해진 모양입니다.":"매일 같은 시간에 밥을 줬더니 익숙해졌나 봐.","이렇게 가까이 오는 건 드문 일입니다.":"이렇게 가까이 오는 건 드문데.","…그렇게 생각하니 조금 뿌듯하군요.":"…그렇게 생각하니 좀 뿌듯하네.","다음에 뵙겠습니다.":"다음에 봐.","알겠습니다. 걱정해 주셔서 감사합니다.":"알겠어. 걱정해 줘서 고마워.","다행입니다.":"다행이네.","오늘은 커피를 챙겨 드리지 못할 것 같아요. 먼저 쉬려고요.":"오늘은 커피 못 챙겨 줄 것 같아. 먼저 쉴게."};if(curated[line])return curated[line];
 if(line==='이 동네에 오래 사셨어요?')return '이 동네에 오래 살았어?';
 if(line==='필요한 물건은 다 사셨습니까?')return '필요한 건 다 샀어?';
 const exact=(side==='npc'?(p==='강도윤'?doyunCasual[line]:null)||speechPairs[p]?.[line]:null)||speechExactCommon[line];
 if(exact)line=exact;
 // A resident may quote another conversation verbatim while speaking to the player.
 // Whole-bubble dialogue in quotation marks still uses the player's agreed register.
 const parts=line.split(/(“[^”\n]+”|‘[^’\n]+’|"[^"\n]+"|'[^'\n]+')/u);
 if(parts.length>1&&!(parts.length===3&&!parts[0].trim()&&!parts[2].trim())){
  return parts.map((part,i)=>i%2?part:familiarDialogue(part,p,side)).join('');
 }
 return familiarDialogue(line,p,side);
}
const jointProposalLines=new Map();
function addJointProposal(polite,casual){
 jointProposalLines.set(polite,casual);
 // Older event and phone records can already have their sentence-final 요 removed.
 if(polite.endsWith('요'))jointProposalLines.set(polite.slice(0,-1),casual);
}
// Listed phrases are invitations in their authored scenes. Other uses of the same verb
// include habits, instructions, and reports, so matching the ending alone is insufficient.
for(const [ending,proposal,prefixes] of [
 ["가요","가자",[
  "ㅇㅋ 그럼 셀카 하나만 찍고 ","각자 준비하고 나","각자 할 일 하러 ","같이 ","같이 구경하러 ","같이 나","같이 먹고 ",
  "같이 보러 ","같이 손 잡고 ","같이 아침 먹고 ","고양이가 앉으면 우리도 잠깐 쉬었다 ","그럼 다음엔 우리 둘이 맛있는 거 먹으러 ",
  "그럼 역까지 같이 ","그럼 역까지 곧장 ","네, 퇴근할 때 같이 ","다음에 강변 같이 ","다음에 같이 ","다음에 같이 보러 ",
  "다음에 같이 직접 보러 ","다음에 인형뽑기 같이 ","다음에는 제가 좋아하는 곳도 같이 ","다음엔 같이 보러 ","둘이서 놀러 ",
  "따뜻한 데 들어","따뜻한 차 한 잔 하고 돌아","바다 ","바다 보러 ","서로 원하는 곳을 번갈아 ","서로 조금 더 쉬어 ",
  "아아, 그럼 같이 ","여기서 각자 사진 좀 찍다가 비 그치면 ","오늘은 이대로 돌아","오늘은 이렇게 따뜻하게 같이 ","오늘은 이쯤에서 돌아",
  "오늘은 천천히 돌아","오늘은 팔짱 끼고 ","오늘은 편하게 구경하고 돌아","오예, 아침 산책까지 하고 돌아","우리 얼른 ",
  "우리도 다음에 놀러 ","이번엔 나랑 같이 보러 ","잠깐 쉬었다 ","짐 싸기 전에 아침은 먹고 ","천천히 서로 알아",
  "천천히 우리 일상을 만들어 ","천천히 우리 취향 알아","편하게 즐기다 ","하하, 그럼 각자 하루씩 원하는 데 ","함께 맞춰 ",
 ]],
 ["가져요","갖자",[
  "당분간 각자 시간을 ","오늘은 서로 반씩 ","오늘은 잠깐 각자 시간을 ","지금은 조금 각자 생각할 시간을 ",
 ]],
 ["걸어요","걷자",[
  "같이 ","같이 우산 쓰고 ","그냥 나란히 ","그럼 여기까지만 같이 ","다음 휴일에 또 ","다음에 ","다음에 함께 ","다음에도 같이 ",
  "오늘도 같이 ","오늘은 그냥 같이 ","오늘은 러닝 말고 천천히 ","오늘은 조금 천천히 ","우리 오늘도 천천히 ","우리 조금 천천히 ",
  "이대로 조금 더 ","조금 더 같이 ","조금만 같이 ","조금만 더 ","천천히 ","천천히 같이 ","필요한 연락만 확인하고 다시 ",
 ]],
 ["골라요","고르자",[
  "각자 하고 싶은 일을 하나씩 ","같이 ","같이 곡 ","같이 날짜 ","그럼 다음에 같이 ","그럼 메뉴는 그때 같이 ",
  "다음엔 우리도 기념품을 ","둘이 아는 노래부터 ","오늘 사진은 나중에 같이 ","우리, 이건 나중에 ","하하, 간식은 각자 먹고 싶은 걸 ",
 ]],
 ["남겨요","남기자",[
  "셋이 나온 사진도 한 장 ","오늘은 방송 말고 우리 추억으로 ","우리 같이 사진 ",
 ]],
 ["내려요","내리자",[
  "그럼 내일 커피는 둘이 같이 ","서로 고른 잔에 다음에 커피 한 잔씩 ",
 ]],
 ["넣어요","넣자",[
  "서로 한 곡씩 ",
 ]],
 ["놀아요","놀자",[
  "각자 바빠도 시간 맞춰서 ","각자 스케줄 맞을 때 다시 ","같이 ","그냥 같이 ","나중에 같이 ","내일도 같이 ","다음에 같이 ",
  "다음에 또 ","다음에 신나게 ","다음에도 같이 ","다음엔 더 신나게 ","다음엔 일 말고 같이 ","승부 말고 친구로 같이 ",
  "약속 없는 날도 각자 잘 ","얼른 나으면 같이 ","예쓰, 다음에도 같이 ","오늘은 가게 걱정 말고 같이 ","오늘은 같이 ","오늘은 나랑 ",
  "오늘은 승패 신경 쓰지 말고 ","이브에 같이 ","조금 더 같이 ","친구로 같이 ",
 ]],
 ["들어요","듣자",[
  "그럼 다음 곡까지만 ","다음에 여기서 노래 더 ","이걸로 우리 노래 같이 ",
 ]],
 ["뛰어요","뛰자",[
  "내년에도 같이 ","다시 같이 ",
 ]],
 ["마셔요","마시자",[
  "같이 차 ","그럼 딸기 탄산으로 같이 ","다음에 같이 ","다음에도 같이 차 ","시간 맞으면 커피라도 같이 ","차 한잔 같이 ",
 ]],
 ["만나요","만나자",[
  "다음에도 부담 없이 ","마감 때는 각자 시간 보내고 끝나면 ","서로의 생활을 존중하면서 ","서점 입구에서 ","우리 각자 약속도 지키면서 ",
  "우리 그만 ",
 ]],
 ["만들어요","만들자",[
  "각자 고른 노래로 플레이리스트 ","각자 마음에 드는 색으로 ","각자 작품 하나씩 ","우리만의 애칭 하나 ","작은 눈사람 ",
 ]],
 ["말아요","말자",[
  "근무 중엔 서로 연락을 기다리지 ","서로 마음을 억지로 맞추지는 ",
 ]],
 ["말해요","말하자",[
  "둘만의 시간도 함께 정하고 서로의 마음을 ","서로 부담될 땐 먼저 ","서로 힘든 날에는 솔직하게 ","이번에는 서로 기대하는 걸 솔직하게 ",
 ]],
 ["맞춰요","맞추자",[
  "각자 할 일 하고 또 날짜 ","날짜를 다시 ","일정은 각자 편할 때 ",
 ]],
 ["먹어요","먹자",[
  "각자 좋아하는 걸 ","같이 ","같이 맛있는 거 ","같이 아침 ","같이 하나씩 ","내일 같이 밥 ","다음에 같이 ",
  "다음에 여유 있을 때 같이 ","다음엔 같이 ","다음엔 따끈할 때 같이 사 ","반씩 나눠 ","서로 다른 메뉴를 골라 나눠 ",
  "오늘은 실컷 놀고 맛있는 것도 ","이제 앉아서 같이 ","조금 더 같이 아침을 ",
 ]],
 ["보내요","보내자",[
  "가끔 계획 없는 시간을 함께 ","각자의 시간을 ","같이 시간을 ","그날 같이 ","내일 아침도 같이 ","다음에도 같이 ",
  "다음에도 같이 시간 ","다음에도 이런 조용한 시간을 함께 ","당분간 각자의 시간을 ","오늘 밤 함께 ","오늘은 각자 시간 ",
  "우리 각자 잘 ","웃긴 걸 발견하면 서로 ","좋은 풍경을 발견하면 서로 사진을 ",
 ]],
 ["봐요","보자",[
  "각자 끌리는 작품부터 ","각자 집에서 푹 쉬고 또 ","각자 하나씩 만들어 ","각자 할 일 하고 또 ","간은 같이 ","같이 ",
  "같이 도전해 ","같이 맛","같이 장 ","같이 해 ","그날 연화천에서 ","그냥 옆에서 같이 ","그럼 한 모금씩 더 마셔 ",
  "내년에 뭘 하고 있을지 서로 기대해 ","내년에도 같이 새로운 걸 해 ","내일도 ","다른 경로를 같이 찾아","다음 일정도 맞춰 ","다음에 같이 맛",
  "다음에 같이 찾아","다음엔 같이 ","다음엔 다른 조합도 해 ","딱 한 동작만 같이 해 ","서로 마감 없는 날로 잡아 ","서로 시간 맞춰 ",
  "서로 여유 있는 날 골라 ","서로 조금 쉬면서 생각해 ","서로 진짜 괜찮은지 먼저 말해 ","셋이서 할 수 있는 게임 찾아",
  "오, 서로 찍은 사진 비교해 ","오늘 들은 곡, 우리 둘이 불러 ","오늘 찍은 사진 좀 같이 ","오늘은 각자 좋아하는 차를 골라 ",
  "오케이, 각자 할 일 하고 또 ","우리 둘 다 하나씩 잡아 ","우리 처음 보는 가게에 가 ","우리답게 만나 ",
  "이번에는 서로 기대면서 만나 ","이번에는 제대로 같이 해 ","조금씩 다시 얘기해 ","찍힌 건 같이 천천히 ","필요한 자료부터 같이 확인해 ",
  "함께 마셔 ","히히, 그럼 다음 영화도 같이 ",
 ]],
 ["불러요","부르자",[
  "신나는 곡으로 같이 ","후렴은 같이 ",
 ]],
 ["쉬어요","쉬자",[
  "강물 보면서 조금 더 ","같이 ","그냥 에어컨 있는 데서 ","그늘에서 각자 ","다음에는 비가 오지 않아도 함께 ",
  "대신 바깥 정원에서 좀 ","시간 괜찮으시면 잠깐 같이 ","오늘은 각자 ","오늘은 각자 편히 ","오늘은 같이 편하게 ","오늘은 둘이 ",
  "이대로 따뜻하게 ","저녁에 집에서 같이 ","집에서 같이 ","차 한 잔만 더 마시고 ","창가에서 같이 ",
 ]],
 ["시켜요","시키자",[
  "다음엔 모카도 같이 산책",
 ]],
 ["써요","쓰자",[
  "같이 ",
 ]],
 ["알아요","알자",[
  "오늘 얘긴 우리끼리만 ",
 ]],
 ["와요","오자",[
  "각자 만들고 싶은 거 생각해 ","다음에 또 같이 ","다음에도 같이 ","다음에도 같이 나","다음에도 둘이 ","다음에도 함께 쉬러 ",
  "셋이 느긋하게 다녀",
 ]],
 ["웃어요","웃자",[
  "다음에도 같이 ",
 ]],
 ["읽어요","읽자",[
  "그날은 게임 설명부터 같이 ",
 ]],
 ["있어요","있자",[
  "가끔은 각자 할 일을 하며 같이 ","각자 편하게 ","같이 ","그냥 같이 ","그럼 각자 따뜻하게 덮고 ",
  "내일은 알람 울려도 조금만 더 같이 누워 ","말이 없어도 편하게 함께 ","비가 그칠 때까지 같이 ","아아, 그럼 오늘은 조금 더 함께 ",
  "오늘은 이렇게 따뜻한 거 들고 같이 앉아 ","오늘은 조금 더 같이 ","잠깐 같이 ","조금 더 같이 ","조금만 더 같이 ",
 ]],
 ["잡아요","잡자",[
  "그럼 날짜 ","아쉽긴 한데 각자 할 일 하고 다시 ","이번엔 날짜부터 ",
 ]],
 ["정해요","정하자",[
  "각자 시간도, 함께할 시간도 같이 ","같이 하고 싶은 건 함께 ","다음에 연락해서 ","아침에 뭐 먹을지는 일어나서 같이 ",
  "이번 주는 바빠서 다음에 ",
 ]],
 ["즐겨요","즐기자",[
  "각자 좋아하는 건 각자 ","오늘은 각자 편하게 풍경을 ",
 ]],
 ["찍어요","찍자",[
  "가기 전에 여기서 한 장만 더 ","각자 좋아하는 거 ","같이 ","같이 더 가까이 ","같이 브이 하고 ","같이 사진 ",
  "그럼 다음엔 인생네컷 ","나중에 같이도 ","다음 사진도 같이 ","다음엔 같이 ","우리 둘이 같이 ",
 ]],
 ["챙겨요","챙기자",[
  "각자 쉬는 시간도 ","각자 시간도 꼭 ","각자 할 일을 ","기대와 별개로 우리 일도 잘 ","우리 각자 할 일 ",
 ]],
 ["해요","하자",[
  "가끔 서로 좋았던 말을 이야기","각자 마음에 드는 색 찾아서 나중에 비교","각자 먹고 싶은 걸 주문","각자 생각을 정리하고 이야기",
  "각자 편한 속도로 ","각자 하루를 시작","각자 할 거 하다가 가끔 이야기","각자 할 일 하고 나중에 연락","각자의 일정부터 존중",
  "각자의 휴일도 존중","같이 ","같이 고르는 날이 오면 그때 ","같이 구경","같이 도전","같이 요리","같이 조심","같이 천천히 구경",
  "그건 얼굴 보고 얘기","그럼 각자 열심히 ","나중에 서로 일정 얘기","다만 서로 불편한 건 얘기","다음 기회에 같이 플레이",
  "다음에 같이 ","다음에 같이 게임","다음에 러닝 같이 ","다음에 만나서 밀린 얘기 다 ","다음에 시간 맞춰서 같이 운동","다음에 연장전 ",
  "다음에 편하게 얘기","다음에 한가할 때 차 한잔","다음에는 같이 구경","다음에는 다른 것도 같이 ","다음에도 같이 수영",
  "다음엔 같이 구경","다음엔 같이 수영","대신 서로 말은 솔직하게 ","먼저 연락하는 건 서로 번갈아 ",
  "모퉁이에서 어느 쪽으로 갈지 한 번씩 번갈아 고르기로 ","무대 말고도 하고 싶은 게 있으면 같이 이야기",
  "보고 싶을 때 보고 싶다고 말하는 거, 우리 계속 그렇게 ","새해에도 가끔 게임이나 같이 ","서로 마음에 든 것을 하나씩 소개",
  "서로 바쁠 때는 나중에 연락","서로 쉬고 나서 이야기","서로 원하는 것을 하나씩 고르기로 ","서로 원하는 게 다르면 이야기",
  "서로 원하는 시간을 미리 이야기","서로 최애곡 소개","서로 하고 싶은 걸 숨기지 않기로 ","서로 하고 싶은 일을 응원",
  "서로 하루의 날씨를 이야기","수조부터 천천히 구경","아까 같이 부른 곡 한 번 더 ","아침 산책 한 바퀴만 더 ",
  "여유 있을 때 서로 귀가 인사를 ","연락하는 시간은 서로 조율","오, 각자 마음에 드는 풍경 찍고 사진 비교","오늘은 각자 자고 내일 톡",
  "오늘은 각자 집중","오늘은 각자 하고 싶은 걸 ","오늘은 시간 신경 쓰지 말고 구경","오예, 따뜻한 데 들어갔다가 눈 구경 또 ",
  "우리 각자 잘 살다가 재밌는 거 생기면 공유","우리 각자 할 수 있는 만큼만 ","우리 그만","우리 나중에 둘이 얘기","우리 이야기",
  "으음, 우리 각자의 마음을 존중","이제 각자 일상을 시작","이제 각자 준비","잠깐 각자 마음을 정리","조금 있다가 다시 얘기",
  "차 다 마실 때까지만 얘기","친구로도 서로 응원","한 가지씩 번갈아 얘기","함께 조율","함께할 때는 여유를 조금 남겨 두기로 ",
  "혼자 결정하지 말고 같이 의논",
 ]],
]){
 for(const prefix of prefixes)addJointProposal(prefix+ending,prefix+proposal);
}
for(const [polite,casual] of [
 ["가끔 아무것도 안 하는 날을 만들어요","가끔은 아무것도 하지 말고 쉬자"],
 ["가끔은 꾸미지 않고 편하게 만나요","가끔은 꾸미지 말고 편하게 만나자"],
 ["가볍게 몸부터 풀어 봐요","가볍게 몸부터 풀자"],
 ["각자 멍 때려요","각자 멍 때리자"],
 ["같이 뽑아요","같이 뽑자"],
 ["같이 아무것도 안 해요","같이 아무것도 하지 말자"],
 ["같이 우산을 쓰고 걸어요","같이 우산 쓰고 걷자"],
 ["그날은 영화 끝나고 후기 얘기해요","그날은 영화 끝나고 어땠는지 얘기하자"],
 ["그대로 조금 더 걸어요","이대로 조금 더 걷자"],
 ["그럼 천천히 걸으면서 쉬어 가요","그럼 쉬엄쉬엄 걷자"],
 ["그럼 편한 자리에서 더 이야기해요","그럼 편한 데 앉아서 더 얘기하자"],
 ["다음에 꼭 이야기해요","다음에 꼭 얘기하자"],
 ["다음에 다른 색으로 만들어 봐요","다음엔 다른 색으로 만들어 보자"],
 ["다음에 차 마셔요","다음에 차 한잔하자"],
 ["다음에는 당신이 고른 전시로 가요","다음엔 네가 고른 전시 보러 가자"],
 ["다음에는 실패 없는 걸로 같이 골라요","다음엔 실패 없는 걸로 같이 고르자"],
 ["다음에는 여유 있을 때 차 마셔요","다음엔 여유 있을 때 차 한잔하자"],
 ["다음에는 제가 좋아하는 곳도 가요","다음엔 내가 좋아하는 데도 가 보자"],
 ["다음에도 손님으로 만나기로 해요","다음에도 손님으로 만나자"],
 ["다음에도 여유롭게 만나요","다음에도 이렇게 여유롭게 만나자"],
 ["다음에도 이런 시간을 만들어요","다음에도 이렇게 시간 내자"],
 ["다음엔 다른 놀이공원도 가요","다음엔 다른 놀이공원도 가 보자"],
 ["다음엔 다른 디저트도 먹어요","다음엔 다른 디저트도 먹어 보자"],
 ["다음엔 일 말고 놀러 만나요","다음엔 일 얘기 말고 놀러 가자"],
 ["다음엔 저랑도 신나게 놀아요","다음엔 나랑도 신나게 놀자"],
 ["다음엔 제가 좋아하는 게임도 해요","다음엔 내가 좋아하는 게임도 하자"],
 ["다음엔 제가 좋아하는 전시도 가요","다음엔 내가 좋아하는 전시도 보러 가자"],
 ["다음엔 좀 조용한 곳도 가요","다음엔 좀 조용한 데도 가 보자"],
 ["둘 다 먹고 싶은 걸 만들어요","둘 다 먹고 싶은 걸로 만들자"],
 ["둘만의 가 보고 싶은 곳 목록을 만들어요","둘이 가 보고 싶은 데를 적어 보자"],
 ["들어올 때 시합 한번 해요","들어올 때 한 번 시합하자"],
 ["따뜻한 음료 하나씩 골라요","따뜻한 거 하나씩 고르자"],
 ["따뜻한 음료를 마시며 쉬어요","따뜻한 거 마시면서 좀 쉬자"],
 ["마지막 사진 하나만 찍고 가요","마지막으로 사진 한 장만 찍고 가자"],
 ["마지막 하나는 반 나눠요","마지막 하나는 반씩 나눠 먹자"],
 ["맞은편에 앉아 이야기해요","마주 앉아서 얘기하자"],
 ["바람을 피할 곳으로 가시죠","바람 좀 피할 데로 가자"],
 ["비가 그칠 때까지 여기서 쉬어요","비 그칠 때까지 여기서 쉬자"],
 ["시원한 간식을 함께 먹어요","시원한 거 같이 먹자"],
 ["빗소리 듣다가 그치면 가요","빗소리 좀 듣다가 비 그치면 가자"],
 ["서로 편한 친구로 지내요","서로 편한 친구로 지내자"],
 ["쉬기 전에 저랑 이야기해요","쉬기 전에 나랑 얘기하자"],
 ["시간을 확인하고 여유 있는 만큼 둘러봐요","몇 시인지 보고 시간 되는 만큼 둘러보자"],
 ["실내에서 스트레칭해요","안에서 스트레칭하자"],
 ["아니 오늘 끝나기 아까운데 좀 더 얘기해요","아니, 벌써 끝내긴 아까운데 좀 더 얘기하자"],
 ["아침 식사부터 챙기고 출발합시다","아침부터 먹고 출발하자"],
 ["아침 풍경을 조금 더 감상해요","아침 풍경 좀 더 보고 가자"],
 ["오늘은 노트북 덮고 이야기해요","오늘은 노트북 덮고 얘기하자"],
 ["오늘은 다른 이야기를 해요","오늘은 다른 얘기 하자"],
 ["오늘은 저번보다 더 놀아요","오늘은 저번보다 더 오래 놀자"],
 ["오늘은 조금 더 붙어서 걸어요","오늘은 좀 더 붙어서 걷자"],
 ["우리 둘 다 힘내요","우리 둘 다 힘내자"],
 ["우리 서로 이야기할 거리를 모아 둬요","우리 서로 얘깃거리를 모아 두자"],
 ["이번엔 저랑 팀 먹어요","이번엔 나랑 팀 먹자"],
 ["잠깐 더 걸어요","잠깐만 더 걷자"],
 ["잠깐 쉬고 다시 이야기해요","잠깐 쉬고 다시 얘기하자"],
 ["잠깐 시원한 데서 쉬어요","시원한 데서 잠깐 쉬자"],
 ["저랑 놀아요","나랑 놀자"],
 ["제 경기 일정 피해서 날짜 잡아요","내 경기 없는 날로 잡자"],
 ["조금 더 앉아 있다가 가요","조금만 더 앉았다 가자"],
 ["조금 더 있다 들어가요","조금만 더 있다 들어가자"],
 ["조금 떨어져서 이야기해요","조금 떨어져서 얘기하자"],
 ["조금만 더 이야기해요","조금만 더 얘기하자"],
 ["차 한잔하면서 이야기해요","차 한잔하면서 얘기하자"],
 ["추우니 잠깐 따뜻한 곳에서 쉬어요","추우니까 따뜻한 데서 잠깐 쉬자"],
 ["하루에 재미있었던 일 하나씩 이야기해요","그날 재밌었던 일 하나씩 얘기하자"],
])addJointProposal(polite,casual);


for(const [saved,source] of [
 ['응, 퇴근할 때 같이 가','네, 퇴근할 때 같이 가요'],
 ['다음에는 내가 좋아하는 곳도 같이 가','다음에는 제가 좋아하는 곳도 같이 가요'],
 ['시간 괜찮으면 잠깐 같이 쉬어','시간 괜찮으시면 잠깐 같이 쉬어요'],
 ['다음에는 내가 좋아하는 곳도 가','다음에는 제가 좋아하는 곳도 가요'],
 ['다음엔 나랑도 신나게 놀아','다음엔 저랑도 신나게 놀아요'],
 ['다음엔 내가 좋아하는 게임도 해','다음엔 제가 좋아하는 게임도 해요'],
 ['다음엔 내가 좋아하는 전시도 가','다음엔 제가 좋아하는 전시도 가요'],
 ['바람을 피할 곳으로 가시지','바람을 피할 곳으로 가시죠'],
 ['쉬기 전에 나랑 이야기해','쉬기 전에 저랑 이야기해요'],
 ['이번엔 나랑 팀 먹어','이번엔 저랑 팀 먹어요'],
 ['나랑 놀아','저랑 놀아요'],
 ['내 경기 일정 피해서 날짜 잡아','제 경기 일정 피해서 날짜 잡아요']
])jointProposalLines.set(saved,jointProposalLines.get(source));
function familiarProposals(line){
 // Keep questions, pauses, chat laughter and punctuation as written.
 return line.replace(/[^.!?…。！？~“”‘’"'\nㅋㅎㅠㅜ]+/gu,(part,offset)=>{
  if(/^[\s.!…！~]*[?？]/u.test(line.slice(offset+part.length)))return part;
  const [,leading,body,trailing]=/^(\s*)(.*?)(\s*)$/su.exec(part);
  let proposal=jointProposalLines.get(body);
  if(!proposal){
   // The booking screen builds these lines from the actual date, time and trip venue.
   const booking=/^(\d{1,2}월 \d{1,2}일 (?:오전|낮|오후|저녁)에 )(.+)$/u.exec(body);
   if(booking){
    const trip=/^(출발해서 \d{1,2}월 \d{1,2}일까지 .+? )(같이 가요?)$/u.exec(booking[2]);
    const activity=trip?jointProposalLines.get(trip[2]):jointProposalLines.get(booking[2]);
    if(activity)proposal=booking[1]+(trip?trip[1]:'')+activity;
   }
  }
  return proposal?leading+proposal+trailing:part;
 });
}
function familiarDialogue(line,p,side){
 // Match sentence endings before punctuation, closing quotes, or chat reactions.
 const end=String.raw`(?=[.!?…~”"’\n]|$|\s*(?:[ㅋㅎㅠㅜ]+|[.!?…~”"’]))`;
 const rules=[
 ['더라고요','더라'],['안녕하세요','안녕'],['다녀오십시오','다녀와'],['기다리십시오','기다려'],
 ['뵙겠습니다','볼게'],['뵙고 싶어요','보고 싶어'],['주셨군요','줬네'],['주셨네요','줬네'],['주셨어요','줬어'],['하셨군요','했네'],['하셨네요','했네'],['하시는군요','하네'],['하는군요','하네'],['겠군요','겠네'],['궁금하군요','궁금하네'],['좋겠군요','좋겠네'],['다행이군요','다행이네'],['안녕하십니까','안녕'],['감사드립니다','고마워'],['감사합니다','고마워'],['죄송합니다','미안해'],['알겠습니다','알겠어'],
 ['수고하셨습니다','수고했어'],['고생하셨습니다','고생했어'],['말씀하세요','말해'],['말씀해 주세요','말해 줘'],
 ['괜찮으십니까','괜찮아'],['어떠십니까','어때'],['어떻습니까','어때'],['그렇습니까','그래'],['있습니까','있어'],['없습니까','없어'],
 ['겠습니까','겠어'],['입니까','이야'],['입니다','이야'],['아닙니다','아니야'],['있습니다','있어'],['없습니다','없어'],['했습니다','했어'],['됐습니다','됐어'],['좋습니다','좋아'],['같습니다','같아'],['됩니다','돼'],['겠습니다','겠어'],
 ['돌아가십시오','돌아가'],['조심하십시오','조심해'],['마십시오','마'],['주십시오','줘'],
 ['보이세요','보여'],['앉으세요','앉아'],['싶으세요','싶어'],['많으세요','많아'],['않으세요','않아'],['좋으세요','좋아'],['괜찮으세요','괜찮아'],['있으세요','있어'],['없으세요','없어'],['하셨어요','했어'],['이셨어요','이었어'],
 ['해 주세요','해 줘'],['해 주실래요','해 줄래'],
 ['쉬세요','쉬어'],['가세요','가'],['오세요','와'],['드세요','먹어'],['보세요','봐'],['하세요','해'],['마세요','마'],['주세요','줘'],
 ['괜찮으신가요','괜찮아'],['그러시겠어요','그럴래'],['어떨까요','어때'],['그러네요','그러네'],['맞나요','맞아'],['뭐예요','뭐야'],['왜요','왜'],['언제요','언제'],['어디요','어디'],['진짜요','진짜'],['정말요','정말'],['벌써요','벌써'],['그쵸','그치'],['맞쵸','맞지'],
 ['할게요','할게'],['볼게요','볼게'],['할걸요','할걸'],['걸요','걸'],['다고요','다고'],['라서요','라서'],['해서요','해서'],['여서요','여서'],['라니까요','라니까'],['니까요','니까'],['는데요','는데'],
 ['아니에요','아니야'],['아니요','아니'],['그럼요','그럼'],['잠깐만요','잠깐만'],['어떠세요','어때'],['보내세요','보내'],['지내세요','지내'],['찍으세요','찍어'],['고르세요','골라'],['챙기세요','챙겨'],['아세요','알아'],['바쁘세요','바빠'],['쓰세요','써'],['바꾸세요','바꿔'],['다니세요','다녀'],
 ['어떠셨습니까','어땠어'],['주무셨습니까','잤어'],['괜찮습니까','괜찮아'],['않습니까','않아'],['괜찮습니다','괜찮아'],['그렇습니다','그래'],['맞습니다','맞아'],['않습니다','않아'],['쉽습니다','쉬워'],['싶습니다','싶어'],['아름답습니다','아름다워'],['미끄럽습니다','미끄러워'],['어렵습니다','어려워'],['반갑습니다','반가워'],['고맙습니다','고마워'],['아쉽습니다','아쉬워'],['부담스럽습니다','부담스러워'],['받습니다','받아'],['믿습니다','믿어'],['걷습니다','걸어'],['높습니다','높아'],['합니다','해'],
 ['쉬십시오','쉬어'],['걸으십시오','걸어'],['보내십시오','보내'],['챙기십시오','챙겨'],['마치십시오','마쳐'],['나누십시오','나눠'],['앉으십시오','앉아'],['잡으십시오','잡아'],['계십시오','있어'],['오십시오','와'],['보십시오','봐'],['드십시오','먹어'],['쓰십시오','써'],['하십시오','해'],['지요','지'],
 ['이거든요','이거든'],['거든요','거든'],['잖아요','잖아'],['이네요','이네'],['네요','네'],['군요','네'],['죠','지'],['이에요','이야'],['예요','야'],['이어요','이야'],['인가요','이야'],['나요','나'],['까요','까'],['래요','래'],['게요','게'],['어요','어'],['아요','아'],['해요','해'],['돼요','돼'],['봐요','봐'],['가요','가'],['와요','와'],['줘요','줘'],['고요','고'],['데요','데'],['려고요','려고'],['고마워요','고마워'],['그래요','그래']
 ];
 let out=familiarGiving(familiarFirstPerson(familiarProposals(line)),p,side).replace(/(^|[\s…“])네(?=[,.!?…]|$)/g,'$1응');
 out=out.replace(/괜찮으시면/g,'괜찮으면').replace(/시간 괜찮으시다면/g,'시간 괜찮다면').replace(/말씀해/g,'말해').replace(/계셨/g,'있었').replace(/계세요/g,'있어');
 out=out.replace(/말씀하/g,'말하').replace(/말씀을/g,'말을').replace(/말씀이/g,'말이').replace(/주셔서/g,'줘서').replace(/주실래/g,'줄래').replace(/주시면/g,'주면').replace(/주시는/g,'주는').replace(/보셨/g,'봤').replace(/하셨/g,'했').replace(/가셨/g,'갔').replace(/오셨/g,'왔').replace(/읽으셨/g,'읽었').replace(/있으셨/g,'있었').replace(/드셨/g,'먹었').replace(/드시는/g,'먹는').replace(/드실/g,'먹을').replace(/하시는/g,'하는').replace(/하시던/g,'하던').replace(/하실/g,'할').replace(/하시면/g,'하면').replace(/오시면/g,'오면').replace(/가시면/g,'가면').replace(/뵙/g,'보');
 out=out.replace(/(지내|챙기|보내|마치|받으|없으|있으|바쁘|않으|숨기|기다리|고르|괜찮으|알아채|쓰|나|아|어떠|많으)셨/g,
  (_,stem)=>({지내:'지냈',챙기:'챙겼',보내:'보냈',마치:'마쳤',받으:'받았',없으:'없었',있으:'있었',바쁘:'바빴',않으:'않았',숨기:'숨겼',기다리:'기다렸',고르:'골랐',괜찮으:'괜찮았',알아채:'알아챘',쓰:'썼',나:'났',아:'알았',어떠:'어땠',많으:'많았'}[stem]));
 out=out.replace(/(있|없|않|내놓|앉|잡)으시(?=면)/g,'$1')
  .replace(/보내실래/g,'보낼래').replace(/받으시던/g,'받던')
  .replace(/느끼셨다니/g,'느꼈다니').replace(/느껴 주셨다면/g,'느껴 줬다면')

  .replace(/있습니다만/g,'있지만')
  .replace(/([가-힣])었습니다만/g,'$1었지만')
  .replace(/([가-힣])습니다만/g,(_,stem)=>stem+'지만');
 for(const [a,b] of rules)out=out.replace(new RegExp(a+end,'g'),b);
 // Past stems already contain ㅆ. Informal speech keeps the stem and adds 어.
 out=out.replace(new RegExp('([가-힣])(?:습니다|습니까)'+end,'g'),(match,stem)=>
  (stem.charCodeAt(0)-0xac00)%28===20?stem+'어':match);
 // Preserve nouns that happen to end in 요.
 return out.replace(new RegExp('[가-힣]+요'+end,'g'),word=>
  /^(?:필요|중요|주요|담요|동요|가요|민요|수요|개요|고요|강요|집요)$/.test(word)?word:word.slice(0,-1));
}
function formatSpeech(p,line,side,mode,day=state?.sim?.activeEvent?.day??state?.sim?.day){
 if(typeof line!=='string'||!people.includes(p))return line;
 // Older saves can still contain the previous scripted endings.
 line=line.replace(/더군요|더구나/g,ending=>ending==='더군요'?'더라고요':'더라');
 const a=state?.sim?.relationshipMemory?.[p]?.address;
 const m=mode??(side==='npc'?a?.npcSpeech:a?.playerSpeech);
 if(m==='반말'||(m==='혼용'&&day%2===0)){
  return keepVocative(line,agreedAddress(p,side,day),part=>casualSpeech(part,p,side));
 }
 return line;
}
function agreedAddress(p,side,day){
 const a=state?.sim?.relationshipMemory?.[p]?.address;
 if(!a)return '';
 const since=side==='npc'?Math.max(a.offerDay||0,a.nicknameOffered||0):a.offerDay||0;
 if(day<since)return '';
 if(side==='player'){
  const change=a.playerCallChanges?.find(x=>x.day>day);
  if(change)return change.before;
 }
 return (side==='npc'?a.npcToPlayer:a.playerToNpc)||'';
}
// Reopening a scene on the same day keeps the same conversational beat.
function addressTurn(p,day){
 return day+Math.floor((day-1)/9)+people.indexOf(p);
}
function spokenCall(p,side,day,line,position='before'){
 const term=agreedAddress(p,side,day);
 if(!term||!line)return line;
 const spoken=withAddress(line,term,p,side);
 // A scripted use of the name already serves this purpose.
 if(spoken!==line||spoken.includes(term))return spoken;
 if(position==='after'&&/[가-힣][.!?…]*[”’"]?$/.test(line)){
  return line.replace(/([.!?…]*[”’"]?)$/,ending=>', '+term+ending);
 }
 return line.replace(/^([“‘"]?[…]*)(?: )?/,(_,opening)=>opening+term+', ');
}
// Keep a direct address verbatim even if the chosen nickname itself ends
// in a speech ending (e.g. 요), or contains the original name plus 씨.
function keepVocative(line,term,format){
 if(term&&line.includes(term)){
  const front=line.indexOf(term+', ');
  if(front>=0&&/^[“‘".… ]*$/.test(line.slice(0,front))){
   const end=front+term.length+2;
   return line.slice(0,end)+format(line.slice(end));
  }
  const back=line.lastIndexOf(', '+term);
  if(back>=0&&/^[.!?…’”"]*$/.test(line.slice(back+2+term.length))){
   return format(line.slice(0,back))+line.slice(back);
  }
 }
 return format(line);
}
function withAddress(line,name,p,side){
 if(!name||typeof line!=='string')return line;
 const defaults=(side==='player'?[p,p.slice(1)]:[state.name,state.name?.slice(1)]).filter(Boolean);
 const stem=defaults.find(base=>vocative(base)===name)||name;
 const final=(stem.charCodeAt(stem.length-1)-0xac00)%28;
 const hasFinal=/[가-힣]$/.test(stem)&&final!==0;
 const particles={은:hasFinal?'은':'는',는:hasFinal?'은':'는',이:hasFinal?'이':'가',가:hasFinal?'이':'가',을:hasFinal?'을':'를',를:hasFinal?'을':'를',과:hasFinal?'과':'와',와:hasFinal?'과':'와',으로:hasFinal&&final!==8?'으로':'로',로:hasFinal&&final!==8?'으로':'로'};
 return keepVocative(line,name,body=>{
  for(const base of defaults){
   const original=(base+' 씨').replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   body=body.replace(new RegExp('(?<![가-힣])'+original+'(에게서|한테서|에게|한테|부터|까지|처럼|보다|하고|이랑|랑|으로|로|은|는|이|가|을|를|과|와|의|도|만|께)?(?![가-힣])','g'),(_,particle)=>{
    if(!particle)return name;
    if(particle==='이랑'||particle==='랑')return stem+(hasFinal?'이랑':'랑');
    return stem+(particles[particle]||particle);
   });
  }
  return body;
 });
}
function addressAvailableInEvent(ev){
 return !ev.speechOffer||ev.answered;
}
function phoneLineDay(m,side){
 return side==='player'?(m.replyDay??(m.reply?m.day:initSim().day)):m.day;
}
function phoneAddress(p,m,line,side){
 if(!m)return line;
 const term=side==='player'&&m.callAtReply!==undefined?m.callAtReply:agreedAddress(p,side,phoneLineDay(m,side));
 return withAddress(line,term,p,side);
}
function phoneChoiceText(p,m,label){
 return chatSpacing(phoneAddress(p,m,formatSpeech(p,label,'player',undefined,phoneLineDay(m,'player')),'player'));
}
function singleSpeechTarget(ev){return ev&&!ev.group&&!ev.groupPartners&&!ev.triangle&&!ev.crossIntro&&people.includes(ev.person)?ev.person:null}
function phoneSpeechMode(p,m,side,responding=false){
 const a=state?.sim?.relationshipMemory?.[p]?.address||{};
 const key=side==='npc'?'npcSpeech':'playerSpeech';
 if(responding&&m.replySpeech?.npc)return m.replySpeech.npc;
 if(m.speechAtSend&&side==='npc')return m.speechAtSend.npc;
 if(m.replySpeech)return m.replySpeech[side];
 if(m.reply&&a.offerDay&&m.day<=a.offerDay)return '존댓말';
 return a[key]||'존댓말';
}
function stampPhoneSpeech(){
 const v=state?.sim;if(!v?.phone?.threads)return;
 for(const [p,ms] of Object.entries(v.phone.threads)){
  const a=v.relationshipMemory?.[p]?.address||{};
  for(const m of ms){
   if(!m.speechAtSend)m.speechAtSend={npc:a.offerDay&&m.day<a.offerDay?'존댓말':a.npcSpeech||'존댓말'};
   if(m.reply&&!m.replySpeech)m.replySpeech={npc:a.offerDay&&m.day<a.offerDay?'존댓말':a.npcSpeech||'존댓말',player:a.offerDay&&m.day<a.offerDay?'존댓말':a.playerSpeech||'존댓말'};
  }
 }
}

function storyLine(who,text,me,typed,ev){
 if(who==='강도윤'&&!me&&state?.sim)text=text?.replace(/^하하[,!.… ]+/, '').replace(/ 하하[.,] /g,' ');
 const target=singleSpeechTarget(ev),side=me?'player':'npc';
 if(target&&!ev.speechOffer){
  if(me&&!typed||!me&&who===target)text=formatSpeech(target,text,side,undefined,ev.day??state.sim.day);
 }else if(target&&ev.speechOffer&&!me&&who===target&&text!==ev.speechOpening){
  const mode=ev.answered?undefined:ev.speechDraft?.ns;
  if(ev.answered||mode)text=formatSpeech(target,text,'npc',mode);
 }
 if(target&&!typed&&(me||who===target)&&addressAvailableInEvent(ev)){
  const term=agreedAddress(target,side,ev.day??state.sim.day);
  if(term)text=withAddress(text,term,target,side);
 }
 return chatSpacing(text);
}
const dialoguePortraits={
 '서이준':{file:'ijun',frames:['기본','웃음','당황','생각 중','걱정']},
 '강도윤':{file:'doyun',frames:['기본','밝은 웃음','당황','걱정','진지']},
 '한시우':{file:'siwoo',frames:['기본','웃음','당황','생각 중','진지']},
 '정태오':{file:'taeo',frames:['기본','옅은 웃음','당황','생각 중','분노']},
 '차유리':{file:'yuri',frames:['기본','웃음','당황','생각 중','짜증']},
 '오세린':{file:'serin',frames:['기본','웃음','당황','생각 중','걱정']},
 '유지안':{file:'jian',frames:['기본','웃음','당황','고민','진지']},
 '공재희':{file:'jaehee',frames:['기본','웃음','당황','짜증','불안']},
 '임하나':{file:'hana',frames:['기본','미소','당황','걱정','부끄러움']},
 '백지한':{file:'jihan',frames:['기본','농담','당황','생각 중','진지']}
};
const argumentPortraits={
 '서이준':{opening:'기본',retort:'기본',truth:'걱정',walkAway:'기본',early:'생각 중',listen:'생각 중',repair:'걱정',unresolved:'걱정'},
 '강도윤':{opening:'걱정',retort:'진지',truth:'걱정',walkAway:'진지',early:'걱정',listen:'걱정',repair:'진지',unresolved:'걱정'},
 '한시우':{opening:'진지',retort:'진지',truth:'진지',walkAway:'진지',early:'생각 중',listen:'생각 중',repair:'진지',unresolved:'당황'},
 '정태오':{opening:'기본',retort:'분노',truth:'생각 중',walkAway:'기본',early:'생각 중',listen:'생각 중',repair:'기본',unresolved:'생각 중'},
 '차유리':{opening:'생각 중',retort:'짜증',truth:'생각 중',walkAway:'짜증',early:'생각 중',listen:'생각 중',repair:'생각 중',unresolved:'생각 중'},
 '오세린':{opening:'걱정',retort:'걱정',truth:'걱정',walkAway:'기본',early:'걱정',listen:'생각 중',repair:'걱정',unresolved:'걱정'},
 '유지안':{opening:'진지',retort:'진지',truth:'고민',walkAway:'진지',early:'고민',listen:'고민',repair:'진지',unresolved:'고민'},
 '공재희':{opening:'불안',retort:'짜증',truth:'불안',walkAway:'짜증',early:'불안',listen:'당황',repair:'기본',unresolved:'불안'},
 '임하나':{opening:'걱정',retort:'당황',truth:'걱정',walkAway:'걱정',early:'걱정',listen:'기본',repair:'기본',unresolved:'걱정'},
 '백지한':{opening:'진지',retort:'진지',truth:'진지',walkAway:'진지',early:'생각 중',listen:'생각 중',repair:'진지',unresolved:'생각 중'}
};
function dialogueExpression(who,label){
 const data=dialoguePortraits[who],frame=data?.frames.indexOf(label);
 if(frame===undefined||frame<0)return null;
 const face=document.createElement('span');
 face.className='dialogue-expression';
 face.setAttribute('role','img');
 face.setAttribute('aria-label',who+' · '+label);
 face.style.backgroundImage='url("assets/expressions/'+data.file+'.webp")';
 face.style.backgroundPosition=(frame*25)+'% 0';
 return face;
}
function add(who,text,me=false,typed=false,expression,prepared=false){
 const ev=state?.sim?.activeEvent,log=$('log');
 if(!prepared)text=storyLine(who,text,me,typed,ev);
 const npc=!me&&people.includes(who);
 if(npc&&!(ev?.carePerson||/^DAY \d+ 일정 결과/.test(ev?.description||'')))setStoryStanding(who);
 const el=document.createElement('div');
 el.dataset.voice=me?'player':npc?'npc':who==='이야기'?'narration':'system';
 el.className='bubble'+(me?' me':'');const title=document.createElement('strong');title.textContent=who;const body=document.createElement('span');body.className='dialogue-text';body.textContent=text;
 const face=npc&&dialogueExpression(who,expression);
 if(face){el.classList.add('has-expression');el.append(face)}
 el.append(title,body);log.append(el);log.scrollTop=log.scrollHeight}
const introReplies=[
[['서이준','“아, 죄송합니다. 바로 옮길게요.”',2],['서이준','“...그러네요. 죄송합니다.”',0],['서이준','“그런 농담은 별로 안 좋아합니다.”',-3]],
[['백지한','“네. 이준이 형도 제가 중개해 드렸거든요.”',2],['백지한','“입주 전에 확인했지만, 불편한 곳이 있으면 바로 연락 주세요.”',1],['백지한','“하하, 시작부터 인상이 강렬했겠는데요?”',2]],
[['임하나','“한시우 씨요. 여기 자주 오시는 손님이에요.”',1],['한시우','“아, 고마워요. 조만간 갚을 거거든요!”',2],['임하나','“안쪽 냉장고에 있어요. 오른쪽 두 번째 칸이요.”',1]],
[['강도윤','“네, 아이스 아메리카노 한 잔이요. 잠시만 기다려 주세요.”',1],['강도윤','“네, 창가 끝자리는 비어 있어요. 편하게 앉으세요.”',1],['강도윤','“노트북 쓰는 분은 유리 씨고, 방금 들어온 친구는 시우예요. 둘 다 단골이죠.”',2]],
[['서이준','“네. 이사는 다 마치셨어요?”',1],['서이준','“빌라 뒤쪽에 분리수거장이 있어요. 현관 나가서 왼쪽으로 돌아가시면 됩니다.”',2],['이야기','가볍게 목례하고 집으로 들어왔다.',0]]
];
function scene(){setStoryStanding(null);renderStoryParticipants(null);renderStoryIllustration(null);const v=initSim();if(v.day>1){$('next').classList.add('hide');switchTab('life');return}v.activeEvent=null;v.introChoices=v.introChoices||{};$('next').classList.remove('hide');renderSim();syncSchedule();switchTab('story');const n=state.scene,s=scenes[n];$('where').textContent=s.place;$('clock').textContent='DAY 01 · '+['14:00','14:20','16:00','17:00','21:00'][n];$('progress').textContent=(n+1)+' / '+scenes.length+' 장면';$('log').innerHTML='';add('이야기',s.intro);$('suggest').innerHTML='';const chosen=v.introChoices[n];$('next').disabled=chosen===undefined;for(const [i,t] of s.suggest.entries()){const b=document.createElement('button');b.type='button';b.className='secondary';b.textContent=t;b.disabled=chosen!==undefined;b.addEventListener('click',()=>{if(v.introChoices[n]!==undefined)return;v.introChoices[n]=i;const [p,response,delta]=introReplies[n][i];const key='intro-choice:'+n;if(!v.topicRewards[key]){v.topicRewards[key]=true;if(people.includes(p)){v.met[p]=true;v.talkCount[p]=(v.talkCount[p]||0)+1;v.affection[p]=Math.max(0,Math.min(999,(v.affection[p]||0)+delta))}}save();scene()});$('suggest').append(b)}if(chosen!==undefined){const [p,response]=introReplies[n][chosen];add(state.name,s.suggest[chosen],true);add(p,response)}$('next').textContent=n===scenes.length-1?'첫날 마치기':'다음 장소로';save()}
function reply(t){
 t=String(t||'').trim();if(!t)return;
 const current=initSim(),active=current.activeEvent;
 if(active){
  if(active.abruptDeparture)return;
  if(departureTalkEvent===active&&isAbruptDeparture(t)&&beginAbruptDeparture(active,t,true))return;
  add(state.name,t,true,true);
  const p=active.person,words=t.replace(/\s/g,''),key='event:'+current.day+':'+p;
  if(!p){add('이야기','혼잣말이 조용한 동네에 흩어진다.');return}
  const response=talkResponse(p,t);
  if(departureTalkEvent===active){
   active.departureTalkHistory=[...(active.departureTalkHistory||[]),[t,response]].slice(-5);
  }
  add(p,response);
  if(!current.topicRewards[key]){current.topicRewards[key]=true;current.affection[p]=Math.min(999,(current.affection[p]||0)+2);add('시스템',p+' 호감도 +2')}
  writeJournal(p+'와 대화: '+t);renderSim();return;
 }
 add(state.name,t,true);
 const n=state.scene,s=scenes[n],previous=state.history.filter(x=>x.scene===n);if(!state.identity)state.identity={traits:{솔직함:0,신중함:0,다정함:0,장난기:0},background:null};
 const has=(...w)=>w.some(x=>t.includes(x));
 let intent='other';
 if(/사장님|인사했|이미 인사|전에 봤|아까 봤/.test(t))intent='priorGreeting';
 else if(has('누구','이름','소개','정체','뉘신'))intent='identity';
 else if(has('어떻게 알아','왜 알아','집을 알아','호수를 알아'))intent='privacy';
 else if(has('불편','무서','수상','경계','신고','경찰','따라오'))intent='boundary';
 else if(has('안녕','반가'))intent='greeting';
 else if(has('감사','고마'))intent='thanks';
 else if(has('미안','죄송'))intent='apology';
 else if(has('택배','막고','못 들어','치워','옮기'))intent='parcel';
 else if(has('외상','갚','돈'))intent='debt';
 else if(has('친구','아는 사이','친해','동창'))intent='relationship';
 else if(has('집','하자','고장','수리'))intent='home';
 else if(has('커피','아메리카노','라테','주문','메뉴'))intent='order';
 else if(has('자리','앉아'))intent='seat';
 else if(has('생수','물','어디','찾아'))intent='location';
 else if(has('분리수거','쓰레기'))intent='recycle';
 else if(has('훔','도둑','농담','장난'))intent='joke';
 const R=[
 {priorGreeting:['“아, 사장님하고는 인사하셨군요. 저는 옆집 사는 서이준입니다.”'],identity:['“서이준입니다. 203호 살아요.”','“방금 말씀드렸는데요. 서이준입니다.”'],privacy:['“제가 집 호수를 어떻게 알겠습니까. 바로 옆집이라는 것 말고는요.”'],boundary:['“불편하셨다면 죄송합니다. 더 말 걸지 않을게요.”'],parcel:['“문을 막았네요. 제 잘못입니다. 죄송합니다.”','“네. 바로 치우겠습니다.”'],apology:['“아뇨. 제 택배가 문제였죠.”'],joke:['“...농담이시죠?” 그가 한 걸음 물러선다.'],greeting:['“안녕하세요.”'],thanks:['“별말씀을요.”'],other:['“네? 어떤 말씀인지 잘 모르겠습니다.”','“죄송하지만 다시 설명해 주시겠어요?”']},
 {identity:['“연화부동산 실장 백지한입니다. 계약할 때 뵀죠.”'],privacy:['“계약 담당자라 호수는 알고 있지만, 다른 사람한테 말하진 않습니다.”'],boundary:['“제가 너무 친한 척했나요? 죄송합니다. 업무 관련해서만 연락드릴게요.”'],relationship:['“이준이 형이랑 동네에서 오래 봤어요. 그 이상은 형한테 물어보세요.”'],home:['“하자 있으면 사진 찍어 연락 주세요. 확인하겠습니다.”'],greeting:['“안녕하세요. 이사는 잘 마치셨어요?”'],other:['“어떤 부분 말씀하시는 걸까요?”']},
 {identity:['“저요? 임하나예요. 여기 직원이고요.” 임하나가 편의점 밖을 가리킨다. “저쪽은 단골 한시우 씨예요.”','한시우가 멋쩍게 웃는다. “아, 저한테 물으신 거였어요? 한시우입니다.”'],privacy:['임하나가 눈썹을 찌푸린다. “집 호수까지 물어보는 사람이 있으면 조심하세요.”'],boundary:['임하나: “불편하시면 안쪽에서 계산하고 가세요. 제가 봐드릴게요.”'],debt:['임하나: “손님한테까지 들키셨네요.” 한시우가 시선을 피한다.'],location:['임하나: “생수는 오른쪽 끝 냉장고에 있어요.”'],greeting:['임하나: “어서 오세요.”'],other:['임하나: “찾으시는 물건 있으세요?”','임하나: “죄송해요, 무슨 뜻인지 잘 모르겠네요.”']},
 {identity:['“강도윤입니다. 여기 사장이에요.” 그가 카운터를 가리킨다. “저쪽 손님은 차유리 씨고요. 서로 아는 사이세요?”'],boundary:['강도윤: “불편하셨다면 죄송합니다. 편하게 이용하세요.”'],order:['강도윤: “네, 주문 도와드릴게요. 테이크아웃이세요?”'],seat:['강도윤: “창가 쪽은 손님이 계시고, 안쪽 자리는 비어 있습니다.”'],relationship:['강도윤: “시우랑은 오래 알았죠. 단골이에요.”'],debt:['강도윤: “그건 저희끼리 해결할 문제라서요.” 한시우가 조용히 고개를 끄덕인다.'],greeting:['강도윤: “어서 오세요. 주문 도와드릴까요?”'],other:['강도윤: “제가 잘 못 들었네요. 다시 말씀해 주시겠어요?”']},
 {identity:['“203호 서이준입니다. 아까 복도에서 뵀죠.”'],boundary:['“네. 그럼 들어가 보겠습니다.”'],recycle:['“빌라 뒤편에 분리수거장이 있습니다. 수요일 저녁에 내놓으시면 돼요.”'],greeting:['“안녕하세요.”'],thanks:['“아, 네. 별말씀을요.”'],other:['“그럼 먼저 들어가 보겠습니다.”']}
 ];
 const v=initSim();
 const topics=[
  {scene:0,person:'서이준',words:['고양이','길냥','길고양'],response:'서이준은 잠깐 표정을 누그러뜨린다. “고양이요? ...가끔 밥을 챙겨 줍니다.”'},
  {scene:4,person:'서이준',words:['고양이','길냥','길고양'],response:'“아, 그 고양이요. 이 근처에 자주 와요.” 서이준이 짧게 답한다.'},
  {scene:1,person:'백지한',words:['동네','부동산','가게'],response:'“이 근처 상권이요? 오래된 가게들이 꽤 많아요. 그런 건 제가 좀 알죠.”'},
  {scene:2,person:'한시우',words:['게임','개발','코딩'],response:'한시우가 눈을 동그랗게 뜬다. “게임 좋아해요? 저 스타썬더에서 선수로 뛰거든요.”'},
  {scene:2,person:'임하나',words:['편의점','야간','근무'],response:'임하나가 계산대를 정리한다. “야간 근무가 조용할 때도 있는데, 꼭 그렇지만은 않아요.”'},
  {scene:3,person:'강도윤',words:['커피','원두','카페'],response:'강도윤이 메뉴판을 가리킨다. “원두 취향이 있으세요? 산미 있는 쪽과 고소한 쪽이 달라요.”'},
  {scene:3,person:'차유리',words:['디자인','작업','수정','그림'],response:'창가의 차유리가 고개를 든다. “디자인 일 얘기예요? 지금은 마감 때문에 정신이 없네요.”'}
 ];
 const topic=topics.find(x=>x.scene===n&&x.words.some(w=>t.includes(w)));
 if(topic){
   const key=topic.person+':'+topic.words[0];
   const first=!v.topicRewards[key];
   if(first){v.topicRewards[key]=true;v.affection[topic.person]=Math.min(999,v.affection[topic.person]+6)}
   add(topic.person,first?topic.response:('“아, 그 얘기는 아까 했던 것 같은데요.”'));
   if(first)add('시스템',topic.person+'의 관심사를 알아봤다 · 호감도 +6');
   state.history.push({scene:n,input:t,response:topic.response,intent:'interest'});renderSim();return;
 }
 const positive=(intent==='greeting'||intent==='thanks'||intent==='apology');
 const person=n===2?'임하나':n===3?'강도윤':s.who;
 const rapportKey=n+':'+person+':rapport';
 if(positive&&!v.topicRewards[rapportKey]){v.topicRewards[rapportKey]=true;v.affection[person]=Math.min(999,v.affection[person]+2)}
 const opts=R[n][intent]||R[n].other;
 const used=previous.filter(x=>x.intent===intent).length;
 let answer=opts[Math.min(used,opts.length-1)];
 if(used>=opts.length && intent!=='other' && used>1)answer='“그 부분은 이미 말씀드린 것 같은데요.”';
 if(intent==='boundary')state.boundaries[n]=true;
 if(state.boundaries[n] && intent!=='boundary' && intent!=='identity' && intent!=='recycle' && intent!=='order')answer=['“알겠습니다. 필요한 일만 말씀해 주세요.”','“네. 용건이 없으시면 이만.”','임하나: “필요하신 물건만 말씀해 주세요.”','강도윤: “주문하실 때 불러 주세요.”','“네. 그럼 들어가겠습니다.”'][n];
 const speaker=n===2?'임하나':n===3?'강도윤':s.who;
 answer=answer.replace(/^(임하나|강도윤|한시우|서이준):\s*/,'');
 add(speaker,answer);
 const traits=state.identity.traits;if(intent==='apology'||intent==='thanks')traits.다정함++;else if(intent==='boundary')traits.신중함++;else if(intent==='joke')traits.장난기++;else if(intent==='why'||intent==='privacy')traits.솔직함++;state.history.push({scene:n,input:t,response:answer,intent});renderSim();
}
function start(){const name=$('name').value.trim();const age=Number($('age').value);if(!name){$('setupError').textContent='이름을 입력해 주세요.';return}if(!Number.isInteger(age)||age<20||age>40){$('setupError').textContent='나이는 20세부터 40세까지 입력해 주세요.';return}const birthday=$('birthday').value.trim();if(!validBirthday(birthday)){$('setupError').textContent='생일을 MM-DD 형식으로 입력해 주세요.';return}state={name,age,gender:'여',birthday,job:$('job').value,personality:null,scene:0,history:[],boundaries:{},sim:null};$('setup').classList.add('hide');$('game').classList.remove('hide');beginIntro()}
const jobGuides={'회사원':'평일 오전~오후 출근 · 매월 말일 월급 240만원 · 저녁과 주말 자유','프리랜서':'월·수·금 오전 외주 작업 · 건당 65,000원 · 나머지 자유','취업 준비생':'고정 일정 없음 · 아르바이트 등으로 수입 확보','대학생':'평일 요일별 수업 · 공강과 주말 자유 · 아르바이트 가능','기타':'고정 일정 및 정기 수입 없음 · 자유 편성'};function drawJobGuide(){$('jobGuide').textContent=jobGuides[$('job').value]}$('job').addEventListener('change',drawJobGuide);drawJobGuide();$('start').addEventListener('click',start);$('send').addEventListener('click',()=>{reply($('message').value);$('message').value='';$('message').focus()});$('message').addEventListener('keydown',e=>{if(e.key==='Enter')$('send').click()});$('next').addEventListener('click',()=>{const v=initSim();if(v.day!==1||v.running||v.activeEvent||v.introChoices?.[state.scene]===undefined){$('next').classList.add('hide');return}if(state.scene<scenes.length-1){state.scene++;scene()}else{v.day=2;v.energy=100;v.activeEvent=null;$('next').classList.add('hide');$('next').disabled=true;renderSim();syncSchedule();switchTab('life');save();openHelp()}});$('reset').addEventListener('click',()=>{if(confirm('처음부터 다시 시작할까요? 수집한 앨범 기록과 수동 세이브 슬롯은 유지됩니다.')){try{localStorage.removeItem(KEY)}catch(e){}location.reload()}});
for(const i of items){const o=document.createElement('option');o.value=i.name;o.textContent=i.name+' · '+i.cost.toLocaleString()+'원';$('giftItem').append(o)}
const scheduleGroups={
 '생활·휴식':['장보기','요리','방 정리','휴식'],
 '알바':['아르바이트','편의점 알바','부동산 사무 보조','동물병원 보조','댄스 학원 데스크'],
 '봉사·돌봄':['유기견 보호소 봉사','반려견 돌봄 실습'],
 '학습·자기계발':['공부','글쓰기','개발',programmingClass,'디자인','카페 실습',...Object.keys(professionActivities).filter(a=>!['반려견 돌봄 실습','댄스 연습'].includes(a))],
 '운동·취미':['수영','러닝','산책','댄스 연습','취미 생활','PC방에서 게임하기'],
 '외출·교류':['자유외출','교류']
};

function scheduleOption(select,value,label=value){
 const option=document.createElement('option');
 option.value=value;
 option.textContent=label;
 select.append(option);
}

const scheduleSlots=dayLabels.map((label,slot)=>{
 const row=document.createElement('div');
 row.className='schedule-slot';
 const heading=document.createElement('strong');
 heading.textContent=label;
 const category=document.createElement('select');
 const activity=document.createElement('select');
 category.setAttribute('aria-label',label+' 일정 분류');
 activity.setAttribute('aria-label',label+' 활동');
 scheduleOption(category,'','고정 일정');
 category.options[0].disabled=true;
 for(const group of Object.keys(scheduleGroups))scheduleOption(category,group);
 function showActivities(group,selected,label=selected){
  activity.replaceChildren();
  const choices=scheduleGroups[group]||[];
  if(!choices.includes(selected)){
   scheduleOption(activity,'',label||'활동 선택');
   activity.options[0].disabled=true;
  }
  for(const a of choices)scheduleOption(activity,a,a==='아르바이트'?'카페 알바':a);
  activity.value=choices.includes(selected)?selected:'';
 }
 category.addEventListener('change',()=>showActivities(category.value,''));
 activity.addEventListener('change',()=>{
  const v=initSim(),day=Number($('planDay').value)||v.day;
  if(activity.disabled||!scheduleGroups[category.value]?.includes(activity.value))return;
  const plan=personalPlan(v,day);
  plan[slot]=activity.value;
  v.weekPlans[day]=plan;
  if(day===v.day)v.schedule=plan.slice();
  save();
 });
 row.append(heading,category,activity);
 $('schedule').append(row);
 return {category,activity,showActivities};
});
$('planDay').addEventListener('change',syncSchedule);
$('copyWeek').addEventListener('click',()=>{const v=initSim(),plan=personalPlan(v,Number($('planDay').value)||v.day);for(let d=v.day;d<=Math.min(365,v.day+6);d++)v.weekPlans[d]=plan.slice();save();syncSchedule()});
$('runWeek').addEventListener('click',()=>{const v=initSim();if(v.running||v.activeEvent||v.day===1||v.finished)return;v.weekEnd=Math.min(365,v.day+6);for(let d=v.day;d<=v.weekEnd;d++)v.weekPlans[d]=personalPlan(v,d);save();playDay()});
$('stopWeek').addEventListener('click',()=>{initSim().weekEnd=null;save();syncSchedule()});
function renderUpcomingBookings(v){
 const list=$('upcomingBookings');
 list.replaceChildren();
 const plans=dateBook();
 const days=Object.keys(plans).map(Number).filter(day=>day>=v.day&&plans[day]).sort((a,b)=>a-b);
 const rows=document.createElement('ul');
 for(const day of days){
  const plan=plans[day],trip=plan.trip;
  if(trip?.stage===2&&day>v.day&&plans[day-1]?.trip?.id===trip.id)continue;
  const row=document.createElement('li');
  const when=trip?.stage===1?calendarDate(day).label+' '+dayLabels[plan.slot??0]+' 출발 ~ '+calendarDate(day+1).label:
   calendarDate(day).label+(trip?'':' · '+(dayLabels[plan.slot]||'시간 미정'));
  const people=trip?.people||plan.group||[plan.p];
  row.textContent=when+' · '+people.filter(Boolean).join(', ')+' · '+(plan.venue||'약속');
  rows.append(row);
 }
 if(rows.children.length)list.append(rows);
 else list.textContent='잡힌 약속이 없어요.';
}
function syncSchedule(){const v=initSim();movePendingHomeVisits(v);renderUpcomingBookings(v);const locked=v.day===1||!!v.running||!!v.activeEvent||!!v.finished;const picker=$('planDay'),old=Number(picker.value);picker.innerHTML='';for(let d=v.day;d<=Math.min(365,v.day+6);d++){const o=document.createElement('option');o.value=d;o.textContent=calendarDate(d).label+' · '+['월','화','수','목','금','토','일'][(d-1)%7];picker.append(o)}picker.value=old>=v.day&&old<=Math.min(365,v.day+6)?old:v.day;picker.disabled=locked;let fb=$('festivalOpen');if(!fb){fb=document.createElement('button');fb.id='festivalOpen';$('runDay').before(fb)}fb.classList.toggle('hide',!festivalAvailable());fb.style.margin='12px 0';fb.style.width='100%';fb.textContent='🎆 연화제 특별 참가 · 야시장과 불꽃놀이';fb.disabled=locked;fb.onclick=startFestival;let cb=$('christmasOpen');if(!cb){cb=document.createElement('button');cb.id='christmasOpen';$('runDay').before(cb)}cb.style.cssText='width:100%;margin:8px 0';cb.classList.toggle('hide',v.day<292||v.day>299||christmasState().eveDone);cb.disabled=locked;cb.textContent='🎄 이브 약속 · '+(christmasState().planned?(christmasState().partner||'혼자'):'동행 선택');cb.onclick=christmasPlan;let lb=$('leaveToggle');if(!lb){lb=document.createElement('button');lb.id='leaveToggle';picker.after(lb)}const ld=Number(picker.value)||v.day;lb.classList.toggle('hide',state.job!=='회사원');lb.textContent=(leaveBook()[ld]?'연차 취소':'연차 사용')+' · 잔여 '+(15-Object.keys(leaveBook()).length)+'일';lb.disabled=locked||(ld-1)%7>=5||!!dateBook()[ld]||(!leaveBook()[ld]&&Object.keys(leaveBook()).length>=15);lb.onclick=()=>{if(leaveBook()[ld])delete leaveBook()[ld];else leaveBook()[ld]=true;save();syncSchedule()};$('copyWeek').disabled=locked;$('runWeek').disabled=locked;$('stopWeek').classList.toggle('hide',!v.weekEnd);const day=Number(picker.value)||v.day,booking=dateBook()[day],activities=planFor(day);
 let assessmentNotice=$('assessmentNotice');
 if(!assessmentNotice){
  assessmentNotice=document.createElement('p');
  assessmentNotice.id='assessmentNotice';
  assessmentNotice.className='muted-note';
  $('schedule').before(assessmentNotice);
 }
 const target=professionRecord().target;
 const bookedAssessment=careerAssessments[target]&&assessmentRecord(target).bookedDay===day;
 assessmentNotice.classList.toggle('hide',!bookedAssessment);
 assessmentNotice.textContent=bookedAssessment?'이날 일정 시작 전에 '+careerAssessments[target].title+'에 응시한다.':'';
 scheduleSlots.forEach(({category,activity,showActivities},i)=>{
  const booked=bookingOccupies(booking,i);
  const selected=activities[i];
  const group=Object.keys(scheduleGroups).find(key=>scheduleGroups[key].includes(selected))||'';
  category.value=group;
  category.disabled=activity.disabled=locked||booked||!!fixedActivity(day,i);
  showActivities(group,selected,booked?[(booking.group||[booking.p]).join(', '),booking.venue||'외출 약속'].join(' · '):selected);
 });$('runDay').disabled=locked;$('runDay').textContent=v.day===1?'첫날 이야기를 완료하면 일정이 열립니다':v.activeEvent?'이야기 탭에서 이벤트를 마쳐 주세요':v.running?'일정 진행 중':v.finished?'한 해의 일정 완료':'오늘 일정 실행 · 다음 날로'}
$('runDay').addEventListener('click',playDay);
$('gift').addEventListener('click',()=>{const v=initSim(),p=selectedGiftTarget,i=items.find(x=>x.name===$('giftItem').value),f=$('giftFeedback');function feedback(t){f.textContent=t;f.classList.remove('hide');}if(!p||!i)return;if(v.affection[p]<20){feedback('지인 단계부터 선물을 줄 수 있습니다.');return}if(v.finished){feedback('한 해의 일정이 끝났습니다.');return}if(v.money<i.cost){feedback('소지금이 부족합니다.');return}const k=v.day+'-'+p;if(v.gifts[k]){feedback('같은 사람에게는 하루 한 번만 선물할 수 있어요.');return}v.money-=i.cost;v.gifts[k]=true;const [love,like,dislike]=giftPrefs[p];let delta=love.includes(i.name)?6:like.includes(i.name)?3:dislike.includes(i.name)?-2:0;v.giftHistory=v.giftHistory||{};const history=v.giftHistory[p]||(v.giftHistory[p]={});if(history[i.name]&&v.day-history[i.name].day<7&&delta>0)delta=1;const before=v.affection[p];v.affection[p]=Math.max(0,Math.min(999,before+delta));history[i.name]={day:v.day,reaction:love.includes(i.name)?'매우 좋아함':like.includes(i.name)?'좋아함':dislike.includes(i.name)?'부담스러워함':'보통'};const lines={"서이준":["…이건 필요한 거였는데. 감사합니다.","잘 쓰겠습니다. 기억해 두셨나 봐요.","아직 지난번 것도 있는데요. …감사합니다.","…저한테는 좀 과한 것 같네요.","아, 챙겨 주셨네요."],"강도윤":["와, 제 취향을 어떻게 아셨어요?","덕분에 기분 좋은 하루가 되겠네요.","하하, 지난번 선물도 잘 쓰고 있어요.","마음만으로도 충분한데요. 조금 부담되네요.","신경 써 주셔서 고마워요."],"한시우":["오! 이거 진짜 좋은데요?","오, 땡큐! 잘 쓸게요.","어? 이거 저번에도 받았는데!","앗, 이건 저보다 다른 사람이 잘 쓸 듯?","오, 선물이다! 감사요."],"정태오":["잘 쓰겠습니다. 신경 써 주셔서 감사합니다.","유용하게 쓰겠습니다.","지난번에 받은 것도 잘 보관하고 있습니다.","제게는 다소 부담스러운 물건입니다.","챙겨 주셨군요. 감사합니다."],"백지한":["센스 좋으시네요. 마음에 들어요.","제 생각하면서 고르셨어요? 좋네요.","지난번에도 주셨잖아요. 저한테 너무 잘해 주시는 거 아닌가요?","음, 이건 제 취향과 조금 거리가 있네요.","뜻밖의 선물이네요. 고마워요."],"임하나":["저한테요? 정말 감사해요…!","아껴서 쓸게요. 고마워요.","또 받아도 되는 걸까요……?","아… 저한테는 조금 부담스러워요.","제 몫도 챙겨 주셨네요."],"차유리":["우와, 이거 완전 제 취향이에요!","오, 괜찮다. 잘 쓸게요.","이거 두 개 됐네요. 하나는 작업실에 둘까.","음, 이건 제가 쓸 일이 별로 없을 것 같아요.","오, 선물이네요. 고마워요."],"오세린":["세심하게 골라 주셨네요. 고마워요.","덕분에 소소한 즐거움이 생겼네요.","지난번 것도 아직 잘 쓰고 있답니다.","제게는 조금 과분한 선물이네요.","마음 써 주셨군요."],"유지안":["와! 바로 써 보고 싶어요!","오예! 고마워요!","헐, 또요? 저번 것도 잘 쓰고 있는데!","앗, 저랑은 좀 안 어울리는 것 같아요.","우와, 깜짝 선물!"],"공재희":["헐 대박! 이거 완전 내 취향인데요? 개좋아 ㅋㅋ","모야모야, 나 주려고 샀어요? 고마워요!","엥 이거 또요? 하나 더 생겼네 ㅋㅋ","음… 이건 나 진짜 안 쓸 것 같은데.","오, 나 주는 거예요? 땡큐!"]};const line=lines[p][delta>=6?0:delta===3?1:delta===1?2:delta<0?3:4];const gain=v.affection[p]-before;feedback(p+' · “'+line+'”\n'+i.name+' · '+i.cost.toLocaleString()+'원 지출 · 호감도 '+(gain>0?'+':'')+gain);writeJournal(p+' · '+i.name+' 선물');renderSim();$('giftPanel').classList.add('hide');selectedGiftTarget=null;save()});
const SLOTKEY=KEY+'-slots-v1';
function readSlots(){const raw=localStorage.getItem(SLOTKEY);if(!raw)return [];const a=JSON.parse(compactSlotUnpack(raw));if(!Array.isArray(a))throw Error('슬롯 형식 오류');return a}
function validSave(s){return !!(s&&typeof s.name==='string'&&s.name&&Number.isInteger(s.scene)&&s.scene>=0&&s.scene<scenes.length&&s.sim&&Number.isInteger(s.sim.day)&&s.sim.day>=1&&s.sim.day<=366&&s.sim.affection&&typeof s.sim.affection==='object'&&!Array.isArray(s.sim.affection))}
function snapshot(){if(!validSave(state))throw Error('저장할 진행이 없습니다.');albumData();const copy=JSON.parse(JSON.stringify(state));delete copy.album;return copy}
function slotAction(fn){try{fn();drawSlots()}catch(e){$('slotStatus').textContent=e.message||'저장 공간 또는 데이터 오류'}}
function storeSlots(a){
 const oldAlbum=albumData(),all=albumMerge(oldAlbum,...a.map(s=>s.state?.album));
 let safelySeparated=false;
 try{
  const saved=JSON.stringify(all);
  localStorage.setItem(ALBUMKEY,saved);
  safelySeparated=localStorage.getItem(ALBUMKEY)===saved;
  if(safelySeparated){albumCache=all;albumSerialized=saved;if(state){state.album=all;albumOwner=state}}
 }catch(e){console.warn('앨범 공유 저장을 유지합니다',e)}
 const cleaned=a.map(s=>({...s,state:safelySeparated?{...s.state,album:undefined}:s.state}));
 localStorage.setItem(SLOTKEY,compactSlotPack(JSON.stringify(cleaned)));
}
function portableAutoJSON(raw){
 try{
  const saved=JSON.parse(raw),stored=JSON.parse(localStorage.getItem(ALBUMKEY)||'null');
  if(validSave(saved)&&stored){saved.album=albumMerge(stored,saved.album);return JSON.stringify(saved)}
 }catch(error){/* Preserve the original backup if its format cannot be read. */}
 return raw;
}
function restoreSlot(s){if(!validSave(s))throw Error('올바르지 않은 세이브입니다.');if(!confirm(s.name+' · DAY '+s.sim.day+' 진행을 불러올까요? 자동 저장이 교체됩니다.'))return;const old=localStorage.getItem(KEY);if(old)localStorage.setItem(KEY+'-transfer-backup',portableAutoJSON(old));localStorage.setItem(KEY,JSON.stringify(s));location.reload()}
function downloadSlot(s){s={...s,album:albumMerge(s.album,albumData())};const url=URL.createObjectURL(new Blob([JSON.stringify({format:'yeonhwa-save-1',state:s},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='yeonhwa-day-'+s.sim.day+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function drawSlots(){const root=$('slotList');root.replaceChildren();const a=readSlots();$('slotStatus').textContent=a.length+'/30 슬롯';function btn(parent,label,fn){const b=document.createElement('button');b.type='button';b.className='secondary';b.textContent=label;b.onclick=()=>slotAction(fn);parent.append(b)}
const auto=document.createElement('div');auto.textContent='현재 진행 / 자동 저장';root.append(auto);btn(auto,'JSON 파일 저장',()=>downloadSlot(snapshot()));btn(auto,'자동 저장 불러오기',()=>restoreSlot(JSON.parse(localStorage.getItem(KEY)||'null')));
a.forEach((s,i)=>{const row=document.createElement('div');row.style.cssText='border:1px solid #9995;border-radius:8px;padding:10px;margin:8px 0;display:flex;flex-wrap:wrap;gap:6px';const title=document.createElement('div');title.style.width='100%';title.textContent=(i+1)+'. '+s.label+' · '+s.state.name+' · DAY '+s.state.sim.day+' · '+calendarDate(s.state.sim.day).label+' · '+new Date(s.time).toLocaleString('ko-KR');row.append(title);root.append(row);btn(row,'불러오기',()=>restoreSlot(s.state));btn(row,'덮어쓰기',()=>{if(confirm('이 슬롯을 덮어쓸까요?')){a[i]={...s,state:snapshot(),time:Date.now()};storeSlots(a)}});btn(row,'이름 변경',()=>{const n=prompt('슬롯 이름',s.label);if(n&&n.trim()){a[i].label=n.trim().slice(0,80);storeSlots(a)}});btn(row,'복제',()=>{if(a.length>=30)throw Error('슬롯이 가득 찼습니다.');a.push({...s,label:s.label+' 복제',time:Date.now()});storeSlots(a)});btn(row,'파일 저장',()=>downloadSlot(s.state));btn(row,'삭제',()=>{if(confirm('이 슬롯을 삭제할까요?')){a.splice(i,1);storeSlots(a)}})});
}
$('slotNew').onclick=()=>slotAction(()=>{const a=readSlots();if(a.length>=30)throw Error('슬롯이 가득 찼습니다.');const s=snapshot(),label=prompt('슬롯 이름','DAY '+s.sim.day);if(label===null)return;a.push({label:label.trim().slice(0,80)||'DAY '+s.sim.day,time:Date.now(),state:s});storeSlots(a)});
$('slotFile').onchange=async()=>{try{const f=$('slotFile').files[0];if(!f)return;const d=JSON.parse(await f.text());if(d.format!=='yeonhwa-save-1'||!validSave(d.state))throw Error('올바르지 않은 세이브 파일입니다.');const a=readSlots();if(a.length>=30)throw Error('슬롯이 가득 찼습니다.');a.push({label:f.name.slice(0,80),time:Date.now(),state:d.state});storeSlots(a);drawSlots()}catch(e){$('slotStatus').textContent=e.message}finally{$('slotFile').value=''}};
$('transferOpen').onclick=()=>{try{drawSlots()}catch(e){$('slotStatus').textContent=e.message}$('transferText').value='';$('transferStatus').textContent='';$('transferDialog').showModal()};$('transferClose').onclick=()=>$('transferDialog').close();function transferData(){
  if($('start').disabled){
    const raw=localStorage.getItem(KEY);
    if(!raw) throw Error('저장 데이터를 읽을 수 없습니다.');
    return {format:'yeonhwa-save-1',state:JSON.parse(portableAutoJSON(raw))};
  }
  if(!state || !state.name) throw Error('저장할 진행이 없습니다.');
  save();
  return {format:'yeonhwa-save-1',state};
}
$('transferExport').onclick=()=>{
  try{
    $('transferText').value=JSON.stringify(transferData());
    $('transferStatus').textContent='현재 진행을 표시했습니다. 코드를 복사하세요.';
  }catch(error){$('transferStatus').textContent=error.message}
};
function downloadTransfer(data){
    const url=URL.createObjectURL(new Blob([JSON.stringify(data)],{type:'application/octet-stream'}));
    const link=document.createElement('a');
    link.href=url;
    link.download='연화동_'+(data.state?.sim?.day || 1)+'일차.sav';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
}
$('autosaveDownload').onclick=()=>downloadTransfer({format:'yeonhwa-save-1',state:snapshot()});
$('transferDownload').onclick=()=>{
  try{
    downloadTransfer(transferData());
    $('transferStatus').textContent='다운로드한 파일을 다른 기기로 보내세요.';
  }catch(error){$('transferStatus').textContent=error.message}
};
$('transferChoose').onclick=()=>$('transferFile').click();
$('transferFile').onchange=async event=>{
  const file=event.target.files[0];
  event.target.value='';
  if(!file) return;
  try{importTransfer(await file.text())}
  catch(error){$('transferStatus').textContent='파일을 읽을 수 없습니다.'}
};
$('transferCopy').onclick=async()=>{const t=$('transferText');if(!t.value)return;t.select();try{await navigator.clipboard.writeText(t.value);$('transferStatus').textContent='복사했습니다.'}catch(e){$('transferStatus').textContent='선택된 코드를 직접 복사해 주세요.'}};$('transferImport').onclick=()=>importTransfer($('transferText').value);
function importTransfer(raw){try{const data=JSON.parse(raw),s=data.state;if(data.format!=='yeonhwa-save-1'||!s||typeof s.name!=='string'||!s.name||!Number.isInteger(s.scene)||s.scene<0||s.scene>=scenes.length||!s.sim||!Number.isInteger(s.sim.day)||s.sim.day<1||s.sim.day>366||!s.sim.affection||typeof s.sim.affection!=='object')throw Error('invalid');if(!confirm(s.name+' · DAY '+s.sim.day+' 진행을 불러올까요? 현재 기기의 진행은 교체됩니다.'))return;const previous=localStorage.getItem(KEY);if(previous)localStorage.setItem(KEY+'-transfer-backup',portableAutoJSON(previous));localStorage.setItem(KEY,JSON.stringify(s));location.reload()}catch(e){$('transferStatus').textContent='세이브 데이터가 올바르지 않거나 저장 공간이 부족합니다. 기존 진행은 그대로 유지됩니다.'}};

for(const [value,label] of [['all','전체'],...people.map(p=>[p,p]),['solo','나의 이야기']]){const opt=document.createElement('option');opt.value=value;opt.textContent=label;$('albumFilter').append(opt)}$('albumEvents').onclick=()=>{albumMode='event';renderAlbum()};$('albumEndings').onclick=()=>{albumMode='ending';renderAlbum()};$('albumFilter').onchange=()=>{albumPerson=$('albumFilter').value;renderAlbum()};$('albumClose').onclick=()=>$('albumDialog').close();
function completedDayFloor(v){let floor=1;for(const e of v.journal||[]){const m=String(e.text||'').match(/^DAY (\d+) 일정 결과(?:\n|$)/);if(m){const n=Number(m[1]);if(n>=1&&n<=365)floor=Math.max(floor,Math.min(365,n+1))}}for(const e of v.encounters||[]){if(Number.isInteger(e.day)&&e.day>=1&&e.day<=365)floor=Math.max(floor,e.day)}for(const e of Object.values(v.relationshipMemory||{})){for(const item of e.history||[])if(Number.isInteger(item.day)&&item.day>=1&&item.day<=365)floor=Math.max(floor,item.day)}return floor}
function showDateRecovery(v){const floor=completedDayFloor(v);if(v.day>=floor)return false;const warning=document.createElement('div');warning.style.cssText='padding:14px;border:1px solid #b66;border-radius:8px;margin:12px 0;white-space:pre-wrap';warning.textContent='날짜와 진행 기록이 일치하지 않습니다. 현재 DAY '+v.day+' / 실제 진행 기록 최소 DAY '+floor+'. 일정을 진행하지 말고 세이브 관리에서 현재 파일을 백업하거나 정상 슬롯을 불러오세요.';$('game').prepend(warning);for(const b of $('game').querySelectorAll('button,input,select,textarea'))b.disabled=true;
const completed=(v.journal||[]).some(e=>e.day===floor&&String(e.text||'').startsWith('DAY '+(floor-1)+' 일정 결과\n'));
if(completed&&!v.running&&!v.activeEvent&&floor<=365){const btn=document.createElement('button');btn.textContent='기록 기준 DAY '+floor+' 날짜 복구';btn.onclick=()=>{if(!confirm('현재 세이브를 별도 백업하고 날짜만 DAY '+floor+'로 복구할까요?'))return;try{const raw=localStorage.getItem(KEY);if(!raw)throw Error('원본 저장 없음');const fixed=JSON.parse(raw);if(fixed.sim.day!==v.day||completedDayFloor(fixed.sim)!==floor)throw Error('저장 상태가 변경되었습니다. 새로고침 후 확인하세요.');localStorage.setItem(KEY+'-date-recovery-backup-'+Date.now(),portableAutoJSON(raw));fixed.sim.day=floor;localStorage.setItem(KEY,JSON.stringify(fixed));location.reload()}catch(e){warning.append(document.createTextNode('\n복구 실패: '+e.message))}};warning.append(btn)}return true}

let savedRaw=null;try{savedRaw=localStorage.getItem(KEY);const old=JSON.parse(savedRaw||'null');if(old&&old.name&&Number.isInteger(old.scene)&&old.scene>=0&&old.scene<scenes.length){state=old;state.boundaries=state.boundaries||{};const loadedSim=initSim();if(repairSavedSchedule(loadedSim))save();albumMigrate();$('setup').classList.add('hide');$('game').classList.remove('hide');if(showDateRecovery(initSim())){switchTab('life');}else if(old.introDone===false){showIntro()}else if(initSim().activeEvent&&typeof initSim().activeEvent.description==='string'){renderChoiceEvent();renderSim();syncSchedule()}else if(yearReady(loadedSim)){renderSim();syncSchedule();drawTown();renderYearView(loadedSim.yearBook?.page)}else if(initSim().running){if(initSim().running.outing){drawTown();switchTab('map')}else advanceDay()}else if(!loadedSim.finished&&loadedSim.pendingDayStart===loadedSim.day){playDay();renderSim();syncSchedule()}else if(initSim().day>1){renderSim();syncSchedule();drawTown();switchTab('life')}else{scene()}if(!loadedSim.finished)add('시스템','이전 진행 상태를 불러왔습니다.')}else if(savedRaw){throw Error('저장 데이터 형식 확인 필요')}}catch(e){$('setup').classList.remove('hide');$('game').classList.add('hide');$('start').disabled=true;const warning=document.createElement('div');warning.style.cssText='padding:16px;border:1px solid #b66;border-radius:8px;margin:12px 0;white-space:pre-wrap';warning.textContent='기존 진행을 불러오지 못했습니다. 새 게임 시작을 잠갔습니다. 저장 데이터는 삭제하지 않았습니다. 세이브 옮기기에서 백업하거나 기존 창의 세이브를 가져오세요. 오류: '+e.message; $('setup').prepend(warning);console.error(e)}
})();
