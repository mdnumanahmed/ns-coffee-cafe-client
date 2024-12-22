import PropTypes from "prop-types";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, photo, name, brand, category, price } = product;
  return (
    <div className="bg-gray-100 flex justify-around items-center rounded-xl p-8">
      <div>
        <img src={photo} alt="" className="w-40" />
      </div>
      <div>
        <h4 className="text-xl ">
          <span className="font-semibold text-[#1B1A1A]">Name : </span> {name}
        </h4>
        <h4 className="text-xl ">
          <span className="font-semibold text-[#1B1A1A]">Brand : </span> {brand}
        </h4>
        <h4 className="text-xl ">
          <span className="font-semibold text-[#1B1A1A]">Category : </span>{" "}
          {category}
        </h4>
        <h4 className="text-xl ">
          <span className="font-semibold text-[#1B1A1A]">Price : </span> {price}{" "}
          BDT
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <button className="w-10 h-10 rounded-md bg-ns-red-pinkish text-white ">
          <FaRegEye className="mx-auto" />
        </button>
        <Link to={`/update-product/${_id}`}>
          <button className="w-10 h-10 rounded-md bg-black text-white ">
            <FaEdit className="mx-auto" />
          </button>
        </Link>
        <button className="w-10 h-10 rounded-md bg-orange-600 text-white ">
          <FaRegTrashAlt className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
