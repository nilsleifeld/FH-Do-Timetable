import {Component, Input} from '@angular/core';
import { FhModul } from './../_interfaces/fh-modul';

@Component({
  selector: 'app-fh-timetable',
  templateUrl: './fh-timetable.component.html',
  styleUrls: ['./fh-timetable.component.sass']
})
export class FhTimetableComponent {

  public times: Time[] = [
    new Time('8:30', '9:15'),
    new Time('9:20', '10:05'),
    new Time('10:15', '11:00'),
    new Time('11:05', '11:50'),
    new Time('12:00', '12:45'),
    new Time('12:50', '13:35'),
    new Time('14:15', '15:00'),
    new Time('15:05', '15:50'),
    new Time('16:00', '16:45'),
    new Time('16:50', '17:35'),
    new Time('17:45', '18:30'),
    new Time('18:35', '19:20'),
    new Time('19:30', '20:15'),
    new Time('21:15', '22:00'),
  ];

  @Input()
  public moduls: FhModul[] = [];

  constructor() { }

  public getModuls(timeBegin: string): FhModul[] {
    return this.moduls.filter(m => m.timeBegin === timeBegin);
  }
}

class Time {
  constructor(
    private startTime: string,
    private endTime: string
  ) {
  }

  public toString(): string {
    return this.startTime + ' - ' + this.endTime;
  }

  public toJsonFormat(): string {
    return this.startTime.replace(':', '');
  }
}
