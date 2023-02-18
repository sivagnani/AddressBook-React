import { Contact } from "./model"
export interface IAppState{
    contactList: Contact[];
    activeContact:Contact;
    showContactInfo:boolean;
    showForm:boolean;
    initialPage:boolean;
    editForm:boolean
}
export interface IAppProps{
    
}