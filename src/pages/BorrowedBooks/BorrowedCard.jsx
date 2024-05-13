import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BorrowedCard = ({ book }) => {
  const { bookId, BorrowDate, returnDate } = book;
  const [borrowedBook, setBorrowedBook] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/book/${bookId}`).then((res) => {
      setBorrowedBook(res.data);
    });
  }, [bookId]);

  const { image, name, author, category, _id } = borrowedBook;

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
            <div className="text-sm opacity-90">
              {" "}
              <b>Author:</b> {author}
            </div>
            <div className="text-sm opacity-90">
              {" "}
              <b>Category: </b>
              {category}
            </div>
          </div>
        </div>
      </td>
      <td className="md:text-xl">{BorrowDate}</td>
      <td className="md:text-xl">{returnDate}</td>
      <th>
        <button className="btn bg-[#004d99] text-white ">Return Now</button>
      </th>
    </tr>
  );
};

BorrowedCard.propTypes = {
  book: PropTypes.object,
};

export default BorrowedCard;