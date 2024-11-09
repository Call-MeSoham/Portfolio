import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Notification from "./component/Notification";
import "./lib/i18n";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Download from "./component/Download";

function App() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    ref.current?.continuousStart();
    setTimeout(() => {
      ref.current?.complete();
    }, 500);
  }, [location]);
  return (
    <>
      <LoadingBar ref={ref} color="#5046e6" shadow={false} height={5} />
      <Header />
      <Notification />
      <Outlet />
      <Download />
      <Footer />
    </>
  );
}

export default App;
