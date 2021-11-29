import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'; //ts
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
//dependency injection: how we inject services
  contacts!: Contact[];
  contact!: Contact;
  first_name!:string;
  last_name!:string;
  phone!:string;

//services written in contact.service.ts
  constructor(private contactService: ContactService) { }

  addContact() //modify your template html so that you can use this.
  {
    var newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone

    };
    var contacts = this.contacts;
    this.contactService.addContact(newContact) //you need to create a new contact before calling this
      .subscribe(contact =>{ //we are listening for any responses
        this.contacts.push(contact);
        this.contactService.getContacts()
          .subscribe(contacts =>
          this.contacts = contacts);
      })
  }

  deleteContact(id:any) //making the <observable> in contact.services.ts file let me reference 'data.deletedCount'
  { //all of our services are written in services component
    var contacts = this.contacts;
    this.contactService.deleteContact(id) //this is an observable, so we need to subscribe
      .subscribe(data =>{//we also need to remove from our contacts array
        if(data.deletedCount==1) //MAKE the deleteContact return a JSON!!!
        {
          for(var i = 0; i < contacts.length; i++)
          {
            if(contacts[i]._id == id) //why do we use '_id'
            {
              contacts.splice(i, 1); //remove it
            }
          }
        }
      })
  }

  ngOnInit(){ //put methods in here, initiated when loaded
    this.contactService.getContacts()
      .subscribe(contacts =>
      this.contacts = contacts); //the last one is our contact class. Simply add this in a method after changing the list

      //the browser doesn't reload after a contact is added.
  }
  //The component subscribes to the method's return value.

}
