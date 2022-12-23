import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { exhaustMap, fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  constructor(private apiService: ApiService, private Router: Router) { }
  ngOnInit(): void {
    this.generateData()
  }

  dataSource: any

  generateData() {
    this.apiService.getData().subscribe((x: any) => {
      console.log(x.data)
      this.dataSource = x.data
    })
  }

  deleteID(id: number) {
    console.log('hi')
    if (confirm('Are you sure you want to delete')) {
      this.apiService.deleteData(id).subscribe((x) => {
        this.generateData()
      })
    }
  }
  navigateToAdd() {
    this.Router.navigate(['/add'])
  }

  editForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    picture: new FormControl(''),
  })
  editDataID: any
  editID(data: any) {
    this.editDataID = data.id
    this.editForm.controls.firstName.setValue(data.firstName)
    this.editForm.controls.lastName.setValue(data.lastName)
    this.editForm.controls.title.setValue(data.title)
    this.editForm.controls.picture.setValue(data.picture)
  }


  @ViewChild('editSave') editSave!: ElementRef
  ngAfterViewInit() {
    fromEvent(this.editSave.nativeElement, 'click').pipe(
      exhaustMap(() => this.SaveEdit())
    ).subscribe((x) => {
      let close = document.getElementById('close')
      this.generateData()
      close?.click()
    })
  }
  SaveEdit() {
    return this.apiService.edit(this.editForm.value, this.editDataID)
  }
  p: any






}
