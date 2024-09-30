const elementsToAnimate = document.querySelectorAll("[data-animate]");

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -60px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-inview");
      return;
    }
  });
}, observerOptions);

function setup(el) {
  let cssClass = el.dataset.animateClass;
  let delay = el.dataset.animateDelay;
  el.classList.add(cssClass);
  el.setAttribute("style", `--delay: ${delay};`);
}

function init() {
  elementsToAnimate.forEach((el) => setup(el));
  elementsToAnimate.forEach((el) => observer.observe(el));
}

export { init };
