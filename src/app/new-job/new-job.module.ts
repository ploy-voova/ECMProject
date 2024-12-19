import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewJobPageRoutingModule } from './new-job-routing.module';

import { NewJobPage } from './new-job.page';

import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewJobPageRoutingModule,
    ExploreHeaderComponentModule
  ],
  declarations: [NewJobPage]
})
export class NewJobPageModule {}
