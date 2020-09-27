import React, { useEffect } from "react";

//gsap
import { gsap, TimelineMax, TweenLite, ScrollToPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

//Gsap animations
import {
  animateFirst,
  animateSecond,
  animateThird,
  animateFourth,
  animateFourthPseudo,
  animateFifth,
  animateFifthPseudo,
  animateSixth,
  animateSixthPseudo,
} from "../animations";

export const Home = () => {
  useEffect(() => {
    //---scrolltrigger--------------------------------
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
      gsap.registerPlugin(CustomEase);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
    //-----------------------------------
    ///ScrollTrigger Setting----------
    CustomEase.create(
      "smoothScrollEase",
      "M0,0 C0,0 0.19,0.164 0.216,0.182 0.262,0.214 0.364,0.264 0.378,0.316 0.438,0.46 0.459,0.657 0.494,0.786 0.505,0.83 0.794,0.963 0.828,0.972 0.894,0.988 1,1 1,1  "
    );

    //for scrollTo
    const sections = [
      ".first",
      // ".first-pseudo",
      ".second",
      ".third",
      ".fourth",
      ".fourth-pseudo",
      ".fifth",
      ".fifth-pseudo",
      ".sixth",
      ".sixth-pseudo",
    ];
    //scroll trigger defaults
    function goToSection(section, anim) {
      gsap.to(window, {
        scrollTo: {
          y: section,
          autoKill: false,
        },
        duration: 1.5,

        // ease: "smoothScrollEase",
        ease: "Power0.easeNone",
      });
    }

    sections.forEach((section) => {
      const intoAnim = gsap.timeline({ paused: true }).from(section, {
        // yPercent: 50,
        // duration: 1,
      });

      ScrollTrigger.create({
        trigger: section,
        onEnter: () => goToSection(section, intoAnim),
      });
    });
    // //-----------------------------------------------

    //gsap animtaions (animations.js)
    animateFirst(
      ".first-section-img img",
      ".header-top h2",
      ".borderLine",
      ".first-section-content h1",
      ".first-section-content h3"
    );

    animateSecond(
      ".info-container h4",
      ".info-bar p",
      ".info-bar2 p",
      ".intro-text h5",
      ".intro-text p",
      ".bd2",
      ".bd3"
    );

    animateThird(
      ".imgCenter",
      ".imgOne ",
      ".imgTwo",
      ".imgThree",
      ".imgFour",
      ".third-header h2",
      ".bd4"
    );

    animateFourth(
      ".fourth-header h2",
      ".bd5",
      ".fourth-content h3",
      ".fourth-content h4",
      ".fourth-content p",
      ".fourth-img-container img"
    );

    animateFourthPseudo(".fourth-img-container img");

    animateFifth(
      ".fifth-content h3",
      ".fifth-content h4",
      ".fifth-content p",
      ".fifth-img-container img"
    );

    animateFifthPseudo(".fifth-img-container img");

    animateSixth(
      ".sixth-content h3",
      ".sixth-content h4",
      ".sixth-content p",
      ".sixth-img-container img"
    );

    animateSixthPseudo(".sixth-img-container img");
  });

  return (
    <>
      <div className="preload" style={{ display: "none" }}>
        <img src={require(`../images/beijing.webp`)} alt="" />
        <img src={require(`../images/austin.webp`)} alt="" />
      </div>
      <div className="home">
        <div className="main-wrapper">
          <div className="sub-wrapper">
            <section className="first">
              <div className="container">
                <div className="header-top">
                  <h2>CONCEPT SERIES</h2>
                  <h2>CASE ONE</h2>
                </div>
                <div className="border-container">
                  <span className="borderLine"></span>
                </div>
                <div className="first-section-content">
                  <h1>Archetype</h1>
                  <h3>DESIGN</h3>
                  {/* <div className="first-section-img">
                  <img src={require(`../assets/main1.jpg`)} alt="" />
                </div> */}
                  <div className="first-section-img">
                    <img src={require(`../images/dallas.webp`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="first-pseudo"></section> */}
            <section className="second">
              <div className="container">
                <div className="info-container">
                  <h4>WHO WE ARE .</h4>
                  <div className="info-bar">
                    <p>PLACE</p>
                    <p>PLACE</p>
                    <p>PLACE</p>
                    <p>PLACE</p>
                  </div>
                  <div className="bd2-container">
                    <span className="bd2"></span>
                  </div>
                  <div className="info-bar2">
                    <p>PLACE</p>
                    <p>PLACE</p>
                    <p>PLACE</p>
                    <p>PLACE</p>
                  </div>
                  <div className="bd3-container">
                    <span className="bd3"></span>
                  </div>
                  <div className="intro-text">
                    <h5>TITLE</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras fermentum est ac erat rutrum maximus ut eu neque.
                      Cras id ipsum at orci rutrum condimentum eu at ex.
                      Praesent luctus eros ante, tristique dapibus mi eleifend
                      id. Donec sit amet diam vel est cursus sollicitudin sit
                      amet ac turpis. Nulla facilisi. Sed dictum pretium leo,
                      dictum ultricies magna placerat eget.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="third">
              <div className="container">
                <div className="third-container">
                  <div className="third-header">
                    <h2>EXPLORE</h2>
                  </div>
                  <div className="bd4-container">
                    <span className="bd4"></span>
                  </div>
                  <div className="imgCenter">
                    <img src={require(`../images/city1.jpg`)} alt="" />
                  </div>
                  <div className="third-img-container">
                    <div className="imgOne">
                      <img src={require(`../images/city1.jpg`)} alt="" />
                    </div>
                    <div className="imgTwo">
                      <img src={require(`../images/city1.jpg`)} alt="" />
                    </div>
                    <div className="imgThree">
                      <img src={require(`../images/city1.jpg`)} alt="" />
                    </div>
                    <div className="imgFour">
                      <img src={require(`../images/city1.jpg`)} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="fourth">
              <div className="container">
                <div className="fourth-container">
                  <div className="fourth-header">
                    <h2>IMAGES SECT.</h2>
                  </div>
                  <div className="bd5-container">
                    <span className="bd5"></span>
                  </div>
                  <div className="fourth-content">
                    <h3>Exhibit One</h3>
                    <h4>TITLE</h4>
                    <p>
                      Etiam purus erat, convallis vitae consectetur ac, congue
                      at arcu. Vestibulum felis orci, ultricies ac enim
                      bibendum, cursus accumsan velit. Sed a sapien eu nunc
                      sollicitudin euismod. Praesent nec leo eleifend, venenatis
                      dui quis, dapibus elit. Praesent finibus aliquet neque sit
                      amet molestie.{" "}
                    </p>
                  </div>
                  {/* <div className="fourth-img-container">
                  <img src={require(`../assets/abstract2.jpg`)} alt="" />
                </div> */}
                  <div className="fourth-img-container">
                    <img src={require(`../images/newyork.webp`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="fourth-pseudo"></section>
            <section className="fifth">
              <div className="container">
                <div className="fifth-container">
                  <div className="fifth-content">
                    <h3>Exhibit Two</h3>
                    <h4>TITLE</h4>
                    <p>
                      {" "}
                      Etiam purus erat, convallis vitae consectetur ac, congue
                      at arcu. Vestibulum felis orci, ultricies ac enim
                      bibendum, cursus accumsan velit. Sed a sapien eu nunc
                      sollicitudin euismod. Praesent nec leo eleifend, venenatis
                      dui quis, dapibus elit. Praesent finibus aliquet neque sit
                      amet molestie.{" "}
                    </p>
                  </div>
                  {/* <div className="fifth-img-container">
                  <img src={require(`../assets/abstract3.jpg`)} alt="" />
                </div> */}
                  <div className="fifth-img-container">
                    <img src={require(`../images/london.jpg`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="fifth-pseudo"></section>
            <section className="sixth">
              <div className="container">
                <div className="sixth-container">
                  <div className="sixth-content">
                    <h3>Exhibit Three</h3>
                    <h4>TITLE</h4>
                    <p>
                      {" "}
                      Etiam purus erat, convallis vitae consectetur ac, congue
                      at arcu. Vestibulum felis orci, ultricies ac enim
                      bibendum, cursus accumsan velit. Sed a sapien eu nunc
                      sollicitudin euismod. Praesent nec leo eleifend, venenatis
                      dui quis, dapibus elit. Praesent finibus aliquet neque sit
                      amet molestie.{" "}
                    </p>
                  </div>
                  {/* <div className="sixth-img-container">
                  <img src={require(`../assets/abstract4.jpg`)} alt="" />
                </div> */}
                  <div className="sixth-img-container">
                    <img src={require(`../images/austin.webp`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="sixth-pseudo"></section>
          </div>
        </div>
      </div>
    </>
  );
};
