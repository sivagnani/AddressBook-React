import {v4 as uuid} from 'uuid';
import { Contact } from './model';
export let getContactById=(contacts:Contact[],id:string)=> contacts.filter((contact)=>contact.id===id);
export let deleteContactById=(contacts:Contact[],id:string)=>contacts.filter((contact)=>contact.id!==id);
export let insertContact=(contacts:Contact[],contact:Contact)=>{
    contact.id=uuid();
    contacts.push(contact);
    return contacts;
}
export let updateContact=(oldContact:Contact,newContact:Contact,contacts:Contact[])=>{
    newContact.id=oldContact.id;
    contacts[contacts.indexOf(oldContact)]=newContact;
    return contacts;
}