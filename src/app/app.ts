import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap, Component, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, Location, LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS, RouteConfig, Route} from 'angular2/router';
import {HeroesList} from './heroes-list/heroes-list';

@Component({
	selector: 'my-app',
	templateUrl:'app/app.html',
	directives:([HeroesList, ROUTER_DIRECTIVES])
})

@RouteConfig([
	new Route({path:'/heroes', component: HeroesList, as:'HeroesList'})	
])

class AppComponent {
	
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);