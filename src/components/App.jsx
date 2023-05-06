import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';

 export class App extends Component {
   state = {
     contacts: [],
   };

   handleAddContact = (newContact) =>
     this.setState(({ contacts }) => ({
     contacts: [...contacts, newContact],
     }))
   
   handleCheckUniqueContact = (name) => {
     const { contacts } = this.state
     
     const isExistContact = !!contacts.find(contact => contact.name === name)

     isExistContact && alert('Contact is already exist')

     return !isExistContact
   }

   handleRemoveContact = (id) => this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }))
   
   
   render() {
     const {contacts} = this.state
     return (
       <>
         <ContactForm
           onAdd={this.handleAddContact}
           onCheckUnique={this.handleCheckUniqueContact}
         />
         <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
       </>
     );
   }
 }
