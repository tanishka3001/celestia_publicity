import Headset from "./homepageVector/HeadSet"
import Laptop from "./homepageVector/Laptop"
import Left from "./homepageVector/Left"
import Right from "./homepageVector/Right"
import "../style/homepage.css";
import Background from "./Background.jsx"
import { ArrowRight } from "lucide-react";

const HomePage = () => {
    return  (
        <Background>
            <div className="flex flex-col items-center justify-center homepage-bg text-center -mb-[16px]" style={{height:"120vh"}}>
                <Right className="absolute right-0 top-40 size-[250px] glow-svg blink"/>
                <Left className="absolute left-0 top-40 size-[250px] glow-svg blink"/>
                <Laptop className="absolute left-40 -top-20 size-[250px] glow-svg blink" style={{transform: "rotate(-9deg)"}} />
                <Headset className="absolute right-20 top-0 size-[250px] glow-svg blink"/>

                <div className="relative flex flex-col justify-center items-center align w-[690px]">
                    <div className="text-white text-3xl mb-8  font-Aeonik w-[150px]">
                      <section className="italic">  ISTE-VIT </section>
                        Presents
                    </div>
                    <div>
                        <h1
                            className="text-9xl font-serif text-white mb-[70px]"
                            style={{
                            textShadow: `
                                0 0 40px rgba(255,255,255,0.4),
                                0 0 50px rgba(255,255,255,0.6),
                                0 0 150px rgba(255,255,255,0.8),
                                0 0 250px rgba(255,255,255,1)
                            `,
                            fontFamily: "CinzelDecorative, serif",
                            }}
                        >
                            CELESTIA
                        </h1> 
                        <p className="font-Aeonik text-white text-xl">
                            Celestia is a 24-hour beginner-friendly vibe coding hackathon where Al tools power creativity and innovation. Working in teams, participants will brainstorm, design, and prototype solutions across six tracks-Dev Tools, Open Innovation, SDG, Hardware, EdTech, and Healthcare. The event offers an exciting chance to gain new skills and transform ideas into impactful, real-world solutions.
                        </p>
                       <a  href="https://gravitas.vit.ac.in/events/2589c075-aa0e-49eb-ad60-e120887373ed" target="_blank" rel="noopener noreferrer"> <button 
                            className="w-[100%] border-4 border-[#A7751E] bg-[#A7751E] text-white rounded-[20px] py-[10px]  text-[40px] flex items-center justify-center mt-10 register-button hover:bg-[#A7751E] hover:text-white transition-all duration-300"    
                           
                        >
                            REGISTER <ArrowRight className="w-7 h-7 ml-1" strokeWidth={3}/>
                        </button></a>
                    </div>
                </div>
            </div>
        </Background>
        
    )
}

export default HomePage