import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MenbunComponent} from './menbun/menbun.component';
import {SidemenComponent} from './sidemen/sidemen.component';
import {DatakanComponent} from './datakan/datakan.component';

const routes: Routes = [
  {path: 'app-menbun', component: MenbunComponent},
  {path: 'app-sidemen', component: SidemenComponent},
  {path: 'app-datakan', component: DatakanComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
