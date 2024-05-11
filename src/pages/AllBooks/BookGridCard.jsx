import PropTypes from "prop-types";
import { GoStar } from "react-icons/go";

const BookGridCard = ({ product }) => {
  const { image, name, author, category, rating } = product;
  return (
    <div className="card  bg-base-100 border-2 border-[#c5cbd1]">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{author}</p>
        <div className="flex  items-center ">
          <p className="text-xl text-[#435a71]">{category}</p>
          <p className="text-xl font-bold flex items-center gap-2 text-orange-500 ">
            {" "}
            <GoStar />
            {rating}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-[#004d99]">Update Now</button>
        </div>
      </div>
    </div>
  );
};

BookGridCard.propTypes = {
  product: PropTypes.object,
};

export default BookGridCard;
