import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className={styles.path}
            fillOpacity="1"
            d="M0,224L80,186.7C160,149,320,75,480,85.3C640,96,800,192,960,218.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
