document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".reviews_body__card");
    const scrollLeft = document.querySelector(".scroll-button-left");
    const scrollRight = document.querySelector(".scroll-button-right");
    const cards = document.querySelectorAll(".reviews_body__card");
    let currentIndex = cards.length - 1;
  
    scrollRight.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCardVisibility();
    });
  
    scrollLeft.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCardVisibility();
    });
  
    function updateCardVisibility() {
      cards.forEach((card, index) => {
        if (index === currentIndex) {
          card.classList.add("show-card");
        } else {
          card.classList.remove("show-card");
        }
      });
    }
  });