app
	.controller('MainController', ['$scope', function($scope) {
		$scope.tab = 3;
		$scope.tests = [
			{
				name: '{{new.name}}'
			}
		];
		$scope.contents = [
			{
				title: 'Package manager',
				items: [
					'npm',
					'bower',
				]
			},
			{
				title: 'Task runner',
				items: [
					'Gulp',
				]
			},
			{
				title: 'CSS/JS Pre-processor',
				items: [
					'Stylus',
					'Sass',
					'Less',
					'Babel'
				]
			},
			{
				title: 'Useful stuffs',
				items: [
					'GIT',
					'node.js',
				]
			},
			{
				title: 'Languages and other technologies',
				items: [
					'HTML5', 
					'CSS3', 
					'JS(ES7)', 
					'JSON', 
					'PHP', 
					'XML', 
					'MySql',
					'MongoDB'
				]
			},
			{
				title: 'Favorites Frameworks/Libs',
				items: [
					'AngularJS',
					'Ionic',
					'React',
					'Underscore',
					'Jasmine'
				]
			},
			{
				title: 'Methodology',
				items: [
					'Block Element Modifier (BEM)',
					'Model View Controller (MVC)',
				]
			},
			{
				title: 'CMS',
				items: [
					'Wordpress',
				]
			},
			{
				title: 'Design',
				items: [
					'UI',
					'UX',
					'Photoshop tools',
					'Web trends',
				]
			},
		];

	}])
	.filter('range', function() {
		return function(input, total) {
		total = parseInt(total);

		for (var i=1; i<=total; i++) {
			input.push(i);
		}

		return input;
		};
	});
