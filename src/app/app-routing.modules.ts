import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDatailComponent } from './components/item-datail/item-datail.component';

const routes: Routes = [
  { path: '', component: PrimeiroComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDatailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
