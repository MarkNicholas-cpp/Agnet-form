import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgentformComponent } from './agentform/agentform.component';
import { PopulationComponent } from './population/population.component';
import { HousesComponent } from './houses/houses.component';
import { MobileNetworkComponent } from './mobile-network/mobile-network.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgentformComponent,
    PopulationComponent,
    HousesComponent,
    MobileNetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
