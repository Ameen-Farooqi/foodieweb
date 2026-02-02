import React from "react";
import styles from "./OrderApps.module.css";
import doordashLogo from "../../assets/DoorDash_Logo.svg";
import foodpandaLogo from "../../assets/foodpanda.svg";
import grubhubLogo from "../../assets/grubhub.svg";
import deliverooLogo from "../../assets/Deliveroo logo.svg";
import instacartLogo from "../../assets/Instacart_logo_and_wordmark.svg";
import didiFoodLogo from "../../assets/didi-food-logo.svg";
import uberEatsLogo from "../../assets/Uber Eats logo.svg";
import justEatLogo from "../../assets/just eat.svg";

const apps = [
  {logo: uberEatsLogo},
  {logo: grubhubLogo},
  {name: "Postmates", color: "#000000"},
  {logo: doordashLogo},
  {logo: foodpandaLogo, color: "#D70F64"},
  {name: "deliveroo", color: "#00CCBC", logo: deliverooLogo},
  {logo: instacartLogo, color: "#E06209"},
  {logo: justEatLogo},
  {logo: didiFoodLogo, color: "#2C2F24"},
];

export default function OrderApps() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>You can order through apps</h2>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>

        <div className={styles.appsGrid}>
          {apps.map((elem, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.appContent}>
                {elem.logo && <img src={elem.logo} alt={elem.name} className={styles.logo} />}

                <span className={styles.appName} style={elem.color ? {color: elem.color} : {}}>
                  {elem.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
