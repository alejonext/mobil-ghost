module.exports = function (auth, resource, api ){
	var headers = auth.headers();
	return resource( ':urls' + api + 'notifications/:id', {
		urls : oauth.get(),
		id : ''
	}, {
		lstroget : {
			method : 'GET',
			params : {
				id : ''
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
