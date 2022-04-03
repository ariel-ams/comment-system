const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    // .sass('resources/sass/app.scss', 'public/css') ;
    // .postCss('resources/sass/app.scss', 'public/css', 
    .sass('resources/sass/app.scss', 'public/css', 
    [
        require("tailwindcss"),
    ]
    );

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
        // extensions:['.vue','.js']
    },
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style-loader!css-loader" }
    //     ]
    // }
});

mix.browserSync({
    proxy: '127.0.0.1:8000'
});