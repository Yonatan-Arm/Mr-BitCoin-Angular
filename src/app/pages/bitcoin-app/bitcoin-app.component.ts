import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss']
})
export class BitcoinAppComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts: Contact[]
  contacts$: Observable<Contact[]>
  selectedContactId: string




  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

  
  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
}


}

