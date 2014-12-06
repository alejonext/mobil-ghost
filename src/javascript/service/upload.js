module.exports = function (scope, stroge, resource, api, app ){
	return resource( 'http' + ( stroge.secure ? 's' : '' ) + '://:urls' + api + 'uploads', {
	}, {
		add : {
			method : 'POST'
			headers : stroge.oauth.header,
		}
	});
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$resource',
	'api'
];
