import { NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// Components
import { SchedulerManagerComponent } from './scheduler-manager.component';
import { SchedulerManagerContainer } from './scheduler-manager.container';

// Services
import { SchedulerManagerService } from '../../services/scheduler-manager.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

export const routes: Routes = [
    {
      path: '',
      canActivate: [],
      component: SchedulerManagerContainer,
      pathMatch: 'full',
    },
  ];

@NgModule({
  declarations: [
    SchedulerManagerComponent,
    SchedulerManagerContainer,
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [SchedulerManagerService],
})
export class SchedulerManagerModule { }
