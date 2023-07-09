import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialIcons from "../../components/SocialIcons";
import { useState } from "react";
import resume from "../about/Gulam_Mustafa_Resume.pdf";

const Landing = () => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "6.2rem",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
    resume_button: {
      width: "fit-content",
      margin: "auto",
      background: "#009e66",
      color: "#f9f9f9",
      marginTop: "40px",
      padding: "12px var(--sm-spacing)",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
    },
    resume_link_2: {
      textDecoration: "none",
      color: "white",
    },
    greetings: {
      fontSize: "20px",
      fontWeight: "400",
      color: "#009e66",
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [downloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    window.open(
      "https://drive.google.com/file/d/1lcgAywGdx6mHlWDof0q7mLd_KLv2WioK/view?usp=sharing",
      "_blank"
    );
    setIsDownloading(false);
  };

  return (
    <>
      <section className="landing" id="home" style={styles.landing}>
        <div className="textContainer" style={styles.textContainer}>
          <motion.h1
            className="name"
            id="user-detail-name"
            style={styles.name}
            ref={ref}
            initial={{ y: "-10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.span className="greetings" style={styles.greetings}>
              Hi, My name is...
            </motion.span>{" "}
            <br /> Gulam Mustafa
          </motion.h1>
          <motion.p
            className="description"
            ref={ref}
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Full Stack Web Developer
          </motion.p>
          <motion.button
            className="resume-button"
            id="resume-button-2"
            style={styles.resume_button}
            ref={ref}
            initial={{ y: "20vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={handleDownload}
          >
            <motion.a
              href={resume}
              id="resume-link-2"
              download="Gulam-Mustafa-Resume"
              style={styles.resume_link_2}
              initial={{ y: "20vw", opacity: 0 }}
              animate={
                inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {downloading ? "Downloading..." : "View Resume"}
            </motion.a>
          </motion.button>
        </div>
        <SocialIcons />
      </section>
    </>
  );
};

export default Landing;
