import { Contact } from "../../model";
export interface IContactSummaryProps{
    contactList:Contact[];
    onContactClick:(id:string)=>void;
    activeContactId:string;
}
export interface IContactSummaryState{
    
}