import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const displayName = user?.displayName;
  console.log(email, displayName);
  const {
    image,
    name,
    author,
    category,
    content,
    description,
    quantity,
    rating,
    _id,
  } = useLoaderData();
  const [upQuantity, setupQuantity] = useState(quantity);

  const handleReturn = (e) => {
    // e.preventDefault();
    const currentDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const BorrowDate = currentDate();
    const returnDate = e.target.date.value;
    console.log(returnDate);
    const updatedInfo = { returnDate, email, displayName, BorrowDate };

    if (upQuantity > 0) {
      axios
        .post(`http://localhost:5000/borrow-book/${_id}`, { updatedInfo })
        .then((res) => {
          if (res.data.insertedId) {
            setupQuantity(quantity - 1);
            Swal.fire({
              icon: "success",
              title: "Borrowed Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="mt-10 ">
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        {name}
      </h2>
      <div className="flex justify-between  items-center mt-6 border-2 rounded-2xl">
        <div className="w-[40%]">
          <img src={image} alt={image} />
        </div>
        <div className="w-[60%] bg-[#f5f5f5] p-12 mr-8 rounded-2xl">
          <h2 className="text-4xl "> Name: {name}</h2>
          <h4 className="text-xl mt-2"> Author: {author}</h4>
          <p className="text-lg mt-2"> Category: {category}</p>
          <p className="mt-6">
            {" "}
            <b> Short Description:</b> {description}
          </p>
          <p className="mt-6">
            <b>Preview: </b>
            {content}
          </p>
          <ul className="flex items-center  gap-10 mt-6">
            <li>
              {" "}
              <b>Quantity: </b> {upQuantity}
            </li>
            <li className="text-xl">
              <Rating
                placeholderRating={rating}
                emptySymbol={<CiStar />}
                placeholderSymbol={
                  <TiStarFullOutline className=" text-yellow-600" />
                }
                fullSymbol={<FaStar className=" text-yellow-600" />}
              />
            </li>
          </ul>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="">
                <form onSubmit={handleReturn} method="dialog">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-xl">
                        Retun Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  {/* if there is a button in form, it will close the modal */}
                  <div className="form-control mt-6">
                    <button className="btn bg-[#ffd700] hover:bg-[#808080] ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          <div className="mt-4 flex justify-end">
            {quantity > 0 ? (
              <button
                className="btn bg-[#004d99] text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Borrow Now
              </button>
            ) : (
              <button className="btn btn-disabled">Borrow Now</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
