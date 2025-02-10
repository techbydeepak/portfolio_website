import React from 'react';
import ProjectCard from './ProjectCard';

// Importing images
import expenseTrackerImage from '../../assets/Expence-Tracor.webp';
import audioVideoPlayerImage from '../../assets/Video Player.png';
import cookingWebsiteImage from '../../assets/Cooking Website.jpg';
import portfolioWebsiteImage from '../../assets/Potfolio Website.avif';
import bookRentalAppImage from '../../assets/Book Rental.jpg';
import quizAppImage from '../../assets/Quiz.jpg';

function Projects() {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectCard
                    title="Expense Tracker"
                    main="A responsive web app built with React.js and Tailwind CSS to track personal expenses."
                    demoLink="https://github.com/yourusername/expense-tracker-demo"
                    sourceCodeLink="https://github.com/yourusername/expense-tracker"
                    image={expenseTrackerImage} 
                />
                <ProjectCard
                    title="Audio/Video Player"
                    main="A media player app built with React.js and Tailwind CSS for smooth audio and video playback."
                    demoLink="https://github.com/yourusername/audio-video-player-demo"
                    sourceCodeLink="https://github.com/yourusername/audio-video-player"
                    image={audioVideoPlayerImage} 
                />
                <ProjectCard
                    title="Cooking Website"
                    main="A website for recipes with API integration, built using React.js and Tailwind CSS."
                    demoLink="https://github.com/yourusername/cooking-website-demo"
                    sourceCodeLink="https://github.com/yourusername/cooking-website"
                    image={cookingWebsiteImage} 
                />
                <ProjectCard
                    title="Portfolio Website"
                    main="My personal portfolio website showcasing my skills and projects, built with React.js and Tailwind CSS."
                    demoLink="https://github.com/yourusername/portfolio-demo"
                    sourceCodeLink="https://github.com/yourusername/portfolio"
                    image={portfolioWebsiteImage} 
                />
                <ProjectCard
                    title="Book Rental App"
                    main="A book rental app for seamless book sharing and transactions, developed using React.js and Node.js."
                    demoLink="https://github.com/yourusername/book-rental-app-demo"
                    sourceCodeLink="https://github.com/yourusername/book-rental-app"
                    image={bookRentalAppImage} 
                />
                <ProjectCard
                    title="Quiz App"
                    main="A dynamic quiz application with question generation and result analysis, built using React.js and Node.js."
                    demoLink="https://github.com/yourusername/quiz-app-demo"
                    sourceCodeLink="https://github.com/yourusername/quiz-app"
                    image={quizAppImage}
                />
            </div>
        </div>
    );
}

export default Projects;
