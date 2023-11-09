import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.style.filter = isOpenNavigation ? "blur(5px)" : "";
    }
    document.body.style.overflow = isOpenNavigation ? "hidden" : "";

    return () => {
      if (mainContent) {
        mainContent.style.filter = "";
      }
      document.body.style.overflow = "";
    };
  }, [isOpenNavigation]);
  return (
    <>
      <Header
        isOpenNavigation={isOpenNavigation}
        setIsOpenNavigation={setIsOpenNavigation}
      />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
