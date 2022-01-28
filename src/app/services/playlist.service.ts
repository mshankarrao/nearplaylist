import {Injectable} from '@angular/core';

/* app models */
import {PlaylistItem} from '../models/playlist-item.model';
import {PlaylistSettings} from '../models/playlist-settings.model';

/* app services */
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class PlayListService {
  /* local storage keys */
  readonly key = {
    settings: 'settings',
    playList: 'play-list',
  };

  settings: PlaylistSettings = null;
  playList: PlaylistItem[] = [];

  constructor(private storageService: StorageService) {
    /* load settings and todo list data from storage (if exist) */
    this.settings = JSON.parse(this.storageService.get(this.key.settings)) || new PlaylistSettings();
    this.playList = JSON.parse(this.storageService.get(this.key.playList)) || [];
  }
  
  toggleCompleted(id: string): void {
    for (const playlist of this.playList) {
      if (playlist.id === id) {
        playlist.timeCompleted = (playlist.timeCompleted === null) ? new Date() : null;
        break;
      }
    }

    this.savePlaylist();
  }

  add(playlist: string): void {
    if (playlist) {
      this.playList.push(new PlaylistItem(playlist));
      this.savePlaylist();
    }
  }

  clearAll(): void {
    this.playList = [];
    this.savePlaylist();
  }

  savePlaylist(): void {
    /* save list to storage */
    this.storageService.set(this.key.playList, JSON.stringify(this.playList));
  }

  savePlaylistSettings(): void {
    /* save settings to storage */
    this.storageService.set(this.key.settings, JSON.stringify(this.settings));
  }
}
