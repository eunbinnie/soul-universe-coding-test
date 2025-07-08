## 📋 프로젝트 주소

[배포 사이트](https://soul-universe-coding-test.vercel.app/)

## 🧰 기술 스택

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- shadcn/ui

## 🚀 실행 방법

### 필수 요구사항

- Node.js 20 버전 이상
- Yarn 패키지 매니저 사용

```bash
# 패키지 설치
yarn

# 개발 서버 실행
yarn dev

# 빌드 및 실행
yarn build
yarn start
```

## 📝 기능 설명

### 1. Local storage 기반 데이터 관리

- 게시글과 댓글은 uuid 기반으로 고유하게 구분되며, 구조는 다음과 같습니다.
  - 게시글(Post): uuid, title, content, createdAt, comments
  - 댓글(Comment): uuid, content, createdAt
- Zustand와 Local storage를 연동하여, 새로고침 시에도 게시글 및 댓글 데이터가 유지됩니다.
- 댓글은 해당 게시글의 uuid를 기준으로 연결합니다.

### 2. 게시글 리스트 페이지

- 게시글은 최신 글이 상단에 오도록 최신순으로 정렬됩니다.
- 리스트에서는 게시글 제목만 표시됩니다.
- 제목을 기준으로 키워드 검색할 수 있으며, 검색어는 URL 쿼리 파라미터에 반영되어 새로고침 시에도 검색 결과가 유지됩니다.

### 3. 게시글 작성 페이지

- 제목과 내용을 모두 입력해야 '등록하기' 버튼이 활성화됩니다.
- 입력된 정보를 기반으로 게시글이 생성되며, 자동으로 uuid와 작성일이 부여됩니다.

### 4. 게시글 상세 페이지

- 게시글의 제목, 내용, 작성일을 확인할 수 있습니다.
- 게시글 삭제 기능이 포함되어 있으며, 삭제 후에는 게시글 리스트 페이지로 이동합니다.
- 댓글 기능:
  - 댓글 개수 표시 및 댓글 목록 확인
  - 댓글은 최신순으로 정렬되며, 각 댓글의 내용과 작성 시간을 함께 표시
  - 입력값이 없을 경우 '댓글 남기기' 버튼이 비활성화되어 작성 불가

## 📁 프로젝트 구조

```bash
📦 public             # 정적 파일 폴더
 ┗ 📂fonts

📦 src
 ┣ 📂app              # app router 디렉토리
 ┣ 📂components       # 재사용 가능한 UI 컴포넌트
 ┣ 📂constants        # 상수값 정의
 ┣ 📂hooks            # 커스텀 훅
 ┣ 📂lib              # 유틸 함수
 ┣ 📂store            # 상태관리 관련 코드 (Zustand)
 ┣ 📂styles           # 전역 스타일 정의
 ┗ 📂types            # 타입 정의
```
