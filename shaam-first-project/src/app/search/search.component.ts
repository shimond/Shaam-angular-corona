import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search', // html tag name
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  searchTitle = 'Search worker';
  searchWord: string;
  isBusy = false;
  result: string[] = [];

  constructor() { }

  doSearch(): void {
    this.isBusy = true;
    this.result = [];
    setTimeout(() => {
      for (let index = 0; index < 8; index++) {
        this.result.push(this.searchWord + '_' + index);
      }
      this.isBusy = false;
    }, 3000);
  }
}
