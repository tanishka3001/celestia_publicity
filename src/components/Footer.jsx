import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 pt-10 overflow-x-hidden">
      <div className="mt-4 px-6">
        <div className="w-full mx-auto flex flex-row justify-between items-end gap-6 md:gap-10 flex-nowrap">
          <div className="flex flex-col justify-end">
            <h1
              className="text-3xl md:text-5xl font-serif text-white"
              style={{
                textShadow: "0 0 25px #ffffff, 0 0 50px #ffffff",
                fontFamily: "CinzelDecorative, serif",
              }}
            >
              CELESTIA
            </h1>
            <p className="text-sm md:text-lg mt-2 text-[#949494]">
             A 24 hour Vibe-coding Hackathon
            </p>
            <p className="text-sm md:text-lg mt-2 text-[#949494] font-[Aeonik]">
             By <span className="italic">ISTE-VIT</span>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 min-w-0 text-right space-y-1 text-sm sm:text-base md:text-xl font-[Calibri]-medium text-[#949494]">
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

            <p className="font-medium">+91 83289 26213</p>
          </div>
        </div>

        {/* Glowing Divider */}
        <div className="relative my-8">
          <div className="h-[1px] bg-yellow-500 shadow-[0_0_20px_#facc15,0_0_12px_#facc15,0_0_12px_#facc15,0_0_20px_#facc15]"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-5 md:space-x-6 mt-6">
  <a
    href="https://www.instagram.com/iste_vit_vellore?igsh=aG80dnVwbnM5dXd2"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 hover:text-yellow-400 transition"
  >
    <FaInstagram />
  </a>
  <a
    href="https://x.com/iste_vitvellore?s=11"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 hover:text-yellow-400 transition"
  >
    <FaXTwitter />
  </a>
  <a
    href="https://www.linkedin.com/company/indian-society-for-technical-education/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 hover:text-yellow-400 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/ISTE-VIT"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 hover:text-yellow-400 transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://youtube.com/@istevitvellore?si=0KLmgfqpkdn-M4GE"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 hover:text-yellow-400 transition"
  >
    <FaYoutube />
  </a>
</div>
      </div>

      {/* PNG Image at the end */}
      <div className="relative mt-8 px-0">
        <img
          src="/iste.png"
          alt="Decorative"
          className="left-0 w-full h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;