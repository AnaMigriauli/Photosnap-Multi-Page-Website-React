import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="stories">STORIES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
