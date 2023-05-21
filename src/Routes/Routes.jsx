import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/Home/MyToys/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleToy from "../Pages/SingleToy/SingleToy";
import Details from "../Layout/Details";
import UpdateToys from "../Pages/Home/MyToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import BlogPage from "../Pages/BlogPage/BlogPage";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-pal-server.vercel.app/toys"),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/update/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`https://toy-pal-server.vercel.app/details/${params.id}`),
      },
    ],
  },
  {
    path: "details",
    element: <Details></Details>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-pal-server.vercel.app/details/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
