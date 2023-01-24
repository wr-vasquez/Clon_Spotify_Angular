import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://i.postimg.cc/dQdxDNtT/conexion-Movil.jpg',
    album: 'Gioly',
    name: 'BEBE Oficial',
    url: 'http//localhost/track.mp3',
    _id: 1
  }

  constructor() {}
  ngOnInit(): void {

  }
}
