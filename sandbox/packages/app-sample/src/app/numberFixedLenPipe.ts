import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'numberFixedLen'
})
export class NumberFixedLenPipe implements PipeTransform {

    transform(number: string, len: number): string {
        return ("0000000000"+number).slice(-len);
    }

}