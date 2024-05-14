import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDetailsCard from "./CategoryDetailsCard";
import { Helmet } from "react-helmet-async";

const CategoryDetails = () => {
  const { category_name } = useLoaderData();
  const [categorizedBooks, setCategorizedBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/c/${category_name}`).then((res) => {
      console.log(res.data);
      setCategorizedBooks(res.data);
    });
  }, [category_name]);
  return (
    <div className="mt-10">
      <Helmet>
        <title>{category_name} | StudyScribe.com</title>
      </Helmet>
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        {category_name}
      </h2>
      <div className="">
        {categorizedBooks.map((book) => (
          <CategoryDetailsCard book={book} key={book._id}></CategoryDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
