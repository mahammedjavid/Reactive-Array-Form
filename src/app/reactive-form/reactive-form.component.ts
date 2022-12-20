import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  nestedForm !: FormGroup
  deletedOne = false
  deletedTwo = false
  ngOnInit(): void {
    this.nestedForm = this.formBuilder.group({
      StoryName: new FormControl(''),
      StoryStartDate: new FormControl(''),
      StoryEndDate: new FormControl(''),

      // Task: this.formBuilder.group({

      // })
    })

  }

  // nestedForm = new FormGroup({
  //   StoryName: new FormControl(''),

  //   Task: new FormGroup({
  //     TaskName: new FormControl(''),

  //     Activity: new FormGroup({
  //       ActivityName: new FormControl(''),
  //     })
  //   })
  // })

  // this.nestedForm = this.formBuilder.group ({
  //   StoryName: new FormControl(''),
  //   startDate: new FormControl(''),
  //   endDate: new FormControl(''),

  //   Task: new FormGroup({
  //     TaskName: new FormControl(''),
  //     startDate: new FormControl(''),
  //     endDate: new FormControl(''),

  //     Activity: new FormGroup({
  //       ActivityName: new FormControl(''),
  //       startDate: new FormControl(''),
  //       endDate: new FormControl(''),
  //     })
  //   })
  // })

  panelOpenState = false;

  onFormSubmit(data: any) {
    console.log(data)
  }

  addFirstControls(): void {
    this.deletedOne = true;

    this.nestedForm = this.formBuilder.group({
      ...this.nestedForm.controls,
      TaskName: [''],
      TaskStartDate: [''],
      TaskEndDate: ['']
    })
  }

  addSecondControls() {
    this.deletedTwo = true;
    this.nestedForm = this.formBuilder.group({
      ...this.nestedForm.controls,
      ActivityName: [''],
      ActivityStartDate: [''],
      ActivityEndDate: ['']
    })
  }

  removeControlsOne() {
    this.deletedOne = false;
    this.nestedForm = this.formBuilder.group({
      StoryName: new FormControl(''),
      StoryStartDate: new FormControl(''),
      StoryEndDate: new FormControl(''),
    })
  }
  removeControlsTwo() {
    this.deletedTwo = false;
    this.nestedForm = this.formBuilder.group({
      StoryName: new FormControl(''),
      StoryStartDate: new FormControl(''),
      StoryEndDate: new FormControl(''),
      TaskName: [''],
      TaskStartDate: [''],
      TaskEndDate: ['']
    })
  }

  allData = ['storyOne', 'storyTwo', 'storyThree']



}

