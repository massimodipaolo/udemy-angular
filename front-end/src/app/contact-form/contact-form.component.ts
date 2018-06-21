import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  @Output() send = new EventEmitter<ContactForm>();

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'Voice'},
  ];

  log(x) { console.log(x); }

  submit(form) {
    console.log(form);
    const v = <ContactForm>form.value;
    this.send.emit(v);
  }
}

export class ContactForm {
  public firstName: string;
  public comment: string;
  public contactMethod: ContactFormEntity[];
  public secondaryContactMethod: ContactFormEntity;
}

export class ContactFormEntity {
  public id: number;
  public name: string;
}

