'use client';

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getItems } from "../lib/api/items";
import CustomCard, { Item } from "@/components/card";
import { Modal } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ItemsPage() {
    const [items, setItems] = useState<Item[] | null>(null);
    const { userId, getToken } = useAuth();
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    function handleUpdate(updatedData: { id: number; name: string; price: number; }): void {
        setItems((prevItemList) =>
            prevItemList
                ? prevItemList.map((item) =>
                    item.id === updatedData.id 
                        ? { ...item, name: updatedData.name, price: updatedData.price } 
                        : item
                    )
            : null
        );
    }

    function handleAddItem(): void {
        router.refresh();
    }

    useEffect(() => {
        if (!userId || typeof userId !== 'string') return;

        async function load() {
            const fetchedToken = await getToken({ template: "supabase" });

            if (!fetchedToken) {
                console.error("Token is missing or invalid");
                return;
            }

            setToken(fetchedToken);

            let itemsList = await getItems({ userId: userId!, token: fetchedToken })
            setItems(itemsList);
        };

        load();
    }, [userId, getToken]);

    return (
        <div>
            {/* Page Header */}
            <h1 className="text-xl font-bold">Item Management</h1>
            <p className="text-gray-400">Manage your item information here.</p>

            {/* Items Overview Section */}
            <div className="flex justify-between items-center">
                <div className="flex gap-1 my-8">
                    <h2 className="font-bold">All items</h2>
                    <span className="font-bold text-gray-400">({ items?.length })</span>
                </div>

                {/* Modal View Here */}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-18">
                {items?.map((item) => (
                    <CustomCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}