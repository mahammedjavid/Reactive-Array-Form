import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './reactive-form/form/form.component';
import { AppComponent } from './app.component';
import { NewAppComponent } from './new-app/new-app.component';

const routes: Routes = [
  {
    path: '', component: ReactiveFormComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'app', component: NewAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
