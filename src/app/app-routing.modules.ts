import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  { path: '', component: PrimeiroComponentComponent },
  { path: 'list', component: ListRenderComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
