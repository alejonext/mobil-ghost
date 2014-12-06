module.exports = function (scope, stroge, resource, api, app ){
	return resource( 'http' + ( stroge.secure ? 's' : '' ) + '://:urls' + api + 'notifications/:id', {
		urls : stroge.url,
		id : ''
	}, {
		lstroget : {
			method : 'GET',
			params : {
				id : ''
			},
			headers : res
		},
		add : {
			method : 'POST',
			headers : stroge.oauth.header,
			params : {

			},
		},
		remove : {
			method : 'DELETE',
			headers : stroge.oauth.header,
			params : {

			}
		},
	});
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$resource',
	'api'
];
