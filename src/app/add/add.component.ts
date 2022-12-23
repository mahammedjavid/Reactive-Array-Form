import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private service: ApiService, private Router: Router) { }

  forms = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    picture: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])

  })

  onSubmit() {
    // console.log(this.forms.value)
    this.service.post(this.forms.value).subscribe((x) => {
      console.log(x)
      this.Router.navigate(['/api'])
    })
  }

}
