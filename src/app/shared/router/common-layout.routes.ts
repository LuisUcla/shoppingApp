import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'shoppingApp',
        loadChildren : () => import('../../pages/pages.routes').then(m => m.routes)
    }
]