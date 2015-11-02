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
var heroes_service_1 = require('./heroes-service');
var HeroesList = (function () {
    function HeroesList(heroesService) {
        this.title = 'DOTA 2';
        this.heroes = heroesService.getHeroes();
    }
    HeroesList.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesList.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroesList.prototype.addHero = function (heroToAdd) {
        if (heroToAdd.value) {
            this.heroes.push(new hero_1.Hero(heroToAdd.value, "TBD"));
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
            providers: [heroes_service_1.HeroesService]
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService])
    ], HeroesList);
    return HeroesList;
})();
exports.HeroesList = HeroesList;
//# sourceMappingURL=heroes-list.js.map