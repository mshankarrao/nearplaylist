import {Component, OnInit} from '@angular/core';

/* app models */
import {PlayListSortOrder} from '../../models/playlist-settings.model';

/* app services */
import {PlayListService} from "../../services/playlist.service";


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
})
export class SettingsPageComponent implements OnInit {
  constructor(public playListService: PlayListService) {
  }

  ngOnInit(): void {
  }

  public get playListSortOrder(): typeof PlayListSortOrder {
    return PlayListSortOrder;
  }


  /**
   * Event handlers
   */

  onSettingsChange(): void {
    this.playListService.savePlaylistSettings();
  }
}
