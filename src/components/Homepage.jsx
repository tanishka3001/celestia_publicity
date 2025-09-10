import Headset from "./homepageVector/HeadSet"
import Laptop from "./homepageVector/Laptop"
import Left from "./homepageVector/Left"
import Right from "./homepageVector/Right"
import "../style/homepage.css";
import Background from "./Background.jsx"
import { ArrowRight } from "lucide-react";

const HomePage = () => {
    return  (
        <>
                <div className="flex flex-col items-center justify-center homepage-bg text-center" style={{height:"120vh"}}>
                <Background/>
                <Left className="absolute -left-5 top-40 size-[200px] glow-svg blink"/>
                <Right className="absolute right-0 top-40 size-[200px] glow-svg blink"/>
                <Laptop className="absolute left-20 -top-20 size-[200px] glow-svg blink"/>
                <Headset className="absolute right-20 top-0 size-[200px] glow-svg blink"/>

                <div className="flex flex-col justify-center items-center align w-[590px]">
                    <div className="text-white text-3xl mb-8 font-Aeonik w-[150px]">
                        ISTE-VIT Presents
                    </div>
                    <div>
                        <h1
                            className="text-9xl font-serif text-white mb-[110px]"
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga recusandae blanditiis magni sit. Repellendus eos ut in magni cupiditate vitae, qui dicta doloribus delectus placeat consectetur, modi dolores. Et?
                        </p>
                        <button className="w-[100%] border-4 border-[#A7751E] rounded-[20px] py-[10px] text-[#A7751E] text-[40px] flex items-center justify-center mt-10">
                            REGISTER <ArrowRight className="w-7 h-7 ml-1" strokeWidth={3}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default HomePage