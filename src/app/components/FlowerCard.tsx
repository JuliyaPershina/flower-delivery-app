'use client';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

interface Flower {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function FlowerCard({ flower }: { flower: Flower }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...flower, quantity: 1 });
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between items-center">
      {/* <img
        src={flower.image}
        alt={flower.name}
        className="w-40 h-40 object-cover rounded-md mb-3"
      /> */}
      <Image
        src={flower.image}
        alt={flower.name}
        fill
        className="object-cover rounded-md"
        sizes="160px"
      />
      <h3 className="text-lg font-bold">{flower.name}</h3>
      <p className="text-gray-600 text-center text-sm">{flower.description}</p>
      <p className="text-pink-700 font-semibold mt-2">{flower.price} ₴</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 active:translate-y-1 active:shadow-inner active:bg-pink-700 transition-all duration-150"
      >
        Add to Cart
      </button>
    </div>
  );
}
