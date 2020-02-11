/// <reference path="../typings/tsd.d.ts" />

(() => {
    'use strict';

    angular.module('pipShell', [
        'pipAdminShell.Templates',
        'pipShellService',
        'pipAdminShell',
        'pipAdminHomePanel'
    ]);
})();