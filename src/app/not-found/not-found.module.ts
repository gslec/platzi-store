import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { NotFoundComponent } from './components/not-found.component';
import { PageNotFoundRoutingModule } from './not-found-routing';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule,
    MaterialModule
  ]
})
export class NotFoundModule { }
