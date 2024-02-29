import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Observable, startWith, filter, distinctUntilChanged, map } from 'rxjs';

const ROUTES: any[] = [
  {
    title: 'Dashboard',
    iconType: 'dashboard',
    submenu: [
      {
        path: '/shoppingApp/welcome',
        title: 'Welcome'
      },
      {
        path: '/shoppingApp/monitor',
        title: 'Monitor'
      },
      {
        path: '/shoppingApp/workplace',
        title: 'Workplace'
      }
    ],
    pathCurrents: false
  },
  {
    title: 'Form',
    iconType: 'logout',
    submenu: [
      {
        path: '/basic-form',
        title: 'Basic Form'
      },
      
    ],
    pathCurrents: false
  }
]

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css'],
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, NzIconModule, 
    NzLayoutModule, NzMenuModule, RouterModule, NzDropDownModule,
  ]
})

export class CommonLayoutComponent  {
  isCollapsed = false;
  title$!: Observable<any[]>;
  menuItems = ROUTES;
   

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.title$ = this.router.events.pipe(
      startWith(new NavigationEnd(0, '/', '/')),
      filter(event => event instanceof NavigationEnd),distinctUntilChanged(),
      map(data => this.buildBreadCrumb(this.activatedRoute.root))
    );

    const urlCurrents = this.router.url // url actual
    this.openUrlCurrents(urlCurrents) // metodo para marcar la pestanna actual
  }

  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    let label = '', path = '/', display = null;

    if (route.routeConfig) {
        if (route.routeConfig.data) {
            label = route.routeConfig.data['title'];
            path += route.routeConfig.path;
        }
    } else {
        label = 'Dashboard';
        path += 'dashboard';
    }

    const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
    const breadcrumb = <any>{
        label: label, url: nextUrl
    };

    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  /* Metodo para activar la pestanna actual en el sidebar */
  openUrlCurrents(url: string) {
    for (let i = 0; i < this.menuItems.length; i++) {
      for (let j = 0; j < this.menuItems[i].submenu.length; j++) {
        if (this.menuItems[i].submenu[j].path === url) {
          this.menuItems[i].pathCurrents = true;
          break; // se cierra el ciclo for aunque hayan mas iteraciones
        }
      }
    }
  }
}