import { Routes } from '@angular/router';

import { LinksComponent } from './links/links.component';
import { LocationsComponent } from './locations/locations.component';
import { LinkGeneratorComponent } from './link-generator/link-generator.component';

export const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'links', component: LinksComponent },
    { path: 'links/:id', component: LocationsComponent },
    { path: 'link-generator', component: LinkGeneratorComponent }
];