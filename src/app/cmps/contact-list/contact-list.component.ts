import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  constructor(
  ) { }
  @Input() contacts!: Contact[]
  @Output('remove') onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
