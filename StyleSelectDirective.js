myApp.directive('styleSelect', [function(){
	return {
  			restrict: 'A',
        scope: { 
            items: '=', 
            ngModel: '='
        },
        templateUrl: 'styleSelectDirective.html',
        link: function(scope, element, attr){
            scope.selectClass = attr.selectclass;
            scope.whoAmI = attr.whoami;
            scope.labelMe = (attr.whoami).charAt(0).toUpperCase() + (attr.whoami).slice(1); 
            if(attr.labelme){
                scope.labelMe = attr.labelme;  
            }
        }
	}
}]);