import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import Sessions from "./pages/Sessions.tsx";
import Session from "./pages/Session.tsx";
import Root from "./pages/Root.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <Sessions /> },
      { path: "sessions/:id", element: <Session /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
