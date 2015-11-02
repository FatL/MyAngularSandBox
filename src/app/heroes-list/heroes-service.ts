import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class HeroesService {
	
	heroes: Hero[];
	
	constructor() {
		this.heroes = HEROES;
	}
	
	getHeroes() {
		return this.heroes;
	}
}