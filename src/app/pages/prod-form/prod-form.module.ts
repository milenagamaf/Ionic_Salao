import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdFormPageRoutingModule } from './prod-form-routing.module';

import { ProdFormPage } from './prod-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdFormPageRoutingModule
  ],
  declarations: [ProdFormPage]
})
export class ProdFormPageModule {}
