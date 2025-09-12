'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FlowerCard from '../../components/FlowerCard';
import { Flower, Shop } from '@/types';

export default function ShopPage() {
  const params = useParams();
  const shopId = params?.id as string;

  const [shop, setShop] = useState<Shop | null>(null);
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    if (!shopId) return;

    const fetchShopData = async () => {
      try {
        const shopRes = await fetch(`/api/shops/${shopId}`);
        const shopData: Shop = await shopRes.json();
        setShop(shopData);

        const flowersRes = await fetch(`/api/flowers?shopId=${shopId}`);
        const flowersData: Flower[] = await flowersRes.json();
        setFlowers(flowersData);
      } catch (error) {
        console.error('Error fetching shop data:', error);
      }
    };

    fetchShopData();
  }, [shopId]);

  if (!shop) return <p className="p-6">Loading shop...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{shop.name}</h1>
      <p className="text-gray-600 mb-6">{shop.address}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flowers.map((flower) => (
          <FlowerCard key={flower._id} flower={flower} />
        ))}
      </div>
    </div>
  );
}

