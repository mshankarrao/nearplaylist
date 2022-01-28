import { Component, OnInit, SkipSelf } from '@angular/core';
import { PlayListService } from '../../services/playlist.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlayListComponent implements OnInit {
  constructor(public playlistService: PlayListService, public spotifyService: SpotifyService) {
  }

  heroes = []
  selectedHero;

  ngOnInit(): void {
    this.spotifyService.getRecommendations().subscribe(async (val: any) => {
      this.heroes = val.tracks;
      console.log(val);
    }
    )
  }

  onSelect(hero: any): void {
    this.selectedHero = hero;
  }


  onClearAll(): void {
    this.playlistService.clearAll();
  }

  onPlayListClick(id): void {
    this.playlistService.toggleCompleted(id);
  }
}
