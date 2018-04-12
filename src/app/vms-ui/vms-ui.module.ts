import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { VisualizationModule } from '../visualization/visualization.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisualizationModule
  ],
  exports: [
   SidenavComponent
  ],
  declarations: [ SidenavComponent, HomeComponent ]
})
export class VmsUiModule { }
