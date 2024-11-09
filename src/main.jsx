import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./component/Profile.jsx";
import Certificate from "./component/Certificate.jsx";
import Contact from "./component/Contact.jsx";
import { HelmetProvider } from "react-helmet-async";
import Education from "./component/Education.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={appRoutes} />
    </HelmetProvider>
  </React.StrictMode>
);
