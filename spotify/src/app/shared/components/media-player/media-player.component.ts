import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = {
    cover: 'https://i.postimg.cc/dQdxDNtT/conexion-Movil.jpg',
    album: 'Gioly',
    name: 'BEBE Oficial'
  }

  constructor() {}
  ngOnInit(): void {

  }
}
