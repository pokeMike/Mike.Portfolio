import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return(
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I am Mayank Sahu</h1>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a passionate Web Developer with experience in React, JavaScript, and front-end technologies. I love building modern, responsive, and user-friendly web applications that enhance digital experiences. I always strive to deliver clean, efficient, and scalable solutions.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59,130,246,0.4)]">View Projects</a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59,130,246,0.2)] hover:bg-blue-500/10">Contact Me</a>
            </div>
            </RevealOnScroll>
        </section>
    );
};