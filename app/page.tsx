"use client";
import { getAllItems, Item } from "./lib/api/items";
import CustomCard from "@/components/card";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function Home() {
  const [items, setItems] = useState<Item[] | null>(null);
  const { isSignedIn } = useUser();

  async function load() {
    try {
      const fetchedItems = await getAllItems();
      setItems(fetchedItems);
    } catch (error) {
      console.error("Failed to load items: ", error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="flex-grow max-w-screen-xl mx-auto mb-4 mt-4">
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-18">
        <SignedIn>
          {items && items.length > 0 ? (
            items.map((item) => (
              <CustomCard key={item.id} item={item} />
            ))
          ) : (
            <p>No items available</p>
          )}
        </SignedIn>
        <SignedOut>
          <p>Please sign in...</p>
        </SignedOut>
      </div>
    </section>
  );
}
