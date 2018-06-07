import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value)
      return null;
    let words = value.toLowerCase().split(' ');    
    for (var i = 0; i < words.length; i++) 
      if (i==0 || words[i].length > 3)
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1, words[i].length);          
    return words.join(' ');
  }

}
