import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { FormularioComponent } from "./views/formulario/formulario.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "formulario",
  component: FormularioComponent
},{
  path: "dashboard",
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
