import {v4 as uuid} from 'uuid';
import { Contact } from '../model';
export const getContactById=(contacts:Contact[],id:string)=> contacts.filter((contact)=>contact.id===id)[0];
export const deleteContactById=(contacts:Contact[],id:string)=>contacts.filter((contact)=>contact.id!==id);
export const insertContact=(contacts:Contact[],contact:Contact)=>{
    contact.id=uuid();
    contacts.push(contact);
    return contacts;
}
export let updateContact=(newContact:Contact,contacts:Contact[])=>{
    contacts[contacts.indexOf(getContactById(contacts,newContact.id))]=newContact
    return contacts;
}