import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
const routes: Routes = [
{ path: '', component: LandingPageComponentComponent },
{ path: 'facesnap', component: FaceSnapComponent },
{ path: 'facesnaps', component: FaceSnapListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
