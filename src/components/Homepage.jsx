import Headset from "./homepageVector/HeadSet"
import Laptop from "./homepageVector/Laptop"
import Left from "./homepageVector/Left"
import Right from "./homepageVector/Right"
import "../style/homepage.css";
import Background from "./homeBg.jsx"
import mountains from "../assets/hpmountains.png";
import Variant1 from "../assets/Variant1.png";
import Variant2 from "../assets/Variant2.png";


const HomePage = () => {
    return  (
        <div className="relative w-full h-full">
        <Background />
            <div className="overflow-hidden flex flex-col items-center justify-center text-center -mb-[16px] relative min-h-screen px-4 sm:px-6 lg:px-8">
                <img src={mountains} alt="mountains" className="mountain-glow" />
                <Right className="absolute right-[-50px] sm:right-[-100px] top-20 sm:top-40 size-[150px] sm:size-[200px] lg:size-[250px] glow-svg blink" style={{transform: "rotate(-180deg)"}}/>
                <Left className="absolute left-0 top-20 sm:top-40 size-[150px] sm:size-[200px] lg:size-[250px] glow-svg blink"/>
                <Laptop className="absolute left-10 sm:left-20 lg:left-40 -top-10 sm:-top-20 size-[150px] sm:size-[200px] lg:size-[250px] glow-svg blink" style={{transform: "rotate(-9deg)"}} />
                <Headset className="absolute right-5 sm:right-10 lg:right-20 -top-10 sm:-top-20 size-[175px] sm:size-[225px] lg:size-[275px] glow-svg blink" style={{transform: "rotate(15deg)"}}/>

                <div className="relative flex flex-col justify-center items-center align w-full max-w-[690px] -mt-10 sm:-mt-20">
                    <div className="text-white text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 w-[120px] sm:w-[150px]">
                      <section className="italic mb-0" style={{fontFamily: "Area Extended, sans-serif", fontWeight: 300}}>  ISTE-VIT </section>
                        <span style={{fontFamily: "Area Extended, sans-serif", fontWeight: 700}}>Presents</span>
                    </div>
                    <div>
                        <h1
                            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-6 sm:mb-[30px] relative celestia-container"
                            style={{
                            fontFamily: "CinzelDecorative, serif",
                            }}
                        >
                            {/* Variant images behind CELESTIA text only */}
                            <img 
                                src={Variant1} 
                                alt="Variant 1" 
                                className="variant-bg variant-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[115%] lg:w-[120%] h-auto"
                            />
                            <img 
                                src={Variant2} 
                                alt="Variant 2" 
                                className="variant-bg variant-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[115%] lg:w-[120%] h-auto"
                            />
                            <span className="relative z-10">CELESTIA</span>
                        </h1> 
                        <p className="font-Aeonik text-white text-sm sm:text-base lg:text-lg xl:text-xl px-4 sm:px-0">
                            Celestia is a 24-hour beginner-friendly vibe coding hackathon where Al tools power creativity and innovation. Working in teams, participants will brainstorm, design, and prototype solutions across six tracks-Dev Tools, Open Innovation, SDG, Hardware, EdTech, and Healthcare. The event offers an exciting chance to gain new skills and transform ideas into impactful, real-world solutions.
                        </p>
                        <a 
                            href="https://gravitas.vit.ac.in/events/2589c075-aa0e-49eb-ad60-e120887373ed" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="register-button-hover w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] py-6 sm:py-8 lg:py-[37px] text-2xl sm:text-3xl lg:text-4xl xl:text-[50px] flex items-center justify-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-300 bg-contain bg-no-repeat bg-center text-[#C28F3F] block relative z-50 cursor-pointer mx-auto"
                        >
                            {/* REGISTER <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ml-2" strokeWidth={3}/> */}
                        </a>
                        
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default HomePage