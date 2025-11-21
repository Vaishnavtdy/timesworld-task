import LinkedinIcon from "../../assets/icons/linkedin.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import YTIcon from "../../assets/icons/youtube.png";
import { Button } from "react-bootstrap";
import "./layout.css";

export default function Footer() {
  return (
    <footer className="py-6 mt-5 mb-5 footer">
      <div className="container text-center">
        <div className="social-login-buttons d-flex justify-content-center gap-3">
          <Button variant="outline-secondary" className="social-btn rounded-circle">
            <img src={FacebookIcon} alt="Facebook" />
          </Button>
          <Button variant="outline-secondary" className="social-btn rounded-circle">
            <img src={TwitterIcon} alt="Twitter" />
          </Button>
          <Button variant="outline-secondary" className="social-btn rounded-circle">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </Button>
          <Button variant="outline-secondary" className="social-btn rounded-circle">
            <img src={YTIcon} alt="YouTube" />
          </Button>
        </div>
        <p className="mt-5 mb-2 custom-text text-center fs-6">Example@email.com </p>
        <p className="mt-4 mb-3 custom-text text-center fs-6">Copyright © 2020 Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
