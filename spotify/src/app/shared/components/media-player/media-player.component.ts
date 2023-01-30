import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://i.postimg.cc/dQdxDNtT/conexion-Movil.jpg',
    album: 'Gioly',
    name: 'BEBE Oficial',
    url: 'http//localhost/track.mp3',
    _id: 1
  }


  listObserver$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService ) {}
  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion', response)
      }
    )

   this.listObserver$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe())
    console.log('Componente destruido')
    
  }
}
