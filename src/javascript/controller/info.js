module.exports = function (scope, param, info, auth, toast, share ){
	scope.infos = {};
	scope.ghost = get[ param.name ]({}, function (data) {
		scope.infos = angular.isArray(data.users) ? data.users[0] : data;
	}, function (error) {
		toast.push(error);
	});

	scope.toShare = function () {
		//share.
	};
};

module.exports.$inject = [
	'$scope',
	'$param',
	'info',
	'share'
];
