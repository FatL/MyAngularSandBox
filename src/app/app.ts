import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap, Component, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, Location, LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS, RouteConfig, Route} from 'angular2/router';
import {HeroesList} from './heroes-list/heroes-list';
import {RestCall} from './rest-call/rest-call';
import {Forms} from './forms/forms';

@Component({
	selector: 'my-app',
	templateUrl:'app/app.html',
	directives:([HeroesList, RestCall, ROUTER_DIRECTIVES])
})

@RouteConfig([
	new Route({path:'/heroes', component: HeroesList, as:'HeroesList'}),
    new Route({path:'/rest', component: RestCall, as:'RestCall'}),
    new Route({path:'/forms', component: Forms, as:'Forms'})
])

class AppComponent {
    location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    getLinkStyle(path) {
        
        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);