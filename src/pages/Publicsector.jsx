import React from "react";
import { motion } from "framer-motion";

function Publicsector() {
    return (
        <>
        <div>
        <section className="hero-section position-relative" style={{ width: '100vw', margin: '0', padding: '0' }}>
    <div className="hero-wrapper" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin: '0',
        padding: '0'
    }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-white mb-2" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                            CONNECTED WORKPLACE FOR
                        </p>
                        
                        <h1 className="text-white" style={{ 
                            fontSize: '3.5rem', 
                            fontWeight: '700',
                            marginBottom: '2rem',
                            lineHeight: '1.2'
                        }}>
                            <span style={{
                                background: 'linear-gradient(120deg, #4a90e2, #8e44ad)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                PUBLIC SECTOR
                            </span>
                        </h1>
                        
                        <p className="text-white mb-4" style={{ 
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            lineHeight: '1.6',
                            margin: '0 auto'
                        }}>
                            Drive digital transformation across government agencies & institutions.
                        </p>

                        <ul className="list-unstyled mb-5" style={{ 
                            color: '#a8b6c1',
                            maxWidth: '500px',
                            margin: '2rem auto'
                        }}>
                            <li className="mb-2">
                                <span style={{ color: '#8e44ad', marginRight: '10px' }}>✓</span> 
                                Clinical equipment and facilities management
                            </li>
                            <li className="mb-2">
                                <span style={{ color: '#8e44ad', marginRight: '10px' }}>✓</span> 
                                Real estate and space planning
                            </li>
                            <li className="mb-2">
                                <span style={{ color: '#8e44ad', marginRight: '10px' }}>✓</span> 
                                Capital planning and projects
                            </li>
                            <li className="mb-2">
                                <span style={{ color: '#8e44ad', marginRight: '10px' }}>✓</span> 
                                OT cybersecurity
                            </li>
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center"
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
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
</section>
  {/* Main Content */}

  <section className="service-details container ps-4">
  <motion.div 
    className="row align-items-center mb-5 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
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
        src="/images/india.jpg" 
        alt="Team Discussion"
        className="img-fluid rounded shadow-lg"
        style={{
          maxWidth: "60%",
          height: "auto"
        }}
      />
    </motion.div>
    
    <motion.div 
      className="col-md-6 mt-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div style={{ maxWidth: "75%", marginRight: "auto", marginLeft: "0" }}>
        <motion.h3 
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <i className="bi bi-globe" /> Connect Your Teams
        </motion.h3>
        <motion.p 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          Consolidate systems across various departments for operational
          efficiency.
        </motion.p>
        <motion.ul 
          className="ps-3 mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {/* List items remain the same */}
          <li className="mb-3 d-flex align-items-center">
  <i className="bi bi-tools" style={{ color: '#3498db', fontSize: '1.2rem', marginRight: '10px' }} /> 
  Maintenance &amp; Asset Management
</li>
<li className="mb-3 d-flex align-items-center">
  <i className="bi bi-building" style={{ color: '#9b59b6', fontSize: '1.2rem', marginRight: '10px' }} /> 
  Physical Space Allocation
</li>
<li className="mb-3 d-flex align-items-center">
  <i className="bi bi-diagram-3" style={{ color: '#e67e22', fontSize: '1.2rem', marginRight: '10px' }} /> 
  Construction Projects
</li>
<li className="mb-3 d-flex align-items-center">
  <i className="bi bi-clipboard-check" style={{ color: '#2ecc71', fontSize: '1.2rem', marginRight: '10px' }} /> 
  Real Estate Planning
</li>
        </motion.ul>
      </div>
    </motion.div>
  </motion.div>


       

  <motion.div 
  className="row align-items-center mb-5 px-4 justify-content-end"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <motion.div 
    className="col-md-6 order-md-2 text-center"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000"
      alt="Team Discussion"
      className="img-fluid rounded shadow-lg"
      style={{ maxWidth: "75%", height: "auto" }}
    />
  </motion.div>
  
  <motion.div 
    className="col-md-6 order-md-1 px-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <motion.h3 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <i className="bi bi-bar-chart me-2" /> Achieve Operational Efficiency
    </motion.h3>
    <motion.p 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.7 }}
    >
      Bring together all aspects of enterprise service management into
      one platform.
    </motion.p>
    <motion.ul 
      className="list-unstyled"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <li className="mb-3 d-flex align-items-center">
  <i className="bi bi-link ms-2" style={{ color: '#4a90e2', fontSize: '1.2rem', marginRight: '10px' }} />
  <span>Ensure Complete</span>
</li>
<li className="mb-3 d-flex align-items-center">
  <i className="bi bi-person-check ms-2" style={{ color: '#2ecc71', fontSize: '1.2rem', marginRight: '10px' }} />
  <span>Enable Agencies &amp; Mission</span>
</li>
<li className="mb-3 d-flex align-items-center">
  <i className="bi bi-graph-up-arrow ms-2" style={{ color: '#e74c3c', fontSize: '1.2rem', marginRight: '10px' }} />
  <span>Access Data Anytime</span>
</li>
    </motion.ul>
  </motion.div>
</motion.div>
</section>

 

  {/* some additional contant */}
 <section className="container-fluid bg-primary text-white">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center text-md-start">
        <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
            alt="Factory Worker"
            className="img-fluid rounded"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start mt-4 mt-md-0 px-3">
          <h2 className="fw-bold">
            See How USAID Streamlined Their Supply Chain with EInfratech Systems India
          </h2>
          <p className="mt-3 fs-5">
            "If you can't see what's going on, you really have nothing. You have no ability to make decisions and just constantly guessing, which is how it felt for a long time."
          </p>
          <p className="mt-2 fst-italic">
            - Program of Food for Peace, USAID
          </p>
        </div>
      </div>
    </section>
  {/* Explore Public Sector Solutions */}
  <section className="explore-solutions py-5">
    <div className="container text-center">
      <h2 data-aos="fade-up">Explore Public Sector Solutions</h2>
      <p data-aos="fade-up" className="mb-4">
        Comprehensive solutions for public sector operations.
      </p>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card hover-effect">
            <img src="https://www.camcode.com/wp-content/uploads/2018/06/shutterstock_2399344103-1135x675.webp" alt="Facilities Maintenance" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Facilities Maintenance</h5>
              <p>Ensure smooth operation of public infrastructure.</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="card hover-effect">
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/real_estate_strategic_plan_powerpoint_ppt_template_bundles_slide01.jpg" alt="Real Estate Planning" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Space &amp; Real Estate Planning</h5>
              <p>Optimize space usage and future resource planning.</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="card hover-effect">
            <img src="\public\images\modern-education.jpg" alt="OT Security" className="card-img-top" />
            <div className="card-body text-center">
              <h5>OT Security</h5>
              <p>Enhance cybersecurity for public sector infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<section id="clients" className="clients section mt-4">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
            <h3 className="text-center">Implementation Partners</h3>

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="images/client-1.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="/images/client-2.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="/images/client-3.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="/images/client-4.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="/images/client-5.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="/images/client-6.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
        </div>
      </div>
    </section>


        </>
    )
}

export default Publicsector;