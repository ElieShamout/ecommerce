import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="w-screen mx-auto py-10 px-10">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
