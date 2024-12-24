import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient";

export interface Item {
    id: number;
    name: string;
    price: number;
    seller: string;
    image_url?: string;
}

export const getAllItems = async (): Promise<Item[] | null> => {
    const supabase: SupabaseClient = await supabaseClient();
    const { data: items, error } = await supabase
        .from("items")
        .select("*");

    if (error) {
        console.error(error);
        return null;
    }
  
    return items;
};