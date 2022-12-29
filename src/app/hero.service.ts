import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageLogService } from './message-log.service';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageLogService) {}

  getHeroes(): Observable<any> {
    this.messageService.addMessage('HeroService : heroes Fetched');
    return of(HEROES);
  }

  getHero(heroId: number): Observable<Hero> {
    const hero = HEROES.find((hero: Hero) => hero.id == heroId)!;
    return of(hero);
  }
}
