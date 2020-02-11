(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.pip||(g.pip = {}));g=(g.admin||(g.admin = {}));g.shell = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
exports.HomePage = HomePage;
var HomePageItem = (function () {
    function HomePageItem() {
        this.ColorBadge = null;
        this.Count = 0;
        this.Params = null;
        this.Color = null;
        this.Icon = null;
    }
    return HomePageItem;
}());
exports.HomePageItem = HomePageItem;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminHomeBindings = {
    pages: "<pipPages",
    defaultIcon: "<?pipDefaultIcon",
    defaultColor: "<?pipDefaultColor"
};
var AdminHomeChanges = (function () {
    function AdminHomeChanges() {
    }
    return AdminHomeChanges;
}());
var AdminHomeController = (function () {
    AdminHomeController.$inject = ['$state'];
    function AdminHomeController($state) {
        this.$state = $state;
        this.defaultIcon = null;
        this.defaultColor = null;
    }
    AdminHomeController.prototype.$onInit = function () { };
    AdminHomeController.prototype.gotoDetails = function (item) {
        this.$state.go(item.State, item.Params);
    };
    return AdminHomeController;
}());
(function () {
    angular
        .module('pipAdminHomePanel', [
        'pipAdminShell.Templates'
    ])
        .component('pipAdminHomePanel', {
        bindings: AdminHomeBindings,
        templateUrl: 'home/HomePanel.html',
        controller: AdminHomeController,
        controllerAs: '$ctrl'
    });
})();
},{}],3:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('pipShell', [
        'pipAdminShell.Templates',
        'pipShellService',
        'pipAdminShell',
        'pipAdminHomePanel'
    ]);
})();
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminShellBindings = {};
var AdminShellChanges = (function () {
    function AdminShellChanges() {
    }
    return AdminShellChanges;
}());
var AdminShellController = (function () {
    AdminShellController.$inject = ['$state', 'pipShell'];
    function AdminShellController($state, pipShell) {
        this.$state = $state;
        this.pipShell = pipShell;
    }
    AdminShellController.prototype.showMain = function () {
        var _this = this;
        var find = true;
        if (this.$state.current.name == "")
            return false;
        this.pipShell.hideMain().forEach(function (element) {
            if (element == _this.$state.current.name) {
                find = false;
                return;
            }
        });
        return find;
    };
    AdminShellController.prototype.showBar = function () {
        var _this = this;
        var find = true;
        if (this.$state.current.name == "")
            return false;
        this.pipShell.hideBar.forEach(function (element) {
            if (element == _this.$state.current.name) {
                find = false;
                return;
            }
        });
        return find;
    };
    AdminShellController.prototype.showNav = function () {
        var _this = this;
        var find = true;
        if (this.$state.current.name == "")
            return false;
        this.pipShell.hideNav.forEach(function (element) {
            if (element == _this.$state.current.name) {
                find = false;
                return;
            }
        });
        return find;
    };
    return AdminShellController;
}());
(function () {
    angular
        .module('pipAdminShell', [
        'pipNav',
        'pipEntry',
        'pipAdminShell.Templates'
    ])
        .component('pipAdminShell', {
        bindings: AdminShellBindings,
        templateUrl: 'shell/Shell.html',
        controller: AdminShellController,
        controllerAs: '$ctrl'
    });
})();
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShellService = (function () {
    function ShellService(hideNav, hideBar) {
        this._hideNav = [];
        this._hideBar = [];
        this._hideNav = hideNav;
        this._hideBar = hideBar;
    }
    Object.defineProperty(ShellService.prototype, "hideBar", {
        get: function () {
            return this._hideBar;
        },
        set: function (value) {
            this._hideBar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellService.prototype, "hideNav", {
        get: function () {
            return this._hideNav;
        },
        set: function (value) {
            this._hideNav = value;
        },
        enumerable: true,
        configurable: true
    });
    ShellService.prototype.hideMain = function () {
        return _.intersection(this._hideBar, this._hideNav);
    };
    return ShellService;
}());
var ShellProvider = (function () {
    function ShellProvider() {
        this._hideNav = ['landing', 'signin', 'signup', 'post_signup', 'recover_password', 'reset_password'];
        this._hideBar = ['landing'];
    }
    Object.defineProperty(ShellProvider.prototype, "hideBar", {
        set: function (value) {
            this._hideBar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellProvider.prototype, "hideNav", {
        set: function (value) {
            this._hideNav = value;
        },
        enumerable: true,
        configurable: true
    });
    ShellProvider.prototype.addHideNav = function (value) {
        this._hideNav.push(value);
    };
    ShellProvider.prototype.addHideBar = function (value) {
        this._hideBar.push(value);
    };
    ShellProvider.prototype.$get = function () {
        "ngInject";
        if (this._service == null)
            this._service = new ShellService(this._hideNav, this._hideBar);
        return this._service;
    };
    return ShellProvider;
}());
angular
    .module('pipShellService', [])
    .provider('pipShell', ShellProvider);
},{}],7:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipAdminShell.Templates');
} catch (e) {
  module = angular.module('pipAdminShell.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/HomePanel.html',
    '<div class="pip-grouped-grid pip-grouped-grid" ng-class="{\'pip-grouped-grid-xs flex\': $ctrl.pipMedia(\'xs\')}" id="TileGroup"><div class="pip-grouped-grid pip-scroll" style="margin: 0 auto;"><div pip-focused="" pip-focused-opacity="true" pip-focused-tabindex="0"><div class="pip-group" ng-repeat="page in $ctrl.pages" ng-class="{\'pip-group-xs\': $ctrl.pipMedia(\'xs\'), \'pip-group-md\': $ctrl.pipMedia(\'sm\') || $ctrl.pipMedia(\'md\')}"><div class="pip-title-group" ng-if="page.Name">{{page.Name}}</div><div tabindex="-1" ng-repeat="item in page.Items" ng-click="$ctrl.gotoDetails(item)" class="pip-focusable pip-tile {{$ctrl.defaultColor}} {{item.Color}}" ng-class="{\'bg-color-8\' : !item.Color && !$ctrl.defaultColor , \'pip-tile-xs flex\': $ctrl.pipMedia(\'xs\')}"><div class="pip-badge {{item.ColorBadge}}" ng-show="item.Count > 0">{{item.Count}}</div><md-icon md-svg-icon="{{item.Icon}}" class="pip-grid-icon" ng-if="item.Icon"></md-icon><md-icon md-svg-icon="icons:connections" class="pip-grid-icon" ng-if="!item.Icon && !item.defaultIcon"></md-icon><md-icon md-svg-icon="{{item.defaultIcon}}" class="pip-grid-icon" ng-if="!item.Icon && item.defaultIcon"></md-icon><div class="text-overflow pip-text">{{::item.Name}}</div></div></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipAdminShell.Templates');
} catch (e) {
  module = angular.module('pipAdminShell.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('shell/Shell.html',
    '<pip-main class="pip-main"><pip-appbar ng-if="$ctrl.showBar()"><pip-nav-icon pip-appbar-part="icon"></pip-nav-icon><pip-breadcrumb xxxclass="flex" pip-appbar-part="title:breadcrumb"></pip-breadcrumb><img pip-appbar-part="logo" src="images/piplife_logo.svg" width="30"><div class="flex"></div><pip-search-bar pip-appbar-part="search"></pip-search-bar><pip-primary-actions class="flex-fixed" pip-appbar-part="actions:primary"></pip-primary-actions><pip-language-picker class="flex-fixed" languages="languages" pip-appbar-part="actions:language"></pip-language-picker><pip-secondary-actions class="flex-fixed" pip-appbar-part="menu"></pip-secondary-actions></pip-appbar><div class="layout-row" style="height: 100%;"><pip-sidenav ng-if="$ctrl.showNav()"><pip-nav-header pip-sidenav-part="user"></pip-nav-header><pip-nav-menu pip-sidenav-part="links"></pip-nav-menu></pip-sidenav><pip-main-body class="pip-main-body" ui-view=""></pip-main-body></div></pip-main>');
}]);
})();



},{}]},{},[7,1,2,3,4,5,6])(7)
});

//# sourceMappingURL=pip-admin-shell.js.map
