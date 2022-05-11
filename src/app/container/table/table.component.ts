import playersData  from '../../players.json'
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

interface Player {
  PlayerId: Number;
  Name: String
}

interface Game {
  PlayerId: number,
  TotalScore: number,
  GamesPlayed: Number
}

export interface PeriodicElement {
  PlayerId: number;
  TotalScore: number;
  GamesPlayed: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    PlayerId: 5,
    TotalScore: 410,
    GamesPlayed: 16
  }, {
    PlayerId: 2,
    TotalScore: 640,
    GamesPlayed: 15
  }, {
    PlayerId: 6,
    TotalScore: 200,
    GamesPlayed: 9
  }, {
    PlayerId: 1,
    TotalScore: 700,
    GamesPlayed: 9
  }, {
    PlayerId: 4,
    TotalScore: 150,
    GamesPlayed: 9
  }, {
    PlayerId: 3,
    TotalScore: 50,
    GamesPlayed: 3
  }, {
    PlayerId: 6,
    TotalScore: 300,
    GamesPlayed: 8
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  players: Player[] = playersData

  displayedColumns: string[] = ['playerName', 'gamesPlayed', 'totalScore'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }  

  ngOnInit() {
  }

}
