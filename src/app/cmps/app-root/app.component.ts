import { Observable, Subscription } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitcoin';
  currPage:string = 'home'
  user:UserModel
  userSubscription:Subscription
  constructor(private userService: UserService) { }
  
  toPage(pageName:string){   
     this.currPage = pageName
    }
    ngOnInit(): void {
      this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
    }

     logOut(){
       this.userService.logOut()
    }

  
}
