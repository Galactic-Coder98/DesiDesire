"use client";

import CustomCard from "./card";
import styles from "../styles/carousal.module.css";
import { Item } from "./card";

const items: Item[] = [
  { id: 1, name: "Item 1", price: 100, seller: "Seller A", image_url: "https://nextui.org/images/hero-card-complete.jpeg" },
  { id: 2, name: "Item 2", price: 200, seller: "Seller B", image_url: "https://nextui.org/images/hero-card-complete.jpeg" },
  { id: 3, name: "Item 3", price: 300, seller: "Seller C", image_url: "https://nextui.org/images/hero-card-complete.jpeg" },
  { id: 4, name: "Item 4", price: 400, seller: "Seller D", image_url: "https://nextui.org/images/hero-card-complete.jpeg" },
];

export default function Carousel(): JSX.Element {
  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.track} gap-2 p-2`}>
        {items.map((item) => (
          <div className={styles.card} key={item.id}>
            <CustomCard item={item} />
          </div>
        ))}
        {items.map((item) => (
          <div className={styles.card} key={`${item.id}-duplicate`}>
            <CustomCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
