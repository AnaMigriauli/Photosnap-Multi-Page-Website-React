import { Link } from "react-router-dom";
import style from "./TabletDesktopHeader.module.css";
const TabletDesktopHeader = ({ navigationLink }) => {
  return (
    <>
      <nav className={style.navigation}>
        <ul className={style["navigation-list"]}>
          {navigationLink.map((link) => (
            <li className={style.list} key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className={style.btn}>GET AN INVITE</button>
      </nav>
    </>
  );
};
export default TabletDesktopHeader;
