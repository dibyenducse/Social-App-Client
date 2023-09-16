import React from 'react';
import Logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';
function LogoSearch() {
    return (
        <div className="LogoSearch">
            <img src={Logo} alt=""></img>
            <div className="Search">
                <input type="text" placeholder="#Explore"></input>
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    );
}

export default LogoSearch;
