import {v4 as uuid} from 'uuid';
import { Contact } from '../model';
import { IServices } from './IServices';
export class Services implements IServices{
    id:number=4;
    getContactById(contacts:Contact[],id:string):Contact{
        return contacts.filter((contact)=>contact.id===id)[0];
    }
    deleteContactById(contacts:Contact[],id:string):Contact[]{
        return contacts.filter((contact)=>contact.id!==id);
    }
    insertContact(contacts:Contact[],contact:Contact):Contact[]{
        contact.id=(++this.id).toString();
        contacts.push(contact);
        return contacts;
    }
    updateContact(newContact:Contact,contacts:Contact[]):Contact[]{
        contacts[contacts.indexOf(this.getContactById(contacts,newContact.id))]=newContact;
        return contacts;
    }
}
