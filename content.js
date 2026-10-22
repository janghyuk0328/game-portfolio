/**
 * SITE DATA / 영상 주소, PDF 경로 및 외부 링크 수정 위치
 * YouTube 주소를 입력하면 script.js가 공식 HTML iframe 퍼가기 URL을 자동 생성합니다.
 * file://로 직접 열면 YouTube 오류 153(HTTP Referer 누락)이 발생할 수 있습니다.
 * GitHub Pages(HTTPS) 또는 로컬 http://localhost 서버에서 테스트하세요.
 * SPLIT 2인 플레이 영상도 등록되어 있습니다.
 */
window.PORTFOLIO_CONTENT = {
  videos: {
    'battle-main': {title:'Battle Arena — 게임 플레이 / 수정 후 레벨', label:'GAME PLAY / 2026', url:'https://youtu.be/HG0taYqeBTU', poster:'assets/images/battle-hero.webp', actionLabel:'게임 플레이 영상'},
    'battle-before': {title:'Battle Arena — 수정 전 레벨 플레이', label:'LEVEL DESIGN / BEFORE', url:'https://youtu.be/SOXltZO_auk', poster:'assets/images/battle-before-1.webp', actionLabel:'수정 전 레벨 플레이'},
    'battle-after': {title:'Battle Arena — 수정 후 레벨 플레이', label:'LEVEL DESIGN / AFTER', url:'https://youtu.be/HG0taYqeBTU', poster:'assets/images/battle-after-1.webp', actionLabel:'수정 후 레벨 플레이'},
    'battle-level-review': {title:'Battle Arena — 레벨 확인 영상', label:'LEVEL REVIEW / 2026', url:'https://youtu.be/y7G1vywwfdA', poster:'assets/images/battle-level-review-2.webp', actionLabel:'레벨 확인 영상'},
    'battle-server': {title:'Battle Arena — 서버 연결 확인', label:'SERVER CHECK / 2026', url:'https://youtu.be/g2ITrzavCLQ', poster:'assets/images/battle-server-lobby.webp', actionLabel:'서버 확인 영상'},
    'battle-combat': {title:'Battle Arena — 전투 시스템 확인', label:'COMBAT SYSTEM / 2026', url:'https://youtu.be/fUWQCj-oGrs', poster:'https://i.ytimg.com/vi/fUWQCj-oGrs/hqdefault.jpg', actionLabel:'전투 시스템 영상'},
    'rolling-play': {title:'Rolling LEO — 실제 플레이 영상', label:'GAME PLAY / 2025', url:'https://youtu.be/P2sxLejqUzs', poster:'assets/images/rolling-main.webp', actionLabel:'플레이 영상'},
    'rolling-trailer': {title:'Rolling LEO — 트레일러', label:'TRAILER / 2025', url:'https://youtu.be/FZWg0LaGTcI', poster:'assets/images/rolling-trailer.webp', actionLabel:'트레일러'},
    'split-one': {title:'SPLIT — 1인 플레이', label:'SOLO GAME PLAY / 2022', url:'https://youtu.be/CAmaXdOYuFo', poster:'assets/images/split-play.webp', actionLabel:'1인 플레이 영상'},
    'split-intro': {title:'SPLIT — 게임 소개 영상', label:'INTRO VIDEO / 2022', url:'https://youtu.be/j7Z1VdRh9fg', poster:'assets/images/split-intro-poster.webp', actionLabel:'게임 소개 영상'},
    'split-two': {title:'SPLIT — 2인 플레이', label:'2-PLAYER GAME PLAY / 2022', url:'https://youtu.be/vuHOPl8VRPc', poster:'assets/images/split-play.webp', actionLabel:'2인 플레이 영상'},
    'trello-demo': {title:'GPT × Trello — 업무 자동화 시연',label:'WORKFLOW / DEMO',url:'https://youtu.be/fC9phJB7e6w',poster:'assets/images/ai-trello-proof.webp',actionLabel:'Trello 자동화 영상'}
  },
  documents: {
    overview: {title:'포트폴리오 전체 개요',path:'assets/documents/포트폴리오 개요_윤장혁.pdf',kind:'full',note:'포트폴리오 전체 개요 · 28페이지'},
    stealth: {title:'잠입 액션 창작 레벨 기획서',path:'assets/documents/잠입액션 창작 레벨_포트폴리오_윤장혁.pdf',kind:'full',note:'창작 레벨 기획서 전체 원본 · 56페이지'},
    lineage: {title:'리니지 W 일반 몬스터 AI 역기획서',path:'assets/documents/일반 몬스터 AI 시스템_포트폴리오_윤장혁.pdf',kind:'full',note:'일반 몬스터 AI 역기획서 전체 원본 · 18페이지'},
    split: {title:'SPLIT GIGDC 2023 상세 기획서',path:'assets/documents/SPLIT_GIGDC 상세기획서_윤장혁.pdf',kind:'full',note:'GIGDC 2023 출품 상세 기획서 · 16페이지'},
    battleOverview: {title:'Battle Arena 통합 게임 기획서 (게임 전체 개요)',path:'assets/documents/Battle Arena 통합 게임 기획서_윤장혁.pdf',kind:'full',note:'문서 제작 스킬 참고 자료 · 게임의 전체 맥락 · 26페이지'},
    battleBuff: {title:'Battle Arena 버프 시스템 구현 요청서',path:'assets/documents/Battle Arena 버프 시스템 구현 요청서_윤장혁.pdf',kind:'full',note:'문서 제작 스킬 활용 결과물 · 구현 요청 및 검증 기준 · 12페이지'},
    resume: {title:'윤장혁 | 게임 기획자 이력서',path:'assets/documents/윤장혁_이력서.pdf',kind:'full',note:'게임 기획자 이력서 전체 PDF · 2페이지'},
    rollingIndiecraft: {title:'Rolling LEO | 2026 INDIECRAFT 출품 기획서',path:'assets/documents/ROLLING LEO_인디크래프트 2026.pdf',kind:'full',note:'2026 INDIECRAFT 출품 기획서 · 4페이지'}
  },
  photos: {
    ggc: [{"src": "assets/images/ggc-expo-1.webp", "caption": "2022 GGC 전시장과 행사 부스 전경"}, {"src": "assets/images/ggc-expo-2.webp", "caption": "전시 현장에서 관계자와 게임 기획에 대해 의견을 나누는 모습"}, {"src": "assets/images/ggc-expo-3.webp", "caption": "2022 GGC 현장 단체 사진"}, {"src": "assets/images/ggc-expo-4.webp", "caption": "전시 현장에서 기획 자료를 살펴보는 모습"}],
    star: [{"src": "assets/images/star-expo-1.webp", "caption": "대표 사진 · 관람객들이 Rolling LEO를 체험하는 전시 현장"}, {"src": "assets/images/star-expo-2.webp", "caption": "Rolling LEO 시연과 관람객 반응을 확인하는 현장"}, {"src": "assets/images/star-expo-3.webp", "caption": "2025 G-STAR 전시장 전경"}, {"src": "assets/images/star-expo-4.webp", "caption": "게임을 플레이하는 관람객과 현장 운영 모습"}, {"src": "assets/images/star-expo-5.webp", "caption": "현업자와 게임 관련 의견을 나누는 피드백 현장"}, {"src": "assets/images/star-expo-6.webp", "caption": "현업자와 게임의 개선 방향을 논의하는 모습"}]
  },
  external: {
    simulator:'https://janghyuk0328.github.io/monster-ai-simulator/AI_monster_W.html',
    gemini:'https://share.gemini.google/UGMIVrP4iwX4',
    collision:'https://chatgpt.com/s/cx_6ad663491a0081919c2015a5b3533bd1'
  }
};
