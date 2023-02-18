import React from "react";
import "./contactInfo.css";
import { IContactInfoProps, IContactInfoState } from "./IContactInfo";
export default class ContactInfo extends React.Component<IContactInfoProps, IContactInfoState>{
    render() {
        return (<div className="contactInfo">
            <div className="nameBar">
                <h1 id="detailedName">{this.props.activeContact.name}</h1>
                <div className="center">
                    <div className="modifyBar">
                        <div className="modify" onClick={() => this.props.edit()}>
                            <img alt="" className="editSymbol" src={require("../../media/edit1.jpg")} />
                            <a className="btn">EDIT</a>
                        </div>
                        <div className="modify" onClick={() => this.props.delete(this.props.activeContact.id)}>
                            <img alt="" className="deleteSymbol" src={require("../../media/delete2.png")} />
                            <a className="btn">DELETE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="content"><p>Email:</p>&nbsp;<pre id="detailedEmail">{this.props.activeContact.email}</pre></div>
                <div className="content"><p>Mobile:</p>&nbsp;<pre id="detailedMobile">{this.props.activeContact.mobile}</pre></div>
                <div className="content"><p>Landline:</p>&nbsp;<pre id="detailedLandline">{this.props.activeContact.landline}</pre></div>
                <div className="content"><p>Website:</p>&nbsp;<pre id="detailedWebsite">{this.props.activeContact.website}</pre></div>
                <div className="content"><p>Address:</p>&nbsp;<pre id="detailedAddress">{this.props.activeContact.address}</pre></div>
            </div>
        </div>);
    }
}