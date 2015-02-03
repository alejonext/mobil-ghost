module.exports = function (stroge, api, http, root ){
	stroge.$default({
		login : false,
		url : '',
		secure : true,
		oauth : {
			access_token: '',
			expires_in: 0,
			token_type: ''
		}
	});
	if( stroge.oauth.access_token && stroge.oauth.token_type ) root.login();

	return {
		get : function () {
			return 'http' + ( stroge.secure ? 's' : '' ) + stroge.url;
		},
		save : function (data, success, error) {
			var clone = angluar.clone(data);
			delete clone.baseUrl;
			http.post('http' + ( data.secure ? 's' : '' ) + data.baseUrl + api + 'authentication/token', clone)
			.success(function(res){
				root.login();
				angular.extend(stroge.oauth, res);
				stroge.url = data.baseUrl;
				stroge.secure = data.secure;
				success(res);
			}).error(function (err) {
				root.outLogin();
				error(err);
			});
		},
		reset : function (cb) {
			set();
			cb();
		},
		headers : function () {
			var headers = {};
			if (stroge.oauth.access_token.length && stroge.oauth.token_type.length) {
				headers.Authorization = stroge.oauth.token_type + ' ' + stroge.oauth.access_token;
			}
			return config;
		}
	};
};

module.exports.$inject = [
	'$localStorage',
	'api',
	'$http',
	'$rootscope',
];
