import { Contact } from "../../model";
export interface IContactCardProps{
    contact:Contact;
    class:string;
    onCardClick:()=>void;
}
export interface IContactCardState{
}