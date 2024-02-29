import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { CommonLayout_ROUTES } from './shared/router/common-layout.routes';
import { FullLayout_ROUTES } from './shared/router/full-layout.routes';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/shoppingApp/welcome' },
  { 
    path: '', 
    component: CommonLayoutComponent,
    children: CommonLayout_ROUTES
  },
  { 
    path: '', 
    component: FullLayoutComponent,
    children: FullLayout_ROUTES
  },
];
