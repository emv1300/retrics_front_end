import React from 'react';
import whiteLogo from '../assets/tradeify_logo_white.png'
import {BiUserCircle} from 'react-icons/bi'
import '../css/dashboard.css';
import DiamondCard from './cards/diamondCard';

function DashBoard({Logout}){

    const accountBalance = localStorage.getItem('user_balance');


    const NextDay = () => {
        console.log("next day")
    }
    
    return(
        <div>
            <div className="topNavBar">
                <img
                className="whiteLogo"
                alt="website logo"
                src={whiteLogo}
                heigth="120"
                width="240"
                />

                <p className="balance"> {accountBalance} $</p>
                <button className="nextDayBT" onClick={NextDay}>
                {" "}
                Next day{" "}
                </button>
                <button className="logoutBT" onClick={Logout}>
                <BiUserCircle className="userIcon" size="2em" />
                </button>
            </div>
            <div className="lineUpElements">
                <div className="sideBar"></div>
                <div className="gemCards">
                    <div className="dSpace">
                        <DiamondCard/>
                    </div>
                    
                </div>
            </div>
        </div>       
    )
}

export default DashBoard;

/*

*/