import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxSpinnerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxSpinnerModule,
  ],
  providers: []
})
export class VendorComponentsModule {}
