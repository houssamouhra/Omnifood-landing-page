// Update the Year every automatically
const yearEl = document.querySelector(".year"),
  currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile nav bar toggle
const btnNav = document.querySelector(".btn-mobile-nav"),
  headerEl = document.querySelector(".header"),
  arrowIcon = document.querySelector(".arrow-icon");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky nav bar
const sectionHeroEl = document.querySelector(".section-hero"),
  obs = new IntersectionObserver(
    function (e) {
      let r = e[0];
      console.log(r),
        !1 === r.isIntersecting && document.body.classList.add("sticky"),
        !0 === r.isIntersecting && document.body.classList.remove("sticky");
    },
    { root: null, threshold: 0, rootMargin: "-80px" }
  );
obs.observe(sectionHeroEl);
