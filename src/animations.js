import {
  gsap,
  TimelineMax,
  TimelineLite,
  TweenLite,
  ScrollToPlugin,
} from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//-----------------
//first section
export const animateFirst = (img, h2, border, h1, h3) => {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".first",
    },
  });
  //set
  tl1.set(img, { opacity: 0 });

  //timeline
  tl1
    .from(h2, 1, {
      opacity: 0,
      y: 100,
      stagger: 0.4,
    })
    .from(border, 1, { width: "0em" }, "-=1.2")
    .from(
      [h1, h3],
      1,
      {
        opacity: 0,
        y: 50,
        rotationY: 20,
        stagger: 0.2,
        ease: "Power2.easeInOut",
      },
      ".-=.5"
    )
    .to(img, 1.2, { opacity: 1, ease: "Power2.easeInOut" }, "-=1");
};

//second section---------------------------------
export const animateSecond = (h4, info1, info2, introH5, introP, bd2, bd3) => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".second",
    },
  });

  tl2
    .staggerFrom(
      [h4, info1, info2, introH5, introP],
      0.7,
      {
        opacity: 0,
        y: 100,
        skewY: 3,
        ease: "Power2.easeInOut",
      },
      0.2
    )
    .from(
      [bd2, bd3],
      0.5,
      {
        width: "0em",
        stagger: 0.8,
        ease: "Power2.easeInOut",
      },
      "+.8"
    );
};

//thirdSection-----------------------------------
export const animateThird = (center, one, two, three, four, h2, border) => {
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".third",
    },
  });

  // TweenLite.set(center, { xPercent: -80, yPercent: -50 });
  // TweenLite.set(center, { opacity: 0 })\

  tl3.set(h2, { opacity: 0.001, y: 100, skewY: 3 });
  tl3.set(center, { opacity: 0.001, y: 200 });
  tl3.set(one, { opacity: 0.001, y: 100, xPercent: 80, yPercent: 80 });
  tl3.set(two, { opacity: 0.001, xPercent: -80, yPercent: 120 });
  tl3.set(three, { opacity: 0.001, xPercent: 80, yPercent: -50 });
  tl3.set(four, { opacity: 0.001, xPercent: -80, yPercent: -50 });

  tl3
    .to(h2, 1.4, {
      opacity: 1,
      y: 0,
      skewY: 0,
      ease: "Power2.easeInOut",
    })
    .from(
      border,
      1,
      {
        width: "0rem",
        ease: "Power3.easeInOut",
      },
      "-=.7"
    )
    .to(
      center,
      2,
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
      },
      "-=1"
    )
    .to(
      center,
      1.2,
      {
        opacity: 0.001,
        ease: "Power2.easeInOut",
      },
      "-=0.3"
    )
    .to(
      one,
      2,
      {
        opacity: 1,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        ease: "Power3.easeInOut",
      },
      "-=1.3"
    )
    .to(
      two,
      2,
      {
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "Power3.easeInOut",
      },
      "-=1.5"
    )
    .to(
      three,
      2,
      {
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "Power3.easeInOut",
      },
      "-=1.6"
    )
    .to(
      four,
      2,
      {
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "Power2.easeInOut",
      },
      "-=1.7"
    )
    .to(
      center,
      2.5,
      {
        opacity: 1,
        ease: "Power3.easeInOut",
      },
      "-=1.3"
    );
};

//fourthSection
export const animateFourth = (h2, border, h3, h4, p, img) => {
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".fourth",
    },
  });

  tl4.set(img, { opacity: 0.01, scale: 1.4 });

  tl4
    .staggerFrom(
      [h2, h3, h4, p],
      1.3,
      {
        opacity: 0.001,
        y: 110,
        skewY: 3,
        ease: "Power2.easeInOut",
      },
      0.3
    )
    .from(
      border,
      1,
      {
        width: "0rem",
        ease: "Power3.easeInOut",
      },
      "-=1.5"
    )
    .to(
      img,
      1,
      {
        opacity: 1,
        ease: "Power2.easeInOut",
      },
      "<1"
    );
};

//fourthPsuedoSection (image only)
export const animateFourthPseudo = (img) => {
  const tl4p = gsap.timeline({
    scrollTrigger: {
      trigger: ".fourth-pseudo",
    },
  });

  tl4p.to(img, 2, {
    scale: 1,
    ease: "Power3.easeInOut",
  });
};

//fifth section
export const animateFifth = (h3, h4, p, img) => {
  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".fifth",
    },
  });

  tl5.set(img, { opacity: 0.001, scale: 1.4 });

  tl5.set([h3, h4, p], { opacity: 0.001, y: 130, skewY: 3 });

  tl5
    .staggerTo(
      [h3, h4, p],
      1.9,
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        ease: "Power2.easeInOut",
      },
      0.2
    )
    .to(
      img,
      1.2,
      {
        opacity: 1,
        ease: "Power2.easeInOut",
      },
      "<1.5"
    );
};

//fifthPsuedoSection (image only)
export const animateFifthPseudo = (img) => {
  const tl5p = gsap.timeline({
    scrollTrigger: {
      trigger: ".fifth-pseudo",
    },
  });

  tl5p.to(img, 2, {
    scale: 1,
    ease: "Power2.easeInOut",
  });
};

//sixthSection
export const animateSixth = (h3, h4, p, img) => {
  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sixth",
    },
  });

  //image
  tl6.set(img, { opacity: 0.01 });
  tl6.set(img, { scale: 1.4 });

  tl6
    .staggerFrom(
      [h3, h4, p],
      1.9,
      {
        opacity: 0.001,
        y: 120,
        skewY: 4,
        ease: "Power2.easeInOut",
      },
      "0.2"
    )
    .to(
      img,
      1,
      {
        opacity: 1,
        ease: "Power2.easeInOut",
      },
      "<1.5"
    );
};

//sixthPsuedoSection (image only)
export const animateSixthPseudo = (img) => {
  const tl6p = gsap.timeline({
    scrollTrigger: {
      trigger: ".sixth-pseudo",
    },
  });

  tl6p.to(img, 2, {
    scale: 1,
    ease: "Power3.easeInOut",
  });
};
