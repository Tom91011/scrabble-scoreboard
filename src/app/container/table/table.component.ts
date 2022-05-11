import { Component, OnInit } from '@angular/core';
import playersData  from '../../players.json'

interface Player {
  PlayerId: Number;
  Name: String
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  players: Player[] = playersData

  gameData = [
    {
      "PlayerId": 5,
      "TotalScore": 410,
      "GamesPlayed": 16
    }, {
      "PlayerId": 2,
      "TotalScore": 640,
      "GamesPlayed": 15
    }, {
      "PlayerId": 6,
      "TotalScore": 200,
      "GamesPlayed": 9
    }, {
      "PlayerId": 1,
      "TotalScore": 700,
      "GamesPlayed": 9
    }, {
      "PlayerId": 4,
      "TotalScore": 150,
      "GamesPlayed": 9
    }, {
      "PlayerId": 3,
      "TotalScore": 50,
      "GamesPlayed": 3
    }, {
      "PlayerId": 6,
      "TotalScore": 300,
      "GamesPlayed": 8
    }
  ]
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
