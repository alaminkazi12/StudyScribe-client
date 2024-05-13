import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import BorrowedCard from "./BorrowedCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrow-book/?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBorrowedBooks(res.data);
      });
  }, [user?.email]);
  return (
    <div className="mt-10">
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        My Borrowed Books
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <BorrowedCard book={book} key={book._id}></BorrowedCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBooks;
