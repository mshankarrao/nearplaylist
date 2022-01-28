import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {

  }

  getRecommendations() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer BQBDUyoOTibXGNx3ZKRBRHTWDFuUpq0cZ42JXcL6TaWREBhF8h-SXRNFR8_4KbdE7eTR62S-XWJHVU_PRf0O1Wz1hfiWdm2r571eUwSZCvQELAKlNuUrucSjEaSIsCMX7WXtsisnz2vT7Y58JOxA8lKLpBHQv4rQI4A');
    return this.httpClient.get("https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=&seed_genres=classical,country,jazz,hiphop",{ 'headers': headers });
  }

}
