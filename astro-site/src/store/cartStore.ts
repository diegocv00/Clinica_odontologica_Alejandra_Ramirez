import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

// Persist cart in localStorage
export const cartItems = persistentAtom<CartItem[]>('cart', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export const isCartOpen = atom<boolean>(false);

export function addCartItem(item: Omit<CartItem, 'quantity'>) {
    const currentItems = cartItems.get();
    const existingItemIndex = currentItems.findIndex((i) => i.id === item.id);

    if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += 1;
        cartItems.set(newItems);
    } else {
        cartItems.set([...currentItems, { ...item, quantity: 1 }]);
    }
}

export function removeCartItem(id: string) {
    const currentItems = cartItems.get();
    cartItems.set(currentItems.filter((i) => i.id !== id));
}

export function updateCartItemQuantity(id: string, quantity: number) {
    const currentItems = cartItems.get();
    const index = currentItems.findIndex((i) => i.id === id);

    if (index > -1) {
        if (quantity <= 0) {
            removeCartItem(id);
        } else {
            const newItems = [...currentItems];
            newItems[index].quantity = quantity;
            cartItems.set(newItems);
        }
    }
}

export function clearCart() {
    cartItems.set([]);
}
