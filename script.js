const cart = document.querySelector(".cart");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const countText = document.getElementById("count");
const together = document.querySelector(".together");

let count = 0;

cart.addEventListener("click", function () {
  alert("Things in cart");
});

plus.addEventListener("click", function () {
  count = count + 1; // same as count ++
  countText.textContent = count;
});

minus.addEventListener("click", function () {
  count = count - 1;

  if (count < 0) {
    count = 0;
  }

  countText.textContent = count;
});

together.addEventListener("click", function () {
  alert("Successfully Added to cart");
});

const content = document.querySelector(".content-img");
const slideall = document.querySelectorAll(".thumb");

slideall.forEach(function (slides) {
 slides.addEventListener("click", function () {
    content.src = slides.src;
  });
});