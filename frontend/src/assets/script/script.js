$(".owl-carousel").owlCarousel({
  nav: true,
  navText: [
    "<img src='./images/btn-kiri.png'>",
    "<img src='./images/btn-kanan.png'>",
  ],
  dots: false,
  stagePadding: 30,
  center: true,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
