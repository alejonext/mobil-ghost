module.exports = function (scope, post, toast){
	scope.ghost = post.list();
	scope.active = location.path().split('/')[3];

	scope.$watch(function () {
		return location.path()
	}, function (newVal) {
		scope.active = location.path().split('/')[3];
	});

	scope.reload = function () {
		if( scope.ghost.posts.length <= scope.ghost.meta.pagination.total ){
			post.list({
				page :  scope.ghost.meta.pagination.page + 1
			}, function (data) {
				scope.ghost.meta = data.meta;
				for (var i = 0; i < data.post.length; i++)
					scope.ghost.post.push( data.post[i] );			
			},function (err){
				toast.push(err);
			});
		}
	};
};

module.exports.$inject = [
	'$scope',
	'posts',
	'toast'
];
