import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons
import "../Style/index.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">     
        <div className="row my-4">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaLock /></span>
                      <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <p>
                      New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary col-12 mt-3" type="submit">
                      Login
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

export default Login;
