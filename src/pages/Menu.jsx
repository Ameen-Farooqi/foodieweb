import React, {useState} from "react";
import styles from "./Menu.module.css";
import MenuCard from "../components/menu/MenuCard";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import OrderApps from "../components/orderApps/OrderApps";
import image1 from "../assets/Menu_img1.jpg";
import image2 from "../assets/Menu_img2.jpg";
import image3 from "../assets/Menu_img3.jpg";
import image4 from "../assets/Menu_img4.jpg";
import image5 from "../assets/Menu_img5.jpg";
import image6 from "../assets/Menu_img6.jpg";
import image7 from "../assets/Menu_img7.jpg";
import image8 from "../assets/Menu_img8.jpg";

const menuData = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "$9.99",
    category: "Breakfast",
    img: image1,
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: "$15.99",
    category: "Main Dishes",
    img: image2,
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: "$7.25",
    category: "Drinks",
    img: image3,
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: "$20.99",
    category: "Desserts",
    img: image4,
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: "$5.89",
    category: "Drinks",
    img: image5,
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    price: "$18.05",
    category: "Desserts",
    img: image6,
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: "$12.55",
    category: "Main Dishes",
    img: image7,
  },
  {
    id: 8,
    title: "Classic Waffels",
    price: "$12.99",
    category: "Breakfast",
    img: image8,
  },
];

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

export default function Menu() {
  const [active, setActive] = useState("All");

  const filteredMenu = active === "All" ? menuData : menuData.filter((item) => item.category === active);

  return (
    <div>
      <div>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </div>
      <div className={styles.menuPage}>
        <h2>Our Menu</h2>
        <p className={styles.subtitle}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className={styles.categories}>
          {categories.map((item) => (
            <button key={item} className={active === item ? styles.active : ""} onClick={() => setActive(item)}>
              {item}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className={styles.grid}>
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <OrderApps />
    </div>
  );
}
