import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
