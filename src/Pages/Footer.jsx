import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary py-5 mt-5">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-4">
            <img
              src="https://outofoffice.la/cdn/shop/files/ooo.png?v=1735591607&width=190"
              alt="Logo"
              style={{ height: "60px" }}
            />
            <p className="mt-2">
              Your one-stop destination for the latest trends and styles.
            </p>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
             
              <li>
                <Link to="/about" className="text-decoration-none text-dark">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-dark">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-decoration-none text-dark">
                  Login
                </Link>
              </li>
            </ul>
          </div>

      
          <div className="col-md-4 mb-1">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: DressDash@gmail.com</li>
              <li>Phone:+91 67546900763</li>
              <li>Address: 123 street, Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center mt-1">
            <p className="mb-0">
              &copy; 2025 Your Brand Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;