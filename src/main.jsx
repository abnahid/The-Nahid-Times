import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import Career from "./Components/Career.jsx";
import Error from "./Components/Error.jsx";
// import Home from "./Components/Home.jsx";
// import Login from "./Firebase/Login.jsx";
// import AuthProvider from "./Firebase/Providers/AuthProvider.jsx";
// import SignUp from "./Firebase/SignUp.jsx";
import CategoryNews from "./Components/Page/CategoryNews.jsx";
import AuthLayout from "./Firebase/AuthLayout/AuthLayout.jsx";
import Login from "./Firebase/Login.jsx";
import SignUp from "./Firebase/SignUp.jsx";
import "./index.css";

const loadNews = () => fetch("/news.json");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/0"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
    loader: loadNews,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router} />
    <Toaster />
    {/* </AuthProvider> */}
  </StrictMode>
);
