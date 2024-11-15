import { Link, useLoaderData } from "react-router-dom";
import Header from "./../Home/Header";
import RightNav from "./../layout-component/RightNav";
const NewsDetail = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">All Caterogy</h2>{" "}
          <div className="border border-neutral-200 rounded-lg p-6">
            <img
              className="w-full object-cover"
              src={news?.image_url}
              alt="News Thumbnail"
            />
            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-2">{news?.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{news?.details}</p>
              <Link
                to={`/category/${news?.category_id}`}
                className="btn bg-rose-600 text-white mt-4"
              >
                All news in this category
              </Link>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetail;
