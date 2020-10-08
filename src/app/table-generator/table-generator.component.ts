import { FhModelService } from './_services/fh-model/fh-model.service';
import { Component, OnInit } from '@angular/core';
import { FhModul } from './_interfaces/fh-modul';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.sass']
})
export class TableGeneratorComponent {

  public urlInput: string;

  constructor(
    private readonly fhModelService: FhModelService
  ) { }

  public onSubmit(): void {
    this.fhModelService.get(this.urlInput).subscribe((modul: FhModul[]) => {
      console.log(modul);
    }, error => {
      console.error(error);
    });
  }
}
