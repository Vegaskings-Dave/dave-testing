'use strict';

/**
 * sportsbook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sportsbook.sportsbook');
