import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';
import { GithubService } from '../../servicios/github.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { SeguidoresPipe } from '../../pipes/seguidores-pipe';
import { GithubUsuario } from '../model/github-usuario.modelo';

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

  user$!: Observable<GithubUsuario>;
  mostrarVolver: boolean = false;

  ngOnInit(): void {
    this.checkNextActivo();
    this.user$ = this.route.paramMap.pipe(
      map(params => params.get('username')),
      filter((username: any) => !!username),
      switchMap(username =>
        this.githubService.obtenerDetalleUsuario(username!)
      )
    );
  }

  checkNextActivo() {
    const img = new Image();
    img.src = 'http://localhost:3000/favicon.ico?' + Date.now();

    img.onload = () => {
      this.mostrarVolver = true;
    };

    img.onerror = () => {
      this.mostrarVolver = false;
    };
  }

  volverUsuarios() {
    window.location.assign('http://localhost:3000');
  }
}