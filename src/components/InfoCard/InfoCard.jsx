import React from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem" height="1.2rem" />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status</b>
                    <span>In Relationship</span>
                </span>
            </div>
            <div className="info">
                <span>
                    <b>Lives In</b>
                </span>
                <span>Dhaka</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at</b>
                </span>
                <span>Bloombrain</span>
            </div>
            <button className="button">Logout</button>
        </div>
    );
};

export default InfoCard;
