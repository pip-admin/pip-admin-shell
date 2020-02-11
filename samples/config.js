

(() => {
    'use strict';

    var thisModule = angular.module('pipSampleConfig',
        ['pipShell', 'pipEntry', 'pipLayout', 'pipNav', 'appLanding', 'appHome']); //'pipRest.State', 'pipSideNav', 'pipAppBar', 

    // Configure application services before start
    thisModule.config(
        function ($mdIconProvider, $urlRouterProvider, pipAuthStateProvider, $stateProvider, pipShellProvider,
            pipTranslateProvider, pipSideNavProvider, pipNavMenuProvider, pipRestProvider) { //pipSideNavProvider, pipAppBarProvider,  

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
            pipShellProvider.hideNav = ['landing', 'signin', 'signup', 'post_signup', 'recover_password', 'reset_password'];
            pipShellProvider.hideBar = ['landing'];

            pipNavMenuProvider.sections = [
                {
                    title: 'About',
                    icon: 'icons:goal',
                    links: [
                        { title: 'ABOUT_ME', url: '/about_me' }
                    ]
                },
                {
                    links: [
                        { title: 'SIGNOUT', url: '/signout' }
                    ]
                }
            ];
            pipSideNavProvider.part('user', true);
            pipSideNavProvider.part('links', true);
            pipSideNavProvider.type = 'sticky';

            $stateProvider.state('about_me', {
                url: '/about_me',
                auth: false,
                template: 'about_me'
            })

 $stateProvider.state('home', {
                url: '/home',
                auth: false,
                templateUrl: "pages/home.html",
                controller: 'appHomeController',
            })
             $stateProvider.state('landing', {
                url: '/',
                auth: false,
                templateUrl: "pages/landing.html",
                controller: 'appLandingController',
            })

            // Set global constants
            /*            
                        pipAppBarProvider.appTitleText('Entry Sample Application');
                        pipAppBarProvider.globalSecondaryActions([
                            {name: 'global.signout', title: 'SIGNOUT', state: 'signout'}
                        ]);
            */
            // Configure REST API
            // pipRestProvider.version('1.0');
            pipRestProvider.serverUrl = 'http://api.positron.stage.iquipsys.net:30001';
            $urlRouterProvider.otherwise(($injector, $location) => {
                return $location.$$path === '' ? '/' : '/about_me';
            });

            // String translations
            pipTranslateProvider.translations('en', {
                SAMPLE_APPLICATION: 'Sample application',
                ABOUT_ME: 'About Me',
                ABOUT_SYSTEM: 'About system',
                SIGNOUT: 'Sign out'
            });

            pipTranslateProvider.translations('ru', {
                SAMPLE_APPLICATION: 'Пример приложения',
                ABOUT_ME: 'Обо мне',
                ABOUT_SYSTEM: 'О системе',
                SIGNOUT: 'Выйти'
            });

            // Configure default states
            pipAuthStateProvider.unauthorizedState = 'signin';
            pipAuthStateProvider.authorizedState = 'about_me';

        }
    );


})();

