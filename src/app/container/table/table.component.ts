import playersData  from '../../players.json'
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


interface Player {
  PlayerId: Number;
  Name: String
}

interface Game {
  position: number,
  playerId: number,
  totalScore: number,
  gamesPlayed: Number,
  playerName: string
}

export interface PeriodicElement {
  playerId: number;
  totalScore: number;
  gamesPlayed: number;
}

const GAME_DATA: PeriodicElement[] = [
  {
    playerId: 5,
    totalScore: 410,
    gamesPlayed: 16
  }, {
    playerId: 2,
    totalScore: 640,
    gamesPlayed: 15
  }, {
    playerId: 6,
    totalScore: 200,
    gamesPlayed: 9
  }, {
    playerId: 1,
    totalScore: 700,
    gamesPlayed: 9
  }, {
    playerId: 4,
    totalScore: 150,
    gamesPlayed: 9
  }, {
    playerId: 3,
    totalScore: 50,
    gamesPlayed: 3
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  players: Player[] = playersData
  faTrophy = faTrophy  

  displayedColumns: string[] = [
    'position', 
    'playerName',
    'totalScore', 
    'gamesPlayed'
  ];
  gameData = new MatTableDataSource(GAME_DATA);

  constructor() {}

  @ViewChild(MatSort)  sort!: MatSort;  

  ngAfterViewInit() { this.gameData.sort = this.sort; console.log(this.gameData);
   }

  ngOnInit() {      
    GAME_DATA.sort((a:any,b:any) => { return b.totalScore - a.totalScore })
    GAME_DATA.forEach((player:any, index:number) => {
      player.position = index + 1
      return player
    })

    GAME_DATA.forEach((player: any) => {
      const foundPlayer = this.players.find(x => x.PlayerId == player.playerId)
      player.name = foundPlayer?.Name
      return player
    })
  }
}