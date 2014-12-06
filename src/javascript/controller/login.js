module.exports = function (scope, stroge, location, auth ){
	scope.isLoading = false;

	scope.goLogin = function () {
		scope.login.loading = true;
		auth.$getToken({
			grant_type : 'password',
			client_id : app.name,
			username : scope.user,
			password : scope.password
		}, function (data) {
			angular.extend(stroge.oauth, data);
			stroge.oauth.header.Authorization = data.token_type + ' ' + data.access_token;
			scope.login.loading = false;
			location.path('#/home');
		}, function (err) {
			sscope.isLoading = false;
		});
	};
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$location',
	'auth'
];
