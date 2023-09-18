import React from 'react';
import profileImg from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

function PostShare() {
    return (
        <div className="PostShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" placeholder="What is on your mind" />
                <div className="postOptions">
                    <div className="option" style={{ color: 'var(--photo)' }}>
                        <UilScenery />
                        Photo
                        <div
                            className="option"
                            style={{ color: 'var(--video)' }}
                        >
                            <UilPlayCircle />
                            video
                        </div>
                        <div
                            className="option"
                            style={{ color: 'var(--location)' }}
                        >
                            <UilLocationPoint />
                            Location
                        </div>
                        <div
                            className="option"
                            style={{ color: 'var(--schedule)' }}
                        >
                            <UilSchedule />
                            Schedule
                        </div>
                        <button className="button ps-button">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostShare;
