var pathName = window.document.location.pathname;
var projectName = pathName.substring(0, pathName.substr(5).lastIndexOf('/') + 1);
var _baseUrl = projectName + 'static/';

require.config({
	urlArgs: 'v=' + Date.now(),
	baseUrl: _baseUrl,
	paths: {
		/** ******************核心框架和库********************* */
		'jquery': 'core/jquery/2.1.4/jquery',
		'bootstrap': 'core/bootstrap/3.3.5/bootstrap',
		/** ******************系统封装组件********************* */
		'aui': 'components/aui'
	},
	map: {
		'*': {
			'jquery': 'jquery-private',
			'css': 'core/require/css',
			'text': 'core/require/text'
		},
		'jquery-private': {
			'jquery': 'jquery'
		}
	},
	shim: {
	}
});

define('jquery-private', ['jquery'], function() {
	return $.noConflict(true);
});