import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  forms !: FormGroup
  show = true;
  showTask = false

  get getAcrivityControl() {
    return (<FormArray>this.forms.get('Activity')).controls
  }
  get getTaskControl() {
    return (<FormArray>this.forms.get('Task')).controls
  }

  ngOnInit(): void {
    this.forms = new FormGroup({
      Activity: new FormArray([]),
      Task: new FormArray([])
    })
  }

  getShow() {
    this.show = !this.show
  }
  getTask() {
    this.showTask = !this.showTask
  }

  addActivity() {
    const control = new FormControl('')
    return (<FormArray>this.forms.get('Activity')).push(control)
  }

  AddTaskControl() {
    const control = new FormControl('')
    return (<FormArray>this.forms.get('Task')).push(control)
  }


}
