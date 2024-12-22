import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import axios from "axios";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Product deleted successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container mx-auto py-16">
        <SectionTitle
          title={"Our Popular Products"}
          subTitle={"--- Sip & Savor ---"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
