import { Routes } from '@angular/router';

import { LinksComponent } from './links/links.component';
import { LocationsComponent } from './locations/locations.component';

export const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'links', component: LinksComponent },
    { path: 'links/:id', component: LocationsComponent }
];