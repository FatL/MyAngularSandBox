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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var heroes_list_1 = require('./heroes-list/heroes-list');
var rest_call_1 = require('./rest-call/rest-call');
var forms_1 = require('./forms/forms');
var heroes_service_1 = require('./heroes-list/heroes-service');
var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.getLinkStyle = function (path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            directives: ([heroes_list_1.HeroesList, rest_call_1.RestCall, router_1.ROUTER_DIRECTIVES])
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/heroes', component: heroes_list_1.HeroesList, as: 'HeroesList' }),
            new router_1.Route({ path: '/rest', component: rest_call_1.RestCall, as: 'RestCall' }),
            new router_1.Route({ path: '/forms', component: forms_1.Forms, as: 'Forms' })
        ]), 
        __metadata('design:paramtypes', [router_1.Location])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [heroes_service_1.HeroesService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map