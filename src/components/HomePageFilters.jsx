export function HomePageFilters() {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-2">
        <select className="rounded border p-2 border-gray-300 focus:outline-0 w-full" defaultValue="">
          <option disabled value="">Select Product Type</option>
          <option value="kleidung">Kleidung</option>
          <option value="smatphone">Smatphone</option>
        </select>
        <div className="flex gap-2 justify-between items-center md:w-5xl w-full">
          <input
            type="number"
            className="rounded border p-2 border-gray-300 focus:outline-0 w-full"
            placeholder="Max. Price"
            min="1"
          />
          <span className="font-semibold capitalize">to</span>
          <input
            type="number"
            className="rounded border p-2 border-gray-300 focus:outline-0 w-full"
            placeholder="Min. Price"
            min="1"
          />
        </div>
        <select className="rounded border p-2 border-gray-300 focus:outline-0 w-full" defaultValue="">
          <option disabled value="">Select Size</option>
        </select>
        <button className="rounded p-2 bg-green-300 hover:bg-green-400 duration-200 cursor-pointer text-white font-semibold md:w-16 w-full">Apply</button>
      </div>
    </>
  );
}
