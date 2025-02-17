import LenoPage from "../../assets/images/Leno Page.png";
import EcommerceWebsite from "../../assets/images/EcommerceWebsite.png";
import Hostdeck from "../../assets/images/Hostdec.png";
import Imagesearch from "../../assets/images/Imagesearch.png";
import Maptyapp from "../../assets/images/Mapty.png";
import Tutor from "../../assets/images/Tutor.png";
import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Leno app</h3>
                    <p className="text-gray-400 mb-4">
                        A health and productivity app webpage.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://moonlit-nougat-50d52e.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://moonlit-nougat-50d52e.netlify.app/"><img src={LenoPage} alt="Leno App" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Ecommerce-Website</h3>
                    <p className="text-gray-400 mb-4">
                        A Generic Ecommerce-website.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://loquacious-panda-9f35a4.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://loquacious-panda-9f35a4.netlify.app/"><img src={EcommerceWebsite} alt="EcommerceWebsite" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Mapty app</h3>
                    <p className="text-gray-400 mb-4">
                    This is a web application where the goal is to log the workouts(running or cycling) for the users in their desired location and set some specifications for their workout accordingly.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript" ,"HTML", "CSS", "Leaflet Api"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://sparkly-snickerdoodle-e5099d.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://sparkly-snickerdoodle-e5099d.netlify.app/"><img src={Maptyapp} alt="Maptyapp" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Image Search</h3>
                    <p className="text-gray-400 mb-4">
                        A test Project named Search-image-edit is a web application that leverages a Free Image API to allow users to search for images, add custom captions and shapes, and download the modified images.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "Free Image API"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://search-and-edit.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://search-and-edit.netlify.app/"><img src={Imagesearch} alt="Imagesearch" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Hostdec</h3>
                    <p className="text-gray-400 mb-4">
                        A Generic Product page.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://practicehostdeck.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://practicehostdeck.netlify.app/"><img src={Hostdeck} alt="Hostdeck" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Tutor</h3>
                    <p className="text-gray-400 mb-4">
                        A Generic Tutor Course. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))
                        }
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <a href="https://tutor-website-5wqw10vdy-mayanks-projects-e41da9e2.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project </a>
                        <a href="https://tutor-website-5wqw10vdy-mayanks-projects-e41da9e2.vercel.app/"><img src={Tutor} alt="Tutor" className="w-full h-auto rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"/></a>
                    </div>
                </div>
            </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}