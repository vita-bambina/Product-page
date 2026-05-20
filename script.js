const cart = document.querySelector(".cart");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const countText = document.getElementById("count");
const together = document.querySelector(".together");

let count = 0;

// cart click
cart.addEventListener("click", function () {
  alert("Things in cart");
});

// increase
plus.addEventListener("click", function () {
  count++;
  countText.textContent = count;
});

// decrease
minus.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  countText.textContent = count;
});

// add to cart
together.addEventListener("click", function () {
  alert("Successfully Added to cart");
});

// image slider
const content = document.querySelector(".content-img");
const slideall = document.querySelectorAll(".thumb");

slideall.forEach(function (slides) {
  slides.addEventListener("click", function () {
    content.src = slides.src;
  });
});