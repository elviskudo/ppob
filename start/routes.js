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
    return 'hi,dusun web'
})
Route.get('/namamu/:id', ({params}) => {
    return params.id
})
Route.get('/checkout', function () {
    return 'hi,ini checkout'
})

Route.resource('users', 'UserController')
Route.resource('products', 'ProductController')
Route.resource('invoices', 'InvoiceController')
Route.resource('logs', 'LogController')
Route.resource('profiles','ProfileController')
Route.resource('menus', 'MenuController')
Route.resource('transactions', 'TransactionController')
Route.resource('roles', 'RoleController')
Route.resource('addnotifications', 'AddnotificationController')