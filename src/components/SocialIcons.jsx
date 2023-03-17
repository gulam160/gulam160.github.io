const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        id="contact-github"
        style={styles.icon}
        href="https://github.com/gulam160"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Gulam Mustafa' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        id="contact-linkedin"
        style={styles.icon}
        href="https://www.linkedin.com/in/g-mustafa-s/"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Gulam Mustafa' LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://api.whatsapp.com/send?phone=919555616014"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fab fa-whatsapp"
          aria-hidden="true"
          title="Gulam Mustafa' Whatsapp Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/gulam158"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Gulam Mustafa' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
