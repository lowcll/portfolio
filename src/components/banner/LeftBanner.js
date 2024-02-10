import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiMysql } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Front-End Engineer.", "Computer Programmer.", "Web Developer.", "Technical Support Specialist."],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
                <h1 className='text-5xl font-bold text-black'>
                    {" "}
                    Hi, I'm {" "}
                    <span className="text-designColor capitalize">Lowell Pioquinto</span>
                </h1>
                <h2 className="text-4xl font-bold text-black">
                    a <span>{text}</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="FFFFFF"
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                My passion for technology started when I was 8, communicating back to the Philippines on my dad's radio in our garage. 
                Over the years, I have become skilled in web development, software engineering, IT, and information systems analysis. 
                Through my coursework and projects I have developed new skills in a tech-driven world. 
                Now, I am very enthusiastic about applying my knowledge to the bridge between business and technology 
                while also providing fresh perspectives while taking on new challenges.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className='flex gap-4'>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                        <span className="bannerIcon">
                            <FaGithub />
                        </span>
                    </div>
                </div>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                        Best skills in:
                    </h2>
                    <div className='flex gap-4'>
                        <span className="bannerIcon">
                            <SiHtml5 />
                        </span>
                        <span className="bannerIcon">
                            <SiCss3 />
                        </span>
                        <span className="bannerIcon">
                            <SiJavascript />
                        </span>
                        <span className="bannerIcon">
                            <SiMysql />
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LeftBanner