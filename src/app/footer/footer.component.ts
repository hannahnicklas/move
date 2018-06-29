import { Component, OnInit, Injectable, Input } from '@angular/core';
import { McBreadcrumbsModule, McBreadcrumbsService, IBreadcrumb } from 'ngx-breadcrumbs';

/**
 * Um die Breadcrumbs im Footer zu verwirklichen, nutzten wir das ngx-breadcrumbs Paket. Mithilfe des darin enthaltenen Service subscriben
 * wir die aktuellen Daten an die breadcrumbs Variable. Diese wird dann im html verwendet.
 */

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
  }
}
