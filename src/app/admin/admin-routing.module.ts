import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component'
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      }
    ]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      }
    ]
  },

  {
    path: 'table',
    component: TableComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
