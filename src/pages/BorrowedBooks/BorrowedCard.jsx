import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BorrowedCard = ({ book }) => {
  const { bookId, BorrowDate, returnDate } = book;
  const [borrowedBook, setBorrowedBook] = useState({});
  useEffect(() => {
    axios
      .get(`https://studyscribe-server.vercel.app/book/${bookId}`)
      .then((res) => {
        setBorrowedBook(res.data);
      });
  }, [bookId]);

  const { image, name, author, category } = borrowedBook;

  const handleReturn = () => {
    axios
      .put(`https://studyscribe-server.vercel.app/retun-book/${bookId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Returned Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          location.reload();
        }
      });
  };

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
        <button onClick={handleReturn} className="btn bg-[#004d99] text-white ">
          Return Now
        </button>
      </th>
    </tr>
  );
};

BorrowedCard.propTypes = {
  book: PropTypes.object,
  borrowedBooks: PropTypes.array,
  setBorrowedBooks: PropTypes.func,
};

export default BorrowedCard;
