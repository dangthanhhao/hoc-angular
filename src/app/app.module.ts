import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponet } from './server/server.componet';
import { Server2Component } from './server2/server2.component';
import {FormsModule} from '@angular/forms';
import { ExcersiseBindDataComponent } from './excersise-bind-data/excersise-bind-data.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerComponet,
    Server2Component,
    ExcersiseBindDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
