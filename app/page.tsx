"use client";
import { getAllItems, Item } from "./lib/api/items";
import CustomCard from "@/components/card";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Carousel from "@/components/carousal";

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
    <section className="h-full flex-grow max-w-screen-xl mx-auto">
      <SignedOut>
        <div className="h-full flex flex-col items-center justify-center gap-10">
          <p className="font-bold text-xl text-center">Sign In or Sign Up to view items for sale!</p>
          <Carousel />
          <p>1 Click Away From Your Doorstep!</p>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-18">
          {items && items.length > 0 ? (
                items.map((item) => (
                  <CustomCard key={item.id} item={item} />
                ))
              ) : (
                <p className="text-bold">No items available</p>
          )}
        </div>
      </SignedIn>
    </section>
  );
}
