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
  "url(../assets/images/header-bg-2.jpg)",
];
let i = 0;

setInterval(() => {
  const nextImage = images[i % images.length];
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


// function toggleMenu() {
//   var element = document.querySelector(".nav_list_wrapper");
//   element.classList.toggle("mob_menu_wrapper");
// }
