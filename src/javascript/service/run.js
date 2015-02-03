module.exports =  function (root, am, lang) {
	var _getTopScope = function() {
		return root;
		//return angular.element(document).scope();
	};
	
	root.login = function() {
		var $scope = _getTopScope();
		$scope.login = true;
		if(!$scope.$$phase) $scope.$apply();
	};

	root.outLogin = function() {
		var $scope = _getTopScope();
		$scope.login = false;
		if(!$scope.$$phase) $scope.$apply();
	};

	am.changeLocale(lang);
};

module.exports.$inject = [ '$rootScope', 'amMoment', 'lang' ];