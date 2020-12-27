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
  }, []);

  return (
    <>
      <div className="home">
        <div className="main-wrapper">
          <div className="sub-wrapper">
            <section className="first">
              <div className="container">
                <div className="header-top">
                  <h2>YUTA ASATO</h2>
                  <h2>PORTFOLIO</h2>
                </div>
                <div className="border-container">
                  <span className="borderLine"></span>
                </div>
                <div className="first-section-content">
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <h1>FULL</h1>
                    <h1 style={{ marginTop: "150px" }}>STACK</h1>
                    <h1 style={{ marginTop: "290px" }}>DEVELOPER</h1>
                  </div>
                  {/* <h3>TOKYO</h3> */}

                  <div className="first-section-img">
                    <img src={require(`../assets/abstract4.jpg`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="first-pseudo"></section> */}
            <section className="second" style={{ marginTop: "100px" }}>
              <div className="container">
                <div className="info-container">
                  <h4>ABOUT ME .</h4>
                  <div className="info-bar">
                    <p>LOCATION</p>
                    <p>EXPERIENCE</p>
                    <p>SKILL</p>
                    <p>SPECIALITY</p>
                  </div>
                  <div className="bd2-container">
                    <span className="bd2"></span>
                  </div>
                  <div className="info-bar2">
                    <p>Tokyo</p>
                    <p>1+ years</p>
                    <p>Full Stack</p>
                    <p>React</p>
                  </div>
                  <div className="bd3-container">
                    <span className="bd3"></span>
                  </div>
                  <div className="intro-text">
                    <h5>PROFILE</h5>
                    <p>
                      An innovative, growth-minded web developer with over a
                      year’s experience in building full stack web applications
                      and a background as a classically trained pianist.
                      Self-taught and highly motivated with a strong desire to
                      keep up with new technologies and a passion for problem
                      solving. Inspired by the parallels between music and
                      programming and creatively driven to write high-quality,
                      reusable code. Proficient in JavaScript, HTML and CSS,
                      with a particular love for React.js.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="third" style={{ marginTop: "100px" }}>
              <div className="container">
                <div className="third-container">
                  <div className="third-header">
                    <h2>MY TOOL BOX</h2>
                  </div>
                  <div className="bd4-container">
                    <span className="bd4"></span>
                  </div>
                  <div className="imgCenter">
                    <img
                      src={require(`../assets/react.jpg`)}
                      alt=""
                      // style={{ minWidth: "450px" }}
                    />
                  </div>
                  <div className="third-img-container">
                    <div className="imgOne">
                      <img src={require(`../assets/javascript.jpg`)} alt="" />
                    </div>
                    <div className="imgTwo">
                      <img
                        src={require(`../assets/css.jpg`)}
                        alt=""
                        style={{ maxWidth: "400px" }}
                      />
                    </div>
                    <div className="imgThree">
                      <img src={require(`../assets/node.jpg`)} alt="" />
                    </div>
                    <div className="imgFour">
                      <img src={require(`../assets/postgres.png`)} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="fourth" style={{ marginTop: "100px" }}>
              <div className="container">
                <div className="fourth-container">
                  <div className="fourth-header">
                    <h2>PROJECTS.</h2>
                  </div>
                  <div className="bd5-container">
                    <span className="bd5"></span>
                  </div>
                  <div className="fourth-content">
                    <a
                      target="blank"
                      style={{ textDecoration: "none" }}
                      href="https://socialmediaapplication.netlify.app/"
                    >
                      <h3>SOCIAL MEDIA APP</h3>
                      <h4>2020</h4>
                      <p>
                        Designed and built a full stack social media web
                        application with full CRUD functionality utilizing React
                        for a responsive client-side UI, React Query for
                        asynchronous data handling and cache management and a
                        server back-end using Node/Express connected to a
                        PostgreSQL database.
                      </p>
                    </a>
                  </div>
                  {/* <div className="fourth-img-container">
                  <img src={require(`../assets/abstract2.jpg`)} alt="" />
                </div> */}
                  <div className="fourth-img-container">
                    <img src={require(`../images/socialmediaapp.jpg`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section
              className="fourth-pseudo"
              style={{ marginTop: "100px" }}
            ></section>
            <section className="fifth" style={{ marginTop: "100px" }}>
              <div className="container">
                <div className="fifth-container">
                  <div className="fifth-content">
                    <a
                      target="blank"
                      style={{ textDecoration: "none" }}
                      href="https://shopifyecommercegatsby.netlify.app/"
                    >
                      <h3>HEADLESS ECOMMERCE STORE</h3>
                      <h4>2020</h4>
                      <p>
                        Designed and built a fully responsive Shopify Plus
                        Headless eCommerce site using a React/Gatsby front-end
                        to achieve high-speed performance. Gatsby GraphQL API
                        was used to connect the client to a Shopify backend. A
                        managed backend to handle the transactional aspects of
                        the site was used which included offsite user account
                        management and offsite checkouts which was achieved
                        using the Shopify API.
                      </p>
                    </a>
                  </div>
                  {/* <div className="fifth-img-container">
                  <img src={require(`../assets/abstract3.jpg`)} alt="" />
                </div> */}
                  <div className="fifth-img-container">
                    <img src={require(`../images/ecommerce.jpg`)} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section
              className="fifth-pseudo"
              style={{ marginTop: "100px" }}
            ></section>
            <section className="sixth" style={{ marginTop: "100px" }}>
              <div className="container">
                <div className="sixth-container">
                  <div className="sixth-content">
                    <a
                      target="blank"
                      style={{ textDecoration: "none" }}
                      href="https://facerecognitionapplication.netlify.app/"
                    >
                      <h3>FACIAL RECOGNITION APP</h3>
                      <h4>2020</h4>
                      <p>
                        Designed and built a facial recognition web application
                        which allows users to submit an image and return a
                        bounding box for each detected human and a list of
                        probability scores on the person’s age, appearance,
                        gender appearance and multicultural appearance using
                        React and the CLARIFAI Predict API.
                      </p>
                    </a>
                  </div>
                  {/* <div className="sixth-img-container">
                  <img src={require(`../assets/abstract4.jpg`)} alt="" />
                </div> */}
                  <div className="sixth-img-container">
                    <img src={require(`../images/facerecog.jpeg`)} alt="" />
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
