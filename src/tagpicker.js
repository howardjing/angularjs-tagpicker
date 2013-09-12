angular.module('tagpicker', [])

// display existing tags and the new tag
.directive('tagpicker', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: "../src/tagpicker.html",
    scope: {
      tags: '='
    },
    controller: ['$scope', '$attrs', '$controller', function($scope, $attrs, $controller) {
      var self = this;

      $scope.tags = $scope.tags || [];
      $scope.currentTag = '';
      $scope.focused = false;

      var inArray = function(array, element) {
        return array.indexOf(element) != -1;
      }

      $scope.deleteTag = function(tag) {
        if (inArray($scope.tags, tag)) {
          $scope.tags.splice($scope.tags.indexOf(tag), 1);
        }
      }

      $scope.triggerFocus = function() {
        self.setFocus(true);
      }

      this.createNewTag = function() {
        // don't allow empty tag and don't allow duplicate tags
        if ($scope.currentTag && !inArray($scope.tags, $scope.currentTag)) {
          $scope.tags.push($scope.currentTag);
          $scope.currentTag = '';
        }
      }

      this.isNewTag = function() {
        return $scope.currentTag == '';
      }

      this.isFocused = function() {
        return $scope.focused;
      }

      this.setFocus = function(value) {
        $scope.focused = value;
      }

      // different from $scope.deleteTag because
      // this will only delete the last tag
      // while deleteTag will search for a tag to delete
      this.deleteLastTag = function() {
        if ($scope.tags.length > 0) {
          $scope.tags.pop();
        }
      }
    }]
  }
}])

// input for entering new tag
.directive('taginput', [function() {

  // pressing enter or comma will make a new tag
  var ENTER = 13;
  var COMMA = 188;

  // pressing this while empty will delete a previous tag
  var DELETE = 8;
  return {
    restrict: 'A',
    require: '^tagpicker',
    link: function(scope, elem, attrs, tagsPicker) {

      scope.$watch(function() { return tagsPicker.isFocused(); }, function(isFocused) {
        if (isFocused) {
          elem[0].focus();
        }
      })
      
      elem.bind('keydown', function(e) {
        if (e.keyCode == ENTER || e.keyCode == COMMA) {
          e.preventDefault();
          scope.$apply(function() {
            tagsPicker.createNewTag();
          });
        }

        if (e.keyCode == DELETE && tagsPicker.isNewTag()) {
          scope.$apply(function() {
            e.preventDefault();
            tagsPicker.deleteLastTag();
          });
        }
      });

      elem.bind('focus', function(e) {
        // will already be applying if this element was focused
        // as a result of the tagsPicker:focused event
        if (!tagsPicker.isFocused()) {
          scope.$apply(function() {
            tagsPicker.setFocus(true);
          })
        }
      });

      elem.bind('blur', function(e) {
        if (tagsPicker.isFocused()) {
          scope.$apply(function() {
            tagsPicker.setFocus(false);
            tagsPicker.createNewTag();
          })
        }
      });
    }
  }
}])