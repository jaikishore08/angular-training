import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren, ContentChild, AfterContentInit, AfterContentChecked, AfterViewChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Observable, Subject, BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { map, merge, take, takeLast, timestamp } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: any[] = [];
  subject = new Subject();
  behaviourSubject = new BehaviorSubject("first item");
  replaySubject = new ReplaySubject(3);
  formUser:any = {};


  constructor(private appService: AppService) {}

  log(tmplt){
    console.log(tmplt);
  }

  // div.form-group>label[]+input[type='text'].form-control

  onSubmit(event) {
    console.log(event);
  }

  ngOnInit() {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      observer.next(4);
    }).pipe(takeLast(2)).subscribe(data => {
      this.showOnTemplate(data);
    });

    // observable.subscribe(data => {
    //   this.showOnTemplate(data);
    // }, error => {
    //   this.showOnTemplate("error");
    // }, () => {
    //   this.showOnTemplate("completed");
    // });

    // const obs = of(["a", "b", "c"]);
    // obs.subscribe(data => {
    //   this.showOnTemplate(data);
    // });


    // const observable2 = new Observable(observer => {
    //   observer.next(100);
    //   observer.next(200);
    //   observer.next(300);
    // }).pipe(merge(observable)).subscribe(data => {
    //   this.showOnTemplate(data);
    // });
    const subscription = this.subject.subscribe(data => {
      this.showOnTemplate(data);
    }, error =>{
      this.showOnTemplate(error);
    });
    this.subject.next("event 1 from subject");
    this.behaviourSubject.next("event 1 from behaviour subject");
    this.behaviourSubject.next("event 2 from bsubject");
    this.behaviourSubject.next("event 3 from bsubject");
    const subscription2 = this.behaviourSubject.subscribe(data => {
      this.showOnTemplate(data);
    }, error =>{
      this.showOnTemplate(error);
    });

    subscription.add(subscription2)

    subscription.unsubscribe();

    this.subject.next("subject 5");
    this.behaviourSubject.next("bsubject 6");
    // subscription.unsubscribe();

    // this.replaySubject.next("event 1 from replay subject");
    // this.replaySubject.next("event 2 from replay");
    // this.replaySubject.next("event 3 from replay");
    // this.replaySubject.subscribe(data => {
    //   this.showOnTemplate(data);
    // });
    
    // const subscription2 = this.subject.subscribe(data => {
    //   this.showOnTemplate("from subscriber 2 "+ data);
    // })
    // subscription.add(subscription2);
    // this.subject.next("data from subject");
    // subscription.unsubscribe();
    // this.subject.next("data sent after unsubscribed");
    // this.subject.next("data sent from subject before subscription1");
    // this.subject.next("data sent from subject before subscription2");
    // this.subject.next("data sent from subject before subscription3");
    // this.subject.next("data sent from subject before subscription4");
  }

  showOnTemplate(data) {
    this.items.push(data);
  }

}

