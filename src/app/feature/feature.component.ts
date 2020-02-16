import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  isShowWork = false;
  data: any;
  type: any;
  res: any;
  currentUser: any = {};
  UserName:string;
  OUserName:string;
  constructor(private _commonSer: CommonService) { }

  ngOnInit() {
    this.getCurrentUser();
  }
  public myfun(): void {
    this.isShowWork = !this.isShowWork;
    this.type = "numeric";
  }

  public getOutput($event): void {
    this.res = $event;
    
  }

  getCurrentUser() {
    this._commonSer.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    })
  }
  public ShowUsr($event): void{
    this.OUserName=$event;
  }
}
