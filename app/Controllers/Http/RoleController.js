'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Role = use('App/Models/Role')

/**
 * Resourceful controller for interacting with rulejs
 */
class RuleJController {
  /**
   * Show a list of all rulejs.
   * GET rulejs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Role.all()
    
    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new rulej.
   * GET rulejs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    
  }

  /**
   * Create/save a new rulej.
   * POST rulejs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Role.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single rulej.
   * GET rulejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Role.find(params.id)
    return response.json(model)
  }

  /**
   * Render a form to update an existing rulej.
   * GET rulejs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update rulej details.
   * PUT or PATCH rulejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const model = await Role.find(params.id)

    model.id = requset.input('id')
    model.name = request.input('name')

    return response.json(model)
  }

  /**
   * Delete a rulej with id.
   * DELETE rulejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Role.find(params.id)

    if (model.delete()) {
      return response.json (
        {
          message : 'Role has been deleted'
        }
      )
    }
  }
}

module.exports = RuleJController
