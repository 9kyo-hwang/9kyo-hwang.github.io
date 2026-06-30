# 9kyo.log

`https://9kyo-hwang.github.io/`에 게시하는 개인 개발 블로그입니다.

## 방향

- CS, AI, 게임 개발, 그래픽스 API 글을 오래 읽기 좋은 형태로 정리합니다.
- 홈은 최근 글과 주제 지도를 보여줍니다.
- 아카이브는 검색, 태그 필터, 시리즈 진입점을 제공합니다.
- 글 본문은 목차, 메타 정보, 코드 블록, 인용문을 기본 구성으로 둡니다.

## 구성

- `index.html`: 홈, 최근 글, 주제 지도
- `archive.html`: 검색·태그 필터가 있는 글 목록
- `about.html`: 블로그 소개
- `post-welcome.html`: 게시글 템플릿을 겸한 첫 글
- `assets/styles.css`: warm editorial 톤의 읽기 중심 디자인
- `assets/main.js`: 모바일 메뉴, 글 검색과 태그 필터

## 새 글 추가

1. `post-welcome.html`을 복사해 새 게시글 HTML을 만듭니다.
2. 제목, 설명, 날짜, 태그, 본문을 교체합니다.
3. `index.html`의 최근 글 영역과 `archive.html`의 검색 목록에 항목을 추가합니다.
4. `sitemap.xml`에 새 주소를 추가합니다.

## 배포

저장소 이름은 `9kyo-hwang.github.io`이며, 파일은 `main` 브랜치 루트에서 GitHub Pages로 배포됩니다.
