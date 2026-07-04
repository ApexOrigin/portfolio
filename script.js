const blogs = [
  "10 Common Resume Errors You Must Avoid.pdf",
  "10 Essential Job Skills to Elevate Your Resume.pdf",
  "10 tips to build bridges, not just profiles on LinkedIn.pdf",
  "AI_s Role in Resume Screening & Candidate Selection.pdf",
  "Boost Your ATS Resume Score_ Tips for Beating the Bots.pdf",
  "Boost Your Job Hunt_ How to use an ATS Resume Checker.pdf",
  "Career Comeback_ Tips for Restarting Career after Break.pdf",
  "Crafting a Compelling Resume Introduction_ Tips and Examples.pdf",
  "Curriculum Vitae vs Resume_ What fits your Career Goals.pdf",
  "From Profile to Paycheck_ 7 LinkedIn Monetization Strategies.pdf",
  "How Checking Your Resume Score Enhances your Hiring Chances.pdf",
  "How to Build your Online Presence that supports your Professional Resume.pdf",
  "How to make your resume stand out with Achievements & Skills.pdf",
  "How to network like a Pro_ Follow these LinkedIn Networking Tips.pdf",
  "How to Pick the Perfect Colors for Your Resume Template.pdf",
  "How to use Action Words to make your resume stand out.pdf",
  "Informal vs Formal resignation letter.pdf",
  "International CV Formatting_ Tips to Win Job Applications.pdf",
  "LinkedIn_s Role in your narrative_ The importance of Personal Branding.pdf",
  "Navigating ATS Scores_ What Job Seekers Need to Know.pdf",
  "PM Blog - How to make Data driven decisions with LinkedIn Analytics.pdf",
  "PM Blog - How to transform Connections into Opportunities with LinkedIn Alchemy.pdf",
  "PM Blog Your Guide to a Perfect LinkedIn Profile Harmony.pdf",
  "Quick Tips to Enhance your Resume Score without Keyword Overload.pdf",
  "Resignation Letter Essentials_ What You Need to Know.pdf",
  "Resume Formatting Tips_ Best Practices & Pitfalls to Avoid.pdf",
  "Resume Score vs.pdf",
  "Tailoring Your Resume Format to Fit Your Career Journey.pdf",
  "The Perfect Resume Guideline – Top 10 Resume Writing Tips.pdf",
  "The Power of Online Resume Makers_ Benefits for Job Seekers.pdf",
  "Top 10 tips for Writing a Resume with Limited Work Experience.pdf",
  "Top Five LinkedIn Professional Growth Tools.pdf",
  "What Sets Bio Data Apart from a Resume.pdf",
  "Why should you Proofread your resume before sending it out.pdf",
  "Your Guide to Mastering the Art of Self-Introduction.pdf",
];
const website = [
  "BlewMinds Website – Corporate StoryTelling.pdf",
  "BM Website - Culture Page.pdf",
  "Building a Cohesive Telecom Ecosystem with Comviva_s BlueMarble.pdf",
  "Business Consulting – BM Website page.pdf",
  "Comviva’s Digital Evolution_ A Journey towards Innovation.pdf",
  "Training Workshops Page.pdf",
  "Unravelling Legacy BSS Challenges_ A Journey from Complexity to Clarity.pdf",
];
const creatives = [
  "4320 V1 CB2 Divyanka.mp4",
  "6180 V1 9-16 ACV1+ACV3 Barkha.mp4",
  "7315_V2_9_16_PCB2.2_Drashti & Sanaya_PodCeleb.mp4",
  "9916v1 9x16.mp4",
  "10163 GF 3 V1 9 x16- Changes 1 sppedup.mp4",
  "10587 V3 ACV 4x5_2.mp4",
  "10589 V1 ACV 4x5_1.mp4",
  "10772 V1 GF 4x5.mp4",

  "ACV (ACVX04)_.png",
  "Airport Ads-1.png",
  "C478_HV 1080 X 1920.jpg",
  "C6281_Gf 1080 X 1080.jpg",
  "C6282_GF_1080 X 1080.jpg",
  "High way 2, 4x5.jpg",
  "HIghway  1x1_.jpg",
  "HS  1_!.png",
  "Main road   1x1.jpg",
  "Main road 2, 4x5.jpg",
  "Metro  copy.png",
];
/* ===========================
        LUCIDE ICONS
=========================== */

lucide.createIcons();
/*==================================================
                INITIALIZATION
==================================================*/

lucide.createIcons();

/*==================================================
                HELPERS
==================================================*/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/*==================================================
                DOM ELEMENTS
==================================================*/

const nav = $("nav");
const menuToggle = $("#menuToggle");

const workBtn = $(".primary-btn");
const contactBtn = $(".secondary-btn");
const navBtn = $(".nav-btn");

const modal = $("#portfolioModal");
const modalTitle = $("#modalTitle");
const modalGrid = $("#modalGrid");
const closeModalBtn = $("#closeModal");

const creativeModal = $("#creativeModal");
const creativeGrid = $("#creativeGrid");
const creativeClose = $("#creativeClose");

const viewer = $("#viewer");
const viewerContent = $("#viewerContent");
const viewerClose = $("#viewerClose");

/*==================================================
                SMOOTH SCROLL
==================================================*/

function scrollTo(id) {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
  });
}

workBtn?.addEventListener("click", () => {
  scrollTo("work");
});

contactBtn?.addEventListener("click", () => {
  scrollTo("contact");
});

navBtn?.addEventListener("click", () => {
  scrollTo("contact");
});

/*==================================================
                MOBILE MENU
==================================================*/

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

$$("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

/*==================================================
                COUNTER
==================================================*/

const counters = $$(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = Number(counter.dataset.target);

      let current = 0;

      const increment = target / 70;

      function animate() {
        if (current < target) {
          current += increment;

          counter.textContent = Math.ceil(current) + "+";

          requestAnimationFrame(animate);
        } else {
          counter.textContent = target + "+";
        }
      }

      animate();

      counterObserver.unobserve(counter);
    });
  },

  {
    threshold: 0.6,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/*==================================================
                DATA
==================================================*/
/*==================================================
                    ARRAYS
==================================================*/

// KEEP YOUR EXISTING ARRAYS HERE EXACTLY AS THEY ARE

// const blogs=[...]
// const linkedin=[...]
// const website=[...]
// const social=[...]
// const creatives=[...]

/*==================================================
                OPEN MODAL
==================================================*/

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function createBlogList(files, folder) {
  modalGrid.className = "modal-grid";

  modalGrid.style.display = "block";

  modalGrid.innerHTML = "";

  files.forEach((file, index) => {
    const title = file.replace(".pdf", "");

    modalGrid.insertAdjacentHTML(
      "beforeend",
      `

        <a href="${folder}/${encodeURIComponent(file)}"

        target="_blank"

        class="blog-item">

            <span class="blog-no">

                ${String(index + 1).padStart(2, "0")}

            </span>

            <div class="blog-info">

                <h3>${title}</h3>

            </div>

            <span class="blog-arrow">

                Open →

            </span>

        </a>

        `,
    );
  });
}

function openModal(category) {
  modal.classList.add("active");

  modalTitle.textContent = capitalize(category);

  modalGrid.innerHTML = "";

  modalGrid.className = "modal-grid";

  switch (category) {
    case "blogs":
      createBlogList(
        blogs,

        "assets/blogs",
      );

      break;

    case "linkedin":
      createBlogList(
        linkedin,

        "assets/LinkedIn%20Profile%20Writing",
      );

      break;

    case "website":
      createBlogList(
        website,

        "assets/Website%20Copies",
      );

      break;

    case "social":
      createBlogList(
        social,

        "assets/Social%20Media",
      );

      break;

    case "creatives":
      openCreativeGallery();

      modal.classList.remove("active");

      return;

    default:
      modalGrid.innerHTML = `

            <div class="project-card">

                <div class="pdf-cover">

                    <span>📄</span>

                    <h4>${category.toUpperCase()}</h4>

                </div>

                <div class="project-content">

                    <h3>Coming Soon</h3>

                    <p>

                        Portfolio items will be added here.

                    </p>

                </div>

            </div>

            `;
  }
}

/*==================================================
                WORK CARDS
==================================================*/

$$(".work-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    openModal(category);
  });
});

/*==================================================
                CLOSE MODAL
==================================================*/

closeModalBtn?.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
/*==================================================
                CREATIVE VIEWER
==================================================*/

function openCreativeMedia(file, isVideo) {
  viewer.classList.add("active");

  viewerContent.innerHTML = isVideo
    ? `

        <video controls autoplay>

            <source src="assets/Creatives/${file}">

        </video>

        `
    : `

        <img src="assets/Creatives/${file}">

        `;
}

window.openCreativeMedia = openCreativeMedia;

viewerClose?.addEventListener("click", closeViewer);

viewer?.addEventListener("click", (e) => {
  if (e.target === viewer) {
    closeViewer();
  }
});

function closeViewer() {
  viewer.classList.remove("active");

  const video = viewer.querySelector("video");

  if (video) {
    video.pause();
  }

  viewerContent.innerHTML = "";
}

/*==================================================
                CREATIVE GALLERY
==================================================*/

function openCreativeGallery() {
  creativeModal.classList.add("active");

  creativeGrid.innerHTML = "";

  creatives.forEach((file) => {
    const isVideo = file.toLowerCase().endsWith(".mp4");

    creativeGrid.insertAdjacentHTML(
      "beforeend",

      `

            <div class="creative-card"

            onclick="openCreativeMedia('${encodeURIComponent(file)}',${isVideo})">

                ${
                  isVideo
                    ? `

                    <video

                        muted

                        loop

                        playsinline

                        preload="metadata">

                        <source

                        src="assets/Creatives/${encodeURIComponent(file)}">

                    </video>

                    `
                    : `

                    <img

                    src="assets/Creatives/${encodeURIComponent(file)}">

                    `
                }

            </div>

            `,
    );
  });

  creativeGrid.querySelectorAll("video").forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.muted = false;

      video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
      video.pause();

      video.currentTime = 0;

      video.muted = true;
    });
  });
}

/*==================================================
            CLOSE CREATIVE MODAL
==================================================*/

creativeClose?.addEventListener("click", () => {
  creativeModal.classList.remove("active");
});

creativeModal?.addEventListener("click", (e) => {
  if (e.target === creativeModal) {
    creativeModal.classList.remove("active");
  }
});

/*==================================================
            ESC KEY SUPPORT
==================================================*/

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  modal.classList.remove("active");

  creativeModal.classList.remove("active");

  closeViewer();
});

/*==================================================
            PRELOAD VIDEOS
==================================================*/

window.addEventListener("load", () => {
  document

    .querySelectorAll("video")

    .forEach((video) => {
      video.preload = "metadata";
    });
});

/*==================================================
            ACTIVE NAV LINK
==================================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    const height = section.offsetHeight;

    if (scrollY >= top && scrollY < top + height) {
      current = section.id;
    }
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*==================================================
            FINISHED
==================================================*/

console.log(
  "%cPortfolio Loaded Successfully",

  "color:#9a6b45;font-size:14px;font-weight:bold;",
);
