import { Component } from '@angular/core';
import { ObservablesServiceService } from './observables-service.service'
import { BehaviouralSubjectService } from './behavioural-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'observable-vs-promises';
  userName;
  constructor(private obs: ObservablesServiceService, private bS: BehaviouralSubjectService) {
    
  }

  changeValueFunc() {
    this.bS.editUser(this.userName)
  }

}
