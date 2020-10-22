import {Component} from '@angular/core';
import {FhModelService} from './_services/fh-model/fh-model.service';
import {FhModul} from './_interfaces/fh-modul';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html'
})
export class TableGeneratorComponent {

  public tables: Array<FhModul[]> = [];

  public urlInput: string;

  constructor(
    private readonly fhModelService: FhModelService
  ) {
    // TEST START (Loading json example timetable)
    this.urlInput = 'https://ws.inf.fh-dortmund.de/fbws/current/rest/CourseOfStudy/STDBSW/1/Events?Accept=application/json&studentSet=*';
    this.onSubmit();
    this.urlInput = '';
    // TEST END
  }

  public onSubmit(): void {
    this.fhModelService.get(this.urlInput).subscribe((moduls: FhModul[]) => {
      this.addModules(moduls);
    }, error => {
      console.error(error);
    });

    this.urlInput = '';
  }

  private addModules(fhModuls: FhModul[]): void {
    this.tables.push(fhModuls);
  }

  public onBuild(): void {
    const buildTable: FhModul[] = [];

    this.tables.forEach(table => {
      const selectModuls = table.filter(m => m.select);
      buildTable.push(...selectModuls);
    });

    console.log(buildTable);
  }
}


