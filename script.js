document.addEventListener("DOMContentLoaded", () => {
  // Horizontal scroll logic for "Deal Of The Day"
  const horizontalList = document.querySelector(".product-horizontal-list");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (horizontalList && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      horizontalList.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      horizontalList.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  // Hero Banner Slider Logic
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll("#hero-dots .dot");
  const heroPrev = document.getElementById("hero-prev");
  const heroNext = document.getElementById("hero-next");
  let currentSlide = 0;

  function goToSlide(index) {
    if (slides.length === 0) return;

    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === currentSlide) return;

    const currentSlideEl = slides[currentSlide];
    const nextSlideEl = slides[nextIndex];

    // Remove all classes
    slides.forEach((slide) => {
      slide.classList.remove("active", "next", "prev");
    });

    // Determine direction
    const isNext =
      nextIndex > currentSlide ||
      (currentSlide === slides.length - 1 && nextIndex === 0);
    const isPrev =
      nextIndex < currentSlide ||
      (currentSlide === 0 && nextIndex === slides.length - 1);

    // Set current slide to active position
    currentSlideEl.classList.add("active");

    if (isNext) {
      // Next slide starts from right
      nextSlideEl.classList.add("next");

      setTimeout(() => {
        nextSlideEl.classList.remove("next");
        nextSlideEl.classList.add("active");
        currentSlideEl.classList.remove("active");
        currentSlideEl.classList.add("prev");

        setTimeout(() => {
          currentSlideEl.classList.remove("prev");
        }, 500);
      }, 10);
    } else if (isPrev) {
      // Previous slide starts from left
      nextSlideEl.classList.add("prev");

      setTimeout(() => {
        nextSlideEl.classList.remove("prev");
        nextSlideEl.classList.add("active");
        currentSlideEl.classList.remove("active");
        currentSlideEl.classList.add("next");

        setTimeout(() => {
          currentSlideEl.classList.remove("next");
        }, 500);
      }, 10);
    }

    // Update dots
    if (dots[currentSlide]) dots[currentSlide].classList.remove("active");
    if (dots[nextIndex]) dots[nextIndex].classList.add("active");

    currentSlide = nextIndex;
  }

  if (heroPrev && heroNext && slides.length > 0) {
    heroPrev.addEventListener("click", () => goToSlide(currentSlide - 1));
    heroNext.addEventListener("click", () => goToSlide(currentSlide + 1));

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    // Auto slide
    setInterval(() => goToSlide(currentSlide + 1), 4000);
  }

  // Login Modal Logic
  const loginBtn = document.getElementById("login-btn");
  const loginModal = document.getElementById("login-modal");
  const closeModal = document.getElementById("close-modal");

  if (loginBtn && loginModal && closeModal) {
    loginBtn.addEventListener("click", () => {
      loginModal.classList.add("show");
    });

    closeModal.addEventListener("click", () => {
      loginModal.classList.remove("show");
    });

    // Close on clicking outside the modal content
    window.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove("show");
      }
    });
  }
});
const loginBtn = document.getElementById("login-btn");
const dropdown = document.getElementById("login-dropdown");

loginBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
  dropdown.style.display = "none";
});
