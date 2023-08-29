let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let reviewsContainerEl = document.getElementById("reviewsContainer");
let SaveButtonEl = document.getElementById("SaveButton");

SaveButtonEl.onclick = function () {
  let reviewTextareaEnterValue = reviewTextareaEl.value;
  localStorage.setItem("reviewTextareaEnterValue", reviewTextareaEnterValue);
};

let storeGetItemLocal = localStorage.getItem("reviewTextareaEnterValue");

if (storeGetItemLocal === null) {
  reviewTextareaEl.value = "";
} else {
  reviewTextareaEl.value = storeGetItemLocal;
}

function onAddReview() {
  let movieTitle = titleInputEl.value;
  let movieReview = reviewTextareaEl.value;

  // Showing Alert Message when movie title is empty
  if (movieTitle === "") {
    alert("Enter a movie title");
    return;
  }

  // Createing Appending the movieReview to the reviewsContainerEl
  let movieTitleElmenet = document.createElement("h1");
  movieTitleElmenet.classList.add("review-heading");
  movieTitleElmenet.textContent = "Movie Title: " + movieTitle;
  reviewsContainerEl.appendChild(movieTitleElmenet);

  // Createing Appending the movieTitle to the HorizontelLine to the reviewsContainer after adding movieTitle and movieReview
  let movieReviewElement = document.createElement("p");
  movieReviewElement.classList.add("review");
  movieReviewElement.textContent = "Your Review: " + movieReview;
  reviewsContainerEl.appendChild(movieReviewElement);

  titleInputEl.value = "";
  reviewTextareaEl.value = "";
}
