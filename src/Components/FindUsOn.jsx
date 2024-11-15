import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <a
          href="https://www.facebook.com/abnahidagency"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start"
        >
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaFacebookF className="text-[#3B599C]"></FaFacebookF>
          </div>
          Facebook
        </a>

        <a
          href="https://twitter.com/xahid_420"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start"
        >
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaTwitter className="text-[#3B599C]"></FaTwitter>
          </div>
          Twitter
        </a>

        <a
          href="https://www.instagram.com/abnahidseo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start"
        >
          <div className="rounded-full bg-dark07 p-2 mr-2">
            <FaInstagram></FaInstagram>
          </div>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUsOn;
