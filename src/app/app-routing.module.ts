import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'scheduler-manager',
    loadChildren: () => import('../app/components/scheduler-manager/scheduler-manager.module').then((m) => m.SchedulerManagerModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/scheduler-manager',
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
