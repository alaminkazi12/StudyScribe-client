import PropTypes from "prop-types";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const CategoryDetailsCard = ({ book }) => {
  const { author, image, name, rating, category, _id } = book;
  return (
    <div className="flex items-center gap-10 bg-[#f5f5f5] border-2 rounded-2xl p-6 mt-4">
      <div className="w-[40%]">
        <img className="w-1/2" src={image} alt={name} />
      </div>
      <div className="divider lg:divider-horizontal">*</div>
      <div className="w-1/2 space-y-2">
        <h2 className="text-2xl font-bold text-[#004d99]">{name}</h2>
        <p className="text-lg ">
          {" "}
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-xl  text-[#004d99d4]">
          {" "}
          <span className="font-bold">Author:</span> {author}
        </p>
        <div>
          <Rating
            placeholderRating={rating}
            emptySymbol={<CiStar />}
            placeholderSymbol={
              <TiStarFullOutline className=" text-yellow-600" />
            }
            fullSymbol={<FaStar className=" text-yellow-600" />}
          />
        </div>
        <div className="flex bottom-0 justify-end">
          <Link to={`/book/${_id}`}>
            <button className="btn  bg-[#004d99] text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoryDetailsCard.propTypes = {
  book: PropTypes.object,
};

export default CategoryDetailsCard;
