import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgentformComponent } from './agentform/agentform.component';
import { PopulationComponent } from './population/population.component';
import { HousesComponent } from './houses/houses.component';
import { MobileNetworkComponent } from './mobile-network/mobile-network.component';
import { LitracyRateComponent } from './litracy-rate/litracy-rate.component';
import { MedicalSupportComponent } from './medical-support/medical-support.component';
import { EconomyComponent } from './economy/economy.component';
import { SanitationComponent } from './sanitation/sanitation.component';
import { WaterQualityComponent } from './water-quality/water-quality.component';
import { ElectricTrasportComponent } from './electric-trasport/electric-trasport.component';
import { ElectricComponent } from './electric/electric.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgentformComponent,
    PopulationComponent,
    HousesComponent,
    MobileNetworkComponent,
    LitracyRateComponent,
    MedicalSupportComponent,
    EconomyComponent,
    SanitationComponent,
    WaterQualityComponent,
    ElectricTrasportComponent,
    ElectricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
