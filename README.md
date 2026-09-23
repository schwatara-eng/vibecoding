# 과제 포트폴리오 웹페이지

과제물(이미지, 영상, AI 앱)을 카드 형태로 모아 보여주는 한 페이지짜리 포트폴리오 사이트입니다.
카드를 누르면 상세 창이 열리고, 이미지·영상·설명·링크를 볼 수 있습니다.

---

## 1. 폴더 구성

```
portfolio/
├── index.html    페이지의 뼈대 (어떤 칸이 어디에 있는지)
├── style.css     디자인 (색, 서체, 크기, 배치)
├── script.js     내용과 동작 (내 정보, 과제 목록, 필터, 상세 창)
├── README.md     지금 읽고 있는 설명서
└── images/       이미지 파일을 넣는 폴더
```

> 다른 프로젝트 파일(예: `images.csv`)과 섞이지 않도록 이 폴더는 따로 두세요.

---

## 2. 실행하는 방법

1. VS Code에서 이 폴더를 엽니다.
2. 확장(Extensions)에서 **Live Server**를 설치합니다.
3. `index.html`을 마우스 오른쪽 버튼으로 누르고 **Open with Live Server**를 선택합니다.

> `index.html`을 더블클릭해서 열어도 페이지는 보이지만,
> 유튜브·Synthesia·HeyGen 영상은 재생되지 않을 수 있습니다. 꼭 Live Server로 확인하세요.

---

## 3. 화면 구성

| 번호 | 영역 | 내용 |
|---|---|---|
| ① | 상단 메뉴 | 이름, 작품·소개·연락처 이동 링크 (스크롤해도 고정) |
| ② | 자기소개 | 프로필 사진, 한 줄 소개, 태그 |
| ③ | 분류 필터 | 분류별로 과제 걸러 보기 |
| ④ | 과제 카드 | 썸네일, 제목, 분류, 과목, 날짜 |
| ⑤ | 하단 | 이메일(복사 버튼), SNS 링크 |
| ⑥ | 상세 창 | 이미지/영상, 과목·제출일·툴, 기획 의도, 작업 과정, 링크 버튼 |

---

## 4. 내용 바꾸기 — `script.js`의 [1부]만 고치면 됩니다

### 4-1. 내 정보 (`PROFILE`)

```js
const PROFILE = {
  name: "이름",
  headline: "큰 제목 한 줄",
  bio: "소개 문장",
  photo: "images/profile.jpg",   // 비우면 이름 첫 글자가 보임
  tags: ["태그1", "태그2"],
  email: "my@email.com",
  instagram: "https://instagram.com/내아이디"
};
```

### 4-2. 소개 섹션 (`ABOUT`)

각 항목은 `["왼쪽 글자", "오른쪽 작은 글자"]` 형태입니다. 오른쪽이 필요 없으면 `""`로 둡니다.

```js
{ title: "사용 툴", items: [["Opal", ""], ["Synthesia", ""]] }
```

### 4-3. 분류 (`CATEGORIES`)

필터 버튼 이름입니다. **과제의 `category`와 글자가 정확히 같아야** 필터와 카드 색이 맞습니다.

```js
const CATEGORIES = ["그림", "영상", "Opal", "기타"];
```

### 4-4. 과제 추가 (`WORKS`)

아래 한 덩어리를 복사해서 `WORKS = [ ... ]` 안에 붙여넣고 내용을 바꿉니다.

```js
{
  title: "과제 제목",
  category: "영상",
  course: "과목명",
  date: "2026.09",
  tools: "사용한 툴",
  intent: "기획 의도",
  process: "작업 과정\n줄을 바꾸려면 \\n 을 넣습니다",
  embed: "",
  youtube: "",
  app: "",
  images: ["images/파일이름.png"],
  file: ""
},
```

| 칸 | 넣는 것 | 비워두면 |
|---|---|---|
| `images` | 이미지 경로 목록. 여러 장이면 상세 창에서 넘겨보기 가능 | 분류별 색 블록 표시 |
| `embed` | HeyGen·Synthesia 등 임베드 코드의 `src="..."` 안 주소 | — |
| `youtube` | 유튜브 영상 ID (`watch?v=` 뒤 부분) | — |
| `app` | Opal 등 앱 링크 → "앱 실행해보기 ↗" 버튼 | 버튼 숨김 |
| `file` | 원본 파일 링크 → "원본 파일 보기 ↗" 버튼 | 버튼 숨김 |

상세 창의 큰 화면은 **`embed` → `youtube` → `images`** 순서로 먼저 있는 것을 보여줍니다.

#### 영상 주소 예시

```js
// Synthesia: 임베드 코드에서 src 주소만
embed: "https://share.synthesia.io/embeds/videos/영상ID",

// 유튜브: https://www.youtube.com/watch?v=abc123 이라면
youtube: "abc123",
```

---

## 5. 디자인 바꾸기 — `style.css`

### 색

파일 맨 위 `:root { ... }`의 색만 바꾸면 페이지 전체에 적용됩니다.

| 이름 | 쓰이는 곳 |
|---|---|
| `--배경색` | 페이지 바탕 (베이지 `#F3EDE3`) |
| `--카드색` | 카드, 상세 창 바탕 |
| `--글자색` / `--보조글자색` / `--흐린글자색` | 본문 / 설명 / 날짜·라벨 |
| `--포인트색` | 선택된 필터, 버튼 |
| `--블록1` ~ `--블록4` | 이미지가 없을 때 분류별 색 블록 |

### 서체

1. `index.html`의 `<head>`에서 글꼴을 불러오는 `<link>` 줄을 바꿉니다.
2. `style.css`의 `body { font-family: ... }`(본문)와 `h1, h2, h3, .logo { font-family: ... }`(제목)를 바꿉니다.

한국어 글꼴은 [Google Fonts](https://fonts.google.com/?subset=korean)에서 고를 수 있습니다.

### 상세 창 이미지 채우기

`.main-image img`의 `object-fit` 값으로 조절합니다.

- `cover` : 프레임을 꽉 채움 (가장자리가 조금 잘릴 수 있음)
- `contain` : 이미지 전체가 보임 (빈 공간이 생길 수 있음)

프레임 비율은 `.main-image`의 `aspect-ratio` (예: `16 / 9`, `4 / 3`)로 바꿉니다.

---

## 6. 문제가 생겼을 때

| 증상 | 확인할 것 |
|---|---|
| 페이지에 카드·소개가 하나도 안 나옴 | `script.js`에 **쉼표 `,` 또는 따옴표 `"` 빠짐**. VS Code에서 `Ctrl + Shift + M` → 문제 창의 줄 번호 확인 |
| 필터를 눌러도 과제가 안 보임 | `category`와 `CATEGORIES`의 글자가 똑같은지 |
| 이미지가 안 보임 | `images/` 폴더에 파일이 있는지, 파일 이름·확장자(`.png`/`.jpg`)가 같은지. 파일 이름은 **영어 소문자와 `-`** 권장 |
| 영상 자리에 오류 화면 | Live Server로 열었는지, 영상이 공개(공유) 상태인지 |
| 상세 창을 닫아도 소리가 남 | `script.js`에 `dialog.addEventListener("close", ...)` 코드가 있는지 |
| 카드를 눌러도 창이 안 열림 | `index.html`의 `id`와 `script.js`의 `getElementById("...")` 이름이 같은지 |

브라우저에서 `F12` → **Console** 탭을 열면 빨간 글씨로 오류와 줄 번호가 표시됩니다.

---

## 7. 인터넷에 올리기 (선택)

- **Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop)에 폴더를 끌어다 놓으면 바로 주소가 생깁니다.
- **GitHub Pages**: GitHub 저장소에 파일을 올리고 Settings → Pages에서 켜면 `아이디.github.io/저장소이름` 주소로 공개됩니다.

---

## 사용 기술

- HTML, CSS, JavaScript (별도 라이브러리 없음)
- 서체: Google Fonts / Pretendard
- 상세 창: HTML `<dialog>` 요소
