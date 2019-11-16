'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Profile = use('App/Models/Profile')

/**
 * Resourceful controller for interacting with profilejs
 */
class ProfileJController {
  /**
   * Show a list of all profilejs.
   * GET profilejs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Profile.all()
    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new profilej.
   * GET profilejs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new profilej.
   * POST profilejs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Profile.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single profilej.
   * GET profilejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Profile.find(params.id)
    return response.json(model)
  }

  /**
   * Render a form to update an existing profilej.
   * GET profilejs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update profilej details.
   * PUT or PATCH profilejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const model = await Profile.find(params.id)

    model.user_id = request.input('user_id')
    model.phone = request.input('phone')
    model.address = requset.input('address')
    model.city = request.input('city')
    model.region = request.input('region')
    model.country = requset.input('country')
  
    await model.save()
  }

  /**
   * Delete a profilej with id.
   * DELETE profilejs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Profile.find(params.id)
    if (model.delete()) {
      return response.json ({
        message: "Profile has been delete"
      })

    }
  }
}

module.exports = ProfileJController
