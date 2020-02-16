import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from '../work/work.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureComponent } from './feature.component';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared/shared.module';
import { ProjectGuard } from '../shared/shared/project.guard';

const route: Routes = [
  { path: '', component: FeatureComponent,canActivate:[ProjectGuard] },
  { path: 'work', component: WorkComponent },
  { path: 'work'+'/:id', component: WorkComponent }
]

@NgModule({
  declarations: [WorkComponent, FeatureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ]
})
export class FeatureModule { }
