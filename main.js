Vue.component('home', {
	template: "#home-template"
});
Vue.component('projects', {
	template: "#projects-template"
});
Vue.component('404', {
	template: "<hr>where am i"
});

// simple routing
var routes = ['home', 'projects'];

function getRoute() {
    var path = location.hash.replace(/^#\/?/, '') || 'home';
    if (routes.indexOf(path) > -1){
    	return path;
    } else {
    	return '404';
    }
}

window.addEventListener('hashchange', function () {
    app.currentView = getRoute();
});


var app = new Vue({
	el: '#app',
	data: {
		currentView: getRoute(),
		routes: routes
	}
});
