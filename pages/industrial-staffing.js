import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";

export default function Home() {
  const registerUser = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/18/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/thank-you-lp";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "leadsquared-FirstName=" +
        event.target.name.value +
        "&leadsquared-EmailAddress=" +
        event.target.email.value +
        "&leadsquared-Mobile=" +
        event.target.number.value +
        "&leadsquared-Notes=" +
        event.target.message.value +
        "&leadsquared-mx_Business_Entity=" +
        event.target.leadsquared_mx_Business_Entity.value
    );
  };

  const registusergeneral = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/1988/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/thank-you-lp";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "leadsquared-FirstName=" +
        event.target.name.value +
        "&leadsquared-EmailAddress=" +
        event.target.email.value +
        "&leadsquared-Mobile=" +
        event.target.number.value +
        "&leadsquared-Notes=" +
        event.target.message.value
    );
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var logos = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
        Industrial Staffing Solutions in India | Industrial Staffing Services
        </title>
        <meta
          property="og:title"
          content="Best HR Outsourcing Company in India - YOMA Business Solution"
        />
        <meta
          name="keywords"
          content=" industrial staffing, industrial staffing services, industrial staffing solutions, industrial staffing company"
        />
        <meta
          name="description"
          content=" One of the best Industrial Staffing Agencies in India, Yoma understands the needs of your company and offers a complete staffing solutions tailored for industrial sectors.
          "
        />
        <meta name="Classification" content="hr outsourcing services" />
        <meta name="robots" content="INDEX, FOLLOW"/>

        <meta property="og:locale" content="en_us" />
        <meta
          property="og:title"
          content="Best Industrial Staffing Service Provider in India - YOMA"
        />
        <meta
          property="og:site_name"
          content="Yoma Business Solutions Pvt. Ltd"
        />
        <meta property="og:url" content="https://yomabusinesssolutions.com/industrial-staffing" />
        <meta
          property="og:description"
          content="Looking for Industrial Staffing Services or people to work temporarily or permanently for industries like manufacturing, construction, etc. Contact us now."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png"
        />
        <meta itemprop="Best Industrial Staffing Service Provider in India - YOMA" />
        <meta
          itemprop="description"
          content="Looking for Industrial Staffing Services or people to work temporarily or permanently for industries like manufacturing, construction, etc. Contact us now"
        />
        <meta
          itemprop="image"
          content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png"
        />
        <meta name="Classification" content="hr outsourcing services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yomabusinesssolutions"/>
        <meta
          name="twitter:title"
          content="Best Industrial Staffing Service Provider in India - YOMA/"
        />
        <meta
          name="twitter:description"
          content=" Looking for Industrial Staffing Services or people to work temporarily or permanently for industries like manufacturing, construction, etc. Contact us now."
        />
        <meta
          name="twitter:image:src"
          content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png"
        />
        <meta
          name="twitter:domain"
          content="https://yomabusinesssolutions.com/"
        />
        <link rel="canonical" href="https://yomabusinesssolutions.com/industrial-staffing" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
               "@context": "https://schema.org",
               "@type": "SiteNavigationElement",
               "name": [
                   "Home",
                   "About Us",
                   "Who We Are",
                   "Mission, Vision & Values",
                   "Life At Yoma",
                   "General Staffing",
                   "Industrial Staffing",
                   "Staff Augmentation",
                   "Managed Services",
                   "Shared Resource Program",
                   "Apprenticeship Program (NAPS)",
                   "CLIENT CORNER",
                   "Client Testimonials",
                   "Our Clientele",
                   "Scrap Book",
                   "ASSOCIATE CORNER",
                   "Job Openings",
                   "Get A Job",
                   "BECOME A PARTNER",
                   "CAREERS",
                   "BLOG",
                   "CONTACT US"
               ],
               "url": [
                   "https://yomamultinational.com/",
                   "https://yomamultinational.com/about-us/",
                   "https://yomamultinational.com/about-us#whowewre/",
                   "https://yomamultinational.com/about-us#missionvision/",
                   "https://yomamultinational.com/life-at-yoma/",
                   "https://yomamultinational.com/general-staffingNew/",
                   "https://yomamultinational.com/industrial-staffing/",
                   "https://yomamultinational.com/staff-augmentation/",
                   "https://yomamultinational.com/managed-services/",
                   "#",
                   "https://yomamultinational.com/shared-resources-program/",
                   "https://yomamultinational.com/apprenticeship-program/",
                   "https://yomamultinational.com/client-corner/",
                   "https://yomamultinational.com/client-corner#clientspeak/",
                   "https://yomamultinational.com/client-corner#ourclientele/",
                   "https://yomamultinational.com/scrap-book/",
                   "https://yomamultinational.com/associate-corner/",
                   "https://yomamultinational.com/associate-corner#jobopening/",
                   "https://yomamultinational.com/get-job/",
                   "https://yomamultinational.com/become-a-partner-page/",
                   "https://yomamultinational.com/current-openings/",
                   "https://yomamultinational.com/blogs/",
                   "https://yomamultinational.com/contact-us/"
               ]
           }
           
          `,
          }}
        />

        <script  type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "YOMA Business Solutions",
              "url": "https://yomabusinesssolutions.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yomabusinesssolutions.com/industrial-staffing{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
               "@context": "https://schema.org",
               "@type": "LocalBusiness",
               "name": "Yoma Business Solutions Pvt. Ltd",
               "image": "https://yomamultinational.com/assets/img/logo/yoma-logo.png",
               "url": "https://yomamultinational.com/",
               "telephone": " +91-844-818 8503",
               "address": {
                   "@type": "PostalAddress",
                   "streetAddress": " Unit No. 120-121, First Floor Vipul Trade Centre Sohna Road, Sector 48 Opposite Vatika Business Park",
                   "postalCode": "122018",
                   "addressCountry": "IN",
                   "addressRegion": "Gurugram, Haryana "
               },
               "priceRange": "$$"
           }
           
          `,
          }}
        />

        <script  type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YOMA Business Solutions",
              "alternateName": "YOMA",
              "url": "https://yomabusinesssolutions.com/",
              "logo": "https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "1800 102 1345",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": ["en","Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/YOMABusinessSolutions",
                "https://twitter.com/YomaSolutions",
                "https://www.instagram.com/yoma.business",
                "https://www.youtube.com/user/yomamultinational",
                "https://www.linkedin.com/company/yomabusinesssolutions/"
              ]
            }
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            {"@context":"https://schema.org/","@type":"CreativeWorkSeries","name":"Best Industrial Staffing Service Provider in India - YOMA","aggregateRating":{"@type":"AggregateRating","ratingValue":"3.9","bestRating":"5","ratingCount":"177"}}
          `,
          }}
        />
        
      </Head>

      {/* <section className="hero-section paddingb">
            <Slider {...settings}>
               <div>
                  <img src="/assets/img/banner/banner1.jpg" />
               </div>
               <div>
                  <img src="/assets/img/banner/managed-services.jpg" />
               </div>
               <div>
                  <img src="/assets/img/banner/industrial-staffing-bg.jpg" />
               </div>
            </Slider>
         </section> */}

      <section className="about-section pt-50 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                <div className="section-title">
                  {/* <p className='mainh1 font36c'>Welcome to The Yoma Business Solutions</p> */}
                  <h2 className="mainh1">
                    <span>Utilise</span> the best Industrial staffing services
                    with YOMA!
                  </h2>
                </div>
                <p className="text-justify">
                  In the fast-paced world of industry, finding the right
                  workforce is crucial for success. That's where YOMA's
                  industrial staffing services shine. Our commitment to
                  excellence sets us apart as leaders in providing the best
                  industrial staffing solutions.
                </p>

                <p className="text-justify">
                  By customising our services to meet the unique demands of your
                  sector, YOMA ensures that you get more than just employees;
                  you get strategic partners in your business growth.
                </p>

                <p className="text-justify">
                  From skilled trades to managerial roles, our approach to
                  industrial staffing guarantees a workforce that aligns
                  seamlessly with your objectives
                </p>

                {/* <p className="text-justify">
                           We possess the dexterity to provide you with the best HR outsourcing services that will help your company reach the apex!
                        </p>
                        <p>
                           Now you can sit back and relax while we assist your staff starting with seamless onboarding to informative exit interviews. Because we stand out as the Best HR solutions company.
                        </p> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary custom-btn1 enable-form"
                  type="button"
                >
                  Book Consultation
                </button>
              </div>
              <div class="booking-form" id="bookingform">
                <div className="contact-section-form px-15 mt-2 rpx-0 rmb-50 wow fadeInLeft delay-0-2s animated animateleft boxDesign margin-0 px-18">
                  <div className="section-title mb-20">
                    <h3>Book Consultation with our Staffing Expert</h3>
                  </div>

                  <form
                    id="contactForm"
                    className="contact-form"
                    onSubmit={registusergeneral}
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">E-mail Id</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Work Email/Email*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="number">Contact Number</label>
                          <input
                            type="number"
                            id="number"
                            name="number"
                            className="form-control"
                            maxlength="10"
                            minlength="10"
                            pattern="[0-9]*"
                            placeholder="Contact Number*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="number">Message</label>
                          <input
                            type="text"
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Message"
                          />
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <input
                          id="submitbuttonform"
                          type="submit"
                          className="theme-btn btnwidth"
                          value="Book Now"
                        />
                        <div className="clearfix"></div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section bgs-cover pt-20 pb-10 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <hr></hr>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title text-center mb-35">
                <h2 className="mainh1">
                  <span>Who</span> We Work with
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12">
              <Slider {...logos}>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/DABUR.png" alt="DABUR" />
                </div>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/ITC.png" alt="ITC" />
                </div>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/LAKME.png" alt="LAKME" />
                </div>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/PAYTM.png" alt="PAYTM" />
                </div>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/SWIGGY.png" alt="SWIGGY" />
                </div>
                <div className="logoc wow fadeInUp delay-0-2s w-200">
                  <img src="/assets/img/logo/hml/ZOMATO.png" alt="ZOMATO" />
                </div>
              </Slider>
              <br></br>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pt-50 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="wow fadeInLeft delay-0-2s animated animateleft">
                {/* <img src="/assets/img/37216.jpg" alt="hr outsourcing company" /> */}
                <img
                  src="/assets/img/professional-staffing.jpg"
                  alt="hr outsourcing company"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                <div className="section-title">
                  {/* <h2 className="mainh1"><span>We Help</span> You Run Your Business Efficiently</h2> */}
                  <h2 className="mainh1">What is Industrial Staffing?</h2>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    Industrial staffing services are essential for businesses in
                    industries like manufacturing, construction, and
                    engineering. These services, offered by companies
                    specializing in industrial staffing, help businesses find
                    the right people for their jobs. Here's why industrial
                    staffing is crucial:
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    1. <b>Flexible Workforce:</b> Industrial staffing services
                    allow businesses to adjust their workforce based on their
                    needs. This flexibility is handy for handling changes in
                    production demands or seasonal variations.
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    2. <b>Tailored Solutions: </b>Industrial staffing companies
                    provide customized solutions. They understand the specific
                    skills and qualifications needed for different roles in the
                    industrial sector.{" "}
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    3. <b>Efficiency Boost: </b>By partnering with an industrial
                    staffing company, businesses can improve their efficiency
                    and productivity. These services streamline the hiring
                    process and ensure that workers meet industry standards and
                    safety requirements.{" "}
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    4. <b>Diverse Industries: </b>Industrial staffing caters to
                    various industries, ensuring that businesses get the right
                    personnel with the appropriate skills for their specific
                    field.
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    5. <b>Training Programs: </b>Many industrial staffing
                    services offer training programs to enhance the skills of
                    their workers. This helps create a workforce that is not
                    only skilled but also adaptable to different tasks.
                  </p>
                </div>

                <div class="ellipsis-container">
                  <p class="text-justify elllipse-text mb-1">
                    In summary, industrial staffing services act as valuable
                    partners for businesses, helping them navigate workforce
                    challenges and ensuring they have the right people for the
                    job.
                  </p>
                </div>
                <span class="expand-button">
                  Read More <i class="fas fa-arrow-right ml-1 font-13"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title text-center mb-35">
        <h2 className="mainh1">
          <span>​​Onboarding</span> to Exit We Manage the Entire Employee
          Lifecycle{" "}
        </h2>
      </div>

      <section className="services-section-two bg-blue pb-60 pt-50 pb-21">
        <div className="container">
          <div className="">
            <div className="row justify-content-center slider-container">
              {/* <div className="col-sm-12 text-center">
                            <p className="whitep">
                            Amid the rising complexities, we serve organizations in fulfilling their contractual or <b>temporary staffing</b> by offering third-party staffing services. <br></br>We specialize in seasonal, long-term, and project-based manpower requirements.
                            </p>
                            <p className="whitep2c pb-20">We manage the entire lifecycle of an employee, from his/her onboarding to exit, including:</p>
                        </div> */}
              {/* <div className="clearfix"></div>*/}
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-0-7s animated animateUP mb-0">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/payrolls.png"
                    />
                  </div>
                  <h6>
                    <a>Payrolls</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-0-8s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/documentation.png"
                    />
                  </div>
                  <h6>
                    <a>Documentation</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-0-9s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/statutory-compliance.png"
                    />
                  </div>
                  <h6>
                    <a>Statutory Compliance</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-1-0s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/incentives.png"
                    />
                  </div>
                  <h6>
                    <a>Incentives</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-1-1s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/disbursement.png"
                    />
                  </div>
                  <h6>
                    <a>Disbursement</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-1-2s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/exit-formalities.png"
                    />
                  </div>
                  <h6>
                    <a>Exit Formalities</a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-12 mycall7">
                <div className="service-style-two wow fadeInUp delay-1-2s animated animateUP">
                  <div className="icon icon-center">
                    <img
                      className="imgicon70"
                      src="/assets/img/icon/closures.png"
                    />
                  </div>
                  <h6>
                    <a>Closures</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pt-50 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                <div className="section-title">
                  {/* <h2 className="mainh1"><span>We Help</span> You Run Your Business Efficiently</h2> */}
                  <h2 className="mainh1">
                    <span>Why Industrial Staffing</span> is Important for
                    Industries?
                  </h2>
                </div>

                <div class="ellipsis-container1">
                  <p class="text-justify mb-1">
                    Industrial staffing services have become increasingly
                    important for businesses. Industrial staffing bridges the
                    gap between demand and supply in the labour market, ensuring
                    that organisations have access to a skilled and flexible
                    workforce precisely when they need it.{" "}
                  </p>
                  <ul className="p-8">
                    <li className="list text-justify">
                      One key advantage of engaging an industrial staffing
                      company lies in its ability to provide timely and
                      cost-effective solutions.{" "}
                    </li>
                    <li className="list text-justify">
                      Industries often experience fluctuations in demand, and
                      having access to a temporary workforce through industrial
                      staffing services allows companies to scale their
                      workforce up or down as needed.{" "}
                    </li>
                    <li className="list text-justify">
                      Industrial staffing excels in managing production peaks,
                      accommodating seasonal demand, and responding to
                      unforeseen challenges, ensuring that operational
                      continuity is maintained.
                    </li>
                    <li className="list text-justify elllipse-text1">
                      Outsourcing staffing concerns to a specialized agency
                      enables businesses to streamline their human resource
                      processes, reduce administrative burdens, and concentrate
                      on enhancing their operational efficiency. YOMA,, uses its
                      industry knowledge and network to identify top talent,
                      ensuring that client organisations can maintain high
                      standards of productivity and quality. These services
                      provide a strategic approach to workforce management,
                      offering the flexibility and expertise needed to navigate
                      difficulties in the industrial landscape.
                    </li>
                    <li className="list text-justify elllipse-text1">
                      {" "}
                      By partnering with an industrial staffing company,
                      organizations can optimize their workforce, respond to
                      market dynamics, and ultimately achieve sustainable
                      success in a competitive environment.
                    </li>
                    <li className="list text-justify elllipse-text1">
                      {" "}
                      Industrial staffing solutions cover a broad spectrum of
                      roles, including production workers, machine operators,
                      logistics coordinators, and maintenance technicians.
                    </li>
                    <li className="list text-justify elllipse-text1">
                      {" "}
                      Similarly,YOMA ensures the availability of temporary staff
                      , as well as permanent staff industries that can meet
                      demand without compromising quality.
                    </li>
                  </ul>
                </div>
                <span class="expand-button1">
                  Read More <i class="fas fa-arrow-right ml-1 font-13"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                <img src="/assets/img/new-img.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
        <div className="container">
          <div className="section-title mb-55">
            <h3 className="h3cc mainh1">
              <span>Why We Stand Out as</span> Best Industrial Staffing Partners
            </h3>
            <p>
              Ranked amongst the Top-payroll Software companies in India, we can
              ease your HR related stress with dexterity! Now you can sit back
              and relax while we give you a seamless HR experience. - End-to-end
              employee management -Tech Based Staffing and managed solutions to
              maintain authenticity and accuracy in data -HR outsourcing
              services along-with cutting edge technology to assist you with the
              best
            </p>
            {/* <h2 className="mainh1">OUR <span>STRENGTHS</span></h2> */}
          </div>
          <div className="row slider-container">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item circle-style wow fadeInUp delay-0-2s color-one counted animated animateUP">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="150"
                >
                  150
                </span>
                <span>Clients served</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item circle-style wow fadeInUp delay-0-4s color-two counted animated animateUP">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="100,000"
                >
                  100,000
                </span>
                <span>Access to profiles</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item circle-style wow fadeInUp delay-0-6s color-one counted animated animateUP">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="12"
                >
                  12
                </span>
                <span>Presence across major cities</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item circle-style wow fadeInUp delay-0-8s color-two counted animated animateUP">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="450"
                >
                  450
                </span>
                <span>Deployment locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section bgs-cover pt-40 homeservicebg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title text-center mb-35">
                <h2 className="mainh1">
                  <span>Types</span> of Staff We Provide{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center icon70">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/general-staffing.png"
                    alt="General Staffing"
                  />
                </div>
                <div className="feature-content">
                  <h4>General Staffing</h4>
                  <p>
                    Amid the rising complexities, we serve organisations in
                    fulfilling their contractual or temporary staffing by
                    offering third-party staffing services. We specialise in
                    general staffing, seasonal, long-term, and project-based
                    manpower requirements.
                  </p>
                  <a href="/general-staffing" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-4s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/industrial-staffing.png"
                    alt="Industrial Staffing"
                  />
                </div>
                <div className="feature-content">
                  <h4>Industrial Staffing</h4>
                  <p>
                    Whether you require technical expertise, a specialized
                    workforce, or unskilled labor, our comprehensive staffing
                    solutions have you covered. Additionally, our expertise
                    extends to industrial staffing, ensuring that your
                    specific....
                  </p>
                  <a href="/industrial-staffing" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/staff-augmentation.png"
                    alt="Staff Augmentation"
                  />
                </div>
                <div className="feature-content">
                  <h4>Staff Augmentation</h4>
                  <p>
                    Staff augmentation is a flexible outsourcing strategy that
                    helps you hire talent across profiles and verticals. You can
                    personally choose the candidates as per your budget and keep
                    your hiring costs of one of the best staffing....
                  </p>
                  <a href="/staff-augmentation" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-8s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/manage-services.png"
                    alt="Managed Services"
                  />
                </div>
                <div className="feature-content">
                  <h4>Managed Services</h4>
                  <p>
                    We are committed to providing you and your employees with
                    the best HR experience and thus we assist your company with
                    Managed Services....
                  </p>
                  <a href="/managed-services" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-1-0s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/shared-resource-program.png"
                    alt="Shared Resource Program"
                  />
                </div>
                <div className="feature-content">
                  <h4>Shared Resource Program</h4>
                  <p>
                    As a nation with a demographic advantage, boasting 62% of
                    population, YOMA firmly believe in not just employing, but
                    in actively....
                  </p>
                  <a href="/shared-resources-program" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-1-2s new-shadow">
                <div className="icon">
                  <img
                    src="/assets/img/icon/apprenticeship-program.png"
                    alt="Apprenticeship Program (NAPS)"
                  />
                </div>
                <div className="feature-content">
                  <h4>Apprenticeship Program (NAPS)</h4>
                  <p>
                    Unlike unpaid internships, apprenticeships offer valuable
                    work experience with the added benefit of earning a salary,
                    making them....
                  </p>
                  <a href="/apprenticeship-program" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*//new sctn add// */}
      <section className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title text-center mb-35">
                <h2 className="mainh1">
                  <span>Industries</span> we Serve?
                </h2>
              </div>
            </div>
          </div>

          <div class="new-slick">
            <div className="row mb-3">
              <div class="box-button col-md-3">Manufacturing</div>
              <div class="box-button col-md-3">Construction</div>
              <div class="box-button col-md-3">Warehouse and Distribution</div>
              <div class="box-button col-md-3">
                Logistics and Transportation{" "}
              </div>
            </div>
            <div className="row mb-3">
              <div class="box-button col-md-3">Mining</div>
              <div class="box-button col-md-3">Oil and Gas </div>
              <div class="box-button col-md-3">Automotive</div>
              <div class="box-button col-md-3">Agriculture</div>
            </div>
            <div className="row mb-3">
              <div class="box-button col-md-3">Renewable Energy </div>
              <div class="box-button col-md-3">Textile and Apparel </div>
              <div class="box-button col-md-3">Food Processing </div>
              <div class="box-button col-md-3">
                Chemical and Pharmaceutical{" "}
              </div>
            </div>
            <div className="row mb-4">
              <div class="box-button col-md-3">Healthcare </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
        <div className="container">
          <div className="section-title text-center mb-35">
            <h2 className="mainh1">
              <span> Why </span> Choose Us
            </h2>
          </div>
          <div className="row justify-content-center slider-container">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi1.png" />
                </div>
                <div className="feature-content">
                  <p>
                    Only HR and outsourcing company to offer people + in-house
                    technology module for temporary staffing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi2.png" />
                </div>
                <div className="feature-content">
                  <p>Adherence to statutory compliance and regulations</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi3.png" />
                </div>
                <div className="feature-content">
                  <p>Fully automated system and processes</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi4.png" />
                </div>
                <div className="feature-content">
                  <p>Customer care support with helpline numbers</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi5.png" />
                </div>
                <div className="feature-content">
                  <p>Operations across pan India, in more than 24 states</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi6.png" />
                </div>
                <div className="feature-content">
                  <p>Client and employee dashboards</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi7.png" />
                </div>
                <div className="feature-content">
                  <p>Wide range of manpower pool available anytime</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                <div className="icon icon-center">
                  <img className="imgicon70" src="/assets/img/icon/whyi8.png" />
                </div>
                <div className="feature-content">
                  <p>
                    Rich experience in serving large MNCs and wide range of
                    industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-four pt-70 rpt-50 pb-70 rpb-70">
        <div className="container">
          <div className="contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white">
            <div className="row">
              <div className="col-lg-7">
                <div className="contact-section-form px-15 rpx-0 rmb-50 wow fadeInLeft delay-0-2s animated animateleft">
                  <div className="section-title mb-20">
                    <h3>Book Your Free HR Consultation</h3>
                  </div>

                  <form
                    id="contactForm"
                    className="contact-form"
                    onSubmit={registerUser}
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">Your email address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Work Email/Email*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="number">Phone No.</label>
                          <input
                            type="number"
                            id="number"
                            name="number"
                            className="form-control"
                            maxlength="10"
                            minlength="10"
                            pattern="[0-9]*"
                            placeholder="Phone No.*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="number">Message</label>
                          <input
                            type="text"
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="service">Business Entity*</label>
                          <select
                            id="service"
                            name="leadsquared_mx_Business_Entity"
                          >
                            <option value="YOMA Business Solutions" selected="">
                              YOMA Business Solutions
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <input
                          id="submitbuttonform"
                          type="submit"
                          className="theme-btn btnwidth"
                          value="Send Message"
                        />
                        <div className="clearfix"></div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-image-number style-two bgs-cover overlay wow fadeInRight delay-0-2s animated homecontactbg">
                  <div className="contact-informations text-white">
                    <h3>Don't hesitate to contact us</h3>
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-phone-alt"></i>
                        <div className="content">
                          <span>Call Us</span>
                          <h5>
                            <a href="callto:+91 844 8188 503">
                              +91 844 8188 503
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <div className="content">
                          <span>Write to Us</span>
                          <h5>
                            <a href="mailto:yoma.info@byldgroup.com">
                              yoma.info@byldgroup.com
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>
                        <div className="content">
                          <span>Office hours</span>
                          <h5>Mon-Fri:- 9:30 AM - 6:30 PM</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*new Faq section*/}
      <section className="Generalfaq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title text-center mb-35">
                <h2 className="mainh1">
                  <span>General </span> Faqs
                </h2>
              </div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="card border-0 mb-2 card-bg">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i class="fas fa-plus float-right"></i>
                    1. What industries does YOMA specialize in for industrial
                    staffing?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  YOMA covers manufacturing, logistics, energy, construction,
                  and more.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2  card-bg">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i class="fas fa-plus float-right"></i>
                    2. How does YOMA find quality candidates?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  We screen candidates rigorously for skills and experience.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i class="fas fa-plus float-right"></i>
                    3. Can YOMA tailor services for my company's needs?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  Yes, we customize solutions for your industry and goals.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg">
              <div class="card-header" id="headingFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i class="fas fa-plus float-right"></i>
                    4. How does YOMA ensure safety and compliance?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="collapseFour"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  We provide ongoing safety training and monitor compliance.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg">
              <div class="card-header" id="headingFive">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <i class="fas fa-plus float-right"></i>
                    5. How quickly can YOMA provide staffing solutions?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="collapseFive"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  We act promptly without compromising quality for urgent needs.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg d-none">
              <div class="card-header" id="headingSix">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <i class="fas fa-plus float-right"></i>
                    6. What roles can YOMA fill in the industrial sector?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="collapseSix"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  Roles like production workers, machine operators, quality
                  control, logistics, and maintenance.{" "}
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg d-none">
              <div class="card-header" id="headingSeven">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <i class="fas fa-plus float-right"></i>
                    7. How does YOMA keep up with industry trends?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="collapseSeven"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  We stay updated on trends and technology through continuous
                  team training.{" "}
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg d-none">
              <div class="card-header" id="headingEight">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    <i class="fas fa-plus float-right"></i>
                    8. Does YOMA offer permanent placements?
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="collapseEight"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  Yes, we cover both temporary and permanent staffing needs.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg d-none">
              <div class="card-header" id="headingNine">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                  >
                    <i class="fas fa-plus float-right"></i>
                    9. How does YOMA manage payroll for staff?
                  </button>
                </h2>
              </div>

              <div
                id="collapseNine"
                class="collapse"
                aria-labelledby="collapseNine"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  We handle payroll efficiently with automated systems.
                </div>
              </div>
            </div>
            <div class="card border-0 mb-2 card-bg d-none">
              <div class="card-header" id="headingTen">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link text-decoration-none btn-block text-left text-light p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="true"
                    aria-controls="collapseTen"
                  >
                    <i class="fas fa-plus float-right"></i>
                    10. Can YOMA help with HR beyond staffing?
                  </button>
                </h2>
              </div>

              <div
                id="collapseTen"
                class="collapse"
                aria-labelledby="collapseTen"
                data-parent="#accordionExample"
              >
                <div class="card-body cardbody-bg">
                  Yes, we offer HR services like benefits administration and
                  consulting.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              class="btn btn-outline-primary mt-4 mb-4"
              id="showMoreBtn"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
