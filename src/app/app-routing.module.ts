import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () =>
      import('./modules/portal/portal.module').then((m) => m.PortalModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'portal' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
