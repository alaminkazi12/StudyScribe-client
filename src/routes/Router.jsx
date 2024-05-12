import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AddBook from "../pages/AddBooks/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import PrivateRouter from "../pages/Auth/PrivateRote/PrivateRouter";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import BookDetails from "../pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addbook",
        element: (
          <PrivateRouter>
            <AddBook></AddBook>
          </PrivateRouter>
        ),
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("http://localhost:5000/bookscount"),
      },
      {
        path: "/borrowedbooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/update/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/category/:name",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
]);

export default router;
