import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // por ser uma requisição com cominio diferente, preciso configurar um arquivo proxy.config.js
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    // Pipe + tap: manipula os dados como o subscribe do modo http manual convencional
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // retorna apenas a primeira resposta do servidor, pois não necessário mais de um envio para recuperar as informações
      // take(1), // funciona da mesma forma que o first()
      tap(courses => console.log(courses))
    );
  }
}
