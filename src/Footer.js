import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaGlobe, FaApple } from "react-icons/fa";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer__socialMedia">
          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <FontAwesomeIcon
                className="footer__socialIcon"
                icon={faXTwitter}
                color="lightBlue"
              />
            </div>
          </a>

          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <img
                height={20}
                width={20}
                src="https://img.icons8.com/fluency-systems-filled/66a8f0/telegram-app.png"
                alt="telegram-app"
                className="footer__socialIcon"
              />
            </div>
          </a>

          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <FaGlobe className="footer__socialIcon" />
            </div>
          </a>

          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <FaApple className="footer__socialIcon" />
            </div>
          </a>

          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/66a8f0/android-os.png"
                alt="android-os"
              />
            </div>
          </a>

          <a href="/amazon-clone" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/66a8f0/application-window.png"
                alt="application-window"
                className="footer__socialIcon"
              />
            </div>
          </a>
        </div>
        <p className="copyright">Copyright &copy; {today.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
