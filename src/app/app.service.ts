import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sharableData:any = {
    name: "service",
    age: 25,
    city: "pune"
  };
  constructor(private http: HttpClient) { }

  getMovieByName(name: string): Observable<any> {
    const observable = new Observable(observer => {
      this.http.get("http://dummy.restapiexample.com/api/v1/employees")
      .pipe(map((x:any) => x[0].employee_name + " " + 2 * +x[0].employee_age))
      .subscribe(data => {
        observer.next(data);
      });
    })
    return observable;
  }
}
