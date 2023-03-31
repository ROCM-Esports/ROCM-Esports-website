import Image from "next/image"
import { createContext, useState } from "react"

export const CartContext = createContext({} as CartContextData)

export interface CartContextData {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

// create interface for cart item
export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}


export const Cart = () => {
    return (
        <div className="cart | bg-primary-100">
            <div className="cart-content">
                <Image src="/assets/icons/cart.svg" alt="" width={24} height={24}/>
                <div className="cart-notification"></div>
            </div>
        </div>
    )
}

interface CartProviderProps {
    children: React.ReactNode
}
export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        console.log('item added: ', item)
    }

    const removeFromCart = (id: number) => {
        console.log('item removed: ', id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}