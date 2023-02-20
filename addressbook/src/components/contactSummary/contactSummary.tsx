import React from "react";
import "./contactSummary.css";
import Contact from "../contact/contact";
import { IContactSummaryProps, IContactSummaryState } from "./IContactSummary";
export default class ContactSummary extends React.Component<IContactSummaryProps,IContactSummaryState>{
    render(){
        return<div className="contactSummary" id="summary">
        <p className="contact">CONTACTS</p>
        {this.props.contactList.map((contact)=><Contact key={contact.id} class={contact.id===this.props.activeContact.id?"eachContactSummary active":"eachContactSummary"} name={contact.name} email={contact.email} mobile={contact.mobile} onClick={()=>{this.props.onContactClick(contact.id)}}/>)}
    </div>;
    }
}