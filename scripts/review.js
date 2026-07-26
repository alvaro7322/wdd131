const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
localStorage.setItem("numReviews-ls", numReviews);

const reviewDisplay = document.querySelector("#reviewCount");
if (reviewDisplay) {
    reviewDisplay.textContent = numReviews;
}