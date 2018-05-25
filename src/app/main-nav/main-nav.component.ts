import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', scroll );

    function scroll() {

      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML === 'Home' ) {
        document.getElementById('mainNav').style.backgroundColor = 'rgba(0,80,117, ' + (document.body.scrollTop / window.innerHeight) + ')';
      }

      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML !== 'Home' ) {
        document.getElementById('mainNav').style.backgroundColor = ('rgb(0,80,117)');
      }
    }

  }

}
