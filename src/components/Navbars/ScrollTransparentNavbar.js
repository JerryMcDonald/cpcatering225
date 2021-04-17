import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

//css
import "../../assets/css/ccp.css";

import NavLogoCPP from "../../assets/img/logo/NavLogoCPP.png";


function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      {/* remove navbarColor to remove transparancy */}
      <Navbar className={"fixed-top"} color="cpcTeal" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img alt="..." className="logoMain" src={NavLogoCPP}></img>
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown  nav>
                <NavItem
                  caret="true"
                  href="/"
                  role="button"
                  tag={NavLink}
                >
                  <span className="">Home</span>
                </NavItem>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <NavItem
                  caret="true"
                  href="/services"
                  role="button"
                  tag={NavLink}
                >
                  <span className="">Services/Menu</span>
                </NavItem>
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav>
                <NavItem
                  caret
                  href="/menu"
                  role="button"
                  tag={NavLink}
                >
                  <span className="">Menu</span>
                </NavItem>
              </UncontrolledDropdown> */}
              <UncontrolledDropdown nav>
                <NavItem
                  caret="true"
                  href="/About"
                   role="button"
                   tag={NavLink}
                >
                  <span className="">About</span>
                </NavItem>
              </UncontrolledDropdown>
              <UncontrolledDropdown style={{marginRight:"100px"}} nav>
                <NavItem
                  caret="true"
                  href="/contact"
                  role="button"
                  tag={NavLink}
                >
                  <span className="">Contact</span>
                </NavItem>
              </UncontrolledDropdown>
              <UncontrolledDropdown toggler="#example-navbar-warning">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => alert("Possible facebook link")}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => alert("Possible twitter link")}
                      >
                        <i className="fab fa-twitter"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => alert("Possible google plus link")}
                      >
                        <i className="fab fa-google-plus"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => alert("Possible instagram link")}
                      >
                        <i className="fab fa-instagram"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledDropdown>
                
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
