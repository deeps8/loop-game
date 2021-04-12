import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoopServiceService } from 'src/app/services/loop-service.service';

import { interval, Observable, Subject } from 'rxjs';
import { isEmpty, throttleTime } from 'rxjs/operators';




@Component({
  selector: 'app-loop-level',
  templateUrl: './loop-level.page.html',
  styleUrls: ['./loop-level.page.scss'],
})
export class LoopLevelPage implements OnInit,OnDestroy {

  level:number;
  nextLevel:number=0;
  
  levelObject;
  board:string[][];
  cell:any;
  functions:Array<any>;
  executeFunc:number[]=[];
  startsi:any;
  startsj:any;
  boardSize:any;
  done = false;
  runningFun:number=0;


  source = interval(500);
  example = this.source.pipe(throttleTime(1000));
  loopSub;
  
  constructor(
              private router: ActivatedRoute,
              private loopService: LoopServiceService ,
              private alertCtrl: AlertController,
  ) { 
    this.getLevel();
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    
    if(this.done)
      this.loopSub.unsubscribe();
  }

  getfunc(fun){
    switch (fun) {
      case 1 :  return "moveForward()";

      case 2 :  return "moveBackward()";

      case 3 :  return "moveLeft()";

      case 4 :  return "moveRight()";
    }
  }

  getLevel(){
    const params = this.router.snapshot.paramMap.get('lvl');
    let split = params.split('');
    console.log(params);
    if(split.length >1){
      console.log(params);
      this.levelObject = this.loopService.getTestLevel(params);
      console.log(this.levelObject);  
    }else{
      this.level = parseInt(params);
      this.nextLevel = this.level+1;

      this.levelObject = this.loopService.getLevel(this.level);
    }
    

      this.board = this.levelObject.boardArray;
      this.cell = this.levelObject.cell;
      this.functions = this.levelObject.functions;
      this.startsi = this.levelObject.starts.i;
      this.startsj = this.levelObject.starts.j;
      this.boardSize = this.levelObject.boardSize;

      //console.log(this.levelObject);

  }

  runWhileLoop(){

      var i = 0,fun;
      this.loopSub = this.example.subscribe(val =>{
        this.done=true;
        console.log("time : ",val);
        if(this.completed("subs")){
          this.loopSub.unsubscribe();
          this.runningFun=0;
        }
        
        if(i == this.executeFunc.length){
          i=0;
        }
          
          fun = this.executeFunc[i];  
          //console.log(this.loopService.loopLevels[this.level-1]);
          console.log("fun",fun);
            switch (fun) {
              case 1 :  this.moveForward();
                        break;

              case 2 :  this.moveBackward();
                        break;

              case 3 :  this.moveLeft();
                        break;

              case 4 :  this.moveRight();
                        break;

              default : break;
            }

            i++;
      });  

  }

  resetLevel(){
    this.getLevel();
    this.executeFunc = [];

    if(this.done)
      this.loopSub.unsubscribe();

  }

  addFunction(fun){
    if(this.executeFunc.length < this.levelObject.functionLimit)
      this.executeFunc.push(fun);
  }

  completed(where){
    let i = this.startsi;
    let j = this.startsj;

    
    if(this.board[i][j]=='E'){
        this.loopSub.unsubscribe();
        this.showGameAlert();
        return true;  
    }

    
    return false  

  }

  moveForward(){
    this.runningFun = 1;
    let i = this.startsi;
    let j = this.startsj;

    if(i-1 >= 0 ){
      if(this.board[i-1][j]=='E' || this.board[i-1][j]=='O' ){
        --this.startsi;
        this.completed("fun");
      }
    }
    
    

  }

  moveBackward(){
    this.runningFun = 2;

    let i = this.startsi;
    let j = this.startsj;

    if(i+1 < this.boardSize.col ){
      if(this.board[i+1][j]=='E' || this.board[i+1][j]=='O' ){
        ++this.startsi;
        this.completed("fun");
      }
    }
    
    

  }


  moveLeft(){
    this.runningFun = 3;

    let i = this.startsi;
    let j = this.startsj;

    if(j-1 >= 0){
      if(this.board[i][j-1]=='E' || this.board[i][j-1]=='O' ){
        --this.startsj;
        this.completed("fun");
      }
    }
    
    

  }


  moveRight(){
    this.runningFun = 4;

    let i = this.startsi;
    let j = this.startsj;

    if(j+1 < this.boardSize.row ){
      if(this.board[i][j+1]=='E' || this.board[i][j+1]=='O' ){
        ++this.startsj;
        this.completed("fun");
      }
    }
    
    

  }

  deleteFun(fun){
    var index = this.executeFunc.indexOf(fun);
    this.executeFunc.splice(index, 1);

  }

  async showGameAlert(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'You Won',
      subHeader: '',
      message: 'Greate work ',
      buttons: ['Next Level','Retry']
    });

    await alert.present();
  }

}
