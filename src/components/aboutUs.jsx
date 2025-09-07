import React from "react";
import isteLogo from '../assets/iste.png'
import '../style/aboutUs.css'

const AboutUs = () => {
    return(
        <div className="flex align-center items-center flex-col about-us-bg" >
            <div className="flex align-center flex-col items-center text-white">
                <img className="size-[180px]" src={isteLogo} alt="LOGO"/>
                <h1 className="text-[93px] glow font-[camood]">ABOUT ISTE</h1>
            </div>
            <div className="mx-[14vw] font-[Aeonik] text-[26px] mt-[51px] text-white">
                <p>
                    The Indian Society for Technical Education (ISTE) is a prominent
                    advocate for advancing technical education and research in India.
                    Established in 1941, ISTE empowers educators and students through
                    workshops, conferences, and networking. It bridges academia and
                    industry, promotes research and fosters innovation. With a
                    nationwide presence, ISTE enhances teaching methods and aligns
                    education with industry needs, and prepares job-ready graduates
                    through internships and projects.
                </p>
                <br/>
                <p >
                    At Vellore Institute of Technology (VIT), we are proud to host the VIT
                    Chapter of ISTE, which stands as a beacon of excellence in technical
                    education. The ISTE-VIT Chapter plays a pivotal role in fostering
                    innovation, skill development and knowledge dissemination among
                    students and professionals.
                </p>
            </div>
            <div className="ml-[56px] self-start">
                <img className="size-[210px] relative top-[105px]" src={isteLogo} alt="LOGO"/>
            </div>
        </div>
    )
};


export default AboutUs;