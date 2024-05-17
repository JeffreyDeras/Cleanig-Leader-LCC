let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.jpg`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});