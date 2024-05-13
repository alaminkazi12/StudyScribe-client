import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const { login, googleLogin, gitHubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [signInError, setupSignInError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userEmail = user.email;

        // gat access token

        axios
          .post("http://localhost:5000/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });

        toast.success("Logged In Successfully!", {
          position: "top-right",
        });

        // naviage after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setupSignInError(errorMessage.split("(auth/")[1].split(")")[0]);
      });
  };

  //   google login

  const GoogleLoginHandler = () => {
    googleLogin().then(() => {
      toast.success("Logged In Successfully!", {
        position: "top-right",
      });

      navigate(location?.state ? location.state : "/");
    });
  };

  //   github Login
  const GitHubLoginHandler = () => {
    gitHubLogin().then(() => {
      toast.success("Logged In Successfully!", {
        position: "top-right",
      });

      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="mt-10">
      {/* <Helmet>
        <title>Login | CraftyFiber.com</title>
      </Helmet> */}
      <ToastContainer />
      <h2 className="  lg:text-4xl font-bold text-center text-[#004d99]">
        Login
      </h2>
      <div className="flex items-center justify-center gap-10 mt-10">
        <button
          onClick={GoogleLoginHandler}
          className="btn btn-circle border-2 border-gray-400 text-3xl"
        >
          <FcGoogle />
        </button>
        <button
          onClick={GitHubLoginHandler}
          className="btn btn-circle border-2 border-gray-400 text-3xl"
        >
          <FaGithub />
        </button>
      </div>
      <div className="divider text-[#004d99]">Or</div>
      <form
        onSubmit={handleLogin}
        className="card-body md:w-1/2 md:mx-auto bg-[#f5f5f5] rounded-2xl mt-10"
      >
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        {signInError && <p className=" text-red-800">{signInError}</p>}

        <div className="form-control mt-6">
          <button className="btn bg-[#ffd700] hover:bg-[#808080] ">
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center">
        New to StudyScribe? Quickly{" "}
        <Link to="/signup" className="text-[#004d99] font-bold">
          Sign Up
        </Link>{" "}
        for an account now.
      </p>
    </div>
  );
};

export default Login;
