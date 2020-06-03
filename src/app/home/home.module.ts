import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        BannerComponent,
        HomeComponent
    ],
})
export class HomeModule {

}
