import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/H0 3.0 assets/3.0 logo 2025.png";
import ProgressBar from "./progressBar/ProgressBar";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Update active link based on location.pathname
    const currentPath = location.pathname.toLowerCase();
    setActiveLink(currentPath === "/" ? "home" : currentPath.substr(1));
  }, [location.pathname]);

  const getLinkHref = (section) => {
    return location.pathname === "/" ? `/#${section}` : `/#${section}`;
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="nav-logo">
            <a href="/#home" alt="Logo">
              <img src={logo} alt="Logo" id="logo" />
            </a>
          </Navbar.Brand>

          {/* New button "Brchure mobile button" only shown in mobile view */}
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              fontWeight: "300",
            }}
            className="hover:bg-[#5B8F81] text-white font-bold py-2 px-4 rounded d-md-none ml-auto"
            onClick={() => window.open("", "_blank")}
          >
            Brochure
          </button>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href={getLinkHref("home")}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("schedule")}
                className={
                  activeLink === "schedule"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("schedule")}
              >
                Schedule
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("themes")}
                className={
                  activeLink === "themes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("themes")}
              >
                Themes
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("sponsors")}
                className={
                  activeLink === "sponsors"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("sponsors")}
              >
                Sponsors
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("about")}
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("about")}
              >
                About
              </Nav.Link>

              {/* <Nav.Link
                className={
                  activeLink === "team" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("team")}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/team"
                  className={
                    activeLink === "team" ? "active navbar-link" : "navbar-link"
                  }
                >
                  Teams
                </Link>
              </Nav.Link> */}

              <Nav.Link
                className={
                  activeLink === "gallery"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("gallery")}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/gallery"
                  className={
                    activeLink === "gallery"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                >
                  Gallery
                </Link>
              </Nav.Link>
            </Nav>
            <div className="navbar-text flex justify-end">
              <a
                href="http://hackoverflow3.tech/docs/publicityBrochure.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#9B96B3] hover:bg-[#5B8F81] text-white font-bold py-2 px-4 rounded">
                  Brochure
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
        <ProgressBar />
      </Navbar>
    </>
  );
};
