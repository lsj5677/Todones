import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      {/* <button>
        <BsTrash />
      </button> */}
      <button onClick={handleDelete} className={styles.button}>
        <BsTrash />
      </button>
    </li>
  );
}
