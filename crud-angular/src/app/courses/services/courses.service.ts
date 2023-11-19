import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: "01", name: "Angular", category: "Front-end"},
      {_id: "02", name: "Javascript", category: "Front-end"}
    ]
  }
}
