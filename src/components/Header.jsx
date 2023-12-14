import { React, Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
import { useState } from 'react';
import '../Styles/Header.module.css';





const Header =() => {
  function componentDidMount() {
    window.scrollTo(0, 0); // This scrolls the page to the top when the component mounts
  }
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true)
    } else {
      setFix(false)
    }

  }
  window.addEventListener("scroll", setFixed)

  return (

    <div className={`${fix ? styles.header_fixed :styles.header}`}>
      <label><NavLink to={"/"}>Tech Observer</NavLink>
      </label>
      <nav className={styles.navbar_menu}>
        <NavLink to={"/iPhone"}>iPhone</NavLink>
        <NavLink to={"/MacBook"}>MacBook</NavLink>
        <NavLink to={"/AppleWatch"}>Apple Watch</NavLink>
        <NavLink to={"/iPad"}>iPad</NavLink>
        <NavLink to={"/AirPods"}>AirPods</NavLink>

      </nav>
      <div className={styles.search}>
      </div>
    </div>
  )
}

export default Header