import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MonitorComponent } from './monitor/monitor.component';

export const routes: Routes = [
    { 
        path: 'welcome', 
        component: WelcomeComponent,  
        data: {
            title: 'Welcome',
        } 
    },
    { 
        path: 'monitor', 
        component: MonitorComponent, 
         data: {
            title: 'Monitor',
        } 
    },
];