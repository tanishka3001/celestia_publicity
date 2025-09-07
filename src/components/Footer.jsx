import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-row justify-between items-end gap-10">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-serif text-white <h1 className="text-5xl font-serif style={{ textShadow: "0 0 25px #ffffff, 0 0 50px #ffffff" }}>CELESTIA</h1>
          <p className="text-lg mt-2 text-gray-400">
            Made with <span className="text-white-500">♥</span> by ISTE
          </p>
        </div>

        {/* Right Section */}
        <div className="text-xl space-y-2 font-[Calibri]-medium text-right">
          <p>VIT University</p>
          <p>Vellore, Tamil Nadu</p>
          <p>India - 632014</p>

          <p className="my-2">
            <a
              href="mailto:iste@vit.ac.in"
              className="underline hover:text-white"
            >
              iste@vit.ac.in
            </a>
          </p>

          <p className="font-medium text-white">
            +91 83289 26213
          </p>
        </div>
      </div>

      {/* Glowing Divider */}
      <div className="relative my-8">
        <div className="h-[1px] bg-yellow-500 shadow-[0_0_20px_#facc15,0_0_12px_#facc15,0_0_12px_#facc15,0_0_20px_#facc15]"></div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.instagram.com/iste_vit_vellore?igsh=aG80dnVwbnM5dXd2" className="text-yellow-500 hover:text-yellow-400 transition text-5xl">
          <FaInstagram />
        </a>
        <a href="https://x.com/iste_vitvellore?s=11" className="text-yellow-500 hover:text-yellow-400 transition text-5xl">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/company/indian-society-for-technical-education/" className="text-yellow-500 hover:text-yellow-400 transition text-5xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com" className="text-yellow-500 hover:text-yellow-400 transition text-5xl">
          <FaGithub />
        </a>
        <a href="https://youtube.com/@istevitvellore?si=0KLmgfqpkdn-M4GE" className="text-yellow-500 hover:text-yellow-400 transition text-5xl">
          <FaYoutube />
        </a>
      </div>
      {/* PNG Image at the end */}
    <img
        src="/iste.png"
        alt="Decorative"
        className="absolute bottom-0 left-0 w-full h-auto"
    />
    </footer>
  );
};

export default Footer;