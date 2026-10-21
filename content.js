/**
 * SITE DATA / 영상 주소, PDF 경로 및 외부 링크 수정 위치
 * YouTube 주소를 입력하면 script.js가 공식 HTML iframe 퍼가기 URL을 자동 생성합니다.
 * file://로 직접 열면 YouTube 오류 153(HTTP Referer 누락)이 발생할 수 있습니다.
 * GitHub Pages(HTTPS) 또는 로컬 http://localhost 서버에서 테스트하세요.
 * SPLIT 2인 플레이 영상은 주소 미전달로 비활성화했습니다. URL 전달 후 아래 값을 변경하세요.
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
    'split-two': {title:'SPLIT — 2인 플레이', label:'2-PLAYER GAME PLAY / 2022', url:'', poster:'assets/images/split-play.webp', actionLabel:'2인 플레이 영상'},
    'trello-demo': {title:'GPT × Trello — 업무 자동화 시연',label:'WORKFLOW / DEMO',url:'https://youtu.be/fC9phJB7e6w',poster:'assets/images/ai-trello-proof.webp',actionLabel:'Trello 자동화 영상'}
  },
  documents: {
    overview: {title:'포트폴리오 전체 개요',path:'assets/documents/portfolio_overview.pdf',kind:'full',note:'포트폴리오 전체 개요 · 28페이지'},
    stealth: {title:'잠입 액션 창작 레벨 기획서',path:'assets/documents/stealth_level_design_full.pdf',kind:'full',note:'창작 레벨 기획서 전체 원본 · 56페이지'},
    lineage: {title:'리니지 W 일반 몬스터 AI 역기획서',path:'assets/documents/lineage_w_ai_design_full.pdf',kind:'full',note:'일반 몬스터 AI 역기획서 전체 원본 · 18페이지'},
    split: {title:'SPLIT GIGDC 2023 상세 기획서',path:'assets/documents/split_2023_gigdc_design_full.pdf',kind:'full',note:'GIGDC 2023 출품 상세 기획서 · 16페이지'},
    battleOverview: {title:'Battle Arena 통합 게임 기획서 (게임 전체 개요)',path:'assets/documents/battle_arena_game_overview.pdf',kind:'full',note:'문서 제작 스킬 참고 자료 · 게임의 전체 맥락 · 26페이지'},
    battleBuff: {title:'Battle Arena 버프 시스템 구현 요청서',path:'assets/documents/battle_arena_buff_implementation_request.pdf',kind:'full',note:'문서 제작 스킬 활용 결과물 · 구현 요청 및 검증 기준 · 12페이지'}
  },
  external: {
    simulator:'https://janghyuk0328.github.io/monster-ai-simulator/AI_monster_W.html',
    gemini:'https://share.gemini.google/UGMIVrP4iwX4',
    collision:'https://chatgpt.com/s/cx_6ad663491a0081919c2015a5b3533bd1'
  }
};
