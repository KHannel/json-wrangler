import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonWranglerModule } from 'json-wrangler';
import { AppComponent } from './app.component';
import { FirstNameComponent } from './components/first-name/first-name.component';
import { RelativesComponent } from './components/relatives/relatives.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    RelativesComponent,
  ],
  entryComponents: [
    FirstNameComponent,
    RelativesComponent,
  ],
  imports: [
    BrowserModule, // always has to be first
    JsonWranglerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
