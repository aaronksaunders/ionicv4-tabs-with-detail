import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DetailPage } from '../detail/detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: HomePage },
      { path: 'detail', loadChildren: '../detail/detail.module#DetailPageModule' },
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
