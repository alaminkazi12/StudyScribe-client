import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const book = useLoaderData();
  console.log(book);
  const { image, name, author, category, rating } = book;
  return (
    <div className="mt-10">
      <h2 className="lg:text-3xl font-bold text-center text-[#004d99]">
        Update Books : {name}
      </h2>
      <form className="card-body w-1/2 mx-auto">
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
            <option disabled defaultValue>
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
