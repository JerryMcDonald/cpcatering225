import React from "react";
import emailjs from 'emailjs-com';

import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import LandingPageHeader from "../components/Headers/LandingPageHeader.js";


function ContactPage() {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_3jfn8sr', 'template_l3zulva', e.target, 'user_8DigZCEjUFfVEnYnS2Upl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }


  return (
    <>
      <ScrollTransparentNavbar />
            {/* // change the landing page header */}

      {/* <LandingPageHeader /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="wrapper" type="primary">
        <p>This is the Contact page</p>
            <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    </>
  );
}

export default ContactPage;