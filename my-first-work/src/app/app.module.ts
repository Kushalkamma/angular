import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'
import { servercomponent } from './server/server.component';
import { serverscomponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UmaComponent } from './uma/uma.component';
import { SurajComponent } from './suraj/suraj.component';

@NgModule({
  declarations: [AppComponent,servercomponent,serverscomponent,WarningAlertComponent,SuccessAlertComponent, UmaComponent, SurajComponent],
  imports: [
    BrowserModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
