import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
//CREATE DATA SOURCE...STEP#1
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gabriel', weight: 1.0079, symbol: 'G'},
  {position: 2, name: 'Gabriel', weight: 4.0026, symbol: 'Ge'},
  {position: 3, name: 'Gabriel', weight: 6.941, symbol: 'Gi'},
  {position: 4, name: 'Gabriel', weight: 9.0122, symbol: 'Gle'},
  {position: 5, name: 'Gabriel', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Gabriel', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Gabriel', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Gabriel', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Gabriel', weight: 18.9984, symbol: 'Fa'},
  {position: 10, name: 'Gabriel', weight: 20.1797, symbol: 'Me'},
];

@Component({
  selector: 'app-datakan',
  templateUrl: './datakan.component.html',
  styleUrls: ['./datakan.component.scss']
})
export class DatakanComponent implements OnInit {
//ASSIGN DATA SOURCE VALUE...STEP#2
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
