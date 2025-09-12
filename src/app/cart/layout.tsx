'use client'; 

import { ReactNode } from 'react';
import { CartProvider } from '../context/CartContext';


export default function CartLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CartProvider>
        <main className="w-full  p-4">{children}</main>
      </CartProvider>
    </div>
  );
}
