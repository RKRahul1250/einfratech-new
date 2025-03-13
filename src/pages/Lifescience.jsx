import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const LifeScience1 = () => {
    return (
        <>
            <section className="services-hero">
    <div className="features-hero-wrapper">
        <div className="container">
            <div className="row align-items-center"> {/* Changed from align-items-left */}
                <div className="col-lg-7 order-last order-lg-first" style={{ paddingLeft: '2rem' }}> {/* Reduced padding */}
                <motion.h1
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mb-4"
    style={{
        fontSize: '3.5rem',
        fontWeight: 'bold',
        lineHeight: '1.2',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }}
>
    Advanced
    <span className="highlight" style={{ display: 'block', margin: '0.2rem 0' }}>Life Sciences</span>
    Solutions
</motion.h1>
                    
<motion.p
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-4"
    style={{ 
        fontSize: '1.1rem',
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
    Transforming life sciences facilities with innovative management solutions...
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
                            color: '#ffffff'
                        }}
                    >
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>GxP & Non-GxP Asset Management</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Lab Equipment Calibration</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Compliance Management</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span>
                            <span style={{ color: '#ffffff' }}>Facility Optimization</span>
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
                                    {/* ... keeping the same media queries ... */}
                                </style>
                                
                                <img 
                                    src="/images/life-sciences-hero.png"
                                    alt="Life Sciences Solutions" 
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
        {/* Main Content */}

        <section className="service-details container">
  <motion.div 
    className="row align-items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.div 
      className="col-md-6 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600"
        alt="Team Discussion"
        className="img-fluid rounded shadow-lg"
        style={{ height: '40vh' }}
      />
    </motion.div>
    <motion.div 
      className="col-md-6 mt-3 px-3"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <i className="bi bi-heart-pulse" /> Keep Your Operations Running Smoothly
      </motion.h3>
      <div className="text-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          Bringing life-saving therapies to market is complex. Your software should simplify—not complicate—facility and lab management.
        </motion.p>
        <motion.ul 
    className="list-unstyled"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.8 }}
    style={{ 
        marginLeft: '0',
        paddingLeft: '0',
        width: '100%',
        textAlign: 'left'
    }}
>
    <li style={{ 
        marginBottom: '1rem', 
        display: 'flex', 
        alignItems: 'flex-start',
        gap: '8px',
        paddingLeft: '0'
    }}>
        <span style={{ color: '#0066cc', marginTop: '4px' }}>✔</span>
        <span>GxP & Non-GxP Asset Management</span>
    </li>
    <li style={{ 
        marginBottom: '1rem', 
        display: 'flex', 
        alignItems: 'flex-start',
        gap: '8px',
        paddingLeft: '0'
    }}>
        <span style={{ color: '#0066cc', marginTop: '4px' }}>✔</span>
        <span>Real Estate & Space Planning</span>
    </li>
    <li style={{ 
        marginBottom: '1rem', 
        display: 'flex', 
        alignItems: 'flex-start',
        gap: '8px',
        paddingLeft: '0'
    }}>
        <span style={{ color: '#0066cc', marginTop: '4px' }}>✔</span>
        <span>Capital Planning & Projects</span>
    </li>
</motion.ul>
      </div>
    </motion.div>
  </motion.div>

  <motion.div 
    className="row align-items-center mt-5"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
    <motion.div 
        className="col-md-6 order-md-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
    >
        <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000"
            alt="Team Discussion"
            className="img-fluid rounded shadow-lg"
            style={{ height: '40vh', width: '100%', objectFit: 'cover' }}
        />
    </motion.div>
    <motion.div 
        className="col-md-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
    >
        <div className="ps-0"> {/* Removed ps-5 padding */}
            <motion.h3 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{ fontSize: '1.75rem', fontWeight: '600' }}
            >
                <i className="bi bi-sliders me-2" /> Simplify Your Workplace
            </motion.h3>
            <motion.div 
                className="text-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
            >
                <p className="mb-4">
                    Manage all facility and lab operations seamlessly with a <strong>single platform</strong>.
                </p>
                <motion.ul 
                    className="list-unstyled"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    style={{ marginLeft: '0', paddingLeft: '0' }}
                >
                    <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-people me-2" /> 
                        <strong>Break Down Silos</strong>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-gear-wide me-2" /> 
                        <strong>Optimize Operations</strong>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-check-circle me-2" /> 
                        <strong>Be Always Audit-Ready</strong>
                    </li>
                </motion.ul>
            </motion.div>
        </div>
    </motion.div>
</motion.div>
</section>

        {/* Explore Life Sciences Solutions (Now Below the Main Content) */}
        <section className="explore-solutions py-2">
          <div className="container text-center">
            <h2 data-aos="fade-up">Explore Life Sciences Solutions</h2>
            <p data-aos="fade-up" className="mb-4">
              Manage your facilities, assets, and compliance effortlessly.
            </p>
            <div className="row">
              {/* Card 1: GxP Asset Management */}
              <div className="col-md-4 mb-4" data-aos="fade-up">
                <div className="card hover-effect">
                  <img src="\images\homewho.jpg" alt="GxP" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5>GxP Asset Management</h5>
                    <p>Ensure compliance and streamline asset tracking.</p>
                  </div>
                </div>
              </div>
              {/* Card 2: Calibration Integration */}
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="card hover-effect">
                  <img src="https://as2.ftcdn.net/v2/jpg/03/22/52/23/1000_F_322522389_VOcO0YZGFNzyR5po7L1hte6Cpqlnc1Nx.jpg" alt="Calibration" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5>Calibration Integration</h5>
                    <p>Automate calibration workflows &amp; ensure accuracy.</p>
                  </div>
                </div>
              </div>
              {/* Card 3: Real Estate & Space Planning */}
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="card hover-effect">
                  <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400" alt="Real Estate Planning" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5>Real Estate &amp; Space Planning</h5>
                    <p>Optimize lab &amp; facility space utilization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* some additional contant */}
        <section className="container-fluid bg-info text-white ">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 text-center text-md-start">
              <img
                src="https://images.unsplash.com/photo-1721354737629-fe43b912c095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
                alt="Factory Worker"
                className="img-fluid publicimg rounded shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0 px-3 ">
              <h2 className="fw-bold">
                How GMP Facilities Use Connected Workplace for Life Sciences
              </h2>
              <p className="mt-3 fs-5">
                Learn how we helped our customer transform their facilities and asset management processes.
              </p>
            </div>
          </div>
        </section>
    

    </>
  );
}

export default LifeScience1;


