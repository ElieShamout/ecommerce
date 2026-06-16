import { Link } from "react-router";
import { SlBasket } from "react-icons/sl";
export function Header({ cart }) {
  let totalCartQuantity = 0;

  cart.forEach(element => {
    totalCartQuantity += element.quantity;
  });

  return (
    <>
      <header className="bg-slate-700 w-full py-2 flex items-center justify-between px-10 gap-10 sticky top-0 z-50">
        <Link to="/">
          <h1 className="text-3xl font-semibold text-white">
            <span className="md:block hidden">Ecommerce</span>
            <span className="md:hidden block">EC</span>
          </h1>
        </Link>
        <div className="flex items-center justify-between gap-2 relative overflow-hidden rounded">
          <input
            type="search"
            className="w-2xl h-10 rounded bg-white ps-3 pe-15 focus:outline-0"
            placeholder="Search"
          />
          <button
            type="button"
            className="bg-green-400/70 hover:bg-green-400 duration-200 h-full px-2 text-white capitalize absolute inset-e-0 cursor-pointer"
          >
            send
          </button>
        </div>
        <div className="text-white font-semibold text-xl">
          <ul className="flex items-center gap-5 text-sm">
            <li className="hover:text-green-300 duration-200">
              <Link to="Cart" className="relative">
                <span className="absolute left-2.5 top-2 text-[10px] rounded-full text-white w-4 h-4 flex items-center justify-center">{ totalCartQuantity + 11 }</span>
                <SlBasket className="text-3xl"/>
              </Link>
            </li>
            <li className="hover:text-green-300 duration-200">
              <Link to="orders">Orders</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
