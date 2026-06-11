import { Header } from "./components/Header";
// import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="w-screen mx-auto py-10 px-10">
        {/* <HomePage /> */}
        <Checkout />
      </section>
    </>
  );
}

export default App;
