import { CheckoutProduct } from "../components/CheckoutProduct";

function Checkout() {
  const productsPrice = 150;
  const shipping = 4.99;
  const totalBeforeTax = productsPrice + shipping;
  const estimatedTax = productsPrice * 0.1;
  const totalPrice = totalBeforeTax + estimatedTax;
  return (
    <>
      <div className="py-10">
        <h2 className="text-2xl font-semibold mb-5">Review your order</h2>

        <div className="flex lg:flex-row flex-col items-top justify-between gap-10">
          <div className="w-full">
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
          <div className="border-gray-200 border rounded p-3 lg:w-2xl w-full sticky top-10 h-fit">
            <h2 className="font-semibold mb-5">Payment Summary</h2>
            <ul className="w-full text-sm flex flex-col gap-1.5">
              <li className="flex items-center justify-between">
                <span>Items(5):</span>
                <span className="">${productsPrice}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Shipping & handling:</span>
                <span className="">${shipping}</span>
              </li>
              <li className="border-b border-gray-200 py-1"></li>
              <li className="flex items-center justify-between">
                <span>Total before tax:</span>
                <span className="">${totalBeforeTax.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Estimated tax (10%):</span>
                <span className="">${estimatedTax.toFixed(2)}</span>
              </li>
              <li className="border-b border-gray-200 py-1"></li>
              <li className="flex items-center justify-between font-semibold text-xl">
                <span className="text-green-500 font-bold">Total price: </span>
                <h3 className="">${totalPrice.toFixed(2)}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

