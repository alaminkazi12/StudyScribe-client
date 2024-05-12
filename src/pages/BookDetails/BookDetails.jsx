import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

const BookDetails = () => {
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

  const handleReturn = (e) => {
    // e.preventDefault();
    const returnDate = e.target.date.value;
    console.log(returnDate);
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
              <b>Quantity: </b> {quantity}
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
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            open modal
          </button>
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
            <button
              className="btn bg-[#004d99] text-white"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Borrow Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
