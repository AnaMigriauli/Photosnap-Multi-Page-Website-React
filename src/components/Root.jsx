import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useState } from "react";
import style from "./Root.module.css";
const RootLayout = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  return (
    <>
      <Header
        isOpenNavigation={isOpenNavigation}
        setIsOpenNavigation={setIsOpenNavigation}
      />
      <main className={isOpenNavigation && `${style["blur-background"]}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
