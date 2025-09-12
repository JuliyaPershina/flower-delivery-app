'use client';

import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">🛒 Your cart is empty</h2>
        <Link
          href="/"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  const goToOrder = () => {
    router.push('/order');
  };

  return (
    <div className="p-6 w-full mx-auto">
      <div className="w-full mx-auto ">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaShoppingCart /> Shopping Cart
        </h1>

        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item._id}
              className="flex gap-10 items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.price} ₴ × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  –
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline ml-2"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-between items-center">
          <strong>Total: {total} ₴</strong>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <button
        onClick={goToOrder}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full h-12 mt-10 "
      >
        Go to order
      </button>

    </div>
  );
}
