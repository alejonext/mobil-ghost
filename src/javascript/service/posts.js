module.exports = function (scope, stroge, resource, api, app ){
	return resource( 'http' + ( stroge.secure ? 's' : '' ) + '://:urls' + api + api + 'posts/:id?', {
		urls : stroge.url,
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
			headers : stroge.oauth.header,
		},
		byId : { // Get the post
			method : 'GET',
			headers : stroge.oauth.header,
			params : {
				id : '@',
				include : 'tags',
				status : 'all'
			},
		},
		save : { // New Post
			method : 'POST',
			headers : stroge.oauth.header,
			params : {
				id : ''
			},
		},
		update :{ // Update Post
			method : 'PUT',
			headers : stroge.oauth.header,
			params : {
				id : '@'
			},
		},
		remove :{ // Remove Post
			method : 'DELETE',
			headers : stroge.oauth.header,
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
