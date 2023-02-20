import React from "react";
import "./navBar.css";
import { INavBarProps, INavBarState } from "./INavBar";
export default class NavBar extends React.Component<INavBarProps,INavBarState>{
    render(): React.ReactNode {
        return(<nav className="navigationBar">
        <div className="nav">
            <div className={this.props.activePage?"navItem activePage":"navItem"} onClick={()=>{this.props.onNavClick(false)}}><p>HOME</p></div>
            <div className={this.props.activePage?"navItem":"navItem activePage"} onClick={()=>this.props.onNavClick(true)}><p>+ADD</p></div>
        </div>
        <div>
            <img alt="No" src={require("../../assets/blog-icon.png")} className="icon"/>
        </div>
    </nav>);
    }
}