module.exports = function (scope, stroge, resource, api, app ){
	var is = stroge.$default({
		login : false,
		local : location.path(),
		url : '',
		secure : true,
		oauth : {
			access_token: '',
			refresh_token: '',
			expires_in: 0,
			token_type: '',
			header : {
				'Authorization' : ''
			}
		}
	});
	var res = {
		Authorization : is.oauth.token_type + ' ' + is.oauth.access_token
	};


	return resource( 'http' + ( is.secure ? 's' : '' ) + '://' + is.url + api + 'uploads', {
	}, {
		add : {
			method : 'POST'
			headers : is.oauth.header,
		}
	});
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$resource',
	'api'
];
