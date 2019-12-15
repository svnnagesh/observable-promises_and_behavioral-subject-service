import { Component, OnInit } from '@angular/core';
import { BehaviouralSubjectService } from '../behavioural-subject.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user;
  constructor(private bS: BehaviouralSubjectService) { }

  ngOnInit() {
    this.bS.cast.subscribe(res=> {
      this.user = res;
    })
  }

}
