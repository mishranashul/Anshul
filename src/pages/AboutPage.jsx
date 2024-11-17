import React from 'react'
import { Footer, Navbar } from "../components";
import men from "../Assets/men.jpg";
import wmn from "../Assets/wmn.jpg";
import jwl from "../Assets/jwl.jpg";
import electr from "../Assets/electnc.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Trends Studio
          Founded in 2024, we are dedicated to providing innovative solutions for sustainable living.
          At Trends Studio, we believe in integrity, collaboration, and excellence. These principles guide our actions and shape our culture, ensuring we deliver the best results for our clients and partners
          Our journey began with a simple idea: to create a space where creativity and sustainability could thrive. Since then, we have grown into a diverse team of experts, each bringing unique skills and perspectives to the table.
          We pride ourselves on our commitment to quality and customer satisfaction. Whether it’s through our eco-friendly products or consulting services, we strive to exceed expectations and foster lasting relationships.
          Thank you for taking the time to learn about us. We invite you to explore our website and discover how we can work together to make a difference!</p>

        <h2 className="text-center py-4">Our Products</h2>

        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={men} alt="Men's Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={wmn} alt="Women's Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={jwl} alt="Jewelry" height={1500} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={electr} alt="Electronics" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default AboutPage