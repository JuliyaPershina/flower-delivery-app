'use client';

import { useEffect, useState } from 'react';
import FlowerCard from './components/FlowerCard';


interface Flower {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function HomePage() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [cart, setCart] = useState<Flower[]>([]);

  useEffect(() => {
    fetch('/api/flowers')
      .then((res) => res.json())
      .then((data) => setFlowers(data));
  }, []);

  const addToCart = (flower: Flower) => {
    const updated = [...cart, { ...flower }];
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <div>
      <div className=" w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Available Flowers 🌸</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {flowers.map((flower) => (
            <FlowerCard
              key={flower._id}
              flower={flower}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
