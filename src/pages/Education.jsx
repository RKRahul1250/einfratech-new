import React from "react";
import "./Education.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="education-page">
    <section className="education-hero">
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
        fontSize: '3rem', // Reduced from 3.5rem
        fontWeight: 'bold',
        lineHeight: '1.2',
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }}
>
    Empowering
    <span className="highlight" style={{ display: 'block', margin: '0.2rem 0' }}>Digital Learning</span>
    & Collaboration
</motion.h1>

<motion.p
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-4"
    style={{ 
        fontSize: '1rem', // Reduced from 1.1rem
        lineHeight: '1.6',
        color: '#000000',
        maxWidth: '600px',
        textAlign: 'left',
        marginLeft: '0',
        paddingLeft: '0',
        display: 'block',
        width: '100%'
    }}
>
    Transform education with innovative digital solutions for institutions & learners.
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
                                color: '#000000'
                            }}
                        >
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: '#000000', fontSize: '1.2rem' }}>✔️</span>
                                <span style={{ color: '#000000' }}>Smart Classroom Solutions</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: '#000000', fontSize: '1.2rem' }}>✔️</span>
                                <span style={{ color: '#000000' }}>E-Learning Platforms</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: '#000000', fontSize: '1.2rem' }}>✔️</span>
                                <span style={{ color: '#000000' }}>Interactive Learning Tools</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: '#000000', fontSize: '1.2rem' }}>✔️</span>
                                <span style={{ color: '#000000' }}>Education Analytics</span>
                            </li>
                        </motion.ul>
                  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-left mt-4"
                >
                  <a
                    href="schedule"
                    className="btn btn-primary btn-lg px-5 py-3"
                    style={{
                      borderRadius: '8px',
                      fontWeight: '500',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Schedule a Demo
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="col-lg-5 mb-4 mb-lg-0 order-first order-lg-last"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img
                  src="/images/educationb.webp"
                  alt="Education Solutions"
                  className="img-fluid education-hero-image"
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
      
      <section className="container education-services my-4 py-4">
      <div className="row align-items-center">
    <div className="col-lg-6 mb-3 mb-lg-0">
      <div className="image-container text-center h-100 d-flex align-items-center">
        <img
          src="/images/modern-education.jpg"
          alt="Digital Classroom"
          className="img-fluid rounded shadow"
          style={{ 
            width: '90%',
            height: '550px',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
    
    <div className="col-lg-6 py-4">
      <div className="service-section h-100" data-aos="fade-up">
        <h2 className="section-title mb-4 px-4">
          <i className="bi bi-mortarboard me-2"></i>
          Enhance Learning Experiences
        </h2>
        <div className="features-list px-4">
          <div className="feature-item mb-4">
            <i className="bi bi-cloud-fill"></i>
            <span>Cloud-based Learning Management Systems</span>
          </div>
          <div className="feature-item mb-4">
            <i className="bi bi-laptop-fill"></i>
            <span>Virtual Classrooms & Interactive Tools</span>
          </div>
          <div className="feature-item mb-4">
            <i className="bi bi-people-fill"></i>
            <span>Collaborative Learning Platforms</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-3 px-4">
  <div className="container">
    <div className="testimonial-content text-center">
      <h2 className="mb-3">How Institutions Embrace Digital Learning</h2>
      <p className="testimonial-text mb-2">
        "Integrating technology into our curriculum has completely transformed how students learn and engage."
      </p>
      <p className="testimonial-author mb-1">
        - Principal, Leading Educational Institution
      </p>
    </div>
  </div>
</section>





      
      {/* Solutions Section */}
      <section className="education-solutions py-4">
        <div className="container text-center">
          <h2 data-aos="fade-up" className="mb-2">Explore Education Solutions</h2>
          <p data-aos="fade-up" className="mb-4 solution-subtitle">
            Comprehensive solutions for modern learning environments.
          </p>
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0" data-aos="fade-up">
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">E-learning Platforms</h5>
                  <p className="mb-0">Enable remote and self-paced learning for students worldwide.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education5.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">Smart Classrooms</h5>
                  <p className="mb-0">Enhance interactive learning with digital tools and AI integration.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education4.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">Education Analytics</h5>
                  <p className="mb-0">Leverage data insights to track progress and optimize learning strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-4">
        <div className="container text-center">
          <h3 data-aos="fade-up" className="mb-2">Ready to Transform Your Educational Institution?</h3>
          <p data-aos="fade-up" className="mb-3">
            Let us help you implement innovative digital solutions for your learning environment.
          </p>
          <a href="/contactus" className="btn btn-primary btn-lg">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}

export default Education;