import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  heroId!: number;

  constructor(
    private heroService: HeroService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroId();
    this.getHeroDetails();
  }

  getHeroId() {
    this.heroId = Number(this.router.snapshot.paramMap.get('id'));
  }

  getHeroDetails() {
    this.heroService.getHero(this.heroId).subscribe((res) => {
      this.hero = res;
    });
  }

  goBack() {
    this.location.back();
  }

  printMsg(event: any) {
    console.log(event);
  }
}
