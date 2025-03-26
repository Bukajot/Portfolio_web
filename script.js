const btn_Features = document.querySelector("#link2");
const Features = document.querySelector(".features");
const btn_Pricing = document.querySelector("#link3");
const Pricing = document.querySelector(".pricing");

function scrollToFeatures() {
  Features.scrollIntoView({ behavior: "smooth" });
}
btn_Features.addEventListener("click", scrollToFeatures);

function scrollToPricing() {
  Pricing.scrollIntoView({ behavior: "smooth" });
}
btn_Pricing.addEventListener("click", scrollToPricing);
