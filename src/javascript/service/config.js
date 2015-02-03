module.exports = function (routeP, httpP){
	httpP.defaults.withCredentials = true;
	httpP.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	routeP
		.when('/info/:name', {
			templateUrl: 'info',
			controller : 'info'
		})
		.when('/post/:id/:acction', {
			templateUrl : 'post',
			controller : 'post'
		})
		.otherwise({
			templateUrl: 'login',
			controller : 'login'
		});
	httpP.interceptors.push(require('./http.js'));
};

module.exports.$inject = [
	'$routeProvider',
	'$httpProvider',
];