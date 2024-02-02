document.addEventListener("DOMContentLoaded", function () {
    const TestimonialSwiper = new Swiper(".testimonial_wrapper", {
        spaceBetween: 40,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
});