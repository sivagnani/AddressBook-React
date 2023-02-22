import React from "react";
import "./contactSummary.css";
import ContactCard from "../contactCard/contactCard";
import { IContactSummaryProps, IContactSummaryState } from "./IContactSummary";
export default class ContactSummary extends React.Component<IContactSummaryProps, IContactSummaryState>{
    render() {
        return <div className="contactSummary" id="summary">
            <p className="contact">CONTACTS</p>
            {this.props.contactList.map((contact) => {
                return <ContactCard key={contact.id} class={contact.id === this.props.activeContactId ? "eachContactSummary active" : "eachContactSummary"} contact={contact} onCardClick={() => { this.props.onContactClick(contact.id) }} />;
            })
            }
        </div>;
    }
}