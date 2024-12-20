'use client';

import { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';  // Ensure user is signed in
import { addItem, getItems } from '../lib/api/items';
import { redirect } from 'next/navigation';
import { supabaseClient } from '../lib/supabaseClient';

const AddItem = () => {
  const { user, isSignedIn } = useUser();
  const [itemData, setItemData] = useState({
    name: '',
    price: '',
    seller: '',
    image_url: null
  });
  const [error, setError] = useState('');
  const { userId, getToken } = useAuth();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (isSignedIn && user) {
      setItemData((prevState) => ({
        ...prevState,
        seller: user.fullName || user.username || 'Unknown Seller',
      }));
    }
  }, [isSignedIn, user]);

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let price = e.target.price.value;
    let seller = itemData.seller;

    if (!name || price <= 0 || !seller) {
      setError('Please fill out all fields correctly.');
      return;
    }

    let imageUrl = itemData.image_url;
    const token = await getToken({ template: "supabase" });

    if (image) {
      try {
        imageUrl = await uploadImageToStorage(image, token);
      } catch (err) {
        setError('Error uploading image');
        return;
      }
    }

    const newFavorite = await addItem({ userId, token, name, price, seller, image_url: imageUrl });

    redirect('/');
  };

  const uploadImageToStorage = async (file, token) => {
    const sameToken = token;
    const supabase = await supabaseClient(sameToken);
  
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `images/${fileName}`;
  
    const { data, error } = await supabase.storage.from('item-images').upload(filePath, file);
  
    if (error) {
      console.log('Upload error:', error);
      throw new Error('Error uploading image');
    }
  
    const { data: publicUrlData, error: urlError } = supabase.storage.from('item-images').getPublicUrl(filePath);

    if (urlError) {
      throw new Error('Error fetching image URL');
    }
  
    return publicUrlData.publicUrl;
  };  

  return (
    <div className="mx-auto p-6 border-2 border-white-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Item</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block font-medium">
            Item Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="name" className="block font-medium">
            Item Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={itemData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full"
            required
          />
        </div>

        {/* Seller name is automatically set from Clerk, so no input needed */}
        <div className="hidden">
          <label htmlFor="seller" className="block font-medium">
            Seller Name
          </label>
          <input
            type="text"
            name="seller"
            id="seller"
            value={itemData.seller}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            name="price"
            id="price"
            value={itemData.price}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
