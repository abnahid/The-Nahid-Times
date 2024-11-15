import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/Page/About.jsx";
import Career from "./Components/Page/Career.jsx";
import CategoryNews from "./Components/Page/CategoryNews.jsx";
import Error from "./Components/Page/Error.jsx";
import Login from "./Components/Page/Login.jsx";
import NewsDetail from "./Components/Page/NewsDetail.jsx";
import SignUp from "./Components/Page/SignUp.jsx";
import AuthLayout from "./Firebase/AuthLayout/AuthLayout.jsx";
import PrivateRoute from "./Firebase/Private/PrivateRoute.jsx";
import AuthProvider from "./Firebase/Providers/AuthProvider.jsx";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Navigate to={"/category/01"}></Navigate>,
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
      path: "/news/:id",
      element: (
        <PrivateRoute>
          <NewsDetail></NewsDetail>
        </PrivateRoute>
      ),
      loader: ({ params }) =>
        fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
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
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="right-top"
        toastOptions={{
          duration: 1500,
        }}
      />
    </AuthProvider>
  </StrictMode>
);
