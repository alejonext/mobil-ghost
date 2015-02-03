module.exports = function (auth, resource, api ){
	var headers = auth.headers();
	return resource( ':urls' + api + '/tags/:id', {
		urls : auth.get(),
		id : ''
	}, {
		list : {
			method : 'GET',
			params : {

			},
			headers : headers
		},
		add : {
			method : 'POST',
			headers : headers,
			params : {

			},
		},
		remove : {
			method : 'DELETE',
			headers : headers,
			params : {

			}
		},
	});
};

module.exports.$inject = [
	'auth',
	'$resource',
	'api'
];
