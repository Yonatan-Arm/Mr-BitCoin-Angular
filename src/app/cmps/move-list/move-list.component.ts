import { Contact } from './../../models/contact.model';
import { Subscription } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { UserService } from 'src/app/services/user-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  isTransfersMade: boolean;
  lastTransfers: Array<any>;

  @Input() user: UserModel;
  @Input() contact: Contact;

  constructor() { }

  ngOnInit(): void {
    if (!this.contact) this.contact = new Contact();
    this.getLastTransfers(this.user);
    this.isTransfersMade = this.isMoveMade(this.user, this.contact);
  }

  ngOnChanges(): void {
    if (this.contact) {
      this.isTransfersMade = this.isMoveMade(this.user, this.contact);
    }
  }

  isMoveMade(user: UserModel, contact: Contact): boolean {
    if (user.moves.length === 0) {
      return true
    } else {
      return user.moves.every(move => move.to !== contact.name);
    };
  }

  getLastTransfers(user: UserModel): void {
    this.lastTransfers = [];
    let max = (user.moves.length <= 3) ? user.moves.length - 1 : 2;
    for (let i = 0; i <= max; i++) {
      this.lastTransfers.push(user.moves[i]);
    }
  }
} 

