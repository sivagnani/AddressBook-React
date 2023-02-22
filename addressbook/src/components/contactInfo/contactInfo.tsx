import React from "react";
import "./contactInfo.css";
import { IContactInfoProps, IContactInfoState } from "./IContactInfo";
export default class ContactInfo extends React.Component<IContactInfoProps, IContactInfoState>{
    render() {
        return (<div className="contactInfo">
            <div className="nameSection">
                <h1 className="name">{this.props.activeContact.name}</h1>
                <div className="center">
                    <div className="modifySection">
                        <div className="modify" onClick={() => this.props.edit()}>
                            <img alt="" className="editSymbol" src={require("../../assets/edit1.jpg")} />
                            <p className="btn">EDIT</p>
                        </div>
                        <div className="modify" onClick={() => this.props.delete(this.props.activeContact.id)}>
                            <img alt="" className="deleteSymbol" src={require("../../assets/delete2.png")} />
                            <p className="btn">DELETE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="content"><p>Email:</p><pre>{this.props.activeContact.email}</pre></div>
                <div className="content"><p>Mobile:</p><pre>{this.props.activeContact.mobile}</pre></div>
                <div className="content"><p>Landline:</p><pre>{this.props.activeContact.landline}</pre></div>
                <div className="content"><p>Website:</p><pre>{this.props.activeContact.website}</pre></div>
                <div className="content"><p>Address:</p><pre>{this.props.activeContact.address}</pre></div>
            </div>
        </div>);
    }
}