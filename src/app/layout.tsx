import './globals.css';
import type { Metadata } from 'next';
import CartProviderWrapper from './components/CartProviderWrapper';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Flower Delivery',
  description: 'Order flowers online with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProviderWrapper>
          <div className="min-h-screen flex">
            <Navbar />
            {children}
          </div>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
