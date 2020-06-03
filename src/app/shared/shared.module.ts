import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
