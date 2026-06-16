import { useState } from 'react';
export function CheckoutProduct({ item }) {
  const product = {
    ...item.product,
    price: item.product.priceCents / 100,
  };
  var total = item.quantity * product.price;
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <>
      <div className="border border-gray-300 rounded mb-5">
        <h3 className="font-semibold border-b border-gray-200 p-3">
          #0129312083120382081801293012939
        </h3>
        <div className="flex gap-5 py-5 px-3">
          <div className="w-48 overflow-hidden rounded border border-gray-100 flex items-center justify-center">
            <img src={product.image} className="w-full object-cover" alt="" />
          </div>
          <div className="flex flex-col justify-start gap-2 mb-5">
            <h2 className="font-semibold">{product.name}</h2>
            <span className="font-semibold text-xl">${product.price}</span>
            <div>
              Quantity:
              <select
                className="border-gray-200 border focus:outline-0 w-16 rounded py-2 px-1 ms-2"
                onChange={ (e) => { setQuantity(Number(e.target.value)) } }
                value={quantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 w-full p-3">
          <h2 className="flex items-center justify-end font-semibold">
            Total: ${total}
          </h2>
        </div>
      </div>
    </>
  );
}
