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
var HeroesList = (function () {
    function HeroesList() {
        this.title = 'DOTA 2';
        this.heroes = HEROES;
    }
    HeroesList.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesList.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroesList.prototype.addHero = function (heroToAdd) {
        if (heroToAdd.value) {
            this.heroes.push(new hero_1.Hero(heroToAdd.value));
            heroToAdd.value = null; // Display cleaning
        }
    };
    HeroesList.prototype.removeHero = function (heroToRemove) {
        if (heroToRemove) {
            var index = this.heroes.indexOf(heroToRemove, 0);
            if (index != undefined) {
                this.heroes.splice(index, 1);
            }
            this.selectedHero = null; // Display cleaning
        }
    };
    HeroesList = __decorate([
        angular2_1.Component({
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            templateUrl: './app/heroes-list/heroes-list.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesList);
    return HeroesList;
})();
exports.HeroesList = HeroesList;
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
//# sourceMappingURL=heroes-list.js.map