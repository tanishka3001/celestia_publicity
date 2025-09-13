import { useState } from "react";
import Celestia from "../assets/Celestia.png";
import Aurora from "../assets/Aurora.png";
import DropdownIcon from "../assets/Dropdown.png";
import Background from "./Background";

const faqdata = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies venenatis odio sed egestas. Cras condimentum orci nec semper varius. Aenean facilisis est tristique, finibus libero sed, congue augue. Quisque quis ante tristique, vehicula turpis.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies venenatis odio sed egestas. Cras condimentum orci nec semper varius. Aenean facilisis est tristique, finibus libero sed, congue augue. Quisque quis ante tristique, vehicula turpis.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies venenatis odio sed egestas. Cras condimentum orci nec semper varius. Aenean facilisis est tristique, finibus libero sed, congue augue. Quisque quis ante tristique, vehicula turpis.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies venenatis odio sed egestas. Cras condimentum orci nec semper varius. Aenean facilisis est tristique, finibus libero sed, congue augue. Quisque quis ante tristique, vehicula turpis.",
  },
];

const FAQ = () => {
  const [openIds, setOpenIds] = useState([]);

  const handleClick = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="relative w-screen text-white overflow-x-hidden">
      {/* Background stars */}
      <Background />

      {/* FAQ Section */}
      <section className="relative z-10 w-full pt-16 pb-8 px-12">
        <h1 className="text-center text-[64px] leading-[64px] font-[Camood] glow mb-8">
          FREQUENTLY ASKED
          <br />
          QUESTIONS
        </h1>

        <div className="flex items-start justify-between">
          
          <div className="w-[360px] flex justify-center ml-20"> 
            <img
              src={Celestia}
              alt="Celestia logo"
              className="z-10 w-full max-w-[360px] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
            />
          </div>

          {/* FAQ Section */}
          <div className="flex-1 flex flex-col gap-5 max-w-[720px] w-full ml-12">
            {faqdata.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className="w-full">
                  <button
                    onClick={() => handleClick(faq.id)}
                    className="relative bg-[#b87b22] hover:bg-[#c6892d] transition-colors w-full h-[56px] rounded-md px-4 text-left font-[Aeonik] flex items-center justify-between"
                  >
                    <span
                      className="text-xl text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                      style={{
                        fontFamily: "AeonikTrial, Aeonik, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      {faq.question}
                    </span>
                    <img
                      src={DropdownIcon}
                      alt="toggle"
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="w-full min-h-[72px] border-2 border-[#b87b22] rounded-b-md px-4 py-3 bg-black/40">
                      <p
                        className="text-base text-gray-300 leading-relaxed"
                        style={{
                          fontFamily: "Aeonik, sans-serif",
                          fontWeight: "normal",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Aurora Background */}
      <section className="z-10 relative w-screen -mt-8">
        <div
          className="relative w-full h-[520px] bg-cover bg-center bg-no-repeat z-[-1] pointer-events-none"
          style={{
            backgroundImage: `url(${Aurora})`,
            mixBlendMode: "screen", // soft glow effect
            opacity: 0.85, // slightly transparent
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent blur-2xl" />
        </div>
      </section>
    </div>
  );
};

export default FAQ;