import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any
  constructor(private _commonSer: CommonService) { }

  ngOnInit() {
    this.data = this._commonSer.getEmployeeData();
  }

}
