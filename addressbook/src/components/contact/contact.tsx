import "./contact.css";
import { IContactProps,IContactState} from "./IContact";
import React from "react";
export default class EachContact extends React.Component<IContactProps,IContactState>{
    constructor(props:IContactProps){
        super(props);
        this.state={
            class:"eachContactSummary"
        }
    }
    setActive(){
        this.setState({class:"eachContactSummary active"});
    }
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