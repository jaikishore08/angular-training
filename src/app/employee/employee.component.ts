import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee;
  employees = [
    {
      id: '1',
      name: "test1"
    },
    {
      id: '2',
      name: "test2"
    },
    {
      id: '3',
      name: "test3"
    },
    {
      id: '4',
      name: "test4"
    }
  ]
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.employee = this.employees.filter(emp => emp.id === res["id"])[0]
      console.log(res);
    });

    this.router.queryParams.subscribe(res => {
      console.log(res);
    });
  }

}
