import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { contactInfo, socialLinks } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Send } from "lucide-react";
import TextInput from "../input/TextInput";
import SuccessModal from "../SuccessModal";

const Contact = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulamos el llamado de API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({name: "", email: "", phone: "", message: ""});
        // Ocultar automáticamente el modal de éxito después de 3 segundos
        setTimeout(() => setShowSuccess(false), 3000);
    }

    return (
        <section ref = {sectionRef} className = {`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} relative overflow-hidden`} id = "contact">
            <motion.div style = {{ y }} className = "absolute inset-0 overflow-hidden">
                <div className = {`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`} />
                <div className = {`absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`} />
            </motion.div>
            <div className = "max-w-6xl mx-auto relative z-10">
                <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "text-center mb-20">
                    <motion.div variants = {itemVariants} className = {`text-sm uppercase tracking-wider ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-4`}>
                        Conectemos
                    </motion.div>
                    <motion.h2 variants = {itemVariants} className = {`text-3xl md:text-5xl font-light mb-6`}>
                        Ponte en contacto <span className = "text-blue-500 font-medium">conmigo</span>
                    </motion.h2>
                    <motion.p variants = {itemVariants} className = {`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Siempre abierto a nuevas oportunidades y proyectos que inspiren creatividad e innovación, transformando ideas en experiencias digitales que conecten con las personas.
                    </motion.p>
                </motion.div>
                <div className = "grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "">
                        <motion.div variants = {itemVariants} className = {`p-8 rounded-2xl border ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50/80 border-gray-200"} backdrop-blur-sm`}>
                            <h3 className = "text-2xl font-medium mb-8 text-center">
                                Envíame un mensaje
                            </h3>
                            <div className = "space-y-6">
                                <div className = "grid md:grid-cols-2 gap-6">
                                    <TextInput isDarkMode = {isDarkMode} value = {formData.name} handleInputChange = {(text) => handleInputChange("name", text)} label = "Tu nombre" />
                                    <TextInput isDarkMode = {isDarkMode} value = {formData.email} handleInputChange = {(text) => handleInputChange("email", text)} label = "Tu correo" />
                                </div>
                                <TextInput isDarkMode = {isDarkMode} value = {formData.phone} handleInputChange = {(text) => handleInputChange("phone", text)} label = "Tu celular" />
                                <TextInput isDarkMode = {isDarkMode} value = {formData.message} handleInputChange = {(text) => handleInputChange("message", text)} label = "Tu mensaje" />
                                <motion.button whileHover = {{ y: -2, scale: 1.02 }} whileTap = {{ scale: 0.98 }} disabled = {isSubmitting} className = "flex items-center justify-center space-x-2 w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300" onClick = {handleSubmit}>
                                    {
                                        isSubmitting ? (
                                            <>
                                                <motion.div animate = {{ rotate: 360 }} transition = {{ duration: 1, repeat: Infinity, ease: "linear" }} className = "w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                                <span>Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size = {18} />
                                                <span>Enviar mensaje</span>
                                            </>
                                        )
                                    }
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "space-y-8">
                        <motion.div variants = {itemVariants}>
                            <h3 className = "text-2xl font-medium mb-6">
                                Información de contacto
                            </h3>
                            <div className = "space-y-4">
                                {
                                    contactInfo.map((info, i) => (
                                        <motion.div key = {i} variants = {itemVariants} whileHover = {{ x: 4 }} className = {`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-800/30 hover:bg-gray-800/50" : "bg-gray-50/50 hover:bg-gray-100/50"} transition-all duration-300`}>
                                            <div className = {`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
                                                <info.icon size = {20} className = "text-blue-500" />
                                            </div>
                                            <div className = "">
                                                <div className = {`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                                                    {info.label}
                                                </div>
                                                <div className = "font-medium">
                                                    {info.value}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </motion.div>
                        <motion.div variants = {itemVariants}>
                            <h3 className = "text-xl font-medium mb-6">
                                Sígueme
                            </h3>
                            <div className = "grid grid-cols-2 gap-4">
                                {
                                    socialLinks.map((social, i) => (
                                        <motion.a key = {i} href = {social.url} target = "_blank" rel = "noopener noreferrer" whileHover = {{ scale: 1.05, y: -2 }} whileTap = {{ scale: 0.95 }} className = {`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${isDarkMode ? "bg-gray-800/50 border-gray-700 hover:border-gray-600" : "bg-white/80 border-gray-200 hover:border-gray-300"} ${social.bgColor} ${social.color}`}>
                                            <social.icon size = {20} className = "" />
                                            <span className = "font-medium">
                                                {social.name}
                                            </span>
                                        </motion.a>
                                    ))
                                }
                            </div>
                        </motion.div>
                        <motion.div variants = {itemVariants} className = {`p-6 rounded-xl border ${isDarkMode ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"}`}>
                            <div className = "flex items-center space-x-3 mb-2">
                                <div className = "w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className = "font-medium text-green-500">
                                    Disponible para nuevos proyectos
                                </span>
                            </div>
                            <p className = {`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                Abierto a colaborar en iniciativas que integren creatividad, estrategia y tecnología para generar experiencias digitales únicas.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div initial = "hidden" animate = {isInView ? "visible" : "hidden"} variants = {containerVariants} className = "text-center mt-20">
                    <motion.div variants = {itemVariants} className = {`max-w-2xl mx-auto p-8 rounded-2xl border ${isDarkMode ? "bg-gray-800/30 border-gray-700" : "bg-gray-50/50 border-gray-200"}`}>
                        <h3 className = "text-xl font-medium mb-4">
                            ¿Te gustaría coordinar una llamada?
                        </h3>
                        <p className = {`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6`}>
                            Nada como una buena conversación para dar vida a las ideas, agenda una llamada y descubramos juntos cómo puedo ayudarte con tu proyecto.
                        </p>
                        <motion.button whileHover = {{ y: -2, scale: 1.05 }} whileTap = {{ scale: 0.98 }} className = {`px-6 py-3 rounded-full border font-medium transition-all duration-300 ${isDarkMode ? "border-gray-600 hover:border-blue-500 hover:text-blue-400" : "border-gray-300 hover:border-blue-500 hover:text-blue-600"}`}>
                            Agendar llamada
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <SuccessModal showSuccess = {showSuccess} setShowSuccess = {setShowSuccess} isDarkMode = {isDarkMode} />
        </section>
    )
}

export default Contact;