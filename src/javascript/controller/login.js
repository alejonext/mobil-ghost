module.exports = function (scope, location, oauth ){
	scope.isLoading = false;
	scope.goLogin = function () {
		scope.login.loading = true;
		oauth.save(scope.auth, function(){
			scope.isLoading = false;
			location.path('#/home');
		}, function (err) {
			scope.isLoading = false;
		});
	};
};

module.exports.$inject = [
	'$scope',
	'$location',
	'auth'
];
