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
      "Authorization":"Bearer BQCtKv_RYsPGxPR00V_7EVso3Q7Tg_UWYPNxRxfqxQClE3bqRB4m2NvOJvol48p30gQj3672ah6zQqE6CCQ"
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}
