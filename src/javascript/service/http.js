module.exports = function ($q, $location, $localStorage) {
	return {
		'request': function (config) {
			config.headers = config.headers || {};
			if ($localStorage.oauth.access_token.length && $localStorage.oauth.token_type.length) {
				config.headers.Authorization = $localStorage.oauth.token_type + ' ' + $localStorage.oauth.access_token;
			}
			return config;
		},
		'responseError': function (response) {
			if(response.status === 401 || response.status === 403) {
				$location.path('/signin');
			}
			return $q.reject(response);
		}
	};
};

module.exports.$inject = ['$q', '$location', '$localStorage' ];