import playersData  from '../../players.json'
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


interface Player {
  PlayerId: Number;
  Name: String
}

interface Game {
  playerId: number,
  totalScore: number,
  gamesPlayed: Number
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
  }, {
    playerId: 7,
    totalScore: 300,
    gamesPlayed: 8
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  players: Player[] = playersData

  displayedColumns: string[] = ['playerId', 'totalScore', 'gamesPlayed'];
  gameData = new MatTableDataSource(GAME_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)  sort!: MatSort;  

  ngAfterViewInit() { this.gameData.sort = this.sort; }

  ngOnInit() {      
  }
}
