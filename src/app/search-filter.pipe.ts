import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) { return []; };
    console.log('search filter items ', items);
    console.log('search filter field ', field);
    console.log('search filter value ', value);
    return items.filter(it => it[field].toLowerCase().indexOf(value) !== -1 );
  }
}
