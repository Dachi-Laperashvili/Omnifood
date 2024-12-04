///////////////////////////////////////////////
// Making mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

/////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

/////////////////////////////////////////////
// Sticky Navigation

const sectionHero = document.querySelector(".section-hero");

// observing hero section in relation to viewport
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // when hero section dissapears from viewport adding sticky class to header
    ent.isIntersecting === false
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    // setting root to null to observe element in relation to viewport
    root: null,
    // whenever we have 0% of element in viewport callback function gets executedd
    threshold: 0,
    // adding -80px margin outside root to fix problem of navigation overlapping featured in section
    rootMargin: "-90px",
  }
);
obs.observe(sectionHero);
