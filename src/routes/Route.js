import { createBrowserRouter } from "react-router-dom";
import { Principal } from "../pages/principal/principal";

import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Principal />,
      },
    ],
  },
]);
