import { FhModul } from './../../_interfaces/fh-modul';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FhModelService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public get(url: string): Observable<FhModul[]> {
    return this.http.get<FhModul[]>(url);
  }
}
