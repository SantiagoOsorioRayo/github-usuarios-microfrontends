import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { FollowersService, SeguidoresService } from '../service/seguidores.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-seguidores',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './seguidores.html',
})
export class Seguidores {
  private route = inject(ActivatedRoute);
  private service = inject(FollowersService);

  username$!: Observable<string>;
  seguidores$!: Observable<any[]>;

  ngOnInit(): void {
    this.username$ = this.route.paramMap.pipe(
      map(params => params.get('username')!)
    );

    this.seguidores$ = this.username$.pipe(
      switchMap(username =>
        this.service.obtenerSeguidores(username)
      ),
      map(seguidores => seguidores ?? [])
    );
  }
}