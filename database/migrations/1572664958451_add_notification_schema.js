'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNotificationSchema extends Schema {
  up () {
    this.create('notifications', (table) => {
      table.increments()
      table.string('subject')
      table.string('description')
      table.integer('receiver_id')
      table.integer('sender_id')
      table.integer('status').defaultTo(0).comment('0: unread; 1: read')
      table.timestamps()
    })
  }

  down () {
    this.drop('notifications')
  }
}

module.exports = AddNotificationSchema
