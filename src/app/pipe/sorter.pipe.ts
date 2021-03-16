import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    return this.sortAscending(value, key);

  }


  sortAscending(value: any[], key: string): any[] {
    return value.sort((a, b) => {

      if (typeof (a[key]) === 'number' && typeof (b[key]) === 'number') {
        return a[key] - b[key];
      } else {
        if (key == 'active') {                                       // a kisbetűs értékek miatt kell külön vizsgálni az active-ot
          a[key] = ('' + a[key]).toLowerCase();
          b[key] = ('' + b[key]).toLowerCase();
        }
        return a[key].localeCompare(b[key]);
      }

    })
  }
}
