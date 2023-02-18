import { Contact } from "../../model";
export interface IContactSummaryProps{
    contactList:Contact[];
    onClick:(id:string)=>void;
    activeContact:Contact;
}
export interface IContactSummaryState{
    
}