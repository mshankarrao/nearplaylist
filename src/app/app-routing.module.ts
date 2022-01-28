import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import {PlaylistPageComponent} from './pages/playlist-page/playlist-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';


const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo:  'peerplay' },
  { path:  'peerplay', pathMatch: 'full', component:  PlaylistPageComponent },
  { path:  'settings', pathMatch: 'full', component:  SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
