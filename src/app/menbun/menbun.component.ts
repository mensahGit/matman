import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menbun',
  templateUrl: './menbun.component.html',
  styleUrls: ['./menbun.component.scss']
})
export class MenbunComponent implements OnInit {

  mooties:any = [
    'cat', 
    'dog',
    'sheep',
    'bear',
    'fish',
    'lion',
    'ant',
    'elephant',
    'snake',
    'deer',
    'moose',
    'seal',
    'frog',
    'eagle',
    'squid',
    'peguin',
    'fly',
    'cow',
    'chicken',
    'monkey',
  ];
  constructor() { }

  ngOnInit() {
  }

}
