import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageLogService } from '../message-log.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'windstrom',
  };
  selectedHero?: Hero;

  listOfHeroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageLogService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero) {
    this.messageService.addMessage(
      'Heroes fetched :' + hero.id + ' ' + hero.name
    );
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((res) => {
      this.listOfHeroes = res;
    });
  }
}
