import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './login/model';

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

  getPosts():Observable<any> {
    // const headers = new HttpHeaders().set("Content-type", "application/json; charset=UTF-8")
    return this.http.get("https://jsonplaceholder.typicode.com/posts"); 
  }

  getPostById(id: number): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id);
  }

  getPostByUserId(userId: number): Observable<any> {
    const params = new HttpParams().set("userId", ""+userId);
    return this.http.get("https://jsonplaceholder.typicode.com/posts/",{params: params});
  }

  addPost(post: Post) {
     return this.http.post("https://jsonplaceholder.typicode.com/posts/",post);
  }
}
