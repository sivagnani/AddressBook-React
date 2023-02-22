import "./contactCard.css";
import { IContactCardProps,IContactCardState} from "./IContactCard";
import React from "react";
export default class contactCard extends React.Component<IContactCardProps,IContactCardState>{
    render(): React.ReactNode {
        return(
            <div className={this.props.class} onClick={()=>{this.props.onCardClick();}}>
                <h1 className="Name">{this.props.contact.name}</h1>
                <p className="Mail">{this.props.contact.email}</p>
                <p className="Mobile">{this.props.contact.mobile}</p>
            </div>
        );
    }
}