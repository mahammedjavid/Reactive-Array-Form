import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent implements OnInit {
  constructor() { }
  forms !: any
  show = false;
  showTask = true

  get getAcrivityControl() {
    return (<FormArray>this.forms.get('Activity')).controls
  }
  get getTaskControl() {
    return (<FormArray>this.forms.get('Task')).controls
  }

  ngOnInit(): void {
    this.forms = new FormGroup({
      Activity: new FormArray([
      ]),
      Task: new FormArray([
      ])
    })
  }

  getShow() {
    this.show = !this.show
  }
  getTask() {
    this.showTask = !this.showTask
  }

  counter = 1
  count = 1
  addActivity() {
    const Activitycontrol = new FormControl('Activity ' + `${this.counter++}`)
    // console.log(this.forms.value)
    return (<FormArray>this.forms.get('Activity')).push(Activitycontrol)
  }

  AddTaskControl() {
    const Taskcontrol = new FormControl('Task ' + `${this.count++}`)
    // console.log(this.forms.value)
    return (<FormArray>this.forms.get('Task')).push(Taskcontrol)
  }

  Onsubmit() {
    console.log(this.forms.value)
  }


}
