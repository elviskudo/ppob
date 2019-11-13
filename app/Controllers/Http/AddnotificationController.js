'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Addnotification = use('App/Models/Addnotification')

/**
 * Resourceful controller for interacting with addnotifications
 */
class AddnotificationController {
  /**
   * Show a list of all addnotifications.
   * GET addnotifications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Addnotification.all()
    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new addnotification.
   * GET addnotifications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new addnotification.
   * POST addnotifications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Addnotification.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single addnotification.
   * GET addnotifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Addnotification.find(params.id)
    return response.json(model)
  }

  /**
   * Render a form to update an existing addnotification.
   * GET addnotifications/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update addnotification details.
   * PUT or PATCH addnotifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const model = await Addnotification.find(params.id)

    model.subject = request.input('subject')
    model.description = request.input('description')
    model.receiver_id = request.input('receiver_id')
    model.sender_id = request.input('sender_id')
    model.status = request.input(status)

    await model.save()
    
  }

  /**
   * Delete a addnotification with id.
   * DELETE addnotifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Addnotification.find(params.id)

    if (model.deleted()) {
      return response.json ({
        message : "Notification has been deleted"
      })
    }
  }
}

module.exports = AddnotificationController
