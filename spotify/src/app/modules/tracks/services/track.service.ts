import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:  Observable<TrackModel [] > = of([])
  datatracksRandom$: Observable <any > = of([])


  constructor() { 
    const {data}: any = (dataRaw as any).default;

    this.dataTracksTrending$ = of(data)

    //  this.datatracksRandom$ = of(data)

    this.datatracksRandom$ = new Observable((observer) =>{

      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://cdns-images.dzcdn.net/images/cover/f4ac5d5a119be8ebc1005f3ffbbb1f02/264x264.jpg'
      }

       setTimeout(() => {
        observer.next([trackExample])
       }, 3500)
    } )
  }
}
