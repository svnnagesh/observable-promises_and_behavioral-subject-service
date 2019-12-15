import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDemoDirective } from './test-demo.directive';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { BehaviouralSubjectService } from './behavioural-subject.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestDemoDirective,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BehaviouralSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
