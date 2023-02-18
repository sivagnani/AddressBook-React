import React from 'react';
import './App.css';
import ContactSummary from './components/contactSummary/contactSummary';
import {AddressHeader} from './components/pageHeader/header';
import NavBar from './components/pageNavBar/navBar';
import ContactInfo from './components/contactInfo/contactInfo';
import ContactForm from './components/contactForm/contactForm';
import { IAppProps,IAppState } from './IApp';
import { Contact } from './model';
import { getContactById,deleteContactById,insertContact,updateContact} from './functions';
import { initialContacts,emptyContact } from './data';
class App extends React.Component<IAppProps,IAppState>{
  constructor(props:IAppProps){
    super(props);
    this.state={
    contactList:initialContacts,
    activeContact:emptyContact,
    showContactInfo:false,
    showForm:false,
    initialPage:true,
    editForm:false
    }
  }
  handleTileClick(id:string){
    this.setState({ activeContact:getContactById(this.state.contactList,id)[0],showContactInfo:true,showForm:false,initialPage:true});
  }
  handleForm(bool:boolean){
    this.setState({showContactInfo:false,showForm:bool,initialPage:!bool,activeContact:emptyContact});
  }
  deleteContact(id:string){
    this.setState({contactList:deleteContactById(this.state.contactList,id),showContactInfo:false});
  }
  handleEdit(){
    this.setState({showContactInfo:false,showForm:true,initialPage:true,editForm:true});
  }
  addContact(contact:Contact){
    console.log(this.state.contactList);
    if(contact.name){
      this.setState({contactList:insertContact(this.state.contactList,contact),activeContact:contact,showForm:false,showContactInfo:true});
    }
  }
  editContact(oldContact:Contact,newContact:Contact){
    if(newContact.name){
    this.setState({contactList:updateContact(oldContact,newContact,this.state.contactList),activeContact:newContact,showForm:false,showContactInfo:true});
    }
  }
  render(): React.ReactNode {
    let contactInfo;
    let form;
    if(this.state.showContactInfo){
      contactInfo=<ContactInfo edit={()=>this.handleEdit()} delete={(id:string)=>this.deleteContact(id)} activeContact={this.state.activeContact}/>;
    }
    if(this.state.showForm){
      form=<ContactForm contact={this.state.editForm?this.state.activeContact:emptyContact} add={(contact:Contact)=>this.addContact(contact)} edit={(oldcontact:Contact,newContact:Contact)=>this.editContact(oldcontact,newContact)}/>;
    }
    return (
      <div className="App">
        <div>
          <AddressHeader/>
          <NavBar activePage={this.state.initialPage} onClick={(bool:boolean)=>this.handleForm(bool)}/>
        </div>
        <div className='contacts'>
          <ContactSummary contactList={this.state.contactList} activeContact={this.state.activeContact} onClick={(id:string)=>this.handleTileClick(id)}/>
          {contactInfo}
          {form}
        </div>      
      </div>
    );
  }
}

export default App;
