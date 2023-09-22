import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        pasword: '',
        confirmpassword: '',
        username: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="Auth">
            {/* Left Side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Bloombrain</h1>
                    <h6>Social Media Application</h6>
                </div>
            </div>
            {/* Right Side */}
            <div className="a-right">
                <form className="infoForm authForm">
                    <h3>{isSignUp ? 'Sign Up' : 'Log In'}</h3>

                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Usernames"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                        />
                        {isSignUp && (
                            <input
                                type="text"
                                className="infoInput"
                                name="confirmpass"
                                placeholder="Confirm Password"
                            />
                        )}
                    </div>

                    <div>
                        <span
                            style={{ fontSize: '12px', cursor: 'pointer' }}
                            onClick={() => setIsSignUp((prev) => !prev)}
                        >
                            {isSignUp
                                ? 'Already have an account. Login!'
                                : "Don't have an account. Signup!"}
                        </span>
                    </div>
                    <button className="button infoButton" type="submit">
                        {isSignUp ? 'Signup' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
