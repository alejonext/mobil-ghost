module.exports = function (auth, resource, api ){
	var headers = auth.headers();
	return resource( ':urls' + api + 'uploads', {
		urls : auth.get(),
	}, {
		add : {
			method : 'POST',
			headers : headers,
		}
	});
};

module.exports.$inject = [
	'auth',
	'$resource',
	'api'
];
