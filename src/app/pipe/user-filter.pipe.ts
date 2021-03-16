import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any[] | null, filterText: string): any[] | null {
    if (!Array.isArray(value) || !filterText ) {
      return value;
    }

    return value.filter( item => {
      return item["name"].toLowerCase().includes((filterText.toLowerCase()));

    });
  }

}
