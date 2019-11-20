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
Route.get('/test',function () {
    return 'hi,dusun web'
})

Route.get('/namamu/:name', ({params}) => {
    return params.name
})


Route.get('/checkout',function () {
    return 'hi,ini checkout'
}
)

Route.post('api/jwt/login', 'AuthController.postLoginJwt').as('loginJwt')
Route.post('api/jwt/register', 'AuthController.postRegister')

Route.group(()=> {
    //auth route
    Route.post('api/jwt/refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt')
    Route.post('api/jwt/logout', 'AuthController.postLogoutJwt').as('loginJwt')
    Route.get('api/jwt/profile', 'AuthController.getProfileJwt').as('profileJwt')
    
    //other route
    Route.resource('users', 'UserController')
    Route.resource('products', 'ProductController')
    Route.resource('invoices', 'InvoiceController')
    Route.resource('logs', 'LogController')
    Route.resource('profiles','ProfileController')
    Route.resource('menus', 'MenuController')
    Route.resource('transactions', 'TransactionController')
    Route.resource('roles', 'RoleController')
    Route.resource('addnotifications', 'AddnotificationController')
}).middleware(['auth:jwt'])


