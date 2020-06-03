import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundRoutingModule } from './not-found-routing';




@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule
  ]
})
export class NotFoundModule { }
