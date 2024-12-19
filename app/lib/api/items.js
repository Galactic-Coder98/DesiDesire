import { supabaseClient } from "../supabaseClient";

export const getItems = async ({ userId, token }) => {
    const supabase = await supabaseClient(token)
    const { data: favorites, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', userId)
    if (error) console.log(error)

    return favorites
}

export const addItem = async ({ userId, token, name, price }) => {
    const supabase = await supabaseClient(token)
    const { data, error } = await supabase
        .from('items')
        .insert({
            'user_id': userId,
            'name': name,
            'price': price
            // 'image_url': imageUrl
        })
    if (error) console.log(error)
}

export const deleteItem = async ({ userId, token, name }) => {
    const supabase = await supabaseClient(token)
    const { data, error } = await supabase
        .from('items')
        .delete()
        .match({
            'user_id': userId,
            'id': id,
        })
    if (error) console.log(error)
}