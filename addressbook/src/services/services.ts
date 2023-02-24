import {v4 as uuid} from 'uuid';
import { Contact } from '../model';
var id:number=4;
export const getContactById=(contacts:Contact[],id:string):Contact=> {
    return contacts.filter((contact)=>contact.id===id)[0];
}
export const deleteContactById=(contacts:Contact[],id:string):Contact[]=>{
    return contacts.filter((contact)=>contact.id!==id);
}
export const insertContact=(contacts:Contact[],contact:Contact):Contact[]=>{
    contact.id=(++id).toString();
    contacts.push(contact);
    return contacts;
}
export let updateContact=(newContact:Contact,contacts:Contact[]):Contact[]=>{
    contacts[contacts.indexOf(getContactById(contacts,newContact.id))]=newContact
    return contacts;
}