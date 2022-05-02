import { ContactService } from 'src/app/services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  filterBy={
    term:''
  }

  
  onChangeFilter() {
    this.contactService.setFilterBy(this.filterBy)
}


  ngOnInit(): void {
  }

}
