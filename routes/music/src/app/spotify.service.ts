import {HttpClient, HttpRequest} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  searchTrack(query: string) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');

    const queryURL = `https://api.spotify.com/v1/search?${params}`;
    const httpRequest = new HttpRequest('GET', queryURL);
    return this.http.request(httpRequest).pipe(map((response: any) => response.json()));
  }

}
