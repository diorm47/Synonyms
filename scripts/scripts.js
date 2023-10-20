// Brand carousel
$(document).ready(function () {
  $(".brand_carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 1000,
  });
});
// Header bg carousel
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

const images = [
  "url(../assets/images/header-bg.png)",
  "url(../assets/images/header-bg-2.jpg)"
];
const imagesMob = [
  "url(../assets/images/header-bg-2.jpg)",
  "url(../assets/images/header-mob.jpg)"
];
let i = 0;

function getImagesArray() {
  return window.innerWidth < 500 ? imagesMob : images;
}

setInterval(() => {
  const currentImages = getImagesArray();
  const nextImage = currentImages[i % currentImages.length];

  if (bg1.style.opacity === "1") {
    bg2.style.backgroundImage = nextImage;
    bg1.style.opacity = "0";
    bg2.style.opacity = "1";
  } else {
    bg1.style.backgroundImage = nextImage;
    bg1.style.opacity = "1";
    bg2.style.opacity = "0";
  }

  i++;
}, 5000);


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const headerCategory = document.querySelector('.header_category');
    const scrollPosition = window.scrollY;
    const elementOffset = headerCategory.offsetTop;
   const nav_wrapper = this.document.querySelector('.main_page_nav')
    if (scrollPosition >= elementOffset) {
      nav_wrapper.classList.add('main_nav_secondary');
    } else {
      nav_wrapper.classList.remove('main_nav_secondary');
    }
  });
});
