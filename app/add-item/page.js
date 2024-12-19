'use client';

import { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';  // Ensure user is signed in
import { addItem, getItems } from '../lib/api/items';
import { redirect } from 'next/navigation';

const AddItem = () => {
  const { user, isSignedIn } = useUser(); // Fetch user info from Clerk
  const [itemData, setItemData] = useState({
    name: '',
    price: '',
    seller: '',  // This will be automatically set based on the signed-in user
  });
  const [error, setError] = useState('');
  const { userId, getToken } = useAuth();

  // Set the seller name once user info is available
  useEffect(() => {
    if (isSignedIn && user) {
      setItemData((prevState) => ({
        ...prevState,
        seller: user.fullName || user.username || 'Unknown Seller',  // You can choose what to use from the user object
      }));
    }
  }, [isSignedIn, user]);

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value
    let price = e.target.price.value
    let seller =itemData.seller
    // Add to items in database
    const token = await getToken({ template: "supabase" });
    const newFavorite = await addItem({ userId, token, name, price, seller });
    redirect('/')
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Item</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
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
