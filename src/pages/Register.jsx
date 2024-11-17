import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa"; // Import icons
import "../Style/index.css"; // Ensure your CSS is properly set up

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
               
                <div className="row my-4">
                    <div className="col-md-6 col-lg-6 col-sm-10 mx-auto">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="Name" className="form-label">Full Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><FaUser /></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Your Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Email" className="form-label">Email address</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><FaEnvelope /></span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="Email"
                                                placeholder="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><FaLock /></span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="Password"
                                                placeholder="Enter your Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><FaPhone /></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter your Phone number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary col-12 mt-3" type="submit">
                                            Register
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

export default Register;
