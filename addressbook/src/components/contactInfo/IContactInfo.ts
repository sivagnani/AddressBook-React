import { Contact } from "../../model";
export interface IContactInfoProps{
    contactList:Contact[];
    params:{id:string};
    delete:(id:string)=>void;
    edit:()=>void;
}
export interface IContactInfoState{
    isMounted:boolean;
    contact:Contact;
}