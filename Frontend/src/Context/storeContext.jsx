import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const contextStore = createContext();

export const ContextProvider = (props) => {
 

  const [cartItem, setCartItem] = useState({});
  const [showLoginPage,setShowLoginPage]=useState(false);
  const [showSignUp,setShowSignUp]=useState(false);
  const [token,setToken]=useState("");

 
  const [loggedUser,setLoggedUser]=useState("");
  

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  });

  const addCart = (id) => {
    setCartItem((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };
    const deliveryFee = 50;
    let subtotal = 0;

    food_list.forEach((food) => {
        if (cartItem[food._id]) {
            subtotal += food.price * cartItem[food._id];
        }
    });

  const total = subtotal + deliveryFee;

  const removeCart = (id) => {
    setCartItem((prev) => {
      if (!prev[id]) return prev; 
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] === 0) {
        delete updated[id]; 
      }
      return updated;
    });
  };
   

  //URL for API END POINT
  const url="http://localhost:8080"

  

  return (
    <contextStore.Provider 
    value={{
       food_list,
        cartItem,
         addCart,
          removeCart,
          showLoginPage,
          setShowLoginPage,
          showSignUp,
          setShowSignUp,
          deliveryFee,
          subtotal,
          total,
          user,
          setUser,
          url,
          token,
          setToken,
          setLoggedUser,
          loggedUser
         
          }}>
      {props.children}
    </contextStore.Provider>
  );
};
