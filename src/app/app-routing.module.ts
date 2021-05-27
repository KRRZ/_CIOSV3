import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list', component: ListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateComponent},
    { path: 'update', component: UpdateComponent},
    { path: 'delete', component: DeleteComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
