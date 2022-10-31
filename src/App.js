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
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
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
      path: "/*",
      element: (
        <span className="bg-warning p-5 text-bold text-center">
          404 Not found
        </span>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
