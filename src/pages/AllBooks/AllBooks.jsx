import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookGridCard from "./BookGridCard";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import BookTable from "./BookTable";
import { Helmet } from "react-helmet-async";

const AllBooks = () => {
  const { count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewType, setViewType] = useState("grid");
  const [showAvailable, setShowAvailable] = useState(false); // State to manage the filter for available books
  const numberOfPages = Math.ceil(count / 10);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books?page=${currentPage}&size=10`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, [currentPage]);

  const filteredProducts = showAvailable
    ? products.filter((product) => product.quantity > 0)
    : products;

  return (
    <div>
      <Helmet>
        <title> All Books | StudyScribe.com</title>
      </Helmet>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        <div>
          <button
            className="btn btn-outline btn-sm md:btn-md"
            onClick={() => setShowAvailable(!showAvailable)}
          >
            Show Available Books
          </button>
        </div>
        <div className="flex items-center justify-center ">
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "btn mr-2 btn-square font-bold text-white bg-[#004d99] btn-sm md:btn-md"
                  : "btn mr-2 btn-square font-bold btn-sm md:btn-md"
              }
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`btn md:text-xl lg:text-2xl btn-sm md:btn-md ${
              viewType === "grid" ? "bg-[#004d99] text-white" : ""
            }`}
            onClick={() => setViewType("grid")}
          >
            <CiGrid41 />
          </button>
          <button
            className={`btn md:text-xl lg:text-2xl btn-sm md:btn-md ${
              viewType === "list" ? "bg-[#004d99] text-white" : ""
            }`}
            onClick={() => setViewType("list")}
          >
            <CiBoxList />
          </button>
        </div>
      </div>
      <div
        className={`grid ${
          viewType === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
            : "mt-20"
        }`}
      >
        {viewType === "grid" ? (
          filteredProducts.map((product) => (
            <BookGridCard key={product._id} product={product} />
          ))
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="md:text-lg ">Book Details</th>
                  <th className="md:text-lg ">Category</th>
                  <th className="md:text-lg ">Author</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <BookTable key={product._id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
