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





    function scroll() {
      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML === 'Home' ) {
        console.log(document.body.scrollTop / window.innerHeight);
        // tslint:disable-next-line:max-line-length
        document.getElementById('main-nav').style.backgroundColor = 'rgba(0,80,117, ' + (document.body.scrollTop / window.innerHeight) + ')';
      }

      if ( document.getElementsByClassName('breadcrumbLinks')[0].innerHTML !== 'Home' ) {
        document.getElementById('main-nav').style.backgroundColor = ('rgb(0,80,117)');
      }
    }

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
