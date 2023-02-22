import { Contact } from "../../model";
export interface IContactFormProps{
    contact:Contact;
    action:boolean;
    operation:(contact:Contact)=>void;
    close:()=>void;
}
export interface IContactFormState{
    contact:Contact;
    nameError:string;
    mobileError:string;
    emailError:string;
    landlineError:string;
    websiteError:string;
    addressError:string;
    formError:string;
    isAdd:boolean,
}