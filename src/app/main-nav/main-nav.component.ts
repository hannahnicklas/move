import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {


    window.addEventListener('DOMContentLoaded', showPlaceholder );
    window.addEventListener('click', showPlaceholder );

    window.addEventListener('click', scroll );
    window.addEventListener('scroll', scroll );




    /*Regelt die Hintergrundfarbe der Navigation auf der Home Seite*/
    function scroll() {
      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML === 'Home' ) {
        // tslint:disable-next-line:max-line-length
        document.getElementById('main-nav').style.backgroundColor = 'rgba(0,80,117, ' + (document.body.scrollTop / window.innerHeight) + ')';
      }

      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML !== 'Home' ) {
        document.getElementById('main-nav').style.backgroundColor = ('rgb(0,80,117)');
      }
    }

    /*Entfernt den Platzhalter auf der Home Seite, damit der Hintergrund unter die Navigationsleiste rutscht*/
    function showPlaceholder() {
      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML === 'Home' ) {
        document.getElementsByClassName('placeholder')[0].setAttribute('style', 'display: none');
      } else {
        document.getElementsByClassName('placeholder')[0].setAttribute('style', 'display: inline');
        document.getElementsByClassName('placeholder')[0].setAttribute('style', 'display: block;');
      }
    }

  }

}
