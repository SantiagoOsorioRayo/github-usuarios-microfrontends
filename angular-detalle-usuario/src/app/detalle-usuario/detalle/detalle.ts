import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';
import { GithubService } from '../../servicios/github.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { SeguidoresPipe } from '../../pipes/seguidores-pipe';
import { GithubUsuario } from '../model/github-usuario.modelo';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [AsyncPipe, NgIf, SeguidoresPipe],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {

  private route = inject(ActivatedRoute);
  private githubService = inject(GithubService);

  user$!: Observable<GithubUsuario | null>;
  cargando = true;

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map(params => params.get('username')),
      switchMap(username => {
        if (!username) return of(null);
        return this.githubService.obtenerDetalleUsuario(username).pipe(
          catchError(() => of(null))
        );
      })
    );
  }


  async volverUsuarios() {
    const timeout = 3000;
    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const res = await fetch('http://localhost:3000/api', { method: 'GET', signal });
      clearTimeout(timer);
      if (res.ok) {
        window.location.assign('http://localhost:3000');
      } else {
        alert('Next respondió mal, recargando...');
        window.location.reload();
      }
    } catch (err) {
      clearTimeout(timer);
      alert('No se pudo conectar a Next o tardó demasiado, recargando...');
      window.location.reload();
    }
  }

}