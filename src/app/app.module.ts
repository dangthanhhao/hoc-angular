import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponet } from './server/server.componet';
import { Server2Component } from './server2/server2.component';
import {FormsModule} from '@angular/forms';
import { ExcersiseBindDataComponent } from './excersise-bind-data/excersise-bind-data.component';
import { ExcersiseDirectivesComponent } from './excersise-directives/excersise-directives.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerComponet,
    Server2Component,
    ExcersiseBindDataComponent,
    ExcersiseDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ExcersiseDirectivesComponent]
})
export class AppModule { }
