module.exports = function (auth, resource, api ){
	var headers = auth.headers();
	return resource( ':urls' + api + ':name/:id', {
		urls : auth.get(),
	}, {
		user : {
			method : 'GET',
			params : {
				id : 'me',
				name : 'user'
			},
			headers : headers
		},
		site : {
			method : 'GET',
			headers : headers,
			params : {
				name : 'settings',
				id : ''
			},
		}
	});
};

module.exports.$inject = [
	'auth',
	'$resource',
	'api'
];

