import { NgIf } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { users } from '../data/users';

@Pipe({
  name: 'textColor',
  standalone: true,
})
export class TextColorPipe implements PipeTransform {
  transform(status: string): string {
    const map: { [key: string]: string } = {
      active: 'green',
      inactive: 'orange',
      banned: 'red',
    };
    return map[status.toLowerCase()];
  }
}
