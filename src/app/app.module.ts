import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';

import { ResultService } from './services/result.service';

@NgModule({
  declarations: 
  [ AppComponent,
    HomeComponent,
    ResultComponent
  ],
  entryComponents: [
    HomeComponent,
    ResultComponent
  ],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ResultService],
  bootstrap: [AppComponent],
})
export class AppModule {}
