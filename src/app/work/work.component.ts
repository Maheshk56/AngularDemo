import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() data: any;
  @Input() obc: any;
  @Output() result = new EventEmitter<any>();
  @Input() UserName: string;
  @Output() OUserName = new EventEmitter<any>();
  testForm: FormGroup;
  constructor(private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(res => {
      if (res["id"])
        alert(res["id"]);
    })
    alert(this._activatedRoute.snapshot.params["id"]);
    alert(this._activatedRoute.snapshot.queryParams["name"]);
    this.createForm();
  }
  private createForm() {
    this.testForm = this.fb.group({
      name: ['',Validators.required],
      salary: ['',Validators.pattern('/[^0-9]*/g')],


    })
  }
  onSubmit(){
   if(this.testForm.valid) {

   }else{
     alert("check your form field");
   }

  }
  public fun(): void {
    this.result.emit(this.data ? this.data.length : 0);

  }
  public ShowUser(): void {
    this.OUserName.emit(this.UserName);
  }
}
