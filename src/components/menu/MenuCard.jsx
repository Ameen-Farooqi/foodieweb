import React from "react";
import styles from "./MenuCard.module.css";

export default function MenuCard({item}) {
  return (
    <div className={styles.card}>
      <img src={item.img} alt="{item.title}" />
      <span className={styles.price}>{item.price}</span>
      <h3>{item.title}</h3>

      <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
    </div>
  );
}
