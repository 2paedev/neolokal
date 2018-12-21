import { NgModule } from '@angular/core';

import { SpinnerComponent } from './spinner/spinner.component';
import { VendorComponentsModule } from './vendor-components.module';

@NgModule({
  imports: [VendorComponentsModule],
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    VendorComponentsModule,
    SpinnerComponent,
  ],
})
export class SharedComponentsModule {}
