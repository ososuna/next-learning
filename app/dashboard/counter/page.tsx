import { Metadata } from 'next';
import { CartCounter } from '@/app/shopping-cart';

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Shopping cart products page',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Shopping cart products</span>
      <CartCounter value={ 10 } />
    </div>
  )
}