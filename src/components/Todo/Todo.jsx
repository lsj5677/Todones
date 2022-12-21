import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onStateUpdate, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onStateUpdate({ ...todo, status });
  };

  const handleUpdate = () => {
    const currentText = prompt(`Enter the replacement text.`, todo.text);
    if (currentText === "") {
      alert("Please enter the replacement text");
      return;
    } else if (currentText === null) {
      return;
    }
    onUpdate({ ...todo, text: currentText });
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
      <label
        htmlFor={id}
        className={`${styles.text} ${
          status === "completed" && styles.completed
        }`}
      >
        {text}
      </label>
      <button
        onClick={handleUpdate}
        className={`${styles.editButton} ${styles.button}`}
      >
        <BsPencilSquare />
      </button>
      <button
        onClick={handleDelete}
        className={`${styles.deleteButton} ${styles.button}`}
      >
        <BsTrash />
      </button>
    </li>
  );
}
