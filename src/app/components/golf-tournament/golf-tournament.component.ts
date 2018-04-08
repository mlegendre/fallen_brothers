import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-golf-tournament',
  templateUrl: './golf-tournament.component.html',
  styleUrls: ['./golf-tournament.component.css']
})
export class GolfTournamentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public getYear():number{
    var date = new Date();
    return date.getFullYear();
  }
}
