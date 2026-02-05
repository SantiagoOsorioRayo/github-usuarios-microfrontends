import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUsuario } from '../detalle-usuario/model/github-usuario.modelo';

@Injectable({ providedIn: 'root' })
export class GithubService {

  constructor(private http: HttpClient) { }

  obtenerDetalleUsuario(usuario: string): Observable<GithubUsuario> {
    return this.http.get<GithubUsuario>(
      `https://api.github.com/users/${usuario}`
    );
  }
}