import React from "react";
import styles from "./Main.module.css";
import TodoList from "../TodoList/TodoList";

export default function Main() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}
