'use client'

import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { getAllItems } from "./lib/api/items";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      const items = await getAllItems()
      setItems(items)
    }
    load()
  }, [])

  return (
    <div>
      <main className="flex-grow max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-48 p-6">
          {items?.map((info) => (
            <Card cardInfo={info} key={info.id} />
          ))}
        </div>
      </main>
    </div >
  );
}
