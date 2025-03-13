import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { 
  FaUsers, 
  FaShoppingCart, 
  FaChartPie, 
  FaCashRegister, 
  FaHeadset, 
  FaClipboardList, 
  FaCalendarAlt, 
  FaStore, 
  FaChartLine, 
  FaToolbox, 
  FaTruck, 
  FaHome 
} from "react-icons/fa";
import "./RetailPage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RetailPage = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".animate-icon");
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("icon-animated");
      }, index * 200);
    });
  }, []);

  return (
    <div className="retail-page">
    {/* Hero Section */}
    <section className="retail-hero-section position-relative">
      <div className="retail-hero-wrapper">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-7 order-last order-lg-first">
              <motion.h1
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white mb-4"
              >
                Connected <span className="retail-highlight">Retail Solutions</span> for Your Business
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white mb-4"
              >
                Manage retail operations efficiently and deliver superior customer experiences with our integrated solutions.
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
                  <span style={{ color: '#ffffff' }}>Smart Inventory Management</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span> 
                  <span style={{ color: '#ffffff' }}>Customer Experience Analytics</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span> 
                  <span style={{ color: '#ffffff' }}>Store Operations Optimization</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#ffffff', fontSize: '1.2rem' }}>✔️</span> 
                  <span style={{ color: '#ffffff' }}>Real-time Performance Tracking</span>
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
    <img 
        src="/images/feature-image2.png"
        alt="Retail Solutions" 
        className="img-fluid services-hero-image"
        style={{
            height: 'auto',
            width: '100%', // Increased from default
            maxWidth: '500px', // Added maximum width
            mixBlendMode: 'multiply',
            filter: 'contrast(1) brightness(1.1)',
            WebkitFilter: 'contrast(1) brightness(1.1)',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
            position: 'relative',
            zIndex: 1,
            transform: 'scale(1.1)', // Added slight scale
            margin: '0 -10%' // Added negative margin to prevent container overflow
        }}
    />
</motion.div>
          </div>
        </Container>
      </div>
    </section>
      
    <motion.section 
    className="features-section"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
  <Container>
    <Row className="g-4">
      <Col lg={6} md={12}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="feature-card">
            <Card.Body>
              <motion.div 
                className="d-flex align-items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="feature-icon me-3 text-primary">
                  <FaUsers size={24} />
                </div>
                <h4 className="feature-title m-0 fw-bold">Keep Your Customers Coming Back</h4>
              </motion.div>
              <motion.p 
                className="text-secondary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                A positive customer experience starts with smooth store operations.
              </motion.p>
              <motion.ul 
                className="list-unstyled mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center">
                <FaUsers className="me-3 text-primary" />
                <span className="text-secondary">Positive interactions & visitor management</span>
              </li>
              <li className="d-flex align-items-center">
                <FaCalendarAlt className="me-3 text-primary" />
                <span className="text-secondary">User metrics & space planning</span>
              </li>
              <li className="d-flex align-items-center">
                <FaChartLine className="me-3 text-primary" />
                <span className="text-secondary">Capital projects & financial planning</span>
              </li>
            </ul>
              </motion.ul>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>

      <Col lg={6} md={12}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="feature-card">
            <Card.Body>
              <motion.div 
                className="d-flex align-items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="feature-icon me-3 text-primary">
                  <FaUsers size={30} />
                </div>
                <h4 className="feature-title m-0 fw-bold">Achieve Store Excellence</h4>
              </motion.div>
              <motion.p 
                className="text-secondary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Optimize operations and drive business growth with data-driven insights.
              </motion.p>
              <motion.ul 
                className="list-unstyled mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                 <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center">
                <FaUsers className="me-3 text-primary" />
                <span className="text-secondary">Real-time store performance monitoring</span>
              </li>
              <li className="d-flex align-items-center">
                <FaCalendarAlt className="me-3 text-primary" />
                <span className="text-secondary">Streamlined maintenance management</span>
              </li>
              <li className="d-flex align-items-center">
                <FaChartLine className="me-3 text-primary" />
                <span className="text-secondary">Efficient vendor coordination</span>
              </li>
            </ul>
              </motion.ul>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Row>
  </Container>
</motion.section>

{/* Explore Retail Solutions */}
<motion.section 
    className="solutions-section py-5"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
  <Container>
    <motion.h2 
      className="text-center mb-3 fw-bold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Explore Retail Solutions
    </motion.h2>
    <motion.p 
      className="text-center mb-5 text-secondary"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Enhance your retail operations with these advanced solutions.
    </motion.p>
    <Row className="g-4">
      {[
        { icon: FaToolbox, title: "Facilities Maintenance", text: "Maintain store equipment and ensure performance within your retail locations.", color: "primary" },
        { icon: FaTruck, title: "Dispatch & Vendor Management", text: "Ensure on-time vendor response and service delivery to your retail locations.", color: "warning" },
        { icon: FaHome, title: "Real Estate & Space Planning", text: "Optimize store arrangement and space utilization for maximum efficiency.", color: "danger" }
      ].map((item, index) => (
        <Col md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card className="solution-card shadow-lg p-4 text-center border-0">
              <div className={`card-icon mb-3 mx-auto text-${item.color}`}>
                <item.icon size={42} />
              </div>
              <Card.Title className="fw-bold">{item.title}</Card.Title>
              <Card.Text className="text-secondary">{item.text}</Card.Text>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</motion.section>

      {/* Features Cards */}
      <section className="solutions-section py-5">
  <Container>
    <Row className="g-4">
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-primary">
            <FaUsers size={42} />
          </div>
          <Card.Title className="fw-bold">Customer Engagement</Card.Title>
          <Card.Text className="text-secondary">Enhance customer satisfaction with AI-driven insights and recommendations.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-success">
            <FaShoppingCart size={42} />
          </div>
          <Card.Title className="fw-bold">Smart Inventory</Card.Title>
          <Card.Text className="text-secondary">Automate stock management and prevent losses with real-time tracking.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-danger">
            <FaChartPie size={42} />
          </div>
          <Card.Title className="fw-bold">Data Analytics</Card.Title>
          <Card.Text className="text-secondary">Make informed business decisions with advanced analytics and reporting.</Card.Text>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Additional Solutions */}
      <section className="solutions-section py-5 bg-light">
  <Container>
    
    <Row className="g-4">
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-primary animate-icon">
            <FaCashRegister size={42} />
          </div>
          <Card.Title className="fw-bold">POS System</Card.Title>
          <Card.Text className="text-secondary">Modernize point-of-sale systems for seamless and efficient transactions.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-warning animate-icon">
            <FaHeadset size={42} />
          </div>
          <Card.Title className="fw-bold">Customer Support</Card.Title>
          <Card.Text className="text-secondary">Enhance service quality with AI-powered customer support solutions.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-danger animate-icon">
            <FaClipboardList size={42} />
          </div>
          <Card.Title className="fw-bold">Order Management</Card.Title>
          <Card.Text className="text-secondary">Streamline order tracking, processing, and fulfillment for efficiency.</Card.Text>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Call to Action */}

      <section className="cta-section text-center py-4 bg-dark text-white">
  <Container>
    
    <h2 className="fw-bold">Ready to Transform Your Retail Business?</h2>
    <p className="lead text-light">Join thousands of businesses using our AI-powered solutions.</p>
    <a href="/contactus" className="btn btn-primary btn-lg">Contact Us Today</a>
  </Container>
</section>

    </div>
  );
};

export default RetailPage;