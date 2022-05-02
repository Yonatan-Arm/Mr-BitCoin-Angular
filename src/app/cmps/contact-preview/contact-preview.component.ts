
import { Component, Input,EventEmitter, OnInit,Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact!: Contact
  @Output('remove') onRemove = new EventEmitter<string>()


  ngOnInit(): void {
  }
  onRemoveContact(ev, contactId){
    ev.stopPropagation()
    this.onRemove.emit(contactId)
   
    

  }
}
