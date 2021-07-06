import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule } from './business-routing.module';
import { FinanceComponent } from './finance/finance.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business.component';

@NgModule({
  declarations: [
    BusinessComponent,
    FinanceComponent,
    ServiceComponent,
    AboutComponent,
  ],
  imports: [CommonModule, BusinessRoutingModule],
})
export class BusinessModule {}
