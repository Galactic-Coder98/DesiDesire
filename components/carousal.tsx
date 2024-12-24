"use client";

import CustomCard from "./card";
import styles from "../styles/carousal.module.css";
import { Item } from "./card";

const items: Item[] = [
  { id: 1, name: "Purple Velor Leghna’s", price: 649, seller: "Venus’ Vision", image_url: "https://mewinurmthovscbqwbbt.supabase.co/storage/v1/object/public/item-images/images/PurpleVelor.png" },
  { id: 2, name: "Rosè Red Sari’s 4 Rani’s", price: 899, seller: "Rani ka Sari’s", image_url: "https://mewinurmthovscbqwbbt.supabase.co/storage/v1/object/public/item-images/images/RedSari.png" },
  { id: 3, name: "Princess Pink Salwars", price: 1249, seller: "Gulabi Galore", image_url: "https://mewinurmthovscbqwbbt.supabase.co/storage/v1/object/public/item-images/images/GulabiPic.png" },
  { id: 4, name: "Silver Green Elegance", price: 759, seller: "Venus’ Vision", image_url: "https://mewinurmthovscbqwbbt.supabase.co/storage/v1/object/public/item-images/images/GreenSari.png" },
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
