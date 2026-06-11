import { OrderProduct } from "../components/OrderProduct";
function Checkout() {
  const total = 249;
  return (
    <>
      <div className="py-10">
        <h2 className="text-2xl font-semibold mb-5">Your Orders</h2>

        <div className="">
          <div className="border border-gray-200 rounded">
            <div className="border-b p-5 border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold">Number: #1-2931-923129</h3>
              <h3 className="font-semibold">Total: ${total}</h3>
            </div>
            <div className="p-5 grid lg:grid-cols-2 gap-3">
              <OrderProduct
                imageUrl="https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA"
                title="Cotton Oversized Sweater - Gray"
                rating={3.5}
                price={149}
              />
              <OrderProduct
                imageUrl="https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA"
                title="Cotton Oversized Sweater - Gray"
                rating={3.5}
                price={149}
              />
              <OrderProduct
                imageUrl="https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA"
                title="Cotton Oversized Sweater - Gray"
                rating={3.5}
                price={149}
              />
              <OrderProduct
                imageUrl="https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA"
                title="Cotton Oversized Sweater - Gray"
                rating={3.5}
                price={149}
              />
            </div>
            <div className="border-t p-5 border-gray-200 flex sm:flex-row flex-col sm:items-center justify-between gap-1 text-md">
              <h3 className="font-semibold">Created Date: 11.05.2026</h3>
              <h3 className="font-semibold">Delivered Date: 11.05.2026</h3>
              <h3 className="font-semibold">Payment method: Paypal</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
