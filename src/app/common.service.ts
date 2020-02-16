import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employeeData: any;
  constructor(private _http:HttpClient) { }


  setEmployeeData(data) {
    this.employeeData = data;
  }
  getEmployeeData() {
    return this.employeeData;
  }

  
  public getCurrentUser(): Observable<any> {
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/todos/1`).pipe(map(res => res || {}));
  }
}
