import React from "react";
import "./contactForm.css";
import { IContactFormProps, IContactFormState } from "./IContactForm";
import { emptyContact } from "../../constants";
import { validate, validateForm } from "./validations";
import { Contact } from "../../model";
export default class ContactForm extends React.Component<IContactFormProps, IContactFormState>{
    private errorRef=React.createRef<HTMLHeadingElement>();
    constructor(props: IContactFormProps) {
        super(props);
        this.state = {
            contact:props.contact,
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: "\xa0",
            isAdd:!props.action,
        }
    }
    moveToTop(){
        this.errorRef.current?.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    extractDetailsFromForm() {
        let newContact:Contact= this.state.contact;
        return newContact;
    }
    validate(){
        let newContact:Contact=this.state.contact;
        let error:string=(validateForm(newContact));
        this.setState({formError:error},
            ()=>{
                return (this.state.formError===" \xa0 ") && this.props.operation(newContact)
        });
        this.moveToTop();
    }
    handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        let id:string=event.target.id;
        let value:string=event.target.value;
        let error: string = validate(id,value);
        let duplicateContact:Contact={...this.state.contact}
        let errorMessage:string;
        switch (id) {
            case "name":
                duplicateContact.name=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({ 
                    nameError: error,
                    contact:duplicateContact,
                    formError:errorMessage
                });
                break;
            case "email":
                duplicateContact.email=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({
                     emailError: error,
                     contact:duplicateContact,
                     formError:errorMessage
                    });
                break;
            case "mobile":
                duplicateContact.mobile=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({ 
                    mobileError: error,
                    contact:duplicateContact,
                    formError:errorMessage
                });
                break;
            case "landline":
                duplicateContact.landline=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({ 
                    landlineError: error,
                    contact:duplicateContact,
                    formError:errorMessage
                });
                break;
            case "website":
                duplicateContact.website=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({ 
                    websiteError: error,
                    contact:duplicateContact,
                    formError:errorMessage
                });
                break;
            case "address":
                duplicateContact.address=value;
                errorMessage=validateForm(duplicateContact);
                this.setState({ 
                    addressError: error,
                    contact:duplicateContact,
                    formError:errorMessage
                });
                break;
        }
    }
    resetForm(){
        this.setState({
            contact:this.props.contact,
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: "\xa0",
            isAdd:!this.props.action,
        });
        this.moveToTop();
    }
    componentDidUpdate(prevProps:IContactFormProps) {
        if (prevProps !== this.props) {
          this.setState({ 
            contact:this.props.contact,
            nameError: "\xa0",
            mobileError: "\xa0",
            emailError: "\xa0",
            landlineError: "\xa0",
            websiteError: "\xa0",
            addressError: "\xa0",
            formError: "\xa0",
            isAdd:!this.props.action,
         });
        }
      }
    render(): React.ReactNode {
        return (
            <div className="addForm">
                <form className="detailsForm">
                    <div className="formHeader">
                        <h3 className="formError" id="formError" ref={this.errorRef}>{this.state.formError}</h3>
                        <img alt="" className="closeIcon" src={require("../../assets/close.png")} onClick={()=>this.props.close()}/>
                    </div>
                    <div className="inputField">
                        <label>Name <sup>*</sup></label>
                        <input type="text" id="name" onChange={(event) => this.handleInputChange(event)} value={this.state.contact.name}/>
                        <p className="error">{this.state.nameError}</p>
                    </div>
                    <div className="inputField">
                        <label>Email <sup>*</sup></label>
                        <input type="text" id="email" onChange={(event) => this.handleInputChange(event)} value={this.state.contact.email}/>
                        <p className="error">{this.state.emailError}</p>
                    </div>
                    <div className="inputField smallField">
                        <div className="smallInputField">
                            <label>Mobile <sup>*</sup></label>
                            <input className="smallInputField" type="text" id="mobile" onChange={(event) => this.handleInputChange(event)} value={this.state.contact.mobile} />
                            <p className="error">{this.state.mobileError}</p>
                        </div>
                        <div className="smallInputField">
                            <label>Landline <sup>*</sup></label>
                            <input className="smallInputField" type="text" id="landline" onChange={(event) => this.handleInputChange(event)} value={this.state.contact.landline}/>
                            <p className="error">{this.state.landlineError}</p>
                        </div>
                    </div>
                    <div className="inputField">
                        <label>Website <sup>*</sup></label>
                        <input type="text" id="website" onChange={(event) => this.handleInputChange(event) } value={this.state.contact.website}/>
                        <p className="error">{this.state.websiteError}</p>
                    </div>
                    <div className="inputField">
                        <label>Address <sup>*</sup></label>
                        <textarea className="address" id="address" onChange={(event) => this.handleInputChange(event)} value={this.state.contact.address}></textarea>
                        <p className="error">{this.state.addressError}</p>
                    </div>
                    <div className="submitField">
                        <input type="button" className="addbtn" value="Reset" onClick={()=>this.resetForm()} />
                        <input type="button" className="addbtn" value={this.state.isAdd?"Add":"Update"} onClick={()=>this.validate()}/>
                    </div>
                </form>
            </div>
        );
    
    }
}