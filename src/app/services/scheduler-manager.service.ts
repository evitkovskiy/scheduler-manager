import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../mock-data/mock-data';
import { delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SchedulerManagerService {

  constructor(private http: HttpClient) { }

  getCalendarData(): Observable<any> {
    return of(MOCK_DATA).pipe(delay(200))
  //  return this.http.get<any>(url);
  }
}

