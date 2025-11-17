import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(()=>{
    const saved =localStorage.getItem("cartItem");
    return saved? JSON.parse(saved):[]
  });

  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
  },[cartItem])
  // Add to cart
  const addToCart = (product) => {
    setCartItem((prev) => {
      const exist = prev.find((p) => p.id === product.id);

      if (exist) {
        toast.info("Quantity increased!");
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      toast.success("Item added to cart!");
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from cart");
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItem((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty - 1) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        decreaseQty,
        increaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
