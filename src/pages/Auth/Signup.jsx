import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="mt-10">
      {/* <Helmet>
        <title>SignUp | CraftyFiber.com</title>
      </Helmet> */}
      <h2 className="lg:text-2xl font-bold text-center text-[#004d99]">
        New to StudyScribe? <br /> Quickly signup for an account now.
      </h2>
      <form
        // onSubmit={handleSignUp}
        className="card-body  md:w-1/2 md:mx-auto bg-slate-100 rounded-2xl mt-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex items-center"></div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type={show ? "text" : "password"}
              className="grow"
              name="password"
              placeholder="Password"
              required
            />
            <span onClick={() => setshow(!show)}>
              {" "}
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className="flex items-center"></div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type={show ? "text" : "password"}
              className="grow"
              placeholder="Confirm passowrd"
              name="confirmPassword"
              required
            />
            <span onClick={() => setshow(!show)}>
              {" "}
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>
        <label htmlFor="tems">
          <input type="checkbox" name="terms" id="terms" />{" "}
          <span>Accpet the terms and conditions</span>
        </label>

        {/* {signUpError && <p className="text-red-500">{signUpError}</p>}
        {success && <p className="text-green-500">{success}</p>} */}

        <div className="form-control mt-6">
          <button className="btn bg-[#ffd700] hover:bg-[#808080] ">
            SignUp
          </button>
        </div>
      </form>
      <p className="text-center">
        Already have account? Please{" "}
        <Link to="/login" className="text-[#004d99] font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
