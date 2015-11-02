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
var mock_heroes_1 = require('./mock-heroes');
var angular2_1 = require('angular2/angular2');
var HeroesService = (function () {
    function HeroesService() {
        this.heroes = mock_heroes_1.HEROES;
    }
    HeroesService.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroesService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroesService);
    return HeroesService;
})();
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes-service.js.map