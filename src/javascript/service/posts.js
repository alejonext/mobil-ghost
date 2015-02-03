module.exports = function (auth, resource, api ){
	var headers = auth.headers();
	return resource( ':urls' + api + 'posts/:id?', {
		urls : auth.get(),
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
			headers : headers,
		},
		byId : { // Get the post
			method : 'GET',
			headers : headers,
			params : {
				id : '@',
				include : 'tags',
				status : 'all'
			},
		},
		save : { // New Post
			method : 'POST',
			headers : headers,
			params : {
				id : ''
			},
		},
		update :{ // Update Post
			method : 'PUT',
			headers : headers,
			params : {
				id : '@'
			},
		},
		remove :{ // Remove Post
			method : 'DELETE',
			headers : headers,
			params : {
				id : '@'
			},
		},
	});
};

module.exports.$inject = [
	'oauth',
	'$resource',
	'api'
];
