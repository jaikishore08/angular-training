import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sharableData:any = {
    name: "service",
    age: 25,
    city: "pune"
  };
  constructor() { }
}
