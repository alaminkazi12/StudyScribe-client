import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import BorrowedCard from "./BorrowedCard";
import { Helmet } from "react-helmet-async";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrow-book/?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBorrowedBooks(res.data);
      });
  }, [user?.email, setBorrowedBooks]);

  return (
    <div className="mt-10">
      <Helmet>
        <title>Borrowed Books | StudyScribe.com</title>
      </Helmet>
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        My Borrowed Books
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:text-lg ">Book Details</th>
              <th className="md:text-lg ">Borrow Date</th>
              <th className="md:text-lg ">Retrun Date</th>
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
