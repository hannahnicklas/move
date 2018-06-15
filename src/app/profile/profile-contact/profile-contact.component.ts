import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
   document.getElementById('thipic').setAttribute('style', 'height: 200px; width: auto');
  }
}
