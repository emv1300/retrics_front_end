import React from 'react';
import whiteLogo from '../assets/tradeify_logo_white.png'
import {BiUserCircle} from 'react-icons/bi'
import '../css/dashboard.css';

function DashBoard({Logout}){

    
    const NextDay = () => {
        console.log("next day")
    }

    return(
        <React.Fragment>
            
            <div className = "topNavBar">
            
                
                <img className = "whiteLogo" alt = "website logo" src = {whiteLogo}  heigth = "120" width = "240" Align = 'center' />
                
                <p className = "balance"> balance here </p>
                <button className = "nextDayBT" onClick = {NextDay}> Next day </button>
                <button className = "logoutBT" onClick = {Logout}>
                <BiUserCircle className = "userIcon" size = "2em"/>      
                </button>
            

            </div>
            
            
        </React.Fragment>
        
    )
}

export default DashBoard;

/*

*/