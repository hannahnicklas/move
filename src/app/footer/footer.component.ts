import { Component, OnInit, Injectable, Input } from '@angular/core';
import { McBreadcrumbsModule, McBreadcrumbsService, IBreadcrumb } from 'ngx-breadcrumbs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() breadcrumbs: IBreadcrumb[];

  constructor(private breadcrumbService: McBreadcrumbsService) { }

  ngOnInit() {
    this.subscribeBreadcrumbs();

    document.addEventListener( 'DOMContentLoaded', this.setActiveColorBreadcrumb );
    document.addEventListener( 'click', this.setActiveColorBreadcrumb );
  }

  public subscribeBreadcrumbs() {
    this.breadcrumbService.crumbs$.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);
  }

  setActiveColorBreadcrumb() {
    console.log(document.getElementsByClassName('breadcrumbLinks').length);
    document.getElementsByClassName('breadcrumbLinks')[(document.getElementsByClassName('breadcrumbLinks').length - 1)].
    setAttribute('style', 'color: #DC6413');
  }
}
