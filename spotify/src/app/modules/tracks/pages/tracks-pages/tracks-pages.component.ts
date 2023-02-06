import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


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
    this.trackService.getAllTracks$()
    .subscribe(response =>{
      console.log("DATA", response);
    } )

  }

  ngOnDestroy(): void {

  }

}
