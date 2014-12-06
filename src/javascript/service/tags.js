﻿module.exports = function (scope, stroge, resource, api ){
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

	return resource( 'http' + (  is.secure ? 's' : '' ) + '://' + is.url + api + '/tags/:id', {
		id : ''
	}, {
		list : {
			method : 'GET',
			params : {

			},
			headers : is.oauth.header
		},
		add : {
			method : 'POST',
			headers : is.oauth.header,
			params : {

			},
		},
		remove : {
			method : 'DELETE',
			headers : is.oauth.header,
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
