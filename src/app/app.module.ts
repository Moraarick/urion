import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './core/core.routes';

import { AppComponent } from './app.component';

import { MenuComponent } from './core/menu/menu.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { ChatComponent } from './core/chat/chat.component';
import { ContactComponent } from './core/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { DocumentComponent } from './document/document.component';
import { BtnFloatingComponent } from './core/btn-floating/btn-floating.component';
import { LoginComponent } from './core/login/login.component';
import { LockedComponent } from './core/locked/locked.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    ChatComponent,
    ContactComponent,
    DashboardComponent,
    EmployeeComponent,
    DocumentComponent,
    BtnFloatingComponent,
    LoginComponent,
    LockedComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
