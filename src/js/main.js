define(function () {

    'use strict';

    requirejs.config({

    	baseUrl: 'js/',

        paths: {
            'ionic': '../../components/ionic/release/js/ionic.bundle'
        },

        useStrict: true,

        shim: {
            'ionic': {
                exports: 'ionic'
            }
        }
    });

    require(['index']);
});