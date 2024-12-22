import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const {
    _id,
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
  } = useLoaderData();

  const handleUpdateProduct = (e) => {
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
    };

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    console.log(product);
  };
  return (
    <div>
      <section className="container mx-auto px-32 py-20 my-28 rounded-2xl bg-[#F4F3F0] text-[#1B1A1A]">
        <div className="text-center mb-4">
          <h2 className="rancho text-5xl drop-shadow-xl text-shadow">
            Update Product
          </h2>
        </div>
        <form
          onSubmit={handleUpdateProduct}
          className="flex flex-col space-y-12"
        >
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
                  defaultValue={name}
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
                  defaultValue={price}
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
                  defaultValue={category}
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
                  defaultValue={manufacturer}
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
                  defaultValue={ingredients}
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
                  defaultValue={supplier}
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
                  defaultValue={flavours}
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
                  defaultValue={rating}
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
                  defaultValue={brand}
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
                  defaultValue={photo}
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
                  defaultValue={details}
                  className="w-full rounded-md p-4 focus:ring focus:ring-opacity-75 text-gray-900 border-gray-700 focus:ring-red-400"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full bg-ns-red-pinkish text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Update Product
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateProduct;
