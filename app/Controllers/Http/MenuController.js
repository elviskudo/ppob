'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Menu = use('App/Models/Menu')

/**
 * Resourceful controller for interacting with menujs
 */
class MenuJController {
  /**
   * Show a list of all menujs.
   * GET menujs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Menu.all()

    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new menuj.
   * GET menujs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new menuj.
   * POST menujs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Menu.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single menuj.
   * GET menujs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Menu.find(params.id)
    return response.json(model)
  }

  /**
   * Render a form to update an existing menuj.
   * GET menujs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update menuj details.
   * PUT or PATCH menujs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const model = await Menu.find(params.id)
    
    model.access = request.input('access')
    model.sequence = request.input('sequence')
    model.url = requset.input('url')
    model.name = request.input('name')
  
    await model.save()
  }

  /**
   * Delete a menuj with id.
   * DELETE menujs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Menu.find(params.id)

    if (model.delete()){
      return response.json (
        {
          message : 'Menu has been deleted'
        })
  
    }
  }
}

module.exports = MenuJController
