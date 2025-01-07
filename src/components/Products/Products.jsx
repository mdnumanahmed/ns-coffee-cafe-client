import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { items } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [products, setProducts] = useState([]);

  /**
   * TODOS for pagination
   * TODO 1: get total page numbers
   * TODO 2: get size for each page
   */

  const size = perPage;
  const totalPage = Math.ceil(items / size);
  const pageNumbers = [...Array(totalPage).keys()];

  const handlePerPage = (e) => {
    setPerPage(e.target.value);
    setCurrentPage(0);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?page=${currentPage}&size=${size}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, size]);

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
        <div className="text-center py-10 space-x-3">
          <button className="btn bg-gray-200 hover:bg-[#6E2038] hover:text-white">
            Prev
          </button>
          {pageNumbers.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`btn bg-gray-200 ${
                currentPage === page && "bg-[#6E2038] text-white"
              } hover:bg-[#6E2038] hover:text-white`}
              key={page}
            >
              {page}
            </button>
          ))}
          <button className="btn bg-gray-200 hover:bg-[#6E2038] hover:text-white">
            Next
          </button>
          <select value={perPage} onChange={handlePerPage} name="" id="">
            <option value="">Size</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
