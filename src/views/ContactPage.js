import React from "react";
import emailjs from "emailjs-com";

import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import ContactPageHeader from "../components/Headers/ContactPageHeader.js";

function ContactPage() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jfn8sr",
        "template_l3zulva",
        e.target,
        "user_8DigZCEjUFfVEnYnS2Upl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <ScrollTransparentNavbar />
      {/* // change the landing page header */}

      <ContactPageHeader />
      <div className="main">
        <div className="contact-content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">Send us a message</h2>
                <p className="description">
                  You can contact us with anything related to your Event. We'll
                  get in touch with you as soon as possible. <br></br>
                  <br></br>
                </p>
                <Form id="contact-form" method="post" role="form">
                  <label>Your name</label>
                  <InputGroup className={nameFocus ? "input-group-focus" : ""}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      aria-label="Your Name..."
                      autoComplete="name"
                      placeholder="Your Name..."
                      type="text"
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                    ></Input>
                  </InputGroup>
                  <label>Email address</label>
                  <InputGroup className={emailFocus ? "input-group-focus" : ""}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      aria-label="Email Here..."
                      autoComplete="email"
                      placeholder="Email Here..."
                      type="email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <label>Phone</label>
                  <InputGroup
                    className={numberFocus ? "input-group-focus" : ""}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons tech_mobile"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      autoComplete="number"
                      placeholder="Number Here..."
                      type="text"
                      onFocus={() => setNumberFocus(true)}
                      onBlur={() => setNumberFocus(false)}
                    ></Input>
                  </InputGroup>
                  <FormGroup>
                    <label>Your message</label>
                    <Input
                      id="message"
                      name="message"
                      rows="6"
                      type="textarea"
                    ></Input>
                  </FormGroup>
                  <div className="submit text-center">
                    <Button
                      className="btn-raised btn-round"
                      color="info"
                      defaultValue="Contact Us"
                      type="submit"
                    >
                      Contact Us
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <div style={{paddingTop:"200px"}}   className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons tech_mobile"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Christina  <br></br>
                      +40 762 321 762 <br></br>
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default ContactPage;
