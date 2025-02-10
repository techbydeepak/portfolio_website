import React from "react";
import AboutImg from "../../assets/Outside Gate.jpg";
import { IoArrowForward } from "react-icons/io5";

function About() {
    return (
        <div
          id="About"
          className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gray-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8">
              <img className="md:h-80 rounded-lg shadow-lg object-cover" src={AboutImg} alt="About me" />
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <IoArrowForward size={30} className="mt-1 text-[#465697]" />
                  <div>
                    <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
                    <p className="text-sm md:text-md leading-tight mt-1">
                      Skilled in building intuitive, responsive, and dynamic user interfaces using React.js, Tailwind CSS, and Bootstrap. Passionate about delivering seamless user experiences.
                    </p>
                  </div>
                </li>

              

                <li className="flex gap-4 items-start">
                  <IoArrowForward size={30} className="mt-1 text-[#465697]" />
                  <div>
                    <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
                    <p className="text-sm md:text-md leading-tight mt-1">
                      Experienced in developing robust backend systems using Node.js and Express.js. Focused on creating scalable APIs and integrating them with front-end solutions.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <IoArrowForward size={30} className="mt-1 text-[#465697]" />
                  <div>
                    <h1 className="text-xl md:text-2xl font-semibold">Problem Solver</h1>
                    <p className="text-sm md:text-md leading-tight mt-1">
                      Adept at analyzing and solving complex technical challenges. Strong foundation in algorithms and data structures, with a focus on efficient coding practices.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <IoArrowForward size={30} className="mt-1 text-[#465697]" />
                  <div>
                    <h1 className="text-xl md:text-2xl font-semibold">Collaborator & Communicator</h1>
                    <p className="text-sm md:text-md leading-tight mt-1">
                      Excellent teamwork and communication skills. Enthusiastic about collaborating with cross-functional teams to deliver impactful projects.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };

export default About;
