import { Contact } from "../../model";
export interface IContactFormProps{
    contact:Contact;
    add:(contact:Contact)=>void;
    edit:(oldContact:Contact,newContact:Contact)=>void;
}
export interface IContactFormState{
    id:string,
    name:string,
    email:string,
    mobile:string,
    landline:string,
    website:string,
    address:string
    nameError:boolean;
    mobileError:boolean;
    emailError:boolean;
    landlineError:boolean;
    websiteError:boolean;
    addressError:boolean;
    formError:boolean
}