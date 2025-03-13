import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <>
                        <section className="services-hero">
    <div className="features-hero-wrapper">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 order-last order-lg-first" style={{ paddingLeft: '2rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-4"
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            lineHeight: '1.2',
                            color: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                    >
                        Comprehensive
                        <span className="highlight" style={{ display: 'block', margin: '0.2rem 0' }}>IT Services</span>
                        for Your Business
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-4"
                        style={{ 
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            color: '#ffffff',
                            maxWidth: '600px',
                            textAlign: 'left',
                            marginLeft: '0',
                            paddingLeft: '0',
                            display: 'block',
                            width: '100%'
                        }}
                    >
                        Empowering businesses with cutting-edge IT solutions...
                    </motion.p>

                    <motion.ul
                        className="feature-highlights"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ 
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            color: '#ffffff',
                            width: '100%',
                            textAlign: 'left'
                        }}
                    >
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', paddingLeft: '0' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>IT Infrastructure Management</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', paddingLeft: '0' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Cloud Computing Solutions</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', paddingLeft: '0' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Cybersecurity Services</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', paddingLeft: '0' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Digital Transformation</span>
                        </li>
                    </motion.ul>
            </div>
                            
                            <motion.div 
    className="col-lg-5 mb-4 mb-lg-0 order-first order-lg-last"
    initial={{ opacity: 0, x: 50, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    style={{ display: 'flex', justifyContent: 'center' }}
>
    <style>
        {`
            @media (max-width: 991px) {
                .services-hero-image {
                    max-width: 100% !important;
                    transform: scale(1) translateX(-20px) !important;
                    margin: -40% 1% -1% 0 !important;
                }
            }
            @media (min-width: 992px) {
                .services-hero-image {
                    max-width: 100% !important;
                    transform: scale(1) translateX(5px) !important;
                    margin: -40% 1% -1% 0 !important;
                }
            }
        `}
    </style>
    
    <img 
        src="\images\feature-image22.png"
        alt="Services Overview" 
        className="img-fluid services-hero-image"
        style={{
            height: 'auto',
            mixBlendMode: 'multiply',
            filter: 'contrast(1) brightness(1.1)',
            WebkitFilter: 'contrast(1) brightness(1.1)',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
            position: 'relative',
            zIndex: 1
        }}
    />
</motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services section" style={{ paddingTop: '6rem' }}>
                {/* Section Title */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2><u>Our Services</u></h2>
                    <br/>
                </motion.div>

                {/* Services Grid */}
                <div className="container">
                    <div className="row g-4">
                        {servicesData.map((service, index) => (
                            <motion.div 
                                className="col-lg-6" 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1 
                                }}
                            >
                                <div className={`service-item ${service.bgClass} position-relative`}>
                                    <motion.i 
                                        className={`bi ${service.icon} icon`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    />
                                    <motion.div 
                                        className="service-content"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                    >
                                        <h3 className="text-center">{service.title}</h3>
                                        <p>{service.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short" />
                </a>
            </section>
        </>
    );
};

// Services Data
const servicesData = [
    {
        title: "Facility Management",
        description: "Optimize facility operations with AI-driven automation and predictive maintenance.",
        icon: "bi-gear",
        bgClass: "item-cyan"
    },
    {
        title: "Real Estate Planning",
        description: "Enhance space utilization and cost efficiency through data-driven insights.",
        icon: "bi-buildings",
        bgClass: "item-orange"
    },
    {
        title: "Security & Compliance",
        description: "Ensure workplace safety with advanced security solutions and compliance management.",
        icon: "bi-shield-check",
        bgClass: "item-teal"
    },
    {
        title: "Energy & Sustainability",
        description: "Reduce environmental impact with sustainable energy solutions and resource optimization.",
        icon: "bi-lightbulb",
        bgClass: "item-red"
    },
    {
        title: "Remote Workplace Solutions",
        description: "Enable seamless remote work management with integrated cloud-based tools.",
        icon: "bi-globe",
        bgClass: "item-indigo"
    },
    {
        title: "Smart IoT Integration",
        description: "Leverage IoT technology for predictive analytics and intelligent automation.",
        icon: "bi-cpu",
        bgClass: "item-pink"
    }
];

export default Services;