import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import axios from "axios";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ns-coffee-cafe-server.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can not recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://ns-coffee-cafe-server.vercel.app/products/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
              Swal.fire({
                position: "center",
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
