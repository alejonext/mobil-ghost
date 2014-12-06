module.exports = function (scope, stroge, resource, api, app ){
	return resource( 'http' + ( stroge.secure ? 's' : '' ) + '://:urls' + api + ':name/:id', {
		urls : stroge.url,
	}, {
		user : {
			method : 'GET',
			params : {
				id : 'me',
				name : 'user'
			},
			headers : stroge.oauth.header
		},
		site : {
			method : 'GET',
			headers : stroge.oauth.header,
			params : {
				name : 'settings',
				id : ''
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

