/* ===========================
        LUCIDE ICONS
=========================== */

lucide.createIcons();

/* ===========================
      COUNTER ANIMATION
=========================== */
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});
const contactBtn = document.querySelector(".secondary-btn");

contactBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);

      let count = 0;
      const speed = target / 70;

      function update() {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      }

      update();
      observer.unobserve(counter);
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => observer.observe(counter));

/* ===========================
            MODAL
=========================== */

const modal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalGrid = document.getElementById("modalGrid");
const closeBtn = document.getElementById("closeModal");
const creativeLightbox = document.getElementById("creativeLightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

/* ===========================
            BLOGS
=========================== */

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

/* ===========================
         LINKEDIN
=========================== */

const linkedin = ["Parinitha.pdf"];
const website = [
  "BlewMinds Website – Corporate StoryTelling.pdf",
  "BM Website - Culture Page.pdf",
  "Building a Cohesive Telecom Ecosystem with Comviva_s BlueMarble.pdf",
  "Business Consulting – BM Website page.pdf",
  "Comviva’s Digital Evolution_ A Journey towards Innovation.pdf",
  "Training Workshops Page.pdf",
  "Unravelling Legacy BSS Challenges_ A Journey from Complexity to Clarity.pdf",
];

const social = [
  "Captions - JustHeadshots AI.pdf",
  "Captions.pdf",
  "Pravaayu.pdf",
  "Sales Copy.pdf",
  "Social Media Posts.pdf",
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
        OPEN MODAL
=========================== */

function openModal(category) {
  modal.classList.add("active");

  modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  modalGrid.className = "modal-grid";
  modalGrid.style.display = "grid";

  modalGrid.innerHTML = "";

  if (category === "blogs") {
    modalGrid.style.display = "block";

    blogs.forEach((blog, index) => {
      const title = blog.replace(".pdf", "");

      modalGrid.innerHTML += `

            <a href="assets/blogs/${encodeURIComponent(blog)}"
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

            `;
    });

    return;
  }

  /* LINKEDIN */

  if (category === "linkedin") {
    modalGrid.style.display = "block";

    linkedin.forEach((file, index) => {
      const title = file.replace(".pdf", "");

      modalGrid.innerHTML += `

            <a href="assets/LinkedIn%20Profile%20Writing/${encodeURIComponent(file)}"
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

            `;
    });

    return;
  }
  /* WEBSITE COPY */

  if (category === "website") {
    modalGrid.style.display = "block";
    modalGrid.innerHTML = "";

    website.forEach((file, index) => {
      const title = file.replace(".pdf", "");

      modalGrid.innerHTML += `

        <a href="assets/Website%20Copies/${encodeURIComponent(file)}"
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

        `;
    });

    return;
  }

  /* SOCIAL MEDIA */

  if (category === "social") {
    modalGrid.style.display = "block";
    modalGrid.innerHTML = "";

    social.forEach((file, index) => {
      const title = file.replace(".pdf", "");

      modalGrid.innerHTML += `

        <a href="assets/Social%20Media/${encodeURIComponent(file)}"
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

        `;
    });

    return;
  }
  /* CREATIVES */

  if (category === "creatives") {
    modalGrid.className = "modal-grid creative-gallery";
    modalGrid.style.display = "grid";
    modalGrid.innerHTML = "";

    creatives.forEach((file) => {
      const isVideo = file.endsWith(".mp4");

      modalGrid.innerHTML += `

        <div class="creative-card"
             onclick="openCreative('${encodeURIComponent(file)}', ${isVideo})">

            ${
              isVideo
                ? `<video loop playsinline preload="metadata">

                    <source src="assets/Creatives/${encodeURIComponent(file)}">

                </video>`
                : `<img src="assets/Creatives/${encodeURIComponent(file)}">`
            }

            <div class="creative-overlay">

                ${isVideo ? "▶" : "View"}

            </div>

        </div>

        `;
    });

    return;
  }

  /* PLACEHOLDER */

  modalGrid.style.display = "grid";

  modalGrid.innerHTML = `

        <div class="project-card">

            <div class="pdf-cover">

                <span>📄</span>

                <h4>${category.toUpperCase()}</h4>

            </div>

            <div class="project-content">

                <h3>${modalTitle.textContent}</h3>

                <p>
                    Portfolio items for this section will be added soon.
                </p>

            </div>

        </div>

    `;
}
/* ===========================
        WORK CARD EVENTS
=========================== */
document.querySelectorAll(".work-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    if (category === "creatives") {
      openCreativeGallery();
    } else {
      openModal(category);
    }
  });
});
/* ===========================
        CLOSE MODAL
=========================== */

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* ===========================
        HERO BUTTONS
=========================== */

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}
function openCreative(file, isVideo) {
  creativeLightbox.classList.add("active");

  if (isVideo) {
    lightboxContent.innerHTML = `

        <video controls autoplay>

            <source src="assets/Creatives/${file}">

        </video>

        `;
  } else {
    lightboxContent.innerHTML = `

        <img src="assets/Creatives/${file}">

        `;
  }
}

lightboxClose.onclick = () => {
  creativeLightbox.classList.remove("active");

  lightboxContent.innerHTML = "";
};

creativeLightbox.onclick = (e) => {
  if (e.target === creativeLightbox) {
    creativeLightbox.classList.remove("active");

    lightboxContent.innerHTML = "";
  }
};
/* ===========================
      CREATIVE GALLERY
=========================== */

const creativeModal = document.getElementById("creativeModal");
const creativeGrid = document.getElementById("creativeGrid");
const creativeClose = document.getElementById("creativeClose");
function openCreativeGallery() {
  creativeModal.classList.add("active");

  creativeGrid.innerHTML = "";

  creatives.forEach((file) => {
    const isVideo = file.toLowerCase().endsWith(".mp4");

    creativeGrid.innerHTML += `

        <div class="creative-card"
onclick="openCreativeMedia('${encodeURIComponent(file)}',${isVideo})">

            ${
              isVideo
                ? `<video muted loop playsinline preload="metadata">

                    <source src="assets/Creatives/${encodeURIComponent(file)}">

                </video>`
                : `<img src="assets/Creatives/${encodeURIComponent(file)}">`
            }

        </div>

        `;
  });

  creativeGrid.querySelectorAll("video").forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.muted = false;
      video.volume = 1;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    });
  });

  function closeCreativeMedia() {
    creativeModal.innerHTML = `

        <button class="creative-close" id="creativeClose">

            ✕

        </button>

        <div class="creative-grid" id="creativeGrid"></div>

    `;

    window.creativeGrid = document.getElementById("creativeGrid");

    window.creativeClose = document.getElementById("creativeClose");

    creativeClose.onclick = () => {
      creativeModal.classList.remove("active");
    };

    openCreativeGallery();
  }

  creativeClose.onclick = () => {
    creativeModal.classList.remove("active");
  };

  creativeModal.onclick = (e) => {
    if (e.target === creativeModal) {
      creativeModal.classList.remove("active");
    }
  };
  const viewer = document.getElementById("viewer");
  const viewerContent = document.getElementById("viewerContent");
  const viewerClose = document.getElementById("viewerClose");

  viewerClose.onclick = () => {
    viewer.classList.remove("active");

    viewerContent.innerHTML = "";
  };

  function openCreativeMedia(file, isVideo) {
    viewer.classList.add("active");

    viewerContent.innerHTML = isVideo
      ? `<video controls autoplay>

        <source src="assets/Creatives/${file}">

    </video>`
      : `<img src="assets/Creatives/${file}">`;
  }
  viewer.onclick = (e) => {
    if (e.target === viewer) {
      viewer.classList.remove("active");

      viewerContent.innerHTML = "";
    }
  };
  console.log("✅ Portfolio Loaded Successfully");
}
