import React from "react";
import { Footer, Navbar } from "../components";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa"; // Import icons
import "../Style/index.css"; // Ensure your CSS is properly set up

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 ">      
        <div className="row my-4">
          <div className="col-md-6 col-lg-6 col-sm-10 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Message" className="form-label">Message</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaCommentDots /></span>
                      <textarea
                        rows={5}
                        className="form-control"
                        id="Message"
                        placeholder="Enter your message"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary col-12 mt-3"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
