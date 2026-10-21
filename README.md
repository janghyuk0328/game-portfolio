# 윤장혁 | 게임 기획자 포트폴리오 v3

2027 크래프톤 게임 기획 인턴 지원을 위한 **GitHub Pages 정적 웹사이트**입니다. `index.html`, `style.css`, `script.js`, `content.js`와 `assets/` 폴더를 그대로 게시할 수 있습니다. 별도 npm 설치나 서버 API는 필요하지 않습니다.

## 이번 수정 내용 (요청사항 반영)

**프로젝트**
- **Battle Arena — 2026년 / 3학년:** 대표 게임 플레이 `HG0taYqeBTU`, 수정 전 레벨 `SOXltZO_auk`, 수정 후 레벨 `HG0taYqeBTU`. `레벨 직접 제작 과정` 이미지를 클릭하면 **레벨을 다시 설계한 이유** 영역으로 스크롤합니다.
- **팀장 업무/구현 확인:** AI 구현 확인에는 직접 촬영한 움직임 GIF, 전투 시스템 확인에는 `fUWQCj-oGrs` 영상의 **YouTube 썸네일**(클릭 → 영상), 서버 확인에는 멀티플레이 로비 사진(클릭 → `g2ITrzavCLQ` 영상)을 사용합니다.
- **레벨 확인:** 블록아웃/제작 레벨 이미지 2장을 이전·다음 화살표로 넘깁니다. **사진 클릭은 사진 확대**이며 동영상 재생이 아닙니다. **별도 `레벨 검토 영상 보기` 버튼**에만 `y7G1vywwfdA`가 연결됩니다. 두 사진을 동일한 레벨의 수정 전·후라고 단정하지 않습니다.
- **Rolling LEO — 2025년 / 2학년:** 실제 플레이 `P2sxLejqUzs`가 대표 영상이고, 트레일러 `FZWg0LaGTcI`는 보조 버튼으로 연결합니다.
- **SPLIT — 2022년 / 1학년:** 영상 두 개를 **모바일 9:16 세로형**으로 구성했습니다. 1인 플레이 `CAmaXdOYuFo`가 첫 영상, 소개 영상은 개요 PDF에 연결된 `j7Z1VdRh9fg`입니다. 소개 영상 썸네일은 제공된 세로 게임 화면으로 지정했습니다. 2인 플레이 주소는 아직 전달받지 못해 비활성화했습니다.
- **SPLIT 전시/출품:** 2022 GGC 전시 사진(개요 PDF 6페이지에서 추출), 2023 GIGDC 출품 설명과 당시 **상세 기획서 원본 PDF 16페이지** 열람·다운로드 버튼을 추가했습니다. 정리되지 않은 Notion 페이지 링크는 공개하지 않습니다.

**개인 기획서 및 자동화**
- 잠입 액션 기획서 카드: 원본 **11페이지 전체 레벨 전개도/규격** 이미지 사용.
- 리니지 W 일반 몬스터 AI 카드: 원본 **8페이지 FSM 구조/설명** 이미지 사용.
- 두 문서의 원본 1페이지 표지 이미지도 재추출했으며 이메일·전화번호를 인위적으로 가리지 않았습니다. 두 문서 모두 **전체 PDF** 직접 열람/다운로드 가능.
- Trello 업무 자동화의 좌측 카드/우측 휴대전화 알림 캡처와 시연 영상 `fC9phJB7e6w` 연결.
- 문서 서식 자동화 사례: **① Battle Arena 통합 게임 기획서 PDF 26페이지** + **② 버프 시스템 구현 요청서 PDF 12페이지**를 각각 열람·다운로드할 수 있습니다.
- 다크 배경 본문/설명 글씨를 흰색 계열로 조정, 노란색 강조와 노란색 버튼의 검은 글씨는 유지.

## 가장 쉬운 GitHub Pages 업로드 방법

1. 이 ZIP의 압축을 풀어 `index.html`, `script.js`, `content.js`, `style.css`, `assets/`, `.nojekyll` **파일과 폴더를 전부** GitHub 저장소 최상위에 업로드합니다. 폴더 안에 한 단계 더 중첩하여 올리지 마세요.
2. GitHub 저장소의 `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch`를 선택합니다.
3. Branch `main`, Folder `/(root)`로 지정하고 저장합니다.
4. 생성된 `https://사용자명.github.io/저장소명/` 웹 주소로 이동해 영상, PDF, 슬라이드 사진, 시뮬레이터 연결을 확인합니다.

사이트의 내부 자료는 상대경로이므로 사용자명 사이트와 프로젝트 저장소 사이트에서 모두 사용할 수 있습니다.

## 로컬 테스트 / YouTube 오류 153

`index.html`을 직접 더블 클릭해 `file://`로 열면 **YouTube 오류 153**이 발생할 수 있습니다. 이 오류는 링크 오타 외에도 HTTP Referer/클라이언트 식별 정보 부족 때문에 생깁니다. 공식 YouTube iframe 구조를 사용하도록 만들었지만, HTML만으로 모든 환경의 재생을 보장할 수는 없습니다.

테스트 시 압축 해제한 폴더에서 터미널을 열고:

```bash
python -m http.server 8000
```

브라우저의 `http://localhost:8000/`에서 확인합니다. 최종적으로는 **GitHub Pages HTTPS 주소**에서 재생을 확인해야 합니다. 동영상 소유자가 YouTube의 **퍼가기 허용**을 해제했거나 연령 제한이 걸린 경우에는 해당 동영상을 웹페이지에서 자동으로 재생시킬 수 없습니다. 이를 대비해 모든 영상 팝업에 **YouTube에서 직접 보기** 버튼을 넣었습니다.

영상 URL을 넣으면 사이트가 공식 퍼가기 형태의 iframe을 동적으로 생성합니다. 영상마다 YouTube에서 HTML 복사/붙여넣기를 반복할 필요는 없습니다.

## 콘텐츠를 변경하는 방법

- 동영상 주소와 화면 제목: `content.js` → `videos` 항목 수정.
- SPLIT 2인 영상 추가: `videos['split-two'].url`에 URL을 추가하면 버튼 자동 활성화.
- 개인 기획서·문서 자동화 PDF: `assets/documents/`의 원본 PDF 교체, 필요하면 `content.js` → `documents`에서 파일 경로 변경.
- 프로젝트 작업 이미지: `assets/images/`에서 파일 교체 후 필요하면 `index.html`의 `src`도 변경.
- AI 시뮬레이터 주소: `content.js` → `external.simulator`.

## 연결한 영상 ID

| 분류 | YouTube ID |
|---|---|
| Battle Arena 대표 플레이 / 수정 후 | `HG0taYqeBTU` |
| Battle Arena 수정 전 | `SOXltZO_auk` |
| Battle Arena 전투 시스템 | `fUWQCj-oGrs` |
| Battle Arena 서버 확인 | `g2ITrzavCLQ` |
| Battle Arena 레벨 확인 | `y7G1vywwfdA` |
| Rolling LEO 대표 플레이 | `P2sxLejqUzs` |
| Rolling LEO 트레일러 | `FZWg0LaGTcI` |
| SPLIT 1인 플레이 | `CAmaXdOYuFo` |
| SPLIT 소개 | `j7Z1VdRh9fg` (개요 PDF 원본 링크) |
| GPT × Trello 자동화 | `fC9phJB7e6w` |
| SPLIT 2인 플레이 | 아직 미제공 |

**확인 범위:** HTML/CSS/JavaScript와 링크 연결에 대한 로컬 구조 및 UI 작동 테스트를 수행했습니다. YouTube는 최종 GitHub Pages 주소에서의 스트리밍 재생 테스트를 수행하지 않았으며, 업로더의 퍼가기 제한 여부도 확인되지 않았습니다.

**개인정보 참고:** 이번 요청에 따라 원본 문서 표지의 연락처를 모자이크하지 않았습니다. GitHub Pages 공개 시 첨부한 PDF 원본에도 이메일과 전화번호가 그대로 표시될 수 있습니다.
