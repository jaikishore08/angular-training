import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren, ContentChild, AfterContentInit, AfterContentChecked, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild(LoginComponent, {static: false})childComponent: LoginComponent;
  @ViewChildren(LoginComponent)childs: QueryList<any>;
  title = 'myapp';
  type = 'employee';
  counter:number = 1;
  employees = [
    {
      name: "emp1",
      city: "city1"
    },
    {
      name: "emp2",
      city: "city2"
    }
  ]
  obj = {
    name: "jay",
    city: "pune"
  }

  constructor(public appService: AppService, private cd: ChangeDetectorRef) {}

  dataFromChild(event) {
    console.log(event);
  }

  admin() {
    return false;
  }

  ngAfterViewInit() {
    this.childs.forEach(child => {
      child.obj.name = "test2";
    });
    // this.cd.detectChanges();
  }

  @ContentChild(HomeComponent, {static: true})contentChild: HomeComponent;
  ngAfterContentInit() {
    this.cd.detectChanges();
    if(this.contentChild) {
      // this.contentChild.obj.name = "contentchild";
    }
  }

  increaseCounter() {
    this.counter++;
  }
  decreaseCounter() {
    this.counter--;
  }
  changeName() {
    this.obj.name = "amol";
  }
}
