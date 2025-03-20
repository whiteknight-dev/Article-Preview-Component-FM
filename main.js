const cardFooterSection = document.querySelector(".card__footer-section");
const cardFooter = document.querySelector(".card__footer");
const cardShare = document.querySelector(".card__share");
let primaryButton = document.querySelector(".share-button");

primaryButton.addEventListener("click", () => {
  primaryButton.classList.toggle("active");
  cardFooterSection.classList.toggle("active");
  cardFooter.classList.toggle("hidden");
  cardShare.classList.toggle("visible");
});
