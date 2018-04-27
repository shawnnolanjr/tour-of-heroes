import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'heroNiceName'})
export class HeroNiceNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(' ', '-').replace('.', '').toLocaleLowerCase();
  }
}
