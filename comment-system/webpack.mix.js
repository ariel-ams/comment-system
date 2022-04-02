const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

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

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/sass/app.scss', 'public/css', [
        require("tailwindcss"),
      ]);

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        }
    }
});