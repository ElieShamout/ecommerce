import Star  from "./Star";

export function Product({ key, imageUrl, title, rating, price }) {
  return (
    <>
      <div key={key} className="p-5 rounded border border-gray-200 flex flex-col gap-5 min-w-0">
        <div className="overflow-hidden rounded">
          <img className="w-full h-full" src={imageUrl}/>
        </div>

        <h3 className="font-semibold truncate">{title}</h3>
        <div className="flex items-center justify-start gap-1">
          <Star width={15} height={15} strockColor="gray" fillColor={ rating.stars >= 1 ? 'yellow' : 'none' } strokeWidth="4"/>
          <Star width={15} height={15} strockColor="gray" fillColor={ rating.stars >= 2 ? 'yellow' : 'none' } strokeWidth="4"/>
          <Star width={15} height={15} strockColor="gray" fillColor={ rating.stars >= 3 ? 'yellow' : 'none' } strokeWidth="4"/>
          <Star width={15} height={15} strockColor="gray" fillColor={ rating.stars >= 4 ? 'yellow' : 'none' } strokeWidth="4"/>
          <Star width={15} height={15} strockColor="gray" fillColor={ rating.stars >= 5 ? 'yellow' : 'none' } strokeWidth="4"/>
          <p className="font-semibold text-xs">{ rating.count }</p>
        </div>

        <h1 className="font-semibold">${ (price / 100).toFixed(2) }</h1>

        <div className="flex gap-2 items-center justify-between">
          <select className="border-gray-200 border focus:outline-0 w-16 rounded p-1 text-sm">
            <option value="1" selected>1</option>
            <option value="2" selected>2</option>
            <option value="3" selected>3</option>
            <option value="4" selected>4</option>
            <option value="5" selected>5</option>
          </select>
          <button className="bg-green-500 hover:bg-green-700 duration-200 text-white px-2 py-1.5 rounded cursor-pointer text-nowrap text-xs font-semibold">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
