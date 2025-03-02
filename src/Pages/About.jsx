import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const About = () => {
  return (
    <div>
        <Header />
        <div className="bg-light py-5">
      <div className="container">
       
        <div className="row mb-5">
          <div className="col text-center">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead">
              Welcome to <strong></strong>DressDash, your one-stop destination for the latest trends and styles.
            </p>
          </div>
        </div>

       
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="mb-4">Our Mission</h2>
            <p className="fs-5">
              At <strong>DressDash</strong>, we aim to provide high-quality, stylish, and affordable products that
              cater to your unique needs. Our mission is to make fashion accessible to everyone while maintaining
              sustainability and ethical practices.
            </p>
          </div>
        </div>

       
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="mb-4">Meet Our Team</h2>
            <div className="row g-4">
             
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://img.freepik.com/premium-photo/woman-wearing-professional-business-dress-protrait-photos_1020867-19946.jpg" 
                    alt=""
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">Helna M</h3>
                    <p className="card-text">Co-Founder & CEO</p>
                  </div>
                </div>
              </div>

           
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="http://memorandum.com/wp-content/uploads/2016/03/what-to-wear-to-a-client-meeting-professional-work-office-wear-attire-women-business-formal-suit-sheath-dress-fashion-style-blog-memorandum3.jpg" 
                    alt=""
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">Brenda Smith</h3>
                    <p className="card-text">Head of Design</p>
                  </div>
                </div>
              </div>

             
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://img.freepik.com/premium-photo/stunning-shot-business-person-with-offical-office-attire_884630-2042.jpg?w=2000" 
                    alt=""
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">Moran Philip</h3>
                    <p className="card-text">Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="mb-4">Why Choose Us?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border rounded">
                  <h3>Quality Products</h3>
                  <p>We offer only the best quality products that are built to last.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border rounded">
                  <h3>Affordable Prices</h3>
                  <p>Our products are priced to fit your budget without compromising on quality.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border rounded">
                  <h3>Customer Support</h3>
                  <p>Our dedicated support team is here to help you 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="mb-4">Ready to Explore?</h2>
            <p className="fs-5 mb-4">
              Discover our wide range of products and find the perfect fit for your style.
            </p>
            <Link to="/products" className="btn btn-dark btn-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;