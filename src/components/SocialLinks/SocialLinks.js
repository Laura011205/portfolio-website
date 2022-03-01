import githubIcon from "../../assets/github-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import mailIcon from "../../assets/mail-icon.svg";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="social-links-item" id="mail">
        <a href="mailto:lulaura011205@gmail.com">
          <img src={mailIcon} alt="mail-icon" className="social-links-icon" />
        </a>
      </div>
      <div className="social-links-item">
        <a href="https://www.linkedin.com/in/lauralu1219/">
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="social-links-icon"
          />
        </a>
      </div>
      <div className="social-links-item">
        <a href="https://github.com/Laura011205">
          <img
            src={githubIcon}
            alt="github-icon"
            className="social-links-icon"
          />
        </a>
      </div>
      <div className="social-links-item" id="instagram">
        <a href="https://www.instagram.com/laurd_l">
          <img
            src={instagramIcon}
            alt="instagram-icon"
            className="social-links-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
