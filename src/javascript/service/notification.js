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
	return resource( 'http' + (  is.secure ? 's' : '' ) + '://' + is.url + api + 'notifications/:id', {
		id : ''
	}, {
		list : {
			method : 'GET',
			withCredentials : true,
			params : {
				id : ''
			},
			headers : res
		},
		add : {
			method : 'POST',
			withCredentials : true,
			headers : {
				'Authorization' : is.oauth.token_type + ' ' + is.oauth.access_token
			},
			params : {

			},
		},
		remove : {
			method : 'DELETE',
			withCredentials : true,
			headers : res,
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
