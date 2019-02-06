import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonWranglerModule } from 'json-wrangler';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonWranglerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
