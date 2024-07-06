import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Titlebar">
        <h1 className="NavItem Title">Music Tracker</h1>
        <h3 className="NavItem">
          <Link to="/" className="NavLink">
            My Collection
          </Link>
        </h3>
        <h3 className="NavItem">
          <Link to="/search" className="NavLink">
            Search
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Navbar;
