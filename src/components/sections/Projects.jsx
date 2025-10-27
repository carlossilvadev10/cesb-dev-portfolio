import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ArrowUpRight, Code2, Globe, Users, Zap } from "lucide-react";
import { projects } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";

const Projects = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef();
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref = {sectionRef} className = {`px-6 py-24 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`} id = "projects">
            <div className = "absolute inset-0 overflow-hidden">
                <div className = {`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`} />
                <div className = {`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`} />
            </div>
            <div className = "max-w-7xl mx-auto relative z-10">
                <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "text-center mb-20">
                    <motion.div variants = {itemVariants} className = {`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-4`}>
                        Portafolio
                    </motion.div>
                    <motion.h2 variants = {itemVariants} className = "text-3xl md:text-5xl font-light mb-6">
                        Projectos <span className = "text-blue-500 font-medium">recientes</span>
                    </motion.h2>
                    <motion.p variants = {itemVariants} className = {`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto font-light`}>
                        Una selección de proyectos recientes que reflejan mi enfoque en la creación de soluciones web funcionales, modernas y centradas en el usuario.
                    </motion.p>
                </motion.div>
                <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project) => (
                            <ProjectCard key = {project.id} project = {project} isDarkMode = {isDarkMode} />
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;