import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from '../heroes-list/hero';

@Component({
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	templateUrl: './app/forms/forms.html'
})

export class Forms {
	hero: Hero = new Hero('Riki', 'Agi');
	typeList = [['Str','Strength'],['Agi','Agility'],['Int','Intelligence']];
	
	onSubmit() {
		console.log(this.hero.name + " : " + this.hero.type);
	}
}