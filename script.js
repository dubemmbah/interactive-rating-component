"use strict";

// const ratings = document.querySelectorAll(".rating");
// const form = document.querySelector("form");
// const ratingCard = document.querySelector(".card");
// const ratingPreview = document.querySelector(".rating-preview");
// const thankYouCard = document.querySelector(".thank-you-state");

// ratings.forEach((rating) => {
//   rating.addEventListener("click", () => {
//     ratings.forEach((r) => r.classList.remove("selected"));

//     rating.classList.add("selected");

//     // Update the rating preview text
//     const selectedRating = rating.innerText;
//     ratingPreview.textContent = `You selected ${selectedRating} out of 5`;
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //   Check if a rating is selected
//   const selectedRating = document.querySelector(".rating.selected");
//   if (!selectedRating) {
//     alert("Please select a rating before submitting");
//     return; // Prevent form submission if no rating is submitted
//   }

//   //   console.log("form submitted");
//   ratingCard.style.display = "none";

//   thankYouCard.style.display = "block";
// });

const ratings = document.querySelectorAll(".rating");
const ratingPreview = document.querySelector(".rating-preview");
const form = document.querySelector("form");
const thankYouCard = document.querySelector(".thank-you-state");
const ratingCard = document.querySelector(".card");
const ratingContainer = document.querySelector(".rating-container");

ratingContainer.addEventListener("click", handleRatingClick);

form.addEventListener("submit", handleFormSubmit);

function handleRatingClick(e) {
  if (!e.target.classList.contains("rating")) {
    return;
  }

  const selectedRating = e.target;
  updateSelectedRating(selectedRating);
  updateRatingPreview(selectedRating.innerText);
}

function updateSelectedRating(selectedRating) {
  // Looping through all ratings
  ratings.forEach((r) => {
    if (parseInt(r.innerText) <= parseInt(selectedRating.innerText)) {
      r.classList.add("selected");
    } else {
      r.classList.remove("selected");
    }
  });
}

function updateRatingPreview(selectedRatingValue) {
  ratingPreview.textContent = `You selected ${selectedRatingValue} out of 5`;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const selectedRating = document.querySelector(".rating.selected");
  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }

  ratingCard.style.display = "none";

  thankYouCard.style.display = "block";

  setTimeout(() => {
    ratings.forEach((r) => r.classList.remove("selected"));

    thankYouCard.style.display = "none";

    ratingCard.style.display = "block";
  }, 5000);
}
