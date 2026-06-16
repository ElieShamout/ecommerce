import { Routes, Route } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <section className="w-screen mx-auto py-10 px-10">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
