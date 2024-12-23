import PropTypes from "prop-types";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProductCard = ({ product, handleDeleteProduct }) => {
  const { _id, photo, name, brand, category, price } = product;
  const { user } = useAuth();
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
        <Link to={`/product-details/${_id}`}>
          <button className="w-10 h-10 rounded-md bg-ns-red-pinkish text-white ">
            <FaRegEye className="mx-auto" />
          </button>
        </Link>
        <Link to={`/update-product/${_id}`}>
          <button
            disabled={!user}
            className="w-10 h-10 rounded-md bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaEdit className="mx-auto" />
          </button>
        </Link>
        <button
          disabled={!user}
          onClick={() => handleDeleteProduct(_id)}
          className="w-10 h-10 rounded-md bg-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaRegTrashAlt className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

export default ProductCard;
