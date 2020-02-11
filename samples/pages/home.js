(function (angular, _) {
    'use strict';

    var thisModule = angular.module('appHome', []);

    thisModule.controller('appHomeController',
        function ($scope, $state) {
            $scope.pages = [{
                Name: "Sample Name",
                Items: [{
                    Name: 'Name1',
                    State: 'State1',
                    Color: 'bg-color-8'
                }, {
                    Name: 'Name2',
                    State: 'State2',
                    Color: 'bg-color-8'
                }, {
                    Name: 'Name3',
                    State: 'State3',
                    Color: 'bg-color-8'
                }]
            }, ];
        }
    );

})(window.angular, window._);
