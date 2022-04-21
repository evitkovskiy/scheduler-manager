import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-scheduler-manager',
  templateUrl: './scheduler-manager.component.html',
  styleUrls: ['./scheduler-manager.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulerManagerComponent implements OnChanges {

  @Input() calendarData: any;

  events: any;
  calendarOptions!: CalendarOptions;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) return;
      this.events = this.calendarData?.leave_requests?.data.map((item: any) => {
        return {
          title: item.user.full_name,
          start: item.start_date.substr(0, 10),
          end: item.end_date.substr(0, 10),
          img: item.user.avatar,
          backgroundColor: 'blue'
        }
      }); 
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          events: this.events,
          dateClick: this.handleDateClick.bind(this),
          eventMouseEnter: this.eventMouseEnter.bind(this),
          eventMouseLeave: this.eventMouseLeave.bind(this),
          eventContent: this.eventContent.bind(this)
      }
  }



  handleDateClick(arg: any): void {
    alert('date click! ' + arg.dateStr)
  }

  eventMouseEnter(info: any): void {
    let tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'custom-event-tooltip');
    tooltip.setAttribute('style', `position: absolute; z-index: 10000; top: ${info.jsEvent.clientY}px; left: ${info.jsEvent.clientX}px; width: 300px; height: 100px; background-color: red`)
    tooltip.innerHTML = info.event.extendedProps.description;
    document.body.appendChild(tooltip);
   }
   
   eventMouseLeave(info: any): void {
     if(info) {
       document.getElementById('custom-event-tooltip')?.remove();
     }
   }

  eventContent(arg: any): { domNodes: HTMLDivElement[] } {
    let newEvent = document.createElement('div')
    let img = document.createElement('img');
    img.setAttribute('src', arg.event.extendedProps.img);
    img.setAttribute('style', 'width: 25px; height: 25px')
    let title = document.createElement('span');
    title.innerHTML = arg.event.title;
    newEvent.appendChild(img);
    newEvent.appendChild(title);
    let arrayOfDomNodes = [ newEvent ]
    return { domNodes: arrayOfDomNodes }
  }

}
