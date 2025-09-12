'use client';

import Link from 'next/link';
import { Shop } from '@/types'; 

const shops: Shop[] = [
  {
    _id: '1',
    name: 'Flowery Fragrant',
    address: 'Address 1',
    image: '/shop1.jpg',
    shopId: 'shop1',
  },
  {
    _id: '2',
    name: 'Bloomwell',
    address: 'Address 2',
    image: '/shop2.jpg',
    shopId: 'shop2',
  },
  {
    _id: '3',
    name: 'Petal Paradise',
    address: 'Address 3',
    image: '/shop3.jpg',
    shopId: 'shop3',
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col min-w-max items-center px-6 py-4 bg-pink-200 shadow-md">
      <Link
        href="/"
        className="flex text-xl font-bold text-pink-900 justify-center mb-2"
      >
        🌸 <br /> Flower Delivery
      </Link>

      <div className="flex gap-4 mb-4">
        <Link href="/" className="hover:underline">
          Shop
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
      </div>

      <div className="flex flex-col items-center mt-4 text-lg text-pink-900">
        <p className="font-bold mb-2">Shops:</p>
        {shops.map((shop) => (
          <Link
            key={shop._id}
            href={`/shop/${shop.shopId}`} 
            className="hover:underline"
          >
            {shop.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
