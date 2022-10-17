'use strict';

/**
 * Richtexttext.js controller
 *
 * @description: A set of functions called "actions" for managing `Richtexttext`.
 */

module.exports = {

  /**
   * Retrieve richtexttext records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.richtexttext.search(ctx.query);
    } else {
      return strapi.services.richtexttext.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a richtexttext record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.richtexttext.fetch(ctx.params);
  },

  /**
   * Count richtexttext records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.richtexttext.count(ctx.query, populate);
  },

  /**
   * Create a/an richtexttext record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.richtexttext.add(ctx.request.body);
  },

  /**
   * Update a/an richtexttext record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.richtexttext.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an richtexttext record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.richtexttext.remove(ctx.params);
  }
};
