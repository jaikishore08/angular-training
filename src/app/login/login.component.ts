import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, ContentChild } from '@angular/core';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-child',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  counter:number;

  myModel: any = {
    name: "jay",
    age: "25"
  }

  @Input()
  obj:any;

  @Output() dataPassedToParent = new EventEmitter();

  @ContentChild(HomeComponent, {static: true})contentChild: HomeComponent;


  constructor(public appService: AppService) {
    console.log("child component constructor initialized");
   }

  ngOnInit() {
    console.log("child component init method called");
  }

  ngAfterContentInit() {
    if(this.contentChild) {
      // this.contentChild.obj.name = "contentchild";
    }
  }

  onClick() {
    const childInfo = {
      name: "child",
      age: 25
    };
    this.appService.sharableData.age = 35;
    this.dataPassedToParent.emit(childInfo);
  }

}
