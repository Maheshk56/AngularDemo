import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { CommonService } from '../common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee: Employee = {};
  employeeList: Employee[] = [];

  constructor(private _commonSer: CommonService) { }

  ngOnInit() {
    if (this.employeeList && this.employeeList.length == 0 && this._commonSer.getEmployeeData())
      this.employeeList = this._commonSer.getEmployeeData();
  }

  public addEmployee(data): void {
    var e = data;
    this.employeeList.push(e);
    this._commonSer.setEmployeeData(this.employeeList);
    this.employee = {};
  }

  fun($event){
alert($event);
  }
}
