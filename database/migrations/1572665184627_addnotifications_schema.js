'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddnotificationsSchema extends Schema {
  up () {
    this.create('addnotifications', (table) => {
      table.increments()
      table.string('subject')
      table.string('description')
      table.integer('receiver_id')
      table.integer('sender_id')
      table.integer('status').defaultTo(0).comment('0:unread; 1:read')
      table.timestamps()
    })
  }

  down () {
    this.drop('addnotifications')
  }
}

module.exports = AddnotificationsSchema
