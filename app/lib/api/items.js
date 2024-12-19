import { supabaseClient } from "../supabaseClient";

export const getItems = async ({ userId, token }) => {
    const supabase = await supabaseClient(token)
    const { data: items, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', userId)
    if (error) console.log(error)
    return items
}

export const getAllItems = async ({ token }) => {
    const supabase = await supabaseClient(token)
    const { data: items, error } = await supabase
        .from('items')
        .select('*')
    if (error) console.log(error)
    return items
}

export const addItem = async ({ userId, token, name, price , seller}) => {
    const supabase = await supabaseClient(token)
    console.log(userId)
    const { data, error } = await supabase
        .from('items')
        .insert({
            'user_id': userId,
            'name': name,
            'price': price,
            'seller': seller,
            'image_url': 'https://via.placeholder.com/150'
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