import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { GroupByPipe } from './pipes/groupby/groupby.pipe';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective,
    GroupByPipe
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective,
    GroupByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
