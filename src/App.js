import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCart = () => {
    setCartVisible(true);
  };
  const hideCart = () => {
    setCartVisible(false);
  };
  return (
    <CartProvider>
      {cartVisible && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
