import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SchedulerManagerService } from 'src/app/services/scheduler-manager.service';

@Component({
  selector: 'schd-scheduler-manager',
  template: `
  <app-scheduler-manager
    [calendarData]="calendarData | async"
    >
  </app-scheduler-manager>
  `,
  styleUrls: ['./scheduler-manager.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulerManagerContainer implements OnInit {

  calendarData!: Observable<any>;  

  constructor(private schedulerManagerService: SchedulerManagerService) { }

  ngOnInit(): void {
      this.calendarData = this.schedulerManagerService.getCalendarData();
  }

}
