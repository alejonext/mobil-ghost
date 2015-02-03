angular.module('ghost', [
	'btford.markdown',
	'ng',
	'ngCordova',
	'ngResource',
	'ngSanitize',
	'ngStorage',
	'ngRoute',
	'ngTouch'
])
.constant('API', '/ghost/api/v0.1/') // API the Ghost
.service('oauth', require('./service/oauth.js')) // Auth
.service('info', require('./service/info.js')) // Info blog and user
.service('posts', require('./service/posts.js')) // Posts
.service('tags', require('./service/tags.js')) // Tags
.service('upload', require('./service/upload.js')) // Info blog and user
.directive('publish', require('./directive/publish.js'))
.directive('date', require('./directive/date.js'))
.controller('post', require('./controller/post.js'))
.controller('list', require('./controller/list.js'))
.controller('home', require('./controller/home.js'))
.controller('appgrid', require('./controller/app.js'))
.config( require('./service/config.js') );