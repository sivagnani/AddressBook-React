import React from 'react';
import './main.css';
import ContactSummary from './components/contactSummary/contactSummary';
import {AddressHeader} from './components/pageHeader/header';
import NavBar from './components/pageNavBar/navBar';
import ContactInfo from './components/contactInfo/contactInfo';
import ContactForm from './components/contactForm/contactForm';
import { IRouterProps,IRouterState } from './IMain';
import { Contact } from './model';
import { getContactById,deleteContactById,insertContact,updateContact} from './services/services';
import { initialContacts,emptyContact } from './constants';
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
    this.setState({ 
      activeContact:getContactById(this.state.contactList,id),
      showContactInfo:true,
      showForm:false,
      isInitialPage:true
    });
  }
  handleForm(showAddForm:boolean){
    this.setState({showContactInfo:false,editForm:false,showForm:showAddForm,isInitialPage:!showAddForm,activeContact:emptyContact});
  }
  deleteContact(id:string){
    this.setState({contactList:deleteContactById(this.state.contactList,id),showContactInfo:false});
  }
  handleEdit(){
    this.setState({showContactInfo:false,showForm:true,isInitialPage:true,editForm:true});
  }
  addContact(contact:Contact){
    if(contact.name){
      this.setState({contactList:insertContact(this.state.contactList,contact),activeContact:contact,showForm:false,showContactInfo:true});
    }
  }
  editContact(newContact:Contact){
    if(newContact.name){
    this.setState({contactList:updateContact(newContact,this.state.contactList),activeContact:newContact,showForm:false,showContactInfo:true});
    }
  }
  render(): React.ReactNode {
    return (
      <div className="Router">
        <div>
          <AddressHeader/>
          <NavBar activePage={this.state.isInitialPage} onNavClick={(bool:boolean)=>this.handleForm(bool)}/>
        </div>
        <div className='contacts'>
          <ContactSummary contactList={this.state.contactList} activeContact={this.state.activeContact} onContactClick={(id:string)=>this.handleTileClick(id)}/>
          {this.state.showContactInfo && <ContactInfo edit={()=>this.handleEdit()} delete={(id:string)=>this.deleteContact(id)} activeContact={this.state.activeContact}/>}
          {this.state.showForm && <ContactForm action={this.state.editForm} contact={this.state.editForm?this.state.activeContact:emptyContact} close={()=>this.handleForm(false)} add={(contact:Contact)=>this.addContact(contact)} edit={(newContact:Contact)=>this.editContact(newContact)}/>}
        </div>      
      </div>
    );
  }
}

export default Main;
