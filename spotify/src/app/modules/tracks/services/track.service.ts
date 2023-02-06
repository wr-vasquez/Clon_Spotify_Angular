import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {


 private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {

  }
   //El signo de pesos se usa para indicar que es un observable
  getAllTracks$(): Observable <any> {
    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
