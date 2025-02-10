import React from "react";
import avatarImg from "../../assets/Chair Com.jpg";
import TextChange from "../TextChange";

const Home = () => {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById("Footer");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
          <div className="md:w-2/4 md:pt-10">
            <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
              <TextChange />
            </h1>
            <p className="text-sm md:text-2xl tracking-tight">
              I am a passionate B.Tech CSE student with skills in HTML, CSS, JavaScript, Bootstrap, React.js, Tailwind CSS, and Node.js. I specialize in building efficient and scalable web solutions.
            </p>
            <button 
              onClick={handleScrollToContact} 
              className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              Contact Me
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto rounded-lg shadow-lg object-contain" src={avatarImg} alt="Deepak's Avatar" />
          </div>
        </div>
    );
};

export default Home;
