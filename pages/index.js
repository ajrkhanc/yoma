import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {

   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/18/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                  window.location.href = "/thank-you-lp"
               }, 3000);

            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value +
         "&leadsquared-EmailAddress=" + event.target.email.value +
         "&leadsquared-Mobile=" + event.target.number.value +
         "&leadsquared-Notes=" + event.target.message.value +
         "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

   }

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
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         }
      ]
   };

   return (
      <>
         <Head>
            <title>Best HR Outsourcing Company in India - YOMA Business Solution</title>
            <meta property="og:title" content="Best HR Outsourcing Company in India - YOMA Business Solution" />
            <meta name="keywords" content="hr outsourcing services, hr outsourcing company, best hr outsourcing company, best hr solutions company" />
            <meta name="description" content="Yoma is the best HR outsourcing company in India that help organizations to grow in an easier way. We help you with staff management, Payroll, Compliance,  etc. Enquire now." />
            <meta name="Classification" content="hr outsourcing services" />
            <meta property="og:locale" content="en_us" />
            <meta property="og:title" content="Best HR Outsourcing Company in India - Yoma Business Solution" />
            <meta property="og:site_name" content="Yoma Business Solutions Pvt. Ltd" />
            <meta property="og:url" content="https://yomabusinesssolutions.com/" />
            <meta property="og:description" content="Yoma is the best HR outsourcing company in India that help organizations to grow in an easier way. We help you with staff management, Payroll,   Compliance, etc. Enquire now." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png" />
            <meta itemprop="Best HR Outsourcing Company in India - Yoma Business Solution" />
            <meta itemprop="description" content="Yoma is the best HR outsourcing company in India that help organizations to grow in an easier way. We help you with staff management, Payroll,   Compliance, etc. Enquire now." />
            <meta itemprop="image" content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png" />
            <meta name="Classification" content="hr outsourcing services" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@yomabusinesssolutions" />
            <meta name="twitter:title" content="Best HR Outsourcing Company in India - Yoma Business Solution" />
            <meta name="twitter:description" content="Yoma is the best HR outsourcing company in India that help organizations to grow in an easier way. We help you with staff management, Payroll,   Compliance, etc. Enquire now." />
            <meta name="twitter:image:src" content="https://yomabusinesssolutions.com/assets/img/logo/yoma-logo.png" />
            <meta name="twitter:domain" content="https://yomabusinesssolutions.com/" />
            <meta name="google-site-verification" content="R-j0Qb4sr2VF0rghX-27HQTrFHmKfY2CuO0R11rE02c" />
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
                   "https://yomamultinational.com/general-staffing/",
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

            <script
               dangerouslySetInnerHTML={{
                  __html: `
              {
               "@context": "https://schema.org",
               "@type": "WebSite",
               "name": "Yoma Business Solutions Pvt. Ltd",
               "alternateName": "Yoma Business Solutions",
               "url": "https://yomamultinational.com//",
               "potentialAction": [
                   {
                       "@type": "SearchAction",
                       "target": "https://yomamultinational.com//{search_term_string}",
                       "query-input": "required name=search_term_string"
                   },
                   {
                       "@type": "SearchAction",
                       "target": "https://yomamultinational.com/{search_term_string}",
                       "query-input": "required name=search_term_string"
                   }
               ]
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

            <script
               dangerouslySetInnerHTML={{
                  __html: `
              {
               "@context": "https://schema.org",
               "@type": "Organization",
               "name": "Yoma Business Solutions Pvt. Ltd",
               "url": "https://yomamultinational.com/",
               "logo": "https://yomamultinational.com/assets/img/logo/yoma-logo.png",
               "contactPoint": [
                   {
                       "@type": "ContactPoint",
                       "telephone": " +91-844-818 8503",
                       "contactType": "customer service",
                       "email": "yoma.info@byldgroup.com",
                       "areaServed": [
                           "IN"
                       ],
                       "availableLanguage": [
                           "English"
                       ]
                   }
               ]
           }
           
          `,
               }}
            />

            <script
               dangerouslySetInnerHTML={{
                  __html: `
              {"@context":"https://schema.org/","@type":"CreativeWorkSeries","name":"Best HR Outsourcing Company in India","aggregateRating":{"@type":"AggregateRating","ratingValue":"3.9","bestRating":"5","ratingCount":"177"}}
          `,
               }}
            />

         </Head>

         <section className="hero-section paddingb">
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
         </section>

         <section className="about-section pt-50 pb-20">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="wow fadeInLeft delay-0-2s animated animateleft">
                        <img src="/assets/img/indac.jpg" alt="hr outsourcing services" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                        <div className="section-title">
                           <p className='mainh1 font36c'>Welcome to The Yoma Business Solutions</p>
                           <h1 className="mainh1 font28c"><span>India’s</span> Best HR Outsourcing Company</h1>
                        </div>
                        <p className="text-justify">
                           We have been the best HR outsourcing company for the past 2 decades and we have been assisting companies reach new heights with our services that include Staffing solutions and Employee management!
                        </p>

                        <p className="text-justify">
                           We possess the dexterity to provide you with the best HR outsourcing services that will help your company reach the apex!
                        </p>
                        <p>
                           Now you can sit back and relax while we assist your staff starting with seamless onboarding to informative exit interviews. Because we stand out as the Best HR solutions company.
                        </p>

                     </div>
                  </div>
               </div>
            </div>
         </section>



         <section className="featured-section bgs-cover pt-20 pb-10 ">
            <div className="container">
               <div className="row justify-content-center">
                  <div className='col-sm-12'><hr></hr></div>
                  <div className="col-lg-6 col-md-8 col-sm-10">
                     <div className="section-title text-center mb-35">
                        <h2 className="mainh1"><span>Who</span> we Work with</h2>
                     </div>
                  </div>
               </div>
               <div className="row align-items-center">
                  <div className="col-sm-12">
                     
                     <Slider {...logos}>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/DABUR.png" alt='DABUR'/>
                        </div>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/ITC.png" alt='ITC'/>
                        </div>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/LAKME.png" alt='LAKME'/>
                        </div>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/PAYTM.png" alt='PAYTM'/>
                        </div>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/SWIGGY.png" alt='SWIGGY'/>
                        </div>
                        <div className="logoc wow fadeInUp delay-0-2s">
                           <img src="/assets/img/logo/hml/ZOMATO.png" alt='ZOMATO'/>
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
                        <img src="/assets/img/37216.jpg" alt="hr outsourcing company" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                        <div className="section-title">
                           <h2 className="mainh1"><span>We Help</span> You Run Your Business Efficiently</h2>
                        </div>
                        <p className="text-justify">
                        Are you ready to sit back and give all your HR related stress to us? Now focus on strategy making and reaching to the apex while we give seamless employee management, Payroll management and much more! Or you are a growing company with no experience in HR resources? Find yourself the best strategic relationship of an experienced HR partners. Yoma Staffing Solutions is here give you easy HR solutions where we are with you and your employees from onboarding to exit!
                        </p>
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
                        <h2 className="mainh1"><span>Our</span> HR Solutions</h2>
                     </div>
                  </div>
               </div>
               <div className="row align-items-center icon70">
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-0-2s">
                        <div className="icon">
                           <img src="/assets/img/icon/general-staffing.png" alt='General Staffing'/>
                        </div>
                        <div className="feature-content">
                           <h4>General Staffing</h4>
                           <p>With the General Staffing solution, we offer the ability to efficiently expand temporary staffing operations on a larger scale while granting clients clear...</p>
                           <a href="/general-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-0-4s">
                        <div className="icon">
                           <img src="/assets/img/icon/industrial-staffing.png" alt='Industrial Staffing'/>
                        </div>
                        <div className="feature-content">
                           <h4>Industrial Staffing</h4>
                           <p>Do you need Technical Staff, Specialized workforce or just unskilled labour force? We got your back with our easy staffing solutions...</p>
                           <a href="/industrial-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-0-6s">
                        <div className="icon">
                           <img src="/assets/img/icon/staff-augmentation.png" alt='Staff Augmentation'/>
                        </div>
                        <div className="feature-content">
                           <h4>Staff Augmentation</h4>
                           <p>Operating within a sanctioned fixed budget for the project and outsourced personnel, we ensure the delivery of meticulously screened manpower...</p>
                           <a href="/staff-augmentation" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-0-8s">
                        <div className="icon">
                           <img src="/assets/img/icon/manage-services.png" alt='Managed Services'/>
                        </div>
                        <div className="feature-content">
                           <h4>Managed Services</h4>
                           <p>We are committed to providing you and your employees with the best HR experience and thus we assist your company with Managed Services...</p>
                           <a href="/managed-services" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-1-0s">
                        <div className="icon">
                           <img src="/assets/img/icon/shared-resource-program.png" alt='Shared Resource Program'/>
                        </div>
                        <div className="feature-content">
                           <h4>Shared Resource Program</h4>
                           <p>With our Shared Resources Program we evaluate feasibility with clarity, design future processes meticulously, and ensure seamless integration...</p>
                           <a href="/shared-resources-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="feature-item wow fadeInUp delay-1-2s">
                        <div className="icon">
                           <img src="/assets/img/icon/apprenticeship-program.png" alt='Apprenticeship Program (NAPS)'/>
                        </div>
                        <div className="feature-content">
                           <h4>Apprenticeship Program (NAPS)</h4>
                           <p>We as a country are one of the youngest nations, where 62% of the population is working age. We, as a HR outsourcing company, believe in training them...</p>
                           <a href="/apprenticeship-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="about-two pt-40 rpt-80 pb-120 rpb-100">
            <div className="container">
               <div className="about-wrap pt-20">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s animated animateleft">
                           <img src="/assets/images/about/about-two.jpg" alt="About" />
                        </div>
                     </div>
                     <div className="col-lg-6 align-self-end">
                        <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s animated animateright">
                           <div className="section-title mb-35">
                              <h2 className="mainh1"><span>Get to Know the</span> Best HR Solution Company</h2>
                           </div>
                           <p>Born from an innovative notion that businesses of all sizes deserve the prowess of Fortune 500 giants, we've harnessed tech-powered HR services to walk hand in hand with our clients. With a cutting-edge suite of HR outsourcing solutions, we present a comprehensive answer to the following:</p>
                           <p>Effortlessly meeting your demand for third-party payroll solutions, we proudly stand among India's elite payroll software companies, thanks to our seamless and exceptional offerings-</p>
                           
                           <ul className="list-style-three mt-15">
                              <li>Leaders of end-to-end employee management in India</li>
                              <li>The only company in india to offer tech-based staffing and managed solutions</li>
                              <li>India’s fastest growing staffing solutions company</li>
                           </ul>
                           <a href="/about-us" className="theme-btn style-three mt-25">Read More →</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
            <div className="container">
               <div className="section-title mb-55">
                  <h3 className='h3cc mainh1'><span>Why Choose Us as</span> Your Hiring Partner?</h3>
                  <p>
                  Ranked amongst the Top-payroll Software companies in India, we can ease your HR related stress with dexterity! Now you can sit back and relax while we give you a seamless HR experience. - End-to-end employee management -Tech Based Staffing and managed solutions to maintain authenticity and accuracy in data -HR outsourcing services along-with cutting edge technology to assist you with the best
                  </p>
                  {/* <h2 className="mainh1">OUR <span>STRENGTHS</span></h2> */}
               </div>
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="success-item circle-style wow fadeInUp delay-0-2s color-one counted animated animateUP">
                        <span className="count-text plus" data-speed="5000" data-stop="150">150</span>
                        <span>Clients served</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="success-item circle-style wow fadeInUp delay-0-4s color-two counted animated animateUP">
                        <span className="count-text plus" data-speed="5000" data-stop="100,000">100,000</span>
                        <span>Access to profiles</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="success-item circle-style wow fadeInUp delay-0-6s color-one counted animated animateUP">
                        <span className="count-text plus" data-speed="5000" data-stop="12">12</span>
                        <span>Presence across major cities</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="success-item circle-style wow fadeInUp delay-0-8s color-two counted animated animateUP">
                        <span className="count-text plus" data-speed="5000" data-stop="450">450</span>
                        <span>Deployment locations</span>
                     </div>
                  </div>
               </div>
               <div className="testimonial-wrap1 row">
                  <div className='col-sm-12'>
                  <h3 className='h3cc mainh1'><span>Our</span> Prime Motivators!</h3>
                  </div>

                  <div className="wow fadeInLeft delay-0-2s col-sm-4">
                     <div className="testimonial-item mpaj cclm">
                        <h3 className="h3themecolor">Client speak</h3>
                        <div className="testimonial-two-active">
                           <Slider {...settings1}>
                              <div>
                                 <div className="author-description">
                                    <div className="designation">
                                       <h5>Deepak Chauhan</h5>
                                       <span>Halonix Technologies Pvt.Ltd. (Human Resources)</span>
                                    </div>
                                    {/* <i className="fas fa-quote-right"></i> */}
                                 </div>
                                 <p>We want you to know that we are very pleased with the quality of service your company provides and appreciate the constant support. We sincerely appreciate your responsiveness and the way you conduct business. We look forward to a successful working relationship with you.</p>
                              </div>

                              <div>
                                 <div className="author-description">
                                    <div className="designation">
                                       <h5>Varun Kaushik</h5>
                                       <span>Livepure (Manager - Key Accounts)</span>
                                    </div>
                                    {/* <i className="fas fa-quote-right"></i> */}
                                 </div>
                                 <p>We really appreciate all of your support in the process of managing the off-role manpower for MT- Livpure. You’ve been right there, helping out wherever and whenever needed for these past few months. I am very appreciative of your assistance and am looking forward to continuing to work together.</p>
                              </div>

                              <div>
                                 <div className="author-description">
                                    <div className="designation">
                                       <h5>Rahul Jha</h5>
                                       <span>WaterAid India (Program Coordinator)</span>
                                    </div>
                                    {/* <i className="fas fa-quote-right"></i> */}
                                 </div>
                                 <p>YOMA has been an excellent aid for our recruitment needs. Brilliant communication and strong talent are the hallmarks of the service that they provide, and it is a pleasure to have such an asset available to us. I appreciate their quick response, efficiency, and prompt follow-up to my requests.</p>
                              </div>
                           </Slider>

                        </div>
                     </div>
                  </div>

                  <div className="wow fadeInLeft delay-0-2s col-sm-4">
                     <div className="testimonial-item mpaj cclm">
                        <h3 className="h3themecolor">Associates speak</h3>
                        <div className="testimonial-two-active">
                           <Slider {...settings2}>

                              <div className="testimonial-two-item">
                                 <div className="author-description">
                                    <div className="designation">
                                       <h5>Surendra Kumar</h5>
                                       <span>Halonix Technologies Pvt. Ltd.</span>
                                    </div>
                                    {/* <i className="fas fa-quote-right"></i> */}
                                 </div>
                                 <p>I am Surendra Kumar working in Halonix Technologies Pvt. Ltd through YOMA. I have been associated with YOMA since April 2018. My experience of working with YOMA has been good. Through YOMA's Proanto app, I get my payslip every month easily. I would like to be in connection with YOMA in the future as well.</p>
                              </div>

                              <div className="testimonial-two-item">
                                 <div className="author-description">
                                    <div className="designation">
                                       <h5>Harpreet Singh</h5>
                                       <span>Halonix technologies Pvt. Ltd.</span>
                                    </div>
                                    {/* <i className="fas fa-quote-right"></i> */}
                                 </div>
                                 <p>I am Harpreet Singh working in Halonix Technologies Pvt. Ltd through YOMA Business. I have been associated with YOMA since 2018. My experience with YOMA has been great. I do not face any problem as they resolve it at the right time. I would like to remain connected with YOMA in the coming times.</p>
                              </div>
                           </Slider>
                        </div>
                     </div>
                  </div>

                  <div className="wow fadeInLeft delay-0-2s col-sm-4">
                     <div className="testimonial-item mpaj cclm">
                        <h3 className="h3themecolor">Success story</h3>
                        <div className="testimonial-two-active">
                           <div className="testimonial-two-item">
                              <div className="author-description">
                                 <div className="designation">
                                    <h5>FMCG industry</h5>
                                 </div>
                                 {/* <i className="fas fa-quote-right"></i> */}
                              </div>
                              <p>One of the leading cosmetic brands was facing a high attrition rate in a project. They were facing problems such as decreased productivity, declining profits, increased expense and so on.</p>
                              <p>We helped them identify the concerned areas of the SSRs and the working model. We proposed them the complete managed services which resulted in higher productivity, 15% reduction in attrition rates and more.</p>
                           </div>


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

                           <form id="contactForm" className="contact-form" onSubmit={registerUser}>
                              <div className="row">
                                 <div className="col-sm-6">
                                    <div className="form-group">
                                       <label htmlFor="name">Your Name</label>
                                       <input type="text" id="name" name="name" className="form-control" placeholder="Name*" required/>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="form-group">
                                       <label htmlFor="email">Your email address</label>
                                       <input type="email" id="email" name="email" className="form-control" placeholder="Work Email/Email*" required/>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="form-group">
                                       <label htmlFor="number">Phone No.</label>
                                       <input type="number" id="number" name="number" className="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required/>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="form-group">
                                       <label htmlFor="number">Message</label>
                                       <input type="text" id="message" name="message" className="form-control" placeholder="Message" />
                                    </div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="form-group">
                                       <label htmlFor="service">Business Entity*</label>
                                       <select id="service" name="leadsquared_mx_Business_Entity">
                                          <option value="YOMA Business Solutions" selected="">YOMA Business Solutions</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-sm-12">
                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message" />
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
                                       <h5><a href="callto:+91 844 8188 503">+91 844 8188 503</a></h5>
                                    </div>
                                 </li>
                                 <li>
                                    <i className="fas fa-envelope"></i>
                                    <div className="content">
                                       <span>Write to Us</span>
                                       <h5><a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></h5>
                                    </div>
                                 </li>
                                 <li>
                                    <i className="fas fa-clock"></i>
                                    <div className="content">
                                       <span>Office hours</span>
                                       <h5>Mon-Fri:- 9:30 AM  - 6:30 PM</h5>
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
      </>
   )
}
