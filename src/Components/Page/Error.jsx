import { Link, useRouteError } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Home/Header";
import LatestNews from "../Home/LatestNews";
import Navbar from "../Home/Navbar";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Sorry, an unexpected error has occurred.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              <i>{error.statusText || error.message}</i>
            </p>
            <Link
              to={`/`}
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Error;