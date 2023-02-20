import { Contact } from "../../model";
export interface IContactFormProps{
    contact:Contact;
    action:boolean;
    add:(contact:Contact)=>void;
    edit:(newContact:Contact)=>void;
    close:()=>void;
}
export interface IContactFormState{
    id:string,
    name:string,
    email:string,
    mobile:string,
    landline:string,
    website:string,
    address:string
    nameError:string;
    mobileError:string;
    emailError:string;
    landlineError:string;
    websiteError:string;
    addressError:string;
    formError:boolean;
    isAdd:boolean
}