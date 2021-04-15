import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { FormularioComponent } from "./views/formulario/formulario.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "formulario",
  component: FormularioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
