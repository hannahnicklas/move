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
  }

  public subscribeBreadcrumbs() {
    this.breadcrumbService.crumbs$.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);

    window.addEventListener('DOMContentLoaded', function(event) {
      console.log('Test');
      document.getElementsByTagName('a')[(document.getElementsByTagName('a').length - 1)].setAttribute('style', 'color: #DC6413');

    });
  }
}
