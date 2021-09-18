import React from 'react';
import whiteLogo from '../assets/tradeify_logo_white.png'
import {BiUserCircle} from 'react-icons/bi'
import { useHistory } from 'react-router';
import '../css/dashboard.css';


function TopBar(){

    const accountBalance = localStorage.getItem('user_balance');
    
    const history = useHistory();

    function rngPrice(min, max){
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    const Today = () => {
        let dprice = parseInt(localStorage.getItem('originalDprice'));
        localStorage.setItem("diamond", dprice);
        let eprice = parseInt(localStorage.getItem('originalEprice'));
        localStorage.setItem("emerald", eprice);
        let rprice = parseInt(localStorage.getItem('originalRprice'));
        localStorage.setItem("ruby", rprice);

        window.location.reload();
    }

    const NextDay = () => {
        
        let dprice = parseInt(localStorage.getItem('diamond'));
        dprice += parseInt(rngPrice(10,25));
        localStorage.setItem("diamond", dprice);
        let eprice = parseInt(localStorage.getItem('emerald'));
        eprice += parseInt(rngPrice(8,15));
        localStorage.setItem("emerald", eprice);
        let rprice = parseInt(localStorage.getItem('ruby'));
        rprice += parseInt(rngPrice(3,9));
        localStorage.setItem("ruby", rprice);
        
        window.location.reload();
        console.log("next day");
    }

    const Logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        history.push("/");
        window.location.reload();
    }
    
    return(
        <div> 
            <div title = "topBar" className="topNavBar">
                <img
                className="whiteLogo"
                alt="website logo"
                src={whiteLogo}
                heigth="120"
                width="240"
                />

                <p title = "userBalance" className="balance"> {accountBalance} $</p>
                <button className="dayBT" onClick={NextDay}>
                Next Day
                </button>

                <button className="dayBT" onClick={Today}>
                Today
                </button>
                <button title = "logOutBT" className="logoutBT" onClick={Logout}>
                <BiUserCircle className="userIcon" size="2em" />
                </button>
            </div>
        </div>       
    )
}

export default TopBar;

/*

*/