import {Component, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
	directives: [FORM_DIRECTIVES,CORE_DIRECTIVES],
	templateUrl:'./app/heroes-list/heroes-list.html',
})

export class HeroesList {
	public title = 'DOTA 2';
	public selectedHero: Hero;
	public heroes = HEROES;
	
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

var HEROES: Hero[] = [
	new Hero("Rubick","Intel"),
	new Hero("Templar Assassin","Agi"),
	new Hero("Silencer","Intel"),
	new Hero("Crystal Maiden","Intel"),
	new Hero("Magnus","Strength"),
	new Hero("Undying", "Intel"),
	new Hero("Disruptor", "Intel"),
	new Hero("Jakiro", "Intel"),
	new Hero("Lich", "Intel"),
	new Hero("Oracle", "Intel")
];