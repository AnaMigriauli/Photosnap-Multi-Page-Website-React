import logo from "../../assets/images/logo1.svg";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import arrow from "../../assets/images/arrow.svg";
import socialMediaIcons from "../../assets/images/social media icons.svg";

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <img src={logo} alt="logo" className={style.logo} />
      <img src={socialMediaIcons} className={style["social-media"]} />
      <ul>
        <li>
          <Link className={style.link}>HOME</Link>
        </li>
        <li>
          <Link className={style.link}>STORIES</Link>
        </li>
        <li>
          <Link className={style.link}>FEATURES</Link>
        </li>
        <li>
          <Link className={style.link}>PRICING</Link>
        </li>
      </ul>
      <div className={style["link-container"]}>
        <span className={style["invite-link"]}>GET AN INVITE</span>
        <img src={arrow} />
      </div>
      <p className={style.copyright}>Copyright 2023. All Rights Reserved</p>
    </div>
  );
};
export default Footer;
