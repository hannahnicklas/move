import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.fixNav();
    window.addEventListener(('scroll'), function () {
      if ( document.body.scrollTop > window.innerHeight) {
        document.getElementById('homeNahanSection').style.backgroundAttachment = 'fixed';
      } else {
        document.getElementById('homeNahanSection').style.backgroundAttachment = 'scroll';
      }

      if ( document.body.scrollTop > (0.8 * window.innerHeight)) {
        document.getElementsByClassName('homeTextWrapper')[0].
        setAttribute('style', 'transform: translate3d(-60vw, 0, 0); transition-duration: 2s;');
      } else {

      }


    });

  }

  /*fixNav() {
    document.getElementById('navPlaceholder').style.display = 'none';
     + (window.innerWidth - document.body.scrollTop);
  }*/
}
