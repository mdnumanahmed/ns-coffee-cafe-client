import { useEffect, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const url = `http://localhost:5000/products?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, [url]);

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
          title={"My Added Products"}
          subTitle={"--- Check & Update ---"}
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

export default MyProducts;
