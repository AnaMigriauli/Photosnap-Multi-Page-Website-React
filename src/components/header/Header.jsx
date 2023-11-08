import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

export default Header;
