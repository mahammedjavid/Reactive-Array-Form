import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewAppComponent } from './new-app/new-app.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { AddComponent } from './add/add.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [

  {
    path: 'form', component: ReactiveFormComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'app', component: NewAppComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'api', component: ApiIntegrationComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'add', component: AddComponent, canActivate: [AuthguardGuard]
  },
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
