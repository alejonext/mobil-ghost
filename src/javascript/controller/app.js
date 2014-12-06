module.exports = function (scope, stroge, location ){
	scope.is = stroge.$default({
		login : false,
		local : location.path(),
		url : '',
		secure : true,
		oauth : {
			access_token: '',
			refresh_token: '',
			expires_in: 0,
			token_type: '',
			header : {
				'Authorization' : ''
			}
		}
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
