import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SeguidoresService {
  login: string;
  avatar_url: string;
}

@Injectable({ providedIn: 'root' })
export class FollowersService {

  constructor(private http: HttpClient) {}

  obtenerSeguidores(username: string): Observable<SeguidoresService[]> {
    return this.http.get<SeguidoresService[]>(
      `https://api.github.com/users/${username}/followers`
    );
  }
}