import { createContext, useEffect, useState } from "react";
import { item_list } from "../../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        let itemInfo=item_list.find((product)=>product.id===item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      } 
    }
    return totalAmount;
  }
  const contextValue = {
    item_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;