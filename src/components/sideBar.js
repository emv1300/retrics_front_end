import React from "react";
import { SideBarData } from "./sideBarData";
import "../css/sidebar.css"

function SideBar() {

    return(
        <div title = "sideBar" className = "SideBar">
            <ul className = "SideBarList">
            {
                SideBarData.map((val, key) =>{

                    return(

                        <li className = "SideBarListElements" key = {key} onClick = {() => {window.location.pathname= val.link}}>
                            <div> {val.title} </div>
                        </li>

                    )

                })

            }
            </ul>
        </div>
    )
}

export default SideBar;