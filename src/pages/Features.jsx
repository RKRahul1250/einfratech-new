import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Features.css';

function Features() {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1, 
            transition: { 
                duration: 0.5
            } 
        },
        exit: { opacity: 0 }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <section className="features-hero-section">
                <div className="features-hero-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
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
                            .hero-image {
                                max-width: 150% !important;
                                transform: scale(1.2) !important;
                            }
                        }
                        @media (min-width: 992px) {
                            .hero-image {
                                max-width: 220% !important;
                                transform: scale(1) !important;
                            }
                        }
                    `}
                </style>
                <img 
                    src="\images\feature-image11.png"
                    alt="Features Overview" 
                    className="img-fluid hero-image"
                    style={{
                        height: 'auto',
                        mixBlendMode: 'multiply',
                        filter: 'contrast(1) brightness(1.1)',
                        WebkitFilter: 'contrast(1) brightness(1.1)',
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        margin: '0',
                        position: 'relative',
                        zIndex: 1
                    }}
                />
            </motion.div>
                            
                            <div className="col-lg-7 mt-4 mt-lg-0 order-last order-lg-first">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-white mb-4"
                                >
                                    Innovative Solutions for <span className="highlight">Modern Enterprises</span>
                                </motion.h1>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mb-4"
                                >
                                    Providing seamless and efficient solutions for every challenge. Transform your workplace with our cutting-edge features.
                                </motion.p>
                                
                                <motion.ul
                                    className="feature-highlights"
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    style={{ 
                                        color: '#ffffff',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                        fontWeight: '600',
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                                        <span style={{ color: '#ffffff' }}>Advanced Technology Integration</span>
                                    </li>
                                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                                        <span style={{ color: '#ffffff' }}>Smart Automation Solutions</span>
                                    </li>
                                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                                        <span style={{ color: '#ffffff' }}>Real-time Monitoring Systems</span>
                                    </li>
                                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                                        <span style={{ color: '#ffffff' }}>Secure Cloud Infrastructure</span>
                                    </li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<section id="features" className="features fsection fcustom fcustom" style={{ paddingTop: '6rem' }}>
    <div className="container">
    
        <div id="grid" className="row gx-4 gy-2 align-items-center px-4">
            <div className="col-lg-7 col-md-6 d-flex align-items-center flex-column" style={{ minHeight: "350px" }}>
                <ul className="nav nav-pills w-100" data-aos="fade-up" data-aos-delay="100">
                    <li className="nav-item mb-2 w-100">
                        <a className="nav-link active show p-2 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-1"
                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                            <i className="bi bi-binoculars"></i>
                            <div>
                                <h4 className="d-none d-lg-block">Cloud-Based Access</h4>
                                <p>Manage workplace operations from anywhere with secure cloud solutions.</p>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item mb-2 w-100">
                        <a className="nav-link p-2 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-2"
                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                            <i className="bi bi-box-seam"></i>
                            <div>
                                <h4 className="d-none d-lg-block">Multi-Device Compatibility</h4>
                                <p>Seamless access across desktops, tablets, and mobile devices.</p>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item mb-2 w-100">
                        <a className="nav-link p-2 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-3"
                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                            <i className="bi bi-brightness-high"></i>
                            <div>
                                <h4 className="d-none d-lg-block">Predictive Maintenance</h4>
                                <p>AI-driven alerts to prevent equipment failures before they happen.</p>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item mb-2 w-100">
                        <a className="nav-link p-2 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-4"
                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                            <i className="bi bi-brightness-high"></i>
                            <div>
                                <h4 className="d-none d-lg-block">Custom Workflows</h4>
                                <p>Tailor workplace processes to match specific business needs.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>


            <div className="col-lg-7 col-md-9" style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div className="tab-content img-hover-zoom ms-4" data-aos="fade-up" data-aos-delay="200">
        <div className="tab-pane fade active show" id="features-tab-1">
            <motion.img 
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.6
                    }
                }}
                exit={{ opacity: 0, scale: 0.3, y: 50 }}
                src="/images/cloud.png" 
                alt="" 
                className="img-fluid img-rounded" 
                style={{ 
                    width: '120%', 
                    height: 'auto', 
                    minHeight: '500px', 
                    objectFit: 'cover', 
                    margin: '0 20px',
                    transform: 'translateX(40px)',
                    borderRadius: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }} 
            />
        </div>
        <div className="tab-pane fade" id="features-tab-2">
            <motion.img 
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.6
                    }
                }}
                exit={{ opacity: 0, scale: 0.3, y: 50 }}
                src="/images/tabs-3.jpg" 
                alt="" 
                className="img-fluid img-rounded" 
                style={{ 
                    width: '120%', 
                    height: 'auto', 
                    minHeight: '500px', 
                    objectFit: 'cover', 
                    margin: '0 20px',
                    transform: 'translateX(40px)',
                    borderRadius: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }} 
            />
        </div>
        <div className="tab-pane fade" id="features-tab-3">
            <motion.img 
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.6
                    }
                }}
                exit={{ opacity: 0, scale: 0.3, y: 50 }}
                src="/images/tabs-2.jpg" 
                alt="" 
                className="img-fluid img-rounded" 
                style={{ 
                    width: '120%', 
                    height: 'auto', 
                    minHeight: '500px', 
                    objectFit: 'cover', 
                    margin: '0 20px',
                    transform: 'translateX(40px)',
                    borderRadius: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }} 
            />
        </div>
        <div className="tab-pane fade" id="features-tab-4">
            <motion.img 
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.6
                    }
                }}
                exit={{ opacity: 0, scale: 0.3, y: 50 }}
                src="/images/tabs-1.jpg" 
                alt="" 
                className="img-fluid img-rounded" 
                style={{ 
                    width: '120%', 
                    height: 'auto', 
                    minHeight: '500px', 
                    objectFit: 'cover', 
                    margin: '0 20px',
                    transform: 'translateX(40px)',
                    borderRadius: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }} 
            />
        </div>
    </div>
</div>

                        </div>
                    </div>
                </section>

                <motion.section 
    id="features-details" 
    className="features-details fsection fcustom"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    <div className="container px-5">
        <div className="row align-items-center gy-3">
            <motion.div 
                className="col-lg-6 col-md-12 text-center img-hover-zoom"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.img 
                    src="/images/features-2.jpg" 
                    className="img-fluid rounded shadow-lg ms-2"
                    alt="Feature 1" 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '95%', height: '80%', marginLeft: '20px', marginRight: 'auto', display: 'block' }} 
                />
            </motion.div>

            <motion.div 
                className="col-lg-6 col-md-12 text-lg-start text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="content px-3" style={{ maxWidth: "100%" }}>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Enhancing Workplace Efficiency with Innovation
                    </motion.h3>
                    <motion.p 
                        style={{ fontSize: "16px", letterSpacing: "-1px", lineHeight: "1.5rem" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                       Optimize your workplace with cutting-edge  and a seamless integration.
                                        Our solutions help in businesses streamline operations, reduce costs,  improve productivity.
                                        Experience smarter way to manage your facilities with real-time insights and automation.
                                        The integration of technology, a creative problem-solving strategies, and a culture of continuous improvement
                                        leads to higher productivity, reduced costs, and enhanced employee satisfaction.
                                        Leveraging  a cutting-edge technology and seamless integration transforms business operations,
                                        making processes more streamlined, cost-effective, a productive.
                                        Experience smarter way to manage your facilities with real-time insights and automation. 
                                        Optimize your workplace with cutting-edge  and a seamless integration.
                    </motion.p>
                </div>
            </motion.div>
        </div>

        <div className="row gy-4 mt-5">
            <motion.div 
                className="col-lg-6 col-md-12 text-lg-start text-center order-lg-1 order-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="content px-3" style={{ maxWidth: "100%" }}>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Smart Workplace Solutions for Enhanced Efficiency
                    </motion.h3>
                    <motion.p 
                        className=""
                        style={{ fontSize: "16px", letterSpacing: "-1px", lineHeight: "1.5rem" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                       Leverage advanced technology to transform your workplace.
                                        Our innovative solutions provide real-time insights,and a enhance
                                        operational efficiency, also and reduce costs. Automate the processes,
                                        improve decision-making, and to create a moreproductive .Gain instant access to crucial data. The integration of
                                        the technology, creative and problem-solving strategies, and a culture
                                        of continuous improvement can lead to higher productivity,
                                        reduced, enhanced an employee satisfaction.
                                        Automate  processes,
                                        improve decision-making,  create a moreproductive.Gain instant access to crucial data. Automate the processes,
                                        improve decision-making, and to create a more productive  environment. Gain instant access to crucial data.
                    </motion.p>
                </div>
            </motion.div>

            <motion.div 
                className="col-lg-6 col-md-12 text-center order-lg-2 order-1 img-hover-zoom"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <motion.img 
                    src="/images/features-3.jpg" 
                    className="img-fluid rounded shadow-lg center-image" 
                    alt="Feature 2" 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                        width: "90%", 
                        height: "80%", 
                        marginTop: '20px', 
                        marginBottom: '10px',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                />
            </motion.div>
        </div>
    </div>
</motion.section>


        </motion.div>
    )
}

export default Features