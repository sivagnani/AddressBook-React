import React from "react";
import "./navBar.css";
import { INavBarProps, INavBarState } from "./INavBar";
export default class NavBar extends React.Component<INavBarProps,INavBarState>{
    constructor(props:INavBarProps){
        super(props);
        this.state={
            home:true,
            add:false
        }
    }
    render(): React.ReactNode {
        return(<nav className="navigationBar">
        <div className="nav">
            <div className={this.props.activePage?"navItem activePage":"navItem"} onClick={()=>{this.props.onClick(false)}}><p>HOME</p></div>
            <div className={this.props.activePage?"navItem":"navItem activePage"} onClick={()=>this.props.onClick(true)}><p>+ADD</p></div>
        </div>
        <div>
            <img alt="No" src={require("../../media/blog-icon.png")} className="icon"/>
        </div>
    </nav>);
    }
}