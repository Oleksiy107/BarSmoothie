import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { openBasket } from "../../store/reducers/basketReducer";
import { ReduxStore } from "../../globalTypes/storeTypes";
import "./Header.scss";

const logoImgSrc = "/static/images/logo.png";
const basketImgSrc = "/static/images/basket.png";

type HeaderProps = {
  userScrollY: number;
};

export const Header: React.FC<HeaderProps> = ({ userScrollY }) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const basketItems = useTypedSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const [basketCounts, setBasketCounts] = useState<number>(0);

  useEffect(() => {
    const currentCount = basketItems.reduce((acc, { count }) => acc + count, 0);

    setBasketCounts(currentCount);
  }, [basketItems]);

  const basketOpenHandler = () => {
    dispatch(openBasket());
  };

  return (
    <header className={`page-head ${userScrollY > 70 ? "sticky-active" : ""} `}>
      <div className="page-head__wrap container">
        <div className="page-head__icon-wrap">
          <Link to="/" className="page-head__icon-link">
            <img src={logoImgSrc} alt="logo" />
          </Link>
        </div>
        <nav className="page-head__nav">
          <ul className="page-head__nav-list">
            <li className="page-head__nav-item">
              <NavLink to="/" className="page-head__nav-link">
                Home
              </NavLink>
            </li>
            <li className="page-head__nav-item">
              <NavLink to="/constructor" className="page-head__nav-link">
                Constructor
              </NavLink>
            </li>
            <li className="page-head__nav-item">
              <NavLink to="/about-us" className="page-head__nav-link">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="page-head__control-panel">
          <div className="page-head__basket" onClick={basketOpenHandler}>
            <img src={basketImgSrc} alt="basket" />
            <span className="page-head__basket-count">{basketCounts}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
