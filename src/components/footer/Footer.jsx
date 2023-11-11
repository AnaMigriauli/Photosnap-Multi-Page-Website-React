import logo from "../../assets/images/logo1.svg";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import arrow from "../../assets/images/arrow.svg";
import socialMediaIcons from "../../assets/images/social media icons.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigationLinks = [
    { path: "", name: "home" },
    { path: "stories", name: "STORIES" },
    { path: "feature", name: "FEATURES" },
    { path: "pricing", name: "PRICING" },
  ];
  return (
    <div className={style["footer-container"]}>
      <div className={style["footer-nav"]}>
        <img src={logo} alt="logo" className={style.logo} />
        <img src={socialMediaIcons} className={style["social-media"]} />
        <ul className={style["social-media-list"]}>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={style.link} onClick={scrollToTop}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style["link"]}>
        <div className={style["link-container"]}>
          <span className={style["invite-link"]}>GET AN INVITE</span>
          <img src={arrow} />
        </div>
        <p className={style.copyright}>Copyright 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
