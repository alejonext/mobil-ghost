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

	return resource( 'http' + (  is.secure ? 's' : '' ) + '://' + is.url + api + 'posts/:id?', {
		id : ''
	}, {
		list : { // Get the list of the posts
			method : 'GET',
			params : {
				page :  1,
				limit : 15,
				status : 'all',
				staticPages : 'all',
			},
			headers : is.oauth.header,
		},
		byId : { // Get the post
			method : 'GET',
			headers : is.oauth.header,
			params : {
				id : '@',
				include : 'tags',
				status : 'all'
			},
		},
		save : { // New Post
			method : 'POST',
			headers : is.oauth.header,
			params : {
				id : ''
			},
		},
		update :{ // Update Post
			method : 'PUT',
			headers : is.oauth.header,
			params : {
				id : '@'
			},
		},
		remove :{ // Remove Post
			method : 'DELETE',
			headers : is.oauth.header,
			params : {
				id : '@'
			},
		},
	});
};

module.exports.$inject = [
	'$scope',
	'$localStorage',
	'$resource',
	'api'
];
