export function Header() {
  return (
    <>
      <header className="bg-slate-700 w-full py-2 flex items-center justify-between px-10 gap-10">
        <h1 className="text-3xl font-semibold text-white">
          <span className="md:block hidden">Ecommerce</span>
          <span className="md:hidden block">EC</span>
        </h1>
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
          <ul className="flex items-center gap-2 text-sm">
            <li className="hover:text-green-300 duration-200"><a href="">Checkout</a></li>
            <li className="hover:text-green-300 duration-200"><a href="">Orders</a></li>
          </ul>
        </div>
      </header>
    </>
  );
}
