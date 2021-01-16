import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: unknown, args?: unknown[]): any {
    let returnValue: string = value.toString();
    if (returnValue.length === 1) {
      returnValue = '0'.concat(returnValue);
    }
    return returnValue;
  }

}
