gsap.registerPlugin(ScrollTrigger);

var targetsEndTrigger = document.querySelectorAll(".endtrigger");

var targetsHeight = document.querySelectorAll(".height");

var targetsBreak = document.querySelectorAll(".break");

targetsEndTrigger.forEach((target, index) => {
  const pinSpacing = index === targetsEndTrigger.length - 1 ? "true" : false;
  const endTrigger = `#card${index + 1}`
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsEndTrigger.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        // end,
        endTrigger,
        markers: true,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsHeight.forEach((target, index) => {
  const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
  const end =
    index === targetsHeight.length - 1
      ? `+=${target.offsetHeight}px`
      : `+=${targetsHeight[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: true,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsBreak.forEach((target, index) => {
  const pinSpacing = index === targetsBreak.length - 1 ? "true" : false;
  const end =
    index === targetsBreak.length - 1
      ? `+=${target.offsetHeight}px`
      : `+=${targetsBreak[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsBreak.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: true,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});


//slick
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 0,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});