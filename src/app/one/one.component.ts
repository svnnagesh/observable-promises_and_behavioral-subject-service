import { Component, OnInit } from '@angular/core';
import { BehaviouralSubjectService } from '../behavioural-subject.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user;
  editUser;
  constructor(private bS: BehaviouralSubjectService) { }

  ngOnInit() {
    this.bS.cast.subscribe(res=> {
      this.user = res;
    })
  }

  editUserClick() {
    this.bS.editUser(this.editUser);
  }

}
