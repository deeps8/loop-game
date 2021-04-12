import { Injectable } from '@angular/core';
import {  interval, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoopServiceService {

  /*
    Conditions
      - if num-row <= 5 then cell.h = 50
      - if num-row > 5 then cell.h = 30
      - can only have max-num-row = max-num-col = 10 [10,10]
      - level will be decided on length-of-array+1
      - 
  */


  loopLevels:Array<any>=[
    {
      level:1,
      cell:{h:30,w:30},
      boardSize:{row:5,col:6},
      boardArray:[
        ['O','O','O','O','O','O','O','O','O','O'],
        ['O','O','O','O','E','O','O','O','O','O'],
        ['O','O','W','W','O','O','O','O','O','O'],
        ['O','O','W','W','O','O','O','O','O','O'],
        ['O','O','W','W','O','O','O','O','O','O'],
        ['O','O','W','W','O','O','O','O','O','O'],
        ['O','O','W','W','O','O','O','O','O','O'],
        ['O','O','O','O','O','O','O','O','O','O'],
        ['O','O','O','O','O','O','O','O','O','O'],
        ['O','O','O','O','O','S','O','O','O','O']
      ],
      starts:
        {
          i:4,j:5
        },
      exits:1,
      walls:3,
      functionLimit:2,
      functions:[
        {num:1,name:"forward"},
        {num:2,name:"backward"},
        {num:3,name:"left"},
        {num:4,name:"right"}
      ]
    },
    {
      level:2,
      cell:{h:50,w:50},
      boardSize:{row:6,col:5},
      boardArray:[
        ['O','O','O','O','O','O'],
        ['O','O','O','O','O','O'],
        ['O','W','W','W','E','O'],
        ['O','O','O','O','O','O'],
        ['S','O','O','O','O','O']
      ],
      starts:
        {
          i:4,j:0
        },
      exits:1,
      walls:3,
      functionLimit:2,
      functions:[
        {num:1,name:"forward"},
        {num:2,name:"backward"},
        {num:3,name:"left"},
        {num:4,name:"right"}
      ]
    }
  ]

  TestLevel=[];
  
  constructor() {
    if(localStorage.getItem('TestLevel')){
      this.TestLevel = JSON.parse(localStorage.getItem('TestLevel'));
    }
   }

  getLevel(lvl){
    var level =  this.loopLevels[lvl-1];
    return level;
  }

  addTestLevel(level){
    this.TestLevel.push(level);
    localStorage.setItem('TestLevel',JSON.stringify(this.TestLevel));
  }

  getTestLevel(lvl){
    let level = 0;
    this.TestLevel.forEach(l => {
      if(lvl == l.level){
        console.log(l);
        level = l;
      }
    });

     return level;
  }
}
