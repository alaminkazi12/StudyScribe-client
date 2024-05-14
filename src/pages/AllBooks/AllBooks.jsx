import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookGridCard from "./BookGridCard";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import BookTable from "./BookTable";

const AllBooks = () => {
  const { count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewType, setViewType] = useState("grid");
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

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center mt-10">
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "btn mr-2 btn-square font-bold text-white bg-[#004d99]"
                  : "btn mr-2 btn-square font-bold"
              }
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`btn text-2xl ${
              viewType === "grid" ? "bg-[#004d99] text-white" : ""
            }`}
            onClick={() => setViewType("grid")}
          >
            <CiGrid41 />
          </button>
          <button
            className={`btn text-2xl ${
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
        {/* {products.map((product) =>
          viewType === "grid" ? (
            <BookGridCard key={product._id} product={product} />
          ) : (
            <BookTable key={product._id} product={product} />
          )
        )} */}

        {viewType === "grid" ? (
          products.map((product) => (
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
                {products.map((product) => (
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
