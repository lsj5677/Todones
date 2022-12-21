import React, { useContext, useState } from "react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  console.debug(`SUJIN:: ~ Header ~ darkMode`, darkMode);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1>
          TODO<span>NES</span>
        </h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <BsSun className={styles.svg} />
          ) : (
            <MdDarkMode className={styles.svg} />
          )}
        </button>
      </div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li
            key={index}
            className={`${styles.filter} ${
              filter === value && styles.selected
            }`}
          >
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
