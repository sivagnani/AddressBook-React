import React from "react";
import "./contactForm.css";
import { Contact } from "../../model";
import { IContactFormProps, IContactFormState } from "./IContactForm";
import { emptyContact } from "../../data";
import { validate } from "./validations";
export default class ContactForm extends React.Component<IContactFormProps, IContactFormState>{
    constructor(props: IContactFormProps) {
        super(props);
        this.state = {
            id: props.contact.id,
            name: props.contact.name,
            email: props.contact.email,
            mobile: props.contact.mobile,
            landline: props.contact.landline,
            website: props.contact.website,
            address: props.contact.address,
            nameError: true,
            mobileError: true,
            emailError: true,
            landlineError: true,
            websiteError: true,
            addressError: true,
            formError: true,
        }
    }
    // static getDerivedStateFromProps(props:IContactFormProps,state:IContactFormState){
    //     return{
    //         id:props.contact.id,
    //         name:props.contact.name,
    //         email:props.contact.email,
    //         mobile:props.contact.mobile,
    //         landline:props.contact.landline,
    //         website:props.contact.website,
    //         address:props.contact.address
    //     }
    // }
    handleClick() {
        let bool=this.state.nameError&&this.state.mobileError&&this.state.emailError&&this.state.landlineError&&this.state.websiteError&&this.state.addressError;
        this.setState({formError:bool});
        let newContact=emptyContact;
        if(bool){
            newContact={id:this.state.id,name:this.state.name,email:this.state.email,mobile:this.state.mobile,landline:this.state.landline,website:this.state.website,address:this.state.address};
        }
        return newContact;
    }
    handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        let id=event.target.id;
        let value=event.target.value;
        let error: boolean = validate(id,value);
        switch (id) {
            case "name":
                this.setState({ nameError: error,name:value });
                break;
            case "email":
                this.setState({ emailError: error,email:value });
                break;
            case "mobile":
                this.setState({ mobileError: error,mobile:value });
                break;
            case "landline":
                this.setState({ landlineError: error,landline:value});
                break;
            case "website":
                this.setState({ websiteError: error,website:value });
                break;
            case "address":
                this.setState({ addressError: error,address:value});
                break;
        }
    }
    
    render(): React.ReactNode {
        let error = "Invalid Input";
        let noError = " \xa0 ";
        console.log("hiii");
        return (
            <div className="addForm" id="addDetails">
                <form className="detailsForm" id="createForm">
                    <div className="inputField">
                        <label>Name</label>
                        <input type="text" id="name" onChange={(event) => this.handleInputChange(event)} value={this.state.name}/>
                        <p className="error">{this.state.nameError ? noError: error}</p>
                    </div>
                    <div className="inputField">
                        <label>Email</label>
                        <input type="text" id="email" onChange={(event) => this.handleInputChange(event)} value={this.state.email}/>
                        <p className="error" id="emailError">{this.state.emailError ? noError : error}</p>
                    </div>
                    <div className="inputField smallField">
                        <div className="smallInputField">
                            <label>Mobile</label>
                            <input className="smallInputField" type="text" id="mobile" onChange={(event) => this.handleInputChange(event)} value={this.state.mobile} />
                            <p className="error" id="mobileError">{this.state.mobileError ? noError : error}</p>
                        </div>
                        <div className="smallInputField">
                            <label>Landline</label>
                            <input className="smallInputField" type="text" id="landline" onChange={(event) => this.handleInputChange(event)} value={this.state.landline}/>
                            <p className="error" id="landlineError">{this.state.landlineError ? noError : error}</p>
                        </div>
                    </div>
                    <div className="inputField">
                        <label>Website</label>
                        <input type="text" id="website" onChange={(event) => this.handleInputChange(event) } value={this.state.website}/>
                        <p className="error" id="websiteError">{this.state.websiteError ? noError : error}</p>
                    </div>
                    <div className="inputField">
                        <label>Address</label>
                        <textarea className="address" id="address" onChange={(event) => this.handleInputChange(event)} value={this.state.address}></textarea>
                        <p className="error" id="addressError">{this.state.addressError ? noError : error}</p>
                    </div>
                    <div className="submitField">
                        <input type="button" id="createButton" className="addbtn" value="Add" onClick={this.props.contact==emptyContact?()=>this.props.add(this.handleClick()):()=>this.props.edit(this.props.contact,this.handleClick())}/>
                        <p className="error" id="websiteError">{this.state.formError ? noError:"Enter valid details"}</p>
                    </div>
                </form>
            </div>
        );
    
    }
}