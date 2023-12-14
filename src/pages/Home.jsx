import React, { Component } from 'react';
import styles from '../Styles/Home.module.css'
import { NavLink } from 'react-router-dom';
import { items } from '../state';

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0); // This scrolls the page to the top when the component mounts
  }
  render() {
    return (
      <body>
        <div className={styles.main}>
          <div className={styles.upperPart} >
            <div className={styles.logoMain}>
              <img src="../Assets/MainIphone.jpg"></img>
            </div>
          </div>
          <div className={styles.loverPart} >
            <NavLink className={styles.newName} to={"/iPhone%2014%20Pro"}>iPhone 14 Pro</NavLink>
          </div>
          <div className={styles.main_novelty}>
            <div className={styles.novelty_info_left}>
              <img src="../Assets/AppleWatch/appleWatchUltra2.png" alt="" />
              <NavLink className={styles.a} to={"/Apple%20Watch%20Ultra%202"}>Apple Watch Ultra 2</NavLink>
              {/* <div className={styles.text}>Apple Watch Ultra 2</div> */}
            </div>
            <div className={styles.novelty_info_right}>
              <img src="../Assets/AppleWatch/appleWatchS9.png" alt="" />
              <NavLink className={styles.a} to={"/Apple%20Watch%20Series%209"}>Apple Watch Series 9</NavLink>

              {/* <div className={styles.text}>Apple Watch Series 9</div> */}

            </div>
            <div className={styles.novelty_info_right}>
            <NavLink className={styles.a} to={"/AirPods%20Pro%20(2-nd%20gen)"}>Air Pods 2 Pro</NavLink>
              <img src="../Assets/AirPods/AirPods2Pro.png" alt="" />
              {/* <div className={styles.text}>Apple Watch Series 9</div> */}

            </div>
            <div className={styles.novelty_info_left}>
              <img src="../Assets/MacBook/MacBook16M2.png" alt="" />
              <NavLink className={styles.a} to={"/MacBook%20Pro%2016-in"}>MacBook 16" M2</NavLink>
              {/* <div className={styles.text}>Apple Watch Ultra 2</div> */}
            </div>
          </div>
        </div>
      </body>
    )

  }
}

export default Home