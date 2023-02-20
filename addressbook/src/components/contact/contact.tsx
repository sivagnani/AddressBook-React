import "./contact.css";
import { IContactProps,IContactState} from "./IContact";
import React from "react";
export default class Contact extends React.Component<IContactProps,IContactState>{
    render(): React.ReactNode {
        return(
            <div className={this.props.class} onClick={()=>{
                this.props.onClick();
                }}>
                <h1 className="Name">{this.props.name}</h1>
                <p className="Mail">{this.props.email}</p>
                <p className="Mobile">{this.props.mobile}</p>
            </div>
        );
    }
}