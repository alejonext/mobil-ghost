var app = angular.module('ghost', [
	'btford.markdown',
	'ng',
	'ngCordova',
	'ngResource',
	'ngSanitize',
	'ngStorage',
	'ngRoute',
	'ngTouch'
]);

app.service('login', require('./service/login.js')); // Login
app.service('posts', require('./service/posts.js')); // Posts
app.service('tags', require('./service/tags.js')); // Tags
app.service('info', require('./service/info.js')); // Info blog
app.service('user', require('./service/user.js')); // Users

app.directive('publish', require('./directive/publish.js'));
app.directive('date', require('./directive/date.js'));

app.controller('post', require('./controller/post.js'));
app.controller('list', require('./controller/list.js'));
app.controller('home', require('./controller/home.js'));
app.controller('appgrid', require('./controller/app.js'));

app.config( require('./service/config.js') );
