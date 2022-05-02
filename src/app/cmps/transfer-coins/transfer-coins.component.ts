
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Contact } from 'src/app/models/contact.model';
import { UserModel } from 'src/app/models/user.model';

import { UserService } from '../../services/user-service.service'

@Component({
  selector: 'transfer-coins',
  templateUrl: './transfer-coins.component.html',
  styleUrls: ['./transfer-coins.component.scss']
})
export class TransferCoinsComponent implements OnInit {

  amount: number;
  user: UserModel;
  userSubscriber: Subscription;

  @Input() contact: Contact;
  @Output('transfer') onTransfer = new EventEmitter<string>()


  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }

  onTransferCoins(): void {
    if (this.amount > this.user.coins) {
      console.log('you can\'t do it');
      return;
    } else {
      this.userService.addMove(this.contact, this.amount);
      this.onTransfer.emit()
    }
    this.router.navigate(['contact/', this.contact._id])
  }
}
