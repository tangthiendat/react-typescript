import { Outlet } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader";

const Root: React.FC = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default Root;
