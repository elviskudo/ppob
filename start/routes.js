'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/test', function () {
    return 'hi dusun web'
})
Route.get('/namamu/:name', ({ params }) => {
    return params.name
})
Route.get('/details/:id', ({ params }) => {
    return params.id
})
Route.resource('users', 'UserController')
Route.resource('products', 'ProductController')