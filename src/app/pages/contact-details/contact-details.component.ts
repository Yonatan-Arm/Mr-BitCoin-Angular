import { UserService } from 'src/app/services/user-service.service';
import { Subscription } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactService} from 'src/app/services/contact.service'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService,
  private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,) { }
  @Input() contactId:string
  contact: Contact
  user: UserModel;
  isMsgOn:boolean = false
  userSubscriber: Subscription;

  async ngOnInit() {
    this.route.data.subscribe(data=>{
      this.contact = data['contact']
   })
   this.userSubscriber = this.userService.user$.subscribe(user => this.user = user);
  }
  onBack(){
    this.router.navigateByUrl('contact')
  }
  showMsg(){
    this.isMsgOn = true 
    setTimeout(()=>{
      this.isMsgOn = false 
    },3000)
   }

}
