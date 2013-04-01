eyes20Common.directive('eyes20Focus', function() {

    return function(scope, elem, attrs) {
        elem.bind('focus', function() {
            elem.attr('class', scope.eyes20Focus);
        });
    };

});
