import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  console.log(book);
  const { image, name, author, category, rating, _id } = book;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const author = form.author.value;
    const rating = form.rating.value;
    const category = form.category.value;

    const updatedBooks = {
      image,
      name,
      author,
      rating,
      category,
    };

    axios.put(`http://localhost:5000/book/${_id}`, updatedBooks).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Book Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    console.log(updatedBooks);
  };
  return (
    <div className="mt-10">
      <Helmet>
        <title>Update Book | StudyScribe.com</title>
      </Helmet>
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        Update Books : {name}
      </h2>
      <form onSubmit={handleUpdate} className="card-body w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo Url"
            defaultValue={image}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Book Name"
            defaultValue={name}
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              defaultValue={author}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Ratings"
              defaultValue={rating}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Catagory Name</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value={category}>
              Select the appropriate category name.
            </option>
            <option> Fantasy</option>
            <option>Romance</option>
            <option>Classic</option>
            <option>Novel</option>
            <option>Magical Realism</option>
            <option>Fiction</option>
            <option>Horror</option>
            <option>Children's Literature</option>
            <option>Poetry</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Now</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
