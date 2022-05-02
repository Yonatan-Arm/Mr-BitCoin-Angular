import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactService} from 'src/app/services/contact.service'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,) { }
  contact: Contact
    
  ngOnInit(): void{
    this.route.data.subscribe(async ({ contact })=>{
      this.contact = contact ? contact : this.contactService.getEmptyContact() as Contact
      
   })
  }
  onSaveContatct(){
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('contact')
  }


}
