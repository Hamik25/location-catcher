import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { AppRoutingModule } from './app-routing.module';
import { LinksComponent } from './links/links.component';
import { LocationsComponent } from './locations/locations.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    LinksComponent,
    LocationsComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
