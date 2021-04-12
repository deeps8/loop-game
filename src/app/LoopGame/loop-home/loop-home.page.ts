import { Component, OnInit } from '@angular/core';
import { LoopServiceService } from 'src/app/services/loop-service.service';

@Component({
  selector: 'app-loop-home',
  templateUrl: './loop-home.page.html',
  styleUrls: ['./loop-home.page.scss'],
})
export class LoopHomePage implements OnInit {

  constructor(
    public loopService: LoopServiceService
  ) { }

  ngOnInit() {
  }

}
