# 9KYO DEV LOG

`https://9kyo-hwang.github.io/`에 게시할 정적 개발 블로그입니다.

## 구성

- `index.html`: 홈과 최신 글
- `archive.html`: 검색·태그 필터가 있는 글 목록
- `about.html`: 블로그 소개
- `post-welcome.html`: 게시글 템플릿을 겸한 첫 글
- `assets/styles.css`: Nintendo.com 2001에서 영감을 받은 Y2K 콘솔 UI
- `assets/main.js`: 모바일 메뉴, KST 시계, 글 검색과 필터

타사 로고와 캐릭터 자산은 사용하지 않고, 베벨 패널·카본 도트·페리윙클 크롬·주황 신호색이라는 디자인 문법만 재해석했습니다.

## 새 글 추가

1. `post-welcome.html`을 복사해 새 게시글 HTML을 만듭니다.
2. 제목, 설명, 날짜와 본문을 교체합니다.
3. `index.html`의 최신 글 목록과 `archive.html`의 검색 목록에 항목을 추가합니다.
4. `sitemap.xml`에 새 주소를 추가합니다.

## 로컬 미리보기

정적 파일이므로 `index.html`을 직접 열 수 있습니다. 로컬 HTTP 서버가 있다면 이 디렉터리를 문서 루트로 실행하는 편이 링크 검증에 좋습니다.

## 배포

저장소 이름을 `9kyo-hwang.github.io`로 만들고 이 디렉터리의 파일을 `main` 브랜치 루트에 게시합니다. GitHub 저장소의 **Settings → Pages**에서 `Deploy from a branch`, `main`, `/ (root)`를 선택합니다.

