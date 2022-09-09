
$(document).ready(function () {

  //slick library for Meet our team sector
  $('.multiple-items').slick({
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  });

  $('.slick-next').click(() => $('.multiple-items').slick('slickNext'));
  $('.slick-prev').click(() => $('.multiple-items').slick('slickPrev'));

  //faq functionality

  $('#paragraph2, #paragraph3').hide()
  $('.card').click(function () {
    $(this).find('.card-body').toggle("slow")
  }
  );

});

