import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import AllCourse from "./Pages/Courses/AllCourse";
import Main from "./components/Main";
import Login from "./LogIn-Register/Login";
import Faq from "./Pages/FaQ/Faq";
import Register from "./LogIn-Register/Register";
import Courses from "./Pages/Courses/Courses";
import Details from "./Pages/Courses/Details";
import PrivateRoute from "./Route/PrivateRoute";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/signup",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },

        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/program",
          element: <Courses></Courses>,
          loader: () =>
            fetch(`https://master-study-server-henna.vercel.app/program`),
        },
        {
          path: "/program/:id",
          element: <AllCourse></AllCourse>,
          loader: ({ params }) =>
            fetch(
              `https://master-study-server-henna.vercel.app/pro/${params.id}`
            ),
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoute>
              <Details></Details>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://master-study-server-henna.vercel.app/pro/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/",
      element: <p>P Not found --- 404</p>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
