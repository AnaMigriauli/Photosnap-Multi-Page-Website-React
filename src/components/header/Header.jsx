import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import lines from "../../assets/images/header lines.svg";
import style from "./Header.module.css";

const Header = ({ isOpenNavigation, setIsOpenNavigation }) => {
  const navigationOpenHandler = () => {
    setIsOpenNavigation(!isOpenNavigation);
  };

  return (
    <div>
      <div className={style.header}>
        <Link to="" className={style.btn}>
          <img src={logo} alt="" />
        </Link>
        <button className={style.btn} onClick={navigationOpenHandler}>
          <img src={lines} alt="" />
        </button>
      </div>
      {isOpenNavigation && (
        <div className={style["burger-menu"]}>
          <ul className={style.list}>
            <li>
              <Link to="stories">STORIES</Link>
            </li>
            <li>
              <Link to="feature">FEATURE</Link>
            </li>
            <li>
              <Link to="pricing">PRICING</Link>
            </li>
          </ul>
          <div className={style.border}></div>
          <button className={style["invite-btn"]}>GET AN INVITE</button>
        </div>
      )}
    </div>
  );
};

export default Header;
