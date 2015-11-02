import {Component, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';
import {HeroesService} from './heroes-service';

@Component({
	directives: [FORM_DIRECTIVES,CORE_DIRECTIVES],
	templateUrl:'./app/heroes-list/heroes-list.html',
	providers:[HeroesService]
})

export class HeroesList {
	public title = 'DOTA 2';
	public selectedHero: Hero;
	public heroes;
	
	constructor(heroesService:HeroesService) {
		this.heroes = heroesService.getHeroes();
	}
	
	onSelect(hero: Hero) {
		this.selectedHero = hero;
 	}
	 
	getSelectedClass(hero: Hero) {
		return { 'selected': hero === this.selectedHero };
	}
	
	addHero(heroToAdd) {
		if(heroToAdd.value) {
			this.heroes.push(new Hero(heroToAdd.value,"TBD"));
			heroToAdd.value=null; // Display cleaning
		}
	}
	
	removeHero(heroToRemove) {
		if(heroToRemove) {
			var index = this.heroes.indexOf(heroToRemove, 0);
			if (index != undefined) {
				this.heroes.splice(index, 1);
			}
			this.selectedHero = null; // Display cleaning
		}
	}
 }