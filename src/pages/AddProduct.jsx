import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const price = form.get("price");
    const category = form.get("category");
    const manufacturer = form.get("manufacturer");
    const ingredients = form.get("ingredients");
    const supplier = form.get("supplier");
    const flavours = form.get("flavours");
    const rating = form.get("rating");
    const brand = form.get("brand");
    const photo = form.get("photo");
    const details = form.get("details");

    const product = {
      name,
      price,
      category,
      manufacturer,
      ingredients,
      supplier,
      flavours,
      rating,
      brand,
      photo,
      details,
      email: user?.email,
      createdAt: new Date().toISOString(),
    };

    fetch("https://ns-coffee-cafe-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    console.log(product);
  };
  return (
    <>
      <section className="container mx-auto px-32 py-20 my-28 rounded-2xl bg-[#F4F3F0] text-[#1B1A1A]">
        <div className="text-center">
          <h2 className="rancho text-5xl drop-shadow-xl">Add New Product</h2>
          <p>
            Whatever your diet or preferences, there’s enough choice for
            everyone. Order your favourites ahead on our Coffee Club app.
          </p>
        </div>
        <form onSubmit={handleAddProduct} className="flex flex-col space-y-12">
          <fieldset className="p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
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
                  htmlFor="manufacturer"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Manufacturer
                </label>
                <input
                  id="manufacturer"
                  name="manufacturer"
                  type="text"
                  placeholder="Enter Manufacturer Name"
                  className="w-full h-12 p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label
                  htmlFor="ingredients"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Ingredients
                </label>
                <input
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="Enter Ingredients Name comma ( , ) separated"
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
                  htmlFor="flavours"
                  className="text-xl font-semibold text-[#1B1A1A]"
                >
                  Taste / Flavours
                </label>
                <input
                  id="flavours"
                  name="flavours"
                  type="text"
                  placeholder="Enter Taste / Flavours comma ( , ) separated"
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
