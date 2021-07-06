import { Component } from '@angular/core';

declare global {
  interface Window { TencentMLVB: any; }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  background: string = "none"
  constructor() {}

  startPush() {
    var mlvb = window.TencentMLVB;
    mlvb.startPush(null, null, null);
    this.background = "transparent";
  }

  startPlay() {
    var mlvb = window.TencentMLVB;
    mlvb.startPlay(null, 0, null, null);
    this.background = "transparent";
  }

  stopPush() {
    var mlvb = window.TencentMLVB;
    mlvb.stopPush(null, null);
    this.background = "transparent";
  }

  stopPlay() {
    var mlvb = window.TencentMLVB;
    mlvb.stopPlay(null, null);
    this.background = "transparent";
  }



}
