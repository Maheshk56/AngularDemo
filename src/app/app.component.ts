import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee: Employee = {};
  employeeList: Employee[] = [];
  title = 'myapp';
  name: string;

  ngOnInit() {
    this.initializeFun();

  }

  private initializeFun(): void {
    this.name = 'vipuol';
    this.employee.id = 1;
    this.employee.name = "dfasd";
    this.employeeList.push(this.employee);
    this.employeeList.push({ id: 3, name: 'dsfgh' });
  }

  public save():void{
    alert(this.employee.name)
    
  }
}
