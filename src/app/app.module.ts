import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { DispositivoListComponent } from './features/dispositivo/dispositivo-list/dispositivo-list.component';
import { DispositivoDetailComponent } from './features/dispositivo/dispositivo-detail/dispositivo-detail.component';
import { DispositivoInsertComponent } from './features/dispositivo/dispositivo-insert/dispositivo-insert.component';
import { FormsModule } from '@angular/forms';
import { DispositivoDeleteComponent } from './features/dispositivo/dispositivo-delete/dispositivo-delete.component';
import { DispositivoEditComponent } from './features/dispositivo/dispositivo-edit/dispositivo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    DispositivoListComponent,
    DispositivoDetailComponent,
    DispositivoInsertComponent,
    DispositivoDeleteComponent,
    DispositivoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
