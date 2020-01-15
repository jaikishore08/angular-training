import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent implements OnInit {

  emp : any = {
    fName: "test"
  };
  constructor() { }

  ngOnInit() {
  }

  onChange(controlRefr, form) {
    console.log(controlRefr);
    console.log(form);
  }

  onSubmit(value) {
    console.log(value)
  }

}
