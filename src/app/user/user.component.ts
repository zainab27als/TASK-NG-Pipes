import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { TextColorPipe } from '../text-color.pipe';
import { LastLoginEmojiPipe } from '../last-login-emoji.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    TextColorPipe,
    LastLoginEmojiPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
