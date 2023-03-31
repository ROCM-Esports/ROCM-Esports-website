import { CartContext, CartContextData } from '@/components/cart/Cart';
import { Prisma } from '@prisma/client';
import { useContext, useState } from 'react';

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


interface PersistenceProvider {
    provider: 'localstorage' | 'prisma' | 'firestore'

}


/**
 * 
 * @param provider the database provider to use for persisting the cart e.g. localstorage, firestore, etc.
 * 
 */
export const usePersitentCart = ({provider}: PersistenceProvider) => {
    const [loading, setLoading] = useState(false)
    // get the cart from the cart context
    const cartContext = useContext(CartContext)
    if (provider === 'prisma') {
        if ('cart' in Prisma.ModelName || 'Cart' in Prisma.ModelName){

        }
        else {
            throw new Error('The cart model does not exist in Prisma. Please create it and try again.')
        }
    }


}
