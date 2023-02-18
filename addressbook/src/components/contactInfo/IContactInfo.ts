import { Contact } from "../../model";
export interface IContactInfoProps{
    activeContact:Contact;
    delete:(id:string)=>void;
    edit:()=>void;
}
export interface IContactInfoState{
    
}