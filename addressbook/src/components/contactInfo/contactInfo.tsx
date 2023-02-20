import React from "react";
import "./contactInfo.css";
import { IContactInfoProps, IContactInfoState } from "./IContactInfo";
export default class ContactInfo extends React.Component<IContactInfoProps, IContactInfoState>{
    render() {
        return (<div className="contactInfo">
            <div className="nameBar">
                <h1 >{this.props.activeContact.name}</h1>
                <div className="center">
                    <div className="modifyBar">
                        <div className="modify" onClick={() => this.props.edit()}>
                            <img alt="" className="editSymbol" src={require("../../assets/edit1.jpg")} />
                            <a className="btn">EDIT</a>
                        </div>
                        <div className="modify" onClick={() => this.props.delete(this.props.activeContact.id)}>
                            <img alt="" className="deleteSymbol" src={require("../../assets/delete2.png")} />
                            <a className="btn">DELETE</a>
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