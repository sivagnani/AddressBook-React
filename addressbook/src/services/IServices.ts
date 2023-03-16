import { Contact } from "../model";
export interface IServices{
    id:number;
    getContactById(contacts:Contact[],id:string):Contact;
    deleteContactById(contacts:Contact[],id:string):Contact[];
    insertContact(contacts:Contact[],contact:Contact):Contact[];
    updateContact(newContact:Contact,contacts:Contact[]):Contact[];
}