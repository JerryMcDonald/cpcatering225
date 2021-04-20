/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a

                >
 
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}
            &nbsp;&nbsp;&nbsp; 
            <i className="now-ui-icons tech_laptop"></i>
            &nbsp;&nbsp;&nbsp;Coded by{" "}
            <a
              href="https://jerrymcdonald.dev/#/"
              target="_blank"
            >
              JM
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
