import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const MainHeader: React.FC = () => {
  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Our missons
            </NavLink>
          </li>
          <li>
            <NavLink to="/sessions">Browse sessions</NavLink>
          </li>
          <li>
            <Button>Upcoming sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
