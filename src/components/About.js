import "./About.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useEffect, useRef } from "react";

// import TrackVisibility from "react-on-screen";

const About = () => {
  const mapElement = useRef();

  useEffect(() => {
    let maps = tt.map({
      key: "66AS5Y04A9wZlAR4jt93xH6dCVAwLzUr",
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      container: mapElement.current,
      center: [73.1762426, 18.8934723],
      zoom: 16,
    });
    var marker = new tt.Marker()
      .setLngLat([73.1762426, 18.8934723])
      .addTo(maps);
    // setMap(maps);
    return () => maps.remove();
  }, []);
  return (
    <>
      <section id="about" className="py-4">
        <div className="container py-6">
          <div className="row">
            <div className="col-lg-6 col-sm-12 clg-desc">
              <h1 className="about-us-h2" id="green-yellow">About PHCET</h1>
              <p
                className="about-us-p text-justify"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                  margin: "0",
                }}
              >
                Pillai HOC College of Engineering and Technology is proud to
                offer a state-of-the-art learning environment for students with
                a passion for technology and innovation. Our 14-acre campus
                boasts top-of-the-line amenities, including a 3,000 square-foot
                facility with spacious classrooms, well-equipped laboratories
                and workshops, modern computer facilities, and an extensive
                library. Additionally, our distinguished faculty includes
                seasoned professors who are dedicated to fostering a stimulating
                and nurturing environment for students.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 clg-map">
              <h1 id="green-yellow">How to reach..</h1>
              <p>
                <div className="maps-card" id="map" ref={mapElement} />
                <div className="maps-button navbar-text">
                  <a
                    href="https://www.google.com/maps/place/Pillai+HOC+College+Of+Engineering+%26+Technology/@18.8932468,73.1718668,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7e6af4a9b7a47:0x30dbd3b0d3c14416!8m2!3d18.8932418!4d73.1763515"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="open-maps bg-[#9B96B3] hover:bg-[#891A98] text-white font-bold py-2 px-4 rounded">
                      Open Maps
                    </button>
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
