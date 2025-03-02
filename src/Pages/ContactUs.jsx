import React from "react";
import Header from "./Header";

const ContactUs = () => {
  return (
   <div>
    <Header />
     <div className="bg-light py-5">
      <div className="container">
    
        <div className="row mb-5">
          <div className="col text-center">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">We'd love to hear from you! Reach out to us for any inquiries or feedback.</p>
          </div>
        </div>

      
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <h2 className="mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>

       
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <h2 className="mb-4">Contact Information</h2>
              <p className="mb-3">
                <strong>Email:</strong> DressDash@gmail.com
              </p>
              <p className="mb-3">
                <strong>Phone:</strong> +91 9536732909
              </p>
              <p className="mb-4">
                <strong>Address:</strong> 123 Main St, India
              </p>

              <div className="mb-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773191.845869638!2d61.03656552508039!3d19.69161798211317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1740892764195!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>

           
              <div className="d-flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook fa-2x text-primary"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-2x text-info"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-2x text-danger"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ContactUs;