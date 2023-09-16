import React from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt=""></img>
                <img src={Profile} alt=""></img>
            </div>
            <div className="ProfileName">
                <span>Mith Mum</span>
                <span>HR & Admin</span>
            </div>
        </div>
    );
};

export default ProfileCard;
