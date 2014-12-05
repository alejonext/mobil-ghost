module.exports = function (scope, stroge, location ){
	scope.is = stroge.$default({
		login : false,
		local : location.path(),
		url : ''
	});

	if(!scope.is.login && location.path().split('/')[1] != 'login' ){
		location.path('#/login');
		stroge.reset();
	}

	scope.loginOut = function () {
		location.path('#/login');
		stroge.reset();
	};

	scope.is.local = location.path();

};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$location'
];
