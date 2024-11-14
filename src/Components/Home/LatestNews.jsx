import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news" className="mr-5">
          Match Highlights: Germany vs Spain — as it happened!
        </Link>
        <Link to="/news" className="mr-5">
          Breaking: New Policy Changes — What It Means for You
        </Link>
        <Link to="/news" className="mr-5">
          Breakthrough! Scientists Develop AI That Could Change Everything
        </Link>
        <Link to="/news" className="mr-5">
          Major CEO Resigns — Impact on Company Stocks
        </Link>
        <Link to="/news">
          Your Guide to Building a Capsule Wardrobe — Less Is More
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
