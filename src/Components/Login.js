import React from 'react';
import Logo from '../Media/proximo.png';

const Login = () => {
    return (
        <div className="d-flex justify-content-center">
            <form className="w-75 p-5 shadow-lg p-3 bg-white rounded">
                <h3 className="text-center">Log in</h3>

                <div className="form-group mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group mb-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block mb-2">Sign in</button>
                <p className="forgot-password text-center">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

export {Login};
