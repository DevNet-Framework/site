import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StartModule } from './start/start.module';
import { CoreModule } from './core/core.module';
import { ConsoleModule } from './console/console.module';
import { WebModule } from './web/web.module';
import { EntityModule } from './entity/entity.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    StartModule,
    CoreModule,
    ConsoleModule,
    WebModule,
    EntityModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
