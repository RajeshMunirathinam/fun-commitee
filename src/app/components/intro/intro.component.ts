import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  showTrophy: boolean = false;
  show: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showTrophy = true;
    }, 2800);
  }

  open(): void {
    // right screen
    anime({
      targets: '.screen-right',
      width: '0',
      easing: 'easeInOutQuad',
      duration: 4000
    });
    // left screen
    anime({
      targets: '.screen-left',
      width: '0',
      easing: 'easeInOutQuad',
      duration: 4000
    });
    // trophy
    anime({
      targets: '.shapeshifter',
      opacity: '0',
      rotate: 360,
      easing: 'easeInOutQuad',
      duration: 4000
    });

    setTimeout(() => {
      this.show = false;
    }, 4000);
  }

}
