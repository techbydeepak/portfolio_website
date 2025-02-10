import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

function Experience() {
    return (
        <div id="Experience" className="p-10 md:p-24 bg-gray-900 text-white rounded-lg shadow-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-8">Experience</h1>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Skills Section */}
                <div className="md:w-2/5 grid grid-cols-3 gap-6">
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <FaHtml5 color="#E34F26" size={60} />
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <FaCss3 color="#1572B6" size={60} />
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <FaJs color="#F7DF1E" size={60} />
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <FaReact color="#61DAFB" size={60} />
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <TbBrandTailwind color="#38B2AC" size={60} />
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl flex items-center justify-center">
                        <SiBootstrap color="#7952B3" size={60} />
                    </div>
                </div>

                {/* Experience Section */}
                <div className="flex flex-col gap-6 md:w-3/5">
                    <div className="bg-slate-950 bg-opacity-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold">Skills & Expertise</h2>
                        <ul className="list-disc list-inside text-sm mt-2">
                            <li>Interface Design Prowess: Creating engaging, modern user interfaces</li>
                            <li>Web Application Development: Building responsive and dynamic web apps</li>
                            <li>API Integration Skills: Efficient integration of APIs in projects</li>
                            <li>React Expertise: Proficient in utilizing React for interactive solutions</li>
                            <li>Technical Expertise: Excellent in HTML, CSS, JavaScript</li>
                            <li>Adaptive Learner: Eager to learn and implement new technologies</li>
                        </ul>
                    </div>

                    <div className="bg-slate-950 bg-opacity-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold">Personal Projects</h2>
                        <ul className="list-disc list-inside text-sm mt-2">
                            <li>Built a responsive <b>Expense Tracker</b> using React.js and Tailwind CSS</li>
                            <li>Developed an <b>Audio/Video Player</b> with React.js and Tailwind CSS</li>
                            <li>Created a <b>Cooking Website</b> using React.js, Tailwind CSS, and API Integration</li>
                            <li>Designed a <b>Portfolio Website</b> using React.js and Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
