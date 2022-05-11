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

  constructor() {
   }

  ngOnInit(): void {
  }

}
