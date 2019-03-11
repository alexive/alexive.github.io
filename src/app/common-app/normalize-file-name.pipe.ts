import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeFileName'
})
export class NormalizeFileNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(' ', '').toLowerCase();
  }

}
