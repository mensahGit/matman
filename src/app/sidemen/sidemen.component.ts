import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemen',
  templateUrl: './sidemen.component.html',
  styleUrls: ['./sidemen.component.scss']
})
export class SidemenComponent implements OnInit {

  spread:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  log(state){
    console.log(state);
  }
}
