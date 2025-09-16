import { useState } from "react";
import Celestia from "../assets/Celestia.png";
import Aurora from "../assets/Aurora.png";
import DropdownIcon from "../assets/Dropdown.png";
import Background from "./Background";

const faqdata = [
  {
    id: 1,
    question: "Do I need to know how to code ?",
    answer:
      "Nope! Celestia is beginner-friendly and AI tools will help you build even if you’re new to coding.",
  },
  {
    id: 2,
    question: "Can I join without a team?",
    answer:
      "Absolutely! You can register solo and we’ll help you find teammates at the event.",
  },
  {
    id: 3,
    question: "What will I build in 24 hours?",
    answer:
      "You’ll create innovative solutions in one of six tracks — from EdTech to Healthcare — and pitch your idea to judges.",
  },
  {
    id: 4,
    question: "What do I get out of it?",
    answer:
      "Hands-on experience, new skills, amazing teammates, mentorship, and maybe even prizes!",
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
    <Background>
      <div className="relative w-screen text-white overflow-x-hidden">
        {/* FAQ Section */}
        <section className="relative z-10 w-full mt-4 pb-8 px-6 md:px-12">
          <h1 className="text-center text-4xl leading-tight md:text-[64px] md:leading-[64px] font-[Camood] glow mb-8 md:mb-12">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h1>

          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-[20%]">
            
            <div className="hidden md:flex w-[320px] md:w-[360px] justify-center md:ml-20"> 
              <img
                src={Celestia}
                alt="Celestia logo"
                className="z-10 w-full max-w-[360px] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
              />
            </div>

            {/* FAQ Section */}
            <div className="flex-1 flex flex-col gap-5 max-w-full md:max-w-[600px] w-full md:ml-12">
              {faqdata.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className="w-full">
                    <button
                      onClick={() => handleClick(faq.id)}
                      className="relative bg-[#b87b22] hover:bg-[#c6892d] transition-colors w-full h-14 rounded-md px-4 text-left flex items-center justify-between"
                    >
                      <span
                        className="text-lg text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
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
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="w-[98%] mx-auto -mt-1 min-h-[72px] border-2 border-[#b87b22] rounded-md px-4 py-3 bg-black/40 relative -z-10">
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
        <section className="z-10 relative w-screen -mt-4 md:-mt-8">
          <div
            className="relative w-full h-[300px] md:h-[520px] bg-cover bg-center bg-no-repeat z-[-1] pointer-events-none"
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
    </Background>
  );
};

export default FAQ;