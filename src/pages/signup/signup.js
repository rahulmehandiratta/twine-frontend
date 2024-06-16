// SignupPage.jsx

import React, { useState } from 'react';
import './SignupPage.css'; // Import your custom CSS file if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        mobile: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can clear the form fields after submission if needed
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            mobile: ''
        });
    };

    return (
        <div className="signup-page">
            <div className="background-image"/>
            <div className="container ">
                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-5 ">
                        <h2 className="signup-logo mb-3">Twine ❤️</h2>
                        <div className="card signup-div">
                            <div className="card-body signup-div">
                                <h2 className="card-title text-center signup-title mb-3">Sign Up Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control signup-div underline-input"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control signup-div underline-input"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                    <div className="form-group  mb-3">
                                        <div className="input-group" >
                                            <input
                                                type="text"
                                                className="form-control signup-div underline-input"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                                placeholder="Username"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control signup-div underline-input"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control signup-div underline-input"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control signup-div underline-input"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    <button type="submit" className="btn signup-button">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
