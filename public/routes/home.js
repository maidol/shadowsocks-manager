var app = angular.module('LoginApp', ['ngMaterial', 'ui.router', 'ngMessages']);

app.config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider
                .when('/', '/home/index')
                .otherwise('/home/index');

            $stateProvider
                .state('home', {
                    abstract: true,
                    url: '/home',
                    templateUrl: '/public/views/home/home.html',
                })

                .state('home.index', {
                    url: '/index',
                    controller: 'LoginController',
                    templateUrl: '/public/views/home/index.html'
                })
                .state('home.signupSuccess', {
                    url: '/info',
                    controller: 'SignupSuccessController',
                    templateUrl: '/public/views/home/signupSuccess.html'
                })
                .state('home.active', {
                    url: '/active/:activeKey',
                    controller: 'LoginActiveController',
                    templateUrl: '/public/views/home/active.html'
                })
                .state('home.resetPassword', {
                    url: '/resetPassword/:resetPasswordKey',
                    controller: 'ResetPasswordController',
                    templateUrl: '/public/views/home/resetPassword.html'
                })
            ;
        }
    ]
);