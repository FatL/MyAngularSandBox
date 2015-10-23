var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'DOTA 2';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent.prototype.addHero = function (heroToAdd) {
        if (heroToAdd.value) {
            this.heroes.push(new hero_1.Hero(heroToAdd.value));
            heroToAdd.value = null; // Display cleaning
        }
    };
    AppComponent.prototype.removeHero = function (heroToRemove) {
        if (heroToRemove) {
            var index = this.heroes.indexOf(heroToRemove, 0);
            if (index != undefined) {
                this.heroes.splice(index, 1);
            }
            this.selectedHero = null; // Display cleaning
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            template: "\n\t<h1>{{title}}</h1>\n\t\n\t<div>\n\t\t<div class=\"form-group\">\n\t\t\tAdd an Hero to the list<br/>\n\t\t\t<input #herotoadd>\n\t\t\t<button class=\"btn btn-primary\" (click)=\"addHero(herotoadd)\">ADD</button>\n\t\t</div>\n\t</div>\n\t\n\t<h2>My Heroes List</h2>\n\t<ul class=\"heroes\">\n\t\t<li *ng-for=\"#hero of heroes\" \n\t\t\t[ng-class]=\"getSelectedClass(hero)\"\n\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}</a>\n\t\t</li>\n\t</ul>\n\t\n\t<div *ng-if=\"selectedHero\">\n\t\t<h2>{{selectedHero.name}}</h2>\n\t\t<input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\">\n\t\t<button class=\"btn btn-danger\" (click)=\"removeHero(selectedHero)\">REMOVE</button>\n\t</div>\n\t",
            styles: ["\n\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t.heroes .badge {\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.1em 0.7em;\n\t\tbackground-color: #369;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -1px;\n\t}\n\t.selected { background-color: #EEE; color: #369; }\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var HEROES = [
    new hero_1.Hero("Rubick"),
    new hero_1.Hero("Templar Assassin"),
    new hero_1.Hero("Silencer"),
    new hero_1.Hero("Crystal Maiden"),
    new hero_1.Hero("Magnus"),
    new hero_1.Hero("Undying"),
    new hero_1.Hero("Disruptor"),
    new hero_1.Hero("Jakiro"),
    new hero_1.Hero("Lich"),
    new hero_1.Hero("Oracle")
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map