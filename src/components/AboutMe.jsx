import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Gulam_Mustafa_Resume.pdf";

const AboutMe = ({ name, email, location, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Gulam_Mustafa_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <img src={aboutMeImg} alt={name} />
        <div className="contentContainer">
          <h4>Nice to meet you</h4>
          <h5>I am Full Stack Web and I create amazing web applications!</h5>
          <div className="contentDescription">
            <p>{brand}</p>
          </div>
          <div className="infoContainer">
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Name:</span>
                <p>Gulam Mustafa</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Phone:</span>
                <p>+91 9555616014</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Email:</span>
                <p>
                  <a href={`mailto:${email}`}>gulam.mu159@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Location:</span>
                <p>Mumbai, Maharastra</p>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button
              className="btn downloadCV"
              onClick={handleDownload}
              disabled={downloading}
            >
              {downloading ? "Downloading..." : "Download Resume"}
            </button>{" "}
            <SocialIcons />
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default AboutMe;
