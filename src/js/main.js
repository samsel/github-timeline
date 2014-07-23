define(function () {

    'use strict';

    requirejs.config({

    	baseUrl: 'js/',

        paths: {
            'angular': '../../components/angular/angular'
        },

        useStrict: true,

        shim: {
            'angular': {
                exports: 'angular'
            }
        }
    });

    require(['index']);
});