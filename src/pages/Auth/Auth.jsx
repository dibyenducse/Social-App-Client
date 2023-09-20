import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Bloombrain</h1>
                    <h6>Social Media Application</h6>
                </div>
            </div>
            <h1>Form</h1>
        </div>
    );
};

function SignUp() {
    return <div className="a-right"></div>;
}

export default Auth;
