ariApp.directive('typedjs', function () {
    return {
        restrict: 'E',    
        scope: { strings: '=' },
        template:'<span id="typed-output"></span>',
        link: function ($scope, $element, $attrs) {
          var options = {strings: $scope.strings,
                          typeSpeed: 25,
                          contentType: "html",
                          showCursor:true,
                          cursorChar:"|"
                          };

          $(function(){
            $("#typed-output").typed( options );
          });
        }
    };
});

ariApp.directive('modal', function () {
    return {
      template: '<div class="modal show">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" ng-click="return()" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + '<h6 class="modal-title">Please provide your information below</h6>'+
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
});
