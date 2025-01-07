import { useEffect, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `http://localhost:5000/my-products?email=${user?.email}`;
  const url = `/my-products?email=${user?.email}`;
  useEffect(() => {
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   console.log(res.data);
    //   setProducts(res.data);
    // });
    axiosSecure.get(url).then((res) => setProducts(res.data));
  }, [url, axiosSecure]);

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
          .delete(`http://localhost:5000/products/${id}`, {
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
