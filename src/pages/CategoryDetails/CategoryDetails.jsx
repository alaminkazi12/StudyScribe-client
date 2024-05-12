import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const { category_name } = useLoaderData();
  console.log(category_name);
  return (
    <div>
      <h1>Category Details</h1>
    </div>
  );
};

export default CategoryDetails;
