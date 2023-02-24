import React from "react";
import "./contactInfo.css";
import { IContactInfoProps, IContactInfoState } from "./IContactInfo";
import { Link} from "react-router-dom";
import { getContactById } from "../../services/services";
import { Contact } from "../../model";
import withRouter from "../withRouter";
import { emptyContact } from "../../constants";
class ContactInfo extends React.Component<IContactInfoProps, IContactInfoState>{
    constructor(props: IContactInfoProps){
        super(props);
        this.state={
            isMounted:false,
            contact:emptyContact,
        }
    }
    componentDidMount(): void {
        if(!this.state.isMounted){
            let contact:Contact=getContactById(this.props.contactList,this.props.params.id);
            this.setState({contact:contact,isMounted:true});
        }
    }
    componentDidUpdate(prevProps: Readonly<IContactInfoProps>, prevState: Readonly<IContactInfoState>, snapshot?: any): void {
        if(prevProps!==this.props){
            let contact:Contact=getContactById(this.props.contactList,this.props.params.id);
            this.setState({contact:contact});
        }
    }
    render() {
        return (<div className="contactInfo">
            <div className="nameSection">
                <h1 className="name">{this.state.contact.name}</h1>
                <div className="center">
                    <div className="modifySection">
                        <Link to={"/add/"+this.state.contact.id} >
                        <div className="modify" onClick={() => this.props.edit()}>
                            <img alt="" className="editSymbol" src={require("../../assets/edit1.jpg")} />
                            <p className="btn">EDIT</p>
                        </div>
                        </Link>
                        <div className="modify" onClick={() => this.props.delete(this.state.contact.id)}>
                            <img alt="" className="deleteSymbol" src={require("../../assets/delete2.png")} />
                            <p className="btn">DELETE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="content"><p>Email:</p><pre>{this.state.contact.email}</pre></div>
                <div className="content"><p>Mobile:</p><pre>{this.state.contact.mobile}</pre></div>
                <div className="content"><p>Landline:</p><pre>{this.state.contact.landline}</pre></div>
                <div className="content"><p>Website:</p><pre>{this.state.contact.website}</pre></div>
                <div className="content"><p>Address:</p><pre>{this.state.contact.address}</pre></div>
            </div>
        </div>);
    }
}
export default withRouter(ContactInfo);