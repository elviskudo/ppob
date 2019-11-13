'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Log =use('App/Models/Log')

/**
 * Resourceful controller for interacting with logs
 */
class LogController {
  /**
   * Show a list of all logs.
   * GET logs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Log.all()

    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new log.
   * GET logs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new log.
   * POST logs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Log.create(request.all())

    return response.json(model)
  }

  /**
   * Display a single log.
   * GET logs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Log.find(paramas.id)

    return response.json(model)
  }

  /**
   * Render a form to update an existing log.
   * GET logs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update log details.
   * PUT or PATCH logs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const model = await Log.find(params.id)

    model.event = request.input('event')
    model.description = request.input('description')

    await model.save()
    return response.json(model)
  }

  /**
   * Delete a log with id.
   * DELETE logs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Log.find(params.id)

    if (model.delete()) {
      return response.json ({
        message: 'Product has been deleted'
      })
    }
  }
}

module.exports = LogController
