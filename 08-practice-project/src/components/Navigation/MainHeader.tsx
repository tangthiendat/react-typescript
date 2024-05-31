import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../UI/Button";
import UpcomingSessions from "../Sessions/UpcomingSessions";

const MainHeader: React.FC = () => {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState<boolean>(false);

  function showUpcomingSessions(): void {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions(): void {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && <UpcomingSessions onClose={hideUpcomingSessions} />}
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
              <Button onClick={showUpcomingSessions}>Upcoming sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
