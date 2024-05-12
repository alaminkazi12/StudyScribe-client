import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Categorycard = ({ category }) => {
  const { category_name, description, image } = category;
  return (
    <Link to={`/category/${category_name}`}>
      <div className="card w-[280px] h-[300px] bg-base-100 shadow-xl image-full p-6 border-2 border-b-[#cab956] border-l-[#cab956]">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{category_name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

Categorycard.propTypes = {
  category: PropTypes.object,
};

export default Categorycard;
