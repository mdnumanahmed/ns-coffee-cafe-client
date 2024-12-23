import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";
const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    photo,
    name,
    brand,
    category,
    price,
    details,
    flavours,
    ingredients,
    manufacturer,
    rating,
    supplier,
  } = product;

  console.log(product);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#6E2038", //#ffb700
    inactiveFillColor: "#CFA8CA",
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <img src={photo} alt="" className="w-2/3 " />
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl font-bold">{name}</h2>
            <p className="text-xl flex items-center">
              <Rating
                value={rating}
                readOnly
                style={{ maxWidth: 150 }}
                itemStyles={myStyles}
                className=""
              />{" "}
              : {rating}
            </p>
            <p className="text-2xl font-semibold flex">
              Price: <TbCurrencyTaka className="text-3xl" />
              {price}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Brand: </span> {brand}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Category: </span> {category}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Flavours: </span> {flavours}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Ingredients: </span> {ingredients}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Manufacturer: </span>
              {manufacturer}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Supplier: </span> {supplier}
            </p>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
