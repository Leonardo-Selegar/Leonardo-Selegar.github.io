import React from "react";
import '../styles/footer.css';
import GITHUB_LOGO from '../imgs/github-logo.png';
import LINKEDIN from '../imgs/linkedin.png';


function Footer() {
  return (
    <div className="footer-component">
      <a className="social-footer" href="https://github.com/Leonardo-Selegar" target="_blank" rel="noreferrer noopener">
          <img className="img-footer" src={GITHUB_LOGO} alt="Github"/>
      </a>
      <h1 className="footer-text">Direitos reservados à Leonardo Selegar</h1>
      <a className="social-footer" href="https://www.linkedin.com/in/leonardo-selegar/" target="_blank" rel="noreferrer noopener">
        <img className="img-footer" src={LINKEDIN} alt="LinkedIn"/>
      </a>
    </div>
  )
}

export default Footer;