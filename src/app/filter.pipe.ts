import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, fitlerString: string, propName: string): any {
    if (value.length === 0 || fitlerString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === fitlerString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
