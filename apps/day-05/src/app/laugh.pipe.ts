import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'laugh'
})
export class LaughPipe implements PipeTransform {
  transform(value: string): string {
    return `😂 ${value} 😂`;
  }
}
