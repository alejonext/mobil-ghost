module.exports = function (scope, stroge, resource, api ){
	return resource( 'http' + (  stroge.secure ? 's' : '' ) + '://:urls' + api + '/tags/:id', {
		urls : stroge.url,
		id : ''
	}, {
		list : {
			method : 'GET',
			params : {

			},
			headers : stroge.oauth.header
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
