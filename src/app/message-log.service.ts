import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageLogService {
  message: string[] = [];

  constructor() {}

  addMessage(msg: string) {
    this.message.push(msg);
  }

  clear() {
    this.message = [];
  }
}
