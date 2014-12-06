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

	return resource( 'http' + (  is.secure ? 's' : '' ) + '://' + is.url + api + 'authentication/:action', {
		action : 'passwordreset'
	}, {
		reload : {
			method : 'GET',
			params : {
				id : ''
			},
			headers : is.oauth.header
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
