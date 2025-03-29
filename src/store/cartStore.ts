import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Ticket {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

interface CartItem extends Ticket {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (ticket: Ticket) => void;
  removeFromCart: (ticketId: number) => void;
  updateQuantity: (ticketId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
  isCartEmpty: () => boolean;
  canAddMore: (ticketId: number) => boolean;
}

const MAX_TICKETS_PER_TYPE = 5;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (ticket) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === ticket.id);
          
          if (existingItem) {
            if (existingItem.quantity >= MAX_TICKETS_PER_TYPE) {
              return state;
            }
            return {
              items: state.items.map((item) =>
                item.id === ticket.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...ticket, quantity: 1 }],
          };
        });
      },

      removeFromCart: (ticketId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== ticketId),
        }));
      },

      updateQuantity: (ticketId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== ticketId),
            };
          }
          if (quantity > MAX_TICKETS_PER_TYPE) {
            return state;
          }
          return {
            items: state.items.map((item) =>
              item.id === ticketId ? { ...item, quantity } : item
            ),
          };
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      isCartEmpty: () => {
        const state = get();
        return state.items.length === 0;
      },

      canAddMore: (ticketId) => {
        const state = get();
        const item = state.items.find((item) => item.id === ticketId);
        return !item || item.quantity < MAX_TICKETS_PER_TYPE;
      },
    }),
    {
      name: 'cart-storage',
    }
  )
); 