import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserModel } from 'src/app/models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { MoveModel } from 'src/app/models/move.model';

import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private KEY = 'user';
    private _user: UserModel;
    private _user$ = new BehaviorSubject<UserModel>(this.UtilService.load(this.KEY) || null);
    public user$ = this._user$.asObservable();

    constructor(private UtilService: UtilService) { }

    public signup(name: string): void {
        let user = this.UtilService.load(this.KEY);
        if (!user) {
            let newUser = new UserModel();
            newUser.name = name;
            this.UtilService.store(this.KEY, newUser);
            this._user = newUser;
        }
        this._user$.next(this._user);
    }

    public logOut(){
        localStorage.removeItem(this.KEY)
        this._user$.next(new UserModel)
     }

    public getUser() {
        return this.user$;
    }

    public addMove(contact: Contact, amount: number): void {
        let newMove = new MoveModel();
        newMove.toId = this.UtilService.setId();
        newMove.to = contact.name;
        newMove.at = Date.now();
        newMove.amount = amount;
        const editedUser = { ...this._user$.value };
        editedUser.coins -= amount;
        editedUser.moves.unshift(newMove);
        this.UtilService.store(this.KEY, editedUser);
        this._user$.next(editedUser);
    }

    public isAuthenticated(): boolean {
        const user = this._user$.value;
        // return (user) ? true : false;
        return !!user;
    }
}
