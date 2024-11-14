import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaFacebookF className="text-[#3B599C]"></FaFacebookF>
          </div>
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaTwitter className="text-[#3B599C]"></FaTwitter>
          </div>
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaInstagram></FaInstagram>
          </div>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
