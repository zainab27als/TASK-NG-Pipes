import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastLoginEmoji',
  standalone: true,
})
export class LastLoginEmojiPipe implements PipeTransform {
  transform(lastLogin: any): string {
    const lastLoginTimestamp =
      lastLogin instanceof Date ? lastLogin.getTime() : lastLogin;
    const daysAgo = (Date.now() - lastLoginTimestamp) / (1000 * 60 * 60 * 24);

    if (daysAgo <= 7) {
      return '🔥';
    } else if (daysAgo <= 30) {
      return '💤';
    } else if (daysAgo <= 90) {
      return '🦥';
    } else {
      return '👻';
    }
  }
}
