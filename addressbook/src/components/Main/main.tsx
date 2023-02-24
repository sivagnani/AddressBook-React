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
import {  Route, Routes, useNavigate } from 'react-router-dom';
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
    this.props.navigate("/");
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
    this.props.navigate("/details/"+contactsAfterAdd[contactsAfterAdd.length-1].id);
  }
  editContact(newContact:Contact){
    let contactsAfterUpdating:Contact[]=updateContact(newContact,this.state.contactList);
    this.setState({
      contactList:contactsAfterUpdating,
      activeContact:newContact,
      showForm:false,
      showContactInfo:true
    });
    this.props.navigate("/details/"+newContact.id);
  }
  // handleFormClose(){
  //   (this.state.activeContact===emptyContact)
  //   ?this.handleForm(false)
  //   :this.handleTileClick(this.state.activeContact.id);
  // }
  handleFormOperation(contact:Contact){
    (this.state.editForm)
    ?this.editContact(contact)
    :this.addContact(contact);
  }
  // componentDidMount() {
  //   const { match } = this.props;
  //   const { productId } = match.params;
  //   this.setState({ productId });
  // }

  render(): React.ReactNode {
    return (
      <div className="mainPage">
        <div>
          <AddressHeader/>
          <NavBar onNavClick={(isAddForm:boolean)=>this.handleForm(isAddForm)}/>
        </div>
        <div className='contacts'>
          <ContactSummary contactList={this.state.contactList}/>
          <Routes>
          <Route path={"/details/:id"} element={ <ContactInfo contactList={this.state.contactList} edit={()=>this.handleEdit()} delete={(id:string)=>this.deleteContact(id)}/>}/>
          <Route path={"/add/:id"} element={<ContactForm contactList={this.state.contactList} action={this.state.editForm} contact={this.state.activeContact} operation={(contact:Contact)=>this.handleFormOperation(contact)}/>}/>
          </Routes>
        </div>    
      </div>
    );
  }
}
export function APPWithRouter(){
  const navigate=useNavigate();
  return(<Main navigate={navigate}></Main>)
}
export default Main;
