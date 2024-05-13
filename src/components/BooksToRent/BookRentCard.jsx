import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookRentCard = ({ book }) => {
  const { image, name, _id } = book;
  return (
    <div className="card w-[280px] h-[350px] bg-base-100 shadow-xl border-2 p-6 mr-10  border-b-[#cab956] border-l-[#cab956]">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions flex justify-end items-end">
          <Link to={`/book/${_id}`}>
            <button className="btn btn-sm bg-[#004d99] text-white">
              Details
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

BookRentCard.propTypes = {
  book: PropTypes.object,
};

export default BookRentCard;
