'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Invoice = use('App/Models/Invoice')

/**
 * Resourceful controller for interacting with invoices
 */
class InvoiceController {
  /**
   * Show a list of all invoices.
   * GET invoices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Invoice.all()

    return response.status(200).json(model)
  }

  /**
   * Render a form to be used for creating a new invoice.
   * GET invoices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new invoice.
   * POST invoices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const model = await Invoice.create(request.all())
    return response.json(model)
  }

  /**
   * Display a single invoice.
   * GET invoices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model =await Invoices.find(params.id)

    return respons.json(model)
  }

  /**
   * Render a form to update an existing invoice.
   * GET invoices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update invoice details.
   * PUT or PATCH invoices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  
   async update ({ params, request, response }) {
    const model = await Invoice.find(params.id)
    
    model.code = request.input('code')
    model.price = request.input('price')

    await model.save()
  }

  /**
   * Delete a invoice with id.
   * DELETE invoices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const model = await Invoice.find(params.id)

    if (model.delete()) {
      return response.json ({
        message : 'Invoice has been deleted'
      })
    }
  }
}

module.exports = InvoiceController
