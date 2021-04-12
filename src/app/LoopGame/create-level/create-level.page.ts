import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoopServiceService } from 'src/app/services/loop-service.service';

@Component({
  selector: 'app-create-level',
  templateUrl: './create-level.page.html',
  styleUrls: ['./create-level.page.scss'],
})
export class CreateLevelPage implements OnInit {

  levelForm: FormGroup;
  boardArray:string[][]=[['O','O'],['O','O']];
  elements={
    start:0,
    exit:0,
    walls:0
  };
  starts={
    i:-1,
    j:-1
  };
  cell = { h:30,w:30 };

  constructor(
              private alertCtrl : AlertController,
              private loopService: LoopServiceService
  ) {

      this.levelForm =  new  FormGroup({
        createrName: new FormControl("user", [Validators.required,Validators.maxLength(10)]),
        levelName: new FormControl("idk", [Validators.required,Validators.maxLength(10)]),
        boardRows: new FormControl(2, [Validators.required,Validators.maxLength(2)]),
        boardCols: new FormControl(2, [Validators.required,Validators.maxLength(2)]),
        limit: new FormControl(1, [Validators.required,Validators.maxLength(1)])
      });
  }

  ngOnInit() {
  }


  validLevel(valid){
    if(valid && (this.elements.start == 1) && (this.elements.exit == 1) && (this.elements.walls >= 0)){
      return false;
    }
    return true;
  }

  createBoard(values){
    const Testlevel = {
      level:"lvl-"+values.levelName,
      cell:this.cell,
      boardSize:{row:values.boardRows,col:values.boardCols},
      boardArray:this.boardArray,
      starts:this.starts,
      elements:this.elements,
      functionLimit:values.limit,
      functions:[
        {num:1,name:"forward"},
        {num:2,name:"backward"},
        {num:3,name:"left"},
        {num:4,name:"right"}
      ]
    }
    this.addTestLevelAlert(Testlevel);
  }

  buildBoard(row,col){
    this.elements={
      start:0,
      exit:0,
      walls:0
    };
    this.starts={
      i:-1,
      j:-1
    };
    var r:number = parseInt(row);
    var c:number = parseInt(col);

    if(r >=2 && c <=10 && r <=10 && c >=2){
      let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill('O'));
      this.boardArray = Array2D(r,c);
    }
  }

  setCellFunc(i,j){
    console.log(i,j);

    var flag = {
      exit:0,
      start:0
    };

    this.boardArray.forEach(cell => {
      if(cell.includes('E'))
          flag.exit = 1;
      else if(cell.includes('S'))
          flag.start = 1;    
    });
    
    if(this.boardArray[i][j]==='O'){
      this.selectFunctionality(i,j,flag);
    }

  }

  async addTestLevelAlert(testLevel) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Do you want to Add Level-'+testLevel.level+" ?",
      buttons: [
        {
          text: 'Okay',
          cssClass: 'wall',
          handler: (temp) => {
            this.loopService.addTestLevel(testLevel);
            
            this.loopService.getTestLevel(testLevel.level);
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async removeFunctionality(i,j,feature) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Remove Feature To Cell',
      message: 'you can remove wall, exit , start just click buttons',
      buttons: [
        {
          text: 'Remove '+feature,
          cssClass: 'danger',
          handler: (temp) => {
            if(this.boardArray[i][j]=='S'){
              this.starts.i = this.starts.j = -1;
              this.elements.start--;
            }
            if(this.boardArray[i][j]=='E'){
              this.elements.exit--;
            }
            if(this.boardArray[i][j]=='W'){
              this.elements.walls--;
            }
            this.boardArray[i][j] = 'O';
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async selectFunctionality(i,j,flag) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Add Feature To Cell',
      message: 'you can make wall, exit , start just click buttons',
      buttons: [
        {
          text: 'Make Wall',
          cssClass: 'wall',
          handler: (temp) => {
            this.boardArray[i][j] = 'W';
            this.elements.walls++;
          }
        },
        {
          text: 'Make Exit of Loop',
          cssClass: 'exit',
          handler: (temp) => {
            if(flag.exit == 0)
              this.boardArray[i][j] = 'E';
              this.elements.exit++;
          }
        }, 
        {
          text: 'Make Start of Loop',
          cssClass: 'start',
          handler: (temp) => {
            if(flag.start == 0){
              this.boardArray[i][j] = 'S';
              this.starts.i = i;
              this.starts.j = j;
              this.elements.start++;
            }

          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

}
