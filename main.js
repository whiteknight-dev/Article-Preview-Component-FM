let width = window.innerWidth;
const cardFooter = document.querySelector(".card__footer");
const cardShare = document.querySelector(".card__share");
let primaryButton = null;
let secondaryButton = null;
let svg = null;

function bindEvents() {
  if (primaryButton !== null && secondaryButton !== null) {
    primaryButton.replaceWith(primaryButton.cloneNode(true));
    secondaryButton.replaceWith(secondaryButton.cloneNode(true));
  }

  svg = document.getElementById("svg");
  primaryButton = document.querySelector(".primary");
  secondaryButton = document.querySelector(".secondary");

  let width = window.innerWidth;
  if (width < 768) {
    primaryButton.addEventListener("click", function () {
      cardFooter.classList.add("hidden");
      cardShare.classList.remove("hidden");
    });

    secondaryButton.addEventListener("click", function () {
      cardShare.classList.add("hidden");
      cardFooter.classList.remove("hidden");
    });
  } else {
    primaryButton.addEventListener("click", function () {
      cardShare.classList.toggle("hidden");
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        svg.style.fill = "#6E8098";
      } else {
        this.classList.add("active");
        svg.style.fill = "#fff";
      }
    });
  }
}

bindEvents();

addEventListener("resize", bindEvents);
