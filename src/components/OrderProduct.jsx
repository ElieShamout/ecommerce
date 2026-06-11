export function OrderProduct({ imageUrl, title, price }) {
  return (
    <>
      <div className="p-5 rounded border border-gray-200 flex sm:flex-row flex-col gap-5">
        <div className="overflow-hidden rounded sm:w-48">
          <img className="w-full h-full" src={imageUrl} alt="" />
        </div>

        <div className="flex flex-col gap-2 justify-evenly w-full">
          <h3 className="text-md font-semibold">{title}</h3>

          <h1 className="text-md font-semibold">${price}</h1>

          <div className="flex md:flex-row flex-col gap-2 md:items-center justify-between w-full">
            <h4 className="font-semibold">Quantity: 3</h4>
            <button className="bg-green-500 hover:bg-green-700 duration-200 text-white px-2 py-1.5 rounded cursor-pointer text-nowrap text-sm font-semibold w-fit">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
