(() => {
  if (
    !document.querySelector(
      "#es-rc #es-rc-content #esColorsSwiper.swiper-initialized"
    )
  ) {
    const swiper = new Swiper("#es-rc #es-rc-content #esColorsSwiper", {
      enabled: false, // start disabled for mobile
      slidesPerView: 1,
      loop: true,
      authoHeight: true,
      autoplay: true,
      pagination: {
        el: "#es-swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#es-button-next",
        prevEl: "#es-button-prev",
      },
      breakpoints: {
        992: {
          enabled: true,
        },
      },
    });
  }
})();
