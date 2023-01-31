import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {

  tracksTrending: Array <TrackModel>=[]
  tracksRandom: Array <TrackModel>=[]

  listObserver$: Array<Subscription> = []

  constructor( private trackService: TrackService ) {}


  ngOnInit(): void {
  
    const observer$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response
      console.log('canciones trending', response);
    })

    const observer2$ = this.trackService.datatracksRandom$
    .subscribe(response => {
      this.tracksTrending = response
      console.log('canciones trending', response);
    })


   this.listObserver$ = [observer$]
   this.listObserver$ = [observer2$]

  }
  ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe())
    
  }

}
