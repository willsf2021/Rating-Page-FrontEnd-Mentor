let submitButton = document.querySelector(".submit");
let ratingLabels = document.querySelectorAll(".rate");
let inputs = document.querySelectorAll(".rating-input");
let section = document.querySelector("section");

ratingLabels.forEach((label) => {
  label.addEventListener("click", changeColor);
});

function changeColor(event) {
  ratingLabels.forEach((label) => {
    label.style.backgroundColor = "";
    label.style.color = "";
  });

  event.currentTarget.style.backgroundColor = "var(--orange)";
  event.currentTarget.style.color = "var(--very-dark-blue)";
}
document.addEventListener("click", (event) => {
  const clickedInsideRating = Array.from(ratingLabels).some((label) =>
    label.contains(event.target)
  );

  if (!clickedInsideRating && event.target !== submitButton) {
    ratingLabels.forEach((label) => {
      label.style.backgroundColor = "";
      label.style.color = "";
    });

    inputs.forEach((input) => {
      input.checked = false;
    });
  }
});

submitButton.addEventListener("click", () => {
  const selectedRating = Array.from(inputs).find((input) => input.checked);

  if (selectedRating) {
    let element = `<div class="thank-you">
                      <img src="images/illustration-thank-you.svg" alt="" />
                      <p id="selected">You selected ${selectedRating.value} out of 5</p>
                      <h1>Thank you!</h1>
                      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                      </p>
                    </div>`;
    section.innerHTML = element;
  } else {
    alert("Please select a rating before submitting.");
  }
});
