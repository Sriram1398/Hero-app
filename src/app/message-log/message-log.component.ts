import { Component } from '@angular/core';
import { MessageLogService } from '../message-log.service';

@Component({
  selector: 'app-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.css'],
})
export class MessageLogComponent {
  constructor(public message: MessageLogService) {}
}
