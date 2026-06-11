import { useRef } from 'react';
export function CheckoutProduct({
  imageUrl = "https://imgs.search.brave.com/NAMJ9yoophD7X7utKSU7f3yZ9fK0weJxdrsVDVKdABU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mdXR1cmlzdGlj/LXBvcnRyYWl0LW9m/LXdvbWFuLXdpdGgt/Z2xvd2luZy1leWVz/LWFuZC15ZWxsb3ct/YmFja2dyb3VuZC1m/cmVlLWltYWdlLmpw/ZWc_dz02MDAmcXVh/bGl0eT04MA",
  title = "Cotton Oversized Sweater - Gray",
  rating = 3.5,
  price = 149,
  quantity = 3,
}) {
    var total = (quantity * price);
    

  return (
    <>
      <div className="border border-gray-300 rounded mb-5">
        <h3 className="font-semibold border-b border-gray-200 p-3">
          #0129312083120382081801293012939
        </h3>
        <div className="flex gap-5 py-5 px-3">
          <div className="w-48 overflow-hidden rounded border border-gray-100 flex items-center justify-center">
            <img src={imageUrl} className="w-full object-cover" alt="" />
          </div>
          <div className="flex flex-col justify-start gap-2 mb-5">
            <h2 className="font-semibold">{title}</h2>
            <span className="font-semibold text-xl">${price}</span>
            <div>
              Quantity:
              <select className="border-gray-200 border focus:outline-0 w-16 rounded py-2 px-1 ms-2">
                <option value="1" selected>
                  1
                </option>
                <option value="2" selected>
                  2
                </option>
                <option value="3" selected>
                  3
                </option>
                <option value="4" selected>
                  4
                </option>
                <option value="5" selected>
                  5
                </option>
              </select>
            </div>
          </div>
        </div>
          <div className="border-t border-gray-200 w-full p-3">
             <h2 className="flex items-center justify-end font-semibold">Total: ${ total }</h2>
          </div>
      </div>
    </>
  );
}
