import { Contact } from "./model"
export interface IRouterState{
    contactList: Contact[];
    activeContact:Contact;
    showContactInfo:boolean;
    showForm:boolean;
    isInitialPage:boolean;
    editForm:boolean
}
export interface IRouterProps{
    
}