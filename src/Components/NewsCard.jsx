import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark, FaStar } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="bg-white rounded-md border border-neutral-200">
      {/* Author Information */}
      <div className="flex items-center mb-4 bg-zinc-100 rounded-tl-md rounded-tr-md border border-zinc-100 p-5">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex items-center text-xl gap-2">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-neutral-700 ">
          {news.title}
        </h2>

        {/* Thumbnail Image */}
        <img
          src={news.image_url}
          alt="Thumbnail"
          className="w-full  object-cover rounded-lg mb-4"
        />

        {/* Details */}
        <p className="text-neutral-500 font-normal  text-sm mb-4">
          {news.details.slice(0, 250)}...{" "}
          <Link
            to={`/news/${news._id}`}
            className="text-orange-400 text-base font-semibold"
          >
            Read More
          </Link>
        </p>

        <div className="my-4 border border-neutral-200"></div>
        {/* Ratings and Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-orange-400 text-xl ${
                  i < Math.round(news.rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center  text-neutral-500 text-base font-medium ">
            <IoEyeSharp className="mr-4 text-xl" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
