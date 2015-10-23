import {bootstrap, Component, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';
@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES,CORE_DIRECTIVES],
	template: `
	<h1>{{title}}</h1>
	
	<div>
		<div class="form-group">
			Add an Hero to the list<br/>
			<input #herotoadd>
			<button class="btn btn-primary" (click)="addHero(herotoadd)">ADD</button>
		</div>
	</div>
	
	<h2>My Heroes List</h2>
	<ul class="heroes">
		<li *ng-for="#hero of heroes" 
			[ng-class]="getSelectedClass(hero)"
			(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}</a>
		</li>
	</ul>
	
	<div *ng-if="selectedHero">
		<h2>{{selectedHero.name}}</h2>
		<input [(ng-model)]="selectedHero.name" placeholder="name">
		<button class="btn btn-danger" (click)="removeHero(selectedHero)">REMOVE</button>
	</div>
	`,
	styles:[`
	.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
	.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
	.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
	.heroes .badge {
		font-size: small;
		color: white;
		padding: 0.1em 0.7em;
		background-color: #369;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -1px;
	}
	.selected { background-color: #EEE; color: #369; }
	`]
})

class AppComponent {
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
			this.heroes.push(new Hero(heroToAdd.value));
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
	new Hero("Rubick"),
	new Hero("Templar Assassin"),
	new Hero("Silencer"),
	new Hero("Crystal Maiden"),
	new Hero("Magnus"),
	new Hero("Undying"),
	new Hero("Disruptor"),
	new Hero("Jakiro"),
	new Hero("Lich"),
	new Hero("Oracle")
];

bootstrap(AppComponent);