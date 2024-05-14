import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Nabvar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isDark, setIsDark] = useState(() => {
    // Check if the theme preference is saved in localStorage
    const savedTheme = localStorage.getItem("theme");
    // If saved theme is "dark", return true, otherwise return false
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Set the data-theme attribute based on the initial state
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toogleDarkMode = () => {
    const htmlElement = document.querySelector("html");
    // const checkbox = document.querySelector(".toggle");
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    htmlElement.setAttribute("data-theme", newIsDark ? "dark" : "light");
    // Save the selected mode in localStorage
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  const handleLogout = () => [
    logOut()
      .then(() => {})
      .catch((error) => console.log(error)),
  ];

  const links1 = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-b-[#004d99]  px-2 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allbooks"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-b-[#004d99]  px-2 py-2 text-[#3D5A80]"
              : ""
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addbook"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-b-[#004d99]  px-2 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowedbooks"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-b-[#004d99]  px-2 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <TiThMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links1}
          </ul>
        </div>
        <h1 className=" text-sm md:text-xl  lg:text-3xl cursor-pointer text-[#004d99]">
          <Link to="/">
            <img className="w-2/3" src="/src/assets/StudyScribe-logo.png" />
          </Link>
        </h1>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-8">{links1}</ul>
      </div>
      <div className="navbar-end">
        <input
          onChange={toogleDarkMode}
          type="checkbox"
          className="toggle mr-4"
          checked={isDark} // Added checked attribute based on isDark state
        />

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              id="profile"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" w-8 md:w-10 rounded-full">
                <img
                  alt={user?.displayName || "Image Not Found"}
                  src={user?.photoURL || "https://i.ibb.co/bX4Qscm/images.png"}
                />
              </div>
            </div>
            <Tooltip
              content={user?.displayName}
              place="top"
              anchorSelect="#profile"
            />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {user?.displayName || "Not Found"}
                {/* <Link to="/profile" className="justify-between">
                  
                </Link> */}
              </li>
              {/* <li>
                <Link to="/update_profile">Update Profile</Link>
              </li> */}
              <li onClick={handleLogout}>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nabvar;
