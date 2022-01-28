import {Component, OnInit} from '@angular/core';
import {PlayListService} from "../../services/playlist.service";


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
})
export class AppFooterComponent implements OnInit {
  playlist: string = '';

  constructor(private playListService: PlayListService) {
  }

  ngOnInit(): void {
  }

  onPlayListAdd() {
    this.playListService.add(this.playlist);
    this.playlist = '';
  }
}
