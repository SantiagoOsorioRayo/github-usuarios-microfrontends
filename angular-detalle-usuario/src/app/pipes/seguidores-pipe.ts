import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seguidores',
  standalone: true
})
export class SeguidoresPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (!value || value === 0) {
      return 'Sin seguidores';
    }
    return value.toString();
  }
}