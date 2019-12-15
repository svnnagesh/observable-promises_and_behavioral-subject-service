import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviouralSubjectService {

  private user = new BehaviorSubject<string>('Behavioral Subject Service');
  cast = this.user.asObservable();

  constructor() { }

  editUser(newUser) {
    this.user.next(newUser);
  }

}
