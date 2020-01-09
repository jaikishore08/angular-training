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


  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getMovieByName('movie').subscribe(data => {
      this.showOnTemplate(data);
    });
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      observer.next(4);
    }).pipe(timestamp()).subscribe(data => {
      this.showOnTemplate(data);
    }, error => {
      console.log(error);
    },() => {
      this.showOnTemplate("completed");
    });

    const obs = of(["a", "b", "c"]);
    obs.subscribe(data => {
      this.showOnTemplate(data);
    });


    // const observable2 = new Observable(observer => {
    //   observer.next(100);
    //   observer.next(200);
    //   observer.next(300);
    // }).pipe(merge(observable)).subscribe(data => {
    //   this.showOnTemplate(data);
    // });

    // const subscription = this.subject.subscribe(data => {
    //   this.showOnTemplate(data);
    // }, error =>{
    //   this.showOnTemplate(error);
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

