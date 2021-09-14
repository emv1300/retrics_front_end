import React from 'react';
import whiteLogo from '../assets/tradeify_logo_white.png'
import {BiUserCircle} from 'react-icons/bi'
import { useHistory } from 'react-router';
import '../css/dashboard.css';


function TopBar(){

    const accountBalance = localStorage.getItem('user_balance');
    const history = useHistory();

    const NextDay = () => {
        let dprice = parseInt(localStorage.getItem('diamond'));
        dprice += 20;
        localStorage.setItem("diamond", dprice);
        let eprice = parseInt(localStorage.getItem('emerald'));
        eprice += 10;
        localStorage.setItem("emerald", eprice);
        let rprice = parseInt(localStorage.getItem('ruby'));
        rprice += 5;
        localStorage.setItem("ruby", rprice);
        
        window.location.reload()
        console.log("next day")
    }

    const Logout = () => {
        localStorage.clear()
        history.push("/")
        window.location.reload()
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
        </div>       
    )
}

export default TopBar;

/*

*/