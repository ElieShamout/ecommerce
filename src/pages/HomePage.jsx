import { HomePageFilters } from "../components/HomePageFilters";
import { Product } from "../components/Product";
import { products } from "../data/products";

function HomePage() {
  console.log(products);

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
              rating={ product.rating }
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
