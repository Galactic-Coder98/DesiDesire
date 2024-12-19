'use client'

import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { getAllItems } from "./lib/api/items";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const [items, setItems] = useState([])
  const { userId, getToken } = useAuth();

  useEffect(() => {
    if (!userId) return
    async function load() {

      const token = await getToken({ template: "supabase" });
      const items = await getAllItems({  token })
      setItems(items)
    }
    load()
  }, [userId, getToken])

  return (
    <div className="flex flex-col min-h-screen" >
      <main className="flex-grow max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 border-2 border-yellow-300">
          {items?.map((info) => (
            <Card cardInfo={info} key={info.id} />
          ))}
        </div>
      </main>
    </div >
  );
}
