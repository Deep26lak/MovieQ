import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Introducing Movix, the premier movie streaming app that transforms
          your viewing experience. With an extensive library of the latest
          blockbusters, timeless classics, and hidden gems, Movix ensures you
          never run out of amazing films to watch. Enjoy stunning HD quality,
          personalized recommendations, and the convenience of offline viewing.
        </div>

        <div className="socialIcons">
          <a
            href="https://github.com/Deep26lak"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <BsGithub />
          </a>
          <a
            href="https:/www.x.com/i_deep_26"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/i_deep_26/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/i-deep/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <BsLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
