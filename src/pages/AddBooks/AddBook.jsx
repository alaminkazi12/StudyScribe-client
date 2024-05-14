import axios from "axios";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddBook = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const author = form.author.value;
    const rating = parseInt(form.rating.value);
    const category = form.category.value;
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const content = form.content.value;

    const Books = {
      image,
      name,
      author,
      rating,
      category,
      quantity,
      description,
      content,
    };

    axios
      .post(`https://studyscribe-server.vercel.app/books`, Books)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Book Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <Helmet>
        <title>Add Book | StudyScribe.com</title>
      </Helmet>
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        Add A Book
      </h2>
      <form onSubmit={handleAdd} className="card-body md:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo Url"
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
            className="input input-bordered"
            required
          />
        </div>
        <div className="md:flex items-center justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Ratings (1-5)"
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
            <option disabled>Select the appropriate category name.</option>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Short info"
            className="input input-bordered"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            name="content"
            placeholder="Preview of the book"
            className="input input-bordered"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#004d99] text-white">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
