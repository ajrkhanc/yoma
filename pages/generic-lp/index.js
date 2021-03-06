import Link from "next/link"
import Head from "next/head"

export default function GenericLP(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/21/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.leadsquared_EmailAddress.value +
            "&leadsquared-Mobile=" + event.target.phone_number.value +
            "&leadsquared-JobTitle=" + event.target.leadsquared_JobTitle.value +
            "&leadsquared-Company=" + event.target.leadsquared_Company.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.interest_in.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value +
            "&referredby=" + event.target.referredby.value)

    }

    return(
        <>
        <Head>
         <title>Staffing Companies in India| Temporary Staffing| YOMA Business</title>
         <meta name="description" content="Amid the rising complexities, we serve organizations in fulfilling their contractual or temporary workforce by offering third party staffing services. We specialize in seasonal, long term, and project-based manpower requirements."/>
      </Head>
        <section className="hero-section-three bgs-cover overlay pt-40 pb-40 gericlpbg" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                         <div className="hero-content text-white rmb-65">
                           <h2 className="wow fadeInUp delay-0-4s mt-20">Are you looking for Fast and Flexible staffing options?</h2>
                           <h2 className="wow fadeInUp delay-0-4s mt-20"><span className="gericcolor">YOMA???s Temporary Staffing Solutions</span> is what you need.</h2>
                        </div>                      
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-section-form bg-white p-20 wow fadeInRight delay-0-4s">
                           <div className="section-title">
                               <h2 className="mb-0">Business Query</h2>
                           </div>
                            <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                           <form id="contactForm" onSubmit={registerUser}>
                                <div className="row">
                                    <div className="form-group col-sm-6">                                   
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required/>
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="text" name="phone_number" id="phone_number" required="" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*"/>
                                    </div>
                                    <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">                                   
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                    </div>
                                    <div className="form-group col-sm-12">
                                    <select className="form-control" name="interest_in" required>
                                       <option value="">Interested In*</option>
                                       <option value="Interested in knowing more">Interested in knowing more</option>
                                       <option value="Manpower services">Manpower services</option>                                       
                                       <option value="Temporary staffing">Temporary staffing</option>
                                       <option value="Industrial manpower">Industrial manpower</option>
                                       <option value="Staff augmentation">Staff augmentation</option>
                                       <option value="Managed services">Managed services</option>
                                       <option value="Shared resource program">Shared resource program</option>
                                       <option value="Apprenticeship program (NAPS)">Apprenticeship program (NAPS)</option>
                                    </select>                  
                                    </div>

                                    <div className="form-group col-sm-6 d-none">
                                    <select className="form-control" name="referredby">                                        
                                        <option value="From to Paid">From to Paid</option>                                        
                                    </select>                 
                                    </div>

                                    <div className="col-lg-6 d-none">
                                        <div className="form-group">
                                            <label>Business Entity*</label>                              
                                            <select className="form-control" name="Business_Entity">
                                                <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        </div>                                    
                                      
                                    <div className="form-group d-none col-sm-12">                                   
                                    <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="YOMA Business Solutions" className="form-control" />
                                    </div>

                                    <div className="col-sm-12">
                                            <div className="form-group mb-0">
                                                <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message"/>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                </div>                                
                            </form>
                       </div>
                    </div>
                </div>
            </div>
            <div className="hero-line-shape">
                <img src="/assets/images/hero/hero-four-shape.png" alt="Hero line shape"/>
            </div>
        </section>
       
        
        <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-20">
                <h2 className="mainh1"><span>WHY </span> YOMA</h2>
                <p>Founded on an innovative idea that every small or large-scaled business should run like a fortune 500 company, we introduced technology-driven HR services that work with clients all the way.</p>
                <p>With an industry-leading suite of outsourcing and HR solutions that are backed by cutting-edge technology, we provide one-stop-solution to all kinds of people, technology and payment needs of a business. Our application-based, outsourcing and HR solutions are paired with unparalleled service and support, that helps managing recruitment, training, payrolls, payment, and automate complete employee lifecycle management through a single tool.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/general-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>PEOPLE + TECH MODEL</h5>
                            <p>The only Technology driven staffing company in India.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/industrial-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>IN-APP SOLUTIONS</h5>
                            <p>Associate self-help App. Client App</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/staff-augmentation.png" />
                        </div>
                        <div className="feature-content">
                            <h5>CUSTOMIZED REPORTS</h5>
                            <p>Customized Dashboard as per client needs</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/manage-services.png" />
                        </div>
                        <div className="feature-content">
                            <h5>DEDICATED SUPPORT STAFF</h5>
                            <p>Providing custom tailored & result oriented solutions</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/shared-resource-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>COMPLIANCE ADHERENCE</h5>
                            <p>100% Compliance adherence with the clients</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/apprenticeship-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>SPEED & ACCURACY</h5>
                            <p>By using technology as an enabler, we deliver with speed & accuracy</p>
                        </div>
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
               <h2 className="mainh1"><span>OUR</span> SOLUTIONS</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center icon70">
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
               <div className="icon">
                  <img src="/assets/img/icon/general-staffing.png"/>                                
               </div>
               <div className="feature-content">
                  <h5>General Staffing</h5>
                  <p>We provide scalability in operating a larger volume of temporary staffing businesses and help clients to have a visibility of the workflows...</p>
                  <a href="/general-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-4s">
               <div className="icon">
                  <img src="/assets/img/icon/industrial-staffing.png"/>
               </div>
               <div className="feature-content">
                  <h5>Industrial Staffing</h5>
                  <p>We have expertise in hiring reliable and experienced manpower for all kinds of industries and dynamic requirements.</p>
                  <a href="/industrial-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-6s">
               <div className="icon">
                  <img src="/assets/img/icon/staff-augmentation.png"/>
               </div>
               <div className="feature-content">
                  <h5>Staff Augmentation</h5>
                  <p>We work on a sanctioned fixed budget finalized for the project and outsourced employee and provide screened manpower within the desired budgets.</p>
                  <a href="/staff-augmentation" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-8s">
               <div className="icon">
                  <img src="/assets/img/icon/manage-services.png"/>
               </div>
               <div className="feature-content">
                  <h5>Managed Services</h5>
                  <p>We simplify the highly complex functions of staffing, technology-driven employee management, and payment process in a single click.</p>
                  <a href="/managed-services" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-0s">
               <div className="icon">
                  <img src="/assets/img/icon/shared-resource-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Shared Resource Program</h5>
                  <p>With shared resources model, we enable companies to deploy more resources within their budget and target larger areas.</p>
                  <a href="/shared-resources-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Apprenticeship Program (NAPS)</h5>
                  <p>We support the Indian government???s National Apprenticeship Promotion Scheme (NAPS), including all the endeavors like???</p>
                  <a href="/apprenticeship-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
   <div className="container">
      <div className="section-title mb-55">
         <h2 className="mainh1"><span>150+</span> Clients served OR <span>100,000+</span> Access to profiles</h2>
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
   </div>
</section>

<section className="pt-50 pb-50">
    <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
              <h2 className="mainh1">CLIENTS <span>TESTIMONIALS</span></h2>
          </div>
          <div className="clearfix"></div>

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj">
            <div className="testimonial-three-active">            
               <div className="">
                  <div className="author_details">
                    <img className="imgw60" src="/assets/images/testimonials/testi-author-1.jpg" alt="Author"/>
                    <div className="">
                        <h4>Halonix Technologies Pvt.Ltd. Noida</h4>
                        <h5>Deepak Chauhan</h5>
                        <span>(Human Resources)</span>
                    </div>
                  </div>
                  <p>We want you to know that we are very pleased with the quality of service your company provides and appreciate the constant support. We sincerely appreciate your responsiveness and the way you conduct business. We look forward to a successful working relationship with you.</p>
               </div>
            </div>
            </div>
         </div>
         
         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj">
            <div className="testimonial-three-active">            
               <div className="">
                  <div className="author_details">
                    <img className="imgw60" src="/assets/images/testimonials/testi-author-1.jpg" alt="Author"/>
                    <div className="">
                        <h4>Livepure</h4>
                        <h5>Varun Kaushik</h5>
                        <span>(Manager ??? Key Accounts)</span>
                    </div>
                  </div>
                  <p>We really appreciate all of your support in the process of managing the off-role manpower for MT- Livpure. You???ve been right there, helping out wherever and whenever needed for these past few months. I am very appreciative of your assistance and am looking forward to continuing to work together.</p>
               </div>
            </div>
            </div>
         </div>
         
         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj">
            <div className="testimonial-three-active">            
               <div className="">
                  <div className="author_details">
                    <img className="imgw60" src="/assets/images/testimonials/testi-author-1.jpg" alt="Author"/>
                    <div className="">
                        <h4>WaterAid India</h4>
                        <h5>Rahul Jha</h5>
                        <span>(Program Coordinator)</span>
                    </div>
                  </div>
                  <p>YOMA has been an excellent aid for our recruitment needs. Brilliant communication and strong talent are the hallmarks of the service that they provide, and it is a pleasure to have such an asset available to us. I appreciate their quick response, efficiency, and prompt follow-up to my requests.</p>
               </div>
            </div>
            </div>
         </div>
      </div>
    </div>
</section>

        <div className="client-logo-area">
            <div className="container">
               
              <h2 className="mainh1 text-center">Our <span>Clientele</span></h2>
         
                <hr/>
                <div className="logo-carousel-wrap pt-30 pb-40">
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl1.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl2.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl3.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl4.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl5.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl6.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl8.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl9.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl10.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl11.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl12.png" alt="Client Logo"/></a>
                    </div>                    
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl14.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl15.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl16.png" alt="Client Logo"/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}