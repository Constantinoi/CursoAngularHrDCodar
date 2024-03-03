import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { PaisDadosComponent } from './components/pais-dados/pais-dados.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { MudaNumeroComponent } from './components/muda-numero/muda-numero.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { UsePipesComponent } from './components/use-pipes/use-pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    PaisDadosComponent,
    DiretivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    MudaNumeroComponent,
    ListRenderComponent,
    UsePipesComponent,
    TwoWayBindingComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
