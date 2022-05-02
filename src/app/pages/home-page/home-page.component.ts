import { Subscription } from 'rxjs';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
user:UserModel
bitcoin:any=null
userSubscription: Subscription;


  constructor( private ContactService: ContactService ,
    private UserService : UserService) { }

  ngOnInit(): void {
    // this.user = this.UserService.getUser()
    this.userSubscription = this.UserService.user$.subscribe(user => this.user = user);
      this.getRate()
  }
  
 async getRate(){
  await this.ContactService.getRate().subscribe(rate=>{ 
    this.bitcoin = rate
  });

  
}

}


