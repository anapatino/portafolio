import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/Route";
import { RouterProvider } from "react-router-dom";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      black: "#000000",
      white: "#FFFFFF",
      lightGray: "#505050",
      leather: "#C99F63",
      lightBrown: "#AB7746",
      mediumBrown: "#715132",
      darkBrown: "#574432",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#FFFFFF",
    },
    space: {},
    fonts: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
