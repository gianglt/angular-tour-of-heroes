import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import {RouterLink, RouterModule} from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes: Hero[] = [];


  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }



}
