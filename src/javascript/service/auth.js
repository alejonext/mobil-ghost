module.exports = function (scope, stroge, resource, api, app ){
	return resource( 'http' + ( stroge.secure ? 's' : '' ) + '://:urls' + api + 'authentication/:action', {
		urls : stroge.url,
		action : 'passwordreset',
	}, {
		reload : {
			method : 'GET',
			params : {
				id : ''
			},
			headers : stroge.oauth.header
		},
		get : {
			method : 'POST',
			withCredentials : true,
			params : {
				action : 'token'
			},
		}
	});
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$resource',
	'api'
];
