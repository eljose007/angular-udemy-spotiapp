import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log("spotify service listo");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      "Authorization":"Bearer BQDWR0aMUSst8dI4E7fScmpyisdIE7pZadHC5hlV5bOhBxxcvuM-7sagaAPKeW9mm5_WT365Qw_gMKfKYoE"
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .subscribe( data => {
      console.log(data);
    })
  }
}
