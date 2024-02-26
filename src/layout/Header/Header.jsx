import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import basket from "../../assets/images/HeaderMedia/headerBag.svg";
import logo from "../../assets/images/HeaderMedia/headerLogo.svg";
import like from "../../assets/images/HeaderMedia/like.svg";
import elipseLight from "../../assets/images/ThemaToggle/light-thema-circle.svg";
import moon from "../../assets/images/ThemaToggle/light-thema-moon.svg";
import style from "./Header.module.css";
import sun from "../../assets/images/ThemaToggle/sun.svg";
import elipce from "../../assets/images/ThemaToggle/elipse-darkMode.svg";
import heart from "../../assets/images/ThemaToggle/heart-dark-mode.svg";
import cart from "../../assets/images/ThemaToggle/cart-dark-mode.svg";

export const Header = ({ toggleThemeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const theme = useSelector(state => state.theme.theme);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${style.headerWrapper} `}>
      <div className={style.logoToggleWrapper}>
        <img className={style.logo} src={logo} alt="Logo" />
        <div className={`${style.themaWrapper} ${theme === 'light' ? style.activeBg : ""}`}>
          <div className={style.themaDiv}>
            <img
              className={style.modeImg}
              src={sun}
              alt="sun"
            />
            <button className={`${style.modeBtn} ${theme === 'dark' ? style.activeDarkMode : ""}`} onClick={toggleThemeHandler}>
              {theme === 'dark' ? <img src={elipseLight} alt="elipseLight" /> : <img src={elipce} alt="sun" />}
            </button>
            <img className={style.modeImg}
              src={moon}
              alt="moon"
            />
          </div>
        </div>
      </div>
      <nav className={style.navMenu} onClick={toggleMenu}>
        <ul className={`${style.navList} ${isOpen ? style.menuToggle : ""} ${theme === 'light' ? style.dark : style.light}`}>
          <li className={`${style.listStyle} ${theme === 'light' ? style.dark : style.light}`}>
            <Link
              to="/"
              className={location.pathname === "/" ? style.active : ""}
            >
              Main Page
            </Link>
          </li>
          <li className={`${style.listStyle} ${theme === 'light' ? style.dark : style.light}`}>
            <Link
              to="/categories"
              className={
                location.pathname === "/categories" ? style.active : ""
              }
            >
              Categories
            </Link>
          </li>
          <li className={`${style.listStyle} ${theme === 'light' ? style.dark : style.light}`}>
            <Link
              to="/products"
              className={
                location.pathname === "/products" ? style.active : ""
              }
            >
              All products
            </Link>
          </li>
          <li className={`${style.listStyle} ${theme === 'light' ? style.dark : style.light}`}>
            <Link
              to="/sales"
              className={location.pathname === "/sales" ? style.active : ""}
            >
              All sales
            </Link>
          </li>
        </ul>
      </nav>

      <div className={style.basketWrapper}>
        <Link className={style.toCart} to="/cart">
          <div className={style.cartTotalQuantity}>{totalQuantity}</div>

          <div className={style.basketWrapper}></div>
        </Link>
        <Link to="/like">
          {theme === 'light' ? <img src={heart} alt="heartDarkMode" /> : <img src={like} alt="heartLightMode" />}
        </Link>
        <Link to="/cart">
          {theme === 'light' ? <img src={cart} alt="cartDarkMode" /> : <img src={basket} alt="cartLightMode" />}
        </Link>
        <div
          onClick={toggleMenu}
          className={`${style.burger} ${isOpen ? style.burger_active : ""} `}
        >
          <span
            className={`${style.burger_line} ${style.burger_line_first} ${theme === 'light' ? style.light : style.dark}`}
          ></span>
          <span
            className={`${style.burger_line} ${style.burger_line_second} ${theme === 'light' ? style.light : style.dark}`}
          ></span>
          <span
            className={`${style.burger_line} ${style.burger_line_third} ${theme === 'light' ? style.light : style.dark}`}
          ></span>
          <span
            className={`${style.burger_line} ${style.burger_line_fourth} ${theme === 'light' ? style.light : style.dark}`}
          ></span>
        </div>
      </div>
    </header>
  );
};
