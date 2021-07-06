import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business.component';
import { FinanceComponent } from './finance/finance.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
  },
  {
    path: 'business',
    redirectTo: '',
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
