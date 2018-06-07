import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, uppercase?: boolean): any {
    if (!value)
      return null;
    let l = limit || 50;
    let v = value.substring(0, l) + (l > value.length ? '' : '...');
    return uppercase ? v.toUpperCase() : v;
  }

}
