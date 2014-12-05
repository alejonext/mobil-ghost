module.exports = function (routeP, httpP){
	httpP.defaults.withCredentials = true;
	routeP
		.when('/home', {
			templateUrl: 'home',
			controller : 'home'
		})
		.when('/post/:id/:acction', {
			templateUrl : 'post',
			controller : 'post'
		})
		.when('/user', {
			templateUrl : 'user',
			controller : 'user'
		})
		.otherwise({
			templateUrl: 'login',
			controller : 'login'
		});
};

module.exports.$inject = [
	'$routeProvider',
	'$httpProvider',
];