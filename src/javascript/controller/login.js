module.exports = function (scope, stroge, location, auth ){
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
	scope.login = { loading : false };

	scope.goLogin = function () {
		scope.login.loading = true;
		auth.$getToken({
			grant_type : 'password',
			client_id : app.name,
			username : scope.user,
			password : scope.password
		}, function (data) {
			angular.extend(scope.is.oauth, data);
			scope.is.oauth.header.Authorization = data.token_type + ' ' + data.access_token;
			scope.login.loading = false;
			location.path('#/home');
		}, function (err) {
			scope.login.loading = false;
		});
	};
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$location',
	'auth'
];
