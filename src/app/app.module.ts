import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

/* app components */
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {PlayListComponent} from './components/playlist/playlist.component';

/* app pages */
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {PlaylistPageComponent} from './pages/playlist-page/playlist-page.component';

/* app pipes */
import {HideCompletedPipe} from './pipes/hide-completed.pipe';
import {IncompleteFirstPipe} from './pipes/incomplete-first.pipe';
import {SortPipe} from './pipes/sort.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    PlayListComponent,
    SettingsPageComponent,
    PlaylistPageComponent,
    HideCompletedPipe,
    IncompleteFirstPipe,
    SortPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: Window, useValue: window }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
