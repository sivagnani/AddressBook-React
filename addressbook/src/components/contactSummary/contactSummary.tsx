import React from "react";
import "./contactSummary.css";
import EachContact from "../contact/contact";
import { IContactSummaryProps, IContactSummaryState } from "./IContactSummary";
export default class ContactSummary extends React.Component<IContactSummaryProps,IContactSummaryState>{
    constructor(props:IContactSummaryProps){
        super(props); 
    }
    render(){
        let contactTiles:JSX.Element[]=[];
        let contacts=this.props.contactList;
        contactTiles=contacts.map((contact)=><EachContact key={contact.id} class={contact.id===this.props.activeContact.id?"eachContactSummary active":"eachContactSummary"} name={contact.name} email={contact.email} mobile={contact.mobile} onClick={()=>{this.props.onClick(contact.id)}}/>);
        return(<div className="contactSummary" id="summary">
        <p className="contact">CONTACTS</p>
        {contactTiles}
    </div>);
    }
}