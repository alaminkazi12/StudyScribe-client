import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
  const { count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
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
      <div className="flex items-center justify-center mt-10">
        {pages.map((page) => (
          <button
            onClick={() => setcurrentPage(page)}
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
    </div>
  );
};

export default AllBooks;
