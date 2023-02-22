import React from 'react';
import './main.css';
import ContactSummary from '../contactSummary/contactSummary';
import {AddressHeader} from '../pageHeader/header';
import NavBar from '../pageNavBar/navBar';
import ContactInfo from '../contactInfo/contactInfo';
import ContactForm from '../contactForm/contactForm';
import { IRouterProps,IRouterState } from './IMain';
import { Contact } from '../../model';
import { getContactById,deleteContactById,insertContact,updateContact} from '../../services/services';
import { initialContacts,emptyContact } from '../../constants';
class Main extends React.Component<IRouterProps,IRouterState>{
  constructor(props:IRouterProps){
    super(props);
    this.state={
    contactList:initialContacts,
    activeContact:emptyContact,
    showContactInfo:false,
    showForm:false,
    isInitialPage:true,
    editForm:false
    }
  }
  handleTileClick(id:string){
    let contact:Contact=getContactById(this.state.contactList,id);
    this.setState({ 
      activeContact:contact,
      showContactInfo:true,
      showForm:false,
      isInitialPage:true
    });
  }
  handleForm(showAddForm:boolean){
    this.setState({
      showContactInfo:false,
      editForm:false,
      showForm:showAddForm,
      isInitialPage:!showAddForm,
      activeContact:emptyContact
    });
  }
  deleteContact(id:string){
    let contactsAfterDelete:Contact[]=deleteContactById(this.state.contactList,id);
    this.setState({
      contactList:contactsAfterDelete,
      showContactInfo:false
    });
  }
  handleEdit(){
    this.setState({
      showContactInfo:false,
      showForm:true,
      isInitialPage:true,
      editForm:true
    });
  }
  addContact(contact:Contact){
    let contactsAfterAdd:Contact[]=insertContact(this.state.contactList,contact);
      this.setState({
        contactList:contactsAfterAdd,
        activeContact:contact,
        showForm:false,
        showContactInfo:true
      });
  }
  editContact(newContact:Contact){
    let contactsAfterUpdating:Contact[]=updateContact(newContact,this.state.contactList);
    this.setState({
      contactList:contactsAfterUpdating,
      activeContact:newContact,
      showForm:false,
      showContactInfo:true
    });
  }
  handleFormClose(){
    (this.state.activeContact===emptyContact)
    ?this.handleForm(false)
    :this.handleTileClick(this.state.activeContact.id);
  }
  handleFormOperation(contact:Contact){
    (this.state.editForm)
    ?this.editContact(contact)
    :this.addContact(contact);
  }
  render(): React.ReactNode {
    return (
      <div className="Router">
        <div>
          <AddressHeader/>
          <NavBar activePage={this.state.isInitialPage} onNavClick={(isAddForm:boolean)=>this.handleForm(isAddForm)}/>
        </div>
        <div className='contacts'>
          <ContactSummary contactList={this.state.contactList} activeContactId={this.state.activeContact.id} onContactClick={(id:string)=>this.handleTileClick(id)}/>
          {this.state.showContactInfo && <ContactInfo edit={()=>this.handleEdit()} delete={(id:string)=>this.deleteContact(id)} activeContact={this.state.activeContact}/>}
          {this.state.showForm && <ContactForm action={this.state.editForm} contact={this.state.activeContact} close={()=>this.handleFormClose()} operation={(contact:Contact)=>this.handleFormOperation(contact)}/>}
        </div>      
      </div>
    );
  }
}

export default Main;
