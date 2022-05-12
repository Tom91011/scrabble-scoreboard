import playersData  from '../../players.json'
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

interface Player {
  PlayerId: Number;
  Name: String
}

export interface PeriodicElement {
  playerId: number;
  totalScore: number;
  gamesPlayed: number;
}

let GAME_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit { 
  
  players: Player[] = playersData
  faTrophy = faTrophy  
  gameData:any
  
  displayedColumns: string[] = [
    'position', 
    'name',
    'TotalScore', 
    'GamesPlayed'
  ];

  constructor(private http: HttpClient) {}

  @ViewChild(MatSort)  sort!: MatSort;  
  
  ngOnInit() { }

  ngAfterViewInit() { 
        // hard coded for the purposes of the test, ordinally this would be in a .env file
    this.http.get('https://run.mocky.io/v3/faeef3c9-fe5d-4f23-9960-af3a011d9f25')
    .subscribe(Response => {
      this.gameData=Response;
      GAME_DATA = this.gameData.Results

      // Sort players by their total score
      GAME_DATA.sort((a:any,b:any) => { 
        return b.TotalScore - a.TotalScore 
      })

      // On newly sorted game data allocated positions
      GAME_DATA.forEach((player:any, index:number) => {
        player.position = index + 1
        return player
      })

      // Find the player name using the players.json file
      GAME_DATA.forEach((player: any) => {
        const foundPlayer = this.players.find(x => x.PlayerId == player.PlayerId)
        player.name = foundPlayer?.Name 
        return player
      })           

      // Send the fetched gameData to the mat-table in HTML
      this.gameData = new MatTableDataSource(GAME_DATA); 

      // Needed for the sort function
      this.gameData.sort = this.sort      
    })    
  }
}