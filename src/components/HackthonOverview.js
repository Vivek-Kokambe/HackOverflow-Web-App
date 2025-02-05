// import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import groupProgramming from "../assets/img/banner-illustration.png";
import "./HackathonOverview.css";

const HackathonOverview = (props) => {
  // const [show, setShow] = useState(false);

  return (
    <section id="hackathon-overview-section">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={groupProgramming} alt="groupProgramming" />
          </Col>
          <Col lg={6}>
            <h1
          id="green-yellow"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              What is HackOverflow 3.0?
            </h1>

            <p className="hackathon-overview-text text-justify">
              HackOverflow, a 3-day National level hackathon organized by the
              Department of Computer Engineering at PHCET, brings together
              students from all over the country to showcase their skills and
              creativity in software development. The event provides a platform
              for collaboration, learning, and the development of new solutions
              to real-world problems. The hackathon will be held on our 14-acre
              state-of-the-art campus, where food, accommodation, and all other
              necessary facilities will be provided for the participants. We
              will also be providing Goodies, Tshirt and Placement Opportunities
              with participating companies to all participants. (Job Fair)
            </p>
            <div className="counters-grid">
              <div>
                <CountUp
                  start={0}
                  end={1}
                  duration={2.75}
                  suffix="Lakh+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Prize Pool</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={200}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Registerations</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={50}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Teams</p>
              </div>

              <div>
                <CountUp
                  start={0}
                  end={17}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Themes</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={10}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Companies</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={20}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Sponsors</p>
              </div>
            </div>
            <div className="navbar-text flex">
              <a
                href="https://discord.com/invite/Pkp75qysYZ"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#9B96B3] hover:bg-[#891A98] text-white font-bold py-2 px-4 rounded">
                  Join Discord Channel
                </button>
              </a>
            </div>
            {/* <button
              style={{
                background: "#3770ff",
                textAlign: "center",
                color: "white",
              }}
              className="btn"
              onClick={() =>
                window.open("https://discord.com/invite/Pkp75qysYZ", "_blank")
              }
            >
              Join Discord Channel
            </button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HackathonOverview;
