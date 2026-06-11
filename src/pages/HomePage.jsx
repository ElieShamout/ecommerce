import { HomePageFilters } from "../components/HomePageFilters";
import { Product } from "../components/Product";

function HomePage() {
  return (
    <>
      <HomePageFilters />
      <div className="py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <Product
          imageUrl="https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA"
          title="Cotton Oversized Sweater - Gray"
          rating={3.5}
          price={149}
        />
      </div>
    </>
  );
}

export default HomePage;
