import { PortalRoutingModule } from './portal-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [TableComponent, DetailsComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    NzTableModule,
    NzInputModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class PortalModule {}
