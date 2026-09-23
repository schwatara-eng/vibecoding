/* =========================================================
   script.js — 페이지의 내용과 동작을 담당하는 파일

   [1부] 내 정보와 과제 목록  ← 여기만 고치면 돼요
   [2부] 화면을 그리는 코드   ← 공부할 때 읽어보세요
   ========================================================= */


/* =========================================================
   [1부] 내 정보와 과제 목록
   아래 내용은 모두 예시예요. 실제 내용으로 바꿔주세요.
   ========================================================= */

// ---------- 내 정보 ----------
const PROFILE = {
  name: "최미라",
  headline: "최미라의 포트폴리오",
  bio: "AI를 배우는 출판편집자",
  photo: "images/눈물은행 사물 - 눈물은행 통장.png",  // 프로필 사진 주소. 예: "images/me.jpg" (비우면 이름 첫 글자가 보여요)
  tags: ["그림", "만화", "영상", "글쓰기", "편집"],
  email: "schwatara@email.com",
};

// ---------- 소개 섹션 ----------
// 각 항목은 [이름, 오른쪽에 작게 보일 글자] 형태예요.
const ABOUT = [
  {
    title: "사용 툴",
    items: [["MS Office", ""], ["한글", ""], ["Photoshop", ""], ["Indesign", ""],]
  },
  {
    title: "수강 과목",
    items: [["MBC AI 데이터 저널리즘 전문가 과정", "2026. 9-12"]]
  },
  
];

// ---------- 분류 (필터 버튼 이름) ----------
// 과제의 category와 글자가 똑같아야 필터가 작동해요.
const CATEGORIES = ["그림", "만화", "영상", "기타"];

// ---------- 과제 목록 ----------
// 새 과제를 추가하려면 { ... }, 한 덩어리를 복사해서 붙여넣고 내용을 바꾸세요.
//
// images: 이미지 주소 목록. 여러 장 넣으면 상세 창에서 넘겨볼 수 있어요.
//         예: ["images/straw-1.jpg", "images/straw-2.jpg"]
//         비워두면 [] 색상 블록이 대신 보여요.
// file:   원본 파일(PDF, 영상 등) 링크. 없으면 "" 로 두세요.
// process 안의 \n 은 줄바꿈이에요.
const WORKS = [
  {
    title: "숫자로 보는 2026 아이치·나고야 아시안 게임",
    category: "뉴스영상",
    course: "AI 데이터 저널리즘",
    date: "2026.09",
    tools: "ChatGPT, Midjourney, CapCut",
    intent: "아시안 게임 개최 현황을 숫자를 통해 전해드립니다.",
    process: "기획 구성(ChatGPT) → 스토리보드 및 대본 작성(ChatGPT) → 이미지 및 영상 생성(Midjourney) → TTS 생성(ElevenLabs) → 최종편집(CapCut)",
    youtube: "jJfDsHUsM2Q",
    images: ["images/숫자로 보는 아시안게임 썸네일.png"],
    file: ""
  },
  
{
  title: "폭염 뉴스",
  category: "뉴스영상",
  course: "AI 데이터 저널리즘",
  date: "2026.09",
  tools: "Synthesia",
  intent: "폭염 날씨에 주의할 사항을 전해드립니다.",
  process: "기획 구성(ChatGPT) → 스토리보드 및 대본 작성(ChatGPT) → 이미지 및 영상 생성(Midjourney) → TTS 및 아바타 영상 생성, 최종 편집(Synthesia)",
  embed: "https://share.synthesia.io/embeds/videos/9d52b5f7-c1e4-43e4-8d9d-e78d501b3fa5",
  images: ["images/폭염뉴스 썸네일.png"],
  file: ""
},

  {
    title: "1분 탄소발자국",
    category: "영상",
    course: "영상 편집 기초",
    date: "2026.05",
    tools: "Premiere Pro, After Effects",
    intent: "하루 일과 속 탄소 배출을 1분 모션 그래픽으로 설명했습니다.",
    process: "스크립트 작성 → 스토리보드 → 에셋 제작 → 편집 및 사운드",
    images: [],
    file: ""
  },
  
    {
    title: "1분 탄소발자국",
    category: "영상",
    course: "영상 편집 기초",
    date: "2026.05",
    tools: "Premiere Pro, After Effects",
    intent: "하루 일과 속 탄소 배출을 1분 모션 그래픽으로 설명했습니다.",
    process: "스크립트 작성 → 스토리보드 → 에셋 제작 → 편집 및 사운드",
    images: [],
    file: ""
  },

    {
    title: "1분 탄소발자국",
    category: "영상",
    course: "영상 편집 기초",
    date: "2026.05",
    tools: "Premiere Pro, After Effects",
    intent: "하루 일과 속 탄소 배출을 1분 모션 그래픽으로 설명했습니다.",
    process: "스크립트 작성 → 스토리보드 → 에셋 제작 → 편집 및 사운드",
    images: [],
    file: ""
  },

    {
    title: "1분 탄소발자국",
    category: "영상",
    course: "영상 편집 기초",
    date: "2026.05",
    tools: "Premiere Pro, After Effects",
    intent: "하루 일과 속 탄소 배출을 1분 모션 그래픽으로 설명했습니다.",
    process: "스크립트 작성 → 스토리보드 → 에셋 제작 → 편집 및 사운드",
    images: [],
    file: ""
  },
];



/* =========================================================
   [2부] 화면을 그리는 코드
   ========================================================= */

// 지금 선택된 필터 ("전체" 로 시작)
let selectedCategory = "전체";

// 지금 화면에 보이는 과제들 (필터 적용 후)
let visibleWorks = [];

// 상세 창에서 보고 있는 과제 번호
let currentIndex = 0;


// ---------------------------------------------------------
// 도우미 함수: 분류에 맞는 색 블록 색상 고르기
// 예) "일러스트" → CATEGORIES에서 0번째 → --블록1
// ---------------------------------------------------------
function getBlockColor(category) {
  const number = CATEGORIES.indexOf(category);   // 몇 번째 분류인지
  const colorNumber = (number % 4) + 1;          // 1~4 중 하나
  return "var(--블록" + colorNumber + ")";
}


// ---------------------------------------------------------
// 도우미 함수: 이미지가 있으면 <img>, 없으면 분류 글자
// ---------------------------------------------------------
function makeImageHTML(work, imageNumber) {
  const src = work.images[imageNumber];
  if (src) {
    return `<img src="${src}" alt="${work.title}">`;
  }
  return work.category;
}


// ---------------------------------------------------------
// ② 자기소개, 소개, 연락처 채우기
// ---------------------------------------------------------
function showProfile() {
  document.getElementById("logo-name").textContent = PROFILE.name;
  document.getElementById("footer-name").textContent = PROFILE.name;
  document.getElementById("headline").textContent = PROFILE.headline;
  document.getElementById("bio").textContent = PROFILE.bio;

  // 프로필 사진 (없으면 이름 첫 글자)
  const avatar = document.getElementById("avatar");
  if (PROFILE.photo) {
    avatar.innerHTML = `<img src="${PROFILE.photo}" alt="프로필 사진">`;
  } else {
    avatar.textContent = PROFILE.name[0];
  }

  // 태그들
  let tagsHTML = "";
  for (const tag of PROFILE.tags) {
    tagsHTML += `<span class="intro-tag">${tag}</span>`;
  }
  document.getElementById("intro-tags").innerHTML = tagsHTML;

  // 소개 섹션 (사용 툴 / 수강 과목 / 관심 분야)
  let aboutHTML = "";
  for (const group of ABOUT) {
    let listHTML = "";
    for (const item of group.items) {
      listHTML += `<li>${item[0]} <span>${item[1]}</span></li>`;
    }
    aboutHTML += `
      <div>
        <h4>${group.title}</h4>
        <ul>${listHTML}</ul>
      </div>`;
  }
  document.getElementById("about-grid").innerHTML = aboutHTML;

  // 연락처
  document.getElementById("contact-list").innerHTML = `
    <span>이메일 ${PROFILE.email}</span>
    <button class="copy-button" id="copy-button">복사</button>
    <a href="${PROFILE.instagram}" target="_blank">Instagram ↗</a>`;

  // 복사 버튼 누르면 이메일 주소 복사
  const copyButton = document.getElementById("copy-button");
  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(PROFILE.email)
      .then(function () {
        copyButton.textContent = "복사됨";
        setTimeout(function () { copyButton.textContent = "복사"; }, 1500);
      })
      .catch(function () {
        copyButton.textContent = "직접 복사해 주세요";
      });
  });
}


// ---------------------------------------------------------
// ③ 필터 버튼 만들기
// ---------------------------------------------------------
function showFilters() {
  const allCategories = ["전체", ...CATEGORIES];  // ["전체", "일러스트", "만화", ...]
  const filtersBox = document.getElementById("filters");
  filtersBox.innerHTML = "";  // 먼저 비우고

  for (const category of allCategories) {
    // 이 분류에 과제가 몇 개인지 세기
    let count = 0;
    for (const work of WORKS) {
      if (category === "전체" || work.category === category) {
        count++;
      }
    }

    // 버튼 만들기
    const button = document.createElement("button");
    button.className = "filter-button";
    button.textContent = category + " " + count;

    // 지금 선택된 버튼이면 active 클래스 추가 (style.css에서 색이 바뀜)
    if (category === selectedCategory) {
      button.classList.add("active");
    }

    // 버튼을 누르면: 선택 바꾸고 → 버튼, 카드 다시 그리기
    button.addEventListener("click", function () {
      selectedCategory = category;
      showFilters();
      showCards();
    });

    filtersBox.appendChild(button);
  }
}


// ---------------------------------------------------------
// ④ 과제 카드 만들기
// ---------------------------------------------------------
function showCards() {
  // 1) 선택된 분류에 맞는 과제만 골라내기
  visibleWorks = WORKS.filter(function (work) {
    return selectedCategory === "전체" || work.category === selectedCategory;
  });

  document.getElementById("work-count").textContent = visibleWorks.length + "개 과제";

  const grid = document.getElementById("card-grid");
  grid.innerHTML = "";

  // 2) 과제가 하나도 없을 때
  if (visibleWorks.length === 0) {
    grid.innerHTML = `<p class="empty-message">이 분류에는 아직 과제가 없어요.</p>`;
    return;
  }

  // 3) 과제마다 카드 하나씩 만들기
  visibleWorks.forEach(function (work, index) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image" style="background: ${getBlockColor(work.category)}">
        ${makeImageHTML(work, 0)}
      </div>
      <div class="card-text">
        <h3>${work.title}</h3>
        <div class="card-info">
          <span class="tag">${work.category}</span>
          <span>${work.course} · ${work.date}</span>
        </div>
      </div>`;

    // 카드를 누르면 상세 창 열기
    card.addEventListener("click", function () {
      openDetail(index);
    });

    grid.appendChild(card);
  });
}


// ---------------------------------------------------------
// ⑥ 상세 창 열기
// ---------------------------------------------------------
function openDetail(index) {
  currentIndex = index;
  const work = visibleWorks[index];

  // 글자 채우기
  document.getElementById("detail-category").textContent = work.category;
  document.getElementById("detail-title").textContent = work.title;
  document.getElementById("detail-course").textContent = work.course;
  document.getElementById("detail-date").textContent = work.date;
  document.getElementById("detail-tools").textContent = work.tools;
  document.getElementById("detail-intent").textContent = work.intent;
  document.getElementById("detail-process").textContent = work.process;

  // 원본 파일 버튼: 링크가 있을 때만 보이기
  const fileButton = document.getElementById("detail-file");
  if (work.file) {
    fileButton.href = work.file;
    fileButton.style.display = "inline-block";
  } else {
    fileButton.style.display = "none";
  }

  // 큰 이미지 (첫 번째 장)
  showMainImage(0);

  // 작은 이미지 목록 (2장 이상일 때만)
  const smallBox = document.getElementById("small-images");
  smallBox.innerHTML = "";
  if (work.images.length > 1) {
    work.images.forEach(function (src, imageNumber) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = work.title + " " + (imageNumber + 1);
      img.addEventListener("click", function () {
        showMainImage(imageNumber);
      });
      smallBox.appendChild(img);
    });
  }
  markActiveSmallImage(0);

  // 창 열기 (이미 열려 있으면 그대로)
  const dialog = document.getElementById("detail");
  if (!dialog.open) {
    dialog.showModal();
  }
  dialog.scrollTop = 0;
}


// 상세 창의 큰 화면 바꾸기
// embed 주소가 있으면 → 그 영상 (HeyGen, Synthesia 등)
// youtube ID가 있으면 → 유튜브 영상
// 둘 다 없으면 → 이미지
function showMainImage(imageNumber) {
  const work = visibleWorks[currentIndex];
  const mainImage = document.getElementById("main-image");
  mainImage.style.background = getBlockColor(work.category);

  let videoAddress = "";
  if (work.embed) {
    videoAddress = work.embed;
  } else if (work.youtube) {
    videoAddress = "https://www.youtube.com/embed/" + work.youtube;
  }

  if (videoAddress) {
    mainImage.innerHTML = `
      <iframe
        src="${videoAddress}"
        title="${work.title}"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  } else {
    mainImage.innerHTML = makeImageHTML(work, imageNumber);
  }

  markActiveSmallImage(imageNumber);
}


// 지금 보고 있는 작은 이미지에 테두리 표시
function markActiveSmallImage(imageNumber) {
  const smallImages = document.querySelectorAll("#small-images img");
  smallImages.forEach(function (img, i) {
    if (i === imageNumber) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}


// ---------------------------------------------------------
// 상세 창 버튼들 (닫기, 이전, 다음)
// ---------------------------------------------------------
const dialog = document.getElementById("detail");

// 창이 닫히면 영상을 지워서 소리도 멈추게
dialog.addEventListener("close", function () {
  document.getElementById("main-image").innerHTML = "";
});

// × 버튼으로 닫기
document.getElementById("close-button").addEventListener("click", function () {
  dialog.close();
});

// 창 바깥 어두운 부분을 눌러도 닫기
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});

// 이전 과제 (맨 처음이면 맨 끝으로)
document.getElementById("prev-button").addEventListener("click", function () {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = visibleWorks.length - 1;
  }
  openDetail(newIndex);
});

// 다음 과제 (맨 끝이면 맨 처음으로)
document.getElementById("next-button").addEventListener("click", function () {
  let newIndex = currentIndex + 1;
  if (newIndex >= visibleWorks.length) {
    newIndex = 0;
  }
  openDetail(newIndex);
});

// 키보드 ← → 로도 넘기기 (Esc는 브라우저가 알아서 닫아줘요)
document.addEventListener("keydown", function (event) {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") document.getElementById("prev-button").click();
  if (event.key === "ArrowRight") document.getElementById("next-button").click();
});



/* =========================================================
   시작! 페이지가 열리면 아래 세 함수를 차례로 실행해요.
   ========================================================= */
showProfile();
showFilters();
showCards();
