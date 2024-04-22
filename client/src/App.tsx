import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Basket } from "./components/Basket/Basket";
import { ReduxStore } from "./globalTypes/storeTypes";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const App = () => {
  const [currScrollY, setCurrScrollY] = useState<number>(0);
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const isBasketOpen = useTypedSelector((state) => state.basket.isBasketOpen);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    const scrolledPixels = window.scrollY;

    setCurrScrollY(scrolledPixels);
  };

  useEffect(() => {
    if (isBasketOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBasketOpen]);

  return (
    <>
      <Header userScrollY={currScrollY} />
      <main>
        <Outlet />
      </main>
      <ScrollToTop userScrollY={currScrollY} />
      {isBasketOpen && <Basket />}
      <Footer />
    </>
  );
};
