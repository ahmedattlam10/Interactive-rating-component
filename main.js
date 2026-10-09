const form = document.querySelector(".rate-card");
const thanksCard = document.querySelector(".thanks-card");
const selectedRate = document.querySelector(".selected-rate");
const ratings = document.querySelectorAll('input[name="rating"]');
const thanksCardTitle = document.querySelector(".thanks-card-title");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const checked = Array.from(ratings).find((e) => e.checked);
  if (checked) {
    selectedRate.textContent = checked.value;
    form.classList.add("hidden");
    thanksCard.classList.remove("hidden");
    thanksCard.scrollIntoView({
      block: "start",
    });
  }
});
