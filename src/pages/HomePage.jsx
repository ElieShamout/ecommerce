import axios from "axios";
import { useEffect, useState } from "react";
import { HomePageFilters } from "../components/HomePageFilters";
import { Product } from "../components/Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce</title>
      <HomePageFilters />
      <div className="py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 overflow-hidden w-full relative">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              imageUrl={product.image}
              title={product.name}
              rating={product.rating}
              price={product.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
