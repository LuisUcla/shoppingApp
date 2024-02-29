import { Routes } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren : () => import('../../Auth/auth.routes').then(m => m.routes)
    }
];