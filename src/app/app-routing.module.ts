import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentformComponent } from './agentform/agentform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"Agentform",pathMatch:"full"},
  {path:"Login",component:LoginComponent},
  {path:"Agentform",component:AgentformComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
