const AddProduct = () => {
  return (
    <>
      <section className="container mx-auto px-32 py-20 my-28 rounded-2xl bg-[#F4F3F0] text-[#1B1A1A]">
        <div className="text-center">
          <h2 className="rancho text-5xl drop-shadow-xl">Add New Coffee</h2>
          <p>
            Whatever your diet or preferences, there’s enough choice for
            everyone. Order your favourites ahead on our Coffee Club app.
          </p>
        </div>
        <form className="flex flex-col space-y-12">
          <fieldset className="p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="product_name"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Product Name
                </label>
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
                  placeholder="Enter Product Name"
                  className="w-full rounded-md h-12 p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="price"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Product Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Enter Product Price"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="category"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Category Name
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Enter Category Name"
                  className="w-full rounded-md h-12 p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="sub_category"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Sub Category Name
                </label>
                <input
                  id="sub_category"
                  name="sub_category"
                  type="text"
                  placeholder="Enter Sub Category Name"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="chef"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Chef Name
                </label>
                <input
                  id="chef"
                  name="chef"
                  type="text"
                  placeholder="Enter Chef Name"
                  className="w-full rounded-md h-12 p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="supplier"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Supplier Name
                </label>
                <input
                  id="supplier"
                  name="supplier"
                  type="text"
                  placeholder="Enter Supplier Name"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="taste"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Taste / Flavours
                </label>
                <input
                  id="taste"
                  name="taste"
                  type="text"
                  placeholder="Enter Taste / Flavours"
                  className="w-full rounded-md h-12 p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="rating"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Rating
                </label>
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  placeholder="Enter Rating 0-5"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="brand"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Brand Name
                </label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  placeholder="Enter Brand Name"
                  className="w-full rounded-md h-12 p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="photo"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="Enter Photo URL"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full space-y-2">
                <label
                  htmlFor="details"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  placeholder=""
                  className="w-full rounded-md p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full bg-ns-red-pinkish text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Add Product
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
