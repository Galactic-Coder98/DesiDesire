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
      <SignedOut>
        <p className="text-center mb-4 font-bold text-md">Sign in or Sign up to view and buy items!</p>
      </SignedOut>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-18">
        {items && items.length > 0 ? (
              items.map((item) => (
                <CustomCard key={item.id} item={item} />
              ))
            ) : (
              <p className="text-bold">No items available</p>
        )}
      </div>
    </section>
  );
}
