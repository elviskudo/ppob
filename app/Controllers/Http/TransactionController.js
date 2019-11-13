'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Transaction = use('App/Models/Transaction')

/**
 * Resourceful controller for interacting with transactionjs
 */
class TransactionJController {
  /**
   * Show a list of all transactionjs.
   * GET transactionjs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Transaction.all()
    return response.status(200).json(model)
  }


  /**
   * Render a form to be used for creating a new transactionj.
   * GET transactionjs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    
  }

  /**
   * Create/save a new transactionj.
   * POST transactionjs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Transaction.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single transactionj.
   * GET transactionjs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Transaction.find(params.id)
    return response.json(model)
  }

  /**
   * Render a form to update an existing transactionj.
   * GET transactionjs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update transactionj details.
   * PUT or PATCH transactionjs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const menu = await Transaction.find(params.id)

    model.user_id = request.input('user_id')
    model.price = request.input('price')
    model.product_id = request.input('product_id')
  
    await model.save()
  }

  /**
   * Delete a transactionj with id.
   * DELETE transactionjs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Transaction.find(params.id)

    if (model.delete()) {
      return response.json ({
        message : 'Transaction has been deleted'
      }
      )
    }
  }
}

module.exports = TransactionJController
