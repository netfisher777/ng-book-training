import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotifyService.searchTrack(this.query).subscribe((results: any) => {
      this.renderResults(results);
    });
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
               .then( _ => this.search());
  }

  renderResults(results: any): void {
    this.results = null;
    if (results && results.tracks && results.tracks.item) {
      this.results = results.tracks.item;
    }
  }

  ngOnInit() {
    this.search();
  }

}
