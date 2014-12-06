module.exports = function (scope, param, post, toast ){
	function showToast (data) {
		toast.push(data);
	}

	scope.isNew = param.id === 'new';
	scope.post = {};
	if(!scope.isNew){
		scope.ghost = post.get({
			id : param.id
		}, function (data) {
			scope.post = data.post[0];
		}, function (error) {
			toast.push(error);
		});
	}

	scope.save = function () {
		post[ scope.isNew ? 'save' : 'update' ](scope.post, showToast, showToast);
	};

};

module.exports.$inject = [
	'$scope',
	'$param',
	'post'
];
