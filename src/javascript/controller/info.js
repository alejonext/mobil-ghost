module.exports = function (scope, param, info, toast, share ){
	scope.info = {};
	scope.info[ param.name ] = info[ param.name ]();

	scope.toShare = function () {
		//share.
	};
};

module.exports.$inject = [
	'$scope',
	'$routeParam',
	'info',
	'toast',
	'share'
];
