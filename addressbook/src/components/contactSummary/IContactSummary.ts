import { Contact } from "../../model";
export interface IContactSummaryProps{
    contactList:Contact[];
    onContactClick:(id:string)=>void;
    activeContact:Contact;
}
export interface IContactSummaryState{
    
}