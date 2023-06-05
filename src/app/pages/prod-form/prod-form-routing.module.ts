import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdFormPage } from './prod-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProdFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdFormPageRoutingModule {}
