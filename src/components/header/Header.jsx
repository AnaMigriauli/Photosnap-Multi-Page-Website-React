import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import lines from "../../assets/images/header lines.svg";
import style from "./Header.module.css";
import X from "../../assets/images/Group 2.svg";
import TabletDesktopHeader from "./TabletDesktopHeader";

const Header = ({ isOpenNavigation, setIsOpenNavigation }) => {
  const toggleNavigationHandler = () =>
    setIsOpenNavigation((prevState) => !prevState);

  const navigationLink = [
    { path: "stories", name: "STORIES" },
    { path: "feature", name: "FEATURES" },
    { path: "pricing", name: "PRICING" },
  ];

  return (
    <div className={style["main-header"]}>
      <div className={style.header}>
        <Link to="" className={style.btn}>
          <img src={logo} alt="" />
        </Link>
        {window.innerWidth <= 768 && (
          <button className={style.btn} onClick={toggleNavigationHandler}>
            {isOpenNavigation ? (
              <img src={X} alt="" />
            ) : (
              <img src={lines} alt="" />
            )}
          </button>
        )}
      </div>
      {window.innerWidth >= 768 ? (
        <TabletDesktopHeader navigationLink={navigationLink} />
      ) : (
        <>
          {isOpenNavigation && (
            <nav className={style["burger-menu"]}>
              <ul className={style.list}>
                {navigationLink.map((link) => (
                  <li key={link.name}>
                    <Link
                      className={style["list-item"]}
                      to={link.path}
                      onClick={toggleNavigationHandler}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={style.border}></div>
              <button className={style["invite-btn"]}>GET AN INVITE</button>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
