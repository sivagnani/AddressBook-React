import React from "react";
import "./contactForm.css";
import { Contact } from "../../model";
import { IContactFormProps, IContactFormState } from "./IContactForm";
import { emptyContact } from "../../constants";
import { validate, validateForm } from "./validations";
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
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: true,
            isAdd:!props.action,
        }
    }
    extractContact() {
        let newContact={id:this.state.id,name:this.state.name,email:this.state.email,mobile:this.state.mobile,landline:this.state.landline,website:this.state.website,address:this.state.address};
        let validForm=validateForm(newContact);
        this.setState({formError:validForm});
        if(validForm){
            return newContact;
        }
        return emptyContact;
    }
    handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        let id=event.target.id;
        let value=event.target.value;
        let error: string = validate(id,value);
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
    resetForm(){
        this.setState({
            id:this.props.contact.id,
            name:this.props.contact.name,
            email:this.props.contact.email,
            mobile:this.props.contact.mobile,
            landline:this.props.contact.landline,
            website:this.props.contact.website,
            address:this.props.contact.address,
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: true,
            isAdd:!this.props.action,
        });
    }
    componentDidUpdate(prevProps:IContactFormProps) {
        if (prevProps !== this.props) {
          this.setState({ 
            name: this.props.contact.name,
            email: this.props.contact.email,
            mobile: this.props.contact.mobile,
            landline: this.props.contact.landline,
            website: this.props.contact.website,
            address: this.props.contact.address,
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: true,
            isAdd:!this.props.action,
         });
        }
      }
    render(): React.ReactNode {
        return (
            <div className="addForm">
                <form className="detailsForm">
                    <div className="formHeader">
                        <h3 className="formError">{this.state.formError?"\xa0":"Enter valid Inputs"}</h3>
                        <img alt="" className="closeIcon" src={require("../../assets/close.png")} onClick={()=>this.props.close()}/>
                    </div>
                    <div className="inputField">
                        <label>Name <sup>*</sup></label>
                        <input type="text" id="name" onChange={(event) => this.handleInputChange(event)} value={this.state.name}/>
                        <p className="error">{this.state.nameError}</p>
                    </div>
                    <div className="inputField">
                        <label>Email <sup>*</sup></label>
                        <input type="text" id="email" onChange={(event) => this.handleInputChange(event)} value={this.state.email}/>
                        <p className="error">{this.state.emailError}</p>
                    </div>
                    <div className="inputField smallField">
                        <div className="smallInputField">
                            <label>Mobile <sup>*</sup></label>
                            <input className="smallInputField" type="text" id="mobile" onChange={(event) => this.handleInputChange(event)} value={this.state.mobile} />
                            <p className="error">{this.state.mobileError}</p>
                        </div>
                        <div className="smallInputField">
                            <label>Landline <sup>*</sup></label>
                            <input className="smallInputField" type="text" id="landline" onChange={(event) => this.handleInputChange(event)} value={this.state.landline}/>
                            <p className="error">{this.state.landlineError}</p>
                        </div>
                    </div>
                    <div className="inputField">
                        <label>Website <sup>*</sup></label>
                        <input type="text" id="website" onChange={(event) => this.handleInputChange(event) } value={this.state.website}/>
                        <p className="error">{this.state.websiteError}</p>
                    </div>
                    <div className="inputField">
                        <label>Address <sup>*</sup></label>
                        <textarea className="address" id="address" onChange={(event) => this.handleInputChange(event)} value={this.state.address}></textarea>
                        <p className="error">{this.state.addressError}</p>
                    </div>
                    <div className="submitField">
                        <input type="button" className="addbtn" value="Reset" onClick={()=>this.resetForm()} />
                        <input type="button" className="addbtn" value={this.state.isAdd?"Add":"Update"} onClick={this.state.isAdd?()=>this.props.add(this.extractContact()):()=>this.props.edit(this.extractContact())}/>
                    </div>
                </form>
            </div>
        );
    
    }
}