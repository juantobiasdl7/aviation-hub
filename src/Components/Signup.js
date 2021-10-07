import React from 'react';

const Signup = () => {
    return (
        <div className="d-flex justify-content-center">
            <form className="w-75 p-5 shadow-lg p-3 bg-white rounded">
                <h3>Register</h3>

                <div className="form-group mb-2">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group mb-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <div className="d-flex justify-content-end">
                    <p className="forgot-password">
                        Already registered <a href="#">log in?</a>
                    </p>
     