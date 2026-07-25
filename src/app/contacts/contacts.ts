import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {


  contact = {
    name: '',
    email: '',
    message: ''
  };


  sendMessage() {


    const templateParams = {

      from_name: this.contact.name,

      from_email: this.contact.email,

      message: this.contact.message

    };


    emailjs.send(

      'service_s9054vf',

      'template_xuhheia',

      templateParams,

      'UO3Z5OO2vNt5ZWWL5'

    )
    .then(() => {


      alert('Message sent successfully ☕');


      this.contact = {

        name: '',
        email: '',
        message: ''

      };


    })
    .catch(() => {


      alert('Failed to send message. Please try again.');

    });


  }

}