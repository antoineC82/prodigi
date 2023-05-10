// Swiper Config
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  speed: 1200,
  effect: 'slide',
  centeredSlides: true,
  slidesPerGroup: 2,
  initialSlide: 1,
  grabCursor: true,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      initialSlide: 0,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 0,
    }
  }
});



if (window.matchMedia("(max-width: 768px)").matches) {
  /* L'affichage est inférieur à 768px de large */
  document.getElementById("aos").removeAttribute("data-aos");
  document.getElementById("aos").removeAttribute("data-aos-duration");
}



$('.carousel').carousel({

pause: "null"

})




const interestedmodal = document.getElementById('interestedModal')
if (interestedmodal) {
  interestedmodal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const profil = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    document.getElementById("floatingSelect").querySelector("option[value='" + profil + "']").selected = true;
  })
}