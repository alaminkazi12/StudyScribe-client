import PropTypes from "prop-types";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";

const BookTable = ({ product }) => {
  const { image, name, author, category, rating, _id } = product;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-40 h-40">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold md:text-xl">{name}</div>
            {/* <div className="text-sm opacity-90">
              {" "}
              <b>Author:</b> {author}
            </div> */}
            <div className="text-sm opacity-90">
              <p className="text-xl font-bold flex items-center gap-2 text-orange-500 ">
                {" "}
                <GoStar />
                {rating}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="text-lg">{category}</td>
      <td className="text-lg">{author}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-primary bg-[#004d99]">Update Now</button>
        </Link>
      </th>
    </tr>
  );
};
BookTable.propTypes = {
  product: PropTypes.object,
};
export default BookTable;
