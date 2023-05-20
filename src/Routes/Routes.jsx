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
        path: "about",
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
        element: <AddToys></AddToys>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
    ],
  },
  {
    path: "details",
    element: <Details></Details>,
    children: [
      {
        path: ":id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
