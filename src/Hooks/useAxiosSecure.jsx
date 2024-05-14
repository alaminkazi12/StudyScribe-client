import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://studyscribe-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error from interceptor", error.response);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          console.log("Logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor when the component unmounts
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
