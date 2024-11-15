import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-2xl font-semibold">The Daily Star</h2>
        <p className="mt-2">Journalism without fear or favour</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Apps
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Comment Policy
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              RSS
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Advertisement
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Newsletter
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Conference Hall
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Archives
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-sm">
          <p>© 2024 thedailystar.net | Powered by: RSI LAB</p>
          <p className="mt-2">
            Copyright: Any unauthorized use or reproduction of The Daily Star
            content for commercial purposes is strictly prohibited and
            constitutes copyright infringement liable to legal action.
          </p>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaPinterest size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
